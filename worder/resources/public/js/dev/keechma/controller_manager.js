// Compiled by ClojureScript 1.10.597 {}
goog.provide('keechma.controller_manager');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('keechma.util');
goog.require('keechma.controller');
goog.require('keechma.reporter');
keechma.controller_manager.send_command_to = (function keechma$controller_manager$send_command_to(var_args){
var G__25756 = arguments.length;
switch (G__25756) {
case 4:
return keechma.controller_manager.send_command_to.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return keechma.controller_manager.send_command_to.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(keechma.controller_manager.send_command_to.cljs$core$IFn$_invoke$arity$4 = (function (reporter,controller,command_name,args){
return keechma.controller_manager.send_command_to.call(null,reporter,controller,command_name,args,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),command_name))?keechma.reporter.cmd_info.call(null):null));
}));

(keechma.controller_manager.send_command_to.cljs$core$IFn$_invoke$arity$5 = (function (reporter,controller,command_name,args,origin){
var cmd_info = keechma.reporter.with_origin.call(null,origin);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),command_name)){
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(controller),command_name], null),args,origin,new cljs.core.Keyword(null,"info","info",-317069002));

reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(controller),command_name,args,cmd_info,new cljs.core.Keyword(null,"info","info",-317069002));
} else {
reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(controller),command_name,args,cmd_info,new cljs.core.Keyword(null,"info","info",-317069002));
}

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(controller),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_name,args,cmd_info], null));

return controller;
}));

(keechma.controller_manager.send_command_to.cljs$lang$maxFixedArity = 5);

keechma.controller_manager.route_command_to_controller = (function keechma$controller_manager$route_command_to_controller(reporter,controllers,command_name,command_args,cmd_info){
var vec__25758 = command_name;
var controller_name = cljs.core.nth.call(null,vec__25758,(0),null);
var command_name__$1 = cljs.core.nth.call(null,vec__25758,(1),null);
var controller = cljs.core.get.call(null,controllers,controller_name);
if(cljs.core.truth_(controller)){
return keechma.controller_manager.send_command_to.call(null,reporter,controller,command_name__$1,command_args,cmd_info);
} else {
if(cljs.core.truth_(goog.DEBUG)){
return console.warn("Trying to send command to a controller that is not running",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"controller","controller",2013778659),controller_name,new cljs.core.Keyword(null,"command","command",-894540724),command_name__$1,new cljs.core.Keyword(null,"args","args",1315556576),command_args], null));
} else {
return null;
}
}
});
keechma.controller_manager.report_running_controllers = (function keechma$controller_manager$report_running_controllers(app_db_atom){
var running_controllers = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)], null));
return cljs.core.reduce.call(null,(function (acc,p__25761){
var vec__25762 = p__25761;
var k = cljs.core.nth.call(null,vec__25762,(0),null);
var v = cljs.core.nth.call(null,vec__25762,(1),null);
return cljs.core.assoc.call(null,acc,k,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(v));
}),cljs.core.PersistentArrayMap.EMPTY,running_controllers);
});
keechma.controller_manager.route_change_execution_plan = (function keechma$controller_manager$route_change_execution_plan(route_params,running_controllers,controllers){
var plan = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stop","stop",-2140911342),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"wake","wake",1262361182),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),cljs.core.PersistentVector.EMPTY], null);
var running_controller_keys_set = cljs.core.set.call(null,cljs.core.keys.call(null,running_controllers));
return cljs.core.reduce.call(null,(function (acc,p__25765){
var vec__25766 = p__25765;
var topic = cljs.core.nth.call(null,vec__25766,(0),null);
var controller = cljs.core.nth.call(null,vec__25766,(1),null);
var map__25769 = acc;
var map__25769__$1 = (((((!((map__25769 == null))))?(((((map__25769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25769):map__25769);
var stop = cljs.core.get.call(null,map__25769__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var start = cljs.core.get.call(null,map__25769__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var wake = cljs.core.get.call(null,map__25769__$1,new cljs.core.Keyword(null,"wake","wake",1262361182));
var route_changed = cljs.core.get.call(null,map__25769__$1,new cljs.core.Keyword(null,"route-changed","route-changed",455870141));
var new_params = keechma.controller.params.call(null,controller,route_params);
var running_controller = cljs.core.get.call(null,running_controllers,topic);
var prev_params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(running_controller);
if(cljs.core._EQ_.call(null,keechma.controller.SerializedController,cljs.core.type.call(null,running_controller))){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"wake","wake",1262361182),cljs.core.assoc.call(null,wake,topic,new_params));
} else {
if((((prev_params == null)) && ((new_params == null)))){
return acc;
} else {
if((((prev_params == null)) && ((!((new_params == null)))))){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.assoc.call(null,start,topic,new_params));
} else {
if((((!((prev_params == null)))) && ((new_params == null)))){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"stop","stop",-2140911342),cljs.core.assoc.call(null,stop,topic,new_params));
} else {
if(cljs.core.not_EQ_.call(null,new_params,prev_params)){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"stop","stop",-2140911342),cljs.core.assoc.call(null,stop,topic,new_params),new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.assoc.call(null,start,topic,new_params));
} else {
if(cljs.core._EQ_.call(null,new_params,prev_params)){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),cljs.core.conj.call(null,route_changed,topic));
} else {
return acc;

}
}
}
}
}
}
}),plan,controllers);
});
keechma.controller_manager.apply_stop_controllers = (function keechma$controller_manager$apply_stop_controllers(app_db,reporter,stop){
var running_controllers = cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)], null));
var stop__$1 = stop;
var app_db__$1 = app_db;
while(true){
var temp__5733__auto__ = cljs.core.first.call(null,stop__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
var vec__25771 = s;
var topic = cljs.core.nth.call(null,vec__25771,(0),null);
var params = cljs.core.nth.call(null,vec__25771,(1),null);
var controller = cljs.core.get.call(null,running_controllers,topic);
var app_out_cmd_info = keechma.reporter.cmd_info.call(null);
var controller_in_cmd_info = keechma.reporter.with_origin.call(null,app_out_cmd_info);
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("keechma","lifecycle","keechma/lifecycle",-422788599),new cljs.core.Keyword(null,"stop","stop",-2140911342)], null)], null),params,app_out_cmd_info,new cljs.core.Keyword(null,"info","info",-317069002));

reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.Keyword(null,"in","in",-1531184865),topic,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("keechma","lifecycle","keechma/lifecycle",-422788599),new cljs.core.Keyword(null,"stop","stop",-2140911342)], null),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(controller),controller_in_cmd_info,new cljs.core.Keyword(null,"info","info",-317069002));

var new_app_db = keechma.util.dissoc_in.call(null,keechma.controller.stop.call(null,controller,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(controller),app_db__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
cljs.core.async.close_BANG_.call(null,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(controller));

var G__25774 = cljs.core.rest.call(null,stop__$1);
var G__25775 = new_app_db;
stop__$1 = G__25774;
app_db__$1 = G__25775;
continue;
} else {
return app_db__$1;
}
break;
}
});
keechma.controller_manager.apply_start_or_wake_controllers = (function keechma$controller_manager$apply_start_or_wake_controllers(action,reporter_action,app_db,reporter,controllers,commands_chan,get_running,active_topics,start_or_wake){
var start_or_wake__$1 = start_or_wake;
var app_db__$1 = app_db;
while(true){
var temp__5733__auto__ = cljs.core.first.call(null,start_or_wake__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
var vec__25776 = s;
var topic = cljs.core.nth.call(null,vec__25776,(0),null);
var params = cljs.core.nth.call(null,vec__25776,(1),null);
var app_out_cmd_info = keechma.reporter.cmd_info.call(null);
var controller_in_cmd_info = keechma.reporter.with_origin.call(null,app_out_cmd_info);
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("keechma","lifecycle","keechma/lifecycle",-422788599),reporter_action], null)], null),params,app_out_cmd_info,new cljs.core.Keyword(null,"info","info",-317069002));

reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.Keyword(null,"in","in",-1531184865),topic,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("keechma","lifecycle","keechma/lifecycle",-422788599),reporter_action], null),params,controller_in_cmd_info,new cljs.core.Keyword(null,"info","info",-317069002));

var controller = cljs.core.assoc.call(null,cljs.core.get.call(null,controllers,topic),new cljs.core.Keyword(null,"in-chan","in-chan",1839083771),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"out-chan","out-chan",384315017),commands_chan,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"route-params","route-params",2111411055),new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(app_db__$1),new cljs.core.Keyword(null,"name","name",1843675177),topic,new cljs.core.Keyword(null,"reporter","reporter",-805360621),reporter,new cljs.core.Keyword(null,"running","running",1554969103),cljs.core.partial.call(null,get_running,topic),new cljs.core.Keyword(null,"active-topics","active-topics",1278012558),active_topics);
var new_app_db = cljs.core.assoc_in.call(null,action.call(null,controller,params,app_db__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null),controller);
var G__25779 = cljs.core.rest.call(null,start_or_wake__$1);
var G__25780 = new_app_db;
start_or_wake__$1 = G__25779;
app_db__$1 = G__25780;
continue;
} else {
return app_db__$1;
}
break;
}
});
keechma.controller_manager.apply_start_controllers = cljs.core.partial.call(null,keechma.controller_manager.apply_start_or_wake_controllers,keechma.controller.start,new cljs.core.Keyword(null,"start","start",-355208981));
keechma.controller_manager.apply_wake_controllers = cljs.core.partial.call(null,keechma.controller_manager.apply_start_or_wake_controllers,keechma.controller.wake,new cljs.core.Keyword(null,"wake","wake",1262361182));
keechma.controller_manager.call_handler_on_started_controllers = (function keechma$controller_manager$call_handler_on_started_controllers(app_db_atom,reporter,start){
var seq__25781 = cljs.core.seq.call(null,start);
var chunk__25782 = null;
var count__25783 = (0);
var i__25784 = (0);
while(true){
if((i__25784 < count__25783)){
var vec__25791 = cljs.core._nth.call(null,chunk__25782,i__25784);
var topic = cljs.core.nth.call(null,vec__25791,(0),null);
var _ = cljs.core.nth.call(null,vec__25791,(1),null);
var controller_25797 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
var app_out_cmd_info_25798 = keechma.reporter.cmd_info.call(null);
var controller_in_cmd_info_25799 = keechma.reporter.with_origin.call(null,app_out_cmd_info_25798);
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("keechma","lifecycle","keechma/lifecycle",-422788599),new cljs.core.Keyword(null,"handler","handler",-195596612)], null)], null),null,app_out_cmd_info_25798,new cljs.core.Keyword(null,"info","info",-317069002));

reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.Keyword(null,"in","in",-1531184865),topic,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("keechma","lifecycle","keechma/lifecycle",-422788599),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),null,controller_in_cmd_info_25799,new cljs.core.Keyword(null,"info","info",-317069002));

keechma.controller.handler.call(null,controller_25797,app_db_atom,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(controller_25797),new cljs.core.Keyword(null,"out-chan","out-chan",384315017).cljs$core$IFn$_invoke$arity$1(controller_25797));


