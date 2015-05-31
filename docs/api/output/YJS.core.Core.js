Ext.data.JsonP.YJS_core_Core({"tagname":"class","name":"YJS.core.Core","autodetected":{},"files":[{"filename":"yourjs-all-debug.js","href":"yourjs-all-debug.html#YJS-core-Core"}],"members":[{"name":"aliasNs","tagname":"method","owner":"YJS.core.Core","id":"method-aliasNs","meta":{}},{"name":"changeNs","tagname":"method","owner":"YJS.core.Core","id":"method-changeNs","meta":{}},{"name":"restoreOriginalNs","tagname":"method","owner":"YJS.core.Core","id":"method-restoreOriginalNs","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-YJS.core.Core","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/yourjs-all-debug.html#YJS-core-Core' target='_blank'>yourjs-all-debug.js</a></div></pre><div class='doc-contents'><p>Enumeration of core methods.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-aliasNs' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='YJS.core.Core'>YJS.core.Core</span><br/><a href='source/yourjs-all-debug.html#YJS-core-Core-method-aliasNs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/YJS.core.Core-method-aliasNs' class='name expandable'>aliasNs</a>( <span class='pre'>newTopNs</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Allows this library to be referenced via a different top-level namespace. ...</div><div class='long'><p>Allows this library to be referenced via a different top-level namespace.</p>\n\n<pre><code>var YJSNs = YJS;\n<a href=\"#!/api/YJS.core.Core-method-aliasNs\" rel=\"YJS.core.Core-method-aliasNs\" class=\"docClass\">YJS.core.Core.aliasNs</a>('MyLibrary');\n(YJS === MyLibrary); // true\n(YJSNs === MyLibrary); // true\n(typeof YJS === 'undefined'); // false\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newTopNs</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The new namespace to use. Must not be the empty string. Must not contain dots.</p>\n</div></li></ul></div></div></div><div id='method-changeNs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='YJS.core.Core'>YJS.core.Core</span><br/><a href='source/yourjs-all-debug.html#YJS-core-Core-method-changeNs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/YJS.core.Core-method-changeNs' class='name expandable'>changeNs</a>( <span class='pre'>newTopNs</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Allows this library to be referenced via a different top-level namespace. ...</div><div class='long'><p>Allows this library to be referenced via a different top-level namespace. Referencing the library through <code>YJS</code> will\nno longer work after a call to this method. However, any <a href=\"#!/api/YJS.core.Core-method-aliasNs\" rel=\"YJS.core.Core-method-aliasNs\" class=\"docClass\">aliases</a> created will still work.</p>\n\n<pre><code>var YJSNs = YJS;\n<a href=\"#!/api/YJS.core.Core-method-changeNs\" rel=\"YJS.core.Core-method-changeNs\" class=\"docClass\">YJS.core.Core.changeNs</a>('MyLibrary');\n(YJSNs === MyLibrary); // true\n(typeof YJS === 'undefined'); // true\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newTopNs</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The new namespace to use. Must not be the empty string. Must not contain dots.</p>\n</div></li></ul></div></div></div><div id='method-restoreOriginalNs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='YJS.core.Core'>YJS.core.Core</span><br/><a href='source/yourjs-all-debug.html#YJS-core-Core-method-restoreOriginalNs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/YJS.core.Core-method-restoreOriginalNs' class='name expandable'>restoreOriginalNs</a>( <span class='pre'>newTopNs</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Allows the original YJS namespace to be restored after a call to changeNs. ...</div><div class='long'><p>Allows the original <code>YJS</code> namespace to be restored after a call to <a href=\"#!/api/YJS.core.Core-method-changeNs\" rel=\"YJS.core.Core-method-changeNs\" class=\"docClass\">changeNs</a>.</p>\n\n<pre><code>var YJSNs = YJS;\n<a href=\"#!/api/YJS.core.Core-method-changeNs\" rel=\"YJS.core.Core-method-changeNs\" class=\"docClass\">YJS.core.Core.changeNs</a>('MyLibrary');\n(YJSNs === MyLibrary); // true\n(typeof YJS === 'undefined'); // true\n// The restoreOrginalNs function will need to be called through the new\n// namespace or any existing aliases like\n// <a href=\"#!/api/YJS.core.Core-method-restoreOriginalNs\" rel=\"YJS.core.Core-method-restoreOriginalNs\" class=\"docClass\">YJS.core.Core.restoreOriginalNs</a>();\nMyLibrary.core.Core.restoreOriginalNs();\n(typeof YJS === 'undefined'); // false\n(YJS === MyLibrary); // true\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newTopNs</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The new namespace to use. Must not be the empty string. Must not contain dots.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});