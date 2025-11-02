// Compiled by ClojureScript 1.10.597 {}
goog.provide('keechma_todomvc.edb');
goog.require('cljs.core');
goog.require('entitydb.core');
keechma_todomvc.edb.dbal = entitydb.core.make_dbal.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"todos","todos",630308868),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null));
keechma_todomvc.edb.append_collection = (function keechma_todomvc$edb$append_collection(var_args){
var args__4795__auto__ = [];
var len__4789__auto___25291 = arguments.length;
var i__4790__auto___25292 = (0);
while(true){
if((i__4790__auto___25292 < len__4789__auto___25291)){
args__4795__auto__.push((arguments[i__4790__auto___25292]));

var G__25293 = (i__4790__auto___25292 + (1));
i__4790__auto___25292 = G__25293;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return keechma_todomvc.edb.append_collection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(keechma_todomvc.edb.append_collection.cljs$core$IFn$_invoke$arity$variadic = (function (db__25226__auto__,args__25227__auto__){
return cljs.core.assoc.call(null,db__25226__auto__,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,new cljs.core.Keyword(null,"append-collection","append-collection",1351258414).cljs$core$IFn$_invoke$arity$1(keechma_todomvc.edb.dbal),new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db__25226__auto__),args__25227__auto__));
}));

(keechma_todomvc.edb.append_collection.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(keechma_todomvc.edb.append_collection.cljs$lang$applyTo = (function (seq25249){
var G__25250 = cljs.core.first.call(null,seq25249);
var seq25249__$1 = cljs.core.next.call(null,seq25249);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25250,seq25249__$1);
}));


keechma_todomvc.edb.append_related_collection = (function keechma_todomvc$edb$append_related_collection(var_args){
var args__4795__auto__ = [];
var len__4789__auto___25294 = arguments.length;
var i__4790__auto___25295 = (0);
while(true){
if((i__4790__auto___25295 < len__4789__auto___25294)){
args__4795__auto__.push((arguments[i__4790__auto___25295]));

var G__25296 = (i__4790__auto___25295 + (1));
i__4790__auto___25295 = G__25296;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return keechma_todomvc.edb.append_related_collection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(keechma_todomvc.edb.append_related_collection.cljs$core$IFn$_invoke$arity$variadic = (function (db__25226__auto__,args__25227__auto__){
return cljs.core.assoc.call(null,db__25226__auto__,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,new cljs.core.Keyword(null,"append-related-collection","append-related-collection",1938085610).cljs$core$IFn$_invoke$arity$1(keechma_todomvc.edb.dbal),new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db__25226__auto__),args__25227__auto__));
}));

(keechma_todomvc.edb.append_related_collection.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(keechma_todomvc.edb.append_related_collection.cljs$lang$applyTo = (function (seq25251){
var G__25252 = cljs.core.first.call(null,seq25251);
var seq25251__$1 = cljs.core.next.call(null,seq25251);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25252,seq25251__$1);
}));


keechma_todomvc.edb.get_collection = (function keechma_todomvc$edb$get_collection(var_args){
var args__4795__auto__ = [];
var len__4789__auto___25297 = arguments.length;
var i__4790__auto___25298 = (0);
while(true){
if((i__4790__auto___25298 < len__4789__auto___25297)){
args__4795__auto__.push((arguments[i__4790__auto___25298]));

var G__25299 = (i__4790__auto___25298 + (1));
i__4790__auto___25298 = G__25299;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return keechma_todomvc.edb.get_collection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(keechma_todomvc.edb.get_collection.cljs$core$IFn$_invoke$arity$variadic = (function (db__25224__auto__,args__25225__auto__){
return cljs.core.apply.call(null,new cljs.core.Keyword(null,"get-collection","get-collection",1355574565).cljs$core$IFn$_invoke$arity$1(keechma_todomvc.edb.dbal),new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db__25224__auto__),args__25225__auto__);
}));

(keechma_todomvc.edb.get_collection.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(keechma_todomvc.edb.get_collection.cljs$lang$applyTo = (function (seq25253){
var G__25254 = cljs.core.first.call(null,seq25253);
var seq25253__$1 = cljs.core.next.call(null,seq25253);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25254,seq25253__$1);
}));


keechma_todomvc.edb.get_collection_meta = (function keechma_todomvc$edb$get_collection_meta(var_args){
var args__4795__auto__ = [];
var len__4789__auto___25300 = arguments.length;
var i__4790__auto___25301 = (0);
while(true){
if((i__4790__auto___25301 < len__4789__auto___25300)){
args__4795__auto__.push((arguments[i__4790__auto___25301]));

var G__25302 = (i__4790__auto___25301 + (1));
i__4790__auto___25301 = G__25302;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return keechma_todomvc.edb.get_collection_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(keechma_todomvc.edb.get_collection_meta.cljs$core$IFn$_invoke$arity$variadic = (function (db__25224__auto__,args__25225__auto__){
return cljs.core.apply.call(null,new cljs.core.Keyword(null,"get-collection-meta","get-collection-meta",-407930811).cljs$core$IFn$_invoke$arity$1(keechma_todomvc.edb.dbal),new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db__25224__auto__),args__25225__auto__);
}));

(keechma_todomvc.edb.get_collection_meta.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(keechma_todomvc.edb.get_collection_meta.cljs$lang$applyTo = (function (seq25255){
var G__25256 = cljs.core.first.call(null,seq25255);
var seq25255__$1 = cljs.core.next.call(null,seq25255);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25256,seq25255__$1);
}));


keechma_todomvc.edb.get_item_by_id = (function keechma_todomvc$edb$get_item_by_id(var_args){
var args__4795__auto__ = [];
var len__4789__auto___25303 = arguments.length;
var i__4790__auto___25304 = (0);
while(true){
if((i__4790__auto___25304 < len__4789__auto___25303)){
args__4795__auto__.push((arguments[i__4790__auto___25304]));

var G__25305 = (i__4790__auto___25304 + (1));
i__4790__auto___25304 = G__25305;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return keechma_todomvc.edb.get_item_by_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(keechma_todomvc.edb.get_item_by_id.cljs$core$IFn$_invoke$arity$variadic = (function (db__25224__auto__,args__25225__auto__){
return cljs.core.apply.call(null,new cljs.core.Keyword(null,"get-item-by-id","get-item-by-id",1876302674).cljs$core$IFn$_invoke$arity$1(keechma_todomvc.edb.dbal),new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db__25224__auto__),args__25225__auto__);
}));

(keechma_todomvc.edb.get_item_by_id.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(keechma_todomvc.edb.get_item_by_id.cljs$lang$applyTo = (function (seq25257){
var G__25258 = cljs.core.first.call(null,seq25257);
var seq25257__$1 = cljs.core.next.call(null,seq25257);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25258,seq25257__$1);
}));


keechma_todomvc.edb.get_item_meta = (function keechma_todomvc$edb$get_item_meta(var_args){
var args__4795__auto__ = [];
var len__4789__auto___25306 = arguments.length;
var i__4790__auto___25307 = (0);
while(true){
if((i__4790__auto___25307 < len__4789__auto___25306)){
args__4795__auto__.push((arguments[i__4790__auto___25307]));

var G__25308 = (i__4790__auto___25307 + (1));
i__4790__auto___25307 = G__25308;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return keechma_todomvc.edb.get_item_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(keechma_todomvc.edb.get_item_meta.cljs$core$IFn$_invoke$arity$variadic = (function (db__25224__auto__,args__25225__auto__){
return cljs.core.apply.call(null,new cljs.core.Keyword(null,"get-item-meta","get-item-meta",2060605026).cljs$core$IFn$_invoke$arity$1(keechma_todomvc.edb.dbal),new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db__25224__auto__),args__25225__auto__);
}));

(keechma_todomvc.edb.get_item_meta.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(keechma_todomvc.edb.get_item_meta.cljs$lang$applyTo = (function (seq25259){
var G__25260 = cljs.core.first.call(null,seq25259);
var seq25259__$1 = cljs.core.next.call(null,seq25259);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25260,seq25259__$1);
}));


keechma_todomvc.edb.get_named_item = (function keechma_todomvc$edb$get_named_item(var_args){
var args__4795__auto__ = [];
var len__4789__auto___25309 = arguments.length;
var i__4790__auto___25310 = (0);
while(true){
if((i__4790__auto___25310 < len__4789__auto___25309)){
args__4795__auto__.push((arguments[i__4790__auto___25310]));

var G__25311 = (i__4790__auto___25310 + (1));
i__4790__auto___25310 = G__25311;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return keechma_todomvc.edb.get_named_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(keechma_todomvc.edb.get_named_item.cljs$core$IFn$_invoke$arity$variadic = (function (db__25224__auto__,args__25225__auto__){
return cljs.core.apply.call(null,new cljs.core.Keyword(null,"get-named-item","get-named-item",1064962478).cljs$core$IFn$_invoke$arity$1(keechma_todomvc.edb.dbal),new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db__25224__auto__),args__25225__auto__);
}));

(keechma_todomvc.edb.get_named_item.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(keechma_todomvc.edb.get_named_item.cljs$lang$applyTo = (function (seq25261){
var G__25262 = cljs.core.first.call(null,seq25261);
var seq25261__$1 = cljs.core.next.call(null,seq25261);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25262,seq25261__$1);
}));


keechma_todomvc.edb.get_named_item_meta = (function keechma_todomvc$edb$get_named_item_meta(var_args){
var args__4795__auto__ = [];
var len__4789__auto___25312 = arguments.length;
var i__4790__auto___25313 = (0);
while(true){
if((i__4790__auto___25313 < len__4789__auto___25312)){
args__4795__auto__.push((arguments[i__4790__auto___25313]));

var G__25314 = (i__4790__auto___25313 + (1));
i__4790__auto___25313 = G__25314;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return keechma_todomvc.edb.get_named_item_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(keechma_todomvc.edb.get_named_item_meta.cljs$core$IFn$_invoke$arity$variadic = (function (db__25224__auto__,args__25225__auto__){
return cljs.core.apply.call(null,new cljs.core.Keyword(null,"get-named-item-meta","get-named-item-meta",-902647137).cljs$core$IFn$_invoke$arity$1(keechma_todomvc.edb.dbal),new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db__25224__auto__),args__25225__auto__);
}));

(keechma_todomvc.edb.get_named_item_meta.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(keechma_todomvc.edb.get_named_item_meta.cljs$lang$applyTo = (function (seq25263){
var G__25264 = cljs.core.first.call(null,seq25263);
var seq25263__$1 = cljs.core.next.call(null,seq25263);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25264,seq25263__$1);
}));


keechma_todomvc.edb.insert_collection = (function keechma_todomvc$edb$insert_collection(var_args){
var args__4795__auto__ = [];
var len__4789__auto___25315 = arguments.length;
var i__4790__auto___25316 = (0);
while(true){
if((i__4790__auto___25316 < len__4789__auto___25315)){
args__4795__auto__.push((arguments[i__4790__auto___25316]));

var G__25317 = (i__4790__auto___25316 + (1));
i__4790__auto___25316 = G__25317;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return keechma_todomvc.edb.insert_collection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(keechma_todomvc.edb.insert_collection.cljs$core$IFn$_invoke$arity$variadic = (function (db__25226__auto__,args__25227__auto__){
return cljs.core.assoc.call(null,db__25226__auto__,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,new cljs.core.Keyword(null,"insert-collection","insert-collection",385768703).cljs$core$IFn$_invoke$arity$1(keechma_todomvc.edb.dbal),new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db__25226__auto__),args__25227__auto__));
}));

(keechma_todomvc.edb.insert_collection.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(keechma_todomvc.edb.insert_collection.cljs$lang$applyTo = (function (seq25265){
var G__25266 = cljs.core.first.call(null,seq25265);
var seq25265__$1 = cljs.core.next.call(null,seq25265);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25266,seq25265__$1);
}));


keechma_todomvc.edb.insert_item = (function keechma_todomvc$edb$insert_item(var_args){
var args__4795__auto__ = [];
var len__4789__auto___25318 = arguments.length;
var i__4790__auto___25319 = (0);
while(true){
if((i__4790__auto___25319 < len__4789__auto___25318)){
args__4795__auto__.push((arguments[i__4790__auto___25319]));

var G__25320 = (i__4790__auto___25319 + (1));
i__4790__auto___25319 = G__25320;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return keechma_todomvc.edb.insert_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(keechma_todomvc.edb.insert_item.cljs$core$IFn$_invoke$arity$variadic = (function (db__25226__auto__,args__25227__auto__){
return cljs.core.assoc.call(null,db__25226__auto__,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,new cljs.core.Keyword(null,"insert-item","insert-item",-1846152333).cljs$core$IFn$_invoke$arity$1(keechma_todomvc.edb.dbal),new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db__25226__auto__),args__25227__auto__));
}));

(keechma_todomvc.edb.insert_item.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(keechma_todomvc.edb.insert_item.cljs$lang$applyTo = (function (seq25267){
var G__25268 = cljs.core.first.call(null,seq25267);
var seq25267__$1 = cljs.core.next.call(null,seq25267);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25268,seq25267__$1);
}));


keechma_todomvc.edb.insert_meta = (function keechma_todomvc$edb$insert_meta(var_args){
var args__4795__auto__ = [];
var len__4789__auto___25321 = arguments.length;
var i__4790__auto___25322 = (0);
while(true){
if((i__4790__auto___25322 < len__4789__auto___25321)){
args__4795__auto__.push((arguments[i__4790__auto___25322]));

var G__25323 = (i__4790__auto___25322 + (1));
i__4790__auto___25322 = G__25323;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return keechma_todomvc.edb.insert_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(keechma_todomvc.edb.insert_meta.cljs$core$IFn$_invoke$arity$variadic = (function (db__25226__auto__,args__25227__auto__){
return cljs.core.assoc.call(null,db__25226__auto__,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,new cljs.core.Keyword(null,"insert-meta","insert-meta",779549576).cljs$core$IFn$_invoke$arity$1(keechma_todomvc.edb.dbal),new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db__25226__auto__),args__25227__auto__));
}));

(keechma_todomvc.edb.insert_meta.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(keechma_todomvc.edb.insert_meta.cljs$lang$applyTo = (function (seq25269){
var G__25270 = cljs.core.first.call(null,seq25269);
var seq25269__$1 = cljs.core.next.call(null,seq25269);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25270,seq25269__$1);
}));


keechma_todomvc.edb.insert_named_item = (function keechma_todomvc$edb$insert_named_item(var_args){
var args__4795__auto__ = [];
var len__4789__auto___25324 = arguments.length;
var i__4790__auto___25325 = (0);
while(true){
if((i__4790__auto___25325 < len__4789__auto___25324)){
args__4795__auto__.push((arguments[i__4790__auto___25325]));

var G__25326 = (i__4790__auto___25325 + (1));
i__4790__auto___25325 = G__25326;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return keechma_todomvc.edb.insert_named_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(keechma_todomvc.edb.insert_named_item.cljs$core$IFn$_invoke$arity$variadic = (function (db__25226__auto__,args__25227__auto__){
return cljs.core.assoc.call(null,db__25226__auto__,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,new cljs.core.Keyword(null,"insert-named-item","insert-named-item",-2075226073).cljs$core$IFn$_invoke$arity$1(keechma_todomvc.edb.dbal),new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db__25226__auto__),args__25227__auto__));
}));

(keechma_todomvc.edb.insert_named_item.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(keechma_todomvc.edb.insert_named_item.cljs$lang$applyTo = (function (seq25271){
var G__25272 = cljs.core.first.call(null,seq25271);
var seq25271__$1 = cljs.core.next.call(null,seq25271);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25272,seq25271__$1);
}));


keechma_todomvc.edb.insert_related_collection = (function keechma_todomvc$edb$insert_related_collection(var_args){
var args__4795__auto__ = [];
var len__4789__auto___25327 = arguments.length;
var i__4790__auto___25328 = (0);
while(true){
if((i__4790__auto___25328 < len__4789__auto___25327)){
args__4795__auto__.push((arguments[i__4790__auto___25328]));

var G__25329 = (i__4790__auto___25328 + (1));
i__4790__auto___25328 = G__25329;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return keechma_todomvc.edb.insert_related_collection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(keechma_todomvc.edb.insert_related_collection.cljs$core$IFn$_invoke$arity$variadic = (function (db__25226__auto__,args__25227__auto__){
return cljs.core.assoc.call(null,db__25226__auto__,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,new cljs.core.Keyword(null,"insert-related-collection","insert-related-collection",991015039).cljs$core$IFn$_invoke$arity$1(keechma_todomvc.edb.dbal),new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db__25226__auto__),args__25227__auto__));
}));

(keechma_todomvc.edb.insert_related_collection.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(keechma_todomvc.edb.insert_related_collection.cljs$lang$applyTo = (function (seq25273){
var G__25274 = cljs.core.first.call(null,seq25273);
var seq25273__$1 = cljs.core.next.call(null,seq25273);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25274,seq25273__$1);
}));


keechma_todomvc.edb.prepend_collection = (function keechma_todomvc$edb$prepend_collection(var_args){
var args__4795__auto__ = [];
var len__4789__auto___25330 = arguments.length;
var i__4790__auto___25331 = (0);
while(true){
if((i__4790__auto___25331 < len__4789__auto___25330)){
args__4795__auto__.push((arguments[i__4790__auto___25331]));

var G__25332 = (i__4790__auto___25331 + (1));
i__4790__auto___25331 = G__25332;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return keechma_todomvc.edb.prepend_collection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(keechma_todomvc.edb.prepend_collection.cljs$core$IFn$_invoke$arity$variadic = (function (db__25226__auto__,args__25227__auto__){
return cljs.core.assoc.call(null,db__25226__auto__,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,new cljs.core.Keyword(null,"prepend-collection","prepend-collection",-715711190).cljs$core$IFn$_invoke$arity$1(keechma_todomvc.edb.dbal),new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db__25226__auto__),args__25227__auto__));
}));

(keechma_todomvc.edb.prepend_collection.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(keechma_todomvc.edb.prepend_collection.cljs$lang$applyTo = (function (seq25275){
var G__25276 = cljs.core.first.call(null,seq25275);
var seq25275__$1 = cljs.core.next.call(null,seq25275);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25276,seq25275__$1);
}));


keechma_todomvc.edb.prepend_related_collection = (function keechma_todomvc$edb$prepend_related_collection(var_args){
var args__4795__auto__ = [];
var len__4789__auto___25333 = arguments.length;
var i__4790__auto___25334 = (0);
while(true){
if((i__4790__auto___25334 < len__4789__auto___25333)){
args__4795__auto__.push((arguments[i__4790__auto___25334]));

var G__25335 = (i__4790__auto___25334 + (1));
i__4790__auto___25334 = G__25335;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return keechma_todomvc.edb.prepend_related_collection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(keechma_todomvc.edb.prepend_related_collection.cljs$core$IFn$_invoke$arity$variadic = (function (db__25226__auto__,args__25227__auto__){
return cljs.core.assoc.call(null,db__25226__auto__,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,new cljs.core.Keyword(null,"prepend-related-collection","prepend-related-collection",-724313731).cljs$core$IFn$_invoke$arity$1(keechma_todomvc.edb.dbal),new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db__25226__auto__),args__25227__auto__));
}));

(keechma_todomvc.edb.prepend_related_collection.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(keechma_todomvc.edb.prepend_related_collection.cljs$lang$applyTo = (function (seq25277){
var G__25278 = cljs.core.first.call(null,seq25277);
var seq25277__$1 = cljs.core.next.call(null,seq25277);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25278,seq25277__$1);
}));


keechma_todomvc.edb.remove_collection = (function keechma_todomvc$edb$remove_collection(var_args){
var args__4795__auto__ = [];
var len__4789__auto___25336 = arguments.length;
var i__4790__auto___25337 = (0);
while(true){
if((i__4790__auto___25337 < len__4789__auto___25336)){
args__4795__auto__.push((arguments[i__4790__auto___25337]));

var G__25338 = (i__4790__auto___25337 + (1));
i__4790__auto___25337 = G__25338;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return keechma_todomvc.edb.remove_collection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(keechma_todomvc.edb.remove_collection.cljs$core$IFn$_invoke$arity$variadic = (function (db__25226__auto__,args__25227__auto__){
return cljs.core.assoc.call(null,db__25226__auto__,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,new cljs.core.Keyword(null,"remove-collection","remove-collection",733692375).cljs$core$IFn$_invoke$arity$1(keechma_todomvc.edb.dbal),new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db__25226__auto__),args__25227__auto__));
}));

(keechma_todomvc.edb.remove_collection.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(keechma_todomvc.edb.remove_collection.cljs$lang$applyTo = (function (seq25279){
var G__25280 = cljs.core.first.call(null,seq25279);
var seq25279__$1 = cljs.core.next.call(null,seq25279);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25280,seq25279__$1);
}));


keechma_todomvc.edb.remove_item = (function keechma_todomvc$edb$remove_item(var_args){
var args__4795__auto__ = [];
var len__4789__auto___25339 = arguments.length;
var i__4790__auto___25340 = (0);
while(true){
if((i__4790__auto___25340 < len__4789__auto___25339)){
args__4795__auto__.push((arguments[i__4790__auto___25340]));

var G__25341 = (i__4790__auto___25340 + (1));
i__4790__auto___25340 = G__25341;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return keechma_todomvc.edb.remove_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(keechma_todomvc.edb.remove_item.cljs$core$IFn$_invoke$arity$variadic = (function (db__25226__auto__,args__25227__auto__){
return cljs.core.assoc.call(null,db__25226__auto__,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,new cljs.core.Keyword(null,"remove-item","remove-item",2128630697).cljs$core$IFn$_invoke$arity$1(keechma_todomvc.edb.dbal),new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db__25226__auto__),args__25227__auto__));
}));

(keechma_todomvc.edb.remove_item.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(keechma_todomvc.edb.remove_item.cljs$lang$applyTo = (function (seq25281){
var G__25282 = cljs.core.first.call(null,seq25281);
var seq25281__$1 = cljs.core.next.call(null,seq25281);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25282,seq25281__$1);
}));


keechma_todomvc.edb.remove_meta = (function keechma_todomvc$edb$remove_meta(var_args){
var args__4795__auto__ = [];
var len__4789__auto___25342 = arguments.length;
var i__4790__auto___25343 = (0);
while(true){
if((i__4790__auto___25343 < len__4789__auto___25342)){
args__4795__auto__.push((arguments[i__4790__auto___25343]));

var G__25344 = (i__4790__auto___25343 + (1));
i__4790__auto___25343 = G__25344;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return keechma_todomvc.edb.remove_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(keechma_todomvc.edb.remove_meta.cljs$core$IFn$_invoke$arity$variadic = (function (db__25226__auto__,args__25227__auto__){
return cljs.core.assoc.call(null,db__25226__auto__,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,new cljs.core.Keyword(null,"remove-meta","remove-meta",-878580370).cljs$core$IFn$_invoke$arity$1(keechma_todomvc.edb.dbal),new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db__25226__auto__),args__25227__auto__));
}));

(keechma_todomvc.edb.remove_meta.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(keechma_todomvc.edb.remove_meta.cljs$lang$applyTo = (function (seq25283){
var G__25284 = cljs.core.first.call(null,seq25283);
var seq25283__$1 = cljs.core.next.call(null,seq25283);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25284,seq25283__$1);
}));


keechma_todomvc.edb.remove_named_item = (function keechma_todomvc$edb$remove_named_item(var_args){
var args__4795__auto__ = [];
var len__4789__auto___25345 = arguments.length;
var i__4790__auto___25346 = (0);
while(true){
if((i__4790__auto___25346 < len__4789__auto___25345)){
args__4795__auto__.push((arguments[i__4790__auto___25346]));

var G__25347 = (i__4790__auto___25346 + (1));
i__4790__auto___25346 = G__25347;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return keechma_todomvc.edb.remove_named_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(keechma_todomvc.edb.remove_named_item.cljs$core$IFn$_invoke$arity$variadic = (function (db__25226__auto__,args__25227__auto__){
return cljs.core.assoc.call(null,db__25226__auto__,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,new cljs.core.Keyword(null,"remove-named-item","remove-named-item",1073414277).cljs$core$IFn$_invoke$arity$1(keechma_todomvc.edb.dbal),new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db__25226__auto__),args__25227__auto__));
}));

(keechma_todomvc.edb.remove_named_item.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(keechma_todomvc.edb.remove_named_item.cljs$lang$applyTo = (function (seq25285){
var G__25286 = cljs.core.first.call(null,seq25285);
var seq25285__$1 = cljs.core.next.call(null,seq25285);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25286,seq25285__$1);
}));


keechma_todomvc.edb.remove_related_collection = (function keechma_todomvc$edb$remove_related_collection(var_args){
var args__4795__auto__ = [];
var len__4789__auto___25348 = arguments.length;
var i__4790__auto___25349 = (0);
while(true){
if((i__4790__auto___25349 < len__4789__auto___25348)){
args__4795__auto__.push((arguments[i__4790__auto___25349]));

var G__25350 = (i__4790__auto___25349 + (1));
i__4790__auto___25349 = G__25350;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return keechma_todomvc.edb.remove_related_collection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(keechma_todomvc.edb.remove_related_collection.cljs$core$IFn$_invoke$arity$variadic = (function (db__25226__auto__,args__25227__auto__){
return cljs.core.assoc.call(null,db__25226__auto__,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,new cljs.core.Keyword(null,"remove-related-collection","remove-related-collection",929850472).cljs$core$IFn$_invoke$arity$1(keechma_todomvc.edb.dbal),new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db__25226__auto__),args__25227__auto__));
}));

(keechma_todomvc.edb.remove_related_collection.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(keechma_todomvc.edb.remove_related_collection.cljs$lang$applyTo = (function (seq25287){
var G__25288 = cljs.core.first.call(null,seq25287);
var seq25287__$1 = cljs.core.next.call(null,seq25287);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25288,seq25287__$1);
}));


keechma_todomvc.edb.vacuum = (function keechma_todomvc$edb$vacuum(var_args){
var args__4795__auto__ = [];
var len__4789__auto___25351 = arguments.length;
var i__4790__auto___25352 = (0);
while(true){
if((i__4790__auto___25352 < len__4789__auto___25351)){
args__4795__auto__.push((arguments[i__4790__auto___25352]));

var G__25353 = (i__4790__auto___25352 + (1));
i__4790__auto___25352 = G__25353;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return keechma_todomvc.edb.vacuum.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(keechma_todomvc.edb.vacuum.cljs$core$IFn$_invoke$arity$variadic = (function (db__25226__auto__,args__25227__auto__){
return cljs.core.assoc.call(null,db__25226__auto__,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,new cljs.core.Keyword(null,"vacuum","vacuum",1586940514).cljs$core$IFn$_invoke$arity$1(keechma_todomvc.edb.dbal),new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db__25226__auto__),args__25227__auto__));
}));

(keechma_todomvc.edb.vacuum.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(keechma_todomvc.edb.vacuum.cljs$lang$applyTo = (function (seq25289){
var G__25290 = cljs.core.first.call(null,seq25289);
var seq25289__$1 = cljs.core.next.call(null,seq25289);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25290,seq25289__$1);
}));


//# sourceMappingURL=edb.js.map?rel=1761389401114
