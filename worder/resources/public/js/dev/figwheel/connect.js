// Compiled by ClojureScript 1.10.597 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__30457__delegate = function (x__30441__auto__){
if(cljs.core.truth_(keechma_todomvc.app.restart_BANG_)){
return cljs.core.apply.call(null,keechma_todomvc.app.restart_BANG_,x__30441__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '","keechma-todomvc.app/restart!","' is missing"].join(''));
}
};
var G__30457 = function (var_args){
var x__30441__auto__ = null;
if (arguments.length > 0) {
var G__30458__i = 0, G__30458__a = new Array(arguments.length -  0);
while (G__30458__i < G__30458__a.length) {G__30458__a[G__30458__i] = arguments[G__30458__i + 0]; ++G__30458__i;}
  x__30441__auto__ = new cljs.core.IndexedSeq(G__30458__a,0,null);
} 
return G__30457__delegate.call(this,x__30441__auto__);};
G__30457.cljs$lang$maxFixedArity = 0;
G__30457.cljs$lang$applyTo = (function (arglist__30459){
var x__30441__auto__ = cljs.core.seq(arglist__30459);
return G__30457__delegate(x__30441__auto__);
});
G__30457.cljs$core$IFn$_invoke$arity$variadic = G__30457__delegate;
return G__30457;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1761389410339
