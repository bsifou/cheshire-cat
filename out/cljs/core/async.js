// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args13788 = [];
var len__8561__auto___13794 = arguments.length;
var i__8562__auto___13795 = (0);
while(true){
if((i__8562__auto___13795 < len__8561__auto___13794)){
args13788.push((arguments[i__8562__auto___13795]));

var G__13796 = (i__8562__auto___13795 + (1));
i__8562__auto___13795 = G__13796;
continue;
} else {
}
break;
}

var G__13790 = args13788.length;
switch (G__13790) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13788.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async13791 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13791 = (function (f,blockable,meta13792){
this.f = f;
this.blockable = blockable;
this.meta13792 = meta13792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13793,meta13792__$1){
var self__ = this;
var _13793__$1 = this;
return (new cljs.core.async.t_cljs$core$async13791(self__.f,self__.blockable,meta13792__$1));
});

cljs.core.async.t_cljs$core$async13791.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13793){
var self__ = this;
var _13793__$1 = this;
return self__.meta13792;
});

cljs.core.async.t_cljs$core$async13791.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13791.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13791.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async13791.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async13791.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13792","meta13792",16543855,null)], null);
});

cljs.core.async.t_cljs$core$async13791.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13791.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13791";

cljs.core.async.t_cljs$core$async13791.cljs$lang$ctorPrWriter = (function (this__8059__auto__,writer__8060__auto__,opt__8061__auto__){
return cljs.core._write.call(null,writer__8060__auto__,"cljs.core.async/t_cljs$core$async13791");
});

cljs.core.async.__GT_t_cljs$core$async13791 = (function cljs$core$async$__GT_t_cljs$core$async13791(f__$1,blockable__$1,meta13792){
return (new cljs.core.async.t_cljs$core$async13791(f__$1,blockable__$1,meta13792));
});

}

return (new cljs.core.async.t_cljs$core$async13791(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

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
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var args13800 = [];
var len__8561__auto___13803 = arguments.length;
var i__8562__auto___13804 = (0);
while(true){
if((i__8562__auto___13804 < len__8561__auto___13803)){
args13800.push((arguments[i__8562__auto___13804]));

var G__13805 = (i__8562__auto___13804 + (1));
i__8562__auto___13804 = G__13805;
continue;
} else {
}
break;
}

var G__13802 = args13800.length;
switch (G__13802) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13800.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args13807 = [];
var len__8561__auto___13810 = arguments.length;
var i__8562__auto___13811 = (0);
while(true){
if((i__8562__auto___13811 < len__8561__auto___13810)){
args13807.push((arguments[i__8562__auto___13811]));

var G__13812 = (i__8562__auto___13811 + (1));
i__8562__auto___13811 = G__13812;
continue;
} else {
}
break;
}

var G__13809 = args13807.length;
switch (G__13809) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13807.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

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
var args13814 = [];
var len__8561__auto___13817 = arguments.length;
var i__8562__auto___13818 = (0);
while(true){
if((i__8562__auto___13818 < len__8561__auto___13817)){
args13814.push((arguments[i__8562__auto___13818]));

var G__13819 = (i__8562__auto___13818 + (1));
i__8562__auto___13818 = G__13819;
continue;
} else {
}
break;
}

var G__13816 = args13814.length;
switch (G__13816) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13814.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_13821 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13821);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13821,ret){
return (function (){
return fn1.call(null,val_13821);
});})(val_13821,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

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
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args13822 = [];
var len__8561__auto___13825 = arguments.length;
var i__8562__auto___13826 = (0);
while(true){
if((i__8562__auto___13826 < len__8561__auto___13825)){
args13822.push((arguments[i__8562__auto___13826]));

var G__13827 = (i__8562__auto___13826 + (1));
i__8562__auto___13826 = G__13827;
continue;
} else {
}
break;
}

var G__13824 = args13822.length;
switch (G__13824) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13822.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__8371__auto___13829 = n;
var x_13830 = (0);
while(true){
if((x_13830 < n__8371__auto___13829)){
(a[x_13830] = (0));

var G__13831 = (x_13830 + (1));
x_13830 = G__13831;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__13832 = (i + (1));
i = G__13832;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async13836 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13836 = (function (flag,meta13837){
this.flag = flag;
this.meta13837 = meta13837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13838,meta13837__$1){
var self__ = this;
var _13838__$1 = this;
return (new cljs.core.async.t_cljs$core$async13836(self__.flag,meta13837__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async13836.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13838){
var self__ = this;
var _13838__$1 = this;
return self__.meta13837;
});})(flag))
;

cljs.core.async.t_cljs$core$async13836.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13836.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async13836.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13836.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13836.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13837","meta13837",-417519038,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async13836.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13836.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13836";

cljs.core.async.t_cljs$core$async13836.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8059__auto__,writer__8060__auto__,opt__8061__auto__){
return cljs.core._write.call(null,writer__8060__auto__,"cljs.core.async/t_cljs$core$async13836");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async13836 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13836(flag__$1,meta13837){
return (new cljs.core.async.t_cljs$core$async13836(flag__$1,meta13837));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async13836(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async13842 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13842 = (function (flag,cb,meta13843){
this.flag = flag;
this.cb = cb;
this.meta13843 = meta13843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13844,meta13843__$1){
var self__ = this;
var _13844__$1 = this;
return (new cljs.core.async.t_cljs$core$async13842(self__.flag,self__.cb,meta13843__$1));
});

cljs.core.async.t_cljs$core$async13842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13844){
var self__ = this;
var _13844__$1 = this;
return self__.meta13843;
});

cljs.core.async.t_cljs$core$async13842.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13842.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async13842.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13842.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13842.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13843","meta13843",-1167948840,null)], null);
});

cljs.core.async.t_cljs$core$async13842.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13842.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13842";

cljs.core.async.t_cljs$core$async13842.cljs$lang$ctorPrWriter = (function (this__8059__auto__,writer__8060__auto__,opt__8061__auto__){
return cljs.core._write.call(null,writer__8060__auto__,"cljs.core.async/t_cljs$core$async13842");
});

cljs.core.async.__GT_t_cljs$core$async13842 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13842(flag__$1,cb__$1,meta13843){
return (new cljs.core.async.t_cljs$core$async13842(flag__$1,cb__$1,meta13843));
});

}