var G__25800 = seq__25781;
var G__25801 = chunk__25782;
var G__25802 = count__25783;
var G__25803 = (i__25784 + (1));
seq__25781 = G__25800;
chunk__25782 = G__25801;
count__25783 = G__25802;
i__25784 = G__25803;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__25781);
if(temp__5735__auto__){
var seq__25781__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25781__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__25781__$1);
var G__25804 = cljs.core.chunk_rest.call(null,seq__25781__$1);
var G__25805 = c__4609__auto__;
var G__25806 = cljs.core.count.call(null,c__4609__auto__);
var G__25807 = (0);
seq__25781 = G__25804;
chunk__25782 = G__25805;
count__25783 = G__25806;
i__25784 = G__25807;
continue;
} else {
var vec__25794 = cljs.core.first.call(null,seq__25781__$1);
var topic = cljs.core.nth.call(null,vec__25794,(0),null);
var _ = cljs.core.nth.call(null,vec__25794,(1),null);
var controller_25808 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
var app_out_cmd_info_25809 = keechma.reporter.cmd_info.call(null);
var controller_in_cmd_info_25810 = keechma.reporter.with_origin.call(null,app_out_cmd_info_25809);
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("keechma","lifecycle","keechma/lifecycle",-422788599),new cljs.core.Keyword(null,"handler","handler",-195596612)], null)], null),null,app_out_cmd_info_25809,new cljs.core.Keyword(null,"info","info",-317069002));

reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.Keyword(null,"in","in",-1531184865),topic,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("keechma","lifecycle","keechma/lifecycle",-422788599),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),null,controller_in_cmd_info_25810,new cljs.core.Keyword(null,"info","info",-317069002));

keechma.controller.handler.call(null,controller_25808,app_db_atom,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(controller_25808),new cljs.core.Keyword(null,"out-chan","out-chan",384315017).cljs$core$IFn$_invoke$arity$1(controller_25808));


