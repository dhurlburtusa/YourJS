Ext.data.JsonP.YJS_log_ArrayAppender({"tagname":"class","name":"YJS.log.ArrayAppender","autodetected":{},"files":[{"filename":"yourjs-all-debug.js","href":"yourjs-all-debug.html#YJS-log-ArrayAppender"}],"extends":"YJS.log.Appender","uses":["YJS.log.Entry"],"members":[{"name":"INSTANCE","tagname":"property","owner":"YJS.log.ArrayAppender","id":"static-property-INSTANCE","meta":{"static":true}},{"name":"constructor","tagname":"method","owner":"YJS.log.ArrayAppender","id":"method-constructor","meta":{}},{"name":"_removeExtraneousEntries","tagname":"method","owner":"YJS.log.ArrayAppender","id":"method-_removeExtraneousEntries","meta":{"protected":true}},{"name":"append","tagname":"method","owner":"YJS.log.ArrayAppender","id":"method-append","meta":{}},{"name":"getLogEntries","tagname":"method","owner":"YJS.log.ArrayAppender","id":"method-getLogEntries","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-YJS.log.ArrayAppender","component":false,"superclasses":["YJS.log.Appender"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/YJS.log.Appender' rel='YJS.log.Appender' class='docClass'>YJS.log.Appender</a><div class='subclass '><strong>YJS.log.ArrayAppender</strong></div></div><h4>Uses</h4><div class='dependency'><a href='#!/api/YJS.log.Entry' rel='YJS.log.Entry' class='docClass'>YJS.log.Entry</a></div><h4>Files</h4><div class='dependency'><a href='source/yourjs-all-debug.html#YJS-log-ArrayAppender' target='_blank'>yourjs-all-debug.js</a></div></pre><div class='doc-contents'><p>An ArrayAppender is a <a href=\"#!/api/YJS.log.Appender\" rel=\"YJS.log.Appender\" class=\"docClass\">YJS.log.Appender</a> that appends (aka logs) messages to an array.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static properties</h3><div id='static-property-INSTANCE' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='YJS.log.ArrayAppender'>YJS.log.ArrayAppender</span><br/><a href='source/yourjs-all-debug.html#YJS-log-ArrayAppender-static-property-INSTANCE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/YJS.log.ArrayAppender-static-property-INSTANCE' class='name expandable'>INSTANCE</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>The pre-instantiated singleton instance of an ArrayAppender with the default configuration. ...</div><div class='long'><p>The pre-instantiated singleton instance of an ArrayAppender with the default configuration. (No reason to keep\nmultiple instances around.)</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='YJS.log.ArrayAppender'>YJS.log.ArrayAppender</span><br/><a href='source/yourjs-all-debug.html#YJS-log-ArrayAppender-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/YJS.log.ArrayAppender-method-constructor' class='name expandable'>YJS.log.ArrayAppender</a>( <span class='pre'>cfg</span> ) : <a href=\"#!/api/YJS.log.ArrayAppender\" rel=\"YJS.log.ArrayAppender\" class=\"docClass\">YJS.log.ArrayAppender</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a new array appender. ...</div><div class='long'><p>Creates a new array appender.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n<ul><li><span class='pre'>maxEntries</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'>\n<p>Defaults to: <code>5000</code></p></div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/YJS.log.ArrayAppender\" rel=\"YJS.log.ArrayAppender\" class=\"docClass\">YJS.log.ArrayAppender</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_removeExtraneousEntries' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='YJS.log.ArrayAppender'>YJS.log.ArrayAppender</span><br/><a href='source/yourjs-all-debug.html#YJS-log-ArrayAppender-method-_removeExtraneousEntries' target='_blank' class='view-source'>view source</a></div><a href='#!/api/YJS.log.ArrayAppender-method-_removeExtraneousEntries' class='name expandable'>_removeExtraneousEntries</a>( <span class='pre'></span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Remove any extraneous log entries. ...</div><div class='long'><p>Remove any extraneous log entries. The oldest entries are removed first.</p>\n</div></div></div><div id='method-append' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='YJS.log.ArrayAppender'>YJS.log.ArrayAppender</span><br/><a href='source/yourjs-all-debug.html#YJS-log-ArrayAppender-method-append' target='_blank' class='view-source'>view source</a></div><a href='#!/api/YJS.log.ArrayAppender-method-append' class='name expandable'>append</a>( <span class='pre'>logEntry</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Appends the log entry to the array. ...</div><div class='long'><p>Appends the log entry to the array.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>logEntry</span> : <a href=\"#!/api/YJS.log.Entry\" rel=\"YJS.log.Entry\" class=\"docClass\">YJS.log.Entry</a><div class='sub-desc'><p>The log entry to append.</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/YJS.log.Appender-method-append\" rel=\"YJS.log.Appender-method-append\" class=\"docClass\">YJS.log.Appender.append</a></p></div></div></div><div id='method-getLogEntries' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='YJS.log.ArrayAppender'>YJS.log.ArrayAppender</span><br/><a href='source/yourjs-all-debug.html#YJS-log-ArrayAppender-method-getLogEntries' target='_blank' class='view-source'>view source</a></div><a href='#!/api/YJS.log.ArrayAppender-method-getLogEntries' class='name expandable'>getLogEntries</a>( <span class='pre'></span> ) : <a href=\"#!/api/YJS.log.Entry\" rel=\"YJS.log.Entry\" class=\"docClass\">YJS.log.Entry</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/YJS.log.Entry\" rel=\"YJS.log.Entry\" class=\"docClass\">YJS.log.Entry</a>[]</span><div class='sub-desc'><p>A reference to the current log entries.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});