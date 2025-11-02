// Compiled by ClojureScript 1.10.597 {}
goog.provide('keechma.util');
goog.require('cljs.core');
goog.require('cljs.core.async');
keechma.util.update_values = (function keechma$util$update_values(var_args){
var args__4795__auto__ = [];
var len__4789__auto___24784 = arguments.length;
var i__4790__auto___24785 = (0);
while(true){
if((i__4790__auto___24785 < len__4789__auto___24784)){
args__4795__auto__.push((arguments[i__4790__auto___24785]));

var G__24786 = (i__4790__auto___24785 + (1));
i__4790__auto___24785 = G__24786;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return keechma.util.update_values.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(keechma.util.update_values.cljs$core$IFn$_invoke$arity$variadic = (function (m,f,args){
return cljs.core.reduce.call(null,(function (r,p__24780){
var vec__24781 = p__24780;
var k = cljs.core.nth.call(null,vec__24781,(0),null);
var v = cljs.core.nth.call(null,vec__24781,(1),null);
return cljs.core.assoc.call(null,r,k,cljs.core.apply.call(null,f,v,args));
}),cljs.core.PersistentArrayMap.EMPTY,m);
}));

(keechma.util.update_values.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(keechma.util.update_values.cljs$lang$applyTo = (function (seq24777){
var G__24778 = cljs.core.first.call(null,seq24777);
var seq24777__$1 = cljs.core.next.call(null,seq24777);
var G__24779 = cljs.core.first.call(null,seq24777__$1);
var seq24777__$2 = cljs.core.next.call(null,seq24777__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24778,G__24779,seq24777__$2);
}));

/**
 * true if seq contains elm
 */
keechma.util.in_QMARK_ = (function keechma$util$in_QMARK_(seq,elm){
return cljs.core.some.call(null,(function (p1__24787_SHARP_){
return cljs.core._EQ_.call(null,elm,p1__24787_SHARP_);
}),seq);
});
keechma.util.without = (function keechma$util$without(list,val){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,(function (ls_val){
return cljs.core._EQ_.call(null,val,ls_val);
}),list));
});
/**
 * Return a channel which will close on the nth next animation frame.
 */
keechma.util.animation_frame = (function keechma$util$animation_frame(var_args){
var G__24789 = arguments.length;
switch (G__24789) {
case 0:
return keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$0 = (function (){
return keechma.util.animation_frame.call(null,(1));
}));

(keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$1 = (function (n){
return keechma.util.animation_frame.call(null,n,cljs.core.async.chan.call(null,(1)));
}));

(keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$2 = (function (n,out){
window.requestAnimationFrame((function (timestamp){
if(cljs.core._EQ_.call(null,n,(1))){
cljs.core.async.put_BANG_.call(null,out,timestamp);

return cljs.core.async.close_BANG_.call(null,out);
} else {
return keechma.util.animation_frame.call(null,(n - (1)),out);
}
}));

return out;
}));

(keechma.util.animation_frame.cljs$lang$maxFixedArity = 2);

/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
keechma.util.dissoc_in = (function keechma$util$dissoc_in(m,p__24791){
var vec__24792 = p__24791;
var seq__24793 = cljs.core.seq.call(null,vec__24792);
var first__24794 = cljs.core.first.call(null,seq__24793);
var seq__24793__$1 = cljs.core.next.call(null,seq__24793);
var k = first__24794;
var ks = seq__24793__$1;
var keys = vec__24792;
if(ks){
var temp__5733__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__5733__auto__)){
var nextmap = temp__5733__auto__;
var newmap = keechma.util.dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
});
keechma.util.index_of = (function keechma$util$index_of(coll,item){
var c = coll;
var idx = (0);
while(true){
var temp__5733__auto__ = cljs.core.first.call(null,c);
if(cljs.core.truth_(temp__5733__auto__)){
var first_item = temp__5733__auto__;
if(cljs.core._EQ_.call(null,first_item,item)){
return idx;
} else {
var G__24795 = cljs.core.rest.call(null,c);
var G__24796 = (idx + (1));
c = G__24795;
idx = G__24796;
continue;
}
} else {
return null;
}
break;
}
});

//# sourceMappingURL=util.js.map?rel=1761389399767
