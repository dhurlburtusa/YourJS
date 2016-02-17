# Logging

The logging system in [YourJS][] is runtime configurable and it can log to more than just the console.  It is
loosely based on [SLF4J][] and [Log4j][].

All modern browsers and server-side JavaScript engines allow one to log to a console.

    console.log('A log message.');

However, the built-in console's capabilities are very limited.  It has no built-in way to filter messages logged at
specific log-levels.  It has no built-in way to choose different log-levels at runtime.  And, the messages will only
be logged to the console instead of other destinations.  Fortunately, the YourJS logging system provides a solution to
all these limitations.

## Simple Use Case

If your project currently doesn't need more capabilities than the built-in console, you can still log all messages to
the console by using the pre-instantiated, root [Log][YJS_LOG].

* Instead of `console.debug("...")` use `YJS.LOG.debug("...")`.
* Instead of `console.info("...")` use `YJS.LOG.info("...")`.
* Instead of `console.log("...")` use `YJS.LOG.log("...")`.
* Instead of `console.warn("...")` use `YJS.LOG.warn("...")`.
* Instead of `console.error("...")` use `YJS.LOG.error("...")`.

By using an instance of a [Log][YJS_log_Log] in place of the console, your code will be ready to start using a custom
configuration.  This could, for example, provide you the ability to only see `warn`-level logs and above in the
production environment.

## Named Logs

Before adding in custom configuration, consider using named logs for more configurability.  Let's say you would like
to log an `info` level message each time you do an AJAX call and you also want the ability later on to turn off all
messages except the ones used for AJAX calls (possibly for debugging purposes).  You can simply make a log called
`Ajax`.  Named logs are created using the [log factory][YJS_log_Factory].  Here is a way how we can achieve this goal.

    var AJAX_LOG = YJS.log.Factory.get('Ajax'),
        url = "http://www.google.com",
        now = new Date();
    ...
    AJAX_LOG.info("Making an AJAX call to %s at %s", url, now);
    jQuery.ajax(url, {
        complete: function () {
            AJAX_LOG.log("AJAX call sent to %s at %s has completed.", url, now);
            ...
        },
        ...
    });

Named logs don't have to be simple names.  They can contain an hierarchy of simple names.  To declare an hierarchy of
simple names, simply separate the simple names with a dot (`.`).  For example, `'Foo.bar.Qux'` could be used as the
first parameter to `YJS.log.Factory#get`.  It is recommended to follow the same namespace hierarchy/class hierarchy as
in your own JavaScript code. For example, let's say Acme, Inc uses `ACME` for their top-level namespace in their
<abbr title="JavaScript">JS</abbr> code.  Also, let's say they have a `Foo` project which contains a `Bar` class that
performs various functions.  In the `Bar` class, you might see the following.

    var BAR_LOG = YJS.log.Factory.get('ACME.foo.Bar');
    ...
    BAR_LOG.log("A message from ACME.foo.Bar.");

By using hierachical names, you will now be able to configure logging specifically for `ACME.foo.Bar`.  You will also
be able to have special configuration for all logs in the `ACME.foo` namespace or for all logs in the `ACME`
namespace.

## Appenders

The destination of a log is handled by an [Appender][YJS_log_Appender] implementation.  The
[ConsoleAppender][YJS_log_ConsoleAppender] sends messages to the built-in console.  An
[ArrayAppender][YJS_log_ArrayAppender] stores all messages in a JS array.

Messages don't have to be destined for a single appender.  Any given message could be configured to go to multiple
appenders.  Appenders are used by [Loggers][YJS_log_Logger].  The logger is where you configure multiple appenders for
handling a message.

## Loggers

[Loggers][YJS_log_Logger] use a `pattern` configuration to determine which messages they will handle.  They can
further filter the messages by level.  Any messages that a logger handles are given to a set of appenders for sending
the message along to its final destination.

The following shows a logger configured to handle messages logged by any log matching the `ACME.foo` pattern.  It also
limits messages to the `log`-level or higher.

    var acmeFooLogger = new YJS.log.Logger({
        appenders: [YJS.log.ConsoleAppender.INSTANCE, YJS.log.ArrayAppender.INSTANCE],
        minLevel: YJS.log.Level.LOG,
        pattern: 'ACME.foo'
    });
    ...
    YJS.LOG.warn("Will not be handled by the acmeFooLogger because the pattern doesn't match.  This is a root level message.");
    YJS.log.Factory.get('ACME').warn("Also will not be handled by the acmeFooLogger because the pattern doesn't match.");
    YJS.log.Factory.get('ACME.foo').log("This will be handled by the acmeFooLogger!");
    YJS.log.Factory.get('ACME.foo').warn("This will be handled by the acmeFooLogger!");
    YJS.log.Factory.get('ACME.foo').error("This will be handled by the acmeFooLogger!");
    YJS.log.Factory.get('ACME.foo.Bar').log("This will also be handled by the acmeFooLogger.");
    YJS.log.Factory.get('ACME.foo.Bar').warn("This will also be handled by the acmeFooLogger.");
    YJS.log.Factory.get('ACME.foo.Bar').error("This will also be handled by the acmeFooLogger.");
    YJS.log.Factory.get('ACME.foo.Bar').fatal("This will also be handled by the acmeFooLogger.");
    YJS.log.Factory.get('ACME.foo.Bar').info("Will not be handled by the acmeFooLogger because the level is too low.");

