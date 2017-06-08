Ext.data.JsonP.logging({"guide":"<h1 id='logging-section-logging'>Logging</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/logging-section-simple-use-case'>Simple Use Case</a></li>\n<li><a href='#!/guide/logging-section-named-logs'>Named Logs</a></li>\n<li><a href='#!/guide/logging-section-appenders'>Appenders</a></li>\n<li><a href='#!/guide/logging-section-loggers'>Loggers</a></li>\n<li><a href='#!/guide/logging-section-configuration'>Configuration</a></li>\n</ol>\n</div>\n\n<p>The logging system in <a href=\"https://github.com/dhurlburtusa/YourJS\">YourJS</a> is runtime configurable and it can log to more than just the console.  It is\nloosely based on <a href=\"http://www.slf4j.org/\">SLF4J</a> and <a href=\"http://logging.apache.org/log4j/\">Log4j</a>.</p>\n\n<p>All modern browsers and server-side JavaScript engines allow one to log to a console.</p>\n\n<pre><code>console.log('A log message.');\n</code></pre>\n\n<p>However, the built-in console's capabilities are very limited.  It has no built-in way to filter messages logged at\nspecific log-levels.  It has no built-in way to choose different log-levels at runtime.  And, the messages will only\nbe logged to the console instead of other destinations.  Fortunately, the YourJS logging system provides a solution to\nall these limitations.</p>\n\n<h2 id='logging-section-simple-use-case'>Simple Use Case</h2>\n\n<p>If your project currently doesn't need more capabilities than the built-in console, you can still log all messages to\nthe console by using the pre-instantiated, root <a href=\"http://dhurlburtusa.github.io/YourJS/docs/api/#!/api/YJS-property-LOG\">Log</a>.</p>\n\n<ul>\n<li>Instead of <code>console.debug(\"...\")</code> use <code>YJS.LOG.debug(\"...\")</code>.</li>\n<li>Instead of <code>console.info(\"...\")</code> use <code>YJS.LOG.info(\"...\")</code>.</li>\n<li>Instead of <code>console.log(\"...\")</code> use <code>YJS.LOG.log(\"...\")</code>.</li>\n<li>Instead of <code>console.warn(\"...\")</code> use <code>YJS.LOG.warn(\"...\")</code>.</li>\n<li>Instead of <code>console.error(\"...\")</code> use <code>YJS.LOG.error(\"...\")</code>.</li>\n</ul>\n\n\n<p>By using an instance of a <a href=\"http://dhurlburtusa.github.io/YourJS/docs/api/#!/api/YJS.log.Log\">Log</a> in place of the console, your code will be ready to start using a custom\nconfiguration.  This could, for example, provide you the ability to only see <code>warn</code>-level logs and above in the\nproduction environment.</p>\n\n<h2 id='logging-section-named-logs'>Named Logs</h2>\n\n<p>Before adding in custom configuration, consider using named logs for more configurability.  Let's say you would like\nto log an <code>info</code> level message each time you do an AJAX call and you also want the ability later on to turn off all\nmessages except the ones used for AJAX calls (possibly for debugging purposes).  You can simply make a log called\n<code>Ajax</code>.  Named logs are created using the <a href=\"http://dhurlburtusa.github.io/YourJS/docs/api/#!/api/YJS.log.Factory\">log factory</a>.  Here is a way how we can achieve this goal.</p>\n\n<pre><code>var AJAX_LOG = <a href=\"#!/api/YJS.log.Factory-method-get\" rel=\"YJS.log.Factory-method-get\" class=\"docClass\">YJS.log.Factory.get</a>('Ajax'),\n    url = \"http://www.google.com\",\n    now = new Date();\n...\nAJAX_LOG.info(\"Making an AJAX call to %s at %s\", url, now);\njQuery.ajax(url, {\n    complete: function () {\n        AJAX_LOG.log(\"AJAX call sent to %s at %s has completed.\", url, now);\n        ...\n    },\n    ...\n});\n</code></pre>\n\n<p>Named logs don't have to be simple names.  They can contain an hierarchy of simple names.  To declare an hierarchy of\nsimple names, simply separate the simple names with a dot (<code>.</code>).  For example, <code>'Foo.bar.Qux'</code> could be used as the\nfirst parameter to <code><a href=\"#!/api/YJS.log.Factory-method-get\" rel=\"YJS.log.Factory-method-get\" class=\"docClass\">YJS.log.Factory.get</a></code>.  It is recommended to follow the same namespace hierarchy/class hierarchy as\nin your own JavaScript code. For example, let's say Acme, Inc uses <code>ACME</code> for their top-level namespace in their\n<abbr title=\"JavaScript\">JS</abbr> code.  Also, let's say they have a <code>Foo</code> project which contains a <code>Bar</code> class that\nperforms various functions.  In the <code>Bar</code> class, you might see the following.</p>\n\n<pre><code>var BAR_LOG = <a href=\"#!/api/YJS.log.Factory-method-get\" rel=\"YJS.log.Factory-method-get\" class=\"docClass\">YJS.log.Factory.get</a>('ACME.foo.Bar');\n...\nBAR_LOG.log(\"A message from ACME.foo.Bar.\");\n</code></pre>\n\n<p>By using hierachical names, you will now be able to configure logging specifically for <code>ACME.foo.Bar</code>.  You will also\nbe able to have special configuration for all logs in the <code>ACME.foo</code> namespace or for all logs in the <code>ACME</code>\nnamespace.</p>\n\n<h2 id='logging-section-appenders'>Appenders</h2>\n\n<p>The destination of a log is handled by an <a href=\"http://dhurlburtusa.github.io/YourJS/docs/api/#!/api/YJS.log.Appender\">Appender</a> implementation.  The\n<a href=\"http://dhurlburtusa.github.io/YourJS/docs/api/#!/api/YJS.log.ConsoleAppender\">ConsoleAppender</a> sends messages to the built-in console.  An\n<a href=\"http://dhurlburtusa.github.io/YourJS/docs/api/#!/api/YJS.log.ArrayAppender\">ArrayAppender</a> stores all messages in a JS array.</p>\n\n<p>Messages don't have to be destined for a single appender.  Any given message could be configured to go to multiple\nappenders.  Appenders are used by <a href=\"http://dhurlburtusa.github.io/YourJS/docs/api/#!/api/YJS.log.Logger\">Loggers</a>.  The logger is where you configure multiple appenders for\nhandling a message.</p>\n\n<h2 id='logging-section-loggers'>Loggers</h2>\n\n<p><a href=\"http://dhurlburtusa.github.io/YourJS/docs/api/#!/api/YJS.log.Logger\">Loggers</a> use a <code>pattern</code> configuration to determine which messages they will handle.  They can\nfurther filter the messages by level.  Any messages that a logger handles are given to a set of appenders for sending\nthe message along to its final destination.</p>\n\n<p>The following shows a logger configured to handle messages logged by any log matching the <code>ACME.foo</code> pattern.  It also\nlimits messages to the <code>log</code>-level or higher.</p>\n\n<pre><code>var acmeFooLogger = new <a href=\"#!/api/YJS.log.Logger\" rel=\"YJS.log.Logger\" class=\"docClass\">YJS.log.Logger</a>({\n    appenders: [<a href=\"#!/api/YJS.log.ConsoleAppender-static-property-INSTANCE\" rel=\"YJS.log.ConsoleAppender-static-property-INSTANCE\" class=\"docClass\">YJS.log.ConsoleAppender.INSTANCE</a>, <a href=\"#!/api/YJS.log.ArrayAppender-static-property-INSTANCE\" rel=\"YJS.log.ArrayAppender-static-property-INSTANCE\" class=\"docClass\">YJS.log.ArrayAppender.INSTANCE</a>],\n    minLevel: <a href=\"#!/api/YJS.log.Level-property-LOG\" rel=\"YJS.log.Level-property-LOG\" class=\"docClass\">YJS.log.Level.LOG</a>,\n    pattern: 'ACME.foo'\n});\n...\nYJS.LOG.warn(\"Will not be handled by the acmeFooLogger because the pattern doesn't match.  This is a root level message.\");\n<a href=\"#!/api/YJS.log.Factory-method-get\" rel=\"YJS.log.Factory-method-get\" class=\"docClass\">YJS.log.Factory.get</a>('ACME').warn(\"Also will not be handled by the acmeFooLogger because the pattern doesn't match.\");\n<a href=\"#!/api/YJS.log.Factory-method-get\" rel=\"YJS.log.Factory-method-get\" class=\"docClass\">YJS.log.Factory.get</a>('ACME.foo').log(\"This will be handled by the acmeFooLogger!\");\n<a href=\"#!/api/YJS.log.Factory-method-get\" rel=\"YJS.log.Factory-method-get\" class=\"docClass\">YJS.log.Factory.get</a>('ACME.foo').warn(\"This will be handled by the acmeFooLogger!\");\n<a href=\"#!/api/YJS.log.Factory-method-get\" rel=\"YJS.log.Factory-method-get\" class=\"docClass\">YJS.log.Factory.get</a>('ACME.foo').error(\"This will be handled by the acmeFooLogger!\");\n<a href=\"#!/api/YJS.log.Factory-method-get\" rel=\"YJS.log.Factory-method-get\" class=\"docClass\">YJS.log.Factory.get</a>('ACME.foo.Bar').log(\"This will also be handled by the acmeFooLogger.\");\n<a href=\"#!/api/YJS.log.Factory-method-get\" rel=\"YJS.log.Factory-method-get\" class=\"docClass\">YJS.log.Factory.get</a>('ACME.foo.Bar').warn(\"This will also be handled by the acmeFooLogger.\");\n<a href=\"#!/api/YJS.log.Factory-method-get\" rel=\"YJS.log.Factory-method-get\" class=\"docClass\">YJS.log.Factory.get</a>('ACME.foo.Bar').error(\"This will also be handled by the acmeFooLogger.\");\n<a href=\"#!/api/YJS.log.Factory-method-get\" rel=\"YJS.log.Factory-method-get\" class=\"docClass\">YJS.log.Factory.get</a>('ACME.foo.Bar').fatal(\"This will also be handled by the acmeFooLogger.\");\n<a href=\"#!/api/YJS.log.Factory-method-get\" rel=\"YJS.log.Factory-method-get\" class=\"docClass\">YJS.log.Factory.get</a>('ACME.foo.Bar').info(\"Will not be handled by the acmeFooLogger because the level is too low.\");\n</code></pre>\n\n<h2 id='logging-section-configuration'>Configuration</h2>\n\n<p>The YourJS logging system is configurable.</p>\n\n<h3 id='logging-section-default-configuration'>Default Configuration</h3>\n\n<p>The default configuration will log all messages at any level to the built-in console.</p>\n\n<h3 id='logging-section-custom-configuration'>Custom Configuration</h3>\n\n<p>Custom configurations are built using a <a href=\"http://dhurlburtusa.github.io/YourJS/docs/api/#!/api/YJS.log.ConfigBuilder\">ConfigBuilder</a>.  A custom configuration will need one\nor more <a href=\"http://dhurlburtusa.github.io/YourJS/docs/api/#!/api/YJS.log.Logger\">Loggers</a> which in turn each need one or more <a href=\"http://dhurlburtusa.github.io/YourJS/docs/api/#!/api/YJS.log.Appender\">Appenders</a>.</p>\n\n<p>The following is an example of creating a custom configuration.</p>\n\n<pre><code>var acmeLogger, acmeFooLogger, acmeArrayAppender, consoleAppender,\n    rootLogger, yjsAppender, yjsLogger;\n\nacmeArrayAppender = new <a href=\"#!/api/YJS.log.ArrayAppender\" rel=\"YJS.log.ArrayAppender\" class=\"docClass\">YJS.log.ArrayAppender</a>({ maxEntries: 10000 });\nconsoleAppender = <a href=\"#!/api/YJS.log.ConsoleAppender-static-property-INSTANCE\" rel=\"YJS.log.ConsoleAppender-static-property-INSTANCE\" class=\"docClass\">YJS.log.ConsoleAppender.INSTANCE</a>;\nyjsAppender = new <a href=\"#!/api/YJS.log.ArrayAppender\" rel=\"YJS.log.ArrayAppender\" class=\"docClass\">YJS.log.ArrayAppender</a>({ maxEntries: 1000 });\n\nyjsLogger = new <a href=\"#!/api/YJS.log.Logger\" rel=\"YJS.log.Logger\" class=\"docClass\">YJS.log.Logger</a>({\n    appenders: yjsAppender,\n    minLevel: <a href=\"#!/api/YJS.log.Level-property-WARN\" rel=\"YJS.log.Level-property-WARN\" class=\"docClass\">YJS.log.Level.WARN</a>,\n    pattern: 'YJS'\n});\n\nacmeFooLogger = new <a href=\"#!/api/YJS.log.Logger\" rel=\"YJS.log.Logger\" class=\"docClass\">YJS.log.Logger</a>({\n    appenders: [acmeArrayAppender, consoleAppender],\n    minLevel: <a href=\"#!/api/YJS.log.Level-property-INFO\" rel=\"YJS.log.Level-property-INFO\" class=\"docClass\">YJS.log.Level.INFO</a>,\n    pattern: 'ACME.foo'\n});\n\nacmeLogger = new <a href=\"#!/api/YJS.log.Logger\" rel=\"YJS.log.Logger\" class=\"docClass\">YJS.log.Logger</a>({\n    appenders: [acmeArrayAppender, consoleAppender],\n    minLevel: <a href=\"#!/api/YJS.log.Level-property-LOG\" rel=\"YJS.log.Level-property-LOG\" class=\"docClass\">YJS.log.Level.LOG</a>,\n    pattern: 'ACME'\n});\n\nrootLogger = new <a href=\"#!/api/YJS.log.Logger\" rel=\"YJS.log.Logger\" class=\"docClass\">YJS.log.Logger</a>({\n    appenders: [consoleAppender],\n    minLevel: <a href=\"#!/api/YJS.log.Level-property-WARN\" rel=\"YJS.log.Level-property-WARN\" class=\"docClass\">YJS.log.Level.WARN</a>,\n    pattern: '.'\n});\n\nvar cb = new <a href=\"#!/api/YJS.log.ConfigBuilder\" rel=\"YJS.log.ConfigBuilder\" class=\"docClass\">YJS.log.ConfigBuilder</a>();\ncb.addLoggers(yjsLogger);\ncb.addLoggers([acmeFooLogger, acmeLogger]);\ncb.addLoggers(rootLogger);\n\nvar config = cb.build();\n</code></pre>\n\n<p>To activate this new configuration, just call <a href=\"http://dhurlburtusa.github.io/YourJS/docs/api/#!/api/YJS.log.Log-static-method-setConfig\">setConfig on Log</a>.</p>\n\n<pre><code>// The following logs to console due to default configuration.\n<a href=\"#!/api/YJS.log.Factory-method-get\" rel=\"YJS.log.Factory-method-get\" class=\"docClass\">YJS.log.Factory.get</a>('ACME').debug(\"...\");\n// Start using custom configuration.\n<a href=\"#!/api/YJS.log.Log-static-method-setConfig\" rel=\"YJS.log.Log-static-method-setConfig\" class=\"docClass\">YJS.log.Log.setConfig</a>(config);\n// Doesn't log because level is too low.\n<a href=\"#!/api/YJS.log.Factory-method-get\" rel=\"YJS.log.Factory-method-get\" class=\"docClass\">YJS.log.Factory.get</a>('ACME').debug(\"...\");\n// The following logs to the acmeArrayAppender and the console appender.\n<a href=\"#!/api/YJS.log.Factory-method-get\" rel=\"YJS.log.Factory-method-get\" class=\"docClass\">YJS.log.Factory.get</a>('ACME').log(\"...\");\n</code></pre>\n\n<h3 id='logging-section-runtime-switches'>Runtime Switches</h3>\n\n<p>Configurations can be switched at runtime.  Switching configurations at runtime uses the same method as is used to\nactivate a custom configuration.  Let's assume we already built two custom configurations and let's assume no custom\nconfigurations have yet been activated.  That means the default configuration is currently activated.</p>\n\n<pre><code>// To activate custom config 1\n<a href=\"#!/api/YJS.log.Log-static-method-setConfig\" rel=\"YJS.log.Log-static-method-setConfig\" class=\"docClass\">YJS.log.Log.setConfig</a>(customConfig1);\n...\n// To activate custom config 2\n<a href=\"#!/api/YJS.log.Log-static-method-setConfig\" rel=\"YJS.log.Log-static-method-setConfig\" class=\"docClass\">YJS.log.Log.setConfig</a>(customConfig2);\n...\n// To re-activate the default config\n<a href=\"#!/api/YJS.log.Log-static-method-setConfig\" rel=\"YJS.log.Log-static-method-setConfig\" class=\"docClass\">YJS.log.Log.setConfig</a>(<a href=\"#!/api/YJS.log.Config-static-property-DEFAULT\" rel=\"YJS.log.Config-static-property-DEFAULT\" class=\"docClass\">YJS.log.Config.DEFAULT</a>);\n</code></pre>\n\n<p>That's all there is to switching configurations.</p>\n","title":"The Logging System"});