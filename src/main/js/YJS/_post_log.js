/*
This is code to be run after the YJS.log namespace has been loaded.
*/
(function (GBL, YJS) {

var YJS_core_Class = YJS.core.Class,
    YJS_core = YJS.core,
    YJS_log_Factory = YJS.log.Factory;

YJS_core_Class.setConst(YJS.Array, '$LOG', YJS_log_Factory.get('YJS.Array'));
YJS_core_Class.setConst(YJS.Boolean, '$LOG', YJS_log_Factory.get('YJS.Boolean'));
YJS_core_Class.setConst(YJS.Number, '$LOG', YJS_log_Factory.get('YJS.Number'));
YJS_core_Class.setConst(YJS.String, '$LOG', YJS_log_Factory.get('YJS.String'));
YJS_core_Class.setConst(YJS.Utils, '$LOG', YJS_log_Factory.get('YJS.Utils'));

delete YJS.__.tmp.LOG;

})(this, YJS);
