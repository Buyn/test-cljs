// Compiled by ClojureScript 1.10.597 {}
goog.provide('keechma.controller');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('keechma.reporter');
keechma.controller.not_implemented = new cljs.core.Keyword("keechma.controller","not-implemented","keechma.controller/not-implemented",1337990552);
/**
 * Helper function to dispatch commands from the `handler` function.
 * 
 *   Most of the time, handler function will just dispatch the commands
 *   to other functions. This functions provides a shortcut for that case.
 * 
 *   ```clojure
 *   (defrecord Controller [])
 *  
 *   (defmethod handler Controller [_ app-db-atom in-chan _]
 *  (dispatcher app-db-atom in-chan {:command-name some-fn}))
 *   ```
 */
keechma.controller.dispatcher = (function keechma$controller$dispatcher(app_db_atom,in_chan,actions){
var c__22827__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_25516){
var state_val_25517 = (state_25516[(1)]);
if((state_val_25517 === (7))){
var inst_25500 = (state_25516[(7)]);
var inst_25507 = (state_25516[(2)]);
var state_25516__$1 = (function (){var statearr_25518 = state_25516;
(statearr_25518[(8)] = inst_25507);

return statearr_25518;
})();
if(cljs.core.truth_(inst_25500)){
var statearr_25519_25534 = state_25516__$1;
(statearr_25519_25534[(1)] = (8));

} else {
var statearr_25520_25535 = state_25516__$1;
(statearr_25520_25535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25517 === (1))){
var state_25516__$1 = state_25516;
var statearr_25521_25536 = state_25516__$1;
(statearr_25521_25536[(2)] = null);

(statearr_25521_25536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25517 === (4))){
var inst_25502 = (state_25516[(9)]);
var inst_25500 = (state_25516[(7)]);
var inst_25499 = (state_25516[(2)]);
var inst_25500__$1 = cljs.core.nth.call(null,inst_25499,(0),null);
var inst_25501 = cljs.core.nth.call(null,inst_25499,(1),null);
var inst_25502__$1 = cljs.core.get.call(null,actions,inst_25500__$1);
var state_25516__$1 = (function (){var statearr_25522 = state_25516;
(statearr_25522[(9)] = inst_25502__$1);

(statearr_25522[(7)] = inst_25500__$1);

(statearr_25522[(10)] = inst_25501);

return statearr_25522;
})();
if(cljs.core.truth_(inst_25502__$1)){
var statearr_25523_25537 = state_25516__$1;
(statearr_25523_25537[(1)] = (5));

} else {
var statearr_25524_25538 = state_25516__$1;
(statearr_25524_25538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25517 === (6))){
var state_25516__$1 = state_25516;
var statearr_25525_25539 = state_25516__$1;
(statearr_25525_25539[(2)] = null);

(statearr_25525_25539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25517 === (3))){
var inst_25514 = (state_25516[(2)]);
var state_25516__$1 = state_25516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25516__$1,inst_25514);
} else {
if((state_val_25517 === (2))){
var state_25516__$1 = state_25516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25516__$1,(4),in_chan);
} else {
if((state_val_25517 === (9))){
var state_25516__$1 = state_25516;
var statearr_25526_25540 = state_25516__$1;
(statearr_25526_25540[(2)] = null);

(statearr_25526_25540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25517 === (5))){
var inst_25502 = (state_25516[(9)]);
var inst_25501 = (state_25516[(10)]);
var inst_25504 = inst_25502.call(null,app_db_atom,inst_25501);
var state_25516__$1 = state_25516;
var statearr_25527_25541 = state_25516__$1;
(statearr_25527_25541[(2)] = inst_25504);

(statearr_25527_25541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25517 === (10))){
var inst_25512 = (state_25516[(2)]);
var state_25516__$1 = state_25516;
var statearr_25528_25542 = state_25516__$1;
(statearr_25528_25542[(2)] = inst_25512);

(statearr_25528_25542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25517 === (8))){
var state_25516__$1 = state_25516;
var statearr_25529_25543 = state_25516__$1;
(statearr_25529_25543[(2)] = null);

(statearr_25529_25543[(1)] = (2));


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
var keechma$controller$dispatcher_$_state_machine__22733__auto__ = null;
var keechma$controller$dispatcher_$_state_machine__22733__auto____0 = (function (){
var statearr_25530 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25530[(0)] = keechma$controller$dispatcher_$_state_machine__22733__auto__);

(statearr_25530[(1)] = (1));

return statearr_25530;
});
var keechma$controller$dispatcher_$_state_machine__22733__auto____1 = (function (state_25516){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_25516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e25531){if((e25531 instanceof Object)){
var ex__22736__auto__ = e25531;
var statearr_25532_25544 = state_25516;
(statearr_25532_25544[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25545 = state_25516;
state_25516 = G__25545;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
keechma$controller$dispatcher_$_state_machine__22733__auto__ = function(state_25516){
switch(arguments.length){
case 0:
return keechma$controller$dispatcher_$_state_machine__22733__auto____0.call(this);
case 1:
return keechma$controller$dispatcher_$_state_machine__22733__auto____1.call(this,state_25516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keechma$controller$dispatcher_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller$dispatcher_$_state_machine__22733__auto____0;
keechma$controller$dispatcher_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller$dispatcher_$_state_machine__22733__auto____1;
return keechma$controller$dispatcher_$_state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_25533 = f__22828__auto__.call(null);
(statearr_25533[(6)] = c__22827__auto__);

return statearr_25533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));

return c__22827__auto__;
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
keechma.controller.SerializedController = (function (params,__meta,__extmap,__hash){
this.params = params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(keechma.controller.SerializedController.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(keechma.controller.SerializedController.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k25547,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__25551 = k25547;
var G__25551__$1 = (((G__25551 instanceof cljs.core.Keyword))?G__25551.fqn:null);
switch (G__25551__$1) {
case "params":
return self__.params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25547,else__4442__auto__);

}
}));

(keechma.controller.SerializedController.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4461__auto__,p__25552){
var vec__25553 = p__25552;
var k__4462__auto__ = cljs.core.nth.call(null,vec__25553,(0),null);
var v__4463__auto__ = cljs.core.nth.call(null,vec__25553,(1),null);
return f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__);
}),init__4460__auto__,this__4458__auto____$1);
}));

(keechma.controller.SerializedController.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4454__auto__,pr_pair__4456__auto__,"#keechma.controller.SerializedController{",", ","}",opts__4455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null))], null),self__.__extmap));
}));

