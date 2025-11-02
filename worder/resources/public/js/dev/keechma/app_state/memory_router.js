// Compiled by ClojureScript 1.10.597 {}
goog.provide('keechma.app_state.memory_router');
goog.require('cljs.core');
goog.require('keechma.app_state.core');
goog.require('cljs.core.async');
goog.require('keechma.util');
keechma.app_state.memory_router.app_route_states_atom = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
keechma.app_state.memory_router.supported_redirect_actions = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"push","push",799791267),null,new cljs.core.Keyword(null,"replace","replace",-786587770),null,new cljs.core.Keyword(null,"back","back",-417520012),null], null), null);
keechma.app_state.memory_router.get_redirect_action = (function keechma$app_state$memory_router$get_redirect_action(action){
if(cljs.core.contains_QMARK_.call(null,keechma.app_state.memory_router.supported_redirect_actions,action)){
return action;
} else {
return new cljs.core.Keyword(null,"push","push",799791267);
}
});
keechma.app_state.memory_router.default_route_QMARK_ = (function keechma$app_state$memory_router$default_route_QMARK_(r){
return ((cljs.core.vector_QMARK_.call(null,r)) && (cljs.core._EQ_.call(null,"",cljs.core.first.call(null,r))));
});
keechma.app_state.memory_router.get_default_route = (function keechma$app_state$memory_router$get_default_route(routes){
var default_route = (function (){var or__4185__auto__ = cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,keechma.app_state.memory_router.default_route_QMARK_,routes)));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),default_route,new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_route], null)], null);
});
keechma.app_state.memory_router.get_initial_route = (function keechma$app_state$memory_router$get_initial_route(app_name,routes){
var temp__5733__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,keechma.app_state.memory_router.app_route_states_atom),app_name);
if(cljs.core.truth_(temp__5733__auto__)){
var app_route_state = temp__5733__auto__;
return app_route_state;
} else {
return keechma.app_state.memory_router.get_default_route.call(null,routes);
}
});
keechma.app_state.memory_router.push_to_stack = (function keechma$app_state$memory_router$push_to_stack(current_stack,params){
var temp__5733__auto__ = keechma.util.index_of.call(null,current_stack,params);
if(cljs.core.truth_(temp__5733__auto__)){
var idx = temp__5733__auto__;
return cljs.core.vec.call(null,cljs.core.take.call(null,(idx + (1)),current_stack));
} else {
return cljs.core.conj.call(null,current_stack,params);
}
});
keechma.app_state.memory_router.limit_stack = (function keechma$app_state$memory_router$limit_stack(stack){
return cljs.core.vec.call(null,cljs.core.take_last.call(null,(50),stack));
});
keechma.app_state.memory_router.apply_route_change = (function keechma$app_state$memory_router$apply_route_change(action,routes,current_route,params){
var current_stack = new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(current_route);
var G__25375 = action;
var G__25375__$1 = (((G__25375 instanceof cljs.core.Keyword))?G__25375.fqn:null);
switch (G__25375__$1) {
case "push":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),params,new cljs.core.Keyword(null,"stack","stack",-793405930),keechma.app_state.memory_router.limit_stack.call(null,keechma.app_state.memory_router.push_to_stack.call(null,current_stack,params))], null);

break;
case "replace":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),params,new cljs.core.Keyword(null,"stack","stack",-793405930),keechma.app_state.memory_router.limit_stack.call(null,cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.drop_last.call(null,current_stack)),params))], null);

break;
case "back":
var new_stack = keechma.app_state.memory_router.limit_stack.call(null,cljs.core.vec.call(null,cljs.core.drop_last.call(null,current_stack)));
var new_params = cljs.core.last.call(null,new_stack);
if(cljs.core.truth_(new_params)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new_params,new cljs.core.Keyword(null,"stack","stack",-793405930),new_stack], null);
} else {
return keechma.app_state.memory_router.get_default_route.call(null,routes);
}

break;
default:
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null)], null);

}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {keechma.app_state.core.IRouter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
keechma.app_state.memory_router.MemoryRouter = (function (app_name,routes,routes_chan,app_db,__meta,__extmap,__hash){
this.app_name = app_name;
this.routes = routes;
this.routes_chan = routes_chan;
this.app_db = app_db;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(keechma.app_state.memory_router.MemoryRouter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(keechma.app_state.memory_router.MemoryRouter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k25378,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__25382 = k25378;
var G__25382__$1 = (((G__25382 instanceof cljs.core.Keyword))?G__25382.fqn:null);
switch (G__25382__$1) {
case "app-name":
return self__.app_name;

break;
case "routes":
return self__.routes;

break;
case "routes-chan":
return self__.routes_chan;

break;
case "app-db":
return self__.app_db;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25378,else__4442__auto__);

}
}));

(keechma.app_state.memory_router.MemoryRouter.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4461__auto__,p__25383){
var vec__25384 = p__25383;
var k__4462__auto__ = cljs.core.nth.call(null,vec__25384,(0),null);
var v__4463__auto__ = cljs.core.nth.call(null,vec__25384,(1),null);
return f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__);
}),init__4460__auto__,this__4458__auto____$1);
}));

