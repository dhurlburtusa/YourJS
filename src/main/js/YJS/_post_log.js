/*
This is code to be run after the YJS.log namespace has been loaded.
*/
(function (GBL, YJS) {

var YJS_core_Class = YJS.core.Class,
    YJS_core = YJS.core,
    YJS_log_Factory = YJS.log.Factory;

YJS_core_Class.setConst(YJS.Array, '$LOG', YJS_log_Factory.get('YJS.Array'));
YJS_core_Class.setConst(YJS.Boolean, '$LOG', YJS_log_Factory.get('YJS.Boolean'));
YJS_core_Class.setConst(YJS.Date, '$LOG', YJS_log_Factory.get('YJS.Date'));
YJS_core_Class.setConst(YJS.Integer, '$LOG', YJS_log_Factory.get('YJS.Integer'));
YJS_core_Class.setConst(YJS.Math, '$LOG', YJS_log_Factory.get('YJS.Math'));
YJS_core_Class.setConst(YJS.Number, '$LOG', YJS_log_Factory.get('YJS.Number'));
YJS_core_Class.setConst(YJS.Object, '$LOG', YJS_log_Factory.get('YJS.Object'));
YJS_core_Class.setConst(YJS.RegExp, '$LOG', YJS_log_Factory.get('YJS.RegExp'));
YJS_core_Class.setConst(YJS.String, '$LOG', YJS_log_Factory.get('YJS.String'));
YJS_core_Class.setConst(YJS.Utils, '$LOG', YJS_log_Factory.get('YJS.Utils'));

delete YJS.__.tmp.LOG;

})(this, YJS);
