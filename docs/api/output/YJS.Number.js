Ext.data.JsonP.YJS_Number({"tagname":"class","name":"YJS.Number","autodetected":{},"files":[{"filename":"yourjs-all-debug.js","href":"yourjs-all-debug.html#YJS-Number"}],"singleton":true,"members":[{"name":"itBeNaN","tagname":"method","owner":"YJS.Number","id":"method-itBeNaN","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-YJS.Number","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/yourjs-all-debug.html#YJS-Number' target='_blank'>yourjs-all-debug.js</a></div></pre><div class='doc-contents'><p>A set of number related methods.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-itBeNaN' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='YJS.Number'>YJS.Number</span><br/><a href='source/yourjs-all-debug.html#YJS-Number-method-itBeNaN' target='_blank' class='view-source'>view source</a></div><a href='#!/api/YJS.Number-method-itBeNaN' class='name expandable'>itBeNaN</a>( <span class='pre'>value</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Determines whether the value be the global NaN constant. ...</div><div class='long'><p>Determines whether the value be the global <code>NaN</code> constant. This function behaves differently than the native\n<code>isNaN</code> function. The native <code>isNaN</code> does a check on the input and determines whether it is not a number. It will\nreturn <code>true</code> for anything that is not a number. However, this function will only return <code>true</code> if the input is\n<code>NaN</code>.</p>\n\n<pre><code>isNaN(NaN); // true\n<a href=\"#!/api/YJS.Number-method-itBeNaN\" rel=\"YJS.Number-method-itBeNaN\" class=\"docClass\">YJS.Number.itBeNaN</a>(NaN); // true\nisNaN({}); // true\n<a href=\"#!/api/YJS.Number-method-itBeNaN\" rel=\"YJS.Number-method-itBeNaN\" class=\"docClass\">YJS.Number.itBeNaN</a>({}); // false\nisNaN(undefined); // true\n<a href=\"#!/api/YJS.Number-method-itBeNaN\" rel=\"YJS.Number-method-itBeNaN\" class=\"docClass\">YJS.Number.itBeNaN</a>(undefined); // false\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Mixed<div class='sub-desc'><p>The value to determine if it be <code>NaN</code>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p><code>true</code> if value be <code>NaN</code>, <code>false</code> otherwise.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});