// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__22887 = arguments.length;
switch (G__22887) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22888 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22888 = (function (f,blockable,meta22889){
this.f = f;
this.blockable = blockable;
this.meta22889 = meta22889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22890,meta22889__$1){
var self__ = this;
var _22890__$1 = this;
return (new cljs.core.async.t_cljs$core$async22888(self__.f,self__.blockable,meta22889__$1));
}));

(cljs.core.async.t_cljs$core$async22888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22890){
var self__ = this;
var _22890__$1 = this;
return self__.meta22889;
}));

(cljs.core.async.t_cljs$core$async22888.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22888.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22888.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async22888.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async22888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22889","meta22889",-1734071083,null)], null);
}));

(cljs.core.async.t_cljs$core$async22888.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22888");

(cljs.core.async.t_cljs$core$async22888.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async22888");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22888.
 */
cljs.core.async.__GT_t_cljs$core$async22888 = (function cljs$core$async$__GT_t_cljs$core$async22888(f__$1,blockable__$1,meta22889){
return (new cljs.core.async.t_cljs$core$async22888(f__$1,blockable__$1,meta22889));
});

}

return (new cljs.core.async.t_cljs$core$async22888(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__22894 = arguments.length;
switch (G__22894) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__22897 = arguments.length;
switch (G__22897) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__22900 = arguments.length;
switch (G__22900) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22902 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22902);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_22902);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__22904 = arguments.length;
switch (G__22904) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___22906 = n;
var x_22907 = (0);
while(true){
if((x_22907 < n__4666__auto___22906)){
(a[x_22907] = x_22907);

var G__22908 = (x_22907 + (1));
x_22907 = G__22908;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22909 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22909 = (function (flag,meta22910){
this.flag = flag;
this.meta22910 = meta22910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22911,meta22910__$1){
var self__ = this;
var _22911__$1 = this;
return (new cljs.core.async.t_cljs$core$async22909(self__.flag,meta22910__$1));
}));

(cljs.core.async.t_cljs$core$async22909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22911){
var self__ = this;
var _22911__$1 = this;
return self__.meta22910;
}));

(cljs.core.async.t_cljs$core$async22909.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22909.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async22909.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22909.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async22909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22910","meta22910",1987486813,null)], null);
}));

(cljs.core.async.t_cljs$core$async22909.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22909.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22909");

(cljs.core.async.t_cljs$core$async22909.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async22909");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22909.
 */
cljs.core.async.__GT_t_cljs$core$async22909 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22909(flag__$1,meta22910){
return (new cljs.core.async.t_cljs$core$async22909(flag__$1,meta22910));
});

}

return (new cljs.core.async.t_cljs$core$async22909(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22912 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22912 = (function (flag,cb,meta22913){
this.flag = flag;
this.cb = cb;
this.meta22913 = meta22913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22914,meta22913__$1){
var self__ = this;
var _22914__$1 = this;
return (new cljs.core.async.t_cljs$core$async22912(self__.flag,self__.cb,meta22913__$1));
}));

(cljs.core.async.t_cljs$core$async22912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22914){
var self__ = this;
var _22914__$1 = this;
return self__.meta22913;
}));

(cljs.core.async.t_cljs$core$async22912.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22912.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async22912.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22912.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async22912.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22913","meta22913",9280042,null)], null);
}));

(cljs.core.async.t_cljs$core$async22912.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22912.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22912");

(cljs.core.async.t_cljs$core$async22912.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async22912");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22912.
 */
cljs.core.async.__GT_t_cljs$core$async22912 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22912(flag__$1,cb__$1,meta22913){
return (new cljs.core.async.t_cljs$core$async22912(flag__$1,cb__$1,meta22913));
});

}

