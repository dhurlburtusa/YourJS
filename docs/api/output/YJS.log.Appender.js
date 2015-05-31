Ext.data.JsonP.YJS_log_Appender({"tagname":"class","name":"YJS.log.Appender","autodetected":{},"files":[{"filename":"yourjs-all-debug.js","href":"yourjs-all-debug.html#YJS-log-Appender"}],"abstract":true,"uses":["YJS.log.Entry"],"members":[{"name":"append","tagname":"method","owner":"YJS.log.Appender","id":"method-append","meta":{"abstract":true}}],"alternateClassNames":[],"aliases":{},"id":"class-YJS.log.Appender","short_doc":"The base class all appender subclasses should inherit from. ...","component":false,"superclasses":[],"subclasses":["YJS.log.ArrayAppender","YJS.log.ConsoleAppender"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/YJS.log.ArrayAppender' rel='YJS.log.ArrayAppender' class='docClass'>YJS.log.ArrayAppender</a></div><div class='dependency'><a href='#!/api/YJS.log.ConsoleAppender' rel='YJS.log.ConsoleAppender' class='docClass'>YJS.log.ConsoleAppender</a></div><h4>Uses</h4><div class='dependency'><a href='#!/api/YJS.log.Entry' rel='YJS.log.Entry' class='docClass'>YJS.log.Entry</a></div><h4>Files</h4><div class='dependency'><a href='source/yourjs-all-debug.html#YJS-log-Appender' target='_blank'>yourjs-all-debug.js</a></div></pre><div class='doc-contents'><p>The base class all appender subclasses should inherit from.</p>\n\n<p>Different implementations may handle the appending (aka logging) of the messages differently. Some implementations\nmay only handle messages at certain levels, ignoring the rest. Some may format the message even further. Some may\naggregate the messages. Some may buffer up the messages until a certain threshold is meet. While others may simply\nignore all messages.</p>\n\n<p>Each implementation SHOULD document how it handles the messages it appends.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-append' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='YJS.log.Appender'>YJS.log.Appender</span><br/><a href='source/yourjs-all-debug.html#YJS-log-Appender-method-append' target='_blank' class='view-source'>view source</a></div><a href='#!/api/YJS.log.Appender-method-append' class='name expandable'>append</a>( <span class='pre'>logEntry</span> )<span class=\"signature\"><span class='abstract' >abstract</span></span></div><div class='description'><div class='short'>Appends/handles the log entry. ...</div><div class='long'><p>Appends/handles the log entry.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>logEntry</span> : <a href=\"#!/api/YJS.log.Entry\" rel=\"YJS.log.Entry\" class=\"docClass\">YJS.log.Entry</a><div class='sub-desc'><p>The log entry to append.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"abstract":true}});