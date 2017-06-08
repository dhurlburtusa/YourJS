Ext.data.JsonP.YJS_log_Entry({"tagname":"class","name":"YJS.log.Entry","autodetected":{},"files":[{"filename":"yourjs-all-debug.js","href":"yourjs-all-debug.html#YJS-log-Entry"}],"requires":["YJS.log.Level"],"uses":["YJS.String"],"members":[{"name":"data","tagname":"property","owner":"YJS.log.Entry","id":"property-data","meta":{"readonly":true}},{"name":"level","tagname":"property","owner":"YJS.log.Entry","id":"property-level","meta":{"readonly":true}},{"name":"template","tagname":"property","owner":"YJS.log.Entry","id":"property-template","meta":{"readonly":true}},{"name":"constructor","tagname":"method","owner":"YJS.log.Entry","id":"method-constructor","meta":{}},{"name":"getMessage","tagname":"method","owner":"YJS.log.Entry","id":"method-getMessage","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-YJS.log.Entry","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Requires</h4><div class='dependency'><a href='#!/api/YJS.log.Level' rel='YJS.log.Level' class='docClass'>YJS.log.Level</a></div><h4>Uses</h4><div class='dependency'><a href='#!/api/YJS.String' rel='YJS.String' class='docClass'>YJS.String</a></div><h4>Files</h4><div class='dependency'><a href='source/yourjs-all-debug.html#YJS-log-Entry' target='_blank'>yourjs-all-debug.js</a></div></pre><div class='doc-contents'><p>A log-entry represents a message and the level at which it is to be logged.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-data' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='YJS.log.Entry'>YJS.log.Entry</span><br/><a href='source/yourjs-all-debug.html#YJS-log-Entry-property-data' target='_blank' class='view-source'>view source</a></div><a href='#!/api/YJS.log.Entry-property-data' class='name expandable'>data</a> : Mixed[]<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>The data to merge with the template and/or to append to the end of the message.</p>\n</div><div class='long'><p>The data to merge with the template and/or to append to the end of the message.</p>\n</div></div></div><div id='property-level' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='YJS.log.Entry'>YJS.log.Entry</span><br/><a href='source/yourjs-all-debug.html#YJS-log-Entry-property-level' target='_blank' class='view-source'>view source</a></div><a href='#!/api/YJS.log.Entry-property-level' class='name expandable'>level</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>The level the message is to be logged at.</p>\n</div><div class='long'><p>The level the message is to be logged at.</p>\n</div></div></div><div id='property-template' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='YJS.log.Entry'>YJS.log.Entry</span><br/><a href='source/yourjs-all-debug.html#YJS-log-Entry-property-template' target='_blank' class='view-source'>view source</a></div><a href='#!/api/YJS.log.Entry-property-template' class='name expandable'>template</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>The message template with optional placeholders that is to be logged.</p>\n</div><div class='long'><p>The message template with optional placeholders that is to be logged.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='YJS.log.Entry'>YJS.log.Entry</span><br/><a href='source/yourjs-all-debug.html#YJS-log-Entry-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/YJS.log.Entry-method-constructor' class='name expandable'>YJS.log.Entry</a>( <span class='pre'>[cfgs]</span> ) : <a href=\"#!/api/YJS.log.Entry\" rel=\"YJS.log.Entry\" class=\"docClass\">YJS.log.Entry</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates an immutable log-entry with the specified level, message template, and data. ...</div><div class='long'><p>Creates an immutable log-entry with the specified level, message template, and data.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfgs</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'>\n<ul><li><span class='pre'>data</span> : Mixed[] (optional)<div class='sub-desc'><p>The data to merge with the template and/or to append to the end of the message.</p>\n<p>Defaults to: <code>[]</code></p></div></li><li><span class='pre'>level</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The level at which to log the message. See <a href=\"#!/api/YJS.log.Level\" rel=\"YJS.log.Level\" class=\"docClass\">YJS.log.Level</a> for\n  pre-defined log-level values. Other levels beside the pre-defined are allowed too.</p>\n<p>Defaults to: <code>YJS.log.Level.DEBUG</code></p></div></li><li><span class='pre'>template</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>The message template with optional placeholders (aka substitution strings) that\n  is used to help form the log message.</p>\n<p>Defaults to: <code>&quot;&quot;</code></p></div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/YJS.log.Entry\" rel=\"YJS.log.Entry\" class=\"docClass\">YJS.log.Entry</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMessage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='YJS.log.Entry'>YJS.log.Entry</span><br/><a href='source/yourjs-all-debug.html#YJS-log-Entry-method-getMessage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/YJS.log.Entry-method-getMessage' class='name expandable'>getMessage</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the message formed from merging the message template with the data. ...</div><div class='long'><p>Returns the message formed from merging the message template with the data. It uses <a href=\"#!/api/YJS.String-method-printf\" rel=\"YJS.String-method-printf\" class=\"docClass\">YJS.String.printf</a> to do the\nresolution.</p>\n</div></div></div></div></div></div></div>","meta":{}});