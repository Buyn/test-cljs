// Compiled by ClojureScript 1.10.597 {}
goog.provide('entitydb.util');
goog.require('cljs.core');
entitydb.util.passthrough_item = (function entitydb$util$passthrough_item(item){
return item;
});
entitydb.util.add_empty_layout = (function entitydb$util$add_empty_layout(db,entity_kw){
if((entity_kw.call(null,db) == null)){
return cljs.core.assoc.call(null,db,entity_kw,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"store","store",1512230022),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"c-one","c-one",-1168064923),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"c-many","c-many",745949041),cljs.core.PersistentArrayMap.EMPTY], null));
} else {
return db;
}
});
entitydb.util.ensure_layout = (function entitydb$util$ensure_layout(dbal_fn){
return (function() { 
var G__25144__delegate = function (schema,db,entity_kw,args){
var db_with_layout = entitydb.util.add_empty_layout.call(null,db,entity_kw);
return cljs.core.apply.call(null,dbal_fn,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema,db_with_layout,entity_kw], null),args));
};
var G__25144 = function (schema,db,entity_kw,var_args){
var args = null;
if (arguments.length > 3) {
var G__25145__i = 0, G__25145__a = new Array(arguments.length -  3);
while (G__25145__i < G__25145__a.length) {G__25145__a[G__25145__i] = arguments[G__25145__i + 3]; ++G__25145__i;}
  args = new cljs.core.IndexedSeq(G__25145__a,0,null);
} 
return G__25144__delegate.call(this,schema,db,entity_kw,args);};
G__25144.cljs$lang$maxFixedArity = 3;
G__25144.cljs$lang$applyTo = (function (arglist__25146){
var schema = cljs.core.first(arglist__25146);
arglist__25146 = cljs.core.next(arglist__25146);
var db = cljs.core.first(arglist__25146);
arglist__25146 = cljs.core.next(arglist__25146);
var entity_kw = cljs.core.first(arglist__25146);
var args = cljs.core.rest(arglist__25146);
return G__25144__delegate(schema,db,entity_kw,args);
});
G__25144.cljs$core$IFn$_invoke$arity$variadic = G__25144__delegate;
return G__25144;
})()
;
});
entitydb.util.call_middleware = (function entitydb$util$call_middleware(get_or_set,schema,entity_kw,item){
var middlewares = (function (){var or__4185__auto__ = cljs.core.get_in.call(null,schema,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,new cljs.core.Keyword(null,"middleware","middleware",1462115504),get_or_set], null));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entitydb.util.passthrough_item], null);
}
})();
var pipeline = cljs.core.apply.call(null,cljs.core.comp,cljs.core.reverse.call(null,middlewares));
return pipeline.call(null,item);
});
entitydb.util.call_middleware_set = cljs.core.partial.call(null,entitydb.util.call_middleware,new cljs.core.Keyword(null,"set","set",304602554));
entitydb.util.call_middleware_get = cljs.core.partial.call(null,entitydb.util.call_middleware,new cljs.core.Keyword(null,"get","get",1683182755));
entitydb.util.get_id_fn = (function entitydb$util$get_id_fn(schema,entity_kw){
var or__4185__auto__ = cljs.core.get_in.call(null,schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,new cljs.core.Keyword(null,"id","id",-1388402092)], null));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092);
}
});
entitydb.util.get_item_id = (function entitydb$util$get_item_id(schema,entity_kw,item){
var id_fn = entitydb.util.get_id_fn.call(null,schema,entity_kw);
return id_fn.call(null,item);
});
entitydb.util.get_meta_id = (function entitydb$util$get_meta_id(entity_kw,id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_kw,id], null);
});
entitydb.util.update_values = (function entitydb$util$update_values(var_args){
var args__4795__auto__ = [];
var len__4789__auto___25154 = arguments.length;
var i__4790__auto___25155 = (0);
while(true){
if((i__4790__auto___25155 < len__4789__auto___25154)){
args__4795__auto__.push((arguments[i__4790__auto___25155]));

var G__25156 = (i__4790__auto___25155 + (1));
i__4790__auto___25155 = G__25156;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return entitydb.util.update_values.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(entitydb.util.update_values.cljs$core$IFn$_invoke$arity$variadic = (function (m,f,args){
return cljs.core.reduce.call(null,(function (r,p__25150){
var vec__25151 = p__25150;
var k = cljs.core.nth.call(null,vec__25151,(0),null);
var v = cljs.core.nth.call(null,vec__25151,(1),null);
return cljs.core.assoc.call(null,r,k,cljs.core.apply.call(null,f,v,args));
}),cljs.core.PersistentArrayMap.EMPTY,m);
}));

(entitydb.util.update_values.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(entitydb.util.update_values.cljs$lang$applyTo = (function (seq25147){
var G__25148 = cljs.core.first.call(null,seq25147);
var seq25147__$1 = cljs.core.next.call(null,seq25147);
var G__25149 = cljs.core.first.call(null,seq25147__$1);
var seq25147__$2 = cljs.core.next.call(null,seq25147__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25148,G__25149,seq25147__$2);
}));


//# sourceMappingURL=util.js.map?rel=1761389400740