## Configuration

The YourJS logging system is configurable.

### Default Configuration

The default configuration will log all messages at any level to the built-in console.

### Custom Configuration

Custom configurations are built using a [ConfigBuilder][YJS_log_ConfigBuilder].  A custom configuration will need one
or more [Loggers][YJS_log_Logger] which in turn each need one or more [Appenders][YJS_log_Appender].

The following is an example of creating a custom configuration.

    var acmeLogger, acmeFooLogger, acmeArrayAppender, consoleAppender,
        rootLogger, yjsAppender, yjsLogger;
    
    acmeArrayAppender = new YJS.log.ArrayAppender({ maxEntries: 10000 });
    consoleAppender = YJS.log.ConsoleAppender.INSTANCE;
    yjsAppender = new YJS.log.ArrayAppender({ maxEntries: 1000 });
    
    yjsLogger = new YJS.log.Logger({
        appenders: yjsAppender,
        minLevel: YJS.log.Level.WARN,
        pattern: 'YJS'
    });
    
    acmeFooLogger = new YJS.log.Logger({
        appenders: [acmeArrayAppender, consoleAppender],
        minLevel: YJS.log.Level.INFO,
        pattern: 'ACME.foo'
    });
    
    acmeLogger = new YJS.log.Logger({
        appenders: [acmeArrayAppender, consoleAppender],
        minLevel: YJS.log.Level.LOG,
        pattern: 'ACME'
    });
    
    rootLogger = new YJS.log.Logger({
        appenders: [consoleAppender],
        minLevel: YJS.log.Level.WARN,
        pattern: '.'
    });
    
    var cb = new YJS.log.ConfigBuilder();
    cb.addLoggers(yjsLogger);
    cb.addLoggers([acmeFooLogger, acmeLogger]);
    cb.addLoggers(rootLogger);
    
    var config = cb.build();
    
To activate this new configuration, just call [setConfig on Log][YJS_log_Log_setConfig].

    // The following logs to console due to default configuration.
    YJS.log.Factory.get('ACME').debug("...");
    // Start using custom configuration.
    YJS.log.Log.setConfig(config);
    // Doesn't log because level is too low.
    YJS.log.Factory.get('ACME').debug("...");
    // The following logs to the acmeArrayAppender and the console appender.
    YJS.log.Factory.get('ACME').log("...");

### Runtime Switches

Configurations can be switched at runtime.  Switching configurations at runtime uses the same method as is used to
activate a custom configuration.  Let's assume we already built two custom configurations and let's assume no custom
configurations have yet been activated.  That means the default configuration is currently activated.

    // To activate custom config 1
    YJS.log.Log.setConfig(customConfig1);
    ...
    // To activate custom config 2
    YJS.log.Log.setConfig(customConfig2);
    ...
    // To re-activate the default config
    YJS.log.Log.setConfig(YJS.log.Config.DEFAULT);

That's all there is to switching configurations.

[Log4j]: http://logging.apache.org/log4j/
[SLF4J]: http://www.slf4j.org/
[YJS_LOG]: http://dhurlburtusa.github.io/YourJS/docs/api/#!/api/YJS-property-LOG
[YJS_log_Appender]: http://dhurlburtusa.github.io/YourJS/docs/api/#!/api/YJS.log.Appender
[YJS_log_ArrayAppender]: http://dhurlburtusa.github.io/YourJS/docs/api/#!/api/YJS.log.ArrayAppender
[YJS_log_ConfigBuilder]: http://dhurlburtusa.github.io/YourJS/docs/api/#!/api/YJS.log.ConfigBuilder
[YJS_log_ConsoleAppender]: http://dhurlburtusa.github.io/YourJS/docs/api/#!/api/YJS.log.ConsoleAppender
[YJS_log_Factory]: http://dhurlburtusa.github.io/YourJS/docs/api/#!/api/YJS.log.Factory
[YJS_log_Log]: http://dhurlburtusa.github.io/YourJS/docs/api/#!/api/YJS.log.Log
[YJS_log_Log_setConfig]: http://dhurlburtusa.github.io/YourJS/docs/api/#!/api/YJS.log.Log-static-method-setConfig
[YJS_log_Logger]: http://dhurlburtusa.github.io/YourJS/docs/api/#!/api/YJS.log.Logger
[YourJS]: https://github.com/dhurlburtusa/YourJS