(keechma.controller.SerializedController.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25546){
var self__ = this;
var G__25546__$1 = this;
return (new cljs.core.RecordIter((0),G__25546__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(keechma.controller.SerializedController.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(keechma.controller.SerializedController.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new keechma.controller.SerializedController(self__.params,self__.__meta,self__.__extmap,self__.__hash));
}));

(keechma.controller.SerializedController.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(keechma.controller.SerializedController.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (2020583419 ^ cljs.core.hash_unordered_coll.call(null,coll__4436__auto__));
}).call(null,this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(keechma.controller.SerializedController.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25548,other25549){
var self__ = this;
var this25548__$1 = this;
return (((!((other25549 == null)))) && ((this25548__$1.constructor === other25549.constructor)) && (cljs.core._EQ_.call(null,this25548__$1.params,other25549.params)) && (cljs.core._EQ_.call(null,this25548__$1.__extmap,other25549.__extmap)));
}));

(keechma.controller.SerializedController.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new keechma.controller.SerializedController(self__.params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4449__auto__)),null));
}
}));

(keechma.controller.SerializedController.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__25546){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__25556 = cljs.core.keyword_identical_QMARK_;
var expr__25557 = k__4447__auto__;
if(cljs.core.truth_(pred__25556.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__25557))){
return (new keechma.controller.SerializedController(G__25546,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.controller.SerializedController(self__.params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4447__auto__,G__25546),null));
}
}));

(keechma.controller.SerializedController.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null))], null),self__.__extmap));
}));

