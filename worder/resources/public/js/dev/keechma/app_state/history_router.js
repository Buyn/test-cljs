// Compiled by ClojureScript 1.10.597 {}
goog.provide('keechma.app_state.history_router');
goog.require('cljs.core');
goog.require('keechma.app_state.core');
goog.require('router.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('goog.history.Event');
goog.require('goog.history.Html5History');
goog.require('goog.Uri');
keechma.app_state.history_router.supported_redirect_actions = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"push","push",799791267),null,new cljs.core.Keyword(null,"replace","replace",-786587770),null,new cljs.core.Keyword(null,"back","back",-417520012),null], null), null);
keechma.app_state.history_router.get_redirect_action = (function keechma$app_state$history_router$get_redirect_action(action){
if(cljs.core.contains_QMARK_.call(null,keechma.app_state.history_router.supported_redirect_actions,action)){
return action;
} else {
return new cljs.core.Keyword(null,"push","push",799791267);
}
});
keechma.app_state.history_router.make_urlchange_dispatcher = (function keechma$app_state$history_router$make_urlchange_dispatcher(){
var handlers = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var main_handler = (function (_){
var seq__25398 = cljs.core.seq.call(null,cljs.core.deref.call(null,handlers));
var chunk__25399 = null;
var count__25400 = (0);
var i__25401 = (0);
while(true){
if((i__25401 < count__25400)){
var h = cljs.core._nth.call(null,chunk__25399,i__25401);
h.call(null,location.href);


var G__25410 = seq__25398;
var G__25411 = chunk__25399;
var G__25412 = count__25400;
var G__25413 = (i__25401 + (1));
seq__25398 = G__25410;
chunk__25399 = G__25411;
count__25400 = G__25412;
i__25401 = G__25413;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__25398);
if(temp__5735__auto__){
var seq__25398__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25398__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__25398__$1);
var G__25414 = cljs.core.chunk_rest.call(null,seq__25398__$1);
var G__25415 = c__4609__auto__;
var G__25416 = cljs.core.count.call(null,c__4609__auto__);
var G__25417 = (0);
seq__25398 = G__25414;
chunk__25399 = G__25415;
count__25400 = G__25416;
i__25401 = G__25417;
continue;
} else {
var h = cljs.core.first.call(null,seq__25398__$1);
h.call(null,location.href);


var G__25418 = cljs.core.next.call(null,seq__25398__$1);
var G__25419 = null;
var G__25420 = (0);
var G__25421 = (0);
seq__25398 = G__25418;
chunk__25399 = G__25419;
count__25400 = G__25420;
i__25401 = G__25421;
continue;
}
} else {
return null;
}
}
break;
}
});
var bind_main_handler = (function (){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,cljs.core.deref.call(null,handlers)))){
return window.addEventListener("popstate",main_handler);
} else {
return null;
}
});
var unbind_main_handler = (function (){
if((cljs.core.count.call(null,cljs.core.deref.call(null,handlers)) === (0))){
return window.removeEventListener("popstate",main_handler);
} else {
return null;
}
});
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"handlers-count","handlers-count",70073577),(function (){
return cljs.core.count.call(null,cljs.core.deref.call(null,handlers));
}),new cljs.core.Keyword(null,"bind","bind",-113428417),(function (handler){
cljs.core.swap_BANG_.call(null,handlers,cljs.core.conj,handler);

return bind_main_handler.call(null);
}),new cljs.core.Keyword(null,"unbind","unbind",716905720),(function (handler){
cljs.core.swap_BANG_.call(null,handlers,(function (h){
return cljs.core.filter.call(null,(function (p1__25397_SHARP_){
return cljs.core.not_EQ_.call(null,handler,p1__25397_SHARP_);
}),h);
}));

return unbind_main_handler.call(null);
}),new cljs.core.Keyword(null,"replace","replace",-786587770),(function (href){
history.replaceState(null,"",href);

var seq__25402 = cljs.core.seq.call(null,cljs.core.deref.call(null,handlers));
var chunk__25403 = null;
var count__25404 = (0);
var i__25405 = (0);
while(true){
if((i__25405 < count__25404)){
var h = cljs.core._nth.call(null,chunk__25403,i__25405);
h.call(null,href);


var G__25422 = seq__25402;
var G__25423 = chunk__25403;
var G__25424 = count__25404;
var G__25425 = (i__25405 + (1));
seq__25402 = G__25422;
chunk__25403 = G__25423;
count__25404 = G__25424;
i__25405 = G__25425;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__25402);
if(temp__5735__auto__){
var seq__25402__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25402__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__25402__$1);
var G__25426 = cljs.core.chunk_rest.call(null,seq__25402__$1);
var G__25427 = c__4609__auto__;
var G__25428 = cljs.core.count.call(null,c__4609__auto__);
var G__25429 = (0);
seq__25402 = G__25426;
chunk__25403 = G__25427;
count__25404 = G__25428;
i__25405 = G__25429;
continue;
} else {
var h = cljs.core.first.call(null,seq__25402__$1);
h.call(null,href);


var G__25430 = cljs.core.next.call(null,seq__25402__$1);
var G__25431 = null;
var G__25432 = (0);
var G__25433 = (0);
seq__25402 = G__25430;
chunk__25403 = G__25431;
count__25404 = G__25432;
i__25405 = G__25433;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword(null,"push","push",799791267),(function (href){
history.pushState(null,"",href);

var seq__25406 = cljs.core.seq.call(null,cljs.core.deref.call(null,handlers));
var chunk__25407 = null;
var count__25408 = (0);
var i__25409 = (0);
while(true){
if((i__25409 < count__25408)){
var h = cljs.core._nth.call(null,chunk__25407,i__25409);
h.call(null,href);


var G__25434 = seq__25406;
var G__25435 = chunk__25407;
var G__25436 = count__25408;
var G__25437 = (i__25409 + (1));
seq__25406 = G__25434;
chunk__25407 = G__25435;
count__25408 = G__25436;
i__25409 = G__25437;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__25406);
if(temp__5735__auto__){
var seq__25406__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25406__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__25406__$1);
var G__25438 = cljs.core.chunk_rest.call(null,seq__25406__$1);
var G__25439 = c__4609__auto__;
var G__25440 = cljs.core.count.call(null,c__4609__auto__);
var G__25441 = (0);
seq__25406 = G__25438;
chunk__25407 = G__25439;
count__25408 = G__25440;
i__25409 = G__25441;
continue;
} else {
var h = cljs.core.first.call(null,seq__25406__$1);
h.call(null,href);


var G__25442 = cljs.core.next.call(null,seq__25406__$1);
var G__25443 = null;
var G__25444 = (0);
var G__25445 = (0);
seq__25406 = G__25442;
chunk__25407 = G__25443;
count__25408 = G__25444;
i__25409 = G__25445;
continue;
}
} else {
return null;
}
}
break;
}
})], null);
});
keechma.app_state.history_router.urlchange_dispatcher = keechma.app_state.history_router.make_urlchange_dispatcher.call(null);
keechma.app_state.history_router.url_prefix = (function keechma$app_state$history_router$url_prefix(base_href){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_href)].join('');
});
keechma.app_state.history_router.route_url = (function keechma$app_state$history_router$route_url(url,base_href){
var prefix = keechma.app_state.history_router.url_prefix.call(null,base_href);
return cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.subs.call(null,url,((prefix).length),cljs.core.count.call(null,url)),/#/));
});
keechma.app_state.history_router.link_QMARK_ = (function keechma$app_state$history_router$link_QMARK_(el){
var and__4174__auto__ = el.href;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.call(null,"a",clojure.string.lower_case.call(null,el.tagName));
} else {
return and__4174__auto__;
}
});
keechma.app_state.history_router.link_el = (function keechma$app_state$history_router$link_el(el){
var current_el = el;
while(true){
if(cljs.core.truth_(keechma.app_state.history_router.link_QMARK_.call(null,current_el))){
return current_el;
} else {
var temp__5735__auto__ = current_el.parentNode;
if(cljs.core.truth_(temp__5735__auto__)){
var parent = temp__5735__auto__;
var G__25446 = parent;
current_el = G__25446;
continue;
} else {
return null;
}
}
break;
}
});
keechma.app_state.history_router.current_target_self_QMARK_ = (function keechma$app_state$history_router$current_target_self_QMARK_(el){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"_self",null], null), null),el.target);
});
keechma.app_state.history_router.left_button_clicked_QMARK_ = (function keechma$app_state$history_router$left_button_clicked_QMARK_(e){
return cljs.core._EQ_.call(null,(0),e.button);
});
keechma.app_state.history_router.mod_key_pressed_QMARK_ = (function keechma$app_state$history_router$mod_key_pressed_QMARK_(e){
var or__4185__auto__ = e.altKey;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = e.shiftKey;
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = e.ctrlKey;
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
return e.metaKey;
}
}
}
});
keechma.app_state.history_router.link_has_prefixed_url_QMARK_ = (function keechma$app_state$history_router$link_has_prefixed_url_QMARK_(el,base_href){
return clojure.string.starts_with_QMARK_.call(null,el.href,keechma.app_state.history_router.url_prefix.call(null,base_href));
});
keechma.app_state.history_router.same_href_QMARK_ = (function keechma$app_state$history_router$same_href_QMARK_(el){
return cljs.core._EQ_.call(null,el.href,location.href);
});
keechma.app_state.history_router.should_href_pass_through_QMARK_ = (function keechma$app_state$history_router$should_href_pass_through_QMARK_(href){
var vec__25447 = clojure.string.split.call(null,location.href,/#/);
var current = cljs.core.nth.call(null,vec__25447,(0),null);
var current_hash = cljs.core.nth.call(null,vec__25447,(1),null);
var vec__25450 = clojure.string.split.call(null,href,/#/);
var next = cljs.core.nth.call(null,vec__25450,(0),null);
var next_hash = cljs.core.nth.call(null,vec__25450,(1),null);
return ((cljs.core._EQ_.call(null,current,next)) && (cljs.core.not_EQ_.call(null,current_hash,next_hash)));
});
keechma.app_state.history_router.make_url = (function keechma$app_state$history_router$make_url(routes,base_href,params){
var hash = location.hash;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_href),cljs.core.str.cljs$core$IFn$_invoke$arity$1(router.core.map__GT_url.call(null,routes,params)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join('');
});
keechma.app_state.history_router.add_trailing_slash = (function keechma$app_state$history_router$add_trailing_slash(base_href){
if(clojure.string.ends_with_QMARK_.call(null,base_href,"/")){
return base_href;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_href),"/"].join('');
}
});
keechma.app_state.history_router.add_leading_slash = (function keechma$app_state$history_router$add_leading_slash(base_href){
if(clojure.string.starts_with_QMARK_.call(null,base_href,"/")){
return base_href;
} else {
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_href)].join('');
}
});
keechma.app_state.history_router.process_base_href = (function keechma$app_state$history_router$process_base_href(base_href){
return keechma.app_state.history_router.add_leading_slash.call(null,keechma.app_state.history_router.add_trailing_slash.call(null,base_href));
});
keechma.app_state.history_router.link_has_data_replace_state_QMARK_ = (function keechma$app_state$history_router$link_has_data_replace_state_QMARK_(el){
var and__4174__auto__ = keechma.app_state.history_router.link_QMARK_.call(null,el);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.boolean$.call(null,el.getAttribute("data-replace-state"));
} else {
return and__4174__auto__;
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
keechma.app_state.history_router.HistoryRouter = (function (routes,routes_chan,base_href,app_db,__meta,__extmap,__hash){
this.routes = routes;
this.routes_chan = routes_chan;
this.base_href = base_href;
this.app_db = app_db;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k25454,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__25458 = k25454;
var G__25458__$1 = (((G__25458 instanceof cljs.core.Keyword))?G__25458.fqn:null);
switch (G__25458__$1) {
case "routes":
return self__.routes;

break;
case "routes-chan":
return self__.routes_chan;

break;
case "base-href":
return self__.base_href;

break;
case "app-db":
return self__.app_db;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25454,else__4442__auto__);

}
}));

(keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__4461__auto__,p__25459){
var vec__25460 = p__25459;
var k__4462__auto__ = cljs.core.nth.call(null,vec__25460,(0),null);
var v__4463__auto__ = cljs.core.nth.call(null,vec__25460,(1),null);
return f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__);
}),init__4460__auto__,this__4458__auto____$1);
}));

(keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__4454__auto__,pr_pair__4456__auto__,"#keechma.app-state.history-router.HistoryRouter{",", ","}",opts__4455__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"base-href","base-href",564187357),self__.base_href],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db],null))], null),self__.__extmap));
}));

(keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25453){
var self__ = this;
var G__25453__$1 = this;
return (new cljs.core.RecordIter((0),G__25453__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),new cljs.core.Keyword(null,"base-href","base-href",564187357),new cljs.core.Keyword(null,"app-db","app-db",865606302)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,self__.app_db,self__.__meta,self__.__extmap,self__.__hash));
}));

(keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
}));

(keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$ = cljs.core.PROTOCOL_SENTINEL);

(keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$start_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var handler = (function (href){
return cljs.core.async.put_BANG_.call(null,self__.routes_chan,router.core.url__GT_map.call(null,self__.routes,keechma.app_state.history_router.route_url.call(null,href,self__.base_href)));
});
new cljs.core.Keyword(null,"bind","bind",-113428417).cljs$core$IFn$_invoke$arity$1(keechma.app_state.history_router.urlchange_dispatcher).call(null,handler);

cljs.core.swap_BANG_.call(null,self__.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"route","route",329891309),router.core.url__GT_map.call(null,self__.routes,keechma.app_state.history_router.route_url.call(null,location.href,self__.base_href)));

