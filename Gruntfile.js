
module.exports = function (grunt) {
  'use strict';

  var cfg = {}, src = {};

  cfg.pkg = grunt.file.readJSON('package.json');

  cfg.clean = ['dist', 'tmp'];

  cfg.jasmine = {
    /*
    NOTE: Currently, a lot of the specs depend on the debug version which will throw an error. Therefore, some of the other
    bundles can't be used.
    */
    bundle_all_debug: {
      src: ['tmp/js/<%= pkg.name.toLowerCase() %>-all-debug.js'],
      options: {
        specs: 'src/test/js/unit/spec/**/*Spec.js',
        helpers: 'src/test/js/unit/spec/**/*Helper.js'
      }
    }
  };

  cfg.jsduck = {
    bundle_all_debug: {
      src: 'tmp/js/<%= pkg.name.toLowerCase() %>-all-debug.js',
      dest: 'dist/api-docs/'
    }
  };

  cfg.jshint = {
    options: {
      curly: true,
      eqnull: true,
      es3: true,
      freeze: true,
      immed: true,
      latedef: true,
      maxstatements: 50,
      newcap: true,
      noarg: true,
      noempty: true,
      nonbsp: true,
      nonew: true,
      shadow: false,
      singleGroups: true,
      undef: true
    },
    build: {
      options: { node: true },
      src: 'Gruntfile.js'
    },
    bundle_all_debug: {
      options: {
        browser: true,
        globals: {
          YJS: false // False means readonly
        }
      },
      src: ['tmp/js/<%= pkg.name.toLowerCase() %>-all-debug.js']
    },
    polyfills: {
      options: { browser: true, freeze: false },
      src: 'src/polyfill/js/**/*.js'
    }
//    specs: ['src/test/js/unit/spec/YJS/**/*.js']
  };

  cfg.preprocess = {
    options: {
      context: {
        DEBUG: false,
        STRICT: true,
        SUPPORT_LTE_IE8: false,
        SUPPORT_LTE_IE9: false,
        SUPPORT_LTE_IE10: false,
        VERSION: '0.0.0'
      }
    },
    std: {
      files: {
        'tmp/js/<%= pkg.name.toLowerCase() %>-all.js': 'src/bundle/js/all.pp.js',
        'tmp/js/<%= pkg.name.toLowerCase() %>-core.js': 'src/bundle/js/core.pp.js',
        'tmp/js/<%= pkg.name.toLowerCase() %>-util.js': 'src/bundle/js/util.pp.js'
      }
    },
    debug: {
      options: {
        context: {
          DEBUG: true
        }
      },
      files: {
        'tmp/js/<%= pkg.name.toLowerCase() %>-all-debug.js': 'src/bundle/js/all.pp.js',
        'tmp/js/<%= pkg.name.toLowerCase() %>-core-debug.js': 'src/bundle/js/core.pp.js',
        'tmp/js/<%= pkg.name.toLowerCase() %>-util-debug.js': 'src/bundle/js/util.pp.js'
      }
    },
    polyfills: {
      options: {
        context: {
          SUPPORT_LTE_IE8: true,
          SUPPORT_LTE_IE9: true,
          SUPPORT_LTE_IE10: true
        }
      },
      files: {
        'tmp/js/<%= pkg.name.toLowerCase() %>-polyfills.js': 'src/bundle/js/polyfills.pp.js'
      }
    }
  };

  cfg.uglify = {
    options: {
      banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
    build: {
      files: {
        'tmp/js/<%= pkg.name.toLowerCase() %>-all.min.js': 'tmp/js/<%= pkg.name %>-all.js',
        'tmp/js/<%= pkg.name.toLowerCase() %>-core.min.js': 'tmp/js/<%= pkg.name %>-core.js',
        'tmp/js/<%= pkg.name.toLowerCase() %>-util.min.js': 'tmp/js/<%= pkg.name %>-util.js',
        'tmp/js/<%= pkg.name.toLowerCase() %>-all-debug.min.js': 'tmp/js/<%= pkg.name %>-all-debug.js',
        'tmp/js/<%= pkg.name.toLowerCase() %>-core-debug.min.js': 'tmp/js/<%= pkg.name %>-core-debug.js',
        'tmp/js/<%= pkg.name.toLowerCase() %>-util-debug.min.js': 'tmp/js/<%= pkg.name %>-util-debug.js',
        'tmp/js/<%= pkg.name.toLowerCase() %>-polyfills.min.js': 'tmp/js/<%= pkg.name %>-polyfills.js'
      }
    }
  };

  cfg.watch = {
    test: {
      files: ['src/bundle/js/**/*.js', 'src/main/js/**/*.js', 'src/polyfill/js/**/*.js', 'src/test/js/unit/spec/**/*Spec.js'],
      tasks: ['clean', 'test']
    }
  };

  grunt.config.init(cfg);

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jsduck');
  grunt.loadNpmTasks('grunt-preprocess');

  grunt.registerTask('default', 'Display Usage', function () {
    grunt.log.writeln('Use `grunt --help` to display list of tasks.');
  });

  grunt.registerTask('gen-docs', 'Generate API documentation.', function () {
    grunt.task.run('initialize');
    grunt.task.run('preprocess');
    grunt.task.run('jsduck');
  });

  grunt.registerTask('initialize', function () {
    grunt.file.mkdir('dist');
  });

  grunt.registerTask('generate-sources', function () {
    grunt.task.run('initialize');
    grunt.task.run('preprocess');
  });

  grunt.registerTask('process-sources', function () {
    grunt.task.run('generate-sources');
    grunt.task.run('uglify');
  });

  grunt.registerTask('generate-resources', function () {
    grunt.task.run('process-sources');
  });

  grunt.registerTask('process-resources', function () {
    grunt.task.run('generate-resources');
  });

  grunt.registerTask('generate-test-sources', function () {
    grunt.task.run('process-resources');
  });

  grunt.registerTask('process-test-sources', function () {
    grunt.task.run('generate-test-sources');
  });

  grunt.registerTask('generate-test-resources', function () {
    grunt.task.run('process-test-sources');
  });

  grunt.registerTask('process-test-resources', function () {
    grunt.task.run('generate-test-resources');
  });

  grunt.registerTask('test', 'Run unit tests.', function () {
    grunt.task.run('process-test-resources');
    grunt.task.run('jshint');
    grunt.task.run('jasmine');
  });

  grunt.registerTask('prepare-package', function () {
    grunt.task.run('test');
  });

  grunt.registerTask('package', 'Packages project artifacts.', function () {
    grunt.task.run('prepare-package');
    grunt.task.run('jsduck');
    // TODO: Package the project artifacts.
  });

  grunt.registerTask('pre-integration-test', function () {
    grunt.task.run('package');
  });

  grunt.registerTask('integration-test', function () {
    grunt.task.run('pre-integration-test');
  });

  grunt.registerTask('post-integration-test', function () {
    grunt.task.run('integration-test');
  });

  grunt.registerTask('verify', function () {
    grunt.task.run('post-integration-test');
  });

};