return (new cljs.core.async.t_cljs$core$async22912(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22915_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22915_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22916_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22916_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22917 = (i + (1));
i = G__22917;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___22923 = arguments.length;
var i__4790__auto___22924 = (0);
while(true){
if((i__4790__auto___22924 < len__4789__auto___22923)){
args__4795__auto__.push((arguments[i__4790__auto___22924]));

var G__22925 = (i__4790__auto___22924 + (1));
i__4790__auto___22924 = G__22925;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22920){
var map__22921 = p__22920;
var map__22921__$1 = (((((!((map__22921 == null))))?(((((map__22921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22921):map__22921);
var opts = map__22921__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22918){
var G__22919 = cljs.core.first.call(null,seq22918);
var seq22918__$1 = cljs.core.next.call(null,seq22918);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22919,seq22918__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__22927 = arguments.length;
switch (G__22927) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22827__auto___22973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_22951){
var state_val_22952 = (state_22951[(1)]);
if((state_val_22952 === (7))){
var inst_22947 = (state_22951[(2)]);
var state_22951__$1 = state_22951;
var statearr_22953_22974 = state_22951__$1;
(statearr_22953_22974[(2)] = inst_22947);

(statearr_22953_22974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22952 === (1))){
var state_22951__$1 = state_22951;
var statearr_22954_22975 = state_22951__$1;
(statearr_22954_22975[(2)] = null);

(statearr_22954_22975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22952 === (4))){
var inst_22930 = (state_22951[(7)]);
var inst_22930__$1 = (state_22951[(2)]);
var inst_22931 = (inst_22930__$1 == null);
var state_22951__$1 = (function (){var statearr_22955 = state_22951;
(statearr_22955[(7)] = inst_22930__$1);

return statearr_22955;
})();
if(cljs.core.truth_(inst_22931)){
var statearr_22956_22976 = state_22951__$1;
(statearr_22956_22976[(1)] = (5));

} else {
var statearr_22957_22977 = state_22951__$1;
(statearr_22957_22977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22952 === (13))){
var state_22951__$1 = state_22951;
var statearr_22958_22978 = state_22951__$1;
(statearr_22958_22978[(2)] = null);

(statearr_22958_22978[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22952 === (6))){
var inst_22930 = (state_22951[(7)]);
var state_22951__$1 = state_22951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22951__$1,(11),to,inst_22930);
} else {
if((state_val_22952 === (3))){
var inst_22949 = (state_22951[(2)]);
var state_22951__$1 = state_22951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22951__$1,inst_22949);
} else {
if((state_val_22952 === (12))){
var state_22951__$1 = state_22951;
var statearr_22959_22979 = state_22951__$1;
(statearr_22959_22979[(2)] = null);

(statearr_22959_22979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22952 === (2))){
var state_22951__$1 = state_22951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22951__$1,(4),from);
} else {
if((state_val_22952 === (11))){
var inst_22940 = (state_22951[(2)]);
var state_22951__$1 = state_22951;
if(cljs.core.truth_(inst_22940)){
var statearr_22960_22980 = state_22951__$1;
(statearr_22960_22980[(1)] = (12));

} else {
var statearr_22961_22981 = state_22951__$1;
(statearr_22961_22981[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22952 === (9))){
var state_22951__$1 = state_22951;
var statearr_22962_22982 = state_22951__$1;
(statearr_22962_22982[(2)] = null);

(statearr_22962_22982[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22952 === (5))){
var state_22951__$1 = state_22951;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22963_22983 = state_22951__$1;
(statearr_22963_22983[(1)] = (8));

} else {
var statearr_22964_22984 = state_22951__$1;
(statearr_22964_22984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22952 === (14))){
var inst_22945 = (state_22951[(2)]);
var state_22951__$1 = state_22951;
var statearr_22965_22985 = state_22951__$1;
(statearr_22965_22985[(2)] = inst_22945);

(statearr_22965_22985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22952 === (10))){
var inst_22937 = (state_22951[(2)]);
var state_22951__$1 = state_22951;
var statearr_22966_22986 = state_22951__$1;
(statearr_22966_22986[(2)] = inst_22937);

(statearr_22966_22986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22952 === (8))){
var inst_22934 = cljs.core.async.close_BANG_.call(null,to);
var state_22951__$1 = state_22951;
var statearr_22967_22987 = state_22951__$1;
(statearr_22967_22987[(2)] = inst_22934);

(statearr_22967_22987[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__22733__auto__ = null;
var cljs$core$async$state_machine__22733__auto____0 = (function (){
var statearr_22968 = [null,null,null,null,null,null,null,null];
(statearr_22968[(0)] = cljs$core$async$state_machine__22733__auto__);

(statearr_22968[(1)] = (1));

return statearr_22968;
});
var cljs$core$async$state_machine__22733__auto____1 = (function (state_22951){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_22951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e22969){if((e22969 instanceof Object)){
var ex__22736__auto__ = e22969;
var statearr_22970_22988 = state_22951;
(statearr_22970_22988[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22989 = state_22951;
state_22951 = G__22989;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
cljs$core$async$state_machine__22733__auto__ = function(state_22951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22733__auto____1.call(this,state_22951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22733__auto____0;
cljs$core$async$state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22733__auto____1;
return cljs$core$async$state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_22971 = f__22828__auto__.call(null);
(statearr_22971[(6)] = c__22827__auto___22973);

return statearr_22971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__22990){
var vec__22991 = p__22990;
var v = cljs.core.nth.call(null,vec__22991,(0),null);
var p = cljs.core.nth.call(null,vec__22991,(1),null);
var job = vec__22991;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22827__auto___23162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_22998){
var state_val_22999 = (state_22998[(1)]);
if((state_val_22999 === (1))){
var state_22998__$1 = state_22998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22998__$1,(2),res,v);
} else {
if((state_val_22999 === (2))){
var inst_22995 = (state_22998[(2)]);
var inst_22996 = cljs.core.async.close_BANG_.call(null,res);
var state_22998__$1 = (function (){var statearr_23000 = state_22998;
(statearr_23000[(7)] = inst_22995);

return statearr_23000;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22998__$1,inst_22996);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____0 = (function (){
var statearr_23001 = [null,null,null,null,null,null,null,null];
(statearr_23001[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__);

(statearr_23001[(1)] = (1));

return statearr_23001;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____1 = (function (state_22998){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_22998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e23002){if((e23002 instanceof Object)){
var ex__22736__auto__ = e23002;
var statearr_23003_23163 = state_22998;
(statearr_23003_23163[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23164 = state_22998;
state_22998 = G__23164;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__ = function(state_22998){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____1.call(this,state_22998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_23004 = f__22828__auto__.call(null);
(statearr_23004[(6)] = c__22827__auto___23162);

return statearr_23004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__23005){
var vec__23006 = p__23005;
var v = cljs.core.nth.call(null,vec__23006,(0),null);
var p = cljs.core.nth.call(null,vec__23006,(1),null);
var job = vec__23006;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4666__auto___23165 = n;
var __23166 = (0);
while(true){
if((__23166 < n__4666__auto___23165)){
var G__23009_23167 = type;
var G__23009_23168__$1 = (((G__23009_23167 instanceof cljs.core.Keyword))?G__23009_23167.fqn:null);
switch (G__23009_23168__$1) {
case "compute":
var c__22827__auto___23170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23166,c__22827__auto___23170,G__23009_23167,G__23009_23168__$1,n__4666__auto___23165,jobs,results,process,async){
return (function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = ((function (__23166,c__22827__auto___23170,G__23009_23167,G__23009_23168__$1,n__4666__auto___23165,jobs,results,process,async){
return (function (state_23022){
var state_val_23023 = (state_23022[(1)]);
if((state_val_23023 === (1))){
var state_23022__$1 = state_23022;
var statearr_23024_23171 = state_23022__$1;
(statearr_23024_23171[(2)] = null);

(statearr_23024_23171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23023 === (2))){
var state_23022__$1 = state_23022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23022__$1,(4),jobs);
} else {
if((state_val_23023 === (3))){
var inst_23020 = (state_23022[(2)]);
var state_23022__$1 = state_23022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23022__$1,inst_23020);
} else {
if((state_val_23023 === (4))){
var inst_23012 = (state_23022[(2)]);
var inst_23013 = process.call(null,inst_23012);
var state_23022__$1 = state_23022;
if(cljs.core.truth_(inst_23013)){
var statearr_23025_23172 = state_23022__$1;
(statearr_23025_23172[(1)] = (5));

} else {
var statearr_23026_23173 = state_23022__$1;
(statearr_23026_23173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23023 === (5))){
var state_23022__$1 = state_23022;
var statearr_23027_23174 = state_23022__$1;
(statearr_23027_23174[(2)] = null);

(statearr_23027_23174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23023 === (6))){
var state_23022__$1 = state_23022;
var statearr_23028_23175 = state_23022__$1;
(statearr_23028_23175[(2)] = null);

(statearr_23028_23175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23023 === (7))){
var inst_23018 = (state_23022[(2)]);
var state_23022__$1 = state_23022;
var statearr_23029_23176 = state_23022__$1;
(statearr_23029_23176[(2)] = inst_23018);

(statearr_23029_23176[(1)] = (3));


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
});})(__23166,c__22827__auto___23170,G__23009_23167,G__23009_23168__$1,n__4666__auto___23165,jobs,results,process,async))
;
return ((function (__23166,switch__22732__auto__,c__22827__auto___23170,G__23009_23167,G__23009_23168__$1,n__4666__auto___23165,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____0 = (function (){
var statearr_23030 = [null,null,null,null,null,null,null];
(statearr_23030[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__);

(statearr_23030[(1)] = (1));

return statearr_23030;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____1 = (function (state_23022){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_23022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e23031){if((e23031 instanceof Object)){
var ex__22736__auto__ = e23031;
var statearr_23032_23177 = state_23022;
(statearr_23032_23177[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23178 = state_23022;
state_23022 = G__23178;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__ = function(state_23022){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____1.call(this,state_23022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__;
})()
;})(__23166,switch__22732__auto__,c__22827__auto___23170,G__23009_23167,G__23009_23168__$1,n__4666__auto___23165,jobs,results,process,async))
})();
var state__22829__auto__ = (function (){var statearr_23033 = f__22828__auto__.call(null);
(statearr_23033[(6)] = c__22827__auto___23170);

return statearr_23033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
});})(__23166,c__22827__auto___23170,G__23009_23167,G__23009_23168__$1,n__4666__auto___23165,jobs,results,process,async))
);


break;
case "async":
var c__22827__auto___23179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23166,c__22827__auto___23179,G__23009_23167,G__23009_23168__$1,n__4666__auto___23165,jobs,results,process,async){
return (function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = ((function (__23166,c__22827__auto___23179,G__23009_23167,G__23009_23168__$1,n__4666__auto___23165,jobs,results,process,async){
return (function (state_23046){
var state_val_23047 = (state_23046[(1)]);
if((state_val_23047 === (1))){
var state_23046__$1 = state_23046;
var statearr_23048_23180 = state_23046__$1;
(statearr_23048_23180[(2)] = null);

(statearr_23048_23180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23047 === (2))){
var state_23046__$1 = state_23046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23046__$1,(4),jobs);
} else {
if((state_val_23047 === (3))){
var inst_23044 = (state_23046[(2)]);
var state_23046__$1 = state_23046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23046__$1,inst_23044);
} else {
if((state_val_23047 === (4))){
var inst_23036 = (state_23046[(2)]);
var inst_23037 = async.call(null,inst_23036);
var state_23046__$1 = state_23046;
if(cljs.core.truth_(inst_23037)){
var statearr_23049_23181 = state_23046__$1;
(statearr_23049_23181[(1)] = (5));

} else {
var statearr_23050_23182 = state_23046__$1;
(statearr_23050_23182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23047 === (5))){
var state_23046__$1 = state_23046;
var statearr_23051_23183 = state_23046__$1;
(statearr_23051_23183[(2)] = null);

(statearr_23051_23183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23047 === (6))){
var state_23046__$1 = state_23046;
var statearr_23052_23184 = state_23046__$1;
(statearr_23052_23184[(2)] = null);

(statearr_23052_23184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23047 === (7))){
var inst_23042 = (state_23046[(2)]);
var state_23046__$1 = state_23046;
var statearr_23053_23185 = state_23046__$1;
(statearr_23053_23185[(2)] = inst_23042);

(statearr_23053_23185[(1)] = (3));


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
});})(__23166,c__22827__auto___23179,G__23009_23167,G__23009_23168__$1,n__4666__auto___23165,jobs,results,process,async))
;
return ((function (__23166,switch__22732__auto__,c__22827__auto___23179,G__23009_23167,G__23009_23168__$1,n__4666__auto___23165,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____0 = (function (){
var statearr_23054 = [null,null,null,null,null,null,null];
(statearr_23054[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__);

(statearr_23054[(1)] = (1));

return statearr_23054;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____1 = (function (state_23046){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_23046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e23055){if((e23055 instanceof Object)){
var ex__22736__auto__ = e23055;
var statearr_23056_23186 = state_23046;
(statearr_23056_23186[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23187 = state_23046;
state_23046 = G__23187;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__ = function(state_23046){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____1.call(this,state_23046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__;
})()
;})(__23166,switch__22732__auto__,c__22827__auto___23179,G__23009_23167,G__23009_23168__$1,n__4666__auto___23165,jobs,results,process,async))
})();
var state__22829__auto__ = (function (){var statearr_23057 = f__22828__auto__.call(null);
(statearr_23057[(6)] = c__22827__auto___23179);

return statearr_23057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
});})(__23166,c__22827__auto___23179,G__23009_23167,G__23009_23168__$1,n__4666__auto___23165,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23009_23168__$1)].join('')));

}

var G__23188 = (__23166 + (1));
__23166 = G__23188;
continue;
} else {
}
break;
}

var c__22827__auto___23189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_23079){
var state_val_23080 = (state_23079[(1)]);
if((state_val_23080 === (7))){
var inst_23075 = (state_23079[(2)]);
var state_23079__$1 = state_23079;
var statearr_23081_23190 = state_23079__$1;
(statearr_23081_23190[(2)] = inst_23075);

(statearr_23081_23190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23080 === (1))){
var state_23079__$1 = state_23079;
var statearr_23082_23191 = state_23079__$1;
(statearr_23082_23191[(2)] = null);

(statearr_23082_23191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23080 === (4))){
var inst_23060 = (state_23079[(7)]);
var inst_23060__$1 = (state_23079[(2)]);
var inst_23061 = (inst_23060__$1 == null);
var state_23079__$1 = (function (){var statearr_23083 = state_23079;
(statearr_23083[(7)] = inst_23060__$1);

return statearr_23083;
})();
if(cljs.core.truth_(inst_23061)){
var statearr_23084_23192 = state_23079__$1;
(statearr_23084_23192[(1)] = (5));

} else {
var statearr_23085_23193 = state_23079__$1;
(statearr_23085_23193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23080 === (6))){
var inst_23060 = (state_23079[(7)]);
var inst_23065 = (state_23079[(8)]);
var inst_23065__$1 = cljs.core.async.chan.call(null,(1));
var inst_23066 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23067 = [inst_23060,inst_23065__$1];
var inst_23068 = (new cljs.core.PersistentVector(null,2,(5),inst_23066,inst_23067,null));
var state_23079__$1 = (function (){var statearr_23086 = state_23079;
(statearr_23086[(8)] = inst_23065__$1);

return statearr_23086;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23079__$1,(8),jobs,inst_23068);
} else {
if((state_val_23080 === (3))){
var inst_23077 = (state_23079[(2)]);
var state_23079__$1 = state_23079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23079__$1,inst_23077);
} else {
if((state_val_23080 === (2))){
var state_23079__$1 = state_23079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23079__$1,(4),from);
} else {
if((state_val_23080 === (9))){
var inst_23072 = (state_23079[(2)]);
var state_23079__$1 = (function (){var statearr_23087 = state_23079;
(statearr_23087[(9)] = inst_23072);

return statearr_23087;
})();
var statearr_23088_23194 = state_23079__$1;
(statearr_23088_23194[(2)] = null);

(statearr_23088_23194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23080 === (5))){
var inst_23063 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23079__$1 = state_23079;
var statearr_23089_23195 = state_23079__$1;
(statearr_23089_23195[(2)] = inst_23063);

(statearr_23089_23195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23080 === (8))){
var inst_23065 = (state_23079[(8)]);
var inst_23070 = (state_23079[(2)]);
var state_23079__$1 = (function (){var statearr_23090 = state_23079;
(statearr_23090[(10)] = inst_23070);

return statearr_23090;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23079__$1,(9),results,inst_23065);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____0 = (function (){
var statearr_23091 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23091[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__);

(statearr_23091[(1)] = (1));

return statearr_23091;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____1 = (function (state_23079){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_23079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e23092){if((e23092 instanceof Object)){
var ex__22736__auto__ = e23092;
var statearr_23093_23196 = state_23079;
(statearr_23093_23196[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23197 = state_23079;
state_23079 = G__23197;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__ = function(state_23079){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____1.call(this,state_23079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_23094 = f__22828__auto__.call(null);
(statearr_23094[(6)] = c__22827__auto___23189);

return statearr_23094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));


var c__22827__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_23132){
var state_val_23133 = (state_23132[(1)]);
if((state_val_23133 === (7))){
var inst_23128 = (state_23132[(2)]);
var state_23132__$1 = state_23132;
var statearr_23134_23198 = state_23132__$1;
(statearr_23134_23198[(2)] = inst_23128);

(statearr_23134_23198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23133 === (20))){
var state_23132__$1 = state_23132;
var statearr_23135_23199 = state_23132__$1;
(statearr_23135_23199[(2)] = null);

(statearr_23135_23199[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23133 === (1))){
var state_23132__$1 = state_23132;
var statearr_23136_23200 = state_23132__$1;
(statearr_23136_23200[(2)] = null);

(statearr_23136_23200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23133 === (4))){
var inst_23097 = (state_23132[(7)]);
var inst_23097__$1 = (state_23132[(2)]);
var inst_23098 = (inst_23097__$1 == null);
var state_23132__$1 = (function (){var statearr_23137 = state_23132;
(statearr_23137[(7)] = inst_23097__$1);

return statearr_23137;
})();
if(cljs.core.truth_(inst_23098)){
var statearr_23138_23201 = state_23132__$1;
(statearr_23138_23201[(1)] = (5));

} else {
var statearr_23139_23202 = state_23132__$1;
(statearr_23139_23202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23133 === (15))){
var inst_23110 = (state_23132[(8)]);
var state_23132__$1 = state_23132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23132__$1,(18),to,inst_23110);
} else {
if((state_val_23133 === (21))){
var inst_23123 = (state_23132[(2)]);
var state_23132__$1 = state_23132;
var statearr_23140_23203 = state_23132__$1;
(statearr_23140_23203[(2)] = inst_23123);

(statearr_23140_23203[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23133 === (13))){
var inst_23125 = (state_23132[(2)]);
var state_23132__$1 = (function (){var statearr_23141 = state_23132;
(statearr_23141[(9)] = inst_23125);

return statearr_23141;
})();
var statearr_23142_23204 = state_23132__$1;
(statearr_23142_23204[(2)] = null);

(statearr_23142_23204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23133 === (6))){
var inst_23097 = (state_23132[(7)]);
var state_23132__$1 = state_23132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23132__$1,(11),inst_23097);
} else {
if((state_val_23133 === (17))){
var inst_23118 = (state_23132[(2)]);
var state_23132__$1 = state_23132;
if(cljs.core.truth_(inst_23118)){
var statearr_23143_23205 = state_23132__$1;
(statearr_23143_23205[(1)] = (19));

} else {
var statearr_23144_23206 = state_23132__$1;
(statearr_23144_23206[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23133 === (3))){
var inst_23130 = (state_23132[(2)]);
var state_23132__$1 = state_23132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23132__$1,inst_23130);
} else {
if((state_val_23133 === (12))){
var inst_23107 = (state_23132[(10)]);
var state_23132__$1 = state_23132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23132__$1,(14),inst_23107);
} else {
if((state_val_23133 === (2))){
var state_23132__$1 = state_23132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23132__$1,(4),results);
} else {
if((state_val_23133 === (19))){
var state_23132__$1 = state_23132;
var statearr_23145_23207 = state_23132__$1;
(statearr_23145_23207[(2)] = null);

(statearr_23145_23207[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23133 === (11))){
var inst_23107 = (state_23132[(2)]);
var state_23132__$1 = (function (){var statearr_23146 = state_23132;
(statearr_23146[(10)] = inst_23107);

return statearr_23146;
})();
var statearr_23147_23208 = state_23132__$1;
(statearr_23147_23208[(2)] = null);

(statearr_23147_23208[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23133 === (9))){
var state_23132__$1 = state_23132;
var statearr_23148_23209 = state_23132__$1;
(statearr_23148_23209[(2)] = null);

(statearr_23148_23209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23133 === (5))){
var state_23132__$1 = state_23132;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23149_23210 = state_23132__$1;
(statearr_23149_23210[(1)] = (8));

} else {
var statearr_23150_23211 = state_23132__$1;
(statearr_23150_23211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23133 === (14))){
var inst_23110 = (state_23132[(8)]);
var inst_23110__$1 = (state_23132[(2)]);
var inst_23111 = (inst_23110__$1 == null);
var inst_23112 = cljs.core.not.call(null,inst_23111);
var state_23132__$1 = (function (){var statearr_23151 = state_23132;
(statearr_23151[(8)] = inst_23110__$1);

return statearr_23151;
})();
if(inst_23112){
var statearr_23152_23212 = state_23132__$1;
(statearr_23152_23212[(1)] = (15));

} else {
var statearr_23153_23213 = state_23132__$1;
(statearr_23153_23213[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23133 === (16))){
var state_23132__$1 = state_23132;
var statearr_23154_23214 = state_23132__$1;
(statearr_23154_23214[(2)] = false);

(statearr_23154_23214[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23133 === (10))){
var inst_23104 = (state_23132[(2)]);
var state_23132__$1 = state_23132;
var statearr_23155_23215 = state_23132__$1;
(statearr_23155_23215[(2)] = inst_23104);

(statearr_23155_23215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23133 === (18))){
var inst_23115 = (state_23132[(2)]);
var state_23132__$1 = state_23132;
var statearr_23156_23216 = state_23132__$1;
(statearr_23156_23216[(2)] = inst_23115);

(statearr_23156_23216[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23133 === (8))){
var inst_23101 = cljs.core.async.close_BANG_.call(null,to);
var state_23132__$1 = state_23132;
var statearr_23157_23217 = state_23132__$1;
(statearr_23157_23217[(2)] = inst_23101);

(statearr_23157_23217[(1)] = (10));


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
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____0 = (function (){
var statearr_23158 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23158[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__);

(statearr_23158[(1)] = (1));

return statearr_23158;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____1 = (function (state_23132){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_23132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e23159){if((e23159 instanceof Object)){
var ex__22736__auto__ = e23159;
var statearr_23160_23218 = state_23132;
(statearr_23160_23218[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23219 = state_23132;
state_23132 = G__23219;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__ = function(state_23132){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____1.call(this,state_23132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_23161 = f__22828__auto__.call(null);
(statearr_23161[(6)] = c__22827__auto__);

return statearr_23161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));

return c__22827__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__23221 = arguments.length;
switch (G__23221) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__23224 = arguments.length;
switch (G__23224) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__23227 = arguments.length;
switch (G__23227) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22827__auto___23276 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_23253){
var state_val_23254 = (state_23253[(1)]);
if((state_val_23254 === (7))){
var inst_23249 = (state_23253[(2)]);
var state_23253__$1 = state_23253;
var statearr_23255_23277 = state_23253__$1;
(statearr_23255_23277[(2)] = inst_23249);

(statearr_23255_23277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (1))){
var state_23253__$1 = state_23253;
var statearr_23256_23278 = state_23253__$1;
(statearr_23256_23278[(2)] = null);

(statearr_23256_23278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (4))){
var inst_23230 = (state_23253[(7)]);
var inst_23230__$1 = (state_23253[(2)]);
var inst_23231 = (inst_23230__$1 == null);
var state_23253__$1 = (function (){var statearr_23257 = state_23253;
(statearr_23257[(7)] = inst_23230__$1);

return statearr_23257;
})();
if(cljs.core.truth_(inst_23231)){
var statearr_23258_23279 = state_23253__$1;
(statearr_23258_23279[(1)] = (5));

} else {
var statearr_23259_23280 = state_23253__$1;
(statearr_23259_23280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (13))){
var state_23253__$1 = state_23253;
var statearr_23260_23281 = state_23253__$1;
(statearr_23260_23281[(2)] = null);

(statearr_23260_23281[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (6))){
var inst_23230 = (state_23253[(7)]);
var inst_23236 = p.call(null,inst_23230);
var state_23253__$1 = state_23253;
if(cljs.core.truth_(inst_23236)){
var statearr_23261_23282 = state_23253__$1;
(statearr_23261_23282[(1)] = (9));

} else {
var statearr_23262_23283 = state_23253__$1;
(statearr_23262_23283[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (3))){
var inst_23251 = (state_23253[(2)]);
var state_23253__$1 = state_23253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23253__$1,inst_23251);
} else {
if((state_val_23254 === (12))){
var state_23253__$1 = state_23253;
var statearr_23263_23284 = state_23253__$1;
(statearr_23263_23284[(2)] = null);

(statearr_23263_23284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (2))){
var state_23253__$1 = state_23253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23253__$1,(4),ch);
} else {
if((state_val_23254 === (11))){
var inst_23230 = (state_23253[(7)]);
var inst_23240 = (state_23253[(2)]);
var state_23253__$1 = state_23253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23253__$1,(8),inst_23240,inst_23230);
} else {
if((state_val_23254 === (9))){
var state_23253__$1 = state_23253;
var statearr_23264_23285 = state_23253__$1;
(statearr_23264_23285[(2)] = tc);

(statearr_23264_23285[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (5))){
var inst_23233 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23234 = cljs.core.async.close_BANG_.call(null,fc);
var state_23253__$1 = (function (){var statearr_23265 = state_23253;
(statearr_23265[(8)] = inst_23233);

return statearr_23265;
})();
var statearr_23266_23286 = state_23253__$1;
(statearr_23266_23286[(2)] = inst_23234);

(statearr_23266_23286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (14))){
var inst_23247 = (state_23253[(2)]);
var state_23253__$1 = state_23253;
var statearr_23267_23287 = state_23253__$1;
(statearr_23267_23287[(2)] = inst_23247);

(statearr_23267_23287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (10))){
var state_23253__$1 = state_23253;
var statearr_23268_23288 = state_23253__$1;
(statearr_23268_23288[(2)] = fc);

(statearr_23268_23288[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23254 === (8))){
var inst_23242 = (state_23253[(2)]);
var state_23253__$1 = state_23253;
if(cljs.core.truth_(inst_23242)){
var statearr_23269_23289 = state_23253__$1;
(statearr_23269_23289[(1)] = (12));

} else {
var statearr_23270_23290 = state_23253__$1;
(statearr_23270_23290[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__22733__auto__ = null;
var cljs$core$async$state_machine__22733__auto____0 = (function (){
var statearr_23271 = [null,null,null,null,null,null,null,null,null];
(statearr_23271[(0)] = cljs$core$async$state_machine__22733__auto__);

(statearr_23271[(1)] = (1));

return statearr_23271;
});
var cljs$core$async$state_machine__22733__auto____1 = (function (state_23253){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_23253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e23272){if((e23272 instanceof Object)){
var ex__22736__auto__ = e23272;
var statearr_23273_23291 = state_23253;
(statearr_23273_23291[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23292 = state_23253;
state_23253 = G__23292;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
cljs$core$async$state_machine__22733__auto__ = function(state_23253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22733__auto____1.call(this,state_23253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22733__auto____0;
cljs$core$async$state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22733__auto____1;
return cljs$core$async$state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_23274 = f__22828__auto__.call(null);
(statearr_23274[(6)] = c__22827__auto___23276);

return statearr_23274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22827__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_23313){
var state_val_23314 = (state_23313[(1)]);
if((state_val_23314 === (7))){
var inst_23309 = (state_23313[(2)]);
var state_23313__$1 = state_23313;
var statearr_23315_23333 = state_23313__$1;
(statearr_23315_23333[(2)] = inst_23309);

(statearr_23315_23333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23314 === (1))){
var inst_23293 = init;
var state_23313__$1 = (function (){var statearr_23316 = state_23313;
(statearr_23316[(7)] = inst_23293);

return statearr_23316;
})();
var statearr_23317_23334 = state_23313__$1;
(statearr_23317_23334[(2)] = null);

(statearr_23317_23334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23314 === (4))){
var inst_23296 = (state_23313[(8)]);
var inst_23296__$1 = (state_23313[(2)]);
var inst_23297 = (inst_23296__$1 == null);
var state_23313__$1 = (function (){var statearr_23318 = state_23313;
(statearr_23318[(8)] = inst_23296__$1);

return statearr_23318;
})();
if(cljs.core.truth_(inst_23297)){
var statearr_23319_23335 = state_23313__$1;
(statearr_23319_23335[(1)] = (5));

} else {
var statearr_23320_23336 = state_23313__$1;
(statearr_23320_23336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23314 === (6))){
var inst_23300 = (state_23313[(9)]);
var inst_23296 = (state_23313[(8)]);
var inst_23293 = (state_23313[(7)]);
var inst_23300__$1 = f.call(null,inst_23293,inst_23296);
var inst_23301 = cljs.core.reduced_QMARK_.call(null,inst_23300__$1);
var state_23313__$1 = (function (){var statearr_23321 = state_23313;
(statearr_23321[(9)] = inst_23300__$1);

return statearr_23321;
})();
if(inst_23301){
var statearr_23322_23337 = state_23313__$1;
(statearr_23322_23337[(1)] = (8));

} else {
var statearr_23323_23338 = state_23313__$1;
(statearr_23323_23338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23314 === (3))){
var inst_23311 = (state_23313[(2)]);
var state_23313__$1 = state_23313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23313__$1,inst_23311);
} else {
if((state_val_23314 === (2))){
var state_23313__$1 = state_23313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23313__$1,(4),ch);
} else {
if((state_val_23314 === (9))){
var inst_23300 = (state_23313[(9)]);
var inst_23293 = inst_23300;
var state_23313__$1 = (function (){var statearr_23324 = state_23313;
(statearr_23324[(7)] = inst_23293);

return statearr_23324;
})();
var statearr_23325_23339 = state_23313__$1;
(statearr_23325_23339[(2)] = null);

(statearr_23325_23339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23314 === (5))){
var inst_23293 = (state_23313[(7)]);
var state_23313__$1 = state_23313;
var statearr_23326_23340 = state_23313__$1;
(statearr_23326_23340[(2)] = inst_23293);

(statearr_23326_23340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23314 === (10))){
var inst_23307 = (state_23313[(2)]);
var state_23313__$1 = state_23313;
var statearr_23327_23341 = state_23313__$1;
(statearr_23327_23341[(2)] = inst_23307);

(statearr_23327_23341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23314 === (8))){
var inst_23300 = (state_23313[(9)]);
var inst_23303 = cljs.core.deref.call(null,inst_23300);
var state_23313__$1 = state_23313;
var statearr_23328_23342 = state_23313__$1;
(statearr_23328_23342[(2)] = inst_23303);

(statearr_23328_23342[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__22733__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22733__auto____0 = (function (){
var statearr_23329 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23329[(0)] = cljs$core$async$reduce_$_state_machine__22733__auto__);

(statearr_23329[(1)] = (1));

return statearr_23329;
});
var cljs$core$async$reduce_$_state_machine__22733__auto____1 = (function (state_23313){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_23313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e23330){if((e23330 instanceof Object)){
var ex__22736__auto__ = e23330;
var statearr_23331_23343 = state_23313;
(statearr_23331_23343[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23344 = state_23313;
state_23313 = G__23344;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22733__auto__ = function(state_23313){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22733__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22733__auto____1.call(this,state_23313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22733__auto____0;
cljs$core$async$reduce_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22733__auto____1;
return cljs$core$async$reduce_$_state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_23332 = f__22828__auto__.call(null);
(statearr_23332[(6)] = c__22827__auto__);

return statearr_23332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));

return c__22827__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__22827__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_23350){
var state_val_23351 = (state_23350[(1)]);
if((state_val_23351 === (1))){
var inst_23345 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_23350__$1 = state_23350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23350__$1,(2),inst_23345);
} else {
if((state_val_23351 === (2))){
var inst_23347 = (state_23350[(2)]);
var inst_23348 = f__$1.call(null,inst_23347);
var state_23350__$1 = state_23350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23350__$1,inst_23348);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__22733__auto__ = null;
var cljs$core$async$transduce_$_state_machine__22733__auto____0 = (function (){
var statearr_23352 = [null,null,null,null,null,null,null];
(statearr_23352[(0)] = cljs$core$async$transduce_$_state_machine__22733__auto__);

(statearr_23352[(1)] = (1));

return statearr_23352;
});
var cljs$core$async$transduce_$_state_machine__22733__auto____1 = (function (state_23350){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_23350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e23353){if((e23353 instanceof Object)){
var ex__22736__auto__ = e23353;
var statearr_23354_23356 = state_23350;
(statearr_23354_23356[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23357 = state_23350;
state_23350 = G__23357;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__22733__auto__ = function(state_23350){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__22733__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__22733__auto____1.call(this,state_23350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__22733__auto____0;
cljs$core$async$transduce_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__22733__auto____1;
return cljs$core$async$transduce_$_state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_23355 = f__22828__auto__.call(null);
(statearr_23355[(6)] = c__22827__auto__);

return statearr_23355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));

return c__22827__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__23359 = arguments.length;
switch (G__23359) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22827__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_23384){
var state_val_23385 = (state_23384[(1)]);
if((state_val_23385 === (7))){
var inst_23366 = (state_23384[(2)]);
var state_23384__$1 = state_23384;
var statearr_23386_23407 = state_23384__$1;
(statearr_23386_23407[(2)] = inst_23366);

(statearr_23386_23407[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23385 === (1))){
var inst_23360 = cljs.core.seq.call(null,coll);
var inst_23361 = inst_23360;
var state_23384__$1 = (function (){var statearr_23387 = state_23384;
(statearr_23387[(7)] = inst_23361);

return statearr_23387;
})();
var statearr_23388_23408 = state_23384__$1;
(statearr_23388_23408[(2)] = null);

(statearr_23388_23408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23385 === (4))){
var inst_23361 = (state_23384[(7)]);
var inst_23364 = cljs.core.first.call(null,inst_23361);
var state_23384__$1 = state_23384;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23384__$1,(7),ch,inst_23364);
} else {
if((state_val_23385 === (13))){
var inst_23378 = (state_23384[(2)]);
var state_23384__$1 = state_23384;
var statearr_23389_23409 = state_23384__$1;
(statearr_23389_23409[(2)] = inst_23378);

(statearr_23389_23409[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23385 === (6))){
var inst_23369 = (state_23384[(2)]);
var state_23384__$1 = state_23384;
if(cljs.core.truth_(inst_23369)){
var statearr_23390_23410 = state_23384__$1;
(statearr_23390_23410[(1)] = (8));

} else {
var statearr_23391_23411 = state_23384__$1;
(statearr_23391_23411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23385 === (3))){
var inst_23382 = (state_23384[(2)]);
var state_23384__$1 = state_23384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23384__$1,inst_23382);
} else {
if((state_val_23385 === (12))){
var state_23384__$1 = state_23384;
var statearr_23392_23412 = state_23384__$1;
(statearr_23392_23412[(2)] = null);

(statearr_23392_23412[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23385 === (2))){
var inst_23361 = (state_23384[(7)]);
var state_23384__$1 = state_23384;
if(cljs.core.truth_(inst_23361)){
var statearr_23393_23413 = state_23384__$1;
(statearr_23393_23413[(1)] = (4));

} else {
var statearr_23394_23414 = state_23384__$1;
(statearr_23394_23414[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23385 === (11))){
var inst_23375 = cljs.core.async.close_BANG_.call(null,ch);
var state_23384__$1 = state_23384;
var statearr_23395_23415 = state_23384__$1;
(statearr_23395_23415[(2)] = inst_23375);

(statearr_23395_23415[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23385 === (9))){
var state_23384__$1 = state_23384;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23396_23416 = state_23384__$1;
(statearr_23396_23416[(1)] = (11));

} else {
var statearr_23397_23417 = state_23384__$1;
(statearr_23397_23417[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23385 === (5))){
var inst_23361 = (state_23384[(7)]);
var state_23384__$1 = state_23384;
var statearr_23398_23418 = state_23384__$1;
(statearr_23398_23418[(2)] = inst_23361);

(statearr_23398_23418[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23385 === (10))){
var inst_23380 = (state_23384[(2)]);
var state_23384__$1 = state_23384;
var statearr_23399_23419 = state_23384__$1;
(statearr_23399_23419[(2)] = inst_23380);

(statearr_23399_23419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23385 === (8))){
var inst_23361 = (state_23384[(7)]);
var inst_23371 = cljs.core.next.call(null,inst_23361);
var inst_23361__$1 = inst_23371;
var state_23384__$1 = (function (){var statearr_23400 = state_23384;
(statearr_23400[(7)] = inst_23361__$1);

return statearr_23400;
})();
var statearr_23401_23420 = state_23384__$1;
(statearr_23401_23420[(2)] = null);

(statearr_23401_23420[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__22733__auto__ = null;
var cljs$core$async$state_machine__22733__auto____0 = (function (){
var statearr_23402 = [null,null,null,null,null,null,null,null];
(statearr_23402[(0)] = cljs$core$async$state_machine__22733__auto__);

(statearr_23402[(1)] = (1));

return statearr_23402;
});
var cljs$core$async$state_machine__22733__auto____1 = (function (state_23384){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_23384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e23403){if((e23403 instanceof Object)){
var ex__22736__auto__ = e23403;
var statearr_23404_23421 = state_23384;
(statearr_23404_23421[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23422 = state_23384;
state_23384 = G__23422;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
cljs$core$async$state_machine__22733__auto__ = function(state_23384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22733__auto____1.call(this,state_23384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22733__auto____0;
cljs$core$async$state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22733__auto____1;
return cljs$core$async$state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_23405 = f__22828__auto__.call(null);
(statearr_23405[(6)] = c__22827__auto__);

return statearr_23405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));

return c__22827__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,_);
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m);
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23423 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23423 = (function (ch,cs,meta23424){
this.ch = ch;
this.cs = cs;
this.meta23424 = meta23424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23425,meta23424__$1){
var self__ = this;
var _23425__$1 = this;
return (new cljs.core.async.t_cljs$core$async23423(self__.ch,self__.cs,meta23424__$1));
}));

(cljs.core.async.t_cljs$core$async23423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23425){
var self__ = this;
var _23425__$1 = this;
return self__.meta23424;
}));

(cljs.core.async.t_cljs$core$async23423.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23423.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async23423.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23423.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async23423.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async23423.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async23423.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23424","meta23424",-869956160,null)], null);
}));

(cljs.core.async.t_cljs$core$async23423.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23423.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23423");

(cljs.core.async.t_cljs$core$async23423.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async23423");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23423.
 */
cljs.core.async.__GT_t_cljs$core$async23423 = (function cljs$core$async$mult_$___GT_t_cljs$core$async23423(ch__$1,cs__$1,meta23424){
return (new cljs.core.async.t_cljs$core$async23423(ch__$1,cs__$1,meta23424));
});

}

return (new cljs.core.async.t_cljs$core$async23423(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__22827__auto___23641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_23558){
var state_val_23559 = (state_23558[(1)]);
if((state_val_23559 === (7))){
var inst_23554 = (state_23558[(2)]);
var state_23558__$1 = state_23558;
var statearr_23560_23642 = state_23558__$1;
(statearr_23560_23642[(2)] = inst_23554);

(statearr_23560_23642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (20))){
var inst_23459 = (state_23558[(7)]);
var inst_23471 = cljs.core.first.call(null,inst_23459);
var inst_23472 = cljs.core.nth.call(null,inst_23471,(0),null);
var inst_23473 = cljs.core.nth.call(null,inst_23471,(1),null);
var state_23558__$1 = (function (){var statearr_23561 = state_23558;
(statearr_23561[(8)] = inst_23472);

return statearr_23561;
})();
if(cljs.core.truth_(inst_23473)){
var statearr_23562_23643 = state_23558__$1;
(statearr_23562_23643[(1)] = (22));

} else {
var statearr_23563_23644 = state_23558__$1;
(statearr_23563_23644[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (27))){
var inst_23503 = (state_23558[(9)]);
var inst_23501 = (state_23558[(10)]);
var inst_23428 = (state_23558[(11)]);
var inst_23508 = (state_23558[(12)]);
var inst_23508__$1 = cljs.core._nth.call(null,inst_23501,inst_23503);
var inst_23509 = cljs.core.async.put_BANG_.call(null,inst_23508__$1,inst_23428,done);
var state_23558__$1 = (function (){var statearr_23564 = state_23558;
(statearr_23564[(12)] = inst_23508__$1);

return statearr_23564;
})();
if(cljs.core.truth_(inst_23509)){
var statearr_23565_23645 = state_23558__$1;
(statearr_23565_23645[(1)] = (30));

} else {
var statearr_23566_23646 = state_23558__$1;
(statearr_23566_23646[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (1))){
var state_23558__$1 = state_23558;
var statearr_23567_23647 = state_23558__$1;
(statearr_23567_23647[(2)] = null);

(statearr_23567_23647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (24))){
var inst_23459 = (state_23558[(7)]);
var inst_23478 = (state_23558[(2)]);
var inst_23479 = cljs.core.next.call(null,inst_23459);
var inst_23437 = inst_23479;
var inst_23438 = null;
var inst_23439 = (0);
var inst_23440 = (0);
var state_23558__$1 = (function (){var statearr_23568 = state_23558;
(statearr_23568[(13)] = inst_23437);

(statearr_23568[(14)] = inst_23438);

(statearr_23568[(15)] = inst_23439);

(statearr_23568[(16)] = inst_23478);

(statearr_23568[(17)] = inst_23440);

return statearr_23568;
})();
var statearr_23569_23648 = state_23558__$1;
(statearr_23569_23648[(2)] = null);

(statearr_23569_23648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (39))){
var state_23558__$1 = state_23558;
var statearr_23573_23649 = state_23558__$1;
(statearr_23573_23649[(2)] = null);

(statearr_23573_23649[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (4))){
var inst_23428 = (state_23558[(11)]);
var inst_23428__$1 = (state_23558[(2)]);
var inst_23429 = (inst_23428__$1 == null);
var state_23558__$1 = (function (){var statearr_23574 = state_23558;
(statearr_23574[(11)] = inst_23428__$1);

return statearr_23574;
})();
if(cljs.core.truth_(inst_23429)){
var statearr_23575_23650 = state_23558__$1;
(statearr_23575_23650[(1)] = (5));

} else {
var statearr_23576_23651 = state_23558__$1;
(statearr_23576_23651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (15))){
var inst_23437 = (state_23558[(13)]);
var inst_23438 = (state_23558[(14)]);
var inst_23439 = (state_23558[(15)]);
var inst_23440 = (state_23558[(17)]);
var inst_23455 = (state_23558[(2)]);
var inst_23456 = (inst_23440 + (1));
var tmp23570 = inst_23437;
var tmp23571 = inst_23438;
var tmp23572 = inst_23439;
var inst_23437__$1 = tmp23570;
var inst_23438__$1 = tmp23571;
var inst_23439__$1 = tmp23572;
var inst_23440__$1 = inst_23456;
var state_23558__$1 = (function (){var statearr_23577 = state_23558;
(statearr_23577[(13)] = inst_23437__$1);

(statearr_23577[(14)] = inst_23438__$1);

(statearr_23577[(15)] = inst_23439__$1);

(statearr_23577[(17)] = inst_23440__$1);

(statearr_23577[(18)] = inst_23455);

return statearr_23577;
})();
var statearr_23578_23652 = state_23558__$1;
(statearr_23578_23652[(2)] = null);

(statearr_23578_23652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (21))){
var inst_23482 = (state_23558[(2)]);
var state_23558__$1 = state_23558;
var statearr_23582_23653 = state_23558__$1;
(statearr_23582_23653[(2)] = inst_23482);

(statearr_23582_23653[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (31))){
var inst_23508 = (state_23558[(12)]);
var inst_23512 = cljs.core.async.untap_STAR_.call(null,m,inst_23508);
var state_23558__$1 = state_23558;
var statearr_23583_23654 = state_23558__$1;
(statearr_23583_23654[(2)] = inst_23512);

(statearr_23583_23654[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (32))){
var inst_23503 = (state_23558[(9)]);
var inst_23501 = (state_23558[(10)]);
var inst_23502 = (state_23558[(19)]);
var inst_23500 = (state_23558[(20)]);
var inst_23514 = (state_23558[(2)]);
var inst_23515 = (inst_23503 + (1));
var tmp23579 = inst_23501;
var tmp23580 = inst_23502;
var tmp23581 = inst_23500;
var inst_23500__$1 = tmp23581;
var inst_23501__$1 = tmp23579;
var inst_23502__$1 = tmp23580;
var inst_23503__$1 = inst_23515;
var state_23558__$1 = (function (){var statearr_23584 = state_23558;
(statearr_23584[(9)] = inst_23503__$1);

(statearr_23584[(21)] = inst_23514);

(statearr_23584[(10)] = inst_23501__$1);

(statearr_23584[(19)] = inst_23502__$1);

(statearr_23584[(20)] = inst_23500__$1);

return statearr_23584;
})();
var statearr_23585_23655 = state_23558__$1;
(statearr_23585_23655[(2)] = null);

(statearr_23585_23655[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (40))){
var inst_23527 = (state_23558[(22)]);
var inst_23531 = cljs.core.async.untap_STAR_.call(null,m,inst_23527);
var state_23558__$1 = state_23558;
var statearr_23586_23656 = state_23558__$1;
(statearr_23586_23656[(2)] = inst_23531);

(statearr_23586_23656[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (33))){
var inst_23518 = (state_23558[(23)]);
var inst_23520 = cljs.core.chunked_seq_QMARK_.call(null,inst_23518);
var state_23558__$1 = state_23558;
if(inst_23520){
var statearr_23587_23657 = state_23558__$1;
(statearr_23587_23657[(1)] = (36));

} else {
var statearr_23588_23658 = state_23558__$1;
(statearr_23588_23658[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (13))){
var inst_23449 = (state_23558[(24)]);
var inst_23452 = cljs.core.async.close_BANG_.call(null,inst_23449);
var state_23558__$1 = state_23558;
var statearr_23589_23659 = state_23558__$1;
(statearr_23589_23659[(2)] = inst_23452);

(statearr_23589_23659[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (22))){
var inst_23472 = (state_23558[(8)]);
var inst_23475 = cljs.core.async.close_BANG_.call(null,inst_23472);
var state_23558__$1 = state_23558;
var statearr_23590_23660 = state_23558__$1;
(statearr_23590_23660[(2)] = inst_23475);

(statearr_23590_23660[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (36))){
var inst_23518 = (state_23558[(23)]);
var inst_23522 = cljs.core.chunk_first.call(null,inst_23518);
var inst_23523 = cljs.core.chunk_rest.call(null,inst_23518);
var inst_23524 = cljs.core.count.call(null,inst_23522);
var inst_23500 = inst_23523;
var inst_23501 = inst_23522;
var inst_23502 = inst_23524;
var inst_23503 = (0);
var state_23558__$1 = (function (){var statearr_23591 = state_23558;
(statearr_23591[(9)] = inst_23503);

(statearr_23591[(10)] = inst_23501);

(statearr_23591[(19)] = inst_23502);

(statearr_23591[(20)] = inst_23500);

return statearr_23591;
})();
var statearr_23592_23661 = state_23558__$1;
(statearr_23592_23661[(2)] = null);

(statearr_23592_23661[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (41))){
var inst_23518 = (state_23558[(23)]);
var inst_23533 = (state_23558[(2)]);
var inst_23534 = cljs.core.next.call(null,inst_23518);
var inst_23500 = inst_23534;
var inst_23501 = null;
var inst_23502 = (0);
var inst_23503 = (0);
var state_23558__$1 = (function (){var statearr_23593 = state_23558;
(statearr_23593[(9)] = inst_23503);

(statearr_23593[(25)] = inst_23533);

(statearr_23593[(10)] = inst_23501);

(statearr_23593[(19)] = inst_23502);

(statearr_23593[(20)] = inst_23500);

return statearr_23593;
})();
var statearr_23594_23662 = state_23558__$1;
(statearr_23594_23662[(2)] = null);

(statearr_23594_23662[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (43))){
var state_23558__$1 = state_23558;
var statearr_23595_23663 = state_23558__$1;
(statearr_23595_23663[(2)] = null);

(statearr_23595_23663[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (29))){
var inst_23542 = (state_23558[(2)]);
var state_23558__$1 = state_23558;
var statearr_23596_23664 = state_23558__$1;
(statearr_23596_23664[(2)] = inst_23542);

(statearr_23596_23664[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (44))){
var inst_23551 = (state_23558[(2)]);
var state_23558__$1 = (function (){var statearr_23597 = state_23558;
(statearr_23597[(26)] = inst_23551);

return statearr_23597;
})();
var statearr_23598_23665 = state_23558__$1;
(statearr_23598_23665[(2)] = null);

(statearr_23598_23665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (6))){
var inst_23492 = (state_23558[(27)]);
var inst_23491 = cljs.core.deref.call(null,cs);
var inst_23492__$1 = cljs.core.keys.call(null,inst_23491);
var inst_23493 = cljs.core.count.call(null,inst_23492__$1);
var inst_23494 = cljs.core.reset_BANG_.call(null,dctr,inst_23493);
var inst_23499 = cljs.core.seq.call(null,inst_23492__$1);
var inst_23500 = inst_23499;
var inst_23501 = null;
var inst_23502 = (0);
var inst_23503 = (0);
var state_23558__$1 = (function (){var statearr_23599 = state_23558;
(statearr_23599[(27)] = inst_23492__$1);

(statearr_23599[(9)] = inst_23503);

(statearr_23599[(10)] = inst_23501);

(statearr_23599[(19)] = inst_23502);

(statearr_23599[(28)] = inst_23494);

(statearr_23599[(20)] = inst_23500);

return statearr_23599;
})();
var statearr_23600_23666 = state_23558__$1;
(statearr_23600_23666[(2)] = null);

(statearr_23600_23666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (28))){
var inst_23518 = (state_23558[(23)]);
var inst_23500 = (state_23558[(20)]);
var inst_23518__$1 = cljs.core.seq.call(null,inst_23500);
var state_23558__$1 = (function (){var statearr_23601 = state_23558;
(statearr_23601[(23)] = inst_23518__$1);

return statearr_23601;
})();
if(inst_23518__$1){
var statearr_23602_23667 = state_23558__$1;
(statearr_23602_23667[(1)] = (33));

} else {
var statearr_23603_23668 = state_23558__$1;
(statearr_23603_23668[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (25))){
var inst_23503 = (state_23558[(9)]);
var inst_23502 = (state_23558[(19)]);
var inst_23505 = (inst_23503 < inst_23502);
var inst_23506 = inst_23505;
var state_23558__$1 = state_23558;
if(cljs.core.truth_(inst_23506)){
var statearr_23604_23669 = state_23558__$1;
(statearr_23604_23669[(1)] = (27));

} else {
var statearr_23605_23670 = state_23558__$1;
(statearr_23605_23670[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (34))){
var state_23558__$1 = state_23558;
var statearr_23606_23671 = state_23558__$1;
(statearr_23606_23671[(2)] = null);

(statearr_23606_23671[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (17))){
var state_23558__$1 = state_23558;
var statearr_23607_23672 = state_23558__$1;
(statearr_23607_23672[(2)] = null);

(statearr_23607_23672[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (3))){
var inst_23556 = (state_23558[(2)]);
var state_23558__$1 = state_23558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23558__$1,inst_23556);
} else {
if((state_val_23559 === (12))){
var inst_23487 = (state_23558[(2)]);
var state_23558__$1 = state_23558;
var statearr_23608_23673 = state_23558__$1;
(statearr_23608_23673[(2)] = inst_23487);

(statearr_23608_23673[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (2))){
var state_23558__$1 = state_23558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23558__$1,(4),ch);
} else {
if((state_val_23559 === (23))){
var state_23558__$1 = state_23558;
var statearr_23609_23674 = state_23558__$1;
(statearr_23609_23674[(2)] = null);

(statearr_23609_23674[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (35))){
var inst_23540 = (state_23558[(2)]);
var state_23558__$1 = state_23558;
var statearr_23610_23675 = state_23558__$1;
(statearr_23610_23675[(2)] = inst_23540);

(statearr_23610_23675[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (19))){
var inst_23459 = (state_23558[(7)]);
var inst_23463 = cljs.core.chunk_first.call(null,inst_23459);
var inst_23464 = cljs.core.chunk_rest.call(null,inst_23459);
var inst_23465 = cljs.core.count.call(null,inst_23463);
var inst_23437 = inst_23464;
var inst_23438 = inst_23463;
var inst_23439 = inst_23465;
var inst_23440 = (0);
var state_23558__$1 = (function (){var statearr_23611 = state_23558;
(statearr_23611[(13)] = inst_23437);

(statearr_23611[(14)] = inst_23438);

(statearr_23611[(15)] = inst_23439);

(statearr_23611[(17)] = inst_23440);

return statearr_23611;
})();
var statearr_23612_23676 = state_23558__$1;
(statearr_23612_23676[(2)] = null);

(statearr_23612_23676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (11))){
var inst_23437 = (state_23558[(13)]);
var inst_23459 = (state_23558[(7)]);
var inst_23459__$1 = cljs.core.seq.call(null,inst_23437);
var state_23558__$1 = (function (){var statearr_23613 = state_23558;
(statearr_23613[(7)] = inst_23459__$1);

return statearr_23613;
})();
if(inst_23459__$1){
var statearr_23614_23677 = state_23558__$1;
(statearr_23614_23677[(1)] = (16));

} else {
var statearr_23615_23678 = state_23558__$1;
(statearr_23615_23678[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (9))){
var inst_23489 = (state_23558[(2)]);
var state_23558__$1 = state_23558;
var statearr_23616_23679 = state_23558__$1;
(statearr_23616_23679[(2)] = inst_23489);

(statearr_23616_23679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (5))){
var inst_23435 = cljs.core.deref.call(null,cs);
var inst_23436 = cljs.core.seq.call(null,inst_23435);
var inst_23437 = inst_23436;
var inst_23438 = null;
var inst_23439 = (0);
var inst_23440 = (0);
var state_23558__$1 = (function (){var statearr_23617 = state_23558;
(statearr_23617[(13)] = inst_23437);

(statearr_23617[(14)] = inst_23438);

(statearr_23617[(15)] = inst_23439);

(statearr_23617[(17)] = inst_23440);

return statearr_23617;
})();
var statearr_23618_23680 = state_23558__$1;
(statearr_23618_23680[(2)] = null);

(statearr_23618_23680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (14))){
var state_23558__$1 = state_23558;
var statearr_23619_23681 = state_23558__$1;
(statearr_23619_23681[(2)] = null);

(statearr_23619_23681[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (45))){
var inst_23548 = (state_23558[(2)]);
var state_23558__$1 = state_23558;
var statearr_23620_23682 = state_23558__$1;
(statearr_23620_23682[(2)] = inst_23548);

(statearr_23620_23682[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (26))){
var inst_23492 = (state_23558[(27)]);
var inst_23544 = (state_23558[(2)]);
var inst_23545 = cljs.core.seq.call(null,inst_23492);
var state_23558__$1 = (function (){var statearr_23621 = state_23558;
(statearr_23621[(29)] = inst_23544);

return statearr_23621;
})();
if(inst_23545){
var statearr_23622_23683 = state_23558__$1;
(statearr_23622_23683[(1)] = (42));

} else {
var statearr_23623_23684 = state_23558__$1;
(statearr_23623_23684[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (16))){
var inst_23459 = (state_23558[(7)]);
var inst_23461 = cljs.core.chunked_seq_QMARK_.call(null,inst_23459);
var state_23558__$1 = state_23558;
if(inst_23461){
var statearr_23624_23685 = state_23558__$1;
(statearr_23624_23685[(1)] = (19));

} else {
var statearr_23625_23686 = state_23558__$1;
(statearr_23625_23686[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (38))){
var inst_23537 = (state_23558[(2)]);
var state_23558__$1 = state_23558;
var statearr_23626_23687 = state_23558__$1;
(statearr_23626_23687[(2)] = inst_23537);

(statearr_23626_23687[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (30))){
var state_23558__$1 = state_23558;
var statearr_23627_23688 = state_23558__$1;
(statearr_23627_23688[(2)] = null);

(statearr_23627_23688[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (10))){
var inst_23438 = (state_23558[(14)]);
var inst_23440 = (state_23558[(17)]);
var inst_23448 = cljs.core._nth.call(null,inst_23438,inst_23440);
var inst_23449 = cljs.core.nth.call(null,inst_23448,(0),null);
var inst_23450 = cljs.core.nth.call(null,inst_23448,(1),null);
var state_23558__$1 = (function (){var statearr_23628 = state_23558;
(statearr_23628[(24)] = inst_23449);

return statearr_23628;
})();
if(cljs.core.truth_(inst_23450)){
var statearr_23629_23689 = state_23558__$1;
(statearr_23629_23689[(1)] = (13));

} else {
var statearr_23630_23690 = state_23558__$1;
(statearr_23630_23690[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (18))){
var inst_23485 = (state_23558[(2)]);
var state_23558__$1 = state_23558;
var statearr_23631_23691 = state_23558__$1;
(statearr_23631_23691[(2)] = inst_23485);

(statearr_23631_23691[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (42))){
var state_23558__$1 = state_23558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23558__$1,(45),dchan);
} else {
if((state_val_23559 === (37))){
var inst_23518 = (state_23558[(23)]);
var inst_23527 = (state_23558[(22)]);
var inst_23428 = (state_23558[(11)]);
var inst_23527__$1 = cljs.core.first.call(null,inst_23518);
var inst_23528 = cljs.core.async.put_BANG_.call(null,inst_23527__$1,inst_23428,done);
var state_23558__$1 = (function (){var statearr_23632 = state_23558;
(statearr_23632[(22)] = inst_23527__$1);

return statearr_23632;
})();
if(cljs.core.truth_(inst_23528)){
var statearr_23633_23692 = state_23558__$1;
(statearr_23633_23692[(1)] = (39));

} else {
var statearr_23634_23693 = state_23558__$1;
(statearr_23634_23693[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23559 === (8))){
var inst_23439 = (state_23558[(15)]);
var inst_23440 = (state_23558[(17)]);
var inst_23442 = (inst_23440 < inst_23439);
var inst_23443 = inst_23442;
var state_23558__$1 = state_23558;
if(cljs.core.truth_(inst_23443)){
var statearr_23635_23694 = state_23558__$1;
(statearr_23635_23694[(1)] = (10));

} else {
var statearr_23636_23695 = state_23558__$1;
(statearr_23636_23695[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__22733__auto__ = null;
var cljs$core$async$mult_$_state_machine__22733__auto____0 = (function (){
var statearr_23637 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23637[(0)] = cljs$core$async$mult_$_state_machine__22733__auto__);

(statearr_23637[(1)] = (1));

return statearr_23637;
});
var cljs$core$async$mult_$_state_machine__22733__auto____1 = (function (state_23558){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_23558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e23638){if((e23638 instanceof Object)){
var ex__22736__auto__ = e23638;
var statearr_23639_23696 = state_23558;
(statearr_23639_23696[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23697 = state_23558;
state_23558 = G__23697;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22733__auto__ = function(state_23558){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22733__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22733__auto____1.call(this,state_23558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22733__auto____0;
cljs$core$async$mult_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22733__auto____1;
return cljs$core$async$mult_$_state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_23640 = f__22828__auto__.call(null);
(statearr_23640[(6)] = c__22827__auto___23641);

return statearr_23640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__23699 = arguments.length;
switch (G__23699) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m);
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,state_map);
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,mode);
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___23711 = arguments.length;
var i__4790__auto___23712 = (0);
while(true){
if((i__4790__auto___23712 < len__4789__auto___23711)){
args__4795__auto__.push((arguments[i__4790__auto___23712]));

var G__23713 = (i__4790__auto___23712 + (1));
i__4790__auto___23712 = G__23713;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23705){
var map__23706 = p__23705;
var map__23706__$1 = (((((!((map__23706 == null))))?(((((map__23706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23706):map__23706);
var opts = map__23706__$1;
var statearr_23708_23714 = state;
(statearr_23708_23714[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_23709_23715 = state;
(statearr_23709_23715[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_23710_23716 = state;
(statearr_23710_23716[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23701){
var G__23702 = cljs.core.first.call(null,seq23701);
var seq23701__$1 = cljs.core.next.call(null,seq23701);
var G__23703 = cljs.core.first.call(null,seq23701__$1);
var seq23701__$2 = cljs.core.next.call(null,seq23701__$1);
var G__23704 = cljs.core.first.call(null,seq23701__$2);
var seq23701__$3 = cljs.core.next.call(null,seq23701__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23702,G__23703,G__23704,seq23701__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23717 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23717 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23718){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23718 = meta23718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23719,meta23718__$1){
var self__ = this;
var _23719__$1 = this;
return (new cljs.core.async.t_cljs$core$async23717(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23718__$1));
}));

(cljs.core.async.t_cljs$core$async23717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23719){
var self__ = this;
var _23719__$1 = this;
return self__.meta23718;
}));

(cljs.core.async.t_cljs$core$async23717.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23717.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async23717.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23717.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23717.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23717.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23717.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23717.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async23717.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23718","meta23718",917893687,null)], null);
}));

(cljs.core.async.t_cljs$core$async23717.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23717");

(cljs.core.async.t_cljs$core$async23717.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async23717");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23717.
 */
cljs.core.async.__GT_t_cljs$core$async23717 = (function cljs$core$async$mix_$___GT_t_cljs$core$async23717(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23718){
return (new cljs.core.async.t_cljs$core$async23717(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23718));
});

}

return (new cljs.core.async.t_cljs$core$async23717(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22827__auto___23881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_23821){
var state_val_23822 = (state_23821[(1)]);
if((state_val_23822 === (7))){
var inst_23736 = (state_23821[(2)]);
var state_23821__$1 = state_23821;
var statearr_23823_23882 = state_23821__$1;
(statearr_23823_23882[(2)] = inst_23736);

(statearr_23823_23882[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (20))){
var inst_23748 = (state_23821[(7)]);
var state_23821__$1 = state_23821;
var statearr_23824_23883 = state_23821__$1;
(statearr_23824_23883[(2)] = inst_23748);

(statearr_23824_23883[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (27))){
var state_23821__$1 = state_23821;
var statearr_23825_23884 = state_23821__$1;
(statearr_23825_23884[(2)] = null);

(statearr_23825_23884[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (1))){
var inst_23723 = (state_23821[(8)]);
var inst_23723__$1 = calc_state.call(null);
var inst_23725 = (inst_23723__$1 == null);
var inst_23726 = cljs.core.not.call(null,inst_23725);
var state_23821__$1 = (function (){var statearr_23826 = state_23821;
(statearr_23826[(8)] = inst_23723__$1);

return statearr_23826;
})();
if(inst_23726){
var statearr_23827_23885 = state_23821__$1;
(statearr_23827_23885[(1)] = (2));

} else {
var statearr_23828_23886 = state_23821__$1;
(statearr_23828_23886[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (24))){
var inst_23781 = (state_23821[(9)]);
var inst_23795 = (state_23821[(10)]);
var inst_23772 = (state_23821[(11)]);
var inst_23795__$1 = inst_23772.call(null,inst_23781);
var state_23821__$1 = (function (){var statearr_23829 = state_23821;
(statearr_23829[(10)] = inst_23795__$1);

return statearr_23829;
})();
if(cljs.core.truth_(inst_23795__$1)){
var statearr_23830_23887 = state_23821__$1;
(statearr_23830_23887[(1)] = (29));

} else {
var statearr_23831_23888 = state_23821__$1;
(statearr_23831_23888[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (4))){
var inst_23739 = (state_23821[(2)]);
var state_23821__$1 = state_23821;
if(cljs.core.truth_(inst_23739)){
var statearr_23832_23889 = state_23821__$1;
(statearr_23832_23889[(1)] = (8));

} else {
var statearr_23833_23890 = state_23821__$1;
(statearr_23833_23890[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (15))){
var inst_23766 = (state_23821[(2)]);
var state_23821__$1 = state_23821;
if(cljs.core.truth_(inst_23766)){
var statearr_23834_23891 = state_23821__$1;
(statearr_23834_23891[(1)] = (19));

} else {
var statearr_23835_23892 = state_23821__$1;
(statearr_23835_23892[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (21))){
var inst_23771 = (state_23821[(12)]);
var inst_23771__$1 = (state_23821[(2)]);
var inst_23772 = cljs.core.get.call(null,inst_23771__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23773 = cljs.core.get.call(null,inst_23771__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23774 = cljs.core.get.call(null,inst_23771__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23821__$1 = (function (){var statearr_23836 = state_23821;
(statearr_23836[(13)] = inst_23773);

(statearr_23836[(11)] = inst_23772);

(statearr_23836[(12)] = inst_23771__$1);

return statearr_23836;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23821__$1,(22),inst_23774);
} else {
if((state_val_23822 === (31))){
var inst_23803 = (state_23821[(2)]);
var state_23821__$1 = state_23821;
if(cljs.core.truth_(inst_23803)){
var statearr_23837_23893 = state_23821__$1;
(statearr_23837_23893[(1)] = (32));

} else {
var statearr_23838_23894 = state_23821__$1;
(statearr_23838_23894[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (32))){
var inst_23780 = (state_23821[(14)]);
var state_23821__$1 = state_23821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23821__$1,(35),out,inst_23780);
} else {
if((state_val_23822 === (33))){
var inst_23771 = (state_23821[(12)]);
var inst_23748 = inst_23771;
var state_23821__$1 = (function (){var statearr_23839 = state_23821;
(statearr_23839[(7)] = inst_23748);

return statearr_23839;
})();
var statearr_23840_23895 = state_23821__$1;
(statearr_23840_23895[(2)] = null);

(statearr_23840_23895[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (13))){
var inst_23748 = (state_23821[(7)]);
var inst_23755 = inst_23748.cljs$lang$protocol_mask$partition0$;
var inst_23756 = (inst_23755 & (64));
var inst_23757 = inst_23748.cljs$core$ISeq$;
var inst_23758 = (cljs.core.PROTOCOL_SENTINEL === inst_23757);
var inst_23759 = ((inst_23756) || (inst_23758));
var state_23821__$1 = state_23821;
if(cljs.core.truth_(inst_23759)){
var statearr_23841_23896 = state_23821__$1;
(statearr_23841_23896[(1)] = (16));

} else {
var statearr_23842_23897 = state_23821__$1;
(statearr_23842_23897[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (22))){
var inst_23781 = (state_23821[(9)]);
var inst_23780 = (state_23821[(14)]);
var inst_23779 = (state_23821[(2)]);
var inst_23780__$1 = cljs.core.nth.call(null,inst_23779,(0),null);
var inst_23781__$1 = cljs.core.nth.call(null,inst_23779,(1),null);
var inst_23782 = (inst_23780__$1 == null);
var inst_23783 = cljs.core._EQ_.call(null,inst_23781__$1,change);
var inst_23784 = ((inst_23782) || (inst_23783));
var state_23821__$1 = (function (){var statearr_23843 = state_23821;
(statearr_23843[(9)] = inst_23781__$1);

(statearr_23843[(14)] = inst_23780__$1);

return statearr_23843;
})();
if(cljs.core.truth_(inst_23784)){
var statearr_23844_23898 = state_23821__$1;
(statearr_23844_23898[(1)] = (23));

} else {
var statearr_23845_23899 = state_23821__$1;
(statearr_23845_23899[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (36))){
var inst_23771 = (state_23821[(12)]);
var inst_23748 = inst_23771;
var state_23821__$1 = (function (){var statearr_23846 = state_23821;
(statearr_23846[(7)] = inst_23748);

return statearr_23846;
})();
var statearr_23847_23900 = state_23821__$1;
(statearr_23847_23900[(2)] = null);

(statearr_23847_23900[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (29))){
var inst_23795 = (state_23821[(10)]);
var state_23821__$1 = state_23821;
var statearr_23848_23901 = state_23821__$1;
(statearr_23848_23901[(2)] = inst_23795);

(statearr_23848_23901[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (6))){
var state_23821__$1 = state_23821;
var statearr_23849_23902 = state_23821__$1;
(statearr_23849_23902[(2)] = false);

(statearr_23849_23902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (28))){
var inst_23791 = (state_23821[(2)]);
var inst_23792 = calc_state.call(null);
var inst_23748 = inst_23792;
var state_23821__$1 = (function (){var statearr_23850 = state_23821;
(statearr_23850[(15)] = inst_23791);

(statearr_23850[(7)] = inst_23748);

return statearr_23850;
})();
var statearr_23851_23903 = state_23821__$1;
(statearr_23851_23903[(2)] = null);

(statearr_23851_23903[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (25))){
var inst_23817 = (state_23821[(2)]);
var state_23821__$1 = state_23821;
var statearr_23852_23904 = state_23821__$1;
(statearr_23852_23904[(2)] = inst_23817);

(statearr_23852_23904[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (34))){
var inst_23815 = (state_23821[(2)]);
var state_23821__$1 = state_23821;
var statearr_23853_23905 = state_23821__$1;
(statearr_23853_23905[(2)] = inst_23815);

(statearr_23853_23905[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (17))){
var state_23821__$1 = state_23821;
var statearr_23854_23906 = state_23821__$1;
(statearr_23854_23906[(2)] = false);

(statearr_23854_23906[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (3))){
var state_23821__$1 = state_23821;
var statearr_23855_23907 = state_23821__$1;
(statearr_23855_23907[(2)] = false);

(statearr_23855_23907[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (12))){
var inst_23819 = (state_23821[(2)]);
var state_23821__$1 = state_23821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23821__$1,inst_23819);
} else {
if((state_val_23822 === (2))){
var inst_23723 = (state_23821[(8)]);
var inst_23728 = inst_23723.cljs$lang$protocol_mask$partition0$;
var inst_23729 = (inst_23728 & (64));
var inst_23730 = inst_23723.cljs$core$ISeq$;
var inst_23731 = (cljs.core.PROTOCOL_SENTINEL === inst_23730);
var inst_23732 = ((inst_23729) || (inst_23731));
var state_23821__$1 = state_23821;
if(cljs.core.truth_(inst_23732)){
var statearr_23856_23908 = state_23821__$1;
(statearr_23856_23908[(1)] = (5));

} else {
var statearr_23857_23909 = state_23821__$1;
(statearr_23857_23909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (23))){
var inst_23780 = (state_23821[(14)]);
var inst_23786 = (inst_23780 == null);
var state_23821__$1 = state_23821;
if(cljs.core.truth_(inst_23786)){
var statearr_23858_23910 = state_23821__$1;
(statearr_23858_23910[(1)] = (26));

} else {
var statearr_23859_23911 = state_23821__$1;
(statearr_23859_23911[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (35))){
var inst_23806 = (state_23821[(2)]);
var state_23821__$1 = state_23821;
if(cljs.core.truth_(inst_23806)){
var statearr_23860_23912 = state_23821__$1;
(statearr_23860_23912[(1)] = (36));

} else {
var statearr_23861_23913 = state_23821__$1;
(statearr_23861_23913[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (19))){
var inst_23748 = (state_23821[(7)]);
var inst_23768 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23748);
var state_23821__$1 = state_23821;
var statearr_23862_23914 = state_23821__$1;
(statearr_23862_23914[(2)] = inst_23768);

(statearr_23862_23914[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (11))){
var inst_23748 = (state_23821[(7)]);
var inst_23752 = (inst_23748 == null);
var inst_23753 = cljs.core.not.call(null,inst_23752);
var state_23821__$1 = state_23821;
if(inst_23753){
var statearr_23863_23915 = state_23821__$1;
(statearr_23863_23915[(1)] = (13));

} else {
var statearr_23864_23916 = state_23821__$1;
(statearr_23864_23916[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (9))){
var inst_23723 = (state_23821[(8)]);
var state_23821__$1 = state_23821;
var statearr_23865_23917 = state_23821__$1;
(statearr_23865_23917[(2)] = inst_23723);

(statearr_23865_23917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (5))){
var state_23821__$1 = state_23821;
var statearr_23866_23918 = state_23821__$1;
(statearr_23866_23918[(2)] = true);

(statearr_23866_23918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (14))){
var state_23821__$1 = state_23821;
var statearr_23867_23919 = state_23821__$1;
(statearr_23867_23919[(2)] = false);

(statearr_23867_23919[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (26))){
var inst_23781 = (state_23821[(9)]);
var inst_23788 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23781);
var state_23821__$1 = state_23821;
var statearr_23868_23920 = state_23821__$1;
(statearr_23868_23920[(2)] = inst_23788);

(statearr_23868_23920[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (16))){
var state_23821__$1 = state_23821;
var statearr_23869_23921 = state_23821__$1;
(statearr_23869_23921[(2)] = true);

(statearr_23869_23921[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (38))){
var inst_23811 = (state_23821[(2)]);
var state_23821__$1 = state_23821;
var statearr_23870_23922 = state_23821__$1;
(statearr_23870_23922[(2)] = inst_23811);

(statearr_23870_23922[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (30))){
var inst_23773 = (state_23821[(13)]);
var inst_23781 = (state_23821[(9)]);
var inst_23772 = (state_23821[(11)]);
var inst_23798 = cljs.core.empty_QMARK_.call(null,inst_23772);
var inst_23799 = inst_23773.call(null,inst_23781);
var inst_23800 = cljs.core.not.call(null,inst_23799);
var inst_23801 = ((inst_23798) && (inst_23800));
var state_23821__$1 = state_23821;
var statearr_23871_23923 = state_23821__$1;
(statearr_23871_23923[(2)] = inst_23801);

(statearr_23871_23923[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (10))){
var inst_23723 = (state_23821[(8)]);
var inst_23744 = (state_23821[(2)]);
var inst_23745 = cljs.core.get.call(null,inst_23744,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23746 = cljs.core.get.call(null,inst_23744,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23747 = cljs.core.get.call(null,inst_23744,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23748 = inst_23723;
var state_23821__$1 = (function (){var statearr_23872 = state_23821;
(statearr_23872[(16)] = inst_23747);

(statearr_23872[(17)] = inst_23745);

(statearr_23872[(7)] = inst_23748);

(statearr_23872[(18)] = inst_23746);

return statearr_23872;
})();
var statearr_23873_23924 = state_23821__$1;
(statearr_23873_23924[(2)] = null);

(statearr_23873_23924[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (18))){
var inst_23763 = (state_23821[(2)]);
var state_23821__$1 = state_23821;
var statearr_23874_23925 = state_23821__$1;
(statearr_23874_23925[(2)] = inst_23763);

(statearr_23874_23925[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (37))){
var state_23821__$1 = state_23821;
var statearr_23875_23926 = state_23821__$1;
(statearr_23875_23926[(2)] = null);

(statearr_23875_23926[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23822 === (8))){
var inst_23723 = (state_23821[(8)]);
var inst_23741 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23723);
var state_23821__$1 = state_23821;
var statearr_23876_23927 = state_23821__$1;
(statearr_23876_23927[(2)] = inst_23741);

(statearr_23876_23927[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__22733__auto__ = null;
var cljs$core$async$mix_$_state_machine__22733__auto____0 = (function (){
var statearr_23877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23877[(0)] = cljs$core$async$mix_$_state_machine__22733__auto__);

(statearr_23877[(1)] = (1));

return statearr_23877;
});
var cljs$core$async$mix_$_state_machine__22733__auto____1 = (function (state_23821){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_23821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e23878){if((e23878 instanceof Object)){
var ex__22736__auto__ = e23878;
var statearr_23879_23928 = state_23821;
(statearr_23879_23928[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23929 = state_23821;
state_23821 = G__23929;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22733__auto__ = function(state_23821){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22733__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22733__auto____1.call(this,state_23821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22733__auto____0;
cljs$core$async$mix_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22733__auto____1;
return cljs$core$async$mix_$_state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_23880 = f__22828__auto__.call(null);
(statearr_23880[(6)] = c__22827__auto___23881);

return statearr_23880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v,ch);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__23931 = arguments.length;
switch (G__23931) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__23935 = arguments.length;
switch (G__23935) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__23933_SHARP_){
if(cljs.core.truth_(p1__23933_SHARP_.call(null,topic))){
return p1__23933_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23933_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23936 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23936 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23937){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23937 = meta23937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23938,meta23937__$1){
var self__ = this;
var _23938__$1 = this;
return (new cljs.core.async.t_cljs$core$async23936(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23937__$1));
}));

(cljs.core.async.t_cljs$core$async23936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23938){
var self__ = this;
var _23938__$1 = this;
return self__.meta23937;
}));

(cljs.core.async.t_cljs$core$async23936.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23936.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async23936.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23936.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async23936.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async23936.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async23936.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async23936.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23937","meta23937",1211767530,null)], null);
}));

(cljs.core.async.t_cljs$core$async23936.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23936.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23936");

(cljs.core.async.t_cljs$core$async23936.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async23936");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23936.
 */
cljs.core.async.__GT_t_cljs$core$async23936 = (function cljs$core$async$__GT_t_cljs$core$async23936(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23937){
return (new cljs.core.async.t_cljs$core$async23936(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23937));
});

}

return (new cljs.core.async.t_cljs$core$async23936(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22827__auto___24056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_24010){
var state_val_24011 = (state_24010[(1)]);
if((state_val_24011 === (7))){
var inst_24006 = (state_24010[(2)]);
var state_24010__$1 = state_24010;
var statearr_24012_24057 = state_24010__$1;
(statearr_24012_24057[(2)] = inst_24006);

(statearr_24012_24057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (20))){
var state_24010__$1 = state_24010;
var statearr_24013_24058 = state_24010__$1;
(statearr_24013_24058[(2)] = null);

(statearr_24013_24058[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (1))){
var state_24010__$1 = state_24010;
var statearr_24014_24059 = state_24010__$1;
(statearr_24014_24059[(2)] = null);

(statearr_24014_24059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (24))){
var inst_23989 = (state_24010[(7)]);
var inst_23998 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23989);
var state_24010__$1 = state_24010;
var statearr_24015_24060 = state_24010__$1;
(statearr_24015_24060[(2)] = inst_23998);

(statearr_24015_24060[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (4))){
var inst_23941 = (state_24010[(8)]);
var inst_23941__$1 = (state_24010[(2)]);
var inst_23942 = (inst_23941__$1 == null);
var state_24010__$1 = (function (){var statearr_24016 = state_24010;
(statearr_24016[(8)] = inst_23941__$1);

return statearr_24016;
})();
if(cljs.core.truth_(inst_23942)){
var statearr_24017_24061 = state_24010__$1;
(statearr_24017_24061[(1)] = (5));

} else {
var statearr_24018_24062 = state_24010__$1;
(statearr_24018_24062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (15))){
var inst_23983 = (state_24010[(2)]);
var state_24010__$1 = state_24010;
var statearr_24019_24063 = state_24010__$1;
(statearr_24019_24063[(2)] = inst_23983);

(statearr_24019_24063[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (21))){
var inst_24003 = (state_24010[(2)]);
var state_24010__$1 = (function (){var statearr_24020 = state_24010;
(statearr_24020[(9)] = inst_24003);

return statearr_24020;
})();
var statearr_24021_24064 = state_24010__$1;
(statearr_24021_24064[(2)] = null);

(statearr_24021_24064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (13))){
var inst_23965 = (state_24010[(10)]);
var inst_23967 = cljs.core.chunked_seq_QMARK_.call(null,inst_23965);
var state_24010__$1 = state_24010;
if(inst_23967){
var statearr_24022_24065 = state_24010__$1;
(statearr_24022_24065[(1)] = (16));

} else {
var statearr_24023_24066 = state_24010__$1;
(statearr_24023_24066[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (22))){
var inst_23995 = (state_24010[(2)]);
var state_24010__$1 = state_24010;
if(cljs.core.truth_(inst_23995)){
var statearr_24024_24067 = state_24010__$1;
(statearr_24024_24067[(1)] = (23));

} else {
var statearr_24025_24068 = state_24010__$1;
(statearr_24025_24068[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (6))){
var inst_23941 = (state_24010[(8)]);
var inst_23991 = (state_24010[(11)]);
var inst_23989 = (state_24010[(7)]);
var inst_23989__$1 = topic_fn.call(null,inst_23941);
var inst_23990 = cljs.core.deref.call(null,mults);
var inst_23991__$1 = cljs.core.get.call(null,inst_23990,inst_23989__$1);
var state_24010__$1 = (function (){var statearr_24026 = state_24010;
(statearr_24026[(11)] = inst_23991__$1);

(statearr_24026[(7)] = inst_23989__$1);

return statearr_24026;
})();
if(cljs.core.truth_(inst_23991__$1)){
var statearr_24027_24069 = state_24010__$1;
(statearr_24027_24069[(1)] = (19));

} else {
var statearr_24028_24070 = state_24010__$1;
(statearr_24028_24070[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (25))){
var inst_24000 = (state_24010[(2)]);
var state_24010__$1 = state_24010;
var statearr_24029_24071 = state_24010__$1;
(statearr_24029_24071[(2)] = inst_24000);

(statearr_24029_24071[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (17))){
var inst_23965 = (state_24010[(10)]);
var inst_23974 = cljs.core.first.call(null,inst_23965);
var inst_23975 = cljs.core.async.muxch_STAR_.call(null,inst_23974);
var inst_23976 = cljs.core.async.close_BANG_.call(null,inst_23975);
var inst_23977 = cljs.core.next.call(null,inst_23965);
var inst_23951 = inst_23977;
var inst_23952 = null;
var inst_23953 = (0);
var inst_23954 = (0);
var state_24010__$1 = (function (){var statearr_24030 = state_24010;
(statearr_24030[(12)] = inst_23954);

(statearr_24030[(13)] = inst_23953);

(statearr_24030[(14)] = inst_23976);

(statearr_24030[(15)] = inst_23952);

(statearr_24030[(16)] = inst_23951);

return statearr_24030;
})();
var statearr_24031_24072 = state_24010__$1;
(statearr_24031_24072[(2)] = null);

(statearr_24031_24072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (3))){
var inst_24008 = (state_24010[(2)]);
var state_24010__$1 = state_24010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24010__$1,inst_24008);
} else {
if((state_val_24011 === (12))){
var inst_23985 = (state_24010[(2)]);
var state_24010__$1 = state_24010;
var statearr_24032_24073 = state_24010__$1;
(statearr_24032_24073[(2)] = inst_23985);

(statearr_24032_24073[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (2))){
var state_24010__$1 = state_24010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24010__$1,(4),ch);
} else {
if((state_val_24011 === (23))){
var state_24010__$1 = state_24010;
var statearr_24033_24074 = state_24010__$1;
(statearr_24033_24074[(2)] = null);

(statearr_24033_24074[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (19))){
var inst_23941 = (state_24010[(8)]);
var inst_23991 = (state_24010[(11)]);
var inst_23993 = cljs.core.async.muxch_STAR_.call(null,inst_23991);
var state_24010__$1 = state_24010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24010__$1,(22),inst_23993,inst_23941);
} else {
if((state_val_24011 === (11))){
var inst_23965 = (state_24010[(10)]);
var inst_23951 = (state_24010[(16)]);
var inst_23965__$1 = cljs.core.seq.call(null,inst_23951);
var state_24010__$1 = (function (){var statearr_24034 = state_24010;
(statearr_24034[(10)] = inst_23965__$1);

return statearr_24034;
})();
if(inst_23965__$1){
var statearr_24035_24075 = state_24010__$1;
(statearr_24035_24075[(1)] = (13));

} else {
var statearr_24036_24076 = state_24010__$1;
(statearr_24036_24076[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (9))){
var inst_23987 = (state_24010[(2)]);
var state_24010__$1 = state_24010;
var statearr_24037_24077 = state_24010__$1;
(statearr_24037_24077[(2)] = inst_23987);

(statearr_24037_24077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (5))){
var inst_23948 = cljs.core.deref.call(null,mults);
var inst_23949 = cljs.core.vals.call(null,inst_23948);
var inst_23950 = cljs.core.seq.call(null,inst_23949);
var inst_23951 = inst_23950;
var inst_23952 = null;
var inst_23953 = (0);
var inst_23954 = (0);
var state_24010__$1 = (function (){var statearr_24038 = state_24010;
(statearr_24038[(12)] = inst_23954);

(statearr_24038[(13)] = inst_23953);

(statearr_24038[(15)] = inst_23952);

(statearr_24038[(16)] = inst_23951);

return statearr_24038;
})();
var statearr_24039_24078 = state_24010__$1;
(statearr_24039_24078[(2)] = null);

(statearr_24039_24078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (14))){
var state_24010__$1 = state_24010;
var statearr_24043_24079 = state_24010__$1;
(statearr_24043_24079[(2)] = null);

(statearr_24043_24079[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (16))){
var inst_23965 = (state_24010[(10)]);
var inst_23969 = cljs.core.chunk_first.call(null,inst_23965);
var inst_23970 = cljs.core.chunk_rest.call(null,inst_23965);
var inst_23971 = cljs.core.count.call(null,inst_23969);
var inst_23951 = inst_23970;
var inst_23952 = inst_23969;
var inst_23953 = inst_23971;
var inst_23954 = (0);
var state_24010__$1 = (function (){var statearr_24044 = state_24010;
(statearr_24044[(12)] = inst_23954);

(statearr_24044[(13)] = inst_23953);

(statearr_24044[(15)] = inst_23952);

(statearr_24044[(16)] = inst_23951);

return statearr_24044;
})();
var statearr_24045_24080 = state_24010__$1;
(statearr_24045_24080[(2)] = null);

(statearr_24045_24080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (10))){
var inst_23954 = (state_24010[(12)]);
var inst_23953 = (state_24010[(13)]);
var inst_23952 = (state_24010[(15)]);
var inst_23951 = (state_24010[(16)]);
var inst_23959 = cljs.core._nth.call(null,inst_23952,inst_23954);
var inst_23960 = cljs.core.async.muxch_STAR_.call(null,inst_23959);
var inst_23961 = cljs.core.async.close_BANG_.call(null,inst_23960);
var inst_23962 = (inst_23954 + (1));
var tmp24040 = inst_23953;
var tmp24041 = inst_23952;
var tmp24042 = inst_23951;
var inst_23951__$1 = tmp24042;
var inst_23952__$1 = tmp24041;
var inst_23953__$1 = tmp24040;
var inst_23954__$1 = inst_23962;
var state_24010__$1 = (function (){var statearr_24046 = state_24010;
(statearr_24046[(12)] = inst_23954__$1);

(statearr_24046[(13)] = inst_23953__$1);

(statearr_24046[(17)] = inst_23961);

(statearr_24046[(15)] = inst_23952__$1);

(statearr_24046[(16)] = inst_23951__$1);

return statearr_24046;
})();
var statearr_24047_24081 = state_24010__$1;
(statearr_24047_24081[(2)] = null);

(statearr_24047_24081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (18))){
var inst_23980 = (state_24010[(2)]);
var state_24010__$1 = state_24010;
var statearr_24048_24082 = state_24010__$1;
(statearr_24048_24082[(2)] = inst_23980);

(statearr_24048_24082[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (8))){
var inst_23954 = (state_24010[(12)]);
var inst_23953 = (state_24010[(13)]);
var inst_23956 = (inst_23954 < inst_23953);
var inst_23957 = inst_23956;
var state_24010__$1 = state_24010;
if(cljs.core.truth_(inst_23957)){
var statearr_24049_24083 = state_24010__$1;
(statearr_24049_24083[(1)] = (10));

} else {
var statearr_24050_24084 = state_24010__$1;
(statearr_24050_24084[(1)] = (11));

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
var cljs$core$async$state_machine__22733__auto__ = null;
var cljs$core$async$state_machine__22733__auto____0 = (function (){
var statearr_24051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24051[(0)] = cljs$core$async$state_machine__22733__auto__);

(statearr_24051[(1)] = (1));

return statearr_24051;
});
var cljs$core$async$state_machine__22733__auto____1 = (function (state_24010){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_24010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e24052){if((e24052 instanceof Object)){
var ex__22736__auto__ = e24052;
var statearr_24053_24085 = state_24010;
(statearr_24053_24085[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24086 = state_24010;
state_24010 = G__24086;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
cljs$core$async$state_machine__22733__auto__ = function(state_24010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22733__auto____1.call(this,state_24010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22733__auto____0;
cljs$core$async$state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22733__auto____1;
return cljs$core$async$state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_24054 = f__22828__auto__.call(null);
(statearr_24054[(6)] = c__22827__auto___24056);

return statearr_24054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__24088 = arguments.length;
switch (G__24088) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__24091 = arguments.length;
switch (G__24091) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__24094 = arguments.length;
switch (G__24094) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__22827__auto___24161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_24133){
var state_val_24134 = (state_24133[(1)]);
if((state_val_24134 === (7))){
var state_24133__$1 = state_24133;
var statearr_24135_24162 = state_24133__$1;
(statearr_24135_24162[(2)] = null);

(statearr_24135_24162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24134 === (1))){
var state_24133__$1 = state_24133;
var statearr_24136_24163 = state_24133__$1;
(statearr_24136_24163[(2)] = null);

(statearr_24136_24163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24134 === (4))){
var inst_24097 = (state_24133[(7)]);
var inst_24099 = (inst_24097 < cnt);
var state_24133__$1 = state_24133;
if(cljs.core.truth_(inst_24099)){
var statearr_24137_24164 = state_24133__$1;
(statearr_24137_24164[(1)] = (6));

} else {
var statearr_24138_24165 = state_24133__$1;
(statearr_24138_24165[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24134 === (15))){
var inst_24129 = (state_24133[(2)]);
var state_24133__$1 = state_24133;
var statearr_24139_24166 = state_24133__$1;
(statearr_24139_24166[(2)] = inst_24129);

(statearr_24139_24166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24134 === (13))){
var inst_24122 = cljs.core.async.close_BANG_.call(null,out);
var state_24133__$1 = state_24133;
var statearr_24140_24167 = state_24133__$1;
(statearr_24140_24167[(2)] = inst_24122);

(statearr_24140_24167[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24134 === (6))){
var state_24133__$1 = state_24133;
var statearr_24141_24168 = state_24133__$1;
(statearr_24141_24168[(2)] = null);

(statearr_24141_24168[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24134 === (3))){
var inst_24131 = (state_24133[(2)]);
var state_24133__$1 = state_24133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24133__$1,inst_24131);
} else {
if((state_val_24134 === (12))){
var inst_24119 = (state_24133[(8)]);
var inst_24119__$1 = (state_24133[(2)]);
var inst_24120 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24119__$1);
var state_24133__$1 = (function (){var statearr_24142 = state_24133;
(statearr_24142[(8)] = inst_24119__$1);

return statearr_24142;
})();
if(cljs.core.truth_(inst_24120)){
var statearr_24143_24169 = state_24133__$1;
(statearr_24143_24169[(1)] = (13));

} else {
var statearr_24144_24170 = state_24133__$1;
(statearr_24144_24170[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24134 === (2))){
var inst_24096 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24097 = (0);
var state_24133__$1 = (function (){var statearr_24145 = state_24133;
(statearr_24145[(9)] = inst_24096);

(statearr_24145[(7)] = inst_24097);

return statearr_24145;
})();
var statearr_24146_24171 = state_24133__$1;
(statearr_24146_24171[(2)] = null);

(statearr_24146_24171[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24134 === (11))){
var inst_24097 = (state_24133[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24133,(10),Object,null,(9));
var inst_24106 = chs__$1.call(null,inst_24097);
var inst_24107 = done.call(null,inst_24097);
var inst_24108 = cljs.core.async.take_BANG_.call(null,inst_24106,inst_24107);
var state_24133__$1 = state_24133;
var statearr_24147_24172 = state_24133__$1;
(statearr_24147_24172[(2)] = inst_24108);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24133__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24134 === (9))){
var inst_24097 = (state_24133[(7)]);
var inst_24110 = (state_24133[(2)]);
var inst_24111 = (inst_24097 + (1));
var inst_24097__$1 = inst_24111;
var state_24133__$1 = (function (){var statearr_24148 = state_24133;
(statearr_24148[(10)] = inst_24110);

(statearr_24148[(7)] = inst_24097__$1);

return statearr_24148;
})();
var statearr_24149_24173 = state_24133__$1;
(statearr_24149_24173[(2)] = null);

(statearr_24149_24173[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24134 === (5))){
var inst_24117 = (state_24133[(2)]);
var state_24133__$1 = (function (){var statearr_24150 = state_24133;
(statearr_24150[(11)] = inst_24117);

return statearr_24150;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24133__$1,(12),dchan);
} else {
if((state_val_24134 === (14))){
var inst_24119 = (state_24133[(8)]);
var inst_24124 = cljs.core.apply.call(null,f,inst_24119);
var state_24133__$1 = state_24133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24133__$1,(16),out,inst_24124);
} else {
if((state_val_24134 === (16))){
var inst_24126 = (state_24133[(2)]);
var state_24133__$1 = (function (){var statearr_24151 = state_24133;
(statearr_24151[(12)] = inst_24126);

return statearr_24151;
})();
var statearr_24152_24174 = state_24133__$1;
(statearr_24152_24174[(2)] = null);

(statearr_24152_24174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24134 === (10))){
var inst_24101 = (state_24133[(2)]);
var inst_24102 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24133__$1 = (function (){var statearr_24153 = state_24133;
(statearr_24153[(13)] = inst_24101);

return statearr_24153;
})();
var statearr_24154_24175 = state_24133__$1;
(statearr_24154_24175[(2)] = inst_24102);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24133__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24134 === (8))){
var inst_24115 = (state_24133[(2)]);
var state_24133__$1 = state_24133;
var statearr_24155_24176 = state_24133__$1;
(statearr_24155_24176[(2)] = inst_24115);

(statearr_24155_24176[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__22733__auto__ = null;
var cljs$core$async$state_machine__22733__auto____0 = (function (){
var statearr_24156 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24156[(0)] = cljs$core$async$state_machine__22733__auto__);

(statearr_24156[(1)] = (1));

return statearr_24156;
});
var cljs$core$async$state_machine__22733__auto____1 = (function (state_24133){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_24133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e24157){if((e24157 instanceof Object)){
var ex__22736__auto__ = e24157;
var statearr_24158_24177 = state_24133;
(statearr_24158_24177[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24178 = state_24133;
state_24133 = G__24178;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
cljs$core$async$state_machine__22733__auto__ = function(state_24133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22733__auto____1.call(this,state_24133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22733__auto____0;
cljs$core$async$state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22733__auto____1;
return cljs$core$async$state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_24159 = f__22828__auto__.call(null);
(statearr_24159[(6)] = c__22827__auto___24161);

return statearr_24159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__24181 = arguments.length;
switch (G__24181) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22827__auto___24235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_24213){
var state_val_24214 = (state_24213[(1)]);
if((state_val_24214 === (7))){
var inst_24192 = (state_24213[(7)]);
var inst_24193 = (state_24213[(8)]);
var inst_24192__$1 = (state_24213[(2)]);
var inst_24193__$1 = cljs.core.nth.call(null,inst_24192__$1,(0),null);
var inst_24194 = cljs.core.nth.call(null,inst_24192__$1,(1),null);
var inst_24195 = (inst_24193__$1 == null);
var state_24213__$1 = (function (){var statearr_24215 = state_24213;
(statearr_24215[(9)] = inst_24194);

(statearr_24215[(7)] = inst_24192__$1);

(statearr_24215[(8)] = inst_24193__$1);

return statearr_24215;
})();
if(cljs.core.truth_(inst_24195)){
var statearr_24216_24236 = state_24213__$1;
(statearr_24216_24236[(1)] = (8));

} else {
var statearr_24217_24237 = state_24213__$1;
(statearr_24217_24237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24214 === (1))){
var inst_24182 = cljs.core.vec.call(null,chs);
var inst_24183 = inst_24182;
var state_24213__$1 = (function (){var statearr_24218 = state_24213;
(statearr_24218[(10)] = inst_24183);

return statearr_24218;
})();
var statearr_24219_24238 = state_24213__$1;
(statearr_24219_24238[(2)] = null);

(statearr_24219_24238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24214 === (4))){
var inst_24183 = (state_24213[(10)]);
var state_24213__$1 = state_24213;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24213__$1,(7),inst_24183);
} else {
if((state_val_24214 === (6))){
var inst_24209 = (state_24213[(2)]);
var state_24213__$1 = state_24213;
var statearr_24220_24239 = state_24213__$1;
(statearr_24220_24239[(2)] = inst_24209);

(statearr_24220_24239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24214 === (3))){
var inst_24211 = (state_24213[(2)]);
var state_24213__$1 = state_24213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24213__$1,inst_24211);
} else {
if((state_val_24214 === (2))){
var inst_24183 = (state_24213[(10)]);
var inst_24185 = cljs.core.count.call(null,inst_24183);
var inst_24186 = (inst_24185 > (0));
var state_24213__$1 = state_24213;
if(cljs.core.truth_(inst_24186)){
var statearr_24222_24240 = state_24213__$1;
(statearr_24222_24240[(1)] = (4));

} else {
var statearr_24223_24241 = state_24213__$1;
(statearr_24223_24241[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24214 === (11))){
var inst_24183 = (state_24213[(10)]);
var inst_24202 = (state_24213[(2)]);
var tmp24221 = inst_24183;
var inst_24183__$1 = tmp24221;
var state_24213__$1 = (function (){var statearr_24224 = state_24213;
(statearr_24224[(10)] = inst_24183__$1);

(statearr_24224[(11)] = inst_24202);

return statearr_24224;
})();
var statearr_24225_24242 = state_24213__$1;
(statearr_24225_24242[(2)] = null);

(statearr_24225_24242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24214 === (9))){
var inst_24193 = (state_24213[(8)]);
var state_24213__$1 = state_24213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24213__$1,(11),out,inst_24193);
} else {
if((state_val_24214 === (5))){
var inst_24207 = cljs.core.async.close_BANG_.call(null,out);
var state_24213__$1 = state_24213;
var statearr_24226_24243 = state_24213__$1;
(statearr_24226_24243[(2)] = inst_24207);

(statearr_24226_24243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24214 === (10))){
var inst_24205 = (state_24213[(2)]);
var state_24213__$1 = state_24213;
var statearr_24227_24244 = state_24213__$1;
(statearr_24227_24244[(2)] = inst_24205);

(statearr_24227_24244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24214 === (8))){
var inst_24183 = (state_24213[(10)]);
var inst_24194 = (state_24213[(9)]);
var inst_24192 = (state_24213[(7)]);
var inst_24193 = (state_24213[(8)]);
var inst_24197 = (function (){var cs = inst_24183;
var vec__24188 = inst_24192;
var v = inst_24193;
var c = inst_24194;
return (function (p1__24179_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24179_SHARP_);
});
})();
var inst_24198 = cljs.core.filterv.call(null,inst_24197,inst_24183);
var inst_24183__$1 = inst_24198;
var state_24213__$1 = (function (){var statearr_24228 = state_24213;
(statearr_24228[(10)] = inst_24183__$1);

return statearr_24228;
})();
var statearr_24229_24245 = state_24213__$1;
(statearr_24229_24245[(2)] = null);

(statearr_24229_24245[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__22733__auto__ = null;
var cljs$core$async$state_machine__22733__auto____0 = (function (){
var statearr_24230 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24230[(0)] = cljs$core$async$state_machine__22733__auto__);

(statearr_24230[(1)] = (1));

return statearr_24230;
});
var cljs$core$async$state_machine__22733__auto____1 = (function (state_24213){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_24213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e24231){if((e24231 instanceof Object)){
var ex__22736__auto__ = e24231;
var statearr_24232_24246 = state_24213;
(statearr_24232_24246[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24247 = state_24213;
state_24213 = G__24247;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
cljs$core$async$state_machine__22733__auto__ = function(state_24213){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22733__auto____1.call(this,state_24213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22733__auto____0;
cljs$core$async$state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22733__auto____1;
return cljs$core$async$state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_24233 = f__22828__auto__.call(null);
(statearr_24233[(6)] = c__22827__auto___24235);

return statearr_24233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__24249 = arguments.length;
switch (G__24249) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22827__auto___24294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_24273){
var state_val_24274 = (state_24273[(1)]);
if((state_val_24274 === (7))){
var inst_24255 = (state_24273[(7)]);
var inst_24255__$1 = (state_24273[(2)]);
var inst_24256 = (inst_24255__$1 == null);
var inst_24257 = cljs.core.not.call(null,inst_24256);
var state_24273__$1 = (function (){var statearr_24275 = state_24273;
(statearr_24275[(7)] = inst_24255__$1);

return statearr_24275;
})();
if(inst_24257){
var statearr_24276_24295 = state_24273__$1;
(statearr_24276_24295[(1)] = (8));

} else {
var statearr_24277_24296 = state_24273__$1;
(statearr_24277_24296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (1))){
var inst_24250 = (0);
var state_24273__$1 = (function (){var statearr_24278 = state_24273;
(statearr_24278[(8)] = inst_24250);

return statearr_24278;
})();
var statearr_24279_24297 = state_24273__$1;
(statearr_24279_24297[(2)] = null);

(statearr_24279_24297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (4))){
var state_24273__$1 = state_24273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24273__$1,(7),ch);
} else {
if((state_val_24274 === (6))){
var inst_24268 = (state_24273[(2)]);
var state_24273__$1 = state_24273;
var statearr_24280_24298 = state_24273__$1;
(statearr_24280_24298[(2)] = inst_24268);

(statearr_24280_24298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (3))){
var inst_24270 = (state_24273[(2)]);
var inst_24271 = cljs.core.async.close_BANG_.call(null,out);
var state_24273__$1 = (function (){var statearr_24281 = state_24273;
(statearr_24281[(9)] = inst_24270);

return statearr_24281;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24273__$1,inst_24271);
} else {
if((state_val_24274 === (2))){
var inst_24250 = (state_24273[(8)]);
var inst_24252 = (inst_24250 < n);
var state_24273__$1 = state_24273;
if(cljs.core.truth_(inst_24252)){
var statearr_24282_24299 = state_24273__$1;
(statearr_24282_24299[(1)] = (4));

} else {
var statearr_24283_24300 = state_24273__$1;
(statearr_24283_24300[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (11))){
var inst_24250 = (state_24273[(8)]);
var inst_24260 = (state_24273[(2)]);
var inst_24261 = (inst_24250 + (1));
var inst_24250__$1 = inst_24261;
var state_24273__$1 = (function (){var statearr_24284 = state_24273;
(statearr_24284[(10)] = inst_24260);

(statearr_24284[(8)] = inst_24250__$1);

return statearr_24284;
})();
var statearr_24285_24301 = state_24273__$1;
(statearr_24285_24301[(2)] = null);

(statearr_24285_24301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (9))){
var state_24273__$1 = state_24273;
var statearr_24286_24302 = state_24273__$1;
(statearr_24286_24302[(2)] = null);

(statearr_24286_24302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (5))){
var state_24273__$1 = state_24273;
var statearr_24287_24303 = state_24273__$1;
(statearr_24287_24303[(2)] = null);

(statearr_24287_24303[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (10))){
var inst_24265 = (state_24273[(2)]);
var state_24273__$1 = state_24273;
var statearr_24288_24304 = state_24273__$1;
(statearr_24288_24304[(2)] = inst_24265);

(statearr_24288_24304[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24274 === (8))){
var inst_24255 = (state_24273[(7)]);
var state_24273__$1 = state_24273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24273__$1,(11),out,inst_24255);
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
});
return (function() {
var cljs$core$async$state_machine__22733__auto__ = null;
var cljs$core$async$state_machine__22733__auto____0 = (function (){
var statearr_24289 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24289[(0)] = cljs$core$async$state_machine__22733__auto__);

(statearr_24289[(1)] = (1));

return statearr_24289;
});
var cljs$core$async$state_machine__22733__auto____1 = (function (state_24273){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_24273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e24290){if((e24290 instanceof Object)){
var ex__22736__auto__ = e24290;
var statearr_24291_24305 = state_24273;
(statearr_24291_24305[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24306 = state_24273;
state_24273 = G__24306;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
cljs$core$async$state_machine__22733__auto__ = function(state_24273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22733__auto____1.call(this,state_24273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22733__auto____0;
cljs$core$async$state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22733__auto____1;
return cljs$core$async$state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_24292 = f__22828__auto__.call(null);
(statearr_24292[(6)] = c__22827__auto___24294);

return statearr_24292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24308 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24308 = (function (f,ch,meta24309){
this.f = f;
this.ch = ch;
this.meta24309 = meta24309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24310,meta24309__$1){
var self__ = this;
var _24310__$1 = this;
return (new cljs.core.async.t_cljs$core$async24308(self__.f,self__.ch,meta24309__$1));
}));

(cljs.core.async.t_cljs$core$async24308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24310){
var self__ = this;
var _24310__$1 = this;
return self__.meta24309;
}));

(cljs.core.async.t_cljs$core$async24308.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24308.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24308.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24308.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24308.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24311 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24311 = (function (f,ch,meta24309,_,fn1,meta24312){
this.f = f;
this.ch = ch;
this.meta24309 = meta24309;
this._ = _;
this.fn1 = fn1;
this.meta24312 = meta24312;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24313,meta24312__$1){
var self__ = this;
var _24313__$1 = this;
return (new cljs.core.async.t_cljs$core$async24311(self__.f,self__.ch,self__.meta24309,self__._,self__.fn1,meta24312__$1));
}));

(cljs.core.async.t_cljs$core$async24311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24313){
var self__ = this;
var _24313__$1 = this;
return self__.meta24312;
}));

(cljs.core.async.t_cljs$core$async24311.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24311.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async24311.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async24311.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__24307_SHARP_){
return f1.call(null,(((p1__24307_SHARP_ == null))?null:self__.f.call(null,p1__24307_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async24311.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24309","meta24309",469365387,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24308","cljs.core.async/t_cljs$core$async24308",-865634338,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24312","meta24312",-1651300204,null)], null);
}));

(cljs.core.async.t_cljs$core$async24311.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24311.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24311");

(cljs.core.async.t_cljs$core$async24311.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async24311");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24311.
 */
cljs.core.async.__GT_t_cljs$core$async24311 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24311(f__$1,ch__$1,meta24309__$1,___$2,fn1__$1,meta24312){
return (new cljs.core.async.t_cljs$core$async24311(f__$1,ch__$1,meta24309__$1,___$2,fn1__$1,meta24312));
});

}

return (new cljs.core.async.t_cljs$core$async24311(self__.f,self__.ch,self__.meta24309,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async24308.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24308.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async24308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24309","meta24309",469365387,null)], null);
}));

(cljs.core.async.t_cljs$core$async24308.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24308");

(cljs.core.async.t_cljs$core$async24308.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async24308");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24308.
 */
cljs.core.async.__GT_t_cljs$core$async24308 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24308(f__$1,ch__$1,meta24309){
return (new cljs.core.async.t_cljs$core$async24308(f__$1,ch__$1,meta24309));
});

}

return (new cljs.core.async.t_cljs$core$async24308(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24314 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24314 = (function (f,ch,meta24315){
this.f = f;
this.ch = ch;
this.meta24315 = meta24315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24316,meta24315__$1){
var self__ = this;
var _24316__$1 = this;
return (new cljs.core.async.t_cljs$core$async24314(self__.f,self__.ch,meta24315__$1));
}));

(cljs.core.async.t_cljs$core$async24314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24316){
var self__ = this;
var _24316__$1 = this;
return self__.meta24315;
}));

(cljs.core.async.t_cljs$core$async24314.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24314.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24314.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24314.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async24314.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24314.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async24314.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24315","meta24315",-1802652450,null)], null);
}));

(cljs.core.async.t_cljs$core$async24314.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24314.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24314");

(cljs.core.async.t_cljs$core$async24314.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async24314");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24314.
 */
cljs.core.async.__GT_t_cljs$core$async24314 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24314(f__$1,ch__$1,meta24315){
return (new cljs.core.async.t_cljs$core$async24314(f__$1,ch__$1,meta24315));
});

}

return (new cljs.core.async.t_cljs$core$async24314(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24317 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24317 = (function (p,ch,meta24318){
this.p = p;
this.ch = ch;
this.meta24318 = meta24318;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async24317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24319,meta24318__$1){
var self__ = this;
var _24319__$1 = this;
return (new cljs.core.async.t_cljs$core$async24317(self__.p,self__.ch,meta24318__$1));
}));

(cljs.core.async.t_cljs$core$async24317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24319){
var self__ = this;
var _24319__$1 = this;
return self__.meta24318;
}));

(cljs.core.async.t_cljs$core$async24317.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24317.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24317.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async24317.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24317.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async24317.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async24317.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async24317.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24318","meta24318",-693310773,null)], null);
}));

(cljs.core.async.t_cljs$core$async24317.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async24317.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24317");

(cljs.core.async.t_cljs$core$async24317.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async24317");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24317.
 */
cljs.core.async.__GT_t_cljs$core$async24317 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24317(p__$1,ch__$1,meta24318){
return (new cljs.core.async.t_cljs$core$async24317(p__$1,ch__$1,meta24318));
});

}

return (new cljs.core.async.t_cljs$core$async24317(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__24321 = arguments.length;
switch (G__24321) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22827__auto___24361 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_24342){
var state_val_24343 = (state_24342[(1)]);
if((state_val_24343 === (7))){
var inst_24338 = (state_24342[(2)]);
var state_24342__$1 = state_24342;
var statearr_24344_24362 = state_24342__$1;
(statearr_24344_24362[(2)] = inst_24338);

(statearr_24344_24362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (1))){
var state_24342__$1 = state_24342;
var statearr_24345_24363 = state_24342__$1;
(statearr_24345_24363[(2)] = null);

(statearr_24345_24363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (4))){
var inst_24324 = (state_24342[(7)]);
var inst_24324__$1 = (state_24342[(2)]);
var inst_24325 = (inst_24324__$1 == null);
var state_24342__$1 = (function (){var statearr_24346 = state_24342;
(statearr_24346[(7)] = inst_24324__$1);

return statearr_24346;
})();
if(cljs.core.truth_(inst_24325)){
var statearr_24347_24364 = state_24342__$1;
(statearr_24347_24364[(1)] = (5));

} else {
var statearr_24348_24365 = state_24342__$1;
(statearr_24348_24365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (6))){
var inst_24324 = (state_24342[(7)]);
var inst_24329 = p.call(null,inst_24324);
var state_24342__$1 = state_24342;
if(cljs.core.truth_(inst_24329)){
var statearr_24349_24366 = state_24342__$1;
(statearr_24349_24366[(1)] = (8));

} else {
var statearr_24350_24367 = state_24342__$1;
(statearr_24350_24367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (3))){
var inst_24340 = (state_24342[(2)]);
var state_24342__$1 = state_24342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24342__$1,inst_24340);
} else {
if((state_val_24343 === (2))){
var state_24342__$1 = state_24342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24342__$1,(4),ch);
} else {
if((state_val_24343 === (11))){
var inst_24332 = (state_24342[(2)]);
var state_24342__$1 = state_24342;
var statearr_24351_24368 = state_24342__$1;
(statearr_24351_24368[(2)] = inst_24332);

(statearr_24351_24368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (9))){
var state_24342__$1 = state_24342;
var statearr_24352_24369 = state_24342__$1;
(statearr_24352_24369[(2)] = null);

(statearr_24352_24369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (5))){
var inst_24327 = cljs.core.async.close_BANG_.call(null,out);
var state_24342__$1 = state_24342;
var statearr_24353_24370 = state_24342__$1;
(statearr_24353_24370[(2)] = inst_24327);

(statearr_24353_24370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (10))){
var inst_24335 = (state_24342[(2)]);
var state_24342__$1 = (function (){var statearr_24354 = state_24342;
(statearr_24354[(8)] = inst_24335);

return statearr_24354;
})();
var statearr_24355_24371 = state_24342__$1;
(statearr_24355_24371[(2)] = null);

(statearr_24355_24371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (8))){
var inst_24324 = (state_24342[(7)]);
var state_24342__$1 = state_24342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24342__$1,(11),out,inst_24324);
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
});
return (function() {
var cljs$core$async$state_machine__22733__auto__ = null;
var cljs$core$async$state_machine__22733__auto____0 = (function (){
var statearr_24356 = [null,null,null,null,null,null,null,null,null];
(statearr_24356[(0)] = cljs$core$async$state_machine__22733__auto__);

(statearr_24356[(1)] = (1));

return statearr_24356;
});
var cljs$core$async$state_machine__22733__auto____1 = (function (state_24342){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_24342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e24357){if((e24357 instanceof Object)){
var ex__22736__auto__ = e24357;
var statearr_24358_24372 = state_24342;
(statearr_24358_24372[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24373 = state_24342;
state_24342 = G__24373;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
cljs$core$async$state_machine__22733__auto__ = function(state_24342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22733__auto____1.call(this,state_24342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22733__auto____0;
cljs$core$async$state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22733__auto____1;
return cljs$core$async$state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_24359 = f__22828__auto__.call(null);
(statearr_24359[(6)] = c__22827__auto___24361);

return statearr_24359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__24375 = arguments.length;
switch (G__24375) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22827__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_24438){
var state_val_24439 = (state_24438[(1)]);
if((state_val_24439 === (7))){
var inst_24434 = (state_24438[(2)]);
var state_24438__$1 = state_24438;
var statearr_24440_24478 = state_24438__$1;
(statearr_24440_24478[(2)] = inst_24434);

(statearr_24440_24478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (20))){
var inst_24404 = (state_24438[(7)]);
var inst_24415 = (state_24438[(2)]);
var inst_24416 = cljs.core.next.call(null,inst_24404);
var inst_24390 = inst_24416;
var inst_24391 = null;
var inst_24392 = (0);
var inst_24393 = (0);
var state_24438__$1 = (function (){var statearr_24441 = state_24438;
(statearr_24441[(8)] = inst_24392);

(statearr_24441[(9)] = inst_24415);

(statearr_24441[(10)] = inst_24393);

(statearr_24441[(11)] = inst_24391);

(statearr_24441[(12)] = inst_24390);

return statearr_24441;
})();
var statearr_24442_24479 = state_24438__$1;
(statearr_24442_24479[(2)] = null);

(statearr_24442_24479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (1))){
var state_24438__$1 = state_24438;
var statearr_24443_24480 = state_24438__$1;
(statearr_24443_24480[(2)] = null);

(statearr_24443_24480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (4))){
var inst_24379 = (state_24438[(13)]);
var inst_24379__$1 = (state_24438[(2)]);
var inst_24380 = (inst_24379__$1 == null);
var state_24438__$1 = (function (){var statearr_24444 = state_24438;
(statearr_24444[(13)] = inst_24379__$1);

return statearr_24444;
})();
if(cljs.core.truth_(inst_24380)){
var statearr_24445_24481 = state_24438__$1;
(statearr_24445_24481[(1)] = (5));

} else {
var statearr_24446_24482 = state_24438__$1;
(statearr_24446_24482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (15))){
var state_24438__$1 = state_24438;
var statearr_24450_24483 = state_24438__$1;
(statearr_24450_24483[(2)] = null);

(statearr_24450_24483[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (21))){
var state_24438__$1 = state_24438;
var statearr_24451_24484 = state_24438__$1;
(statearr_24451_24484[(2)] = null);

(statearr_24451_24484[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (13))){
var inst_24392 = (state_24438[(8)]);
var inst_24393 = (state_24438[(10)]);
var inst_24391 = (state_24438[(11)]);
var inst_24390 = (state_24438[(12)]);
var inst_24400 = (state_24438[(2)]);
var inst_24401 = (inst_24393 + (1));
var tmp24447 = inst_24392;
var tmp24448 = inst_24391;
var tmp24449 = inst_24390;
var inst_24390__$1 = tmp24449;
var inst_24391__$1 = tmp24448;
var inst_24392__$1 = tmp24447;
var inst_24393__$1 = inst_24401;
var state_24438__$1 = (function (){var statearr_24452 = state_24438;
(statearr_24452[(8)] = inst_24392__$1);

(statearr_24452[(10)] = inst_24393__$1);

(statearr_24452[(14)] = inst_24400);

(statearr_24452[(11)] = inst_24391__$1);

(statearr_24452[(12)] = inst_24390__$1);

return statearr_24452;
})();
var statearr_24453_24485 = state_24438__$1;
(statearr_24453_24485[(2)] = null);

(statearr_24453_24485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (22))){
var state_24438__$1 = state_24438;
var statearr_24454_24486 = state_24438__$1;
(statearr_24454_24486[(2)] = null);

(statearr_24454_24486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (6))){
var inst_24379 = (state_24438[(13)]);
var inst_24388 = f.call(null,inst_24379);
var inst_24389 = cljs.core.seq.call(null,inst_24388);
var inst_24390 = inst_24389;
var inst_24391 = null;
var inst_24392 = (0);
var inst_24393 = (0);
var state_24438__$1 = (function (){var statearr_24455 = state_24438;
(statearr_24455[(8)] = inst_24392);

(statearr_24455[(10)] = inst_24393);

(statearr_24455[(11)] = inst_24391);

(statearr_24455[(12)] = inst_24390);

return statearr_24455;
})();
var statearr_24456_24487 = state_24438__$1;
(statearr_24456_24487[(2)] = null);

(statearr_24456_24487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (17))){
var inst_24404 = (state_24438[(7)]);
var inst_24408 = cljs.core.chunk_first.call(null,inst_24404);
var inst_24409 = cljs.core.chunk_rest.call(null,inst_24404);
var inst_24410 = cljs.core.count.call(null,inst_24408);
var inst_24390 = inst_24409;
var inst_24391 = inst_24408;
var inst_24392 = inst_24410;
var inst_24393 = (0);
var state_24438__$1 = (function (){var statearr_24457 = state_24438;
(statearr_24457[(8)] = inst_24392);

(statearr_24457[(10)] = inst_24393);

(statearr_24457[(11)] = inst_24391);

(statearr_24457[(12)] = inst_24390);

return statearr_24457;
})();
var statearr_24458_24488 = state_24438__$1;
(statearr_24458_24488[(2)] = null);

(statearr_24458_24488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (3))){
var inst_24436 = (state_24438[(2)]);
var state_24438__$1 = state_24438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24438__$1,inst_24436);
} else {
if((state_val_24439 === (12))){
var inst_24424 = (state_24438[(2)]);
var state_24438__$1 = state_24438;
var statearr_24459_24489 = state_24438__$1;
(statearr_24459_24489[(2)] = inst_24424);

(statearr_24459_24489[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (2))){
var state_24438__$1 = state_24438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24438__$1,(4),in$);
} else {
if((state_val_24439 === (23))){
var inst_24432 = (state_24438[(2)]);
var state_24438__$1 = state_24438;
var statearr_24460_24490 = state_24438__$1;
(statearr_24460_24490[(2)] = inst_24432);

(statearr_24460_24490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (19))){
var inst_24419 = (state_24438[(2)]);
var state_24438__$1 = state_24438;
var statearr_24461_24491 = state_24438__$1;
(statearr_24461_24491[(2)] = inst_24419);

(statearr_24461_24491[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (11))){
var inst_24390 = (state_24438[(12)]);
var inst_24404 = (state_24438[(7)]);
var inst_24404__$1 = cljs.core.seq.call(null,inst_24390);
var state_24438__$1 = (function (){var statearr_24462 = state_24438;
(statearr_24462[(7)] = inst_24404__$1);

return statearr_24462;
})();
if(inst_24404__$1){
var statearr_24463_24492 = state_24438__$1;
(statearr_24463_24492[(1)] = (14));

} else {
var statearr_24464_24493 = state_24438__$1;
(statearr_24464_24493[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (9))){
var inst_24426 = (state_24438[(2)]);
var inst_24427 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24438__$1 = (function (){var statearr_24465 = state_24438;
(statearr_24465[(15)] = inst_24426);

return statearr_24465;
})();
if(cljs.core.truth_(inst_24427)){
var statearr_24466_24494 = state_24438__$1;
(statearr_24466_24494[(1)] = (21));

} else {
var statearr_24467_24495 = state_24438__$1;
(statearr_24467_24495[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (5))){
var inst_24382 = cljs.core.async.close_BANG_.call(null,out);
var state_24438__$1 = state_24438;
var statearr_24468_24496 = state_24438__$1;
(statearr_24468_24496[(2)] = inst_24382);

(statearr_24468_24496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (14))){
var inst_24404 = (state_24438[(7)]);
var inst_24406 = cljs.core.chunked_seq_QMARK_.call(null,inst_24404);
var state_24438__$1 = state_24438;
if(inst_24406){
var statearr_24469_24497 = state_24438__$1;
(statearr_24469_24497[(1)] = (17));

} else {
var statearr_24470_24498 = state_24438__$1;
(statearr_24470_24498[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (16))){
var inst_24422 = (state_24438[(2)]);
var state_24438__$1 = state_24438;
var statearr_24471_24499 = state_24438__$1;
(statearr_24471_24499[(2)] = inst_24422);

(statearr_24471_24499[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24439 === (10))){
var inst_24393 = (state_24438[(10)]);
var inst_24391 = (state_24438[(11)]);
var inst_24398 = cljs.core._nth.call(null,inst_24391,inst_24393);
var state_24438__$1 = state_24438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24438__$1,(13),out,inst_24398);
} else {
if((state_val_24439 === (18))){
var inst_24404 = (state_24438[(7)]);
var inst_24413 = cljs.core.first.call(null,inst_24404);
var state_24438__$1 = state_24438;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24438__$1,(20),out,inst_24413);
} else {
if((state_val_24439 === (8))){
var inst_24392 = (state_24438[(8)]);
var inst_24393 = (state_24438[(10)]);
var inst_24395 = (inst_24393 < inst_24392);
var inst_24396 = inst_24395;
var state_24438__$1 = state_24438;
if(cljs.core.truth_(inst_24396)){
var statearr_24472_24500 = state_24438__$1;
(statearr_24472_24500[(1)] = (10));

} else {
var statearr_24473_24501 = state_24438__$1;
(statearr_24473_24501[(1)] = (11));

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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22733__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22733__auto____0 = (function (){
var statearr_24474 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24474[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22733__auto__);

(statearr_24474[(1)] = (1));

return statearr_24474;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22733__auto____1 = (function (state_24438){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_24438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e24475){if((e24475 instanceof Object)){
var ex__22736__auto__ = e24475;
var statearr_24476_24502 = state_24438;
(statearr_24476_24502[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24503 = state_24438;
state_24438 = G__24503;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22733__auto__ = function(state_24438){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22733__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22733__auto____1.call(this,state_24438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22733__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22733__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_24477 = f__22828__auto__.call(null);
(statearr_24477[(6)] = c__22827__auto__);

return statearr_24477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));

return c__22827__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__24505 = arguments.length;
switch (G__24505) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__24508 = arguments.length;
switch (G__24508) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__24511 = arguments.length;
switch (G__24511) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22827__auto___24558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_24535){
var state_val_24536 = (state_24535[(1)]);
if((state_val_24536 === (7))){
var inst_24530 = (state_24535[(2)]);
var state_24535__$1 = state_24535;
var statearr_24537_24559 = state_24535__$1;
(statearr_24537_24559[(2)] = inst_24530);

(statearr_24537_24559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24536 === (1))){
var inst_24512 = null;
var state_24535__$1 = (function (){var statearr_24538 = state_24535;
(statearr_24538[(7)] = inst_24512);

return statearr_24538;
})();
var statearr_24539_24560 = state_24535__$1;
(statearr_24539_24560[(2)] = null);

(statearr_24539_24560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24536 === (4))){
var inst_24515 = (state_24535[(8)]);
var inst_24515__$1 = (state_24535[(2)]);
var inst_24516 = (inst_24515__$1 == null);
var inst_24517 = cljs.core.not.call(null,inst_24516);
var state_24535__$1 = (function (){var statearr_24540 = state_24535;
(statearr_24540[(8)] = inst_24515__$1);

return statearr_24540;
})();
if(inst_24517){
var statearr_24541_24561 = state_24535__$1;
(statearr_24541_24561[(1)] = (5));

} else {
var statearr_24542_24562 = state_24535__$1;
(statearr_24542_24562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24536 === (6))){
var state_24535__$1 = state_24535;
var statearr_24543_24563 = state_24535__$1;
(statearr_24543_24563[(2)] = null);

(statearr_24543_24563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24536 === (3))){
var inst_24532 = (state_24535[(2)]);
var inst_24533 = cljs.core.async.close_BANG_.call(null,out);
var state_24535__$1 = (function (){var statearr_24544 = state_24535;
(statearr_24544[(9)] = inst_24532);

return statearr_24544;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24535__$1,inst_24533);
} else {
if((state_val_24536 === (2))){
var state_24535__$1 = state_24535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24535__$1,(4),ch);
} else {
if((state_val_24536 === (11))){
var inst_24515 = (state_24535[(8)]);
var inst_24524 = (state_24535[(2)]);
var inst_24512 = inst_24515;
var state_24535__$1 = (function (){var statearr_24545 = state_24535;
(statearr_24545[(7)] = inst_24512);

(statearr_24545[(10)] = inst_24524);

return statearr_24545;
})();
var statearr_24546_24564 = state_24535__$1;
(statearr_24546_24564[(2)] = null);

(statearr_24546_24564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24536 === (9))){
var inst_24515 = (state_24535[(8)]);
var state_24535__$1 = state_24535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24535__$1,(11),out,inst_24515);
} else {
if((state_val_24536 === (5))){
var inst_24512 = (state_24535[(7)]);
var inst_24515 = (state_24535[(8)]);
var inst_24519 = cljs.core._EQ_.call(null,inst_24515,inst_24512);
var state_24535__$1 = state_24535;
if(inst_24519){
var statearr_24548_24565 = state_24535__$1;
(statearr_24548_24565[(1)] = (8));

} else {
var statearr_24549_24566 = state_24535__$1;
(statearr_24549_24566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24536 === (10))){
var inst_24527 = (state_24535[(2)]);
var state_24535__$1 = state_24535;
var statearr_24550_24567 = state_24535__$1;
(statearr_24550_24567[(2)] = inst_24527);

(statearr_24550_24567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24536 === (8))){
var inst_24512 = (state_24535[(7)]);
var tmp24547 = inst_24512;
var inst_24512__$1 = tmp24547;
var state_24535__$1 = (function (){var statearr_24551 = state_24535;
(statearr_24551[(7)] = inst_24512__$1);

return statearr_24551;
})();
var statearr_24552_24568 = state_24535__$1;
(statearr_24552_24568[(2)] = null);

(statearr_24552_24568[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__22733__auto__ = null;
var cljs$core$async$state_machine__22733__auto____0 = (function (){
var statearr_24553 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24553[(0)] = cljs$core$async$state_machine__22733__auto__);

(statearr_24553[(1)] = (1));

return statearr_24553;
});
var cljs$core$async$state_machine__22733__auto____1 = (function (state_24535){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_24535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e24554){if((e24554 instanceof Object)){
var ex__22736__auto__ = e24554;
var statearr_24555_24569 = state_24535;
(statearr_24555_24569[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24570 = state_24535;
state_24535 = G__24570;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
cljs$core$async$state_machine__22733__auto__ = function(state_24535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22733__auto____1.call(this,state_24535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22733__auto____0;
cljs$core$async$state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22733__auto____1;
return cljs$core$async$state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_24556 = f__22828__auto__.call(null);
(statearr_24556[(6)] = c__22827__auto___24558);

return statearr_24556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__24572 = arguments.length;
switch (G__24572) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22827__auto___24638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_24610){
var state_val_24611 = (state_24610[(1)]);
if((state_val_24611 === (7))){
var inst_24606 = (state_24610[(2)]);
var state_24610__$1 = state_24610;
var statearr_24612_24639 = state_24610__$1;
(statearr_24612_24639[(2)] = inst_24606);

(statearr_24612_24639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24611 === (1))){
var inst_24573 = (new Array(n));
var inst_24574 = inst_24573;
var inst_24575 = (0);
var state_24610__$1 = (function (){var statearr_24613 = state_24610;
(statearr_24613[(7)] = inst_24575);

(statearr_24613[(8)] = inst_24574);

return statearr_24613;
})();
var statearr_24614_24640 = state_24610__$1;
(statearr_24614_24640[(2)] = null);

(statearr_24614_24640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24611 === (4))){
var inst_24578 = (state_24610[(9)]);
var inst_24578__$1 = (state_24610[(2)]);
var inst_24579 = (inst_24578__$1 == null);
var inst_24580 = cljs.core.not.call(null,inst_24579);
var state_24610__$1 = (function (){var statearr_24615 = state_24610;
(statearr_24615[(9)] = inst_24578__$1);

return statearr_24615;
})();
if(inst_24580){
var statearr_24616_24641 = state_24610__$1;
(statearr_24616_24641[(1)] = (5));

} else {
var statearr_24617_24642 = state_24610__$1;
(statearr_24617_24642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24611 === (15))){
var inst_24600 = (state_24610[(2)]);
var state_24610__$1 = state_24610;
var statearr_24618_24643 = state_24610__$1;
(statearr_24618_24643[(2)] = inst_24600);

(statearr_24618_24643[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24611 === (13))){
var state_24610__$1 = state_24610;
var statearr_24619_24644 = state_24610__$1;
(statearr_24619_24644[(2)] = null);

(statearr_24619_24644[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24611 === (6))){
var inst_24575 = (state_24610[(7)]);
var inst_24596 = (inst_24575 > (0));
var state_24610__$1 = state_24610;
if(cljs.core.truth_(inst_24596)){
var statearr_24620_24645 = state_24610__$1;
(statearr_24620_24645[(1)] = (12));

} else {
var statearr_24621_24646 = state_24610__$1;
(statearr_24621_24646[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24611 === (3))){
var inst_24608 = (state_24610[(2)]);
var state_24610__$1 = state_24610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24610__$1,inst_24608);
} else {
if((state_val_24611 === (12))){
var inst_24574 = (state_24610[(8)]);
var inst_24598 = cljs.core.vec.call(null,inst_24574);
var state_24610__$1 = state_24610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24610__$1,(15),out,inst_24598);
} else {
if((state_val_24611 === (2))){
var state_24610__$1 = state_24610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24610__$1,(4),ch);
} else {
if((state_val_24611 === (11))){
var inst_24590 = (state_24610[(2)]);
var inst_24591 = (new Array(n));
var inst_24574 = inst_24591;
var inst_24575 = (0);
var state_24610__$1 = (function (){var statearr_24622 = state_24610;
(statearr_24622[(10)] = inst_24590);

(statearr_24622[(7)] = inst_24575);

(statearr_24622[(8)] = inst_24574);

return statearr_24622;
})();
var statearr_24623_24647 = state_24610__$1;
(statearr_24623_24647[(2)] = null);

(statearr_24623_24647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24611 === (9))){
var inst_24574 = (state_24610[(8)]);
var inst_24588 = cljs.core.vec.call(null,inst_24574);
var state_24610__$1 = state_24610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24610__$1,(11),out,inst_24588);
} else {
if((state_val_24611 === (5))){
var inst_24575 = (state_24610[(7)]);
var inst_24583 = (state_24610[(11)]);
var inst_24574 = (state_24610[(8)]);
var inst_24578 = (state_24610[(9)]);
var inst_24582 = (inst_24574[inst_24575] = inst_24578);
var inst_24583__$1 = (inst_24575 + (1));
var inst_24584 = (inst_24583__$1 < n);
var state_24610__$1 = (function (){var statearr_24624 = state_24610;
(statearr_24624[(11)] = inst_24583__$1);

(statearr_24624[(12)] = inst_24582);

return statearr_24624;
})();
if(cljs.core.truth_(inst_24584)){
var statearr_24625_24648 = state_24610__$1;
(statearr_24625_24648[(1)] = (8));

} else {
var statearr_24626_24649 = state_24610__$1;
(statearr_24626_24649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24611 === (14))){
var inst_24603 = (state_24610[(2)]);
var inst_24604 = cljs.core.async.close_BANG_.call(null,out);
var state_24610__$1 = (function (){var statearr_24628 = state_24610;
(statearr_24628[(13)] = inst_24603);

return statearr_24628;
})();
var statearr_24629_24650 = state_24610__$1;
(statearr_24629_24650[(2)] = inst_24604);

(statearr_24629_24650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24611 === (10))){
var inst_24594 = (state_24610[(2)]);
var state_24610__$1 = state_24610;
var statearr_24630_24651 = state_24610__$1;
(statearr_24630_24651[(2)] = inst_24594);

(statearr_24630_24651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24611 === (8))){
var inst_24583 = (state_24610[(11)]);
var inst_24574 = (state_24610[(8)]);
var tmp24627 = inst_24574;
var inst_24574__$1 = tmp24627;
var inst_24575 = inst_24583;
var state_24610__$1 = (function (){var statearr_24631 = state_24610;
(statearr_24631[(7)] = inst_24575);

(statearr_24631[(8)] = inst_24574__$1);

return statearr_24631;
})();
var statearr_24632_24652 = state_24610__$1;
(statearr_24632_24652[(2)] = null);

(statearr_24632_24652[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__22733__auto__ = null;
var cljs$core$async$state_machine__22733__auto____0 = (function (){
var statearr_24633 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24633[(0)] = cljs$core$async$state_machine__22733__auto__);

(statearr_24633[(1)] = (1));

return statearr_24633;
});
var cljs$core$async$state_machine__22733__auto____1 = (function (state_24610){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_24610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e24634){if((e24634 instanceof Object)){
var ex__22736__auto__ = e24634;
var statearr_24635_24653 = state_24610;
(statearr_24635_24653[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24654 = state_24610;
state_24610 = G__24654;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
cljs$core$async$state_machine__22733__auto__ = function(state_24610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22733__auto____1.call(this,state_24610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22733__auto____0;
cljs$core$async$state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22733__auto____1;
return cljs$core$async$state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_24636 = f__22828__auto__.call(null);
(statearr_24636[(6)] = c__22827__auto___24638);

return statearr_24636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__24656 = arguments.length;
switch (G__24656) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22827__auto___24726 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_24698){
var state_val_24699 = (state_24698[(1)]);
if((state_val_24699 === (7))){
var inst_24694 = (state_24698[(2)]);
var state_24698__$1 = state_24698;
var statearr_24700_24727 = state_24698__$1;
(statearr_24700_24727[(2)] = inst_24694);

(statearr_24700_24727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24699 === (1))){
var inst_24657 = [];
var inst_24658 = inst_24657;
var inst_24659 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24698__$1 = (function (){var statearr_24701 = state_24698;
(statearr_24701[(7)] = inst_24659);

(statearr_24701[(8)] = inst_24658);

return statearr_24701;
})();
var statearr_24702_24728 = state_24698__$1;
(statearr_24702_24728[(2)] = null);

(statearr_24702_24728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24699 === (4))){
var inst_24662 = (state_24698[(9)]);
var inst_24662__$1 = (state_24698[(2)]);
var inst_24663 = (inst_24662__$1 == null);
var inst_24664 = cljs.core.not.call(null,inst_24663);
var state_24698__$1 = (function (){var statearr_24703 = state_24698;
(statearr_24703[(9)] = inst_24662__$1);

return statearr_24703;
})();
if(inst_24664){
var statearr_24704_24729 = state_24698__$1;
(statearr_24704_24729[(1)] = (5));

} else {
var statearr_24705_24730 = state_24698__$1;
(statearr_24705_24730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24699 === (15))){
var inst_24688 = (state_24698[(2)]);
var state_24698__$1 = state_24698;
var statearr_24706_24731 = state_24698__$1;
(statearr_24706_24731[(2)] = inst_24688);

(statearr_24706_24731[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24699 === (13))){
var state_24698__$1 = state_24698;
var statearr_24707_24732 = state_24698__$1;
(statearr_24707_24732[(2)] = null);

(statearr_24707_24732[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24699 === (6))){
var inst_24658 = (state_24698[(8)]);
var inst_24683 = inst_24658.length;
var inst_24684 = (inst_24683 > (0));
var state_24698__$1 = state_24698;
if(cljs.core.truth_(inst_24684)){
var statearr_24708_24733 = state_24698__$1;
(statearr_24708_24733[(1)] = (12));

} else {
var statearr_24709_24734 = state_24698__$1;
(statearr_24709_24734[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24699 === (3))){
var inst_24696 = (state_24698[(2)]);
var state_24698__$1 = state_24698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24698__$1,inst_24696);
} else {
if((state_val_24699 === (12))){
var inst_24658 = (state_24698[(8)]);
var inst_24686 = cljs.core.vec.call(null,inst_24658);
var state_24698__$1 = state_24698;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24698__$1,(15),out,inst_24686);
} else {
if((state_val_24699 === (2))){
var state_24698__$1 = state_24698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24698__$1,(4),ch);
} else {
if((state_val_24699 === (11))){
var inst_24662 = (state_24698[(9)]);
var inst_24666 = (state_24698[(10)]);
var inst_24676 = (state_24698[(2)]);
var inst_24677 = [];
var inst_24678 = inst_24677.push(inst_24662);
var inst_24658 = inst_24677;
var inst_24659 = inst_24666;
var state_24698__$1 = (function (){var statearr_24710 = state_24698;
(statearr_24710[(7)] = inst_24659);

(statearr_24710[(11)] = inst_24678);

(statearr_24710[(12)] = inst_24676);

(statearr_24710[(8)] = inst_24658);

return statearr_24710;
})();
var statearr_24711_24735 = state_24698__$1;
(statearr_24711_24735[(2)] = null);

(statearr_24711_24735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24699 === (9))){
var inst_24658 = (state_24698[(8)]);
var inst_24674 = cljs.core.vec.call(null,inst_24658);
var state_24698__$1 = state_24698;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24698__$1,(11),out,inst_24674);
} else {
if((state_val_24699 === (5))){
var inst_24659 = (state_24698[(7)]);
var inst_24662 = (state_24698[(9)]);
var inst_24666 = (state_24698[(10)]);
var inst_24666__$1 = f.call(null,inst_24662);
var inst_24667 = cljs.core._EQ_.call(null,inst_24666__$1,inst_24659);
var inst_24668 = cljs.core.keyword_identical_QMARK_.call(null,inst_24659,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24669 = ((inst_24667) || (inst_24668));
var state_24698__$1 = (function (){var statearr_24712 = state_24698;
(statearr_24712[(10)] = inst_24666__$1);

return statearr_24712;
})();
if(cljs.core.truth_(inst_24669)){
var statearr_24713_24736 = state_24698__$1;
(statearr_24713_24736[(1)] = (8));

} else {
var statearr_24714_24737 = state_24698__$1;
(statearr_24714_24737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24699 === (14))){
var inst_24691 = (state_24698[(2)]);
var inst_24692 = cljs.core.async.close_BANG_.call(null,out);
var state_24698__$1 = (function (){var statearr_24716 = state_24698;
(statearr_24716[(13)] = inst_24691);

return statearr_24716;
})();
var statearr_24717_24738 = state_24698__$1;
(statearr_24717_24738[(2)] = inst_24692);

(statearr_24717_24738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24699 === (10))){
var inst_24681 = (state_24698[(2)]);
var state_24698__$1 = state_24698;
var statearr_24718_24739 = state_24698__$1;
(statearr_24718_24739[(2)] = inst_24681);

(statearr_24718_24739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24699 === (8))){
var inst_24662 = (state_24698[(9)]);
var inst_24666 = (state_24698[(10)]);
var inst_24658 = (state_24698[(8)]);
var inst_24671 = inst_24658.push(inst_24662);
var tmp24715 = inst_24658;
var inst_24658__$1 = tmp24715;
var inst_24659 = inst_24666;
var state_24698__$1 = (function (){var statearr_24719 = state_24698;
(statearr_24719[(7)] = inst_24659);

(statearr_24719[(14)] = inst_24671);

(statearr_24719[(8)] = inst_24658__$1);

return statearr_24719;
})();
var statearr_24720_24740 = state_24698__$1;
(statearr_24720_24740[(2)] = null);

(statearr_24720_24740[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__22733__auto__ = null;
var cljs$core$async$state_machine__22733__auto____0 = (function (){
var statearr_24721 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24721[(0)] = cljs$core$async$state_machine__22733__auto__);

(statearr_24721[(1)] = (1));

return statearr_24721;
});
var cljs$core$async$state_machine__22733__auto____1 = (function (state_24698){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_24698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e24722){if((e24722 instanceof Object)){
var ex__22736__auto__ = e24722;
var statearr_24723_24741 = state_24698;
(statearr_24723_24741[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24742 = state_24698;
state_24698 = G__24742;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
cljs$core$async$state_machine__22733__auto__ = function(state_24698){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22733__auto____1.call(this,state_24698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22733__auto____0;
cljs$core$async$state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22733__auto____1;
return cljs$core$async$state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_24724 = f__22828__auto__.call(null);
(statearr_24724[(6)] = c__22827__auto___24726);

return statearr_24724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1761389399374
