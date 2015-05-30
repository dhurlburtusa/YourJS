# YourJS JS Library

The YourJS is a client-side JavaScript (JS) library. YourJS is not intended to compete with or be a replacement for
other JS libraries. It is designed to work well side-by-side with other JS libraries such as jQuery, Ext-JS, etc.
Some functionality may overlap with other frameworks. However, the goal is to keep this to a minimum.

## Features

* Namespace switching.

* Compact, low memory footprint.

* Well documented.

* Logging system.

* Class system.

## Project Setup

To build the library, you will need to have [nodejs][] and [npm][] installed. Before building for the first time you
will need to install all the development dependencies. The development dependencies are defined in `package.json`. See
the `devDependencies` section. This file is used by `npm`. Run the following command to install these dependencies.
This only needs to be done once until the dependencies change.

`npm install`

## Building

[GruntJS][grunt] is used to build the project. See [gruntjs.com][GruntGettingStartedExistingProj].

For a list of available tasks, run `grunt --help`.

Use `grunt clean package` to run the unit tests and build the API documentation.

### Maven-like Tasks

The `Gruntfile.js` has been designed to run tasks similar to [Maven][]'s [lifecycle][MavenLifecycle] goals. The
lifecycle goals are ordered. That is, when you run task `B` (`grunt B`), task `A` will be run first followed by task
`B`. If task `C` (`grunt C`) is run, then task `A` is run first. Then task `B` is run And finally task `C` is run.

## Runtime Dependencies

* Some polyfills when run on older browsers.

* Otherwise, vanilla JavaScript.

## Documentation

The API documentation of YourJS is handled by [JSDuck][]. It is built during the `package` grunt task. It can also be
built on its own using the `gen-docs` grunt task. Just run `grunt clean gen-docs`.

With packaging

    grunt clean package

With minimal tasks

    grunt clean gen-docs

The `clean` task is optional in the above commands but is highly recommended.

### Links

The following assumes you have a web-server effectively mapping the path /home/repos/git/github/YourJS to the root of this project.

http://localhost/home/repos/git/github/YourJS/dist/api-docs/

## Testing

Jasmine is used to provide unit testing via specifications.

Just run `grunt clean test` to run the unit tests.

### Links

The following assumes you have a web-server effectively mapping the path /home/repos/git/github/YourJS to the root of this project.

http://localhost/home/repos/git/github/YourJS/src/test/js/unit/spec/SpecRunner.html

## Code Idioms

YourJS is designed so that the default namespace (`YJS`) can be changed. This feature allows the client to change
the `YJS` namespace to a different namespace to avoid conflicts with other JS libraries using the same namespace.
The following idiom enables this ability because all the code will have a reference to the orignal object used as the
namespace. It doesn't have to look it back up in the global namespace at a later time.

    (function (GBL, YJS, nsPath) {
    ...
    })(this, YJS, 'YJS.core');

Check out https://github.com/rwaldron/idiomatic.js/ for ideas.

Classes use a property named `_` (single underscore) to house all protected variables. similarly, `__`
(double underscore) is used for private variables. See the example constructor below.

    MyClass = function (...) {
        var SELF = this;
        SELF._ = {
            protVar1: ...,
            protVarN: ...
        };
        SELF.__ = {
            privVar1: ...,
            privVarN: ...
        };
    };

Another idiom can be seen in the above example. Note the `SELF` local variable. It is a reference to `this`. This
comes in handy when a closure to `this` is needed. Also, `SELF` is compressible by JavaScript compression tools where
`this` (a keyword) is not compressible. In the above example, using `SELF` would not help with compression. It usually
starts to save space when `SELF` is used three or more times.

## Keyword Expansion

Using keyword expansion like is done with CVS and SVN is not commonly done with Git repositories. So, no repository
keyword placeholders will be found in the code.

## Code Conventions

### Indentation and Tabs

See `.editorconfig` file.

### `undefined` vs `null`

`undefined` is not an acceptable value. If a function/method is expected to return a value and the value is unknown,
not applicable, etc, then `null` should be returned instead of `undefined`.

One reason for this is that in the JSON format, `null` is an acceptable value but `undefined` is not.

### Variable Names

* Use `SELF` to refer to `this`. E.g. `var SELF = this; SELF.method();`

* Use `cfg` for a constructor's single configuration argument.

## TODOs

* When using Jasmine 2.x, be sure to use toThrowError instead of toThrow if a specific error is expected.

* Update the Jasmine unit specs to be able to run with the non-debug bundles.

* Find a tool to ensure all files honor the .editorconfig file.

* Research to see if there is a way to easily determine if you are in strict mode.
  
* JSDuck Related:

  - Config JSDuck

    + Figure out how to open the generated doc in a browser.

    + Research how to setup a guide.
    
    + Research how to add a custom header. Would like to have a way to navigate back to other YourJS pages.

  - Make @dependency a custom JSDuck tag.

  - Make @immutable a custom JSDuck tag and add it to the @class comment.

  - Make @scopeless/@thisless a custom JSDuck tag that indicates the function is designed such that it doesn't matter what
    execution context it is run in since no use of `this` will be used.

* Make map files for JS and CSS bundles. Note: Es-shim is doing it. See what they are doing to generate them.

* Research alternatives to what saucelabs provides.

* Consider using saucelabs to test code in various environments.

* Search for unit tests on native JavaScript objects.

  - This can be an easy way to confirm that the native objects work as expected after polyfills have been added to fill
    in any missing functionality.
  
  - I didn't find any. It might be a good idea to create a project with these unit tests in place.

* Check out https://github.com/rwaldron/idiomatic.js/ for ideas.

* Checkout other JS libraries on Github and see what other build tools they use.

* Briefly document how to install [nodejs][].

* Briefly document how to install [npm][].

  - On Windows
  
    + May need to add %USERPROFILE%\AppData\Roaming\npm to your user account PATH variable.

* Create a data conversion package. This will likely be used by the validation package to coerse values to the correct
  data type.

* Create an assertion package. This can be used to allow assertion of correct values passed to constructors, functions,
  or methods. Not sure how much different this will be compared to a validation package.

* Create a validation package.

  - Will depend on a data conversion/coersion package.

* Create a formatting package.

* Decide on a license. Update package.json. See [license list](https://spdx.org/licenses/).

  - Add a LICENSE file to the root also.
  
  - Add something like the following to package.json:
  
    "licenses": [
      {
        "type": "MIT",
        "url": "https://github.com/dpashkevich/grunt-jsduck/blob/master/LICENSE-MIT"
      }
    ],

[grunt]: http://gruntjs.com/
[GruntGettingStartedExistingProj]: http://gruntjs.com/getting-started#working-with-an-existing-grunt-project
[JSDuck]: https://github.com/senchalabs/jsduck/
[Maven]: http://maven.apache.org/
[MavenLifecycle]: http://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html
[nodejs]: http://nodejs.org/
[npm]: https://www.npmjs.com/
