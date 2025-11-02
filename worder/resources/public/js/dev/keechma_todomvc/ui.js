// Compiled by ClojureScript 1.10.597 {}
goog.provide('keechma_todomvc.ui');
goog.require('cljs.core');
goog.require('keechma.ui_component');
/**
 * Constructs a Keechma `component`. Args can be a `map` or inline
 *   `keys` and `values`.
 */
keechma_todomvc.ui._LT_comp = (function keechma_todomvc$ui$_LT_comp(var_args){
var G__24897 = arguments.length;
switch (G__24897) {
case 1:
return keechma_todomvc.ui._LT_comp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___24902 = arguments.length;
var i__4790__auto___24903 = (0);
while(true){
if((i__4790__auto___24903 < len__4789__auto___24902)){
args_arr__4810__auto__.push((arguments[i__4790__auto___24903]));

var G__24904 = (i__4790__auto___24903 + (1));
i__4790__auto___24903 = G__24904;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return keechma_todomvc.ui._LT_comp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(keechma_todomvc.ui._LT_comp.cljs$core$IFn$_invoke$arity$1 = (function (kvs){
return keechma.ui_component.constructor$.call(null,kvs);
}));

(keechma_todomvc.ui._LT_comp.cljs$core$IFn$_invoke$arity$variadic = (function (k,v,p__24898){
var map__24899 = p__24898;
var map__24899__$1 = (((((!((map__24899 == null))))?(((((map__24899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24899):map__24899);
var kvs = map__24899__$1;
return keechma_todomvc.ui._LT_comp.call(null,cljs.core.assoc.call(null,kvs,k,v));
}));

/** @this {Function} */
(keechma_todomvc.ui._LT_comp.cljs$lang$applyTo = (function (seq24894){
var G__24895 = cljs.core.first.call(null,seq24894);
var seq24894__$1 = cljs.core.next.call(null,seq24894);
var G__24896 = cljs.core.first.call(null,seq24894__$1);
var seq24894__$2 = cljs.core.next.call(null,seq24894__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24895,G__24896,seq24894__$2);
}));

(keechma_todomvc.ui._LT_comp.cljs$lang$maxFixedArity = (2));

/**
 * Sends a `command` via the `command channel` for `ctx`. Gathers up any
 *   `args` beyond the `command` into an explicit `vector` for
 *   transport.
 */
keechma_todomvc.ui._LT_cmd = (function keechma_todomvc$ui$_LT_cmd(var_args){
var args__4795__auto__ = [];
var len__4789__auto___24908 = arguments.length;
var i__4790__auto___24909 = (0);
while(true){
if((i__4790__auto___24909 < len__4789__auto___24908)){
args__4795__auto__.push((arguments[i__4790__auto___24909]));

var G__24910 = (i__4790__auto___24909 + (1));
i__4790__auto___24909 = G__24910;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return keechma_todomvc.ui._LT_cmd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(keechma_todomvc.ui._LT_cmd.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,command,args){
return keechma.ui_component.send_command.call(null,ctx,command,args);
}));

(keechma_todomvc.ui._LT_cmd.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(keechma_todomvc.ui._LT_cmd.cljs$lang$applyTo = (function (seq24905){
var G__24906 = cljs.core.first.call(null,seq24905);
var seq24905__$1 = cljs.core.next.call(null,seq24905);
var G__24907 = cljs.core.first.call(null,seq24905__$1);
var seq24905__$2 = cljs.core.next.call(null,seq24905__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24906,G__24907,seq24905__$2);
}));

/**
 * Builds a URL from `ctx` and params. Params can be specified by a
 *   `map` or inline `keys` and `values`.
 */
keechma_todomvc.ui._LT_url = (function keechma_todomvc$ui$_LT_url(var_args){
var G__24916 = arguments.length;
switch (G__24916) {
case 2:
return keechma_todomvc.ui._LT_url.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___24921 = arguments.length;
var i__4790__auto___24922 = (0);
while(true){
if((i__4790__auto___24922 < len__4789__auto___24921)){
args_arr__4810__auto__.push((arguments[i__4790__auto___24922]));

var G__24923 = (i__4790__auto___24922 + (1));
i__4790__auto___24922 = G__24923;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((3)),(0),null));
return keechma_todomvc.ui._LT_url.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4811__auto__);

}
});

(keechma_todomvc.ui._LT_url.cljs$core$IFn$_invoke$arity$2 = (function (ctx,kvs){
return keechma.ui_component.url.call(null,ctx,kvs);
}));

(keechma_todomvc.ui._LT_url.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,k,v,p__24917){
var map__24918 = p__24917;
var map__24918__$1 = (((((!((map__24918 == null))))?(((((map__24918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24918):map__24918);
var kvs = map__24918__$1;
return keechma_todomvc.ui._LT_url.call(null,ctx,cljs.core.assoc.call(null,kvs,k,v));
}));

/** @this {Function} */
(keechma_todomvc.ui._LT_url.cljs$lang$applyTo = (function (seq24912){
var G__24913 = cljs.core.first.call(null,seq24912);
var seq24912__$1 = cljs.core.next.call(null,seq24912);
var G__24914 = cljs.core.first.call(null,seq24912__$1);
var seq24912__$2 = cljs.core.next.call(null,seq24912__$1);
var G__24915 = cljs.core.first.call(null,seq24912__$2);
var seq24912__$3 = cljs.core.next.call(null,seq24912__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24913,G__24914,G__24915,seq24912__$3);
}));

(keechma_todomvc.ui._LT_url.cljs$lang$maxFixedArity = (3));

/**
 * Used to embed a `component` within another. Returns a `hiccup` vector
 *   requesting a call to the `component` specified by `key` on each
 *   render. Additional args are gathered into an explicit `vector` for
 *   `ui/component`.
 */
keechma_todomvc.ui.comp_GT_ = (function keechma_todomvc$ui$comp_GT_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___24927 = arguments.length;
var i__4790__auto___24928 = (0);
while(true){
if((i__4790__auto___24928 < len__4789__auto___24927)){
args__4795__auto__.push((arguments[i__4790__auto___24928]));

var G__24929 = (i__4790__auto___24928 + (1));
i__4790__auto___24928 = G__24929;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return keechma_todomvc.ui.comp_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(keechma_todomvc.ui.comp_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,key,args){
return cljs.core.apply.call(null,cljs.core.vector,keechma.ui_component.component.call(null,ctx,key),args);
}));

(keechma_todomvc.ui.comp_GT_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(keechma_todomvc.ui.comp_GT_.cljs$lang$applyTo = (function (seq24924){
var G__24925 = cljs.core.first.call(null,seq24924);
var seq24924__$1 = cljs.core.next.call(null,seq24924);
var G__24926 = cljs.core.first.call(null,seq24924__$1);
var seq24924__$2 = cljs.core.next.call(null,seq24924__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24925,G__24926,seq24924__$2);
}));

/**
 * Reads and derefs a `ctx` subscription.
 */
keechma_todomvc.ui.sub_GT_ = (function keechma_todomvc$ui$sub_GT_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___24933 = arguments.length;
var i__4790__auto___24934 = (0);
while(true){
if((i__4790__auto___24934 < len__4789__auto___24933)){
args__4795__auto__.push((arguments[i__4790__auto___24934]));

var G__24935 = (i__4790__auto___24934 + (1));
i__4790__auto___24934 = G__24935;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return keechma_todomvc.ui.sub_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(keechma_todomvc.ui.sub_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,subscription,args){
return cljs.core.deref.call(null,keechma.ui_component.subscription.call(null,ctx,subscription,args));
}));

(keechma_todomvc.ui.sub_GT_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(keechma_todomvc.ui.sub_GT_.cljs$lang$applyTo = (function (seq24930){
var G__24931 = cljs.core.first.call(null,seq24930);
var seq24930__$1 = cljs.core.next.call(null,seq24930);
var G__24932 = cljs.core.first.call(null,seq24930__$1);
var seq24930__$2 = cljs.core.next.call(null,seq24930__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24931,G__24932,seq24930__$2);
}));

/**
 * Reads current route `data` from `ctx`. `args` are an inline `key
 *   path` within the route map's `:data` value.
 */
keechma_todomvc.ui.route_GT_ = (function keechma_todomvc$ui$route_GT_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___24938 = arguments.length;
var i__4790__auto___24939 = (0);
while(true){
if((i__4790__auto___24939 < len__4789__auto___24938)){
args__4795__auto__.push((arguments[i__4790__auto___24939]));

var G__24940 = (i__4790__auto___24939 + (1));
i__4790__auto___24939 = G__24940;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return keechma_todomvc.ui.route_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(keechma_todomvc.ui.route_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return cljs.core.get_in.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,keechma.ui_component.current_route.call(null,ctx))),args);
}));

(keechma_todomvc.ui.route_GT_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(keechma_todomvc.ui.route_GT_.cljs$lang$applyTo = (function (seq24936){
var G__24937 = cljs.core.first.call(null,seq24936);
var seq24936__$1 = cljs.core.next.call(null,seq24936);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24937,seq24936__$1);
}));


//# sourceMappingURL=ui.js.map?rel=1761389400259
