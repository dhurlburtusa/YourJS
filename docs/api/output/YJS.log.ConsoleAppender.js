Ext.data.JsonP.YJS_log_ConsoleAppender({"tagname":"class","name":"YJS.log.ConsoleAppender","autodetected":{},"files":[{"filename":"yourjs-all-debug.js","href":"yourjs-all-debug.html#YJS-log-ConsoleAppender"}],"extends":"YJS.log.Appender","uses":["YJS.log.Level"],"members":[{"name":"INSTANCE","tagname":"property","owner":"YJS.log.ConsoleAppender","id":"static-property-INSTANCE","meta":{"static":true}},{"name":"constructor","tagname":"method","owner":"YJS.log.ConsoleAppender","id":"method-constructor","meta":{}},{"name":"append","tagname":"method","owner":"YJS.log.ConsoleAppender","id":"method-append","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-YJS.log.ConsoleAppender","short_doc":"A ConsoleAppender is a YJS.log.Appender that appends (aka logs) messages to the web-console provided by modern web\nbr...","component":false,"superclasses":["YJS.log.Appender"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/YJS.log.Appender' rel='YJS.log.Appender' class='docClass'>YJS.log.Appender</a><div class='subclass '><strong>YJS.log.ConsoleAppender</strong></div></div><h4>Uses</h4><div class='dependency'><a href='#!/api/YJS.log.Level' rel='YJS.log.Level' class='docClass'>YJS.log.Level</a></div><h4>Files</h4><div class='dependency'><a href='source/yourjs-all-debug.html#YJS-log-ConsoleAppender' target='_blank'>yourjs-all-debug.js</a></div></pre><div class='doc-contents'><p>A ConsoleAppender is a <a href=\"#!/api/YJS.log.Appender\" rel=\"YJS.log.Appender\" class=\"docClass\">YJS.log.Appender</a> that appends (aka logs) messages to the web-console provided by modern web\nbrowsers. For older web browsers, any logged messages are effectively ignored and will not cause errors when the\nweb-console \"API\" is not available.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static properties</h3><div id='static-property-INSTANCE' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='YJS.log.ConsoleAppender'>YJS.log.ConsoleAppender</span><br/><a href='source/yourjs-all-debug.html#YJS-log-ConsoleAppender-static-property-INSTANCE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/YJS.log.ConsoleAppender-static-property-INSTANCE' class='name expandable'>INSTANCE</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>The pre-instantiated singleton instance of a ConsoleAppender. ...</div><div class='long'><p>The pre-instantiated singleton instance of a ConsoleAppender. (No reason to keep multiple instances around.)</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='YJS.log.ConsoleAppender'>YJS.log.ConsoleAppender</span><br/><a href='source/yourjs-all-debug.html#YJS-log-ConsoleAppender-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/YJS.log.ConsoleAppender-method-constructor' class='name expandable'>YJS.log.ConsoleAppender</a>( <span class='pre'></span> ) : <a href=\"#!/api/YJS.log.ConsoleAppender\" rel=\"YJS.log.ConsoleAppender\" class=\"docClass\">YJS.log.ConsoleAppender</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a new web-console appender. ...</div><div class='long'><p>Creates a new web-console appender.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/YJS.log.ConsoleAppender\" rel=\"YJS.log.ConsoleAppender\" class=\"docClass\">YJS.log.ConsoleAppender</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-append' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='YJS.log.ConsoleAppender'>YJS.log.ConsoleAppender</span><br/><a href='source/yourjs-all-debug.html#YJS-log-ConsoleAppender-method-append' target='_blank' class='view-source'>view source</a></div><a href='#!/api/YJS.log.ConsoleAppender-method-append' class='name expandable'>append</a>( <span class='pre'>logEntry</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Appends/logs the message to the web-console at the most appropriate level. ...</div><div class='long'><p>Appends/logs the message to the web-console at the most appropriate level.</p>\n\n<ul>\n<li><a href=\"#!/api/YJS.log.Level-property-DEBUG\" rel=\"YJS.log.Level-property-DEBUG\" class=\"docClass\">YJS.log.Level.DEBUG</a> logs to <code>console.debug</code>.</li>\n<li><a href=\"#!/api/YJS.log.Level-property-INFO\" rel=\"YJS.log.Level-property-INFO\" class=\"docClass\">YJS.log.Level.INFO</a> logs to <code>console.info</code>.</li>\n<li><a href=\"#!/api/YJS.log.Level-property-LOG\" rel=\"YJS.log.Level-property-LOG\" class=\"docClass\">YJS.log.Level.LOG</a> logs to <code>console.log</code>.</li>\n<li><a href=\"#!/api/YJS.log.Level-property-WARN\" rel=\"YJS.log.Level-property-WARN\" class=\"docClass\">YJS.log.Level.WARN</a> logs to <code>console.warn</code>.</li>\n<li><a href=\"#!/api/YJS.log.Level-property-ERROR\" rel=\"YJS.log.Level-property-ERROR\" class=\"docClass\">YJS.log.Level.ERROR</a> logs to <code>console.error</code>.</li>\n<li><a href=\"#!/api/YJS.log.Level-property-FATAL\" rel=\"YJS.log.Level-property-FATAL\" class=\"docClass\">YJS.log.Level.FATAL</a> logs to <code>console.error</code>.</li>\n</ul>\n\n\n<p>Note: YJS.log.LogEntry#getMessage is not used to get the merged message before logging to the web-console. Many\nimplementations of the web-console allow logging with a template and substitution data. So, this native functionality\nhas been maintained.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>logEntry</span> : <a href=\"#!/api/YJS.log.Entry\" rel=\"YJS.log.Entry\" class=\"docClass\">YJS.log.Entry</a><div class='sub-desc'><p>The log entry to append.</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/YJS.log.Appender-method-append\" rel=\"YJS.log.Appender-method-append\" class=\"docClass\">YJS.log.Appender.append</a></p></div></div></div></div></div></div></div>","meta":{}});