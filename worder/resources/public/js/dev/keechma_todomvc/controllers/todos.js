// Compiled by ClojureScript 1.10.597 {}
goog.provide('keechma_todomvc.controllers.todos');
goog.require('cljs.core');
goog.require('keechma.controller');
goog.require('keechma_todomvc.entities.todo');

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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
keechma_todomvc.controllers.todos.Controller = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(keechma_todomvc.controllers.todos.Controller.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(keechma_todomvc.controllers.todos.Controller.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k25591,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__25595 = k25591;
switch (G__25595) {
default:
return cljs.core.get.call(null,self__.__extmap,k25591,else__4442__auto__);

}
}));

(keechma_todomvc.controllers.todos.Controller.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4461__auto__,p__25596){
var vec__25597 = p__25596;
var k__4462__auto__ = cljs.core.nth.call(null,vec__25597,(0),null);
var v__4463__auto__ = cljs.core.nth.call(null,vec__25597,(1),null);
return f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__);
}),init__4460__auto__,this__4458__auto____$1);
}));

(keechma_todomvc.controllers.todos.Controller.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4454__auto__,pr_pair__4456__auto__,"#keechma-todomvc.controllers.todos.Controller{",", ","}",opts__4455__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(keechma_todomvc.controllers.todos.Controller.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25590){
var self__ = this;
var G__25590__$1 = this;
return (new cljs.core.RecordIter((0),G__25590__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(keechma_todomvc.controllers.todos.Controller.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(keechma_todomvc.controllers.todos.Controller.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new keechma_todomvc.controllers.todos.Controller(self__.__meta,self__.__extmap,self__.__hash));
}));

(keechma_todomvc.controllers.todos.Controller.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
}));

(keechma_todomvc.controllers.todos.Controller.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (1008427525 ^ cljs.core.hash_unordered_coll.call(null,coll__4436__auto__));
}).call(null,this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(keechma_todomvc.controllers.todos.Controller.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25592,other25593){
var self__ = this;
var this25592__$1 = this;
return (((!((other25593 == null)))) && ((this25592__$1.constructor === other25593.constructor)) && (cljs.core._EQ_.call(null,this25592__$1.__extmap,other25593.__extmap)));
}));

(keechma_todomvc.controllers.todos.Controller.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4449__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new keechma_todomvc.controllers.todos.Controller(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4449__auto__)),null));
}
}));

(keechma_todomvc.controllers.todos.Controller.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__25590){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__25600 = cljs.core.keyword_identical_QMARK_;
var expr__25601 = k__4447__auto__;
return (new keechma_todomvc.controllers.todos.Controller(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4447__auto__,G__25590),null));
}));

(keechma_todomvc.controllers.todos.Controller.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(keechma_todomvc.controllers.todos.Controller.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__25590){
var self__ = this;
var this__4438__auto____$1 = this;
return (new keechma_todomvc.controllers.todos.Controller(G__25590,self__.__extmap,self__.__hash));
}));

(keechma_todomvc.controllers.todos.Controller.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4445__auto__,(0)),cljs.core._nth.call(null,entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(keechma_todomvc.controllers.todos.Controller.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(keechma_todomvc.controllers.todos.Controller.cljs$lang$type = true);

(keechma_todomvc.controllers.todos.Controller.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"keechma-todomvc.controllers.todos/Controller",null,(1),null));
}));

(keechma_todomvc.controllers.todos.Controller.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write.call(null,writer__4483__auto__,"keechma-todomvc.controllers.todos/Controller");
}));

/**
 * Positional factory function for keechma-todomvc.controllers.todos/Controller.
 */
keechma_todomvc.controllers.todos.__GT_Controller = (function keechma_todomvc$controllers$todos$__GT_Controller(){
return (new keechma_todomvc.controllers.todos.Controller(null,null,null));
});

/**
 * Factory function for keechma-todomvc.controllers.todos/Controller, taking a map of keywords to field values.
 */
keechma_todomvc.controllers.todos.map__GT_Controller = (function keechma_todomvc$controllers$todos$map__GT_Controller(G__25594){
var extmap__4478__auto__ = (function (){var G__25603 = cljs.core.dissoc.call(null,G__25594);
if(cljs.core.record_QMARK_.call(null,G__25594)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__25603);
} else {
return G__25603;
}
})();
return (new keechma_todomvc.controllers.todos.Controller(null,cljs.core.not_empty.call(null,extmap__4478__auto__),null));
});

cljs.core._add_method.call(null,keechma.controller.params,keechma_todomvc.controllers.todos.Controller,(function (_,route_params){
return new cljs.core.Keyword(null,"always-running","always-running",334916433);
}));
cljs.core._add_method.call(null,keechma.controller.start,keechma_todomvc.controllers.todos.Controller,(function (_,params,app_db){
return keechma_todomvc.entities.todo.create_todos.call(null,app_db);
}));
cljs.core._add_method.call(null,keechma.controller.handler,keechma_todomvc.controllers.todos.Controller,(function (_,app_db_atom,in_chan,___$1){
return keechma.controller.dispatcher.call(null,app_db_atom,in_chan,keechma_todomvc.entities.todo.actions.call(null));
}));

//# sourceMappingURL=todos.js.map?rel=1761389401829
