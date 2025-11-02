// Compiled by ClojureScript 1.10.597 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e29959){if((e29959 instanceof Error)){
var e = e29959;
return "Error: Unable to stringify";
} else {
throw e29959;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29962 = arguments.length;
switch (G__29962) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29960_SHARP_){
if(typeof p1__29960_SHARP_ === 'string'){
return p1__29960_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29960_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___29965 = arguments.length;
var i__4790__auto___29966 = (0);
while(true){
if((i__4790__auto___29966 < len__4789__auto___29965)){
args__4795__auto__.push((arguments[i__4790__auto___29966]));

var G__29967 = (i__4790__auto___29966 + (1));
i__4790__auto___29966 = G__29967;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29964){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29964));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___29969 = arguments.length;
var i__4790__auto___29970 = (0);
while(true){
if((i__4790__auto___29970 < len__4789__auto___29969)){
args__4795__auto__.push((arguments[i__4790__auto___29970]));

var G__29971 = (i__4790__auto___29970 + (1));
i__4790__auto___29970 = G__29971;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29968){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29968));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29972){
var map__29973 = p__29972;
var map__29973__$1 = (((((!((map__29973 == null))))?(((((map__29973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29973):map__29973);
var message = cljs.core.get.call(null,map__29973__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29973__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4185__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22827__auto___30052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_30024){
var state_val_30025 = (state_30024[(1)]);
if((state_val_30025 === (7))){
var inst_30020 = (state_30024[(2)]);
var state_30024__$1 = state_30024;
var statearr_30026_30053 = state_30024__$1;
(statearr_30026_30053[(2)] = inst_30020);

(statearr_30026_30053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (1))){
var state_30024__$1 = state_30024;
var statearr_30027_30054 = state_30024__$1;
(statearr_30027_30054[(2)] = null);

(statearr_30027_30054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (4))){
var inst_29977 = (state_30024[(7)]);
var inst_29977__$1 = (state_30024[(2)]);
var state_30024__$1 = (function (){var statearr_30028 = state_30024;
(statearr_30028[(7)] = inst_29977__$1);

return statearr_30028;
})();
if(cljs.core.truth_(inst_29977__$1)){
var statearr_30029_30055 = state_30024__$1;
(statearr_30029_30055[(1)] = (5));

} else {
var statearr_30030_30056 = state_30024__$1;
(statearr_30030_30056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (15))){
var inst_29984 = (state_30024[(8)]);
var inst_29999 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29984);
var inst_30000 = cljs.core.first.call(null,inst_29999);
var inst_30001 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30000);
var inst_30002 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30001)].join('');
var inst_30003 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30002);
var state_30024__$1 = state_30024;
var statearr_30031_30057 = state_30024__$1;
(statearr_30031_30057[(2)] = inst_30003);

(statearr_30031_30057[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (13))){
var inst_30008 = (state_30024[(2)]);
var state_30024__$1 = state_30024;
var statearr_30032_30058 = state_30024__$1;
(statearr_30032_30058[(2)] = inst_30008);

(statearr_30032_30058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (6))){
var state_30024__$1 = state_30024;
var statearr_30033_30059 = state_30024__$1;
(statearr_30033_30059[(2)] = null);

(statearr_30033_30059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (17))){
var inst_30006 = (state_30024[(2)]);
var state_30024__$1 = state_30024;
var statearr_30034_30060 = state_30024__$1;
(statearr_30034_30060[(2)] = inst_30006);

(statearr_30034_30060[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (3))){
var inst_30022 = (state_30024[(2)]);
var state_30024__$1 = state_30024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30024__$1,inst_30022);
} else {
if((state_val_30025 === (12))){
var inst_29983 = (state_30024[(9)]);
var inst_29997 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29983,opts);
var state_30024__$1 = state_30024;
if(inst_29997){
var statearr_30035_30061 = state_30024__$1;
(statearr_30035_30061[(1)] = (15));

} else {
var statearr_30036_30062 = state_30024__$1;
(statearr_30036_30062[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (2))){
var state_30024__$1 = state_30024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30024__$1,(4),ch);
} else {
if((state_val_30025 === (11))){
var inst_29984 = (state_30024[(8)]);
var inst_29989 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29990 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29984);
var inst_29991 = cljs.core.async.timeout.call(null,(1000));
var inst_29992 = [inst_29990,inst_29991];
var inst_29993 = (new cljs.core.PersistentVector(null,2,(5),inst_29989,inst_29992,null));
var state_30024__$1 = state_30024;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30024__$1,(14),inst_29993);
} else {
if((state_val_30025 === (9))){
var inst_29984 = (state_30024[(8)]);
var inst_30010 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30011 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29984);
var inst_30012 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30011);
var inst_30013 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30012)].join('');
var inst_30014 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30013);
var state_30024__$1 = (function (){var statearr_30037 = state_30024;
(statearr_30037[(10)] = inst_30010);

return statearr_30037;
})();
var statearr_30038_30063 = state_30024__$1;
(statearr_30038_30063[(2)] = inst_30014);

(statearr_30038_30063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (5))){
var inst_29977 = (state_30024[(7)]);
var inst_29979 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29980 = (new cljs.core.PersistentArrayMap(null,2,inst_29979,null));
var inst_29981 = (new cljs.core.PersistentHashSet(null,inst_29980,null));
var inst_29982 = figwheel.client.focus_msgs.call(null,inst_29981,inst_29977);
var inst_29983 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29982);
var inst_29984 = cljs.core.first.call(null,inst_29982);
var inst_29985 = figwheel.client.autoload_QMARK_.call(null);
var state_30024__$1 = (function (){var statearr_30039 = state_30024;
(statearr_30039[(9)] = inst_29983);

(statearr_30039[(8)] = inst_29984);

return statearr_30039;
})();
if(cljs.core.truth_(inst_29985)){
var statearr_30040_30064 = state_30024__$1;
(statearr_30040_30064[(1)] = (8));

} else {
var statearr_30041_30065 = state_30024__$1;
(statearr_30041_30065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (14))){
var inst_29995 = (state_30024[(2)]);
var state_30024__$1 = state_30024;
var statearr_30042_30066 = state_30024__$1;
(statearr_30042_30066[(2)] = inst_29995);

(statearr_30042_30066[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (16))){
var state_30024__$1 = state_30024;
var statearr_30043_30067 = state_30024__$1;
(statearr_30043_30067[(2)] = null);

(statearr_30043_30067[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (10))){
var inst_30016 = (state_30024[(2)]);
var state_30024__$1 = (function (){var statearr_30044 = state_30024;
(statearr_30044[(11)] = inst_30016);

return statearr_30044;
})();
var statearr_30045_30068 = state_30024__$1;
(statearr_30045_30068[(2)] = null);

(statearr_30045_30068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (8))){
var inst_29983 = (state_30024[(9)]);
var inst_29987 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29983,opts);
var state_30024__$1 = state_30024;
if(cljs.core.truth_(inst_29987)){
var statearr_30046_30069 = state_30024__$1;
(statearr_30046_30069[(1)] = (11));

} else {
var statearr_30047_30070 = state_30024__$1;
(statearr_30047_30070[(1)] = (12));

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
}
}
}
}
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22733__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22733__auto____0 = (function (){
var statearr_30048 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30048[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22733__auto__);

(statearr_30048[(1)] = (1));

return statearr_30048;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22733__auto____1 = (function (state_30024){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_30024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e30049){if((e30049 instanceof Object)){
var ex__22736__auto__ = e30049;
var statearr_30050_30071 = state_30024;
(statearr_30050_30071[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30072 = state_30024;
state_30024 = G__30072;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22733__auto__ = function(state_30024){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22733__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22733__auto____1.call(this,state_30024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22733__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22733__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_30051 = f__22828__auto__.call(null);
(statearr_30051[(6)] = c__22827__auto___30052);

return statearr_30051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30073_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30073_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30079 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30075 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30076 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30077 = true;
var _STAR_print_fn_STAR__temp_val__30078 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30077);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30078);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30076);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30075);
}}catch (e30074){if((e30074 instanceof Error)){
var e = e30074;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30079], null));
} else {
var e = e30074;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30080){
var map__30081 = p__30080;
var map__30081__$1 = (((((!((map__30081 == null))))?(((((map__30081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30081):map__30081);
var opts = map__30081__$1;
var build_id = cljs.core.get.call(null,map__30081__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__30083){
var vec__30084 = p__30083;
var seq__30085 = cljs.core.seq.call(null,vec__30084);
var first__30086 = cljs.core.first.call(null,seq__30085);
var seq__30085__$1 = cljs.core.next.call(null,seq__30085);
var map__30087 = first__30086;
var map__30087__$1 = (((((!((map__30087 == null))))?(((((map__30087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30087):map__30087);
var msg = map__30087__$1;
var msg_name = cljs.core.get.call(null,map__30087__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30085__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30089){
var vec__30090 = p__30089;
var seq__30091 = cljs.core.seq.call(null,vec__30090);
var first__30092 = cljs.core.first.call(null,seq__30091);
var seq__30091__$1 = cljs.core.next.call(null,seq__30091);
var map__30093 = first__30092;
var map__30093__$1 = (((((!((map__30093 == null))))?(((((map__30093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30093):map__30093);
var msg = map__30093__$1;
var msg_name = cljs.core.get.call(null,map__30093__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30091__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30095){
var map__30096 = p__30095;
var map__30096__$1 = (((((!((map__30096 == null))))?(((((map__30096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30096):map__30096);
var on_compile_warning = cljs.core.get.call(null,map__30096__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30096__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__30098){
var vec__30099 = p__30098;
var seq__30100 = cljs.core.seq.call(null,vec__30099);
var first__30101 = cljs.core.first.call(null,seq__30100);
var seq__30100__$1 = cljs.core.next.call(null,seq__30100);
var map__30102 = first__30101;
var map__30102__$1 = (((((!((map__30102 == null))))?(((((map__30102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30102):map__30102);
var msg = map__30102__$1;
var msg_name = cljs.core.get.call(null,map__30102__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30100__$1;
var pred__30104 = cljs.core._EQ_;
var expr__30105 = msg_name;
if(cljs.core.truth_(pred__30104.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30105))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30104.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30105))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22827__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_30194){
var state_val_30195 = (state_30194[(1)]);
if((state_val_30195 === (7))){
var inst_30114 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
if(cljs.core.truth_(inst_30114)){
var statearr_30196_30243 = state_30194__$1;
(statearr_30196_30243[(1)] = (8));

} else {
var statearr_30197_30244 = state_30194__$1;
(statearr_30197_30244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (20))){
var inst_30188 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
var statearr_30198_30245 = state_30194__$1;
(statearr_30198_30245[(2)] = inst_30188);

(statearr_30198_30245[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (27))){
var inst_30184 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
var statearr_30199_30246 = state_30194__$1;
(statearr_30199_30246[(2)] = inst_30184);

(statearr_30199_30246[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (1))){
var inst_30107 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30194__$1 = state_30194;
if(cljs.core.truth_(inst_30107)){
var statearr_30200_30247 = state_30194__$1;
(statearr_30200_30247[(1)] = (2));

} else {
var statearr_30201_30248 = state_30194__$1;
(statearr_30201_30248[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (24))){
var inst_30186 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
var statearr_30202_30249 = state_30194__$1;
(statearr_30202_30249[(2)] = inst_30186);

(statearr_30202_30249[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (4))){
var inst_30192 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30194__$1,inst_30192);
} else {
if((state_val_30195 === (15))){
var inst_30190 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
var statearr_30203_30250 = state_30194__$1;
(statearr_30203_30250[(2)] = inst_30190);

(statearr_30203_30250[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (21))){
var inst_30143 = (state_30194[(2)]);
var inst_30144 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30145 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30144);
var state_30194__$1 = (function (){var statearr_30204 = state_30194;
(statearr_30204[(7)] = inst_30143);

return statearr_30204;
})();
var statearr_30205_30251 = state_30194__$1;
(statearr_30205_30251[(2)] = inst_30145);

(statearr_30205_30251[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (31))){
var inst_30173 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30194__$1 = state_30194;
if(inst_30173){
var statearr_30206_30252 = state_30194__$1;
(statearr_30206_30252[(1)] = (34));

} else {
var statearr_30207_30253 = state_30194__$1;
(statearr_30207_30253[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (32))){
var inst_30182 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
var statearr_30208_30254 = state_30194__$1;
(statearr_30208_30254[(2)] = inst_30182);

(statearr_30208_30254[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (33))){
var inst_30169 = (state_30194[(2)]);
var inst_30170 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30171 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30170);
var state_30194__$1 = (function (){var statearr_30209 = state_30194;
(statearr_30209[(8)] = inst_30169);

return statearr_30209;
})();
var statearr_30210_30255 = state_30194__$1;
(statearr_30210_30255[(2)] = inst_30171);

(statearr_30210_30255[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (13))){
var inst_30128 = figwheel.client.heads_up.clear.call(null);
var state_30194__$1 = state_30194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30194__$1,(16),inst_30128);
} else {
if((state_val_30195 === (22))){
var inst_30149 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30150 = figwheel.client.heads_up.append_warning_message.call(null,inst_30149);
var state_30194__$1 = state_30194;
var statearr_30211_30256 = state_30194__$1;
(statearr_30211_30256[(2)] = inst_30150);

(statearr_30211_30256[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (36))){
var inst_30180 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
var statearr_30212_30257 = state_30194__$1;
(statearr_30212_30257[(2)] = inst_30180);

(statearr_30212_30257[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (29))){
var inst_30160 = (state_30194[(2)]);
var inst_30161 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30162 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30161);
var state_30194__$1 = (function (){var statearr_30213 = state_30194;
(statearr_30213[(9)] = inst_30160);

return statearr_30213;
})();
var statearr_30214_30258 = state_30194__$1;
(statearr_30214_30258[(2)] = inst_30162);

(statearr_30214_30258[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (6))){
var inst_30109 = (state_30194[(10)]);
var state_30194__$1 = state_30194;
var statearr_30215_30259 = state_30194__$1;
(statearr_30215_30259[(2)] = inst_30109);

(statearr_30215_30259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (28))){
var inst_30156 = (state_30194[(2)]);
var inst_30157 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30158 = figwheel.client.heads_up.display_warning.call(null,inst_30157);
var state_30194__$1 = (function (){var statearr_30216 = state_30194;
(statearr_30216[(11)] = inst_30156);

return statearr_30216;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30194__$1,(29),inst_30158);
} else {
if((state_val_30195 === (25))){
var inst_30154 = figwheel.client.heads_up.clear.call(null);
var state_30194__$1 = state_30194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30194__$1,(28),inst_30154);
} else {
if((state_val_30195 === (34))){
var inst_30175 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30194__$1 = state_30194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30194__$1,(37),inst_30175);
} else {
if((state_val_30195 === (17))){
var inst_30134 = (state_30194[(2)]);
var inst_30135 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30136 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30135);
var state_30194__$1 = (function (){var statearr_30217 = state_30194;
(statearr_30217[(12)] = inst_30134);

return statearr_30217;
})();
var statearr_30218_30260 = state_30194__$1;
(statearr_30218_30260[(2)] = inst_30136);

(statearr_30218_30260[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (3))){
var inst_30126 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30194__$1 = state_30194;
if(inst_30126){
var statearr_30219_30261 = state_30194__$1;
(statearr_30219_30261[(1)] = (13));

} else {
var statearr_30220_30262 = state_30194__$1;
(statearr_30220_30262[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (12))){
var inst_30122 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
var statearr_30221_30263 = state_30194__$1;
(statearr_30221_30263[(2)] = inst_30122);

(statearr_30221_30263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (2))){
var inst_30109 = (state_30194[(10)]);
var inst_30109__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30194__$1 = (function (){var statearr_30222 = state_30194;
(statearr_30222[(10)] = inst_30109__$1);

return statearr_30222;
})();
if(cljs.core.truth_(inst_30109__$1)){
var statearr_30223_30264 = state_30194__$1;
(statearr_30223_30264[(1)] = (5));

} else {
var statearr_30224_30265 = state_30194__$1;
(statearr_30224_30265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (23))){
var inst_30152 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30194__$1 = state_30194;
if(inst_30152){
var statearr_30225_30266 = state_30194__$1;
(statearr_30225_30266[(1)] = (25));

} else {
var statearr_30226_30267 = state_30194__$1;
(statearr_30226_30267[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (35))){
var state_30194__$1 = state_30194;
var statearr_30227_30268 = state_30194__$1;
(statearr_30227_30268[(2)] = null);

(statearr_30227_30268[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (19))){
var inst_30147 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30194__$1 = state_30194;
if(inst_30147){
var statearr_30228_30269 = state_30194__$1;
(statearr_30228_30269[(1)] = (22));

} else {
var statearr_30229_30270 = state_30194__$1;
(statearr_30229_30270[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (11))){
var inst_30118 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
var statearr_30230_30271 = state_30194__$1;
(statearr_30230_30271[(2)] = inst_30118);

(statearr_30230_30271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (9))){
var inst_30120 = figwheel.client.heads_up.clear.call(null);
var state_30194__$1 = state_30194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30194__$1,(12),inst_30120);
} else {
if((state_val_30195 === (5))){
var inst_30111 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30194__$1 = state_30194;
var statearr_30231_30272 = state_30194__$1;
(statearr_30231_30272[(2)] = inst_30111);

(statearr_30231_30272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (14))){
var inst_30138 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30194__$1 = state_30194;
if(inst_30138){
var statearr_30232_30273 = state_30194__$1;
(statearr_30232_30273[(1)] = (18));

} else {
var statearr_30233_30274 = state_30194__$1;
(statearr_30233_30274[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (26))){
var inst_30164 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30194__$1 = state_30194;
if(inst_30164){
var statearr_30234_30275 = state_30194__$1;
(statearr_30234_30275[(1)] = (30));

} else {
var statearr_30235_30276 = state_30194__$1;
(statearr_30235_30276[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (16))){
var inst_30130 = (state_30194[(2)]);
var inst_30131 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30132 = figwheel.client.heads_up.display_exception.call(null,inst_30131);
var state_30194__$1 = (function (){var statearr_30236 = state_30194;
(statearr_30236[(13)] = inst_30130);

return statearr_30236;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30194__$1,(17),inst_30132);
} else {
if((state_val_30195 === (30))){
var inst_30166 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30167 = figwheel.client.heads_up.display_warning.call(null,inst_30166);
var state_30194__$1 = state_30194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30194__$1,(33),inst_30167);
} else {
if((state_val_30195 === (10))){
var inst_30124 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
var statearr_30237_30277 = state_30194__$1;
(statearr_30237_30277[(2)] = inst_30124);

(statearr_30237_30277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (18))){
var inst_30140 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30141 = figwheel.client.heads_up.display_exception.call(null,inst_30140);
var state_30194__$1 = state_30194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30194__$1,(21),inst_30141);
} else {
if((state_val_30195 === (37))){
var inst_30177 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
var statearr_30238_30278 = state_30194__$1;
(statearr_30238_30278[(2)] = inst_30177);

(statearr_30238_30278[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (8))){
var inst_30116 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30194__$1 = state_30194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30194__$1,(11),inst_30116);
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
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22733__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22733__auto____0 = (function (){
var statearr_30239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30239[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22733__auto__);

(statearr_30239[(1)] = (1));

return statearr_30239;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22733__auto____1 = (function (state_30194){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_30194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e30240){if((e30240 instanceof Object)){
var ex__22736__auto__ = e30240;
var statearr_30241_30279 = state_30194;
(statearr_30241_30279[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30280 = state_30194;
state_30194 = G__30280;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22733__auto__ = function(state_30194){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22733__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22733__auto____1.call(this,state_30194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22733__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22733__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_30242 = f__22828__auto__.call(null);
(statearr_30242[(6)] = c__22827__auto__);

return statearr_30242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));

return c__22827__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22827__auto___30309 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_30295){
var state_val_30296 = (state_30295[(1)]);
if((state_val_30296 === (1))){
var state_30295__$1 = state_30295;
var statearr_30297_30310 = state_30295__$1;
(statearr_30297_30310[(2)] = null);

(statearr_30297_30310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30296 === (2))){
var state_30295__$1 = state_30295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30295__$1,(4),ch);
} else {
if((state_val_30296 === (3))){
var inst_30293 = (state_30295[(2)]);
var state_30295__$1 = state_30295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30295__$1,inst_30293);
} else {
if((state_val_30296 === (4))){
var inst_30283 = (state_30295[(7)]);
var inst_30283__$1 = (state_30295[(2)]);
var state_30295__$1 = (function (){var statearr_30298 = state_30295;
(statearr_30298[(7)] = inst_30283__$1);

return statearr_30298;
})();
if(cljs.core.truth_(inst_30283__$1)){
var statearr_30299_30311 = state_30295__$1;
(statearr_30299_30311[(1)] = (5));

} else {
var statearr_30300_30312 = state_30295__$1;
(statearr_30300_30312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30296 === (5))){
var inst_30283 = (state_30295[(7)]);
var inst_30285 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30283);
var state_30295__$1 = state_30295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30295__$1,(8),inst_30285);
} else {
if((state_val_30296 === (6))){
var state_30295__$1 = state_30295;
var statearr_30301_30313 = state_30295__$1;
(statearr_30301_30313[(2)] = null);

(statearr_30301_30313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30296 === (7))){
var inst_30291 = (state_30295[(2)]);
var state_30295__$1 = state_30295;
var statearr_30302_30314 = state_30295__$1;
(statearr_30302_30314[(2)] = inst_30291);

(statearr_30302_30314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30296 === (8))){
var inst_30287 = (state_30295[(2)]);
var state_30295__$1 = (function (){var statearr_30303 = state_30295;
(statearr_30303[(8)] = inst_30287);

return statearr_30303;
})();
var statearr_30304_30315 = state_30295__$1;
(statearr_30304_30315[(2)] = null);

(statearr_30304_30315[(1)] = (2));


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
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22733__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22733__auto____0 = (function (){
var statearr_30305 = [null,null,null,null,null,null,null,null,null];
(statearr_30305[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22733__auto__);

(statearr_30305[(1)] = (1));

return statearr_30305;
});
var figwheel$client$heads_up_plugin_$_state_machine__22733__auto____1 = (function (state_30295){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_30295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e30306){if((e30306 instanceof Object)){
var ex__22736__auto__ = e30306;
var statearr_30307_30316 = state_30295;
(statearr_30307_30316[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30317 = state_30295;
state_30295 = G__30317;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22733__auto__ = function(state_30295){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22733__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22733__auto____1.call(this,state_30295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22733__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22733__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_30308 = f__22828__auto__.call(null);
(statearr_30308[(6)] = c__22827__auto___30309);

return statearr_30308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22827__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_30323){
var state_val_30324 = (state_30323[(1)]);
if((state_val_30324 === (1))){
var inst_30318 = cljs.core.async.timeout.call(null,(3000));
var state_30323__$1 = state_30323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30323__$1,(2),inst_30318);
} else {
if((state_val_30324 === (2))){
var inst_30320 = (state_30323[(2)]);
var inst_30321 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30323__$1 = (function (){var statearr_30325 = state_30323;
(statearr_30325[(7)] = inst_30320);

return statearr_30325;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30323__$1,inst_30321);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22733__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22733__auto____0 = (function (){
var statearr_30326 = [null,null,null,null,null,null,null,null];
(statearr_30326[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22733__auto__);

(statearr_30326[(1)] = (1));

return statearr_30326;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22733__auto____1 = (function (state_30323){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_30323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e30327){if((e30327 instanceof Object)){
var ex__22736__auto__ = e30327;
var statearr_30328_30330 = state_30323;
(statearr_30328_30330[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30331 = state_30323;
state_30323 = G__30331;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22733__auto__ = function(state_30323){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22733__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22733__auto____1.call(this,state_30323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22733__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22733__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_30329 = f__22828__auto__.call(null);
(statearr_30329[(6)] = c__22827__auto__);

return statearr_30329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));

return c__22827__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22827__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_30338){
var state_val_30339 = (state_30338[(1)]);
if((state_val_30339 === (1))){
var inst_30332 = cljs.core.async.timeout.call(null,(2000));
var state_30338__$1 = state_30338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30338__$1,(2),inst_30332);
} else {
if((state_val_30339 === (2))){
var inst_30334 = (state_30338[(2)]);
var inst_30335 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30336 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30335);
var state_30338__$1 = (function (){var statearr_30340 = state_30338;
(statearr_30340[(7)] = inst_30334);

return statearr_30340;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30338__$1,inst_30336);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22733__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22733__auto____0 = (function (){
var statearr_30341 = [null,null,null,null,null,null,null,null];
(statearr_30341[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22733__auto__);

(statearr_30341[(1)] = (1));

return statearr_30341;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22733__auto____1 = (function (state_30338){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_30338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e30342){if((e30342 instanceof Object)){
var ex__22736__auto__ = e30342;
var statearr_30343_30345 = state_30338;
(statearr_30343_30345[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30346 = state_30338;
state_30338 = G__30346;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22733__auto__ = function(state_30338){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22733__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22733__auto____1.call(this,state_30338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22733__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22733__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_30344 = f__22828__auto__.call(null);
(statearr_30344[(6)] = c__22827__auto__);

return statearr_30344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));

return c__22827__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30347){
var map__30348 = p__30347;
var map__30348__$1 = (((((!((map__30348 == null))))?(((((map__30348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30348):map__30348);
var file = cljs.core.get.call(null,map__30348__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30348__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30348__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30350 = "";
var G__30350__$1 = (cljs.core.truth_(file)?[G__30350,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30350);
var G__30350__$2 = (cljs.core.truth_(line)?[G__30350__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30350__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = line;
if(cljs.core.truth_(and__4174__auto__)){
return column;
} else {
return and__4174__auto__;
}
})())){
return [G__30350__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30350__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30351){
var map__30352 = p__30351;
var map__30352__$1 = (((((!((map__30352 == null))))?(((((map__30352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30352):map__30352);
var ed = map__30352__$1;
var exception_data = cljs.core.get.call(null,map__30352__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30352__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_30355 = (function (){var G__30354 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30354)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__30354;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_30355);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30356){
var map__30357 = p__30356;
var map__30357__$1 = (((((!((map__30357 == null))))?(((((map__30357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30357):map__30357);
var w = map__30357__$1;
var message = cljs.core.get.call(null,map__30357__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/dev/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/dev/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4174__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4174__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30359 = cljs.core.seq.call(null,plugins);
var chunk__30360 = null;
var count__30361 = (0);
var i__30362 = (0);
while(true){
if((i__30362 < count__30361)){
var vec__30369 = cljs.core._nth.call(null,chunk__30360,i__30362);
var k = cljs.core.nth.call(null,vec__30369,(0),null);
var plugin = cljs.core.nth.call(null,vec__30369,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30375 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30359,chunk__30360,count__30361,i__30362,pl_30375,vec__30369,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30375.call(null,msg_hist);
});})(seq__30359,chunk__30360,count__30361,i__30362,pl_30375,vec__30369,k,plugin))
);
} else {
}


var G__30376 = seq__30359;
var G__30377 = chunk__30360;
var G__30378 = count__30361;
var G__30379 = (i__30362 + (1));
seq__30359 = G__30376;
chunk__30360 = G__30377;
count__30361 = G__30378;
i__30362 = G__30379;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30359);
if(temp__5735__auto__){
var seq__30359__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30359__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__30359__$1);
var G__30380 = cljs.core.chunk_rest.call(null,seq__30359__$1);
var G__30381 = c__4609__auto__;
var G__30382 = cljs.core.count.call(null,c__4609__auto__);
var G__30383 = (0);
seq__30359 = G__30380;
chunk__30360 = G__30381;
count__30361 = G__30382;
i__30362 = G__30383;
continue;
} else {
var vec__30372 = cljs.core.first.call(null,seq__30359__$1);
var k = cljs.core.nth.call(null,vec__30372,(0),null);
var plugin = cljs.core.nth.call(null,vec__30372,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30384 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30359,chunk__30360,count__30361,i__30362,pl_30384,vec__30372,k,plugin,seq__30359__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30384.call(null,msg_hist);
});})(seq__30359,chunk__30360,count__30361,i__30362,pl_30384,vec__30372,k,plugin,seq__30359__$1,temp__5735__auto__))
);
} else {
}


var G__30385 = cljs.core.next.call(null,seq__30359__$1);
var G__30386 = null;
var G__30387 = (0);
var G__30388 = (0);
seq__30359 = G__30385;
chunk__30360 = G__30386;
count__30361 = G__30387;
i__30362 = G__30388;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__30390 = arguments.length;
switch (G__30390) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30391_30396 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30392_30397 = null;
var count__30393_30398 = (0);
var i__30394_30399 = (0);
while(true){
if((i__30394_30399 < count__30393_30398)){
var msg_30400 = cljs.core._nth.call(null,chunk__30392_30397,i__30394_30399);
figwheel.client.socket.handle_incoming_message.call(null,msg_30400);


var G__30401 = seq__30391_30396;
var G__30402 = chunk__30392_30397;
var G__30403 = count__30393_30398;
var G__30404 = (i__30394_30399 + (1));
seq__30391_30396 = G__30401;
chunk__30392_30397 = G__30402;
count__30393_30398 = G__30403;
i__30394_30399 = G__30404;
continue;
} else {
var temp__5735__auto___30405 = cljs.core.seq.call(null,seq__30391_30396);
if(temp__5735__auto___30405){
var seq__30391_30406__$1 = temp__5735__auto___30405;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30391_30406__$1)){
var c__4609__auto___30407 = cljs.core.chunk_first.call(null,seq__30391_30406__$1);
var G__30408 = cljs.core.chunk_rest.call(null,seq__30391_30406__$1);
var G__30409 = c__4609__auto___30407;
var G__30410 = cljs.core.count.call(null,c__4609__auto___30407);
var G__30411 = (0);
seq__30391_30396 = G__30408;
chunk__30392_30397 = G__30409;
count__30393_30398 = G__30410;
i__30394_30399 = G__30411;
continue;
} else {
var msg_30412 = cljs.core.first.call(null,seq__30391_30406__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30412);


var G__30413 = cljs.core.next.call(null,seq__30391_30406__$1);
var G__30414 = null;
var G__30415 = (0);
var G__30416 = (0);
seq__30391_30396 = G__30413;
chunk__30392_30397 = G__30414;
count__30393_30398 = G__30415;
i__30394_30399 = G__30416;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4795__auto__ = [];
var len__4789__auto___30421 = arguments.length;
var i__4790__auto___30422 = (0);
while(true){
if((i__4790__auto___30422 < len__4789__auto___30421)){
args__4795__auto__.push((arguments[i__4790__auto___30422]));

var G__30423 = (i__4790__auto___30422 + (1));
i__4790__auto___30422 = G__30423;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30418){
var map__30419 = p__30418;
var map__30419__$1 = (((((!((map__30419 == null))))?(((((map__30419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30419):map__30419);
var opts = map__30419__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30417){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30417));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30424){if((e30424 instanceof Error)){
var e = e30424;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30424;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__30425){
var map__30426 = p__30425;
var map__30426__$1 = (((((!((map__30426 == null))))?(((((map__30426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30426):map__30426);
var msg_name = cljs.core.get.call(null,map__30426__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1761389410240