var G__25811 = cljs.core.next.call(null,seq__25781__$1);
var G__25812 = null;
var G__25813 = (0);
var G__25814 = (0);
seq__25781 = G__25811;
chunk__25782 = G__25812;
count__25783 = G__25813;
i__25784 = G__25814;
continue;
}
} else {
return null;
}
}
break;
}
});
keechma.controller_manager.send_route_changed_to_surviving_controllers = (function keechma$controller_manager$send_route_changed_to_surviving_controllers(app_db_atom,reporter,route_changed,route_params){
var seq__25815 = cljs.core.seq.call(null,route_changed);
var chunk__25816 = null;
var count__25817 = (0);
var i__25818 = (0);
while(true){
if((i__25818 < count__25817)){
var topic = cljs.core._nth.call(null,chunk__25816,i__25818);
var controller_25819 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
keechma.controller_manager.send_command_to.call(null,reporter,controller_25819,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),route_params);


var G__25820 = seq__25815;
var G__25821 = chunk__25816;
var G__25822 = count__25817;
var G__25823 = (i__25818 + (1));
seq__25815 = G__25820;
chunk__25816 = G__25821;
count__25817 = G__25822;
i__25818 = G__25823;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__25815);
if(temp__5735__auto__){
var seq__25815__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25815__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__25815__$1);
var G__25824 = cljs.core.chunk_rest.call(null,seq__25815__$1);
var G__25825 = c__4609__auto__;
var G__25826 = cljs.core.count.call(null,c__4609__auto__);
var G__25827 = (0);
seq__25815 = G__25824;
chunk__25816 = G__25825;
count__25817 = G__25826;
i__25818 = G__25827;
continue;
} else {
var topic = cljs.core.first.call(null,seq__25815__$1);
var controller_25828 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
keechma.controller_manager.send_command_to.call(null,reporter,controller_25828,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),route_params);


var G__25829 = cljs.core.next.call(null,seq__25815__$1);
var G__25830 = null;
var G__25831 = (0);
var G__25832 = (0);
seq__25815 = G__25829;
chunk__25816 = G__25830;
count__25817 = G__25831;
i__25818 = G__25832;
continue;
}
} else {
return null;
}
}
break;
}
});
keechma.controller_manager.apply_route_change = (function keechma$controller_manager$apply_route_change(reporter,route_params,app_db_atom,commands_chan,controllers){
reporter.call(null,new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"out","out",-910545517),null,new cljs.core.Keyword(null,"route-changed","route-changed",455870141),route_params,keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

var app_db_25835 = cljs.core.deref.call(null,app_db_atom);
var execution_plan_25836 = keechma.controller_manager.route_change_execution_plan.call(null,route_params,cljs.core.get_in.call(null,app_db_25835,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)], null)),controllers);
var map__25833_25837 = execution_plan_25836;
var map__25833_25838__$1 = (((((!((map__25833_25837 == null))))?(((((map__25833_25837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25833_25837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25833_25837):map__25833_25837);
var stop_25839 = cljs.core.get.call(null,map__25833_25838__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var start_25840 = cljs.core.get.call(null,map__25833_25838__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var wake_25841 = cljs.core.get.call(null,map__25833_25838__$1,new cljs.core.Keyword(null,"wake","wake",1262361182));
var route_changed_25842 = cljs.core.get.call(null,map__25833_25838__$1,new cljs.core.Keyword(null,"route-changed","route-changed",455870141));
var get_running_25843 = (function (topic){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
});
var active_topics_25844 = (function (){
return cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)], null)));
});
cljs.core.reset_BANG_.call(null,app_db_atom,keechma.controller_manager.apply_wake_controllers.call(null,keechma.controller_manager.apply_start_controllers.call(null,keechma.controller_manager.apply_stop_controllers.call(null,cljs.core.assoc.call(null,app_db_25835,new cljs.core.Keyword(null,"route","route",329891309),route_params),reporter,stop_25839),reporter,controllers,commands_chan,get_running_25843,active_topics_25844,start_25840),reporter,controllers,commands_chan,get_running_25843,active_topics_25844,wake_25841));

keechma.controller_manager.call_handler_on_started_controllers.call(null,app_db_atom,reporter,cljs.core.concat.call(null,start_25840,wake_25841));

keechma.controller_manager.send_route_changed_to_surviving_controllers.call(null,app_db_atom,reporter,route_changed_25842,route_params);

return reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"in","in",-1531184865),null,new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),keechma.controller_manager.report_running_controllers.call(null,app_db_atom),keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));
});
keechma.controller_manager.call_ssr_handler_on_started_controllers = (function keechma$controller_manager$call_ssr_handler_on_started_controllers(app_db_atom,reporter,start,ssr_handler_done_cb){
var wait_chan = cljs.core.async.chan.call(null);
var wait_count = (function (){var wait_count = (0);
var start__$1 = start;
while(true){
var temp__5733__auto__ = cljs.core.first.call(null,start__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
var vec__25848 = s;
var topic = cljs.core.nth.call(null,vec__25848,(0),null);
var _ = cljs.core.nth.call(null,vec__25848,(1),null);
var controller = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"controller","controller",2013778659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [topic,new cljs.core.Keyword(null,"ssr-handler","ssr-handler",1473540493)], null),keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

var ret_val = keechma.controller.ssr_handler.call(null,controller,app_db_atom,((function (wait_count,start__$1,vec__25848,topic,_,controller,s,temp__5733__auto__,wait_chan){
return (function (){
return cljs.core.async.put_BANG_.call(null,wait_chan,true);
});})(wait_count,start__$1,vec__25848,topic,_,controller,s,temp__5733__auto__,wait_chan))
,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(controller),new cljs.core.Keyword(null,"out-chan","out-chan",384315017).cljs$core$IFn$_invoke$arity$1(controller));
if(cljs.core._EQ_.call(null,keechma.controller.not_implemented,ret_val)){
var G__25888 = wait_count;
var G__25889 = cljs.core.rest.call(null,start__$1);
wait_count = G__25888;
start__$1 = G__25889;
continue;
} else {
var G__25890 = (wait_count + (1));
var G__25891 = cljs.core.rest.call(null,start__$1);
wait_count = G__25890;
start__$1 = G__25891;
continue;
}
} else {
return wait_count;
}
break;
}
})();
var c__22827__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_25870){
var state_val_25871 = (state_25870[(1)]);
if((state_val_25871 === (7))){
var inst_25858 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
if(cljs.core.truth_(inst_25858)){
var statearr_25872_25892 = state_25870__$1;
(statearr_25872_25892[(1)] = (8));

} else {
var statearr_25873_25893 = state_25870__$1;
(statearr_25873_25893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (1))){
var inst_25851 = wait_count;
var state_25870__$1 = (function (){var statearr_25874 = state_25870;
(statearr_25874[(7)] = inst_25851);

return statearr_25874;
})();
var statearr_25875_25894 = state_25870__$1;
(statearr_25875_25894[(2)] = null);

(statearr_25875_25894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (4))){
var inst_25855 = ssr_handler_done_cb.call(null);
var state_25870__$1 = state_25870;
var statearr_25876_25895 = state_25870__$1;
(statearr_25876_25895[(2)] = inst_25855);

(statearr_25876_25895[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (6))){
var inst_25866 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25877_25896 = state_25870__$1;
(statearr_25877_25896[(2)] = inst_25866);

(statearr_25877_25896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (3))){
var inst_25868 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25870__$1,inst_25868);
} else {
if((state_val_25871 === (2))){
var inst_25851 = (state_25870[(7)]);
var inst_25853 = cljs.core._EQ_.call(null,(0),inst_25851);
var state_25870__$1 = state_25870;
if(inst_25853){
var statearr_25878_25897 = state_25870__$1;
(statearr_25878_25897[(1)] = (4));

} else {
var statearr_25879_25898 = state_25870__$1;
(statearr_25879_25898[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (9))){
var state_25870__$1 = state_25870;
var statearr_25880_25899 = state_25870__$1;
(statearr_25880_25899[(2)] = null);

(statearr_25880_25899[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (5))){
var state_25870__$1 = state_25870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25870__$1,(7),wait_chan);
} else {
if((state_val_25871 === (10))){
var inst_25864 = (state_25870[(2)]);
var state_25870__$1 = state_25870;
var statearr_25881_25900 = state_25870__$1;
(statearr_25881_25900[(2)] = inst_25864);

(statearr_25881_25900[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25871 === (8))){
var inst_25851 = (state_25870[(7)]);
var inst_25860 = (inst_25851 - (1));
var inst_25851__$1 = inst_25860;
var state_25870__$1 = (function (){var statearr_25882 = state_25870;
(statearr_25882[(7)] = inst_25851__$1);

return statearr_25882;
})();
var statearr_25883_25901 = state_25870__$1;
(statearr_25883_25901[(2)] = null);

(statearr_25883_25901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__22733__auto__ = null;
var keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__22733__auto____0 = (function (){
var statearr_25884 = [null,null,null,null,null,null,null,null];
(statearr_25884[(0)] = keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__22733__auto__);

(statearr_25884[(1)] = (1));

return statearr_25884;
});
var keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__22733__auto____1 = (function (state_25870){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_25870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e25885){if((e25885 instanceof Object)){
var ex__22736__auto__ = e25885;
var statearr_25886_25902 = state_25870;
(statearr_25886_25902[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25903 = state_25870;
state_25870 = G__25903;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__22733__auto__ = function(state_25870){
switch(arguments.length){
case 0:
return keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__22733__auto____0.call(this);
case 1:
return keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__22733__auto____1.call(this,state_25870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__22733__auto____0;
keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__22733__auto____1;
return keechma$controller_manager$call_ssr_handler_on_started_controllers_$_state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_25887 = f__22828__auto__.call(null);
(statearr_25887[(6)] = c__22827__auto__);

return statearr_25887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));

return c__22827__auto__;
});
keechma.controller_manager.start_ssr = (function keechma$controller_manager$start_ssr(routes_chan,commands_chan,app_db_atom,controllers,reporter,done_cb){
var app_db = cljs.core.deref.call(null,app_db_atom);
var route_params = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(app_db);
var execution_plan = keechma.controller_manager.route_change_execution_plan.call(null,route_params,cljs.core.PersistentArrayMap.EMPTY,controllers);
var map__25904 = execution_plan;
var map__25904__$1 = (((((!((map__25904 == null))))?(((((map__25904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25904):map__25904);
var start = cljs.core.get.call(null,map__25904__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var get_running = (function (topic){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732),topic], null));
});
var active_topics = (function (){
return cljs.core.keys.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)], null)));
});
var ssr_handler_done_cb = (function (){
cljs.core.async.close_BANG_.call(null,commands_chan);

return done_cb.call(null);
});
cljs.core.reset_BANG_.call(null,app_db_atom,keechma.controller_manager.apply_start_controllers.call(null,app_db,reporter,controllers,commands_chan,get_running,active_topics,start));

var c__22827__auto___25943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_25929){
var state_val_25930 = (state_25929[(1)]);
if((state_val_25930 === (1))){
var state_25929__$1 = state_25929;
var statearr_25931_25944 = state_25929__$1;
(statearr_25931_25944[(2)] = null);

(statearr_25931_25944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25930 === (2))){
var state_25929__$1 = state_25929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25929__$1,(4),commands_chan);
} else {
if((state_val_25930 === (3))){
var inst_25927 = (state_25929[(2)]);
var state_25929__$1 = state_25929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25929__$1,inst_25927);
} else {
if((state_val_25930 === (4))){
var inst_25908 = (state_25929[(7)]);
var inst_25908__$1 = (state_25929[(2)]);
var state_25929__$1 = (function (){var statearr_25932 = state_25929;
(statearr_25932[(7)] = inst_25908__$1);

return statearr_25932;
})();
if(cljs.core.truth_(inst_25908__$1)){
var statearr_25933_25945 = state_25929__$1;
(statearr_25933_25945[(1)] = (5));

} else {
var statearr_25934_25946 = state_25929__$1;
(statearr_25934_25946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25930 === (5))){
var inst_25908 = (state_25929[(7)]);
var inst_25913 = cljs.core.nth.call(null,inst_25908,(0),null);
var inst_25914 = cljs.core.nth.call(null,inst_25908,(1),null);
var inst_25915 = cljs.core.nth.call(null,inst_25908,(2),null);
var inst_25916 = cljs.core.deref.call(null,app_db_atom);
var inst_25917 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25918 = [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)];
var inst_25919 = (new cljs.core.PersistentVector(null,2,(5),inst_25917,inst_25918,null));
var inst_25920 = cljs.core.get_in.call(null,inst_25916,inst_25919);
var inst_25921 = keechma.controller_manager.route_command_to_controller.call(null,reporter,inst_25920,inst_25913,inst_25914,inst_25915);
var state_25929__$1 = (function (){var statearr_25935 = state_25929;
(statearr_25935[(8)] = inst_25921);

return statearr_25935;
})();
var statearr_25936_25947 = state_25929__$1;
(statearr_25936_25947[(2)] = null);

(statearr_25936_25947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25930 === (6))){
var state_25929__$1 = state_25929;
var statearr_25937_25948 = state_25929__$1;
(statearr_25937_25948[(2)] = null);

(statearr_25937_25948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25930 === (7))){
var inst_25925 = (state_25929[(2)]);
var state_25929__$1 = state_25929;
var statearr_25938_25949 = state_25929__$1;
(statearr_25938_25949[(2)] = inst_25925);

(statearr_25938_25949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var keechma$controller_manager$start_ssr_$_state_machine__22733__auto__ = null;
var keechma$controller_manager$start_ssr_$_state_machine__22733__auto____0 = (function (){
var statearr_25939 = [null,null,null,null,null,null,null,null,null];
(statearr_25939[(0)] = keechma$controller_manager$start_ssr_$_state_machine__22733__auto__);

(statearr_25939[(1)] = (1));

return statearr_25939;
});
var keechma$controller_manager$start_ssr_$_state_machine__22733__auto____1 = (function (state_25929){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_25929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e25940){if((e25940 instanceof Object)){
var ex__22736__auto__ = e25940;
var statearr_25941_25950 = state_25929;
(statearr_25941_25950[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25951 = state_25929;
state_25929 = G__25951;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
keechma$controller_manager$start_ssr_$_state_machine__22733__auto__ = function(state_25929){
switch(arguments.length){
case 0:
return keechma$controller_manager$start_ssr_$_state_machine__22733__auto____0.call(this);
case 1:
return keechma$controller_manager$start_ssr_$_state_machine__22733__auto____1.call(this,state_25929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$controller_manager$start_ssr_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller_manager$start_ssr_$_state_machine__22733__auto____0;
keechma$controller_manager$start_ssr_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller_manager$start_ssr_$_state_machine__22733__auto____1;
return keechma$controller_manager$start_ssr_$_state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_25942 = f__22828__auto__.call(null);
(statearr_25942[(6)] = c__22827__auto___25943);

return statearr_25942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));


return keechma.controller_manager.call_ssr_handler_on_started_controllers.call(null,app_db_atom,reporter,start,ssr_handler_done_cb);
});
/**
 * Starts the controller manager. Controller manager is the central part
 *   of the application that manages the lifecycle of the controllers and routes
 *   the messages sent to them.
 * 
 *   `start` function receives the following parameters:
 *   
 *   - `route-chan` - Route changes will communicated through this channel
 *   - `route-processor` - Function that will be called on every route change. It can be used to process the route before it's written into app-db
 *   - `commands-chan` - User (UI) commands will be sent through this channel
 *   - `app-db` - application state atom
 *   - `controllers` map of controllers registered for the app
 *   - `reporter` - internal reporter function
 * 
 *   Each time when the new route data comes through the `route-chan` controller
 *   manager will do the following:
 * 
 *   - call the `params` function on each registered controller
 *   - compare the value returned by the `params` function with the value that
 *   was returned last time when the route changes
 *   - based on the comparison it will do one of the following:
 *  - if the last value was `nil` and the current value is `nil` - do nothing
 *  - if the last value was `nil` and the current value is not `nil` - start the controller
 *  - if the last value was not `nil` and the current value is `nil` - stop the controller
 *  - if the last value was not `nil` and the current value is not `nil` and these values are the same - do nothing
 *  - if the last value was not `nil` and the current value is not `nil` and these values are different - restart the controller (stop the current instance and start the new one)
 * 
 *   Controller manager also acts as a command router. Each time a command comes - through the `commands-chan`
 *   the name of the command should look like this `[:controlnler-key :command-name]`. Controller manager will route the `:command-name` command to the appropriate controller based on the `:controller-key`. Controller key is the key under which the controller was registered in the `controllers` argument.
 *   
 */
keechma.controller_manager.start = (function keechma$controller_manager$start(route_chan,route_processor,commands_chan,app_db_atom,controllers,reporter){
var current_route_value = cljs.core.atom.call(null,new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_db_atom)));
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"in","in",-1531184865),null,new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.reduce.call(null,(function (acc,p__25952){
var vec__25953 = p__25952;
var k = cljs.core.nth.call(null,vec__25953,(0),null);
var _ = cljs.core.nth.call(null,vec__25953,(1),null);
return cljs.core.conj.call(null,acc,k);
}),cljs.core.PersistentVector.EMPTY,controllers),keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

keechma.controller_manager.apply_route_change.call(null,reporter,route_processor.call(null,new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_db_atom)),cljs.core.deref.call(null,app_db_atom)),app_db_atom,commands_chan,controllers);

var stop_route_block = cljs.core.async.chan.call(null);
var stop_command_block = cljs.core.async.chan.call(null);
var running_chans = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var c__22827__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_25991){
var state_val_25992 = (state_25991[(1)]);
if((state_val_25992 === (7))){
var inst_25971 = (state_25991[(2)]);
var state_25991__$1 = state_25991;
if(cljs.core.truth_(inst_25971)){
var statearr_25993_26090 = state_25991__$1;
(statearr_25993_26090[(1)] = (8));

} else {
var statearr_25994_26091 = state_25991__$1;
(statearr_25994_26091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (1))){
var state_25991__$1 = state_25991;
var statearr_25995_26092 = state_25991__$1;
(statearr_25995_26092[(2)] = null);

(statearr_25995_26092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (4))){
var inst_25964 = (state_25991[(2)]);
var inst_25965 = cljs.core.nth.call(null,inst_25964,(0),null);
var inst_25966 = cljs.core.nth.call(null,inst_25964,(1),null);
var inst_25967 = cljs.core.not_EQ_.call(null,inst_25966,stop_route_block);
var state_25991__$1 = (function (){var statearr_25996 = state_25991;
(statearr_25996[(7)] = inst_25965);

return statearr_25996;
})();
if(inst_25967){
var statearr_25997_26093 = state_25991__$1;
(statearr_25997_26093[(1)] = (5));

} else {
var statearr_25998_26094 = state_25991__$1;
(statearr_25998_26094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (13))){
var inst_25983 = (state_25991[(2)]);
var state_25991__$1 = (function (){var statearr_25999 = state_25991;
(statearr_25999[(8)] = inst_25983);

return statearr_25999;
})();
var statearr_26000_26095 = state_25991__$1;
(statearr_26000_26095[(2)] = null);

(statearr_26000_26095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (6))){
var state_25991__$1 = state_25991;
var statearr_26001_26096 = state_25991__$1;
(statearr_26001_26096[(2)] = false);

(statearr_26001_26096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (3))){
var inst_25989 = (state_25991[(2)]);
var state_25991__$1 = state_25991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25991__$1,inst_25989);
} else {
if((state_val_25992 === (12))){
var state_25991__$1 = state_25991;
var statearr_26002_26097 = state_25991__$1;
(statearr_26002_26097[(2)] = null);

(statearr_26002_26097[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (2))){
var inst_25960 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25961 = [stop_route_block,route_chan];
var inst_25962 = (new cljs.core.PersistentVector(null,2,(5),inst_25960,inst_25961,null));
var state_25991__$1 = state_25991;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25991__$1,(4),inst_25962);
} else {
if((state_val_25992 === (11))){
var inst_25975 = (state_25991[(9)]);
var inst_25980 = keechma.controller_manager.apply_route_change.call(null,reporter,inst_25975,app_db_atom,commands_chan,controllers);
var state_25991__$1 = state_25991;
var statearr_26003_26098 = state_25991__$1;
(statearr_26003_26098[(2)] = inst_25980);

(statearr_26003_26098[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (9))){
var state_25991__$1 = state_25991;
var statearr_26004_26099 = state_25991__$1;
(statearr_26004_26099[(2)] = null);

(statearr_26004_26099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (5))){
var inst_25965 = (state_25991[(7)]);
var state_25991__$1 = state_25991;
var statearr_26005_26100 = state_25991__$1;
(statearr_26005_26100[(2)] = inst_25965);

(statearr_26005_26100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (10))){
var inst_25987 = (state_25991[(2)]);
var state_25991__$1 = state_25991;
var statearr_26006_26101 = state_25991__$1;
(statearr_26006_26101[(2)] = inst_25987);

(statearr_26006_26101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25992 === (8))){
var inst_25965 = (state_25991[(7)]);
var inst_25975 = (state_25991[(9)]);
var inst_25973 = cljs.core.reset_BANG_.call(null,current_route_value,inst_25965);
var inst_25974 = cljs.core.deref.call(null,app_db_atom);
var inst_25975__$1 = route_processor.call(null,inst_25965,inst_25974);
var inst_25976 = cljs.core.deref.call(null,app_db_atom);
var inst_25977 = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(inst_25976);
var inst_25978 = cljs.core.not_EQ_.call(null,inst_25975__$1,inst_25977);
var state_25991__$1 = (function (){var statearr_26007 = state_25991;
(statearr_26007[(10)] = inst_25973);

(statearr_26007[(9)] = inst_25975__$1);

return statearr_26007;
})();
if(inst_25978){
var statearr_26008_26102 = state_25991__$1;
(statearr_26008_26102[(1)] = (11));

} else {
var statearr_26009_26103 = state_25991__$1;
(statearr_26009_26103[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var keechma$controller_manager$start_$_state_machine__22733__auto__ = null;
var keechma$controller_manager$start_$_state_machine__22733__auto____0 = (function (){
var statearr_26010 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26010[(0)] = keechma$controller_manager$start_$_state_machine__22733__auto__);

(statearr_26010[(1)] = (1));

return statearr_26010;
});
var keechma$controller_manager$start_$_state_machine__22733__auto____1 = (function (state_25991){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_25991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e26011){if((e26011 instanceof Object)){
var ex__22736__auto__ = e26011;
var statearr_26012_26104 = state_25991;
(statearr_26012_26104[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26105 = state_25991;
state_25991 = G__26105;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
keechma$controller_manager$start_$_state_machine__22733__auto__ = function(state_25991){
switch(arguments.length){
case 0:
return keechma$controller_manager$start_$_state_machine__22733__auto____0.call(this);
case 1:
return keechma$controller_manager$start_$_state_machine__22733__auto____1.call(this,state_25991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$controller_manager$start_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller_manager$start_$_state_machine__22733__auto____0;
keechma$controller_manager$start_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller_manager$start_$_state_machine__22733__auto____1;
return keechma$controller_manager$start_$_state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_26013 = f__22828__auto__.call(null);
(statearr_26013[(6)] = c__22827__auto__);

return statearr_26013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));

return c__22827__auto__;
})(),(function (){var c__22827__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_26059){
var state_val_26060 = (state_26059[(1)]);
if((state_val_26060 === (7))){
var inst_26055 = (state_26059[(2)]);
var state_26059__$1 = state_26059;
var statearr_26061_26106 = state_26059__$1;
(statearr_26061_26106[(2)] = inst_26055);

(statearr_26061_26106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26060 === (1))){
var state_26059__$1 = state_26059;
var statearr_26062_26107 = state_26059__$1;
(statearr_26062_26107[(2)] = null);

(statearr_26062_26107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26060 === (4))){
var inst_26022 = (state_26059[(2)]);
var inst_26023 = cljs.core.nth.call(null,inst_26022,(0),null);
var inst_26024 = cljs.core.nth.call(null,inst_26022,(1),null);
var inst_26025 = cljs.core._EQ_.call(null,inst_26024,stop_command_block);
var state_26059__$1 = (function (){var statearr_26063 = state_26059;
(statearr_26063[(7)] = inst_26023);

return statearr_26063;
})();
if(inst_26025){
var statearr_26064_26108 = state_26059__$1;
(statearr_26064_26108[(1)] = (5));

} else {
var statearr_26065_26109 = state_26059__$1;
(statearr_26065_26109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26060 === (13))){
var inst_26049 = (state_26059[(2)]);
var state_26059__$1 = state_26059;
var statearr_26066_26110 = state_26059__$1;
(statearr_26066_26110[(2)] = inst_26049);

(statearr_26066_26110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26060 === (6))){
var inst_26031 = (state_26059[(8)]);
var inst_26023 = (state_26059[(7)]);
var inst_26031__$1 = cljs.core.nth.call(null,inst_26023,(0),null);
var inst_26032 = cljs.core.nth.call(null,inst_26023,(1),null);
var inst_26033 = cljs.core.nth.call(null,inst_26023,(2),null);
var inst_26034 = cljs.core.deref.call(null,app_db_atom);
var inst_26035 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26036 = [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)];
var inst_26037 = (new cljs.core.PersistentVector(null,2,(5),inst_26035,inst_26036,null));
var inst_26038 = cljs.core.get_in.call(null,inst_26034,inst_26037);
var inst_26039 = (inst_26031__$1 == null);
var inst_26040 = cljs.core.not.call(null,inst_26039);
var state_26059__$1 = (function (){var statearr_26067 = state_26059;
(statearr_26067[(8)] = inst_26031__$1);

(statearr_26067[(9)] = inst_26038);

(statearr_26067[(10)] = inst_26032);

(statearr_26067[(11)] = inst_26033);

return statearr_26067;
})();
if(inst_26040){
var statearr_26068_26111 = state_26059__$1;
(statearr_26068_26111[(1)] = (8));

} else {
var statearr_26069_26112 = state_26059__$1;
(statearr_26069_26112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26060 === (3))){
var inst_26057 = (state_26059[(2)]);
var state_26059__$1 = state_26059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26059__$1,inst_26057);
} else {
if((state_val_26060 === (12))){
var inst_26031 = (state_26059[(8)]);
var inst_26038 = (state_26059[(9)]);
var inst_26032 = (state_26059[(10)]);
var inst_26033 = (state_26059[(11)]);
var inst_26047 = keechma.controller_manager.route_command_to_controller.call(null,reporter,inst_26038,inst_26031,inst_26032,inst_26033);
var state_26059__$1 = state_26059;
var statearr_26070_26113 = state_26059__$1;
(statearr_26070_26113[(2)] = inst_26047);

(statearr_26070_26113[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26060 === (2))){
var inst_26018 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26019 = [stop_command_block,commands_chan];
var inst_26020 = (new cljs.core.PersistentVector(null,2,(5),inst_26018,inst_26019,null));
var state_26059__$1 = state_26059;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26059__$1,(4),inst_26020);
} else {
if((state_val_26060 === (11))){
var inst_26044 = cljs.core.deref.call(null,current_route_value);
var inst_26045 = cljs.core.async.put_BANG_.call(null,route_chan,inst_26044);
var state_26059__$1 = state_26059;
var statearr_26071_26114 = state_26059__$1;
(statearr_26071_26114[(2)] = inst_26045);

(statearr_26071_26114[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26060 === (9))){
var state_26059__$1 = state_26059;
var statearr_26072_26115 = state_26059__$1;
(statearr_26072_26115[(2)] = null);

(statearr_26072_26115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26060 === (5))){
var state_26059__$1 = state_26059;
var statearr_26073_26116 = state_26059__$1;
(statearr_26073_26116[(2)] = null);

(statearr_26073_26116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26060 === (10))){
var inst_26052 = (state_26059[(2)]);
var state_26059__$1 = (function (){var statearr_26074 = state_26059;
(statearr_26074[(12)] = inst_26052);

return statearr_26074;
})();
var statearr_26075_26117 = state_26059__$1;
(statearr_26075_26117[(2)] = null);

(statearr_26075_26117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26060 === (8))){
var inst_26031 = (state_26059[(8)]);
var inst_26042 = cljs.core._EQ_.call(null,new cljs.core.Keyword("keechma.controller-manager","reroute","keechma.controller-manager/reroute",-463838217),inst_26031);
var state_26059__$1 = state_26059;
if(inst_26042){
var statearr_26076_26118 = state_26059__$1;
(statearr_26076_26118[(1)] = (11));

} else {
var statearr_26077_26119 = state_26059__$1;
(statearr_26077_26119[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var keechma$controller_manager$start_$_state_machine__22733__auto__ = null;
var keechma$controller_manager$start_$_state_machine__22733__auto____0 = (function (){
var statearr_26078 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26078[(0)] = keechma$controller_manager$start_$_state_machine__22733__auto__);

(statearr_26078[(1)] = (1));

return statearr_26078;
});
var keechma$controller_manager$start_$_state_machine__22733__auto____1 = (function (state_26059){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_26059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e26079){if((e26079 instanceof Object)){
var ex__22736__auto__ = e26079;
var statearr_26080_26120 = state_26059;
(statearr_26080_26120[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26121 = state_26059;
state_26059 = G__26121;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
keechma$controller_manager$start_$_state_machine__22733__auto__ = function(state_26059){
switch(arguments.length){
case 0:
return keechma$controller_manager$start_$_state_machine__22733__auto____0.call(this);
case 1:
return keechma$controller_manager$start_$_state_machine__22733__auto____1.call(this,state_26059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$controller_manager$start_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller_manager$start_$_state_machine__22733__auto____0;
keechma$controller_manager$start_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller_manager$start_$_state_machine__22733__auto____1;
return keechma$controller_manager$start_$_state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_26081 = f__22828__auto__.call(null);
(statearr_26081[(6)] = c__22827__auto__);

return statearr_26081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));

return c__22827__auto__;
})()], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"running-chans","running-chans",-1708113388),running_chans,new cljs.core.Keyword(null,"stop","stop",-2140911342),(function (){
reporter.call(null,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"in","in",-1531184865),null,new cljs.core.Keyword(null,"stop","stop",-2140911342),null,keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));

var controllers__$1 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"running-controllers","running-controllers",-1714723732)], null));
cljs.core.async.close_BANG_.call(null,stop_route_block);

cljs.core.async.close_BANG_.call(null,stop_command_block);

var seq__26082_26122 = cljs.core.seq.call(null,running_chans);
var chunk__26083_26123 = null;
var count__26084_26124 = (0);
var i__26085_26125 = (0);
while(true){
if((i__26085_26125 < count__26084_26124)){
var running_26126 = cljs.core._nth.call(null,chunk__26083_26123,i__26085_26125);
cljs.core.async.close_BANG_.call(null,running_26126);


var G__26127 = seq__26082_26122;
var G__26128 = chunk__26083_26123;
var G__26129 = count__26084_26124;
var G__26130 = (i__26085_26125 + (1));
seq__26082_26122 = G__26127;
chunk__26083_26123 = G__26128;
count__26084_26124 = G__26129;
i__26085_26125 = G__26130;
continue;
} else {
var temp__5735__auto___26131 = cljs.core.seq.call(null,seq__26082_26122);
if(temp__5735__auto___26131){
var seq__26082_26132__$1 = temp__5735__auto___26131;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26082_26132__$1)){
var c__4609__auto___26133 = cljs.core.chunk_first.call(null,seq__26082_26132__$1);
var G__26134 = cljs.core.chunk_rest.call(null,seq__26082_26132__$1);
var G__26135 = c__4609__auto___26133;
var G__26136 = cljs.core.count.call(null,c__4609__auto___26133);
var G__26137 = (0);
seq__26082_26122 = G__26134;
chunk__26083_26123 = G__26135;
count__26084_26124 = G__26136;
i__26085_26125 = G__26137;
continue;
} else {
var running_26138 = cljs.core.first.call(null,seq__26082_26132__$1);
cljs.core.async.close_BANG_.call(null,running_26138);


var G__26139 = cljs.core.next.call(null,seq__26082_26132__$1);
var G__26140 = null;
var G__26141 = (0);
var G__26142 = (0);
seq__26082_26122 = G__26139;
chunk__26083_26123 = G__26140;
count__26084_26124 = G__26141;
i__26085_26125 = G__26142;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,app_db_atom,keechma.controller_manager.apply_stop_controllers.call(null,cljs.core.deref.call(null,app_db_atom),reporter,cljs.core.reduce.call(null,(function (acc,p__26086){
var vec__26087 = p__26086;
var key = cljs.core.nth.call(null,vec__26087,(0),null);
var controller = cljs.core.nth.call(null,vec__26087,(1),null);
return cljs.core.assoc.call(null,acc,key,cljs.core.PersistentArrayMap.EMPTY);
}),cljs.core.PersistentArrayMap.EMPTY,controllers__$1)));
})], null);
});

//# sourceMappingURL=controller_manager.js.map?rel=1761389402328