return (new cljs.core.async.t_cljs$core$async13842(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
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
return (function (p1__13845_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13845_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13846_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13846_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7448__auto__ = wport;
if(cljs.core.truth_(or__7448__auto__)){
return or__7448__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13847 = (i + (1));
i = G__13847;
continue;
}
} else {
return null;
}
break;
}
})();
var or__7448__auto__ = ret;
if(cljs.core.truth_(or__7448__auto__)){
return or__7448__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__7436__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__7436__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__7436__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__8568__auto__ = [];
var len__8561__auto___13853 = arguments.length;
var i__8562__auto___13854 = (0);
while(true){
if((i__8562__auto___13854 < len__8561__auto___13853)){
args__8568__auto__.push((arguments[i__8562__auto___13854]));

var G__13855 = (i__8562__auto___13854 + (1));
i__8562__auto___13854 = G__13855;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((1) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8569__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13850){
var map__13851 = p__13850;
var map__13851__$1 = ((((!((map__13851 == null)))?((((map__13851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13851.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13851):map__13851);
var opts = map__13851__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13848){
var G__13849 = cljs.core.first.call(null,seq13848);
var seq13848__$1 = cljs.core.next.call(null,seq13848);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13849,seq13848__$1);
});

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
var args13856 = [];
var len__8561__auto___13906 = arguments.length;
var i__8562__auto___13907 = (0);
while(true){
if((i__8562__auto___13907 < len__8561__auto___13906)){
args13856.push((arguments[i__8562__auto___13907]));

var G__13908 = (i__8562__auto___13907 + (1));
i__8562__auto___13907 = G__13908;
continue;
} else {
}
break;
}

var G__13858 = args13856.length;
switch (G__13858) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13856.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10489__auto___13910 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10489__auto___13910){
return (function (){
var f__10490__auto__ = (function (){var switch__10433__auto__ = ((function (c__10489__auto___13910){
return (function (state_13882){
var state_val_13883 = (state_13882[(1)]);
if((state_val_13883 === (7))){
var inst_13878 = (state_13882[(2)]);
var state_13882__$1 = state_13882;
var statearr_13884_13911 = state_13882__$1;
(statearr_13884_13911[(2)] = inst_13878);

(statearr_13884_13911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (1))){
var state_13882__$1 = state_13882;
var statearr_13885_13912 = state_13882__$1;
(statearr_13885_13912[(2)] = null);

(statearr_13885_13912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (4))){
var inst_13861 = (state_13882[(7)]);
var inst_13861__$1 = (state_13882[(2)]);
var inst_13862 = (inst_13861__$1 == null);
var state_13882__$1 = (function (){var statearr_13886 = state_13882;
(statearr_13886[(7)] = inst_13861__$1);

return statearr_13886;
})();
if(cljs.core.truth_(inst_13862)){
var statearr_13887_13913 = state_13882__$1;
(statearr_13887_13913[(1)] = (5));

} else {
var statearr_13888_13914 = state_13882__$1;
(statearr_13888_13914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (13))){
var state_13882__$1 = state_13882;
var statearr_13889_13915 = state_13882__$1;
(statearr_13889_13915[(2)] = null);

(statearr_13889_13915[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (6))){
var inst_13861 = (state_13882[(7)]);
var state_13882__$1 = state_13882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13882__$1,(11),to,inst_13861);
} else {
if((state_val_13883 === (3))){
var inst_13880 = (state_13882[(2)]);
var state_13882__$1 = state_13882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13882__$1,inst_13880);
} else {
if((state_val_13883 === (12))){
var state_13882__$1 = state_13882;
var statearr_13890_13916 = state_13882__$1;
(statearr_13890_13916[(2)] = null);

(statearr_13890_13916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (2))){
var state_13882__$1 = state_13882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13882__$1,(4),from);
} else {
if((state_val_13883 === (11))){
var inst_13871 = (state_13882[(2)]);
var state_13882__$1 = state_13882;
if(cljs.core.truth_(inst_13871)){
var statearr_13891_13917 = state_13882__$1;
(statearr_13891_13917[(1)] = (12));

} else {
var statearr_13892_13918 = state_13882__$1;
(statearr_13892_13918[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (9))){
var state_13882__$1 = state_13882;
var statearr_13893_13919 = state_13882__$1;
(statearr_13893_13919[(2)] = null);

(statearr_13893_13919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (5))){
var state_13882__$1 = state_13882;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13894_13920 = state_13882__$1;
(statearr_13894_13920[(1)] = (8));

} else {
var statearr_13895_13921 = state_13882__$1;
(statearr_13895_13921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (14))){
var inst_13876 = (state_13882[(2)]);
var state_13882__$1 = state_13882;
var statearr_13896_13922 = state_13882__$1;
(statearr_13896_13922[(2)] = inst_13876);

(statearr_13896_13922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (10))){
var inst_13868 = (state_13882[(2)]);
var state_13882__$1 = state_13882;
var statearr_13897_13923 = state_13882__$1;
(statearr_13897_13923[(2)] = inst_13868);

(statearr_13897_13923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13883 === (8))){
var inst_13865 = cljs.core.async.close_BANG_.call(null,to);
var state_13882__$1 = state_13882;
var statearr_13898_13924 = state_13882__$1;
(statearr_13898_13924[(2)] = inst_13865);

(statearr_13898_13924[(1)] = (10));


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
});})(c__10489__auto___13910))
;
return ((function (switch__10433__auto__,c__10489__auto___13910){
return (function() {
var cljs$core$async$state_machine__10434__auto__ = null;
var cljs$core$async$state_machine__10434__auto____0 = (function (){
var statearr_13902 = [null,null,null,null,null,null,null,null];
(statearr_13902[(0)] = cljs$core$async$state_machine__10434__auto__);

(statearr_13902[(1)] = (1));

return statearr_13902;
});
var cljs$core$async$state_machine__10434__auto____1 = (function (state_13882){
while(true){
var ret_value__10435__auto__ = (function (){try{while(true){
var result__10436__auto__ = switch__10433__auto__.call(null,state_13882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10436__auto__;
}
break;
}
}catch (e13903){if((e13903 instanceof Object)){
var ex__10437__auto__ = e13903;
var statearr_13904_13925 = state_13882;
(statearr_13904_13925[(5)] = ex__10437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13926 = state_13882;
state_13882 = G__13926;
continue;
} else {
return ret_value__10435__auto__;
}
break;
}
});
cljs$core$async$state_machine__10434__auto__ = function(state_13882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10434__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10434__auto____1.call(this,state_13882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10434__auto____0;
cljs$core$async$state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10434__auto____1;
return cljs$core$async$state_machine__10434__auto__;
})()
;})(switch__10433__auto__,c__10489__auto___13910))
})();
var state__10491__auto__ = (function (){var statearr_13905 = f__10490__auto__.call(null);
(statearr_13905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10489__auto___13910);

return statearr_13905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10491__auto__);
});})(c__10489__auto___13910))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__14114){
var vec__14115 = p__14114;
var v = cljs.core.nth.call(null,vec__14115,(0),null);
var p = cljs.core.nth.call(null,vec__14115,(1),null);
var job = vec__14115;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10489__auto___14301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10489__auto___14301,res,vec__14115,v,p,job,jobs,results){
return (function (){
var f__10490__auto__ = (function (){var switch__10433__auto__ = ((function (c__10489__auto___14301,res,vec__14115,v,p,job,jobs,results){
return (function (state_14122){
var state_val_14123 = (state_14122[(1)]);
if((state_val_14123 === (1))){
var state_14122__$1 = state_14122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14122__$1,(2),res,v);
} else {
if((state_val_14123 === (2))){
var inst_14119 = (state_14122[(2)]);
var inst_14120 = cljs.core.async.close_BANG_.call(null,res);
var state_14122__$1 = (function (){var statearr_14124 = state_14122;
(statearr_14124[(7)] = inst_14119);

return statearr_14124;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14122__$1,inst_14120);
} else {
return null;
}
}
});})(c__10489__auto___14301,res,vec__14115,v,p,job,jobs,results))
;
return ((function (switch__10433__auto__,c__10489__auto___14301,res,vec__14115,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____0 = (function (){
var statearr_14128 = [null,null,null,null,null,null,null,null];
(statearr_14128[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__);

(statearr_14128[(1)] = (1));

return statearr_14128;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____1 = (function (state_14122){
while(true){
var ret_value__10435__auto__ = (function (){try{while(true){
var result__10436__auto__ = switch__10433__auto__.call(null,state_14122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10436__auto__;
}
break;
}
}catch (e14129){if((e14129 instanceof Object)){
var ex__10437__auto__ = e14129;
var statearr_14130_14302 = state_14122;
(statearr_14130_14302[(5)] = ex__10437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14303 = state_14122;
state_14122 = G__14303;
continue;
} else {
return ret_value__10435__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__ = function(state_14122){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____1.call(this,state_14122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__;
})()
;})(switch__10433__auto__,c__10489__auto___14301,res,vec__14115,v,p,job,jobs,results))
})();
var state__10491__auto__ = (function (){var statearr_14131 = f__10490__auto__.call(null);
(statearr_14131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10489__auto___14301);

return statearr_14131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10491__auto__);
});})(c__10489__auto___14301,res,vec__14115,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14132){
var vec__14133 = p__14132;
var v = cljs.core.nth.call(null,vec__14133,(0),null);
var p = cljs.core.nth.call(null,vec__14133,(1),null);
var job = vec__14133;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__8371__auto___14304 = n;
var __14305 = (0);
while(true){
if((__14305 < n__8371__auto___14304)){
var G__14136_14306 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14136_14306) {
case "compute":
var c__10489__auto___14308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14305,c__10489__auto___14308,G__14136_14306,n__8371__auto___14304,jobs,results,process,async){
return (function (){
var f__10490__auto__ = (function (){var switch__10433__auto__ = ((function (__14305,c__10489__auto___14308,G__14136_14306,n__8371__auto___14304,jobs,results,process,async){
return (function (state_14149){
var state_val_14150 = (state_14149[(1)]);
if((state_val_14150 === (1))){
var state_14149__$1 = state_14149;
var statearr_14151_14309 = state_14149__$1;
(statearr_14151_14309[(2)] = null);

(statearr_14151_14309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14150 === (2))){
var state_14149__$1 = state_14149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14149__$1,(4),jobs);
} else {
if((state_val_14150 === (3))){
var inst_14147 = (state_14149[(2)]);
var state_14149__$1 = state_14149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14149__$1,inst_14147);
} else {
if((state_val_14150 === (4))){
var inst_14139 = (state_14149[(2)]);
var inst_14140 = process.call(null,inst_14139);
var state_14149__$1 = state_14149;
if(cljs.core.truth_(inst_14140)){
var statearr_14152_14310 = state_14149__$1;
(statearr_14152_14310[(1)] = (5));

} else {
var statearr_14153_14311 = state_14149__$1;
(statearr_14153_14311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14150 === (5))){
var state_14149__$1 = state_14149;
var statearr_14154_14312 = state_14149__$1;
(statearr_14154_14312[(2)] = null);

(statearr_14154_14312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14150 === (6))){
var state_14149__$1 = state_14149;
var statearr_14155_14313 = state_14149__$1;
(statearr_14155_14313[(2)] = null);

(statearr_14155_14313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14150 === (7))){
var inst_14145 = (state_14149[(2)]);
var state_14149__$1 = state_14149;
var statearr_14156_14314 = state_14149__$1;
(statearr_14156_14314[(2)] = inst_14145);

(statearr_14156_14314[(1)] = (3));


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
});})(__14305,c__10489__auto___14308,G__14136_14306,n__8371__auto___14304,jobs,results,process,async))
;
return ((function (__14305,switch__10433__auto__,c__10489__auto___14308,G__14136_14306,n__8371__auto___14304,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____0 = (function (){
var statearr_14160 = [null,null,null,null,null,null,null];
(statearr_14160[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__);

(statearr_14160[(1)] = (1));

return statearr_14160;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____1 = (function (state_14149){
while(true){
var ret_value__10435__auto__ = (function (){try{while(true){
var result__10436__auto__ = switch__10433__auto__.call(null,state_14149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10436__auto__;
}
break;
}
}catch (e14161){if((e14161 instanceof Object)){
var ex__10437__auto__ = e14161;
var statearr_14162_14315 = state_14149;
(statearr_14162_14315[(5)] = ex__10437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14316 = state_14149;
state_14149 = G__14316;
continue;
} else {
return ret_value__10435__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__ = function(state_14149){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____1.call(this,state_14149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__;
})()
;})(__14305,switch__10433__auto__,c__10489__auto___14308,G__14136_14306,n__8371__auto___14304,jobs,results,process,async))
})();
var state__10491__auto__ = (function (){var statearr_14163 = f__10490__auto__.call(null);
(statearr_14163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10489__auto___14308);

return statearr_14163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10491__auto__);
});})(__14305,c__10489__auto___14308,G__14136_14306,n__8371__auto___14304,jobs,results,process,async))
);


break;
case "async":
var c__10489__auto___14317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14305,c__10489__auto___14317,G__14136_14306,n__8371__auto___14304,jobs,results,process,async){
return (function (){
var f__10490__auto__ = (function (){var switch__10433__auto__ = ((function (__14305,c__10489__auto___14317,G__14136_14306,n__8371__auto___14304,jobs,results,process,async){
return (function (state_14176){
var state_val_14177 = (state_14176[(1)]);
if((state_val_14177 === (1))){
var state_14176__$1 = state_14176;
var statearr_14178_14318 = state_14176__$1;
(statearr_14178_14318[(2)] = null);

(statearr_14178_14318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14177 === (2))){
var state_14176__$1 = state_14176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14176__$1,(4),jobs);
} else {
if((state_val_14177 === (3))){
var inst_14174 = (state_14176[(2)]);
var state_14176__$1 = state_14176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14176__$1,inst_14174);
} else {
if((state_val_14177 === (4))){
var inst_14166 = (state_14176[(2)]);
var inst_14167 = async.call(null,inst_14166);
var state_14176__$1 = state_14176;
if(cljs.core.truth_(inst_14167)){
var statearr_14179_14319 = state_14176__$1;
(statearr_14179_14319[(1)] = (5));

} else {
var statearr_14180_14320 = state_14176__$1;
(statearr_14180_14320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14177 === (5))){
var state_14176__$1 = state_14176;
var statearr_14181_14321 = state_14176__$1;
(statearr_14181_14321[(2)] = null);

(statearr_14181_14321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14177 === (6))){
var state_14176__$1 = state_14176;
var statearr_14182_14322 = state_14176__$1;
(statearr_14182_14322[(2)] = null);

(statearr_14182_14322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14177 === (7))){
var inst_14172 = (state_14176[(2)]);
var state_14176__$1 = state_14176;
var statearr_14183_14323 = state_14176__$1;
(statearr_14183_14323[(2)] = inst_14172);

(statearr_14183_14323[(1)] = (3));


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
});})(__14305,c__10489__auto___14317,G__14136_14306,n__8371__auto___14304,jobs,results,process,async))
;
return ((function (__14305,switch__10433__auto__,c__10489__auto___14317,G__14136_14306,n__8371__auto___14304,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____0 = (function (){
var statearr_14187 = [null,null,null,null,null,null,null];
(statearr_14187[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__);

(statearr_14187[(1)] = (1));

return statearr_14187;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____1 = (function (state_14176){
while(true){
var ret_value__10435__auto__ = (function (){try{while(true){
var result__10436__auto__ = switch__10433__auto__.call(null,state_14176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10436__auto__;
}
break;
}
}catch (e14188){if((e14188 instanceof Object)){
var ex__10437__auto__ = e14188;
var statearr_14189_14324 = state_14176;
(statearr_14189_14324[(5)] = ex__10437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14325 = state_14176;
state_14176 = G__14325;
continue;
} else {
return ret_value__10435__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__ = function(state_14176){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____1.call(this,state_14176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__;
})()
;})(__14305,switch__10433__auto__,c__10489__auto___14317,G__14136_14306,n__8371__auto___14304,jobs,results,process,async))
})();
var state__10491__auto__ = (function (){var statearr_14190 = f__10490__auto__.call(null);
(statearr_14190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10489__auto___14317);

return statearr_14190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10491__auto__);
});})(__14305,c__10489__auto___14317,G__14136_14306,n__8371__auto___14304,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__14326 = (__14305 + (1));
__14305 = G__14326;
continue;
} else {
}
break;
}

var c__10489__auto___14327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10489__auto___14327,jobs,results,process,async){
return (function (){
var f__10490__auto__ = (function (){var switch__10433__auto__ = ((function (c__10489__auto___14327,jobs,results,process,async){
return (function (state_14212){
var state_val_14213 = (state_14212[(1)]);
if((state_val_14213 === (1))){
var state_14212__$1 = state_14212;
var statearr_14214_14328 = state_14212__$1;
(statearr_14214_14328[(2)] = null);

(statearr_14214_14328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14213 === (2))){
var state_14212__$1 = state_14212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14212__$1,(4),from);
} else {
if((state_val_14213 === (3))){
var inst_14210 = (state_14212[(2)]);
var state_14212__$1 = state_14212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14212__$1,inst_14210);
} else {
if((state_val_14213 === (4))){
var inst_14193 = (state_14212[(7)]);
var inst_14193__$1 = (state_14212[(2)]);
var inst_14194 = (inst_14193__$1 == null);
var state_14212__$1 = (function (){var statearr_14215 = state_14212;
(statearr_14215[(7)] = inst_14193__$1);

return statearr_14215;
})();
if(cljs.core.truth_(inst_14194)){
var statearr_14216_14329 = state_14212__$1;
(statearr_14216_14329[(1)] = (5));

} else {
var statearr_14217_14330 = state_14212__$1;
(statearr_14217_14330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14213 === (5))){
var inst_14196 = cljs.core.async.close_BANG_.call(null,jobs);
var state_14212__$1 = state_14212;
var statearr_14218_14331 = state_14212__$1;
(statearr_14218_14331[(2)] = inst_14196);

(statearr_14218_14331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14213 === (6))){
var inst_14198 = (state_14212[(8)]);
var inst_14193 = (state_14212[(7)]);
var inst_14198__$1 = cljs.core.async.chan.call(null,(1));
var inst_14199 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14200 = [inst_14193,inst_14198__$1];
var inst_14201 = (new cljs.core.PersistentVector(null,2,(5),inst_14199,inst_14200,null));
var state_14212__$1 = (function (){var statearr_14219 = state_14212;
(statearr_14219[(8)] = inst_14198__$1);

return statearr_14219;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14212__$1,(8),jobs,inst_14201);
} else {
if((state_val_14213 === (7))){
var inst_14208 = (state_14212[(2)]);
var state_14212__$1 = state_14212;
var statearr_14220_14332 = state_14212__$1;
(statearr_14220_14332[(2)] = inst_14208);

(statearr_14220_14332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14213 === (8))){
var inst_14198 = (state_14212[(8)]);
var inst_14203 = (state_14212[(2)]);
var state_14212__$1 = (function (){var statearr_14221 = state_14212;
(statearr_14221[(9)] = inst_14203);

return statearr_14221;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14212__$1,(9),results,inst_14198);
} else {
if((state_val_14213 === (9))){
var inst_14205 = (state_14212[(2)]);
var state_14212__$1 = (function (){var statearr_14222 = state_14212;
(statearr_14222[(10)] = inst_14205);

return statearr_14222;
})();
var statearr_14223_14333 = state_14212__$1;
(statearr_14223_14333[(2)] = null);

(statearr_14223_14333[(1)] = (2));


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
});})(c__10489__auto___14327,jobs,results,process,async))
;
return ((function (switch__10433__auto__,c__10489__auto___14327,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____0 = (function (){
var statearr_14227 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14227[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__);

(statearr_14227[(1)] = (1));

return statearr_14227;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____1 = (function (state_14212){
while(true){
var ret_value__10435__auto__ = (function (){try{while(true){
var result__10436__auto__ = switch__10433__auto__.call(null,state_14212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10436__auto__;
}
break;
}
}catch (e14228){if((e14228 instanceof Object)){
var ex__10437__auto__ = e14228;
var statearr_14229_14334 = state_14212;
(statearr_14229_14334[(5)] = ex__10437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14335 = state_14212;
state_14212 = G__14335;
continue;
} else {
return ret_value__10435__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__ = function(state_14212){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____1.call(this,state_14212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__;
})()
;})(switch__10433__auto__,c__10489__auto___14327,jobs,results,process,async))
})();
var state__10491__auto__ = (function (){var statearr_14230 = f__10490__auto__.call(null);
(statearr_14230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10489__auto___14327);

return statearr_14230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10491__auto__);
});})(c__10489__auto___14327,jobs,results,process,async))
);


var c__10489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10489__auto__,jobs,results,process,async){
return (function (){
var f__10490__auto__ = (function (){var switch__10433__auto__ = ((function (c__10489__auto__,jobs,results,process,async){
return (function (state_14268){
var state_val_14269 = (state_14268[(1)]);
if((state_val_14269 === (7))){
var inst_14264 = (state_14268[(2)]);
var state_14268__$1 = state_14268;
var statearr_14270_14336 = state_14268__$1;
(statearr_14270_14336[(2)] = inst_14264);

(statearr_14270_14336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14269 === (20))){
var state_14268__$1 = state_14268;
var statearr_14271_14337 = state_14268__$1;
(statearr_14271_14337[(2)] = null);

(statearr_14271_14337[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14269 === (1))){
var state_14268__$1 = state_14268;
var statearr_14272_14338 = state_14268__$1;
(statearr_14272_14338[(2)] = null);

(statearr_14272_14338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14269 === (4))){
var inst_14233 = (state_14268[(7)]);
var inst_14233__$1 = (state_14268[(2)]);
var inst_14234 = (inst_14233__$1 == null);
var state_14268__$1 = (function (){var statearr_14273 = state_14268;
(statearr_14273[(7)] = inst_14233__$1);

return statearr_14273;
})();
if(cljs.core.truth_(inst_14234)){
var statearr_14274_14339 = state_14268__$1;
(statearr_14274_14339[(1)] = (5));

} else {
var statearr_14275_14340 = state_14268__$1;
(statearr_14275_14340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14269 === (15))){
var inst_14246 = (state_14268[(8)]);
var state_14268__$1 = state_14268;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14268__$1,(18),to,inst_14246);
} else {
if((state_val_14269 === (21))){
var inst_14259 = (state_14268[(2)]);
var state_14268__$1 = state_14268;
var statearr_14276_14341 = state_14268__$1;
(statearr_14276_14341[(2)] = inst_14259);

(statearr_14276_14341[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14269 === (13))){
var inst_14261 = (state_14268[(2)]);
var state_14268__$1 = (function (){var statearr_14277 = state_14268;
(statearr_14277[(9)] = inst_14261);

return statearr_14277;
})();
var statearr_14278_14342 = state_14268__$1;
(statearr_14278_14342[(2)] = null);

(statearr_14278_14342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14269 === (6))){
var inst_14233 = (state_14268[(7)]);
var state_14268__$1 = state_14268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14268__$1,(11),inst_14233);
} else {
if((state_val_14269 === (17))){
var inst_14254 = (state_14268[(2)]);
var state_14268__$1 = state_14268;
if(cljs.core.truth_(inst_14254)){
var statearr_14279_14343 = state_14268__$1;
(statearr_14279_14343[(1)] = (19));

} else {
var statearr_14280_14344 = state_14268__$1;
(statearr_14280_14344[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14269 === (3))){
var inst_14266 = (state_14268[(2)]);
var state_14268__$1 = state_14268;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14268__$1,inst_14266);
} else {
if((state_val_14269 === (12))){
var inst_14243 = (state_14268[(10)]);
var state_14268__$1 = state_14268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14268__$1,(14),inst_14243);
} else {
if((state_val_14269 === (2))){
var state_14268__$1 = state_14268;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14268__$1,(4),results);
} else {
if((state_val_14269 === (19))){
var state_14268__$1 = state_14268;
var statearr_14281_14345 = state_14268__$1;
(statearr_14281_14345[(2)] = null);

(statearr_14281_14345[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14269 === (11))){
var inst_14243 = (state_14268[(2)]);
var state_14268__$1 = (function (){var statearr_14282 = state_14268;
(statearr_14282[(10)] = inst_14243);

return statearr_14282;
})();
var statearr_14283_14346 = state_14268__$1;
(statearr_14283_14346[(2)] = null);

(statearr_14283_14346[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14269 === (9))){
var state_14268__$1 = state_14268;
var statearr_14284_14347 = state_14268__$1;
(statearr_14284_14347[(2)] = null);

(statearr_14284_14347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14269 === (5))){
var state_14268__$1 = state_14268;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14285_14348 = state_14268__$1;
(statearr_14285_14348[(1)] = (8));

} else {
var statearr_14286_14349 = state_14268__$1;
(statearr_14286_14349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14269 === (14))){
var inst_14248 = (state_14268[(11)]);
var inst_14246 = (state_14268[(8)]);
var inst_14246__$1 = (state_14268[(2)]);
var inst_14247 = (inst_14246__$1 == null);
var inst_14248__$1 = cljs.core.not.call(null,inst_14247);
var state_14268__$1 = (function (){var statearr_14287 = state_14268;
(statearr_14287[(11)] = inst_14248__$1);

(statearr_14287[(8)] = inst_14246__$1);

return statearr_14287;
})();
if(inst_14248__$1){
var statearr_14288_14350 = state_14268__$1;
(statearr_14288_14350[(1)] = (15));

} else {
var statearr_14289_14351 = state_14268__$1;
(statearr_14289_14351[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14269 === (16))){
var inst_14248 = (state_14268[(11)]);
var state_14268__$1 = state_14268;
var statearr_14290_14352 = state_14268__$1;
(statearr_14290_14352[(2)] = inst_14248);

(statearr_14290_14352[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14269 === (10))){
var inst_14240 = (state_14268[(2)]);
var state_14268__$1 = state_14268;
var statearr_14291_14353 = state_14268__$1;
(statearr_14291_14353[(2)] = inst_14240);

(statearr_14291_14353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14269 === (18))){
var inst_14251 = (state_14268[(2)]);
var state_14268__$1 = state_14268;
var statearr_14292_14354 = state_14268__$1;
(statearr_14292_14354[(2)] = inst_14251);

(statearr_14292_14354[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14269 === (8))){
var inst_14237 = cljs.core.async.close_BANG_.call(null,to);
var state_14268__$1 = state_14268;
var statearr_14293_14355 = state_14268__$1;
(statearr_14293_14355[(2)] = inst_14237);

(statearr_14293_14355[(1)] = (10));


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
});})(c__10489__auto__,jobs,results,process,async))
;
return ((function (switch__10433__auto__,c__10489__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____0 = (function (){
var statearr_14297 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14297[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__);

(statearr_14297[(1)] = (1));

return statearr_14297;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____1 = (function (state_14268){
while(true){
var ret_value__10435__auto__ = (function (){try{while(true){
var result__10436__auto__ = switch__10433__auto__.call(null,state_14268);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10436__auto__;
}
break;
}
}catch (e14298){if((e14298 instanceof Object)){
var ex__10437__auto__ = e14298;
var statearr_14299_14356 = state_14268;
(statearr_14299_14356[(5)] = ex__10437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14357 = state_14268;
state_14268 = G__14357;
continue;
} else {
return ret_value__10435__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__ = function(state_14268){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____1.call(this,state_14268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10434__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10434__auto__;
})()
;})(switch__10433__auto__,c__10489__auto__,jobs,results,process,async))
})();
var state__10491__auto__ = (function (){var statearr_14300 = f__10490__auto__.call(null);
(statearr_14300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10489__auto__);

return statearr_14300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10491__auto__);
});})(c__10489__auto__,jobs,results,process,async))
);

return c__10489__auto__;
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
var args14358 = [];
var len__8561__auto___14361 = arguments.length;
var i__8562__auto___14362 = (0);
while(true){
if((i__8562__auto___14362 < len__8561__auto___14361)){
args14358.push((arguments[i__8562__auto___14362]));

var G__14363 = (i__8562__auto___14362 + (1));
i__8562__auto___14362 = G__14363;
continue;
} else {
}
break;
}

var G__14360 = args14358.length;
switch (G__14360) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14358.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var args14365 = [];
var len__8561__auto___14368 = arguments.length;
var i__8562__auto___14369 = (0);
while(true){
if((i__8562__auto___14369 < len__8561__auto___14368)){
args14365.push((arguments[i__8562__auto___14369]));

var G__14370 = (i__8562__auto___14369 + (1));
i__8562__auto___14369 = G__14370;
continue;
} else {
}
break;
}

var G__14367 = args14365.length;
switch (G__14367) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14365.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var args14372 = [];
var len__8561__auto___14425 = arguments.length;
var i__8562__auto___14426 = (0);
while(true){
if((i__8562__auto___14426 < len__8561__auto___14425)){
args14372.push((arguments[i__8562__auto___14426]));

var G__14427 = (i__8562__auto___14426 + (1));
i__8562__auto___14426 = G__14427;
continue;
} else {
}
break;
}

var G__14374 = args14372.length;
switch (G__14374) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14372.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10489__auto___14429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10489__auto___14429,tc,fc){
return (function (){
var f__10490__auto__ = (function (){var switch__10433__auto__ = ((function (c__10489__auto___14429,tc,fc){
return (function (state_14400){
var state_val_14401 = (state_14400[(1)]);
if((state_val_14401 === (7))){
var inst_14396 = (state_14400[(2)]);
var state_14400__$1 = state_14400;
var statearr_14402_14430 = state_14400__$1;
(statearr_14402_14430[(2)] = inst_14396);

(statearr_14402_14430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14401 === (1))){
var state_14400__$1 = state_14400;
var statearr_14403_14431 = state_14400__$1;
(statearr_14403_14431[(2)] = null);

(statearr_14403_14431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14401 === (4))){
var inst_14377 = (state_14400[(7)]);
var inst_14377__$1 = (state_14400[(2)]);
var inst_14378 = (inst_14377__$1 == null);
var state_14400__$1 = (function (){var statearr_14404 = state_14400;
(statearr_14404[(7)] = inst_14377__$1);

return statearr_14404;
})();
if(cljs.core.truth_(inst_14378)){
var statearr_14405_14432 = state_14400__$1;
(statearr_14405_14432[(1)] = (5));

} else {
var statearr_14406_14433 = state_14400__$1;
(statearr_14406_14433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14401 === (13))){
var state_14400__$1 = state_14400;
var statearr_14407_14434 = state_14400__$1;
(statearr_14407_14434[(2)] = null);

(statearr_14407_14434[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14401 === (6))){
var inst_14377 = (state_14400[(7)]);
var inst_14383 = p.call(null,inst_14377);
var state_14400__$1 = state_14400;
if(cljs.core.truth_(inst_14383)){
var statearr_14408_14435 = state_14400__$1;
(statearr_14408_14435[(1)] = (9));

} else {
var statearr_14409_14436 = state_14400__$1;
(statearr_14409_14436[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14401 === (3))){
var inst_14398 = (state_14400[(2)]);
var state_14400__$1 = state_14400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14400__$1,inst_14398);
} else {
if((state_val_14401 === (12))){
var state_14400__$1 = state_14400;
var statearr_14410_14437 = state_14400__$1;
(statearr_14410_14437[(2)] = null);

(statearr_14410_14437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14401 === (2))){
var state_14400__$1 = state_14400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14400__$1,(4),ch);
} else {
if((state_val_14401 === (11))){
var inst_14377 = (state_14400[(7)]);
var inst_14387 = (state_14400[(2)]);
var state_14400__$1 = state_14400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14400__$1,(8),inst_14387,inst_14377);
} else {
if((state_val_14401 === (9))){
var state_14400__$1 = state_14400;
var statearr_14411_14438 = state_14400__$1;
(statearr_14411_14438[(2)] = tc);

(statearr_14411_14438[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14401 === (5))){
var inst_14380 = cljs.core.async.close_BANG_.call(null,tc);
var inst_14381 = cljs.core.async.close_BANG_.call(null,fc);
var state_14400__$1 = (function (){var statearr_14412 = state_14400;
(statearr_14412[(8)] = inst_14380);

return statearr_14412;
})();
var statearr_14413_14439 = state_14400__$1;
(statearr_14413_14439[(2)] = inst_14381);

(statearr_14413_14439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14401 === (14))){
var inst_14394 = (state_14400[(2)]);
var state_14400__$1 = state_14400;
var statearr_14414_14440 = state_14400__$1;
(statearr_14414_14440[(2)] = inst_14394);

(statearr_14414_14440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14401 === (10))){
var state_14400__$1 = state_14400;
var statearr_14415_14441 = state_14400__$1;
(statearr_14415_14441[(2)] = fc);

(statearr_14415_14441[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14401 === (8))){
var inst_14389 = (state_14400[(2)]);
var state_14400__$1 = state_14400;
if(cljs.core.truth_(inst_14389)){
var statearr_14416_14442 = state_14400__$1;
(statearr_14416_14442[(1)] = (12));

} else {
var statearr_14417_14443 = state_14400__$1;
(statearr_14417_14443[(1)] = (13));

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
});})(c__10489__auto___14429,tc,fc))
;
return ((function (switch__10433__auto__,c__10489__auto___14429,tc,fc){
return (function() {
var cljs$core$async$state_machine__10434__auto__ = null;
var cljs$core$async$state_machine__10434__auto____0 = (function (){
var statearr_14421 = [null,null,null,null,null,null,null,null,null];
(statearr_14421[(0)] = cljs$core$async$state_machine__10434__auto__);

(statearr_14421[(1)] = (1));

return statearr_14421;
});
var cljs$core$async$state_machine__10434__auto____1 = (function (state_14400){
while(true){
var ret_value__10435__auto__ = (function (){try{while(true){
var result__10436__auto__ = switch__10433__auto__.call(null,state_14400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10436__auto__;
}
break;
}
}catch (e14422){if((e14422 instanceof Object)){
var ex__10437__auto__ = e14422;
var statearr_14423_14444 = state_14400;
(statearr_14423_14444[(5)] = ex__10437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14445 = state_14400;
state_14400 = G__14445;
continue;
} else {
return ret_value__10435__auto__;
}
break;
}
});
cljs$core$async$state_machine__10434__auto__ = function(state_14400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10434__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10434__auto____1.call(this,state_14400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10434__auto____0;
cljs$core$async$state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10434__auto____1;
return cljs$core$async$state_machine__10434__auto__;
})()
;})(switch__10433__auto__,c__10489__auto___14429,tc,fc))
})();
var state__10491__auto__ = (function (){var statearr_14424 = f__10490__auto__.call(null);
(statearr_14424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10489__auto___14429);

return statearr_14424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10491__auto__);
});})(c__10489__auto___14429,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__10489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10489__auto__){
return (function (){
var f__10490__auto__ = (function (){var switch__10433__auto__ = ((function (c__10489__auto__){
return (function (state_14509){
var state_val_14510 = (state_14509[(1)]);
if((state_val_14510 === (7))){
var inst_14505 = (state_14509[(2)]);
var state_14509__$1 = state_14509;
var statearr_14511_14532 = state_14509__$1;
(statearr_14511_14532[(2)] = inst_14505);

(statearr_14511_14532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14510 === (1))){
var inst_14489 = init;
var state_14509__$1 = (function (){var statearr_14512 = state_14509;
(statearr_14512[(7)] = inst_14489);

return statearr_14512;
})();
var statearr_14513_14533 = state_14509__$1;
(statearr_14513_14533[(2)] = null);

(statearr_14513_14533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14510 === (4))){
var inst_14492 = (state_14509[(8)]);
var inst_14492__$1 = (state_14509[(2)]);
var inst_14493 = (inst_14492__$1 == null);
var state_14509__$1 = (function (){var statearr_14514 = state_14509;
(statearr_14514[(8)] = inst_14492__$1);

return statearr_14514;
})();
if(cljs.core.truth_(inst_14493)){
var statearr_14515_14534 = state_14509__$1;
(statearr_14515_14534[(1)] = (5));

} else {
var statearr_14516_14535 = state_14509__$1;
(statearr_14516_14535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14510 === (6))){
var inst_14489 = (state_14509[(7)]);
var inst_14496 = (state_14509[(9)]);
var inst_14492 = (state_14509[(8)]);
var inst_14496__$1 = f.call(null,inst_14489,inst_14492);
var inst_14497 = cljs.core.reduced_QMARK_.call(null,inst_14496__$1);
var state_14509__$1 = (function (){var statearr_14517 = state_14509;
(statearr_14517[(9)] = inst_14496__$1);

return statearr_14517;
})();
if(inst_14497){
var statearr_14518_14536 = state_14509__$1;
(statearr_14518_14536[(1)] = (8));

} else {
var statearr_14519_14537 = state_14509__$1;
(statearr_14519_14537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14510 === (3))){
var inst_14507 = (state_14509[(2)]);
var state_14509__$1 = state_14509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14509__$1,inst_14507);
} else {
if((state_val_14510 === (2))){
var state_14509__$1 = state_14509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14509__$1,(4),ch);
} else {
if((state_val_14510 === (9))){
var inst_14496 = (state_14509[(9)]);
var inst_14489 = inst_14496;
var state_14509__$1 = (function (){var statearr_14520 = state_14509;
(statearr_14520[(7)] = inst_14489);

return statearr_14520;
})();
var statearr_14521_14538 = state_14509__$1;
(statearr_14521_14538[(2)] = null);

(statearr_14521_14538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14510 === (5))){
var inst_14489 = (state_14509[(7)]);
var state_14509__$1 = state_14509;
var statearr_14522_14539 = state_14509__$1;
(statearr_14522_14539[(2)] = inst_14489);

(statearr_14522_14539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14510 === (10))){
var inst_14503 = (state_14509[(2)]);
var state_14509__$1 = state_14509;
var statearr_14523_14540 = state_14509__$1;
(statearr_14523_14540[(2)] = inst_14503);

(statearr_14523_14540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14510 === (8))){
var inst_14496 = (state_14509[(9)]);
var inst_14499 = cljs.core.deref.call(null,inst_14496);
var state_14509__$1 = state_14509;
var statearr_14524_14541 = state_14509__$1;
(statearr_14524_14541[(2)] = inst_14499);

(statearr_14524_14541[(1)] = (10));


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
});})(c__10489__auto__))
;
return ((function (switch__10433__auto__,c__10489__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10434__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10434__auto____0 = (function (){
var statearr_14528 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14528[(0)] = cljs$core$async$reduce_$_state_machine__10434__auto__);

(statearr_14528[(1)] = (1));

return statearr_14528;
});
var cljs$core$async$reduce_$_state_machine__10434__auto____1 = (function (state_14509){
while(true){
var ret_value__10435__auto__ = (function (){try{while(true){
var result__10436__auto__ = switch__10433__auto__.call(null,state_14509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10436__auto__;
}
break;
}
}catch (e14529){if((e14529 instanceof Object)){
var ex__10437__auto__ = e14529;
var statearr_14530_14542 = state_14509;
(statearr_14530_14542[(5)] = ex__10437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14543 = state_14509;
state_14509 = G__14543;
continue;
} else {
return ret_value__10435__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10434__auto__ = function(state_14509){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10434__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10434__auto____1.call(this,state_14509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10434__auto____0;
cljs$core$async$reduce_$_state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10434__auto____1;
return cljs$core$async$reduce_$_state_machine__10434__auto__;
})()
;})(switch__10433__auto__,c__10489__auto__))
})();
var state__10491__auto__ = (function (){var statearr_14531 = f__10490__auto__.call(null);
(statearr_14531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10489__auto__);

return statearr_14531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10491__auto__);
});})(c__10489__auto__))
);

return c__10489__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__10489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10489__auto__,f__$1){
return (function (){
var f__10490__auto__ = (function (){var switch__10433__auto__ = ((function (c__10489__auto__,f__$1){
return (function (state_14563){
var state_val_14564 = (state_14563[(1)]);
if((state_val_14564 === (1))){
var inst_14558 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_14563__$1 = state_14563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14563__$1,(2),inst_14558);
} else {
if((state_val_14564 === (2))){
var inst_14560 = (state_14563[(2)]);
var inst_14561 = f__$1.call(null,inst_14560);
var state_14563__$1 = state_14563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14563__$1,inst_14561);
} else {
return null;
}
}
});})(c__10489__auto__,f__$1))
;
return ((function (switch__10433__auto__,c__10489__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__10434__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10434__auto____0 = (function (){
var statearr_14568 = [null,null,null,null,null,null,null];
(statearr_14568[(0)] = cljs$core$async$transduce_$_state_machine__10434__auto__);

(statearr_14568[(1)] = (1));

return statearr_14568;
});
var cljs$core$async$transduce_$_state_machine__10434__auto____1 = (function (state_14563){
while(true){
var ret_value__10435__auto__ = (function (){try{while(true){
var result__10436__auto__ = switch__10433__auto__.call(null,state_14563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10436__auto__;
}
break;
}
}catch (e14569){if((e14569 instanceof Object)){
var ex__10437__auto__ = e14569;
var statearr_14570_14572 = state_14563;
(statearr_14570_14572[(5)] = ex__10437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14573 = state_14563;
state_14563 = G__14573;
continue;
} else {
return ret_value__10435__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10434__auto__ = function(state_14563){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10434__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10434__auto____1.call(this,state_14563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10434__auto____0;
cljs$core$async$transduce_$_state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10434__auto____1;
return cljs$core$async$transduce_$_state_machine__10434__auto__;
})()
;})(switch__10433__auto__,c__10489__auto__,f__$1))
})();
var state__10491__auto__ = (function (){var statearr_14571 = f__10490__auto__.call(null);
(statearr_14571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10489__auto__);

return statearr_14571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10491__auto__);
});})(c__10489__auto__,f__$1))
);

return c__10489__auto__;
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
var args14574 = [];
var len__8561__auto___14626 = arguments.length;
var i__8562__auto___14627 = (0);
while(true){
if((i__8562__auto___14627 < len__8561__auto___14626)){
args14574.push((arguments[i__8562__auto___14627]));

var G__14628 = (i__8562__auto___14627 + (1));
i__8562__auto___14627 = G__14628;
continue;
} else {
}
break;
}

var G__14576 = args14574.length;
switch (G__14576) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14574.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10489__auto__){
return (function (){
var f__10490__auto__ = (function (){var switch__10433__auto__ = ((function (c__10489__auto__){
return (function (state_14601){
var state_val_14602 = (state_14601[(1)]);
if((state_val_14602 === (7))){
var inst_14583 = (state_14601[(2)]);
var state_14601__$1 = state_14601;
var statearr_14603_14630 = state_14601__$1;
(statearr_14603_14630[(2)] = inst_14583);

(statearr_14603_14630[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14602 === (1))){
var inst_14577 = cljs.core.seq.call(null,coll);
var inst_14578 = inst_14577;
var state_14601__$1 = (function (){var statearr_14604 = state_14601;
(statearr_14604[(7)] = inst_14578);

return statearr_14604;
})();
var statearr_14605_14631 = state_14601__$1;
(statearr_14605_14631[(2)] = null);

(statearr_14605_14631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14602 === (4))){
var inst_14578 = (state_14601[(7)]);
var inst_14581 = cljs.core.first.call(null,inst_14578);
var state_14601__$1 = state_14601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14601__$1,(7),ch,inst_14581);
} else {
if((state_val_14602 === (13))){
var inst_14595 = (state_14601[(2)]);
var state_14601__$1 = state_14601;
var statearr_14606_14632 = state_14601__$1;
(statearr_14606_14632[(2)] = inst_14595);

(statearr_14606_14632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14602 === (6))){
var inst_14586 = (state_14601[(2)]);
var state_14601__$1 = state_14601;
if(cljs.core.truth_(inst_14586)){
var statearr_14607_14633 = state_14601__$1;
(statearr_14607_14633[(1)] = (8));

} else {
var statearr_14608_14634 = state_14601__$1;
(statearr_14608_14634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14602 === (3))){
var inst_14599 = (state_14601[(2)]);
var state_14601__$1 = state_14601;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14601__$1,inst_14599);
} else {
if((state_val_14602 === (12))){
var state_14601__$1 = state_14601;
var statearr_14609_14635 = state_14601__$1;
(statearr_14609_14635[(2)] = null);

(statearr_14609_14635[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14602 === (2))){
var inst_14578 = (state_14601[(7)]);
var state_14601__$1 = state_14601;
if(cljs.core.truth_(inst_14578)){
var statearr_14610_14636 = state_14601__$1;
(statearr_14610_14636[(1)] = (4));

} else {
var statearr_14611_14637 = state_14601__$1;
(statearr_14611_14637[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14602 === (11))){
var inst_14592 = cljs.core.async.close_BANG_.call(null,ch);
var state_14601__$1 = state_14601;
var statearr_14612_14638 = state_14601__$1;
(statearr_14612_14638[(2)] = inst_14592);

(statearr_14612_14638[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14602 === (9))){
var state_14601__$1 = state_14601;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14613_14639 = state_14601__$1;
(statearr_14613_14639[(1)] = (11));

} else {
var statearr_14614_14640 = state_14601__$1;
(statearr_14614_14640[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14602 === (5))){
var inst_14578 = (state_14601[(7)]);
var state_14601__$1 = state_14601;
var statearr_14615_14641 = state_14601__$1;
(statearr_14615_14641[(2)] = inst_14578);

(statearr_14615_14641[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14602 === (10))){
var inst_14597 = (state_14601[(2)]);
var state_14601__$1 = state_14601;
var statearr_14616_14642 = state_14601__$1;
(statearr_14616_14642[(2)] = inst_14597);

(statearr_14616_14642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14602 === (8))){
var inst_14578 = (state_14601[(7)]);
var inst_14588 = cljs.core.next.call(null,inst_14578);
var inst_14578__$1 = inst_14588;
var state_14601__$1 = (function (){var statearr_14617 = state_14601;
(statearr_14617[(7)] = inst_14578__$1);

return statearr_14617;
})();
var statearr_14618_14643 = state_14601__$1;
(statearr_14618_14643[(2)] = null);

(statearr_14618_14643[(1)] = (2));


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
});})(c__10489__auto__))
;
return ((function (switch__10433__auto__,c__10489__auto__){
return (function() {
var cljs$core$async$state_machine__10434__auto__ = null;
var cljs$core$async$state_machine__10434__auto____0 = (function (){
var statearr_14622 = [null,null,null,null,null,null,null,null];
(statearr_14622[(0)] = cljs$core$async$state_machine__10434__auto__);

(statearr_14622[(1)] = (1));

return statearr_14622;
});
var cljs$core$async$state_machine__10434__auto____1 = (function (state_14601){
while(true){
var ret_value__10435__auto__ = (function (){try{while(true){
var result__10436__auto__ = switch__10433__auto__.call(null,state_14601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10436__auto__;
}
break;
}
}catch (e14623){if((e14623 instanceof Object)){
var ex__10437__auto__ = e14623;
var statearr_14624_14644 = state_14601;
(statearr_14624_14644[(5)] = ex__10437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14645 = state_14601;
state_14601 = G__14645;
continue;
} else {
return ret_value__10435__auto__;
}
break;
}
});
cljs$core$async$state_machine__10434__auto__ = function(state_14601){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10434__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10434__auto____1.call(this,state_14601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10434__auto____0;
cljs$core$async$state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10434__auto____1;
return cljs$core$async$state_machine__10434__auto__;
})()
;})(switch__10433__auto__,c__10489__auto__))
})();
var state__10491__auto__ = (function (){var statearr_14625 = f__10490__auto__.call(null);
(statearr_14625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10489__auto__);

return statearr_14625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10491__auto__);
});})(c__10489__auto__))
);

return c__10489__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

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
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__8116__auto__ = (((_ == null))?null:_);
var m__8117__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8116__auto__)]);
if(!((m__8117__auto__ == null))){
return m__8117__auto__.call(null,_);
} else {
var m__8117__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__8117__auto____$1 == null))){
return m__8117__auto____$1.call(null,_);
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
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__8116__auto__ = (((m == null))?null:m);
var m__8117__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8116__auto__)]);
if(!((m__8117__auto__ == null))){
return m__8117__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__8117__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__8117__auto____$1 == null))){
return m__8117__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__8116__auto__ = (((m == null))?null:m);
var m__8117__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8116__auto__)]);
if(!((m__8117__auto__ == null))){
return m__8117__auto__.call(null,m,ch);
} else {
var m__8117__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__8117__auto____$1 == null))){
return m__8117__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__8116__auto__ = (((m == null))?null:m);
var m__8117__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8116__auto__)]);
if(!((m__8117__auto__ == null))){
return m__8117__auto__.call(null,m);
} else {
var m__8117__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__8117__auto____$1 == null))){
return m__8117__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async14871 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14871 = (function (ch,cs,meta14872){
this.ch = ch;
this.cs = cs;
this.meta14872 = meta14872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14873,meta14872__$1){
var self__ = this;
var _14873__$1 = this;
return (new cljs.core.async.t_cljs$core$async14871(self__.ch,self__.cs,meta14872__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14871.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14873){
var self__ = this;
var _14873__$1 = this;
return self__.meta14872;
});})(cs))
;

cljs.core.async.t_cljs$core$async14871.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14871.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14871.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14871.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14871.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14871.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14871.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14872","meta14872",1343441900,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14871.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14871";

cljs.core.async.t_cljs$core$async14871.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8059__auto__,writer__8060__auto__,opt__8061__auto__){
return cljs.core._write.call(null,writer__8060__auto__,"cljs.core.async/t_cljs$core$async14871");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async14871 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14871(ch__$1,cs__$1,meta14872){
return (new cljs.core.async.t_cljs$core$async14871(ch__$1,cs__$1,meta14872));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14871(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__10489__auto___15096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10489__auto___15096,cs,m,dchan,dctr,done){
return (function (){
var f__10490__auto__ = (function (){var switch__10433__auto__ = ((function (c__10489__auto___15096,cs,m,dchan,dctr,done){
return (function (state_15008){
var state_val_15009 = (state_15008[(1)]);
if((state_val_15009 === (7))){
var inst_15004 = (state_15008[(2)]);
var state_15008__$1 = state_15008;
var statearr_15010_15097 = state_15008__$1;
(statearr_15010_15097[(2)] = inst_15004);

(statearr_15010_15097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (20))){
var inst_14907 = (state_15008[(7)]);
var inst_14919 = cljs.core.first.call(null,inst_14907);
var inst_14920 = cljs.core.nth.call(null,inst_14919,(0),null);
var inst_14921 = cljs.core.nth.call(null,inst_14919,(1),null);
var state_15008__$1 = (function (){var statearr_15011 = state_15008;
(statearr_15011[(8)] = inst_14920);

return statearr_15011;
})();
if(cljs.core.truth_(inst_14921)){
var statearr_15012_15098 = state_15008__$1;
(statearr_15012_15098[(1)] = (22));

} else {
var statearr_15013_15099 = state_15008__$1;
(statearr_15013_15099[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (27))){
var inst_14949 = (state_15008[(9)]);
var inst_14951 = (state_15008[(10)]);
var inst_14876 = (state_15008[(11)]);
var inst_14956 = (state_15008[(12)]);
var inst_14956__$1 = cljs.core._nth.call(null,inst_14949,inst_14951);
var inst_14957 = cljs.core.async.put_BANG_.call(null,inst_14956__$1,inst_14876,done);
var state_15008__$1 = (function (){var statearr_15014 = state_15008;
(statearr_15014[(12)] = inst_14956__$1);

return statearr_15014;
})();
if(cljs.core.truth_(inst_14957)){
var statearr_15015_15100 = state_15008__$1;
(statearr_15015_15100[(1)] = (30));

} else {
var statearr_15016_15101 = state_15008__$1;
(statearr_15016_15101[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (1))){
var state_15008__$1 = state_15008;
var statearr_15017_15102 = state_15008__$1;
(statearr_15017_15102[(2)] = null);

(statearr_15017_15102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (24))){
var inst_14907 = (state_15008[(7)]);
var inst_14926 = (state_15008[(2)]);
var inst_14927 = cljs.core.next.call(null,inst_14907);
var inst_14885 = inst_14927;
var inst_14886 = null;
var inst_14887 = (0);
var inst_14888 = (0);
var state_15008__$1 = (function (){var statearr_15018 = state_15008;
(statearr_15018[(13)] = inst_14886);

(statearr_15018[(14)] = inst_14887);

(statearr_15018[(15)] = inst_14926);

(statearr_15018[(16)] = inst_14885);

(statearr_15018[(17)] = inst_14888);

return statearr_15018;
})();
var statearr_15019_15103 = state_15008__$1;
(statearr_15019_15103[(2)] = null);

(statearr_15019_15103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (39))){
var state_15008__$1 = state_15008;
var statearr_15023_15104 = state_15008__$1;
(statearr_15023_15104[(2)] = null);

(statearr_15023_15104[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (4))){
var inst_14876 = (state_15008[(11)]);
var inst_14876__$1 = (state_15008[(2)]);
var inst_14877 = (inst_14876__$1 == null);
var state_15008__$1 = (function (){var statearr_15024 = state_15008;
(statearr_15024[(11)] = inst_14876__$1);

return statearr_15024;
})();
if(cljs.core.truth_(inst_14877)){
var statearr_15025_15105 = state_15008__$1;
(statearr_15025_15105[(1)] = (5));

} else {
var statearr_15026_15106 = state_15008__$1;
(statearr_15026_15106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (15))){
var inst_14886 = (state_15008[(13)]);
var inst_14887 = (state_15008[(14)]);
var inst_14885 = (state_15008[(16)]);
var inst_14888 = (state_15008[(17)]);
var inst_14903 = (state_15008[(2)]);
var inst_14904 = (inst_14888 + (1));
var tmp15020 = inst_14886;
var tmp15021 = inst_14887;
var tmp15022 = inst_14885;
var inst_14885__$1 = tmp15022;
var inst_14886__$1 = tmp15020;
var inst_14887__$1 = tmp15021;
var inst_14888__$1 = inst_14904;
var state_15008__$1 = (function (){var statearr_15027 = state_15008;
(statearr_15027[(13)] = inst_14886__$1);

(statearr_15027[(18)] = inst_14903);

(statearr_15027[(14)] = inst_14887__$1);

(statearr_15027[(16)] = inst_14885__$1);

(statearr_15027[(17)] = inst_14888__$1);

return statearr_15027;
})();
var statearr_15028_15107 = state_15008__$1;
(statearr_15028_15107[(2)] = null);

(statearr_15028_15107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (21))){
var inst_14930 = (state_15008[(2)]);
var state_15008__$1 = state_15008;
var statearr_15032_15108 = state_15008__$1;
(statearr_15032_15108[(2)] = inst_14930);

(statearr_15032_15108[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (31))){
var inst_14956 = (state_15008[(12)]);
var inst_14960 = done.call(null,null);
var inst_14961 = cljs.core.async.untap_STAR_.call(null,m,inst_14956);
var state_15008__$1 = (function (){var statearr_15033 = state_15008;
(statearr_15033[(19)] = inst_14960);

return statearr_15033;
})();
var statearr_15034_15109 = state_15008__$1;
(statearr_15034_15109[(2)] = inst_14961);

(statearr_15034_15109[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (32))){
var inst_14950 = (state_15008[(20)]);
var inst_14949 = (state_15008[(9)]);
var inst_14951 = (state_15008[(10)]);
var inst_14948 = (state_15008[(21)]);
var inst_14963 = (state_15008[(2)]);
var inst_14964 = (inst_14951 + (1));
var tmp15029 = inst_14950;
var tmp15030 = inst_14949;
var tmp15031 = inst_14948;
var inst_14948__$1 = tmp15031;
var inst_14949__$1 = tmp15030;
var inst_14950__$1 = tmp15029;
var inst_14951__$1 = inst_14964;
var state_15008__$1 = (function (){var statearr_15035 = state_15008;
(statearr_15035[(20)] = inst_14950__$1);

(statearr_15035[(22)] = inst_14963);

(statearr_15035[(9)] = inst_14949__$1);

(statearr_15035[(10)] = inst_14951__$1);

(statearr_15035[(21)] = inst_14948__$1);

return statearr_15035;
})();
var statearr_15036_15110 = state_15008__$1;
(statearr_15036_15110[(2)] = null);

(statearr_15036_15110[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (40))){
var inst_14976 = (state_15008[(23)]);
var inst_14980 = done.call(null,null);
var inst_14981 = cljs.core.async.untap_STAR_.call(null,m,inst_14976);
var state_15008__$1 = (function (){var statearr_15037 = state_15008;
(statearr_15037[(24)] = inst_14980);

return statearr_15037;
})();
var statearr_15038_15111 = state_15008__$1;
(statearr_15038_15111[(2)] = inst_14981);

(statearr_15038_15111[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (33))){
var inst_14967 = (state_15008[(25)]);
var inst_14969 = cljs.core.chunked_seq_QMARK_.call(null,inst_14967);
var state_15008__$1 = state_15008;
if(inst_14969){
var statearr_15039_15112 = state_15008__$1;
(statearr_15039_15112[(1)] = (36));

} else {
var statearr_15040_15113 = state_15008__$1;
(statearr_15040_15113[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (13))){
var inst_14897 = (state_15008[(26)]);
var inst_14900 = cljs.core.async.close_BANG_.call(null,inst_14897);
var state_15008__$1 = state_15008;
var statearr_15041_15114 = state_15008__$1;
(statearr_15041_15114[(2)] = inst_14900);

(statearr_15041_15114[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (22))){
var inst_14920 = (state_15008[(8)]);
var inst_14923 = cljs.core.async.close_BANG_.call(null,inst_14920);
var state_15008__$1 = state_15008;
var statearr_15042_15115 = state_15008__$1;
(statearr_15042_15115[(2)] = inst_14923);

(statearr_15042_15115[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (36))){
var inst_14967 = (state_15008[(25)]);
var inst_14971 = cljs.core.chunk_first.call(null,inst_14967);
var inst_14972 = cljs.core.chunk_rest.call(null,inst_14967);
var inst_14973 = cljs.core.count.call(null,inst_14971);
var inst_14948 = inst_14972;
var inst_14949 = inst_14971;
var inst_14950 = inst_14973;
var inst_14951 = (0);
var state_15008__$1 = (function (){var statearr_15043 = state_15008;
(statearr_15043[(20)] = inst_14950);

(statearr_15043[(9)] = inst_14949);

(statearr_15043[(10)] = inst_14951);

(statearr_15043[(21)] = inst_14948);

return statearr_15043;
})();
var statearr_15044_15116 = state_15008__$1;
(statearr_15044_15116[(2)] = null);

(statearr_15044_15116[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (41))){
var inst_14967 = (state_15008[(25)]);
var inst_14983 = (state_15008[(2)]);
var inst_14984 = cljs.core.next.call(null,inst_14967);
var inst_14948 = inst_14984;
var inst_14949 = null;
var inst_14950 = (0);
var inst_14951 = (0);
var state_15008__$1 = (function (){var statearr_15045 = state_15008;
(statearr_15045[(20)] = inst_14950);

(statearr_15045[(9)] = inst_14949);

(statearr_15045[(27)] = inst_14983);

(statearr_15045[(10)] = inst_14951);

(statearr_15045[(21)] = inst_14948);

return statearr_15045;
})();
var statearr_15046_15117 = state_15008__$1;
(statearr_15046_15117[(2)] = null);

(statearr_15046_15117[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (43))){
var state_15008__$1 = state_15008;
var statearr_15047_15118 = state_15008__$1;
(statearr_15047_15118[(2)] = null);

(statearr_15047_15118[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (29))){
var inst_14992 = (state_15008[(2)]);
var state_15008__$1 = state_15008;
var statearr_15048_15119 = state_15008__$1;
(statearr_15048_15119[(2)] = inst_14992);

(statearr_15048_15119[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (44))){
var inst_15001 = (state_15008[(2)]);
var state_15008__$1 = (function (){var statearr_15049 = state_15008;
(statearr_15049[(28)] = inst_15001);

return statearr_15049;
})();
var statearr_15050_15120 = state_15008__$1;
(statearr_15050_15120[(2)] = null);

(statearr_15050_15120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (6))){
var inst_14940 = (state_15008[(29)]);
var inst_14939 = cljs.core.deref.call(null,cs);
var inst_14940__$1 = cljs.core.keys.call(null,inst_14939);
var inst_14941 = cljs.core.count.call(null,inst_14940__$1);
var inst_14942 = cljs.core.reset_BANG_.call(null,dctr,inst_14941);
var inst_14947 = cljs.core.seq.call(null,inst_14940__$1);
var inst_14948 = inst_14947;
var inst_14949 = null;
var inst_14950 = (0);
var inst_14951 = (0);
var state_15008__$1 = (function (){var statearr_15051 = state_15008;
(statearr_15051[(29)] = inst_14940__$1);

(statearr_15051[(20)] = inst_14950);

(statearr_15051[(9)] = inst_14949);

(statearr_15051[(10)] = inst_14951);

(statearr_15051[(30)] = inst_14942);

(statearr_15051[(21)] = inst_14948);

return statearr_15051;
})();
var statearr_15052_15121 = state_15008__$1;
(statearr_15052_15121[(2)] = null);

(statearr_15052_15121[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (28))){
var inst_14967 = (state_15008[(25)]);
var inst_14948 = (state_15008[(21)]);
var inst_14967__$1 = cljs.core.seq.call(null,inst_14948);
var state_15008__$1 = (function (){var statearr_15053 = state_15008;
(statearr_15053[(25)] = inst_14967__$1);

return statearr_15053;
})();
if(inst_14967__$1){
var statearr_15054_15122 = state_15008__$1;
(statearr_15054_15122[(1)] = (33));

} else {
var statearr_15055_15123 = state_15008__$1;
(statearr_15055_15123[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (25))){
var inst_14950 = (state_15008[(20)]);
var inst_14951 = (state_15008[(10)]);
var inst_14953 = (inst_14951 < inst_14950);
var inst_14954 = inst_14953;
var state_15008__$1 = state_15008;
if(cljs.core.truth_(inst_14954)){
var statearr_15056_15124 = state_15008__$1;
(statearr_15056_15124[(1)] = (27));

} else {
var statearr_15057_15125 = state_15008__$1;
(statearr_15057_15125[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (34))){
var state_15008__$1 = state_15008;
var statearr_15058_15126 = state_15008__$1;
(statearr_15058_15126[(2)] = null);

(statearr_15058_15126[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (17))){
var state_15008__$1 = state_15008;
var statearr_15059_15127 = state_15008__$1;
(statearr_15059_15127[(2)] = null);

(statearr_15059_15127[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (3))){
var inst_15006 = (state_15008[(2)]);
var state_15008__$1 = state_15008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15008__$1,inst_15006);
} else {
if((state_val_15009 === (12))){
var inst_14935 = (state_15008[(2)]);
var state_15008__$1 = state_15008;
var statearr_15060_15128 = state_15008__$1;
(statearr_15060_15128[(2)] = inst_14935);

(statearr_15060_15128[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (2))){
var state_15008__$1 = state_15008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15008__$1,(4),ch);
} else {
if((state_val_15009 === (23))){
var state_15008__$1 = state_15008;
var statearr_15061_15129 = state_15008__$1;
(statearr_15061_15129[(2)] = null);

(statearr_15061_15129[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (35))){
var inst_14990 = (state_15008[(2)]);
var state_15008__$1 = state_15008;
var statearr_15062_15130 = state_15008__$1;
(statearr_15062_15130[(2)] = inst_14990);

(statearr_15062_15130[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (19))){
var inst_14907 = (state_15008[(7)]);
var inst_14911 = cljs.core.chunk_first.call(null,inst_14907);
var inst_14912 = cljs.core.chunk_rest.call(null,inst_14907);
var inst_14913 = cljs.core.count.call(null,inst_14911);
var inst_14885 = inst_14912;
var inst_14886 = inst_14911;
var inst_14887 = inst_14913;
var inst_14888 = (0);
var state_15008__$1 = (function (){var statearr_15063 = state_15008;
(statearr_15063[(13)] = inst_14886);

(statearr_15063[(14)] = inst_14887);

(statearr_15063[(16)] = inst_14885);

(statearr_15063[(17)] = inst_14888);

return statearr_15063;
})();
var statearr_15064_15131 = state_15008__$1;
(statearr_15064_15131[(2)] = null);

(statearr_15064_15131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (11))){
var inst_14907 = (state_15008[(7)]);
var inst_14885 = (state_15008[(16)]);
var inst_14907__$1 = cljs.core.seq.call(null,inst_14885);
var state_15008__$1 = (function (){var statearr_15065 = state_15008;
(statearr_15065[(7)] = inst_14907__$1);

return statearr_15065;
})();
if(inst_14907__$1){
var statearr_15066_15132 = state_15008__$1;
(statearr_15066_15132[(1)] = (16));

} else {
var statearr_15067_15133 = state_15008__$1;
(statearr_15067_15133[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (9))){
var inst_14937 = (state_15008[(2)]);
var state_15008__$1 = state_15008;
var statearr_15068_15134 = state_15008__$1;
(statearr_15068_15134[(2)] = inst_14937);

(statearr_15068_15134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (5))){
var inst_14883 = cljs.core.deref.call(null,cs);
var inst_14884 = cljs.core.seq.call(null,inst_14883);
var inst_14885 = inst_14884;
var inst_14886 = null;
var inst_14887 = (0);
var inst_14888 = (0);
var state_15008__$1 = (function (){var statearr_15069 = state_15008;
(statearr_15069[(13)] = inst_14886);

(statearr_15069[(14)] = inst_14887);

(statearr_15069[(16)] = inst_14885);

(statearr_15069[(17)] = inst_14888);

return statearr_15069;
})();
var statearr_15070_15135 = state_15008__$1;
(statearr_15070_15135[(2)] = null);

(statearr_15070_15135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (14))){
var state_15008__$1 = state_15008;
var statearr_15071_15136 = state_15008__$1;
(statearr_15071_15136[(2)] = null);

(statearr_15071_15136[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (45))){
var inst_14998 = (state_15008[(2)]);
var state_15008__$1 = state_15008;
var statearr_15072_15137 = state_15008__$1;
(statearr_15072_15137[(2)] = inst_14998);

(statearr_15072_15137[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (26))){
var inst_14940 = (state_15008[(29)]);
var inst_14994 = (state_15008[(2)]);
var inst_14995 = cljs.core.seq.call(null,inst_14940);
var state_15008__$1 = (function (){var statearr_15073 = state_15008;
(statearr_15073[(31)] = inst_14994);

return statearr_15073;
})();
if(inst_14995){
var statearr_15074_15138 = state_15008__$1;
(statearr_15074_15138[(1)] = (42));

} else {
var statearr_15075_15139 = state_15008__$1;
(statearr_15075_15139[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (16))){
var inst_14907 = (state_15008[(7)]);
var inst_14909 = cljs.core.chunked_seq_QMARK_.call(null,inst_14907);
var state_15008__$1 = state_15008;
if(inst_14909){
var statearr_15076_15140 = state_15008__$1;
(statearr_15076_15140[(1)] = (19));

} else {
var statearr_15077_15141 = state_15008__$1;
(statearr_15077_15141[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (38))){
var inst_14987 = (state_15008[(2)]);
var state_15008__$1 = state_15008;
var statearr_15078_15142 = state_15008__$1;
(statearr_15078_15142[(2)] = inst_14987);

(statearr_15078_15142[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (30))){
var state_15008__$1 = state_15008;
var statearr_15079_15143 = state_15008__$1;
(statearr_15079_15143[(2)] = null);

(statearr_15079_15143[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (10))){
var inst_14886 = (state_15008[(13)]);
var inst_14888 = (state_15008[(17)]);
var inst_14896 = cljs.core._nth.call(null,inst_14886,inst_14888);
var inst_14897 = cljs.core.nth.call(null,inst_14896,(0),null);
var inst_14898 = cljs.core.nth.call(null,inst_14896,(1),null);
var state_15008__$1 = (function (){var statearr_15080 = state_15008;
(statearr_15080[(26)] = inst_14897);

return statearr_15080;
})();
if(cljs.core.truth_(inst_14898)){
var statearr_15081_15144 = state_15008__$1;
(statearr_15081_15144[(1)] = (13));

} else {
var statearr_15082_15145 = state_15008__$1;
(statearr_15082_15145[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (18))){
var inst_14933 = (state_15008[(2)]);
var state_15008__$1 = state_15008;
var statearr_15083_15146 = state_15008__$1;
(statearr_15083_15146[(2)] = inst_14933);

(statearr_15083_15146[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (42))){
var state_15008__$1 = state_15008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15008__$1,(45),dchan);
} else {
if((state_val_15009 === (37))){
var inst_14976 = (state_15008[(23)]);
var inst_14967 = (state_15008[(25)]);
var inst_14876 = (state_15008[(11)]);
var inst_14976__$1 = cljs.core.first.call(null,inst_14967);
var inst_14977 = cljs.core.async.put_BANG_.call(null,inst_14976__$1,inst_14876,done);
var state_15008__$1 = (function (){var statearr_15084 = state_15008;
(statearr_15084[(23)] = inst_14976__$1);

return statearr_15084;
})();
if(cljs.core.truth_(inst_14977)){
var statearr_15085_15147 = state_15008__$1;
(statearr_15085_15147[(1)] = (39));

} else {
var statearr_15086_15148 = state_15008__$1;
(statearr_15086_15148[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15009 === (8))){
var inst_14887 = (state_15008[(14)]);
var inst_14888 = (state_15008[(17)]);
var inst_14890 = (inst_14888 < inst_14887);
var inst_14891 = inst_14890;
var state_15008__$1 = state_15008;
if(cljs.core.truth_(inst_14891)){
var statearr_15087_15149 = state_15008__$1;
(statearr_15087_15149[(1)] = (10));

} else {
var statearr_15088_15150 = state_15008__$1;
(statearr_15088_15150[(1)] = (11));

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
});})(c__10489__auto___15096,cs,m,dchan,dctr,done))
;
return ((function (switch__10433__auto__,c__10489__auto___15096,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10434__auto__ = null;
var cljs$core$async$mult_$_state_machine__10434__auto____0 = (function (){
var statearr_15092 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15092[(0)] = cljs$core$async$mult_$_state_machine__10434__auto__);

(statearr_15092[(1)] = (1));

return statearr_15092;
});
var cljs$core$async$mult_$_state_machine__10434__auto____1 = (function (state_15008){
while(true){
var ret_value__10435__auto__ = (function (){try{while(true){
var result__10436__auto__ = switch__10433__auto__.call(null,state_15008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10436__auto__;
}
break;
}
}catch (e15093){if((e15093 instanceof Object)){
var ex__10437__auto__ = e15093;
var statearr_15094_15151 = state_15008;
(statearr_15094_15151[(5)] = ex__10437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15152 = state_15008;
state_15008 = G__15152;
continue;
} else {
return ret_value__10435__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10434__auto__ = function(state_15008){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10434__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10434__auto____1.call(this,state_15008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10434__auto____0;
cljs$core$async$mult_$_state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10434__auto____1;
return cljs$core$async$mult_$_state_machine__10434__auto__;
})()
;})(switch__10433__auto__,c__10489__auto___15096,cs,m,dchan,dctr,done))
})();
var state__10491__auto__ = (function (){var statearr_15095 = f__10490__auto__.call(null);
(statearr_15095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10489__auto___15096);

return statearr_15095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10491__auto__);
});})(c__10489__auto___15096,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args15153 = [];
var len__8561__auto___15156 = arguments.length;
var i__8562__auto___15157 = (0);
while(true){
if((i__8562__auto___15157 < len__8561__auto___15156)){
args15153.push((arguments[i__8562__auto___15157]));

var G__15158 = (i__8562__auto___15157 + (1));
i__8562__auto___15157 = G__15158;
continue;
} else {
}
break;
}

var G__15155 = args15153.length;
switch (G__15155) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15153.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

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
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__8116__auto__ = (((m == null))?null:m);
var m__8117__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8116__auto__)]);
if(!((m__8117__auto__ == null))){
return m__8117__auto__.call(null,m,ch);
} else {
var m__8117__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__8117__auto____$1 == null))){
return m__8117__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__8116__auto__ = (((m == null))?null:m);
var m__8117__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8116__auto__)]);
if(!((m__8117__auto__ == null))){
return m__8117__auto__.call(null,m,ch);
} else {
var m__8117__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__8117__auto____$1 == null))){
return m__8117__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__8116__auto__ = (((m == null))?null:m);
var m__8117__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8116__auto__)]);
if(!((m__8117__auto__ == null))){
return m__8117__auto__.call(null,m);
} else {
var m__8117__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__8117__auto____$1 == null))){
return m__8117__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__8116__auto__ = (((m == null))?null:m);
var m__8117__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8116__auto__)]);
if(!((m__8117__auto__ == null))){
return m__8117__auto__.call(null,m,state_map);
} else {
var m__8117__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__8117__auto____$1 == null))){
return m__8117__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__8116__auto__ = (((m == null))?null:m);
var m__8117__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8116__auto__)]);
if(!((m__8117__auto__ == null))){
return m__8117__auto__.call(null,m,mode);
} else {
var m__8117__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__8117__auto____$1 == null))){
return m__8117__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15170 = arguments.length;
var i__8562__auto___15171 = (0);
while(true){
if((i__8562__auto___15171 < len__8561__auto___15170)){
args__8568__auto__.push((arguments[i__8562__auto___15171]));

var G__15172 = (i__8562__auto___15171 + (1));
i__8562__auto___15171 = G__15172;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((3) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8569__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15164){
var map__15165 = p__15164;
var map__15165__$1 = ((((!((map__15165 == null)))?((((map__15165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15165.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15165):map__15165);
var opts = map__15165__$1;
var statearr_15167_15173 = state;
(statearr_15167_15173[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__15165,map__15165__$1,opts){
return (function (val){
var statearr_15168_15174 = state;
(statearr_15168_15174[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__15165,map__15165__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_15169_15175 = state;
(statearr_15169_15175[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15160){
var G__15161 = cljs.core.first.call(null,seq15160);
var seq15160__$1 = cljs.core.next.call(null,seq15160);
var G__15162 = cljs.core.first.call(null,seq15160__$1);
var seq15160__$2 = cljs.core.next.call(null,seq15160__$1);
var G__15163 = cljs.core.first.call(null,seq15160__$2);
var seq15160__$3 = cljs.core.next.call(null,seq15160__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15161,G__15162,G__15163,seq15160__$3);
});

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
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15343 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15343 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta15344){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta15344 = meta15344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15345,meta15344__$1){
var self__ = this;
var _15345__$1 = this;
return (new cljs.core.async.t_cljs$core$async15343(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta15344__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15343.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15345){
var self__ = this;
var _15345__$1 = this;
return self__.meta15344;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15343.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15343.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15343.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15343.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15343.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15343.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15343.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15343.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15343.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta15344","meta15344",-544903490,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15343.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15343.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15343";

cljs.core.async.t_cljs$core$async15343.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8059__auto__,writer__8060__auto__,opt__8061__auto__){
return cljs.core._write.call(null,writer__8060__auto__,"cljs.core.async/t_cljs$core$async15343");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async15343 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async15343(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta15344){
return (new cljs.core.async.t_cljs$core$async15343(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta15344));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async15343(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10489__auto___15510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10489__auto___15510,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10490__auto__ = (function (){var switch__10433__auto__ = ((function (c__10489__auto___15510,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15447){
var state_val_15448 = (state_15447[(1)]);
if((state_val_15448 === (7))){
var inst_15362 = (state_15447[(2)]);
var state_15447__$1 = state_15447;
var statearr_15449_15511 = state_15447__$1;
(statearr_15449_15511[(2)] = inst_15362);

(statearr_15449_15511[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (20))){
var inst_15374 = (state_15447[(7)]);
var state_15447__$1 = state_15447;
var statearr_15450_15512 = state_15447__$1;
(statearr_15450_15512[(2)] = inst_15374);

(statearr_15450_15512[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (27))){
var state_15447__$1 = state_15447;
var statearr_15451_15513 = state_15447__$1;
(statearr_15451_15513[(2)] = null);

(statearr_15451_15513[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (1))){
var inst_15349 = (state_15447[(8)]);
var inst_15349__$1 = calc_state.call(null);
var inst_15351 = (inst_15349__$1 == null);
var inst_15352 = cljs.core.not.call(null,inst_15351);
var state_15447__$1 = (function (){var statearr_15452 = state_15447;
(statearr_15452[(8)] = inst_15349__$1);

return statearr_15452;
})();
if(inst_15352){
var statearr_15453_15514 = state_15447__$1;
(statearr_15453_15514[(1)] = (2));

} else {
var statearr_15454_15515 = state_15447__$1;
(statearr_15454_15515[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (24))){
var inst_15398 = (state_15447[(9)]);
var inst_15407 = (state_15447[(10)]);
var inst_15421 = (state_15447[(11)]);
var inst_15421__$1 = inst_15398.call(null,inst_15407);
var state_15447__$1 = (function (){var statearr_15455 = state_15447;
(statearr_15455[(11)] = inst_15421__$1);

return statearr_15455;
})();
if(cljs.core.truth_(inst_15421__$1)){
var statearr_15456_15516 = state_15447__$1;
(statearr_15456_15516[(1)] = (29));

} else {
var statearr_15457_15517 = state_15447__$1;
(statearr_15457_15517[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (4))){
var inst_15365 = (state_15447[(2)]);
var state_15447__$1 = state_15447;
if(cljs.core.truth_(inst_15365)){
var statearr_15458_15518 = state_15447__$1;
(statearr_15458_15518[(1)] = (8));

} else {
var statearr_15459_15519 = state_15447__$1;
(statearr_15459_15519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (15))){
var inst_15392 = (state_15447[(2)]);
var state_15447__$1 = state_15447;
if(cljs.core.truth_(inst_15392)){
var statearr_15460_15520 = state_15447__$1;
(statearr_15460_15520[(1)] = (19));

} else {
var statearr_15461_15521 = state_15447__$1;
(statearr_15461_15521[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (21))){
var inst_15397 = (state_15447[(12)]);
var inst_15397__$1 = (state_15447[(2)]);
var inst_15398 = cljs.core.get.call(null,inst_15397__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15399 = cljs.core.get.call(null,inst_15397__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15400 = cljs.core.get.call(null,inst_15397__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15447__$1 = (function (){var statearr_15462 = state_15447;
(statearr_15462[(9)] = inst_15398);

(statearr_15462[(13)] = inst_15399);

(statearr_15462[(12)] = inst_15397__$1);

return statearr_15462;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_15447__$1,(22),inst_15400);
} else {
if((state_val_15448 === (31))){
var inst_15429 = (state_15447[(2)]);
var state_15447__$1 = state_15447;
if(cljs.core.truth_(inst_15429)){
var statearr_15463_15522 = state_15447__$1;
(statearr_15463_15522[(1)] = (32));

} else {
var statearr_15464_15523 = state_15447__$1;
(statearr_15464_15523[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (32))){
var inst_15406 = (state_15447[(14)]);
var state_15447__$1 = state_15447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15447__$1,(35),out,inst_15406);
} else {
if((state_val_15448 === (33))){
var inst_15397 = (state_15447[(12)]);
var inst_15374 = inst_15397;
var state_15447__$1 = (function (){var statearr_15465 = state_15447;
(statearr_15465[(7)] = inst_15374);

return statearr_15465;
})();
var statearr_15466_15524 = state_15447__$1;
(statearr_15466_15524[(2)] = null);

(statearr_15466_15524[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (13))){
var inst_15374 = (state_15447[(7)]);
var inst_15381 = inst_15374.cljs$lang$protocol_mask$partition0$;
var inst_15382 = (inst_15381 & (64));
var inst_15383 = inst_15374.cljs$core$ISeq$;
var inst_15384 = (cljs.core.PROTOCOL_SENTINEL === inst_15383);
var inst_15385 = (inst_15382) || (inst_15384);
var state_15447__$1 = state_15447;
if(cljs.core.truth_(inst_15385)){
var statearr_15467_15525 = state_15447__$1;
(statearr_15467_15525[(1)] = (16));

} else {
var statearr_15468_15526 = state_15447__$1;
(statearr_15468_15526[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (22))){
var inst_15406 = (state_15447[(14)]);
var inst_15407 = (state_15447[(10)]);
var inst_15405 = (state_15447[(2)]);
var inst_15406__$1 = cljs.core.nth.call(null,inst_15405,(0),null);
var inst_15407__$1 = cljs.core.nth.call(null,inst_15405,(1),null);
var inst_15408 = (inst_15406__$1 == null);
var inst_15409 = cljs.core._EQ_.call(null,inst_15407__$1,change);
var inst_15410 = (inst_15408) || (inst_15409);
var state_15447__$1 = (function (){var statearr_15469 = state_15447;
(statearr_15469[(14)] = inst_15406__$1);

(statearr_15469[(10)] = inst_15407__$1);

return statearr_15469;
})();
if(cljs.core.truth_(inst_15410)){
var statearr_15470_15527 = state_15447__$1;
(statearr_15470_15527[(1)] = (23));

} else {
var statearr_15471_15528 = state_15447__$1;
(statearr_15471_15528[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (36))){
var inst_15397 = (state_15447[(12)]);
var inst_15374 = inst_15397;
var state_15447__$1 = (function (){var statearr_15472 = state_15447;
(statearr_15472[(7)] = inst_15374);

return statearr_15472;
})();
var statearr_15473_15529 = state_15447__$1;
(statearr_15473_15529[(2)] = null);

(statearr_15473_15529[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (29))){
var inst_15421 = (state_15447[(11)]);
var state_15447__$1 = state_15447;
var statearr_15474_15530 = state_15447__$1;
(statearr_15474_15530[(2)] = inst_15421);

(statearr_15474_15530[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (6))){
var state_15447__$1 = state_15447;
var statearr_15475_15531 = state_15447__$1;
(statearr_15475_15531[(2)] = false);

(statearr_15475_15531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (28))){
var inst_15417 = (state_15447[(2)]);
var inst_15418 = calc_state.call(null);
var inst_15374 = inst_15418;
var state_15447__$1 = (function (){var statearr_15476 = state_15447;
(statearr_15476[(15)] = inst_15417);

(statearr_15476[(7)] = inst_15374);

return statearr_15476;
})();
var statearr_15477_15532 = state_15447__$1;
(statearr_15477_15532[(2)] = null);

(statearr_15477_15532[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (25))){
var inst_15443 = (state_15447[(2)]);
var state_15447__$1 = state_15447;
var statearr_15478_15533 = state_15447__$1;
(statearr_15478_15533[(2)] = inst_15443);

(statearr_15478_15533[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (34))){
var inst_15441 = (state_15447[(2)]);
var state_15447__$1 = state_15447;
var statearr_15479_15534 = state_15447__$1;
(statearr_15479_15534[(2)] = inst_15441);

(statearr_15479_15534[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (17))){
var state_15447__$1 = state_15447;
var statearr_15480_15535 = state_15447__$1;
(statearr_15480_15535[(2)] = false);

(statearr_15480_15535[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (3))){
var state_15447__$1 = state_15447;
var statearr_15481_15536 = state_15447__$1;
(statearr_15481_15536[(2)] = false);

(statearr_15481_15536[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (12))){
var inst_15445 = (state_15447[(2)]);
var state_15447__$1 = state_15447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15447__$1,inst_15445);
} else {
if((state_val_15448 === (2))){
var inst_15349 = (state_15447[(8)]);
var inst_15354 = inst_15349.cljs$lang$protocol_mask$partition0$;
var inst_15355 = (inst_15354 & (64));
var inst_15356 = inst_15349.cljs$core$ISeq$;
var inst_15357 = (cljs.core.PROTOCOL_SENTINEL === inst_15356);
var inst_15358 = (inst_15355) || (inst_15357);
var state_15447__$1 = state_15447;
if(cljs.core.truth_(inst_15358)){
var statearr_15482_15537 = state_15447__$1;
(statearr_15482_15537[(1)] = (5));

} else {
var statearr_15483_15538 = state_15447__$1;
(statearr_15483_15538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (23))){
var inst_15406 = (state_15447[(14)]);
var inst_15412 = (inst_15406 == null);
var state_15447__$1 = state_15447;
if(cljs.core.truth_(inst_15412)){
var statearr_15484_15539 = state_15447__$1;
(statearr_15484_15539[(1)] = (26));

} else {
var statearr_15485_15540 = state_15447__$1;
(statearr_15485_15540[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (35))){
var inst_15432 = (state_15447[(2)]);
var state_15447__$1 = state_15447;
if(cljs.core.truth_(inst_15432)){
var statearr_15486_15541 = state_15447__$1;
(statearr_15486_15541[(1)] = (36));

} else {
var statearr_15487_15542 = state_15447__$1;
(statearr_15487_15542[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (19))){
var inst_15374 = (state_15447[(7)]);
var inst_15394 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15374);
var state_15447__$1 = state_15447;
var statearr_15488_15543 = state_15447__$1;
(statearr_15488_15543[(2)] = inst_15394);

(statearr_15488_15543[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (11))){
var inst_15374 = (state_15447[(7)]);
var inst_15378 = (inst_15374 == null);
var inst_15379 = cljs.core.not.call(null,inst_15378);
var state_15447__$1 = state_15447;
if(inst_15379){
var statearr_15489_15544 = state_15447__$1;
(statearr_15489_15544[(1)] = (13));

} else {
var statearr_15490_15545 = state_15447__$1;
(statearr_15490_15545[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (9))){
var inst_15349 = (state_15447[(8)]);
var state_15447__$1 = state_15447;
var statearr_15491_15546 = state_15447__$1;
(statearr_15491_15546[(2)] = inst_15349);

(statearr_15491_15546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (5))){
var state_15447__$1 = state_15447;
var statearr_15492_15547 = state_15447__$1;
(statearr_15492_15547[(2)] = true);

(statearr_15492_15547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (14))){
var state_15447__$1 = state_15447;
var statearr_15493_15548 = state_15447__$1;
(statearr_15493_15548[(2)] = false);

(statearr_15493_15548[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (26))){
var inst_15407 = (state_15447[(10)]);
var inst_15414 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15407);
var state_15447__$1 = state_15447;
var statearr_15494_15549 = state_15447__$1;
(statearr_15494_15549[(2)] = inst_15414);

(statearr_15494_15549[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (16))){
var state_15447__$1 = state_15447;
var statearr_15495_15550 = state_15447__$1;
(statearr_15495_15550[(2)] = true);

(statearr_15495_15550[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (38))){
var inst_15437 = (state_15447[(2)]);
var state_15447__$1 = state_15447;
var statearr_15496_15551 = state_15447__$1;
(statearr_15496_15551[(2)] = inst_15437);

(statearr_15496_15551[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (30))){
var inst_15398 = (state_15447[(9)]);
var inst_15407 = (state_15447[(10)]);
var inst_15399 = (state_15447[(13)]);
var inst_15424 = cljs.core.empty_QMARK_.call(null,inst_15398);
var inst_15425 = inst_15399.call(null,inst_15407);
var inst_15426 = cljs.core.not.call(null,inst_15425);
var inst_15427 = (inst_15424) && (inst_15426);
var state_15447__$1 = state_15447;
var statearr_15497_15552 = state_15447__$1;
(statearr_15497_15552[(2)] = inst_15427);

(statearr_15497_15552[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (10))){
var inst_15349 = (state_15447[(8)]);
var inst_15370 = (state_15447[(2)]);
var inst_15371 = cljs.core.get.call(null,inst_15370,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15372 = cljs.core.get.call(null,inst_15370,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15373 = cljs.core.get.call(null,inst_15370,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15374 = inst_15349;
var state_15447__$1 = (function (){var statearr_15498 = state_15447;
(statearr_15498[(16)] = inst_15371);

(statearr_15498[(17)] = inst_15373);

(statearr_15498[(18)] = inst_15372);

(statearr_15498[(7)] = inst_15374);

return statearr_15498;
})();
var statearr_15499_15553 = state_15447__$1;
(statearr_15499_15553[(2)] = null);

(statearr_15499_15553[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (18))){
var inst_15389 = (state_15447[(2)]);
var state_15447__$1 = state_15447;
var statearr_15500_15554 = state_15447__$1;
(statearr_15500_15554[(2)] = inst_15389);

(statearr_15500_15554[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (37))){
var state_15447__$1 = state_15447;
var statearr_15501_15555 = state_15447__$1;
(statearr_15501_15555[(2)] = null);

(statearr_15501_15555[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15448 === (8))){
var inst_15349 = (state_15447[(8)]);
var inst_15367 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15349);
var state_15447__$1 = state_15447;
var statearr_15502_15556 = state_15447__$1;
(statearr_15502_15556[(2)] = inst_15367);

(statearr_15502_15556[(1)] = (10));


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
});})(c__10489__auto___15510,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10433__auto__,c__10489__auto___15510,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10434__auto__ = null;
var cljs$core$async$mix_$_state_machine__10434__auto____0 = (function (){
var statearr_15506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15506[(0)] = cljs$core$async$mix_$_state_machine__10434__auto__);

(statearr_15506[(1)] = (1));

return statearr_15506;
});
var cljs$core$async$mix_$_state_machine__10434__auto____1 = (function (state_15447){
while(true){
var ret_value__10435__auto__ = (function (){try{while(true){
var result__10436__auto__ = switch__10433__auto__.call(null,state_15447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10436__auto__;
}
break;
}
}catch (e15507){if((e15507 instanceof Object)){
var ex__10437__auto__ = e15507;
var statearr_15508_15557 = state_15447;
(statearr_15508_15557[(5)] = ex__10437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15558 = state_15447;
state_15447 = G__15558;
continue;
} else {
return ret_value__10435__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10434__auto__ = function(state_15447){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10434__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10434__auto____1.call(this,state_15447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10434__auto____0;
cljs$core$async$mix_$_state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10434__auto____1;
return cljs$core$async$mix_$_state_machine__10434__auto__;
})()
;})(switch__10433__auto__,c__10489__auto___15510,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10491__auto__ = (function (){var statearr_15509 = f__10490__auto__.call(null);
(statearr_15509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10489__auto___15510);

return statearr_15509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10491__auto__);
});})(c__10489__auto___15510,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


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
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__8116__auto__ = (((p == null))?null:p);
var m__8117__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8116__auto__)]);
if(!((m__8117__auto__ == null))){
return m__8117__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__8117__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__8117__auto____$1 == null))){
return m__8117__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__8116__auto__ = (((p == null))?null:p);
var m__8117__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8116__auto__)]);
if(!((m__8117__auto__ == null))){
return m__8117__auto__.call(null,p,v,ch);
} else {
var m__8117__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__8117__auto____$1 == null))){
return m__8117__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args15559 = [];
var len__8561__auto___15562 = arguments.length;
var i__8562__auto___15563 = (0);
while(true){
if((i__8562__auto___15563 < len__8561__auto___15562)){
args15559.push((arguments[i__8562__auto___15563]));

var G__15564 = (i__8562__auto___15563 + (1));
i__8562__auto___15563 = G__15564;
continue;
} else {
}
break;
}

var G__15561 = args15559.length;
switch (G__15561) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15559.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__8116__auto__ = (((p == null))?null:p);
var m__8117__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8116__auto__)]);
if(!((m__8117__auto__ == null))){
return m__8117__auto__.call(null,p);
} else {
var m__8117__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8117__auto____$1 == null))){
return m__8117__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__8116__auto__ = (((p == null))?null:p);
var m__8117__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8116__auto__)]);
if(!((m__8117__auto__ == null))){
return m__8117__auto__.call(null,p,v);
} else {
var m__8117__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8117__auto____$1 == null))){
return m__8117__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var args15567 = [];
var len__8561__auto___15692 = arguments.length;
var i__8562__auto___15693 = (0);
while(true){
if((i__8562__auto___15693 < len__8561__auto___15692)){
args15567.push((arguments[i__8562__auto___15693]));

var G__15694 = (i__8562__auto___15693 + (1));
i__8562__auto___15693 = G__15694;
continue;
} else {
}
break;
}

var G__15569 = args15567.length;
switch (G__15569) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15567.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__7448__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__7448__auto__)){
return or__7448__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7448__auto__,mults){
return (function (p1__15566_SHARP_){
if(cljs.core.truth_(p1__15566_SHARP_.call(null,topic))){
return p1__15566_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15566_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7448__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async15570 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15570 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15571){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15571 = meta15571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15572,meta15571__$1){
var self__ = this;
var _15572__$1 = this;
return (new cljs.core.async.t_cljs$core$async15570(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15571__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15570.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15572){
var self__ = this;
var _15572__$1 = this;
return self__.meta15571;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15570.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15570.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15570.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15570.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15570.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15570.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15570.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15570.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15571","meta15571",-1430174535,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15570.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15570.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15570";

cljs.core.async.t_cljs$core$async15570.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8059__auto__,writer__8060__auto__,opt__8061__auto__){
return cljs.core._write.call(null,writer__8060__auto__,"cljs.core.async/t_cljs$core$async15570");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async15570 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15570(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15571){
return (new cljs.core.async.t_cljs$core$async15570(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15571));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15570(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10489__auto___15696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10489__auto___15696,mults,ensure_mult,p){
return (function (){
var f__10490__auto__ = (function (){var switch__10433__auto__ = ((function (c__10489__auto___15696,mults,ensure_mult,p){
return (function (state_15644){
var state_val_15645 = (state_15644[(1)]);
if((state_val_15645 === (7))){
var inst_15640 = (state_15644[(2)]);
var state_15644__$1 = state_15644;
var statearr_15646_15697 = state_15644__$1;
(statearr_15646_15697[(2)] = inst_15640);

(statearr_15646_15697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (20))){
var state_15644__$1 = state_15644;
var statearr_15647_15698 = state_15644__$1;
(statearr_15647_15698[(2)] = null);

(statearr_15647_15698[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (1))){
var state_15644__$1 = state_15644;
var statearr_15648_15699 = state_15644__$1;
(statearr_15648_15699[(2)] = null);

(statearr_15648_15699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (24))){
var inst_15623 = (state_15644[(7)]);
var inst_15632 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15623);
var state_15644__$1 = state_15644;
var statearr_15649_15700 = state_15644__$1;
(statearr_15649_15700[(2)] = inst_15632);

(statearr_15649_15700[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (4))){
var inst_15575 = (state_15644[(8)]);
var inst_15575__$1 = (state_15644[(2)]);
var inst_15576 = (inst_15575__$1 == null);
var state_15644__$1 = (function (){var statearr_15650 = state_15644;
(statearr_15650[(8)] = inst_15575__$1);

return statearr_15650;
})();
if(cljs.core.truth_(inst_15576)){
var statearr_15651_15701 = state_15644__$1;
(statearr_15651_15701[(1)] = (5));

} else {
var statearr_15652_15702 = state_15644__$1;
(statearr_15652_15702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (15))){
var inst_15617 = (state_15644[(2)]);
var state_15644__$1 = state_15644;
var statearr_15653_15703 = state_15644__$1;
(statearr_15653_15703[(2)] = inst_15617);

(statearr_15653_15703[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (21))){
var inst_15637 = (state_15644[(2)]);
var state_15644__$1 = (function (){var statearr_15654 = state_15644;
(statearr_15654[(9)] = inst_15637);

return statearr_15654;
})();
var statearr_15655_15704 = state_15644__$1;
(statearr_15655_15704[(2)] = null);

(statearr_15655_15704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (13))){
var inst_15599 = (state_15644[(10)]);
var inst_15601 = cljs.core.chunked_seq_QMARK_.call(null,inst_15599);
var state_15644__$1 = state_15644;
if(inst_15601){
var statearr_15656_15705 = state_15644__$1;
(statearr_15656_15705[(1)] = (16));

} else {
var statearr_15657_15706 = state_15644__$1;
(statearr_15657_15706[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (22))){
var inst_15629 = (state_15644[(2)]);
var state_15644__$1 = state_15644;
if(cljs.core.truth_(inst_15629)){
var statearr_15658_15707 = state_15644__$1;
(statearr_15658_15707[(1)] = (23));

} else {
var statearr_15659_15708 = state_15644__$1;
(statearr_15659_15708[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (6))){
var inst_15575 = (state_15644[(8)]);
var inst_15623 = (state_15644[(7)]);
var inst_15625 = (state_15644[(11)]);
var inst_15623__$1 = topic_fn.call(null,inst_15575);
var inst_15624 = cljs.core.deref.call(null,mults);
var inst_15625__$1 = cljs.core.get.call(null,inst_15624,inst_15623__$1);
var state_15644__$1 = (function (){var statearr_15660 = state_15644;
(statearr_15660[(7)] = inst_15623__$1);

(statearr_15660[(11)] = inst_15625__$1);

return statearr_15660;
})();
if(cljs.core.truth_(inst_15625__$1)){
var statearr_15661_15709 = state_15644__$1;
(statearr_15661_15709[(1)] = (19));

} else {
var statearr_15662_15710 = state_15644__$1;
(statearr_15662_15710[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (25))){
var inst_15634 = (state_15644[(2)]);
var state_15644__$1 = state_15644;
var statearr_15663_15711 = state_15644__$1;
(statearr_15663_15711[(2)] = inst_15634);

(statearr_15663_15711[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (17))){
var inst_15599 = (state_15644[(10)]);
var inst_15608 = cljs.core.first.call(null,inst_15599);
var inst_15609 = cljs.core.async.muxch_STAR_.call(null,inst_15608);
var inst_15610 = cljs.core.async.close_BANG_.call(null,inst_15609);
var inst_15611 = cljs.core.next.call(null,inst_15599);
var inst_15585 = inst_15611;
var inst_15586 = null;
var inst_15587 = (0);
var inst_15588 = (0);
var state_15644__$1 = (function (){var statearr_15664 = state_15644;
(statearr_15664[(12)] = inst_15610);

(statearr_15664[(13)] = inst_15588);

(statearr_15664[(14)] = inst_15585);

(statearr_15664[(15)] = inst_15587);

(statearr_15664[(16)] = inst_15586);

return statearr_15664;
})();
var statearr_15665_15712 = state_15644__$1;
(statearr_15665_15712[(2)] = null);

(statearr_15665_15712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (3))){
var inst_15642 = (state_15644[(2)]);
var state_15644__$1 = state_15644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15644__$1,inst_15642);
} else {
if((state_val_15645 === (12))){
var inst_15619 = (state_15644[(2)]);
var state_15644__$1 = state_15644;
var statearr_15666_15713 = state_15644__$1;
(statearr_15666_15713[(2)] = inst_15619);

(statearr_15666_15713[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (2))){
var state_15644__$1 = state_15644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15644__$1,(4),ch);
} else {
if((state_val_15645 === (23))){
var state_15644__$1 = state_15644;
var statearr_15667_15714 = state_15644__$1;
(statearr_15667_15714[(2)] = null);

(statearr_15667_15714[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (19))){
var inst_15575 = (state_15644[(8)]);
var inst_15625 = (state_15644[(11)]);
var inst_15627 = cljs.core.async.muxch_STAR_.call(null,inst_15625);
var state_15644__$1 = state_15644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15644__$1,(22),inst_15627,inst_15575);
} else {
if((state_val_15645 === (11))){
var inst_15585 = (state_15644[(14)]);
var inst_15599 = (state_15644[(10)]);
var inst_15599__$1 = cljs.core.seq.call(null,inst_15585);
var state_15644__$1 = (function (){var statearr_15668 = state_15644;
(statearr_15668[(10)] = inst_15599__$1);

return statearr_15668;
})();
if(inst_15599__$1){
var statearr_15669_15715 = state_15644__$1;
(statearr_15669_15715[(1)] = (13));

} else {
var statearr_15670_15716 = state_15644__$1;
(statearr_15670_15716[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (9))){
var inst_15621 = (state_15644[(2)]);
var state_15644__$1 = state_15644;
var statearr_15671_15717 = state_15644__$1;
(statearr_15671_15717[(2)] = inst_15621);

(statearr_15671_15717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (5))){
var inst_15582 = cljs.core.deref.call(null,mults);
var inst_15583 = cljs.core.vals.call(null,inst_15582);
var inst_15584 = cljs.core.seq.call(null,inst_15583);
var inst_15585 = inst_15584;
var inst_15586 = null;
var inst_15587 = (0);
var inst_15588 = (0);
var state_15644__$1 = (function (){var statearr_15672 = state_15644;
(statearr_15672[(13)] = inst_15588);

(statearr_15672[(14)] = inst_15585);

(statearr_15672[(15)] = inst_15587);

(statearr_15672[(16)] = inst_15586);

return statearr_15672;
})();
var statearr_15673_15718 = state_15644__$1;
(statearr_15673_15718[(2)] = null);

(statearr_15673_15718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (14))){
var state_15644__$1 = state_15644;
var statearr_15677_15719 = state_15644__$1;
(statearr_15677_15719[(2)] = null);

(statearr_15677_15719[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (16))){
var inst_15599 = (state_15644[(10)]);
var inst_15603 = cljs.core.chunk_first.call(null,inst_15599);
var inst_15604 = cljs.core.chunk_rest.call(null,inst_15599);
var inst_15605 = cljs.core.count.call(null,inst_15603);
var inst_15585 = inst_15604;
var inst_15586 = inst_15603;
var inst_15587 = inst_15605;
var inst_15588 = (0);
var state_15644__$1 = (function (){var statearr_15678 = state_15644;
(statearr_15678[(13)] = inst_15588);

(statearr_15678[(14)] = inst_15585);

(statearr_15678[(15)] = inst_15587);

(statearr_15678[(16)] = inst_15586);

return statearr_15678;
})();
var statearr_15679_15720 = state_15644__$1;
(statearr_15679_15720[(2)] = null);

(statearr_15679_15720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (10))){
var inst_15588 = (state_15644[(13)]);
var inst_15585 = (state_15644[(14)]);
var inst_15587 = (state_15644[(15)]);
var inst_15586 = (state_15644[(16)]);
var inst_15593 = cljs.core._nth.call(null,inst_15586,inst_15588);
var inst_15594 = cljs.core.async.muxch_STAR_.call(null,inst_15593);
var inst_15595 = cljs.core.async.close_BANG_.call(null,inst_15594);
var inst_15596 = (inst_15588 + (1));
var tmp15674 = inst_15585;
var tmp15675 = inst_15587;
var tmp15676 = inst_15586;
var inst_15585__$1 = tmp15674;
var inst_15586__$1 = tmp15676;
var inst_15587__$1 = tmp15675;
var inst_15588__$1 = inst_15596;
var state_15644__$1 = (function (){var statearr_15680 = state_15644;
(statearr_15680[(13)] = inst_15588__$1);

(statearr_15680[(14)] = inst_15585__$1);

(statearr_15680[(15)] = inst_15587__$1);

(statearr_15680[(17)] = inst_15595);

(statearr_15680[(16)] = inst_15586__$1);

return statearr_15680;
})();
var statearr_15681_15721 = state_15644__$1;
(statearr_15681_15721[(2)] = null);

(statearr_15681_15721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (18))){
var inst_15614 = (state_15644[(2)]);
var state_15644__$1 = state_15644;
var statearr_15682_15722 = state_15644__$1;
(statearr_15682_15722[(2)] = inst_15614);

(statearr_15682_15722[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (8))){
var inst_15588 = (state_15644[(13)]);
var inst_15587 = (state_15644[(15)]);
var inst_15590 = (inst_15588 < inst_15587);
var inst_15591 = inst_15590;
var state_15644__$1 = state_15644;
if(cljs.core.truth_(inst_15591)){
var statearr_15683_15723 = state_15644__$1;
(statearr_15683_15723[(1)] = (10));

} else {
var statearr_15684_15724 = state_15644__$1;
(statearr_15684_15724[(1)] = (11));

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
});})(c__10489__auto___15696,mults,ensure_mult,p))
;
return ((function (switch__10433__auto__,c__10489__auto___15696,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10434__auto__ = null;
var cljs$core$async$state_machine__10434__auto____0 = (function (){
var statearr_15688 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15688[(0)] = cljs$core$async$state_machine__10434__auto__);

(statearr_15688[(1)] = (1));

return statearr_15688;
});
var cljs$core$async$state_machine__10434__auto____1 = (function (state_15644){
while(true){
var ret_value__10435__auto__ = (function (){try{while(true){
var result__10436__auto__ = switch__10433__auto__.call(null,state_15644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10436__auto__;
}
break;
}
}catch (e15689){if((e15689 instanceof Object)){
var ex__10437__auto__ = e15689;
var statearr_15690_15725 = state_15644;
(statearr_15690_15725[(5)] = ex__10437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15726 = state_15644;
state_15644 = G__15726;
continue;
} else {
return ret_value__10435__auto__;
}
break;
}
});
cljs$core$async$state_machine__10434__auto__ = function(state_15644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10434__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10434__auto____1.call(this,state_15644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10434__auto____0;
cljs$core$async$state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10434__auto____1;
return cljs$core$async$state_machine__10434__auto__;
})()
;})(switch__10433__auto__,c__10489__auto___15696,mults,ensure_mult,p))
})();
var state__10491__auto__ = (function (){var statearr_15691 = f__10490__auto__.call(null);
(statearr_15691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10489__auto___15696);

return statearr_15691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10491__auto__);
});})(c__10489__auto___15696,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args15727 = [];
var len__8561__auto___15730 = arguments.length;
var i__8562__auto___15731 = (0);
while(true){
if((i__8562__auto___15731 < len__8561__auto___15730)){
args15727.push((arguments[i__8562__auto___15731]));

var G__15732 = (i__8562__auto___15731 + (1));
i__8562__auto___15731 = G__15732;
continue;
} else {
}
break;
}

var G__15729 = args15727.length;
switch (G__15729) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15727.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

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
var args15734 = [];
var len__8561__auto___15737 = arguments.length;
var i__8562__auto___15738 = (0);
while(true){
if((i__8562__auto___15738 < len__8561__auto___15737)){
args15734.push((arguments[i__8562__auto___15738]));

var G__15739 = (i__8562__auto___15738 + (1));
i__8562__auto___15738 = G__15739;
continue;
} else {
}
break;
}

var G__15736 = args15734.length;
switch (G__15736) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15734.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var args15741 = [];
var len__8561__auto___15812 = arguments.length;
var i__8562__auto___15813 = (0);
while(true){
if((i__8562__auto___15813 < len__8561__auto___15812)){
args15741.push((arguments[i__8562__auto___15813]));

var G__15814 = (i__8562__auto___15813 + (1));
i__8562__auto___15813 = G__15814;
continue;
} else {
}
break;
}

var G__15743 = args15741.length;
switch (G__15743) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15741.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__10489__auto___15816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10489__auto___15816,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10490__auto__ = (function (){var switch__10433__auto__ = ((function (c__10489__auto___15816,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15782){
var state_val_15783 = (state_15782[(1)]);
if((state_val_15783 === (7))){
var state_15782__$1 = state_15782;
var statearr_15784_15817 = state_15782__$1;
(statearr_15784_15817[(2)] = null);

(statearr_15784_15817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (1))){
var state_15782__$1 = state_15782;
var statearr_15785_15818 = state_15782__$1;
(statearr_15785_15818[(2)] = null);

(statearr_15785_15818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (4))){
var inst_15746 = (state_15782[(7)]);
var inst_15748 = (inst_15746 < cnt);
var state_15782__$1 = state_15782;
if(cljs.core.truth_(inst_15748)){
var statearr_15786_15819 = state_15782__$1;
(statearr_15786_15819[(1)] = (6));

} else {
var statearr_15787_15820 = state_15782__$1;
(statearr_15787_15820[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (15))){
var inst_15778 = (state_15782[(2)]);
var state_15782__$1 = state_15782;
var statearr_15788_15821 = state_15782__$1;
(statearr_15788_15821[(2)] = inst_15778);

(statearr_15788_15821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (13))){
var inst_15771 = cljs.core.async.close_BANG_.call(null,out);
var state_15782__$1 = state_15782;
var statearr_15789_15822 = state_15782__$1;
(statearr_15789_15822[(2)] = inst_15771);

(statearr_15789_15822[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (6))){
var state_15782__$1 = state_15782;
var statearr_15790_15823 = state_15782__$1;
(statearr_15790_15823[(2)] = null);

(statearr_15790_15823[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (3))){
var inst_15780 = (state_15782[(2)]);
var state_15782__$1 = state_15782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15782__$1,inst_15780);
} else {
if((state_val_15783 === (12))){
var inst_15768 = (state_15782[(8)]);
var inst_15768__$1 = (state_15782[(2)]);
var inst_15769 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15768__$1);
var state_15782__$1 = (function (){var statearr_15791 = state_15782;
(statearr_15791[(8)] = inst_15768__$1);

return statearr_15791;
})();
if(cljs.core.truth_(inst_15769)){
var statearr_15792_15824 = state_15782__$1;
(statearr_15792_15824[(1)] = (13));

} else {
var statearr_15793_15825 = state_15782__$1;
(statearr_15793_15825[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (2))){
var inst_15745 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15746 = (0);
var state_15782__$1 = (function (){var statearr_15794 = state_15782;
(statearr_15794[(7)] = inst_15746);

(statearr_15794[(9)] = inst_15745);

return statearr_15794;
})();
var statearr_15795_15826 = state_15782__$1;
(statearr_15795_15826[(2)] = null);

(statearr_15795_15826[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (11))){
var inst_15746 = (state_15782[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15782,(10),Object,null,(9));
var inst_15755 = chs__$1.call(null,inst_15746);
var inst_15756 = done.call(null,inst_15746);
var inst_15757 = cljs.core.async.take_BANG_.call(null,inst_15755,inst_15756);
var state_15782__$1 = state_15782;
var statearr_15796_15827 = state_15782__$1;
(statearr_15796_15827[(2)] = inst_15757);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15782__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (9))){
var inst_15746 = (state_15782[(7)]);
var inst_15759 = (state_15782[(2)]);
var inst_15760 = (inst_15746 + (1));
var inst_15746__$1 = inst_15760;
var state_15782__$1 = (function (){var statearr_15797 = state_15782;
(statearr_15797[(10)] = inst_15759);

(statearr_15797[(7)] = inst_15746__$1);

return statearr_15797;
})();
var statearr_15798_15828 = state_15782__$1;
(statearr_15798_15828[(2)] = null);

(statearr_15798_15828[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (5))){
var inst_15766 = (state_15782[(2)]);
var state_15782__$1 = (function (){var statearr_15799 = state_15782;
(statearr_15799[(11)] = inst_15766);

return statearr_15799;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15782__$1,(12),dchan);
} else {
if((state_val_15783 === (14))){
var inst_15768 = (state_15782[(8)]);
var inst_15773 = cljs.core.apply.call(null,f,inst_15768);
var state_15782__$1 = state_15782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15782__$1,(16),out,inst_15773);
} else {
if((state_val_15783 === (16))){
var inst_15775 = (state_15782[(2)]);
var state_15782__$1 = (function (){var statearr_15800 = state_15782;
(statearr_15800[(12)] = inst_15775);

return statearr_15800;
})();
var statearr_15801_15829 = state_15782__$1;
(statearr_15801_15829[(2)] = null);

(statearr_15801_15829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (10))){
var inst_15750 = (state_15782[(2)]);
var inst_15751 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15782__$1 = (function (){var statearr_15802 = state_15782;
(statearr_15802[(13)] = inst_15750);

return statearr_15802;
})();
var statearr_15803_15830 = state_15782__$1;
(statearr_15803_15830[(2)] = inst_15751);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15782__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15783 === (8))){
var inst_15764 = (state_15782[(2)]);
var state_15782__$1 = state_15782;
var statearr_15804_15831 = state_15782__$1;
(statearr_15804_15831[(2)] = inst_15764);

(statearr_15804_15831[(1)] = (5));


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
});})(c__10489__auto___15816,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10433__auto__,c__10489__auto___15816,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10434__auto__ = null;
var cljs$core$async$state_machine__10434__auto____0 = (function (){
var statearr_15808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15808[(0)] = cljs$core$async$state_machine__10434__auto__);

(statearr_15808[(1)] = (1));

return statearr_15808;
});
var cljs$core$async$state_machine__10434__auto____1 = (function (state_15782){
while(true){
var ret_value__10435__auto__ = (function (){try{while(true){
var result__10436__auto__ = switch__10433__auto__.call(null,state_15782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10436__auto__;
}
break;
}
}catch (e15809){if((e15809 instanceof Object)){
var ex__10437__auto__ = e15809;
var statearr_15810_15832 = state_15782;
(statearr_15810_15832[(5)] = ex__10437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15833 = state_15782;
state_15782 = G__15833;
continue;
} else {
return ret_value__10435__auto__;
}
break;
}
});
cljs$core$async$state_machine__10434__auto__ = function(state_15782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10434__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10434__auto____1.call(this,state_15782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10434__auto____0;
cljs$core$async$state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10434__auto____1;
return cljs$core$async$state_machine__10434__auto__;
})()
;})(switch__10433__auto__,c__10489__auto___15816,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10491__auto__ = (function (){var statearr_15811 = f__10490__auto__.call(null);
(statearr_15811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10489__auto___15816);

return statearr_15811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10491__auto__);
});})(c__10489__auto___15816,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args15835 = [];
var len__8561__auto___15893 = arguments.length;
var i__8562__auto___15894 = (0);
while(true){
if((i__8562__auto___15894 < len__8561__auto___15893)){
args15835.push((arguments[i__8562__auto___15894]));

var G__15895 = (i__8562__auto___15894 + (1));
i__8562__auto___15894 = G__15895;
continue;
} else {
}
break;
}

var G__15837 = args15835.length;
switch (G__15837) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15835.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10489__auto___15897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10489__auto___15897,out){
return (function (){
var f__10490__auto__ = (function (){var switch__10433__auto__ = ((function (c__10489__auto___15897,out){
return (function (state_15869){
var state_val_15870 = (state_15869[(1)]);
if((state_val_15870 === (7))){
var inst_15849 = (state_15869[(7)]);
var inst_15848 = (state_15869[(8)]);
var inst_15848__$1 = (state_15869[(2)]);
var inst_15849__$1 = cljs.core.nth.call(null,inst_15848__$1,(0),null);
var inst_15850 = cljs.core.nth.call(null,inst_15848__$1,(1),null);
var inst_15851 = (inst_15849__$1 == null);
var state_15869__$1 = (function (){var statearr_15871 = state_15869;
(statearr_15871[(7)] = inst_15849__$1);

(statearr_15871[(8)] = inst_15848__$1);

(statearr_15871[(9)] = inst_15850);

return statearr_15871;
})();
if(cljs.core.truth_(inst_15851)){
var statearr_15872_15898 = state_15869__$1;
(statearr_15872_15898[(1)] = (8));

} else {
var statearr_15873_15899 = state_15869__$1;
(statearr_15873_15899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (1))){
var inst_15838 = cljs.core.vec.call(null,chs);
var inst_15839 = inst_15838;
var state_15869__$1 = (function (){var statearr_15874 = state_15869;
(statearr_15874[(10)] = inst_15839);

return statearr_15874;
})();
var statearr_15875_15900 = state_15869__$1;
(statearr_15875_15900[(2)] = null);

(statearr_15875_15900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (4))){
var inst_15839 = (state_15869[(10)]);
var state_15869__$1 = state_15869;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15869__$1,(7),inst_15839);
} else {
if((state_val_15870 === (6))){
var inst_15865 = (state_15869[(2)]);
var state_15869__$1 = state_15869;
var statearr_15876_15901 = state_15869__$1;
(statearr_15876_15901[(2)] = inst_15865);

(statearr_15876_15901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (3))){
var inst_15867 = (state_15869[(2)]);
var state_15869__$1 = state_15869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15869__$1,inst_15867);
} else {
if((state_val_15870 === (2))){
var inst_15839 = (state_15869[(10)]);
var inst_15841 = cljs.core.count.call(null,inst_15839);
var inst_15842 = (inst_15841 > (0));
var state_15869__$1 = state_15869;
if(cljs.core.truth_(inst_15842)){
var statearr_15878_15902 = state_15869__$1;
(statearr_15878_15902[(1)] = (4));

} else {
var statearr_15879_15903 = state_15869__$1;
(statearr_15879_15903[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (11))){
var inst_15839 = (state_15869[(10)]);
var inst_15858 = (state_15869[(2)]);
var tmp15877 = inst_15839;
var inst_15839__$1 = tmp15877;
var state_15869__$1 = (function (){var statearr_15880 = state_15869;
(statearr_15880[(11)] = inst_15858);

(statearr_15880[(10)] = inst_15839__$1);

return statearr_15880;
})();
var statearr_15881_15904 = state_15869__$1;
(statearr_15881_15904[(2)] = null);

(statearr_15881_15904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (9))){
var inst_15849 = (state_15869[(7)]);
var state_15869__$1 = state_15869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15869__$1,(11),out,inst_15849);
} else {
if((state_val_15870 === (5))){
var inst_15863 = cljs.core.async.close_BANG_.call(null,out);
var state_15869__$1 = state_15869;
var statearr_15882_15905 = state_15869__$1;
(statearr_15882_15905[(2)] = inst_15863);

(statearr_15882_15905[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (10))){
var inst_15861 = (state_15869[(2)]);
var state_15869__$1 = state_15869;
var statearr_15883_15906 = state_15869__$1;
(statearr_15883_15906[(2)] = inst_15861);

(statearr_15883_15906[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15870 === (8))){
var inst_15849 = (state_15869[(7)]);
var inst_15848 = (state_15869[(8)]);
var inst_15839 = (state_15869[(10)]);
var inst_15850 = (state_15869[(9)]);
var inst_15853 = (function (){var cs = inst_15839;
var vec__15844 = inst_15848;
var v = inst_15849;
var c = inst_15850;
return ((function (cs,vec__15844,v,c,inst_15849,inst_15848,inst_15839,inst_15850,state_val_15870,c__10489__auto___15897,out){
return (function (p1__15834_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15834_SHARP_);
});
;})(cs,vec__15844,v,c,inst_15849,inst_15848,inst_15839,inst_15850,state_val_15870,c__10489__auto___15897,out))
})();
var inst_15854 = cljs.core.filterv.call(null,inst_15853,inst_15839);
var inst_15839__$1 = inst_15854;
var state_15869__$1 = (function (){var statearr_15884 = state_15869;
(statearr_15884[(10)] = inst_15839__$1);

return statearr_15884;
})();
var statearr_15885_15907 = state_15869__$1;
(statearr_15885_15907[(2)] = null);

(statearr_15885_15907[(1)] = (2));


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
});})(c__10489__auto___15897,out))
;
return ((function (switch__10433__auto__,c__10489__auto___15897,out){
return (function() {
var cljs$core$async$state_machine__10434__auto__ = null;
var cljs$core$async$state_machine__10434__auto____0 = (function (){
var statearr_15889 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15889[(0)] = cljs$core$async$state_machine__10434__auto__);

(statearr_15889[(1)] = (1));

return statearr_15889;
});
var cljs$core$async$state_machine__10434__auto____1 = (function (state_15869){
while(true){
var ret_value__10435__auto__ = (function (){try{while(true){
var result__10436__auto__ = switch__10433__auto__.call(null,state_15869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10436__auto__;
}
break;
}
}catch (e15890){if((e15890 instanceof Object)){
var ex__10437__auto__ = e15890;
var statearr_15891_15908 = state_15869;
(statearr_15891_15908[(5)] = ex__10437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15909 = state_15869;
state_15869 = G__15909;
continue;
} else {
return ret_value__10435__auto__;
}
break;
}
});
cljs$core$async$state_machine__10434__auto__ = function(state_15869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10434__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10434__auto____1.call(this,state_15869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10434__auto____0;
cljs$core$async$state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10434__auto____1;
return cljs$core$async$state_machine__10434__auto__;
})()
;})(switch__10433__auto__,c__10489__auto___15897,out))
})();
var state__10491__auto__ = (function (){var statearr_15892 = f__10490__auto__.call(null);
(statearr_15892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10489__auto___15897);

return statearr_15892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10491__auto__);
});})(c__10489__auto___15897,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

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
var args15910 = [];
var len__8561__auto___15959 = arguments.length;
var i__8562__auto___15960 = (0);
while(true){
if((i__8562__auto___15960 < len__8561__auto___15959)){
args15910.push((arguments[i__8562__auto___15960]));

var G__15961 = (i__8562__auto___15960 + (1));
i__8562__auto___15960 = G__15961;
continue;
} else {
}
break;
}

var G__15912 = args15910.length;
switch (G__15912) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15910.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10489__auto___15963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10489__auto___15963,out){
return (function (){
var f__10490__auto__ = (function (){var switch__10433__auto__ = ((function (c__10489__auto___15963,out){
return (function (state_15936){
var state_val_15937 = (state_15936[(1)]);
if((state_val_15937 === (7))){
var inst_15918 = (state_15936[(7)]);
var inst_15918__$1 = (state_15936[(2)]);
var inst_15919 = (inst_15918__$1 == null);
var inst_15920 = cljs.core.not.call(null,inst_15919);
var state_15936__$1 = (function (){var statearr_15938 = state_15936;
(statearr_15938[(7)] = inst_15918__$1);

return statearr_15938;
})();
if(inst_15920){
var statearr_15939_15964 = state_15936__$1;
(statearr_15939_15964[(1)] = (8));

} else {
var statearr_15940_15965 = state_15936__$1;
(statearr_15940_15965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (1))){
var inst_15913 = (0);
var state_15936__$1 = (function (){var statearr_15941 = state_15936;
(statearr_15941[(8)] = inst_15913);

return statearr_15941;
})();
var statearr_15942_15966 = state_15936__$1;
(statearr_15942_15966[(2)] = null);

(statearr_15942_15966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (4))){
var state_15936__$1 = state_15936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15936__$1,(7),ch);
} else {
if((state_val_15937 === (6))){
var inst_15931 = (state_15936[(2)]);
var state_15936__$1 = state_15936;
var statearr_15943_15967 = state_15936__$1;
(statearr_15943_15967[(2)] = inst_15931);

(statearr_15943_15967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (3))){
var inst_15933 = (state_15936[(2)]);
var inst_15934 = cljs.core.async.close_BANG_.call(null,out);
var state_15936__$1 = (function (){var statearr_15944 = state_15936;
(statearr_15944[(9)] = inst_15933);

return statearr_15944;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15936__$1,inst_15934);
} else {
if((state_val_15937 === (2))){
var inst_15913 = (state_15936[(8)]);
var inst_15915 = (inst_15913 < n);
var state_15936__$1 = state_15936;
if(cljs.core.truth_(inst_15915)){
var statearr_15945_15968 = state_15936__$1;
(statearr_15945_15968[(1)] = (4));

} else {
var statearr_15946_15969 = state_15936__$1;
(statearr_15946_15969[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (11))){
var inst_15913 = (state_15936[(8)]);
var inst_15923 = (state_15936[(2)]);
var inst_15924 = (inst_15913 + (1));
var inst_15913__$1 = inst_15924;
var state_15936__$1 = (function (){var statearr_15947 = state_15936;
(statearr_15947[(10)] = inst_15923);

(statearr_15947[(8)] = inst_15913__$1);

return statearr_15947;
})();
var statearr_15948_15970 = state_15936__$1;
(statearr_15948_15970[(2)] = null);

(statearr_15948_15970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (9))){
var state_15936__$1 = state_15936;
var statearr_15949_15971 = state_15936__$1;
(statearr_15949_15971[(2)] = null);

(statearr_15949_15971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (5))){
var state_15936__$1 = state_15936;
var statearr_15950_15972 = state_15936__$1;
(statearr_15950_15972[(2)] = null);

(statearr_15950_15972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (10))){
var inst_15928 = (state_15936[(2)]);
var state_15936__$1 = state_15936;
var statearr_15951_15973 = state_15936__$1;
(statearr_15951_15973[(2)] = inst_15928);

(statearr_15951_15973[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15937 === (8))){
var inst_15918 = (state_15936[(7)]);
var state_15936__$1 = state_15936;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15936__$1,(11),out,inst_15918);
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
});})(c__10489__auto___15963,out))
;
return ((function (switch__10433__auto__,c__10489__auto___15963,out){
return (function() {
var cljs$core$async$state_machine__10434__auto__ = null;
var cljs$core$async$state_machine__10434__auto____0 = (function (){
var statearr_15955 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15955[(0)] = cljs$core$async$state_machine__10434__auto__);

(statearr_15955[(1)] = (1));

return statearr_15955;
});
var cljs$core$async$state_machine__10434__auto____1 = (function (state_15936){
while(true){
var ret_value__10435__auto__ = (function (){try{while(true){
var result__10436__auto__ = switch__10433__auto__.call(null,state_15936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10436__auto__;
}
break;
}
}catch (e15956){if((e15956 instanceof Object)){
var ex__10437__auto__ = e15956;
var statearr_15957_15974 = state_15936;
(statearr_15957_15974[(5)] = ex__10437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15975 = state_15936;
state_15936 = G__15975;
continue;
} else {
return ret_value__10435__auto__;
}
break;
}
});
cljs$core$async$state_machine__10434__auto__ = function(state_15936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10434__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10434__auto____1.call(this,state_15936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10434__auto____0;
cljs$core$async$state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10434__auto____1;
return cljs$core$async$state_machine__10434__auto__;
})()
;})(switch__10433__auto__,c__10489__auto___15963,out))
})();
var state__10491__auto__ = (function (){var statearr_15958 = f__10490__auto__.call(null);
(statearr_15958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10489__auto___15963);

return statearr_15958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10491__auto__);
});})(c__10489__auto___15963,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15983 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15983 = (function (f,ch,meta15984){
this.f = f;
this.ch = ch;
this.meta15984 = meta15984;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15985,meta15984__$1){
var self__ = this;
var _15985__$1 = this;
return (new cljs.core.async.t_cljs$core$async15983(self__.f,self__.ch,meta15984__$1));
});

cljs.core.async.t_cljs$core$async15983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15985){
var self__ = this;
var _15985__$1 = this;
return self__.meta15984;
});

cljs.core.async.t_cljs$core$async15983.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15983.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15983.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15983.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15983.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async15986 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15986 = (function (f,ch,meta15984,_,fn1,meta15987){
this.f = f;
this.ch = ch;
this.meta15984 = meta15984;
this._ = _;
this.fn1 = fn1;
this.meta15987 = meta15987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15988,meta15987__$1){
var self__ = this;
var _15988__$1 = this;
return (new cljs.core.async.t_cljs$core$async15986(self__.f,self__.ch,self__.meta15984,self__._,self__.fn1,meta15987__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async15986.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15988){
var self__ = this;
var _15988__$1 = this;
return self__.meta15987;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15986.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15986.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15986.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15986.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15976_SHARP_){
return f1.call(null,(((p1__15976_SHARP_ == null))?null:self__.f.call(null,p1__15976_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async15986.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15984","meta15984",-1120852599,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15983","cljs.core.async/t_cljs$core$async15983",-229167401,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15987","meta15987",1487623803,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15986.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15986.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15986";

cljs.core.async.t_cljs$core$async15986.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8059__auto__,writer__8060__auto__,opt__8061__auto__){
return cljs.core._write.call(null,writer__8060__auto__,"cljs.core.async/t_cljs$core$async15986");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async15986 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15986(f__$1,ch__$1,meta15984__$1,___$2,fn1__$1,meta15987){
return (new cljs.core.async.t_cljs$core$async15986(f__$1,ch__$1,meta15984__$1,___$2,fn1__$1,meta15987));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async15986(self__.f,self__.ch,self__.meta15984,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7436__auto__ = ret;
if(cljs.core.truth_(and__7436__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__7436__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async15983.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15983.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async15983.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15984","meta15984",-1120852599,null)], null);
});

cljs.core.async.t_cljs$core$async15983.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15983.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15983";

cljs.core.async.t_cljs$core$async15983.cljs$lang$ctorPrWriter = (function (this__8059__auto__,writer__8060__auto__,opt__8061__auto__){
return cljs.core._write.call(null,writer__8060__auto__,"cljs.core.async/t_cljs$core$async15983");
});

cljs.core.async.__GT_t_cljs$core$async15983 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15983(f__$1,ch__$1,meta15984){
return (new cljs.core.async.t_cljs$core$async15983(f__$1,ch__$1,meta15984));
});

}

return (new cljs.core.async.t_cljs$core$async15983(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15992 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15992 = (function (f,ch,meta15993){
this.f = f;
this.ch = ch;
this.meta15993 = meta15993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15994,meta15993__$1){
var self__ = this;
var _15994__$1 = this;
return (new cljs.core.async.t_cljs$core$async15992(self__.f,self__.ch,meta15993__$1));
});

cljs.core.async.t_cljs$core$async15992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15994){
var self__ = this;
var _15994__$1 = this;
return self__.meta15993;
});

cljs.core.async.t_cljs$core$async15992.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15992.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15992.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15992.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15992.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15992.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async15992.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15993","meta15993",-1607776085,null)], null);
});

cljs.core.async.t_cljs$core$async15992.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15992.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15992";

cljs.core.async.t_cljs$core$async15992.cljs$lang$ctorPrWriter = (function (this__8059__auto__,writer__8060__auto__,opt__8061__auto__){
return cljs.core._write.call(null,writer__8060__auto__,"cljs.core.async/t_cljs$core$async15992");
});

cljs.core.async.__GT_t_cljs$core$async15992 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15992(f__$1,ch__$1,meta15993){
return (new cljs.core.async.t_cljs$core$async15992(f__$1,ch__$1,meta15993));
});

}

return (new cljs.core.async.t_cljs$core$async15992(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async15998 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15998 = (function (p,ch,meta15999){
this.p = p;
this.ch = ch;
this.meta15999 = meta15999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16000,meta15999__$1){
var self__ = this;
var _16000__$1 = this;
return (new cljs.core.async.t_cljs$core$async15998(self__.p,self__.ch,meta15999__$1));
});

cljs.core.async.t_cljs$core$async15998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16000){
var self__ = this;
var _16000__$1 = this;
return self__.meta15999;
});

cljs.core.async.t_cljs$core$async15998.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15998.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15998.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15998.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15998.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15998.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15998.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async15998.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15999","meta15999",1349413371,null)], null);
});

cljs.core.async.t_cljs$core$async15998.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15998.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15998";

cljs.core.async.t_cljs$core$async15998.cljs$lang$ctorPrWriter = (function (this__8059__auto__,writer__8060__auto__,opt__8061__auto__){
return cljs.core._write.call(null,writer__8060__auto__,"cljs.core.async/t_cljs$core$async15998");
});

cljs.core.async.__GT_t_cljs$core$async15998 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15998(p__$1,ch__$1,meta15999){
return (new cljs.core.async.t_cljs$core$async15998(p__$1,ch__$1,meta15999));
});

}

return (new cljs.core.async.t_cljs$core$async15998(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args16001 = [];
var len__8561__auto___16045 = arguments.length;
var i__8562__auto___16046 = (0);
while(true){
if((i__8562__auto___16046 < len__8561__auto___16045)){
args16001.push((arguments[i__8562__auto___16046]));

var G__16047 = (i__8562__auto___16046 + (1));
i__8562__auto___16046 = G__16047;
continue;
} else {
}
break;
}

var G__16003 = args16001.length;
switch (G__16003) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16001.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10489__auto___16049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10489__auto___16049,out){
return (function (){
var f__10490__auto__ = (function (){var switch__10433__auto__ = ((function (c__10489__auto___16049,out){
return (function (state_16024){
var state_val_16025 = (state_16024[(1)]);
if((state_val_16025 === (7))){
var inst_16020 = (state_16024[(2)]);
var state_16024__$1 = state_16024;
var statearr_16026_16050 = state_16024__$1;
(statearr_16026_16050[(2)] = inst_16020);

(statearr_16026_16050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16025 === (1))){
var state_16024__$1 = state_16024;
var statearr_16027_16051 = state_16024__$1;
(statearr_16027_16051[(2)] = null);

(statearr_16027_16051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16025 === (4))){
var inst_16006 = (state_16024[(7)]);
var inst_16006__$1 = (state_16024[(2)]);
var inst_16007 = (inst_16006__$1 == null);
var state_16024__$1 = (function (){var statearr_16028 = state_16024;
(statearr_16028[(7)] = inst_16006__$1);

return statearr_16028;
})();
if(cljs.core.truth_(inst_16007)){
var statearr_16029_16052 = state_16024__$1;
(statearr_16029_16052[(1)] = (5));

} else {
var statearr_16030_16053 = state_16024__$1;
(statearr_16030_16053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16025 === (6))){
var inst_16006 = (state_16024[(7)]);
var inst_16011 = p.call(null,inst_16006);
var state_16024__$1 = state_16024;
if(cljs.core.truth_(inst_16011)){
var statearr_16031_16054 = state_16024__$1;
(statearr_16031_16054[(1)] = (8));

} else {
var statearr_16032_16055 = state_16024__$1;
(statearr_16032_16055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16025 === (3))){
var inst_16022 = (state_16024[(2)]);
var state_16024__$1 = state_16024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16024__$1,inst_16022);
} else {
if((state_val_16025 === (2))){
var state_16024__$1 = state_16024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16024__$1,(4),ch);
} else {
if((state_val_16025 === (11))){
var inst_16014 = (state_16024[(2)]);
var state_16024__$1 = state_16024;
var statearr_16033_16056 = state_16024__$1;
(statearr_16033_16056[(2)] = inst_16014);

(statearr_16033_16056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16025 === (9))){
var state_16024__$1 = state_16024;
var statearr_16034_16057 = state_16024__$1;
(statearr_16034_16057[(2)] = null);

(statearr_16034_16057[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16025 === (5))){
var inst_16009 = cljs.core.async.close_BANG_.call(null,out);
var state_16024__$1 = state_16024;
var statearr_16035_16058 = state_16024__$1;
(statearr_16035_16058[(2)] = inst_16009);

(statearr_16035_16058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16025 === (10))){
var inst_16017 = (state_16024[(2)]);
var state_16024__$1 = (function (){var statearr_16036 = state_16024;
(statearr_16036[(8)] = inst_16017);

return statearr_16036;
})();
var statearr_16037_16059 = state_16024__$1;
(statearr_16037_16059[(2)] = null);

(statearr_16037_16059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16025 === (8))){
var inst_16006 = (state_16024[(7)]);
var state_16024__$1 = state_16024;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16024__$1,(11),out,inst_16006);
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
});})(c__10489__auto___16049,out))
;
return ((function (switch__10433__auto__,c__10489__auto___16049,out){
return (function() {
var cljs$core$async$state_machine__10434__auto__ = null;
var cljs$core$async$state_machine__10434__auto____0 = (function (){
var statearr_16041 = [null,null,null,null,null,null,null,null,null];
(statearr_16041[(0)] = cljs$core$async$state_machine__10434__auto__);

(statearr_16041[(1)] = (1));

return statearr_16041;
});
var cljs$core$async$state_machine__10434__auto____1 = (function (state_16024){
while(true){
var ret_value__10435__auto__ = (function (){try{while(true){
var result__10436__auto__ = switch__10433__auto__.call(null,state_16024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10436__auto__;
}
break;
}
}catch (e16042){if((e16042 instanceof Object)){
var ex__10437__auto__ = e16042;
var statearr_16043_16060 = state_16024;
(statearr_16043_16060[(5)] = ex__10437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16061 = state_16024;
state_16024 = G__16061;
continue;
} else {
return ret_value__10435__auto__;
}
break;
}
});
cljs$core$async$state_machine__10434__auto__ = function(state_16024){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10434__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10434__auto____1.call(this,state_16024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10434__auto____0;
cljs$core$async$state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10434__auto____1;
return cljs$core$async$state_machine__10434__auto__;
})()
;})(switch__10433__auto__,c__10489__auto___16049,out))
})();
var state__10491__auto__ = (function (){var statearr_16044 = f__10490__auto__.call(null);
(statearr_16044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10489__auto___16049);

return statearr_16044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10491__auto__);
});})(c__10489__auto___16049,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args16062 = [];
var len__8561__auto___16065 = arguments.length;
var i__8562__auto___16066 = (0);
while(true){
if((i__8562__auto___16066 < len__8561__auto___16065)){
args16062.push((arguments[i__8562__auto___16066]));

var G__16067 = (i__8562__auto___16066 + (1));
i__8562__auto___16066 = G__16067;
continue;
} else {
}
break;
}

var G__16064 = args16062.length;
switch (G__16064) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16062.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__10489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10489__auto__){
return (function (){
var f__10490__auto__ = (function (){var switch__10433__auto__ = ((function (c__10489__auto__){
return (function (state_16234){
var state_val_16235 = (state_16234[(1)]);
if((state_val_16235 === (7))){
var inst_16230 = (state_16234[(2)]);
var state_16234__$1 = state_16234;
var statearr_16236_16277 = state_16234__$1;
(statearr_16236_16277[(2)] = inst_16230);

(statearr_16236_16277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16235 === (20))){
var inst_16200 = (state_16234[(7)]);
var inst_16211 = (state_16234[(2)]);
var inst_16212 = cljs.core.next.call(null,inst_16200);
var inst_16186 = inst_16212;
var inst_16187 = null;
var inst_16188 = (0);
var inst_16189 = (0);
var state_16234__$1 = (function (){var statearr_16237 = state_16234;
(statearr_16237[(8)] = inst_16211);

(statearr_16237[(9)] = inst_16186);

(statearr_16237[(10)] = inst_16187);

(statearr_16237[(11)] = inst_16188);

(statearr_16237[(12)] = inst_16189);

return statearr_16237;
})();
var statearr_16238_16278 = state_16234__$1;
(statearr_16238_16278[(2)] = null);

(statearr_16238_16278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16235 === (1))){
var state_16234__$1 = state_16234;
var statearr_16239_16279 = state_16234__$1;
(statearr_16239_16279[(2)] = null);

(statearr_16239_16279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16235 === (4))){
var inst_16175 = (state_16234[(13)]);
var inst_16175__$1 = (state_16234[(2)]);
var inst_16176 = (inst_16175__$1 == null);
var state_16234__$1 = (function (){var statearr_16240 = state_16234;
(statearr_16240[(13)] = inst_16175__$1);

return statearr_16240;
})();
if(cljs.core.truth_(inst_16176)){
var statearr_16241_16280 = state_16234__$1;
(statearr_16241_16280[(1)] = (5));

} else {
var statearr_16242_16281 = state_16234__$1;
(statearr_16242_16281[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16235 === (15))){
var state_16234__$1 = state_16234;
var statearr_16246_16282 = state_16234__$1;
(statearr_16246_16282[(2)] = null);

(statearr_16246_16282[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16235 === (21))){
var state_16234__$1 = state_16234;
var statearr_16247_16283 = state_16234__$1;
(statearr_16247_16283[(2)] = null);

(statearr_16247_16283[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16235 === (13))){
var inst_16186 = (state_16234[(9)]);
var inst_16187 = (state_16234[(10)]);
var inst_16188 = (state_16234[(11)]);
var inst_16189 = (state_16234[(12)]);
var inst_16196 = (state_16234[(2)]);
var inst_16197 = (inst_16189 + (1));
var tmp16243 = inst_16186;
var tmp16244 = inst_16187;
var tmp16245 = inst_16188;
var inst_16186__$1 = tmp16243;
var inst_16187__$1 = tmp16244;
var inst_16188__$1 = tmp16245;
var inst_16189__$1 = inst_16197;
var state_16234__$1 = (function (){var statearr_16248 = state_16234;
(statearr_16248[(9)] = inst_16186__$1);

(statearr_16248[(10)] = inst_16187__$1);

(statearr_16248[(11)] = inst_16188__$1);

(statearr_16248[(14)] = inst_16196);

(statearr_16248[(12)] = inst_16189__$1);

return statearr_16248;
})();
var statearr_16249_16284 = state_16234__$1;
(statearr_16249_16284[(2)] = null);

(statearr_16249_16284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16235 === (22))){
var state_16234__$1 = state_16234;
var statearr_16250_16285 = state_16234__$1;
(statearr_16250_16285[(2)] = null);

(statearr_16250_16285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16235 === (6))){
var inst_16175 = (state_16234[(13)]);
var inst_16184 = f.call(null,inst_16175);
var inst_16185 = cljs.core.seq.call(null,inst_16184);
var inst_16186 = inst_16185;
var inst_16187 = null;
var inst_16188 = (0);
var inst_16189 = (0);
var state_16234__$1 = (function (){var statearr_16251 = state_16234;
(statearr_16251[(9)] = inst_16186);

(statearr_16251[(10)] = inst_16187);

(statearr_16251[(11)] = inst_16188);

(statearr_16251[(12)] = inst_16189);

return statearr_16251;
})();
var statearr_16252_16286 = state_16234__$1;
(statearr_16252_16286[(2)] = null);

(statearr_16252_16286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16235 === (17))){
var inst_16200 = (state_16234[(7)]);
var inst_16204 = cljs.core.chunk_first.call(null,inst_16200);
var inst_16205 = cljs.core.chunk_rest.call(null,inst_16200);
var inst_16206 = cljs.core.count.call(null,inst_16204);
var inst_16186 = inst_16205;
var inst_16187 = inst_16204;
var inst_16188 = inst_16206;
var inst_16189 = (0);
var state_16234__$1 = (function (){var statearr_16253 = state_16234;
(statearr_16253[(9)] = inst_16186);

(statearr_16253[(10)] = inst_16187);

(statearr_16253[(11)] = inst_16188);

(statearr_16253[(12)] = inst_16189);

return statearr_16253;
})();
var statearr_16254_16287 = state_16234__$1;
(statearr_16254_16287[(2)] = null);

(statearr_16254_16287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16235 === (3))){
var inst_16232 = (state_16234[(2)]);
var state_16234__$1 = state_16234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16234__$1,inst_16232);
} else {
if((state_val_16235 === (12))){
var inst_16220 = (state_16234[(2)]);
var state_16234__$1 = state_16234;
var statearr_16255_16288 = state_16234__$1;
(statearr_16255_16288[(2)] = inst_16220);

(statearr_16255_16288[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16235 === (2))){
var state_16234__$1 = state_16234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16234__$1,(4),in$);
} else {
if((state_val_16235 === (23))){
var inst_16228 = (state_16234[(2)]);
var state_16234__$1 = state_16234;
var statearr_16256_16289 = state_16234__$1;
(statearr_16256_16289[(2)] = inst_16228);

(statearr_16256_16289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16235 === (19))){
var inst_16215 = (state_16234[(2)]);
var state_16234__$1 = state_16234;
var statearr_16257_16290 = state_16234__$1;
(statearr_16257_16290[(2)] = inst_16215);

(statearr_16257_16290[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16235 === (11))){
var inst_16200 = (state_16234[(7)]);
var inst_16186 = (state_16234[(9)]);
var inst_16200__$1 = cljs.core.seq.call(null,inst_16186);
var state_16234__$1 = (function (){var statearr_16258 = state_16234;
(statearr_16258[(7)] = inst_16200__$1);

return statearr_16258;
})();
if(inst_16200__$1){
var statearr_16259_16291 = state_16234__$1;
(statearr_16259_16291[(1)] = (14));

} else {
var statearr_16260_16292 = state_16234__$1;
(statearr_16260_16292[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16235 === (9))){
var inst_16222 = (state_16234[(2)]);
var inst_16223 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_16234__$1 = (function (){var statearr_16261 = state_16234;
(statearr_16261[(15)] = inst_16222);

return statearr_16261;
})();
if(cljs.core.truth_(inst_16223)){
var statearr_16262_16293 = state_16234__$1;
(statearr_16262_16293[(1)] = (21));

} else {
var statearr_16263_16294 = state_16234__$1;
(statearr_16263_16294[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16235 === (5))){
var inst_16178 = cljs.core.async.close_BANG_.call(null,out);
var state_16234__$1 = state_16234;
var statearr_16264_16295 = state_16234__$1;
(statearr_16264_16295[(2)] = inst_16178);

(statearr_16264_16295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16235 === (14))){
var inst_16200 = (state_16234[(7)]);
var inst_16202 = cljs.core.chunked_seq_QMARK_.call(null,inst_16200);
var state_16234__$1 = state_16234;
if(inst_16202){
var statearr_16265_16296 = state_16234__$1;
(statearr_16265_16296[(1)] = (17));

} else {
var statearr_16266_16297 = state_16234__$1;
(statearr_16266_16297[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16235 === (16))){
var inst_16218 = (state_16234[(2)]);
var state_16234__$1 = state_16234;
var statearr_16267_16298 = state_16234__$1;
(statearr_16267_16298[(2)] = inst_16218);

(statearr_16267_16298[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16235 === (10))){
var inst_16187 = (state_16234[(10)]);
var inst_16189 = (state_16234[(12)]);
var inst_16194 = cljs.core._nth.call(null,inst_16187,inst_16189);
var state_16234__$1 = state_16234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16234__$1,(13),out,inst_16194);
} else {
if((state_val_16235 === (18))){
var inst_16200 = (state_16234[(7)]);
var inst_16209 = cljs.core.first.call(null,inst_16200);
var state_16234__$1 = state_16234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16234__$1,(20),out,inst_16209);
} else {
if((state_val_16235 === (8))){
var inst_16188 = (state_16234[(11)]);
var inst_16189 = (state_16234[(12)]);
var inst_16191 = (inst_16189 < inst_16188);
var inst_16192 = inst_16191;
var state_16234__$1 = state_16234;
if(cljs.core.truth_(inst_16192)){
var statearr_16268_16299 = state_16234__$1;
(statearr_16268_16299[(1)] = (10));

} else {
var statearr_16269_16300 = state_16234__$1;
(statearr_16269_16300[(1)] = (11));

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
});})(c__10489__auto__))
;
return ((function (switch__10433__auto__,c__10489__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10434__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10434__auto____0 = (function (){
var statearr_16273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16273[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10434__auto__);

(statearr_16273[(1)] = (1));

return statearr_16273;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10434__auto____1 = (function (state_16234){
while(true){
var ret_value__10435__auto__ = (function (){try{while(true){
var result__10436__auto__ = switch__10433__auto__.call(null,state_16234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10436__auto__;
}
break;
}
}catch (e16274){if((e16274 instanceof Object)){
var ex__10437__auto__ = e16274;
var statearr_16275_16301 = state_16234;
(statearr_16275_16301[(5)] = ex__10437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16302 = state_16234;
state_16234 = G__16302;
continue;
} else {
return ret_value__10435__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10434__auto__ = function(state_16234){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10434__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10434__auto____1.call(this,state_16234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10434__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10434__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10434__auto__;
})()
;})(switch__10433__auto__,c__10489__auto__))
})();
var state__10491__auto__ = (function (){var statearr_16276 = f__10490__auto__.call(null);
(statearr_16276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10489__auto__);

return statearr_16276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10491__auto__);
});})(c__10489__auto__))
);

return c__10489__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args16303 = [];
var len__8561__auto___16306 = arguments.length;
var i__8562__auto___16307 = (0);
while(true){
if((i__8562__auto___16307 < len__8561__auto___16306)){
args16303.push((arguments[i__8562__auto___16307]));

var G__16308 = (i__8562__auto___16307 + (1));
i__8562__auto___16307 = G__16308;
continue;
} else {
}
break;
}

var G__16305 = args16303.length;
switch (G__16305) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16303.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args16310 = [];
var len__8561__auto___16313 = arguments.length;
var i__8562__auto___16314 = (0);
while(true){
if((i__8562__auto___16314 < len__8561__auto___16313)){
args16310.push((arguments[i__8562__auto___16314]));

var G__16315 = (i__8562__auto___16314 + (1));
i__8562__auto___16314 = G__16315;
continue;
} else {
}
break;
}

var G__16312 = args16310.length;
switch (G__16312) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16310.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args16317 = [];
var len__8561__auto___16368 = arguments.length;
var i__8562__auto___16369 = (0);
while(true){
if((i__8562__auto___16369 < len__8561__auto___16368)){
args16317.push((arguments[i__8562__auto___16369]));

var G__16370 = (i__8562__auto___16369 + (1));
i__8562__auto___16369 = G__16370;
continue;
} else {
}
break;
}

var G__16319 = args16317.length;
switch (G__16319) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16317.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10489__auto___16372 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10489__auto___16372,out){
return (function (){
var f__10490__auto__ = (function (){var switch__10433__auto__ = ((function (c__10489__auto___16372,out){
return (function (state_16343){
var state_val_16344 = (state_16343[(1)]);
if((state_val_16344 === (7))){
var inst_16338 = (state_16343[(2)]);
var state_16343__$1 = state_16343;
var statearr_16345_16373 = state_16343__$1;
(statearr_16345_16373[(2)] = inst_16338);

(statearr_16345_16373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16344 === (1))){
var inst_16320 = null;
var state_16343__$1 = (function (){var statearr_16346 = state_16343;
(statearr_16346[(7)] = inst_16320);

return statearr_16346;
})();
var statearr_16347_16374 = state_16343__$1;
(statearr_16347_16374[(2)] = null);

(statearr_16347_16374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16344 === (4))){
var inst_16323 = (state_16343[(8)]);
var inst_16323__$1 = (state_16343[(2)]);
var inst_16324 = (inst_16323__$1 == null);
var inst_16325 = cljs.core.not.call(null,inst_16324);
var state_16343__$1 = (function (){var statearr_16348 = state_16343;
(statearr_16348[(8)] = inst_16323__$1);

return statearr_16348;
})();
if(inst_16325){
var statearr_16349_16375 = state_16343__$1;
(statearr_16349_16375[(1)] = (5));

} else {
var statearr_16350_16376 = state_16343__$1;
(statearr_16350_16376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16344 === (6))){
var state_16343__$1 = state_16343;
var statearr_16351_16377 = state_16343__$1;
(statearr_16351_16377[(2)] = null);

(statearr_16351_16377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16344 === (3))){
var inst_16340 = (state_16343[(2)]);
var inst_16341 = cljs.core.async.close_BANG_.call(null,out);
var state_16343__$1 = (function (){var statearr_16352 = state_16343;
(statearr_16352[(9)] = inst_16340);

return statearr_16352;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16343__$1,inst_16341);
} else {
if((state_val_16344 === (2))){
var state_16343__$1 = state_16343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16343__$1,(4),ch);
} else {
if((state_val_16344 === (11))){
var inst_16323 = (state_16343[(8)]);
var inst_16332 = (state_16343[(2)]);
var inst_16320 = inst_16323;
var state_16343__$1 = (function (){var statearr_16353 = state_16343;
(statearr_16353[(10)] = inst_16332);

(statearr_16353[(7)] = inst_16320);

return statearr_16353;
})();
var statearr_16354_16378 = state_16343__$1;
(statearr_16354_16378[(2)] = null);

(statearr_16354_16378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16344 === (9))){
var inst_16323 = (state_16343[(8)]);
var state_16343__$1 = state_16343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16343__$1,(11),out,inst_16323);
} else {
if((state_val_16344 === (5))){
var inst_16323 = (state_16343[(8)]);
var inst_16320 = (state_16343[(7)]);
var inst_16327 = cljs.core._EQ_.call(null,inst_16323,inst_16320);
var state_16343__$1 = state_16343;
if(inst_16327){
var statearr_16356_16379 = state_16343__$1;
(statearr_16356_16379[(1)] = (8));

} else {
var statearr_16357_16380 = state_16343__$1;
(statearr_16357_16380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16344 === (10))){
var inst_16335 = (state_16343[(2)]);
var state_16343__$1 = state_16343;
var statearr_16358_16381 = state_16343__$1;
(statearr_16358_16381[(2)] = inst_16335);

(statearr_16358_16381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16344 === (8))){
var inst_16320 = (state_16343[(7)]);
var tmp16355 = inst_16320;
var inst_16320__$1 = tmp16355;
var state_16343__$1 = (function (){var statearr_16359 = state_16343;
(statearr_16359[(7)] = inst_16320__$1);

return statearr_16359;
})();
var statearr_16360_16382 = state_16343__$1;
(statearr_16360_16382[(2)] = null);

(statearr_16360_16382[(1)] = (2));


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
});})(c__10489__auto___16372,out))
;
return ((function (switch__10433__auto__,c__10489__auto___16372,out){
return (function() {
var cljs$core$async$state_machine__10434__auto__ = null;
var cljs$core$async$state_machine__10434__auto____0 = (function (){
var statearr_16364 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16364[(0)] = cljs$core$async$state_machine__10434__auto__);

(statearr_16364[(1)] = (1));

return statearr_16364;
});
var cljs$core$async$state_machine__10434__auto____1 = (function (state_16343){
while(true){
var ret_value__10435__auto__ = (function (){try{while(true){
var result__10436__auto__ = switch__10433__auto__.call(null,state_16343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10436__auto__;
}
break;
}
}catch (e16365){if((e16365 instanceof Object)){
var ex__10437__auto__ = e16365;
var statearr_16366_16383 = state_16343;
(statearr_16366_16383[(5)] = ex__10437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16384 = state_16343;
state_16343 = G__16384;
continue;
} else {
return ret_value__10435__auto__;
}
break;
}
});
cljs$core$async$state_machine__10434__auto__ = function(state_16343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10434__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10434__auto____1.call(this,state_16343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10434__auto____0;
cljs$core$async$state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10434__auto____1;
return cljs$core$async$state_machine__10434__auto__;
})()
;})(switch__10433__auto__,c__10489__auto___16372,out))
})();
var state__10491__auto__ = (function (){var statearr_16367 = f__10490__auto__.call(null);
(statearr_16367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10489__auto___16372);

return statearr_16367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10491__auto__);
});})(c__10489__auto___16372,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args16385 = [];
var len__8561__auto___16455 = arguments.length;
var i__8562__auto___16456 = (0);
while(true){
if((i__8562__auto___16456 < len__8561__auto___16455)){
args16385.push((arguments[i__8562__auto___16456]));

var G__16457 = (i__8562__auto___16456 + (1));
i__8562__auto___16456 = G__16457;
continue;
} else {
}
break;
}

var G__16387 = args16385.length;
switch (G__16387) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16385.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10489__auto___16459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10489__auto___16459,out){
return (function (){
var f__10490__auto__ = (function (){var switch__10433__auto__ = ((function (c__10489__auto___16459,out){
return (function (state_16425){
var state_val_16426 = (state_16425[(1)]);
if((state_val_16426 === (7))){
var inst_16421 = (state_16425[(2)]);
var state_16425__$1 = state_16425;
var statearr_16427_16460 = state_16425__$1;
(statearr_16427_16460[(2)] = inst_16421);

(statearr_16427_16460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (1))){
var inst_16388 = (new Array(n));
var inst_16389 = inst_16388;
var inst_16390 = (0);
var state_16425__$1 = (function (){var statearr_16428 = state_16425;
(statearr_16428[(7)] = inst_16389);

(statearr_16428[(8)] = inst_16390);

return statearr_16428;
})();
var statearr_16429_16461 = state_16425__$1;
(statearr_16429_16461[(2)] = null);

(statearr_16429_16461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (4))){
var inst_16393 = (state_16425[(9)]);
var inst_16393__$1 = (state_16425[(2)]);
var inst_16394 = (inst_16393__$1 == null);
var inst_16395 = cljs.core.not.call(null,inst_16394);
var state_16425__$1 = (function (){var statearr_16430 = state_16425;
(statearr_16430[(9)] = inst_16393__$1);

return statearr_16430;
})();
if(inst_16395){
var statearr_16431_16462 = state_16425__$1;
(statearr_16431_16462[(1)] = (5));

} else {
var statearr_16432_16463 = state_16425__$1;
(statearr_16432_16463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (15))){
var inst_16415 = (state_16425[(2)]);
var state_16425__$1 = state_16425;
var statearr_16433_16464 = state_16425__$1;
(statearr_16433_16464[(2)] = inst_16415);

(statearr_16433_16464[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (13))){
var state_16425__$1 = state_16425;
var statearr_16434_16465 = state_16425__$1;
(statearr_16434_16465[(2)] = null);

(statearr_16434_16465[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (6))){
var inst_16390 = (state_16425[(8)]);
var inst_16411 = (inst_16390 > (0));
var state_16425__$1 = state_16425;
if(cljs.core.truth_(inst_16411)){
var statearr_16435_16466 = state_16425__$1;
(statearr_16435_16466[(1)] = (12));

} else {
var statearr_16436_16467 = state_16425__$1;
(statearr_16436_16467[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (3))){
var inst_16423 = (state_16425[(2)]);
var state_16425__$1 = state_16425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16425__$1,inst_16423);
} else {
if((state_val_16426 === (12))){
var inst_16389 = (state_16425[(7)]);
var inst_16413 = cljs.core.vec.call(null,inst_16389);
var state_16425__$1 = state_16425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16425__$1,(15),out,inst_16413);
} else {
if((state_val_16426 === (2))){
var state_16425__$1 = state_16425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16425__$1,(4),ch);
} else {
if((state_val_16426 === (11))){
var inst_16405 = (state_16425[(2)]);
var inst_16406 = (new Array(n));
var inst_16389 = inst_16406;
var inst_16390 = (0);
var state_16425__$1 = (function (){var statearr_16437 = state_16425;
(statearr_16437[(7)] = inst_16389);

(statearr_16437[(8)] = inst_16390);

(statearr_16437[(10)] = inst_16405);

return statearr_16437;
})();
var statearr_16438_16468 = state_16425__$1;
(statearr_16438_16468[(2)] = null);

(statearr_16438_16468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (9))){
var inst_16389 = (state_16425[(7)]);
var inst_16403 = cljs.core.vec.call(null,inst_16389);
var state_16425__$1 = state_16425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16425__$1,(11),out,inst_16403);
} else {
if((state_val_16426 === (5))){
var inst_16389 = (state_16425[(7)]);
var inst_16390 = (state_16425[(8)]);
var inst_16398 = (state_16425[(11)]);
var inst_16393 = (state_16425[(9)]);
var inst_16397 = (inst_16389[inst_16390] = inst_16393);
var inst_16398__$1 = (inst_16390 + (1));
var inst_16399 = (inst_16398__$1 < n);
var state_16425__$1 = (function (){var statearr_16439 = state_16425;
(statearr_16439[(12)] = inst_16397);

(statearr_16439[(11)] = inst_16398__$1);

return statearr_16439;
})();
if(cljs.core.truth_(inst_16399)){
var statearr_16440_16469 = state_16425__$1;
(statearr_16440_16469[(1)] = (8));

} else {
var statearr_16441_16470 = state_16425__$1;
(statearr_16441_16470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (14))){
var inst_16418 = (state_16425[(2)]);
var inst_16419 = cljs.core.async.close_BANG_.call(null,out);
var state_16425__$1 = (function (){var statearr_16443 = state_16425;
(statearr_16443[(13)] = inst_16418);

return statearr_16443;
})();
var statearr_16444_16471 = state_16425__$1;
(statearr_16444_16471[(2)] = inst_16419);

(statearr_16444_16471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (10))){
var inst_16409 = (state_16425[(2)]);
var state_16425__$1 = state_16425;
var statearr_16445_16472 = state_16425__$1;
(statearr_16445_16472[(2)] = inst_16409);

(statearr_16445_16472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16426 === (8))){
var inst_16389 = (state_16425[(7)]);
var inst_16398 = (state_16425[(11)]);
var tmp16442 = inst_16389;
var inst_16389__$1 = tmp16442;
var inst_16390 = inst_16398;
var state_16425__$1 = (function (){var statearr_16446 = state_16425;
(statearr_16446[(7)] = inst_16389__$1);

(statearr_16446[(8)] = inst_16390);

return statearr_16446;
})();
var statearr_16447_16473 = state_16425__$1;
(statearr_16447_16473[(2)] = null);

(statearr_16447_16473[(1)] = (2));


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
});})(c__10489__auto___16459,out))
;
return ((function (switch__10433__auto__,c__10489__auto___16459,out){
return (function() {
var cljs$core$async$state_machine__10434__auto__ = null;
var cljs$core$async$state_machine__10434__auto____0 = (function (){
var statearr_16451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16451[(0)] = cljs$core$async$state_machine__10434__auto__);

(statearr_16451[(1)] = (1));

return statearr_16451;
});
var cljs$core$async$state_machine__10434__auto____1 = (function (state_16425){
while(true){
var ret_value__10435__auto__ = (function (){try{while(true){
var result__10436__auto__ = switch__10433__auto__.call(null,state_16425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10436__auto__;
}
break;
}
}catch (e16452){if((e16452 instanceof Object)){
var ex__10437__auto__ = e16452;
var statearr_16453_16474 = state_16425;
(statearr_16453_16474[(5)] = ex__10437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16475 = state_16425;
state_16425 = G__16475;
continue;
} else {
return ret_value__10435__auto__;
}
break;
}
});
cljs$core$async$state_machine__10434__auto__ = function(state_16425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10434__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10434__auto____1.call(this,state_16425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10434__auto____0;
cljs$core$async$state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10434__auto____1;
return cljs$core$async$state_machine__10434__auto__;
})()
;})(switch__10433__auto__,c__10489__auto___16459,out))
})();
var state__10491__auto__ = (function (){var statearr_16454 = f__10490__auto__.call(null);
(statearr_16454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10489__auto___16459);

return statearr_16454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10491__auto__);
});})(c__10489__auto___16459,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args16476 = [];
var len__8561__auto___16550 = arguments.length;
var i__8562__auto___16551 = (0);
while(true){
if((i__8562__auto___16551 < len__8561__auto___16550)){
args16476.push((arguments[i__8562__auto___16551]));

var G__16552 = (i__8562__auto___16551 + (1));
i__8562__auto___16551 = G__16552;
continue;
} else {
}
break;
}

var G__16478 = args16476.length;
switch (G__16478) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16476.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10489__auto___16554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10489__auto___16554,out){
return (function (){
var f__10490__auto__ = (function (){var switch__10433__auto__ = ((function (c__10489__auto___16554,out){
return (function (state_16520){
var state_val_16521 = (state_16520[(1)]);
if((state_val_16521 === (7))){
var inst_16516 = (state_16520[(2)]);
var state_16520__$1 = state_16520;
var statearr_16522_16555 = state_16520__$1;
(statearr_16522_16555[(2)] = inst_16516);

(statearr_16522_16555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16521 === (1))){
var inst_16479 = [];
var inst_16480 = inst_16479;
var inst_16481 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16520__$1 = (function (){var statearr_16523 = state_16520;
(statearr_16523[(7)] = inst_16481);

(statearr_16523[(8)] = inst_16480);

return statearr_16523;
})();
var statearr_16524_16556 = state_16520__$1;
(statearr_16524_16556[(2)] = null);

(statearr_16524_16556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16521 === (4))){
var inst_16484 = (state_16520[(9)]);
var inst_16484__$1 = (state_16520[(2)]);
var inst_16485 = (inst_16484__$1 == null);
var inst_16486 = cljs.core.not.call(null,inst_16485);
var state_16520__$1 = (function (){var statearr_16525 = state_16520;
(statearr_16525[(9)] = inst_16484__$1);

return statearr_16525;
})();
if(inst_16486){
var statearr_16526_16557 = state_16520__$1;
(statearr_16526_16557[(1)] = (5));

} else {
var statearr_16527_16558 = state_16520__$1;
(statearr_16527_16558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16521 === (15))){
var inst_16510 = (state_16520[(2)]);
var state_16520__$1 = state_16520;
var statearr_16528_16559 = state_16520__$1;
(statearr_16528_16559[(2)] = inst_16510);

(statearr_16528_16559[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16521 === (13))){
var state_16520__$1 = state_16520;
var statearr_16529_16560 = state_16520__$1;
(statearr_16529_16560[(2)] = null);

(statearr_16529_16560[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16521 === (6))){
var inst_16480 = (state_16520[(8)]);
var inst_16505 = inst_16480.length;
var inst_16506 = (inst_16505 > (0));
var state_16520__$1 = state_16520;
if(cljs.core.truth_(inst_16506)){
var statearr_16530_16561 = state_16520__$1;
(statearr_16530_16561[(1)] = (12));

} else {
var statearr_16531_16562 = state_16520__$1;
(statearr_16531_16562[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16521 === (3))){
var inst_16518 = (state_16520[(2)]);
var state_16520__$1 = state_16520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16520__$1,inst_16518);
} else {
if((state_val_16521 === (12))){
var inst_16480 = (state_16520[(8)]);
var inst_16508 = cljs.core.vec.call(null,inst_16480);
var state_16520__$1 = state_16520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16520__$1,(15),out,inst_16508);
} else {
if((state_val_16521 === (2))){
var state_16520__$1 = state_16520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16520__$1,(4),ch);
} else {
if((state_val_16521 === (11))){
var inst_16488 = (state_16520[(10)]);
var inst_16484 = (state_16520[(9)]);
var inst_16498 = (state_16520[(2)]);
var inst_16499 = [];
var inst_16500 = inst_16499.push(inst_16484);
var inst_16480 = inst_16499;
var inst_16481 = inst_16488;
var state_16520__$1 = (function (){var statearr_16532 = state_16520;
(statearr_16532[(7)] = inst_16481);

(statearr_16532[(8)] = inst_16480);

(statearr_16532[(11)] = inst_16498);

(statearr_16532[(12)] = inst_16500);

return statearr_16532;
})();
var statearr_16533_16563 = state_16520__$1;
(statearr_16533_16563[(2)] = null);

(statearr_16533_16563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16521 === (9))){
var inst_16480 = (state_16520[(8)]);
var inst_16496 = cljs.core.vec.call(null,inst_16480);
var state_16520__$1 = state_16520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16520__$1,(11),out,inst_16496);
} else {
if((state_val_16521 === (5))){
var inst_16488 = (state_16520[(10)]);
var inst_16481 = (state_16520[(7)]);
var inst_16484 = (state_16520[(9)]);
var inst_16488__$1 = f.call(null,inst_16484);
var inst_16489 = cljs.core._EQ_.call(null,inst_16488__$1,inst_16481);
var inst_16490 = cljs.core.keyword_identical_QMARK_.call(null,inst_16481,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_16491 = (inst_16489) || (inst_16490);
var state_16520__$1 = (function (){var statearr_16534 = state_16520;
(statearr_16534[(10)] = inst_16488__$1);

return statearr_16534;
})();
if(cljs.core.truth_(inst_16491)){
var statearr_16535_16564 = state_16520__$1;
(statearr_16535_16564[(1)] = (8));

} else {
var statearr_16536_16565 = state_16520__$1;
(statearr_16536_16565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16521 === (14))){
var inst_16513 = (state_16520[(2)]);
var inst_16514 = cljs.core.async.close_BANG_.call(null,out);
var state_16520__$1 = (function (){var statearr_16538 = state_16520;
(statearr_16538[(13)] = inst_16513);

return statearr_16538;
})();
var statearr_16539_16566 = state_16520__$1;
(statearr_16539_16566[(2)] = inst_16514);

(statearr_16539_16566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16521 === (10))){
var inst_16503 = (state_16520[(2)]);
var state_16520__$1 = state_16520;
var statearr_16540_16567 = state_16520__$1;
(statearr_16540_16567[(2)] = inst_16503);

(statearr_16540_16567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16521 === (8))){
var inst_16488 = (state_16520[(10)]);
var inst_16480 = (state_16520[(8)]);
var inst_16484 = (state_16520[(9)]);
var inst_16493 = inst_16480.push(inst_16484);
var tmp16537 = inst_16480;
var inst_16480__$1 = tmp16537;
var inst_16481 = inst_16488;
var state_16520__$1 = (function (){var statearr_16541 = state_16520;
(statearr_16541[(7)] = inst_16481);

(statearr_16541[(14)] = inst_16493);

(statearr_16541[(8)] = inst_16480__$1);

return statearr_16541;
})();
var statearr_16542_16568 = state_16520__$1;
(statearr_16542_16568[(2)] = null);

(statearr_16542_16568[(1)] = (2));


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
});})(c__10489__auto___16554,out))
;
return ((function (switch__10433__auto__,c__10489__auto___16554,out){
return (function() {
var cljs$core$async$state_machine__10434__auto__ = null;
var cljs$core$async$state_machine__10434__auto____0 = (function (){
var statearr_16546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16546[(0)] = cljs$core$async$state_machine__10434__auto__);

(statearr_16546[(1)] = (1));

return statearr_16546;
});
var cljs$core$async$state_machine__10434__auto____1 = (function (state_16520){
while(true){
var ret_value__10435__auto__ = (function (){try{while(true){
var result__10436__auto__ = switch__10433__auto__.call(null,state_16520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10436__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10436__auto__;
}
break;
}
}catch (e16547){if((e16547 instanceof Object)){
var ex__10437__auto__ = e16547;
var statearr_16548_16569 = state_16520;
(statearr_16548_16569[(5)] = ex__10437__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10435__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16570 = state_16520;
state_16520 = G__16570;
continue;
} else {
return ret_value__10435__auto__;
}
break;
}
});
cljs$core$async$state_machine__10434__auto__ = function(state_16520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10434__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10434__auto____1.call(this,state_16520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10434__auto____0;
cljs$core$async$state_machine__10434__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10434__auto____1;
return cljs$core$async$state_machine__10434__auto__;
})()
;})(switch__10433__auto__,c__10489__auto___16554,out))
})();
var state__10491__auto__ = (function (){var statearr_16549 = f__10490__auto__.call(null);
(statearr_16549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10489__auto___16554);

return statearr_16549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10491__auto__);
});})(c__10489__auto___16554,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map