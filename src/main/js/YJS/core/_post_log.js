/*
This is code to be run after the YJS.log namespace has been loaded.
*/
(function (GBL, YJS) {

var YJS_core_Class = YJS.core.Class,
    YJS_core = YJS.core,
    YJS_log_Factory = YJS.log.Factory;

YJS_core_Class.setConst(YJS, '$LOG', YJS_log_Factory.get('YJS'));
YJS_core_Class.setConst(YJS_core, '$LOG', YJS_log_Factory.get('YJS.core'));
YJS_core_Class.setConst(YJS_core.Core, '$LOG', YJS_log_Factory.get('YJS.core.Core'));
YJS_core_Class.setConst(YJS_core.Class, '$LOG', YJS_log_Factory.get('YJS.core.Class'));
YJS_core_Class.setConst(YJS_core.ClassManager, '$LOG', YJS_log_Factory.get('YJS.core.ClassManager'));

})(this, YJS);
