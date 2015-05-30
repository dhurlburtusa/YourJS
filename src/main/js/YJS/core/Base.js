
/**
 * @class YJS.core.Base
 * The base class of all objects created with the YJS class system.
 * 
 * @requires YJS.core.Class
 */
(function (GBL, YJS, nsPath) {

// @if STRICT
"use strict";
// @endif

var NS = YJS.ns(nsPath),
  YJS_core_Class = YJS.core.Class,
  YJS_core_Base;

NS.Base = YJS_core_Base = YJS_core_Class.createCtor('Base');

YJS_core_Class.extend(Object, YJS_core_Base);

YJS_core_Class.addMembers(YJS_core_Base, {
    /**
     * @template
     * @method _initialize
     * A template method called by the constructor that initializes the object.
     */
    _initialize: function () {
        this._initialize = YJS.notAgainFn;
    }
});

})(this, YJS, 'YJS.core');

// ##################################################################################################################