return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"urlchange-handler","urlchange-handler",-206381863),handler);
}));

(keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$stop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"unbind","unbind",716905720).cljs$core$IFn$_invoke$arity$1(keechma.app_state.history_router.urlchange_dispatcher).call(null,new cljs.core.Keyword(null,"urlchange-handler","urlchange-handler",-206381863).cljs$core$IFn$_invoke$arity$1(this$__$1));
}));

(keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$redirect_BANG_$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return this$__$1.keechma$app_state$core$IRouter$redirect_BANG_$arity$3(null,params,new cljs.core.Keyword(null,"push","push",799791267));
}));

(keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$redirect_BANG_$arity$3 = (function (this$,params,action){
var self__ = this;
var this$__$1 = this;
var redirect_action = keechma.app_state.history_router.get_redirect_action.call(null,action);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"back","back",-417520012),redirect_action)){
return history.back();
} else {
var redirect_fn = cljs.core.get.call(null,keechma.app_state.history_router.urlchange_dispatcher,redirect_action);
return redirect_fn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),keechma.app_state.history_router.make_url.call(null,self__.routes,self__.base_href,params)].join(''));
}
}));

(keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$wrap_component$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var click_handler = (function (e){
var temp__5735__auto__ = keechma.app_state.history_router.link_el.call(null,e.target);
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
var href = el.href;
if(((keechma.app_state.history_router.current_target_self_QMARK_.call(null,el)) && (keechma.app_state.history_router.left_button_clicked_QMARK_.call(null,e)) && (cljs.core.not.call(null,keechma.app_state.history_router.mod_key_pressed_QMARK_.call(null,e))) && (keechma.app_state.history_router.link_has_prefixed_url_QMARK_.call(null,el,self__.base_href)))){
if(keechma.app_state.history_router.should_href_pass_through_QMARK_.call(null,href)){
return null;
} else {
var redirect_fn = cljs.core.get.call(null,keechma.app_state.history_router.urlchange_dispatcher,(cljs.core.truth_(keechma.app_state.history_router.link_has_data_replace_state_QMARK_.call(null,el))?new cljs.core.Keyword(null,"replace","replace",-786587770):new cljs.core.Keyword(null,"push","push",799791267)));
redirect_fn.call(null,href);

e.preventDefault();

return e.stopPropagation();
}
} else {
return null;
}
} else {
return null;
}
});
return (function() { 
var G__25468__delegate = function (children){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),click_handler], null)], null),children);
};
var G__25468 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__25469__i = 0, G__25469__a = new Array(arguments.length -  0);
while (G__25469__i < G__25469__a.length) {G__25469__a[G__25469__i] = arguments[G__25469__i + 0]; ++G__25469__i;}
  children = new cljs.core.IndexedSeq(G__25469__a,0,null);
} 
return G__25468__delegate.call(this,children);};
G__25468.cljs$lang$maxFixedArity = 0;
G__25468.cljs$lang$applyTo = (function (arglist__25470){
var children = cljs.core.seq(arglist__25470);
return G__25468__delegate(children);
});
G__25468.cljs$core$IFn$_invoke$arity$variadic = G__25468__delegate;
return G__25468;
})()
;
}));

(keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$url$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return keechma.app_state.history_router.make_url.call(null,self__.routes,self__.base_href,params);
}));

(keechma.app_state.history_router.HistoryRouter.prototype.keechma$app_state$core$IRouter$linkable_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return true;
}));

(keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-402337099 ^ cljs.core.hash_unordered_coll.call(null,coll__4436__auto__));
}).call(null,this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25455,other25456){
var self__ = this;
var this25455__$1 = this;
return (((!((other25456 == null)))) && ((this25455__$1.constructor === other25456.constructor)) && (cljs.core._EQ_.call(null,this25455__$1.routes,other25456.routes)) && (cljs.core._EQ_.call(null,this25455__$1.routes_chan,other25456.routes_chan)) && (cljs.core._EQ_.call(null,this25455__$1.base_href,other25456.base_href)) && (cljs.core._EQ_.call(null,this25455__$1.app_db,other25456.app_db)) && (cljs.core._EQ_.call(null,this25455__$1.__extmap,other25456.__extmap)));
}));

(keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"routes","routes",457900162),null,new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),null,new cljs.core.Keyword(null,"base-href","base-href",564187357),null,new cljs.core.Keyword(null,"app-db","app-db",865606302),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,self__.app_db,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4449__auto__)),null));
}
}));

(keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__25453){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__25463 = cljs.core.keyword_identical_QMARK_;
var expr__25464 = k__4447__auto__;
if(cljs.core.truth_(pred__25463.call(null,new cljs.core.Keyword(null,"routes","routes",457900162),expr__25464))){
return (new keechma.app_state.history_router.HistoryRouter(G__25453,self__.routes_chan,self__.base_href,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25463.call(null,new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),expr__25464))){
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,G__25453,self__.base_href,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25463.call(null,new cljs.core.Keyword(null,"base-href","base-href",564187357),expr__25464))){
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,G__25453,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25463.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302),expr__25464))){
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,G__25453,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,self__.app_db,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4447__auto__,G__25453),null));
}
}
}
}
}));

(keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),self__.routes_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"base-href","base-href",564187357),self__.base_href,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db,null))], null),self__.__extmap));
}));

(keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__25453){
var self__ = this;
var this__4438__auto____$1 = this;
return (new keechma.app_state.history_router.HistoryRouter(self__.routes,self__.routes_chan,self__.base_href,self__.app_db,G__25453,self__.__extmap,self__.__hash));
}));

(keechma.app_state.history_router.HistoryRouter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4445__auto__,(0)),cljs.core._nth.call(null,entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(keechma.app_state.history_router.HistoryRouter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"routes-chan","routes-chan",-1286759973,null),new cljs.core.Symbol(null,"base-href","base-href",-2090248412,null),new cljs.core.Symbol(null,"app-db","app-db",-1788829467,null)], null);
}));

(keechma.app_state.history_router.HistoryRouter.cljs$lang$type = true);

(keechma.app_state.history_router.HistoryRouter.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"keechma.app-state.history-router/HistoryRouter",null,(1),null));
}));

(keechma.app_state.history_router.HistoryRouter.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write.call(null,writer__4483__auto__,"keechma.app-state.history-router/HistoryRouter");
}));

/**
 * Positional factory function for keechma.app-state.history-router/HistoryRouter.
 */
keechma.app_state.history_router.__GT_HistoryRouter = (function keechma$app_state$history_router$__GT_HistoryRouter(routes,routes_chan,base_href,app_db){
return (new keechma.app_state.history_router.HistoryRouter(routes,routes_chan,base_href,app_db,null,null,null));
});

/**
 * Factory function for keechma.app-state.history-router/HistoryRouter, taking a map of keywords to field values.
 */
keechma.app_state.history_router.map__GT_HistoryRouter = (function keechma$app_state$history_router$map__GT_HistoryRouter(G__25457){
var extmap__4478__auto__ = (function (){var G__25466 = cljs.core.dissoc.call(null,G__25457,new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),new cljs.core.Keyword(null,"base-href","base-href",564187357),new cljs.core.Keyword(null,"app-db","app-db",865606302));
if(cljs.core.record_QMARK_.call(null,G__25457)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__25466);
} else {
return G__25466;
}
})();
return (new keechma.app_state.history_router.HistoryRouter(new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(G__25457),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796).cljs$core$IFn$_invoke$arity$1(G__25457),new cljs.core.Keyword(null,"base-href","base-href",564187357).cljs$core$IFn$_invoke$arity$1(G__25457),new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(G__25457),null,cljs.core.not_empty.call(null,extmap__4478__auto__),null));
});

keechma.app_state.history_router.constructor$ = (function keechma$app_state$history_router$constructor(routes,routes_chan,state){
var base_href = keechma.app_state.history_router.process_base_href.call(null,(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"base-href","base-href",564187357).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "/";
}
})());
return keechma.app_state.core.start_BANG_.call(null,keechma.app_state.history_router.__GT_HistoryRouter.call(null,router.core.expand_routes.call(null,routes),routes_chan,base_href,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(state)));
});

//# sourceMappingURL=history_router.js.map?rel=1761389401551