(keechma.controller.SerializedController.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__25546){
var self__ = this;
var this__4438__auto____$1 = this;
return (new keechma.controller.SerializedController(self__.params,G__25546,self__.__extmap,self__.__hash));
}));

(keechma.controller.SerializedController.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4445__auto__,(0)),cljs.core._nth.call(null,entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(keechma.controller.SerializedController.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null)], null);
}));

(keechma.controller.SerializedController.cljs$lang$type = true);

(keechma.controller.SerializedController.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"keechma.controller/SerializedController",null,(1),null));
}));

(keechma.controller.SerializedController.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write.call(null,writer__4483__auto__,"keechma.controller/SerializedController");
}));

/**
 * Positional factory function for keechma.controller/SerializedController.
 */
keechma.controller.__GT_SerializedController = (function keechma$controller$__GT_SerializedController(params){
return (new keechma.controller.SerializedController(params,null,null,null));
});

/**
 * Factory function for keechma.controller/SerializedController, taking a map of keywords to field values.
 */
keechma.controller.map__GT_SerializedController = (function keechma$controller$map__GT_SerializedController(G__25550){
var extmap__4478__auto__ = (function (){var G__25559 = cljs.core.dissoc.call(null,G__25550,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.record_QMARK_.call(null,G__25550)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__25559);
} else {
return G__25559;
}
})();
return (new keechma.controller.SerializedController(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__25550),null,cljs.core.not_empty.call(null,extmap__4478__auto__),null));
});