(keechma.app_state.memory_router.MemoryRouter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4454__auto__,pr_pair__4456__auto__,"#keechma.app-state.memory-router.MemoryRouter{",", ","}",opts__4455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-name","app-name",-268811251),self__.app_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db],null))], null),self__.__extmap));
}));

(keechma.app_state.memory_router.MemoryRouter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25377){
var self__ = this;
var G__25377__$1 = this;
return (new cljs.core.RecordIter((0),G__25377__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-name","app-name",-268811251),new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),new cljs.core.Keyword(null,"app-db","app-db",865606302)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(keechma.app_state.memory_router.MemoryRouter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(keechma.app_state.memory_router.MemoryRouter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new keechma.app_state.memory_router.MemoryRouter(self__.app_name,self__.routes,self__.routes_chan,self__.app_db,self__.__meta,self__.__extmap,self__.__hash));
}));

(keechma.app_state.memory_router.MemoryRouter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
}));

(keechma.app_state.memory_router.MemoryRouter.prototype.keechma$app_state$core$IRouter$ = cljs.core.PROTOCOL_SENTINEL);

(keechma.app_state.memory_router.MemoryRouter.prototype.keechma$app_state$core$IRouter$start_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var routes__$1 = new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(this$__$1);
var initial_route = keechma.app_state.memory_router.get_initial_route.call(null,self__.app_name,routes__$1);
cljs.core.swap_BANG_.call(null,self__.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"route","route",329891309),initial_route);

return this$__$1;
}));

(keechma.app_state.memory_router.MemoryRouter.prototype.keechma$app_state$core$IRouter$stop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
}));

(keechma.app_state.memory_router.MemoryRouter.prototype.keechma$app_state$core$IRouter$url$arity$2 = (function (_,params){
var self__ = this;
var ___$1 = this;
return params;
}));

(keechma.app_state.memory_router.MemoryRouter.prototype.keechma$app_state$core$IRouter$redirect_BANG_$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return this$__$1.keechma$app_state$core$IRouter$redirect_BANG_$arity$3(null,params,new cljs.core.Keyword(null,"push","push",799791267));
}));

(keechma.app_state.memory_router.MemoryRouter.prototype.keechma$app_state$core$IRouter$redirect_BANG_$arity$3 = (function (this$,params,action){
var self__ = this;
var this$__$1 = this;
var routes_chan__$1 = new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796).cljs$core$IFn$_invoke$arity$1(this$__$1);
var routes__$1 = new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(this$__$1);
var redirect_action = keechma.app_state.memory_router.get_redirect_action.call(null,action);
var app_db__$1 = cljs.core.deref.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(this$__$1));
var current_route = new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(app_db__$1);
var new_route = keechma.app_state.memory_router.apply_route_change.call(null,redirect_action,routes__$1,current_route,params);
var app_name__$1 = new cljs.core.Keyword(null,"app-name","app-name",-268811251).cljs$core$IFn$_invoke$arity$1(this$__$1);
cljs.core.swap_BANG_.call(null,keechma.app_state.memory_router.app_route_states_atom,cljs.core.assoc,app_name__$1,new_route);

return cljs.core.async.put_BANG_.call(null,routes_chan__$1,new_route);
}));

(keechma.app_state.memory_router.MemoryRouter.prototype.keechma$app_state$core$IRouter$wrap_component$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(keechma.app_state.memory_router.MemoryRouter.prototype.keechma$app_state$core$IRouter$linkable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(keechma.app_state.memory_router.MemoryRouter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (1761432056 ^ cljs.core.hash_unordered_coll.call(null,coll__4436__auto__));
}).call(null,this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(keechma.app_state.memory_router.MemoryRouter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25379,other25380){
var self__ = this;
var this25379__$1 = this;
return (((!((other25380 == null)))) && ((this25379__$1.constructor === other25380.constructor)) && (cljs.core._EQ_.call(null,this25379__$1.app_name,other25380.app_name)) && (cljs.core._EQ_.call(null,this25379__$1.routes,other25380.routes)) && (cljs.core._EQ_.call(null,this25379__$1.routes_chan,other25380.routes_chan)) && (cljs.core._EQ_.call(null,this25379__$1.app_db,other25380.app_db)) && (cljs.core._EQ_.call(null,this25379__$1.__extmap,other25380.__extmap)));
}));

(keechma.app_state.memory_router.MemoryRouter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"routes","routes",457900162),null,new cljs.core.Keyword(null,"app-name","app-name",-268811251),null,new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),null,new cljs.core.Keyword(null,"app-db","app-db",865606302),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new keechma.app_state.memory_router.MemoryRouter(self__.app_name,self__.routes,self__.routes_chan,self__.app_db,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4449__auto__)),null));
}
}));

(keechma.app_state.memory_router.MemoryRouter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__25377){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__25387 = cljs.core.keyword_identical_QMARK_;
var expr__25388 = k__4447__auto__;
if(cljs.core.truth_(pred__25387.call(null,new cljs.core.Keyword(null,"app-name","app-name",-268811251),expr__25388))){
return (new keechma.app_state.memory_router.MemoryRouter(G__25377,self__.routes,self__.routes_chan,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25387.call(null,new cljs.core.Keyword(null,"routes","routes",457900162),expr__25388))){
return (new keechma.app_state.memory_router.MemoryRouter(self__.app_name,G__25377,self__.routes_chan,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25387.call(null,new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),expr__25388))){
return (new keechma.app_state.memory_router.MemoryRouter(self__.app_name,self__.routes,G__25377,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25387.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302),expr__25388))){
return (new keechma.app_state.memory_router.MemoryRouter(self__.app_name,self__.routes,self__.routes_chan,G__25377,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.app_state.memory_router.MemoryRouter(self__.app_name,self__.routes,self__.routes_chan,self__.app_db,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4447__auto__,G__25377),null));
}
}
}
}
}));

(keechma.app_state.memory_router.MemoryRouter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"app-name","app-name",-268811251),self__.app_name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),self__.routes_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db,null))], null),self__.__extmap));
}));

(keechma.app_state.memory_router.MemoryRouter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__25377){
var self__ = this;
var this__4438__auto____$1 = this;
return (new keechma.app_state.memory_router.MemoryRouter(self__.app_name,self__.routes,self__.routes_chan,self__.app_db,G__25377,self__.__extmap,self__.__hash));
}));

(keechma.app_state.memory_router.MemoryRouter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4445__auto__,(0)),cljs.core._nth.call(null,entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(keechma.app_state.memory_router.MemoryRouter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-name","app-name",1371720276,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"routes-chan","routes-chan",-1286759973,null),new cljs.core.Symbol(null,"app-db","app-db",-1788829467,null)], null);
}));

(keechma.app_state.memory_router.MemoryRouter.cljs$lang$type = true);

(keechma.app_state.memory_router.MemoryRouter.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"keechma.app-state.memory-router/MemoryRouter",null,(1),null));
}));

(keechma.app_state.memory_router.MemoryRouter.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write.call(null,writer__4483__auto__,"keechma.app-state.memory-router/MemoryRouter");
}));

/**
 * Positional factory function for keechma.app-state.memory-router/MemoryRouter.
 */
keechma.app_state.memory_router.__GT_MemoryRouter = (function keechma$app_state$memory_router$__GT_MemoryRouter(app_name,routes,routes_chan,app_db){
return (new keechma.app_state.memory_router.MemoryRouter(app_name,routes,routes_chan,app_db,null,null,null));
});

/**
 * Factory function for keechma.app-state.memory-router/MemoryRouter, taking a map of keywords to field values.
 */
keechma.app_state.memory_router.map__GT_MemoryRouter = (function keechma$app_state$memory_router$map__GT_MemoryRouter(G__25381){
var extmap__4478__auto__ = (function (){var G__25390 = cljs.core.dissoc.call(null,G__25381,new cljs.core.Keyword(null,"app-name","app-name",-268811251),new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),new cljs.core.Keyword(null,"app-db","app-db",865606302));
if(cljs.core.record_QMARK_.call(null,G__25381)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__25390);
} else {
return G__25390;
}
})();
return (new keechma.app_state.memory_router.MemoryRouter(new cljs.core.Keyword(null,"app-name","app-name",-268811251).cljs$core$IFn$_invoke$arity$1(G__25381),new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(G__25381),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796).cljs$core$IFn$_invoke$arity$1(G__25381),new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(G__25381),null,cljs.core.not_empty.call(null,extmap__4478__auto__),null));
});

keechma.app_state.memory_router.constructor$ = (function keechma$app_state$memory_router$constructor(routes,routes_chan,state){
var vec__25392 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(state);
var app_name = cljs.core.nth.call(null,vec__25392,(0),null);
var _ = cljs.core.nth.call(null,vec__25392,(1),null);
return keechma.app_state.core.start_BANG_.call(null,keechma.app_state.memory_router.__GT_MemoryRouter.call(null,app_name,routes,routes_chan,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(state)));
});

//# sourceMappingURL=memory_router.js.map?rel=1761389401309