keechma.controller.record_type = (function keechma$controller$record_type(var_args){
var args__4795__auto__ = [];
var len__4789__auto___25563 = arguments.length;
var i__4790__auto___25564 = (0);
while(true){
if((i__4790__auto___25564 < len__4789__auto___25563)){
args__4795__auto__.push((arguments[i__4790__auto___25564]));

var G__25565 = (i__4790__auto___25564 + (1));
i__4790__auto___25564 = G__25565;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return keechma.controller.record_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(keechma.controller.record_type.cljs$core$IFn$_invoke$arity$variadic = (function (record,args){
return cljs.core.type.call(null,record);
}));

(keechma.controller.record_type.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(keechma.controller.record_type.cljs$lang$applyTo = (function (seq25561){
var G__25562 = cljs.core.first.call(null,seq25561);
var seq25561__$1 = cljs.core.next.call(null,seq25561);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25562,seq25561__$1);
}));

if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.params !== 'undefined')){
} else {
/**
 * Receives the `route-params` and returns either the `params` for the controller or `nil`
 */
keechma.controller.params = (function (){var method_table__4672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","params"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.start !== 'undefined')){
} else {
/**
 * Called when the controller is started. Receives the controller `params` (returned by the
 *   `params` function) and the application state. It must return the application state.
 */
keechma.controller.start = (function (){var method_table__4672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","start"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.wake !== 'undefined')){
} else {
/**
 * Called when the controller is started from the saved state stored on the server. It will be
 * called instead of the `start` function if the `ssr-handler` function is implemented. This
 * allows you to manually revive the serialized data if needed. Usually this function is not
 * needed, but if you for instance start the inner application from the controller, you can
 * use this function to wake the inner app.
 */
keechma.controller.wake = (function (){var method_table__4672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","wake"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.stop !== 'undefined')){
} else {
/**
 * Called when the controller is stopped. Receives the controller `params` (returned by the
 *   `params` function) and the application state. It must return the application state.
 */
keechma.controller.stop = (function (){var method_table__4672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","stop"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.handler !== 'undefined')){
} else {
/**
 * Called after the `start` function. You can listen to the commands on the `in-chan` 
 *   inside the `go` block. This is the function in which you implement anything that reacts
 *   to the user commands (coming from the UI).
 */
keechma.controller.handler = (function (){var method_table__4672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","handler"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.ssr_handler !== 'undefined')){
} else {
/**
 * Called in after the `start` (instead of the `handler` function) function in the server
 *   side context. This function should call the `done` callback when it has completed the 
 *   server side data loading. Returning `::not-implemented` which is a default behavior will
 *   mark the controller as non server side.
 */
keechma.controller.ssr_handler = (function (){var method_table__4672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","ssr-handler"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.context !== 'undefined')){
} else {
/**
 * Return the context passed to the application.
 */
keechma.controller.context = (function (){var method_table__4672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","context"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.report !== 'undefined')){
} else {
keechma.controller.report = (function (){var method_table__4672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","report"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.execute !== 'undefined')){
} else {
/**
 * Puts the command on the controller's `in-chan` which is passed as an argument to the 
 *   `handler` function. Can be called from the `start` and `stop` functions.
 */
keechma.controller.execute = (function (){var method_table__4672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","execute"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.send_command !== 'undefined')){
} else {
/**
 * Sends a command to another controller
 */
keechma.controller.send_command = (function (){var method_table__4672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","send-command"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.broadcast !== 'undefined')){
} else {
/**
 * Sends a command to all other running controllers
 */
keechma.controller.broadcast = (function (){var method_table__4672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","broadcast"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.is_running_QMARK_ !== 'undefined')){
} else {
/**
 * Returns `true` if this controller is still running. You can use this if you have some
 *   kind of async action, and you want to make sure that the controller is still running 
 *   when you receive the results.
 */
keechma.controller.is_running_QMARK_ = (function (){var method_table__4672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","is-running?"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.redirect !== 'undefined')){
} else {
/**
 * Redirects the page to the URL based on the params.
 */
keechma.controller.redirect = (function (){var method_table__4672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","redirect"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.reroute !== 'undefined')){
} else {
/**
 * Restarts the route process. This is useful in combination with the `:route-processor`.
 *   In some cases route processor might use info from the app-db to determine the current route,
 *   which means that the value from the route processor might be different without the actual
 *   route change happening.
 */
keechma.controller.reroute = (function (){var method_table__4672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","reroute"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
if((typeof keechma !== 'undefined') && (typeof keechma.controller !== 'undefined') && (typeof keechma.controller.router !== 'undefined')){
} else {
/**
 * Returns the app's router
 */
keechma.controller.router = (function (){var method_table__4672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","router"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
cljs.core._add_method.call(null,keechma.controller.params,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller,route_params){
return route_params;
}));
cljs.core._add_method.call(null,keechma.controller.start,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller,params,app_db){
return app_db;
}));
cljs.core._add_method.call(null,keechma.controller.wake,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller,params,app_db){
return app_db;
}));
cljs.core._add_method.call(null,keechma.controller.stop,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller,params,app_db){
return app_db;
}));
cljs.core._add_method.call(null,keechma.controller.handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller,app_db_atom,in_chan,out_chan){
return null;
}));
cljs.core._add_method.call(null,keechma.controller.ssr_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller,app_db_atom,done,in_chan,out_chan){
return keechma.controller.not_implemented;
}));
cljs.core._add_method.call(null,keechma.controller.context,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__25566 = null;
var G__25566__1 = (function (controller){
return new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(controller);
});
var G__25566__2 = (function (controller,key){
var key_vec = ((cljs.core.vector_QMARK_.call(null,key))?key:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null));
return cljs.core.get_in.call(null,controller,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113)], null),key_vec));
});
G__25566 = function(controller,key){
switch(arguments.length){
case 1:
return G__25566__1.call(this,controller);
case 2:
return G__25566__2.call(this,controller,key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25566.cljs$core$IFn$_invoke$arity$1 = G__25566__1;
G__25566.cljs$core$IFn$_invoke$arity$2 = G__25566__2;
return G__25566;
})()
);
cljs.core._add_method.call(null,keechma.controller.report,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__25567 = null;
var G__25567__4 = (function (controller,direction,name,payload){
return keechma.controller.report.call(null,controller,direction,name,payload,keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));
});
var G__25567__5 = (function (controller,direction,name,payload,cmd_info){
return keechma.controller.report.call(null,controller,direction,name,payload,cmd_info,new cljs.core.Keyword(null,"info","info",-317069002));
});
var G__25567__6 = (function (controller,direction,name,payload,cmd_info,severity){
var reporter = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(controller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (function (_,___$1,___$2,___$3,___$4,___$5,___$6,___$7){
return null;
});
}
})();
var topic = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(controller);
return reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),direction,topic,name,payload,cmd_info,severity);
});
G__25567 = function(controller,direction,name,payload,cmd_info,severity){
switch(arguments.length){
case 4:
return G__25567__4.call(this,controller,direction,name,payload);
case 5:
return G__25567__5.call(this,controller,direction,name,payload,cmd_info);
case 6:
return G__25567__6.call(this,controller,direction,name,payload,cmd_info,severity);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25567.cljs$core$IFn$_invoke$arity$4 = G__25567__4;
G__25567.cljs$core$IFn$_invoke$arity$5 = G__25567__5;
G__25567.cljs$core$IFn$_invoke$arity$6 = G__25567__6;
return G__25567;
})()
);
cljs.core._add_method.call(null,keechma.controller.execute,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__25568 = null;
var G__25568__2 = (function (controller,command_name){
return keechma.controller.execute.call(null,controller,command_name,null);
});
var G__25568__3 = (function (controller,command_name,args){
var cmd_info = keechma.reporter.cmd_info.call(null);
keechma.controller.report.call(null,controller,new cljs.core.Keyword(null,"in","in",-1531184865),command_name,args,cmd_info);

return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(controller),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_name,args,cmd_info], null));
});
G__25568 = function(controller,command_name,args){
switch(arguments.length){
case 2:
return G__25568__2.call(this,controller,command_name);
case 3:
return G__25568__3.call(this,controller,command_name,args);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25568.cljs$core$IFn$_invoke$arity$2 = G__25568__2;
G__25568.cljs$core$IFn$_invoke$arity$3 = G__25568__3;
return G__25568;
})()
);
cljs.core._add_method.call(null,keechma.controller.send_command,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__25569 = null;
var G__25569__2 = (function (controller,command_name){
return keechma.controller.send_command.call(null,controller,command_name,null,null);
});
var G__25569__3 = (function (controller,command_name,args){
return keechma.controller.send_command.call(null,controller,command_name,args,null);
});
var G__25569__4 = (function (controller,command_name,args,origin){
var out_chan = new cljs.core.Keyword(null,"out-chan","out-chan",384315017).cljs$core$IFn$_invoke$arity$1(controller);
var cmd_info = keechma.reporter.cmd_info.call(null);
keechma.controller.report.call(null,controller,new cljs.core.Keyword(null,"out","out",-910545517),command_name,args,cmd_info);

cljs.core.async.put_BANG_.call(null,out_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_name,args,cmd_info], null));

return controller;
});
G__25569 = function(controller,command_name,args,origin){
switch(arguments.length){
case 2:
return G__25569__2.call(this,controller,command_name);
case 3:
return G__25569__3.call(this,controller,command_name,args);
case 4:
return G__25569__4.call(this,controller,command_name,args,origin);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25569.cljs$core$IFn$_invoke$arity$2 = G__25569__2;
G__25569.cljs$core$IFn$_invoke$arity$3 = G__25569__3;
G__25569.cljs$core$IFn$_invoke$arity$4 = G__25569__4;
return G__25569;
})()
);
cljs.core._add_method.call(null,keechma.controller.broadcast,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__25574 = null;
var G__25574__2 = (function (controller,command_name){
return keechma.controller.broadcast.call(null,controller,command_name,null,null);
});
var G__25574__3 = (function (controller,command_name,args){
return keechma.controller.broadcast.call(null,controller,command_name,args,null);
});
var G__25574__4 = (function (controller,command_name,args,origin){
var active_topics = new cljs.core.Keyword(null,"active-topics","active-topics",1278012558).cljs$core$IFn$_invoke$arity$1(controller).call(null);
var current_topic = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(controller);
var seq__25570 = cljs.core.seq.call(null,active_topics);
var chunk__25571 = null;
var count__25572 = (0);
var i__25573 = (0);
while(true){
if((i__25573 < count__25572)){
var t = cljs.core._nth.call(null,chunk__25571,i__25573);
if(cljs.core.not_EQ_.call(null,t,current_topic)){
keechma.controller.send_command.call(null,controller,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,command_name], null),args,origin);
} else {
}


var G__25575 = seq__25570;
var G__25576 = chunk__25571;
var G__25577 = count__25572;
var G__25578 = (i__25573 + (1));
seq__25570 = G__25575;
chunk__25571 = G__25576;
count__25572 = G__25577;
i__25573 = G__25578;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__25570);
if(temp__5735__auto__){
var seq__25570__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25570__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__25570__$1);
var G__25579 = cljs.core.chunk_rest.call(null,seq__25570__$1);
var G__25580 = c__4609__auto__;
var G__25581 = cljs.core.count.call(null,c__4609__auto__);
var G__25582 = (0);
seq__25570 = G__25579;
chunk__25571 = G__25580;
count__25572 = G__25581;
i__25573 = G__25582;
continue;
} else {
var t = cljs.core.first.call(null,seq__25570__$1);
if(cljs.core.not_EQ_.call(null,t,current_topic)){
keechma.controller.send_command.call(null,controller,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,command_name], null),args,origin);
} else {
}


var G__25583 = cljs.core.next.call(null,seq__25570__$1);
var G__25584 = null;
var G__25585 = (0);
var G__25586 = (0);
seq__25570 = G__25583;
chunk__25571 = G__25584;
count__25572 = G__25585;
i__25573 = G__25586;
continue;
}
} else {
return null;
}
}
break;
}
});
G__25574 = function(controller,command_name,args,origin){
switch(arguments.length){
case 2:
return G__25574__2.call(this,controller,command_name);
case 3:
return G__25574__3.call(this,controller,command_name,args);
case 4:
return G__25574__4.call(this,controller,command_name,args,origin);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25574.cljs$core$IFn$_invoke$arity$2 = G__25574__2;
G__25574.cljs$core$IFn$_invoke$arity$3 = G__25574__3;
G__25574.cljs$core$IFn$_invoke$arity$4 = G__25574__4;
return G__25574;
})()
);
cljs.core._add_method.call(null,keechma.controller.is_running_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller){
return cljs.core._EQ_.call(null,controller,new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(controller).call(null));
}));
cljs.core._add_method.call(null,keechma.controller.redirect,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__25587 = null;
var G__25587__2 = (function (controller,params){
return keechma.controller.redirect.call(null,controller,params,null);
});
var G__25587__3 = (function (controller,params,action){
return new cljs.core.Keyword(null,"redirect-fn","redirect-fn",281458973).cljs$core$IFn$_invoke$arity$1(controller).call(null,params,action);
});
G__25587 = function(controller,params,action){
switch(arguments.length){
case 2:
return G__25587__2.call(this,controller,params);
case 3:
return G__25587__3.call(this,controller,params,action);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25587.cljs$core$IFn$_invoke$arity$2 = G__25587__2;
G__25587.cljs$core$IFn$_invoke$arity$3 = G__25587__3;
return G__25587;
})()
);
cljs.core._add_method.call(null,keechma.controller.reroute,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller){
var out_chan = new cljs.core.Keyword(null,"out-chan","out-chan",384315017).cljs$core$IFn$_invoke$arity$1(controller);
var cmd_info = keechma.reporter.cmd_info.call(null);
var cmd_name = new cljs.core.Keyword("keechma.controller-manager","reroute","keechma.controller-manager/reroute",-463838217);
keechma.controller.report.call(null,controller,new cljs.core.Keyword(null,"out","out",-910545517),cmd_name,null,cmd_info);

cljs.core.async.put_BANG_.call(null,out_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cmd_name,null,cmd_info], null));

return controller;
}));
cljs.core._add_method.call(null,keechma.controller.router,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller){
return new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(controller);
}));

//# sourceMappingURL=controller.js.map?rel=1761389401761
