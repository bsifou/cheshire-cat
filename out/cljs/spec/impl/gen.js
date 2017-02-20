// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__8059__auto__,writer__8060__auto__,opt__8061__auto__){
return cljs.core._write.call(null,writer__8060__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15516 = arguments.length;
var i__8562__auto___15517 = (0);
while(true){
if((i__8562__auto___15517 < len__8561__auto___15516)){
args__8568__auto__.push((arguments[i__8562__auto___15517]));

var G__15518 = (i__8562__auto___15517 + (1));
i__8562__auto___15517 = G__15518;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq15515){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15515));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15520 = arguments.length;
var i__8562__auto___15521 = (0);
while(true){
if((i__8562__auto___15521 < len__8561__auto___15520)){
args__8568__auto__.push((arguments[i__8562__auto___15521]));

var G__15522 = (i__8562__auto___15521 + (1));
i__8562__auto___15521 = G__15522;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq15519){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15519));
});

var g_QMARK__15523 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_15524 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__15523){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__15523))
,null));
var mkg_15525 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__15523,g_15524){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__15523,g_15524))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__15523,g_15524,mkg_15525){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__15523).call(null,x);
});})(g_QMARK__15523,g_15524,mkg_15525))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__15523,g_15524,mkg_15525){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_15525).call(null,gfn);
});})(g_QMARK__15523,g_15524,mkg_15525))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__15523,g_15524,mkg_15525){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_15524).call(null,generator);
});})(g_QMARK__15523,g_15524,mkg_15525))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__9850__auto___15545 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__9850__auto___15545){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15546 = arguments.length;
var i__8562__auto___15547 = (0);
while(true){
if((i__8562__auto___15547 < len__8561__auto___15546)){
args__8568__auto__.push((arguments[i__8562__auto___15547]));

var G__15548 = (i__8562__auto___15547 + (1));
i__8562__auto___15547 = G__15548;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9850__auto___15545))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9850__auto___15545){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9850__auto___15545),args);
});})(g__9850__auto___15545))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__9850__auto___15545){
return (function (seq15526){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15526));
});})(g__9850__auto___15545))
;


var g__9850__auto___15549 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__9850__auto___15549){
return (function cljs$spec$impl$gen$list(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15550 = arguments.length;
var i__8562__auto___15551 = (0);
while(true){
if((i__8562__auto___15551 < len__8561__auto___15550)){
args__8568__auto__.push((arguments[i__8562__auto___15551]));

var G__15552 = (i__8562__auto___15551 + (1));
i__8562__auto___15551 = G__15552;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9850__auto___15549))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9850__auto___15549){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9850__auto___15549),args);
});})(g__9850__auto___15549))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__9850__auto___15549){
return (function (seq15527){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15527));
});})(g__9850__auto___15549))
;


var g__9850__auto___15553 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__9850__auto___15553){
return (function cljs$spec$impl$gen$map(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15554 = arguments.length;
var i__8562__auto___15555 = (0);
while(true){
if((i__8562__auto___15555 < len__8561__auto___15554)){
args__8568__auto__.push((arguments[i__8562__auto___15555]));

var G__15556 = (i__8562__auto___15555 + (1));
i__8562__auto___15555 = G__15556;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9850__auto___15553))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9850__auto___15553){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9850__auto___15553),args);
});})(g__9850__auto___15553))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__9850__auto___15553){
return (function (seq15528){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15528));
});})(g__9850__auto___15553))
;


var g__9850__auto___15557 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__9850__auto___15557){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15558 = arguments.length;
var i__8562__auto___15559 = (0);
while(true){
if((i__8562__auto___15559 < len__8561__auto___15558)){
args__8568__auto__.push((arguments[i__8562__auto___15559]));

var G__15560 = (i__8562__auto___15559 + (1));
i__8562__auto___15559 = G__15560;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9850__auto___15557))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9850__auto___15557){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9850__auto___15557),args);
});})(g__9850__auto___15557))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__9850__auto___15557){
return (function (seq15529){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15529));
});})(g__9850__auto___15557))
;


var g__9850__auto___15561 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__9850__auto___15561){
return (function cljs$spec$impl$gen$set(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15562 = arguments.length;
var i__8562__auto___15563 = (0);
while(true){
if((i__8562__auto___15563 < len__8561__auto___15562)){
args__8568__auto__.push((arguments[i__8562__auto___15563]));

var G__15564 = (i__8562__auto___15563 + (1));
i__8562__auto___15563 = G__15564;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9850__auto___15561))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9850__auto___15561){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9850__auto___15561),args);
});})(g__9850__auto___15561))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__9850__auto___15561){
return (function (seq15530){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15530));
});})(g__9850__auto___15561))
;


var g__9850__auto___15565 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__9850__auto___15565){
return (function cljs$spec$impl$gen$vector(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15566 = arguments.length;
var i__8562__auto___15567 = (0);
while(true){
if((i__8562__auto___15567 < len__8561__auto___15566)){
args__8568__auto__.push((arguments[i__8562__auto___15567]));

var G__15568 = (i__8562__auto___15567 + (1));
i__8562__auto___15567 = G__15568;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9850__auto___15565))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9850__auto___15565){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9850__auto___15565),args);
});})(g__9850__auto___15565))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__9850__auto___15565){
return (function (seq15531){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15531));
});})(g__9850__auto___15565))
;


var g__9850__auto___15569 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__9850__auto___15569){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15570 = arguments.length;
var i__8562__auto___15571 = (0);
while(true){
if((i__8562__auto___15571 < len__8561__auto___15570)){
args__8568__auto__.push((arguments[i__8562__auto___15571]));

var G__15572 = (i__8562__auto___15571 + (1));
i__8562__auto___15571 = G__15572;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9850__auto___15569))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9850__auto___15569){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9850__auto___15569),args);
});})(g__9850__auto___15569))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__9850__auto___15569){
return (function (seq15532){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15532));
});})(g__9850__auto___15569))
;


var g__9850__auto___15573 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__9850__auto___15573){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15574 = arguments.length;
var i__8562__auto___15575 = (0);
while(true){
if((i__8562__auto___15575 < len__8561__auto___15574)){
args__8568__auto__.push((arguments[i__8562__auto___15575]));

var G__15576 = (i__8562__auto___15575 + (1));
i__8562__auto___15575 = G__15576;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9850__auto___15573))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9850__auto___15573){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9850__auto___15573),args);
});})(g__9850__auto___15573))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__9850__auto___15573){
return (function (seq15533){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15533));
});})(g__9850__auto___15573))
;


var g__9850__auto___15577 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__9850__auto___15577){
return (function cljs$spec$impl$gen$elements(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15578 = arguments.length;
var i__8562__auto___15579 = (0);
while(true){
if((i__8562__auto___15579 < len__8561__auto___15578)){
args__8568__auto__.push((arguments[i__8562__auto___15579]));

var G__15580 = (i__8562__auto___15579 + (1));
i__8562__auto___15579 = G__15580;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9850__auto___15577))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9850__auto___15577){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9850__auto___15577),args);
});})(g__9850__auto___15577))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__9850__auto___15577){
return (function (seq15534){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15534));
});})(g__9850__auto___15577))
;


var g__9850__auto___15581 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__9850__auto___15581){
return (function cljs$spec$impl$gen$bind(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15582 = arguments.length;
var i__8562__auto___15583 = (0);
while(true){
if((i__8562__auto___15583 < len__8561__auto___15582)){
args__8568__auto__.push((arguments[i__8562__auto___15583]));

var G__15584 = (i__8562__auto___15583 + (1));
i__8562__auto___15583 = G__15584;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9850__auto___15581))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9850__auto___15581){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9850__auto___15581),args);
});})(g__9850__auto___15581))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__9850__auto___15581){
return (function (seq15535){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15535));
});})(g__9850__auto___15581))
;


var g__9850__auto___15585 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__9850__auto___15585){
return (function cljs$spec$impl$gen$choose(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15586 = arguments.length;
var i__8562__auto___15587 = (0);
while(true){
if((i__8562__auto___15587 < len__8561__auto___15586)){
args__8568__auto__.push((arguments[i__8562__auto___15587]));

var G__15588 = (i__8562__auto___15587 + (1));
i__8562__auto___15587 = G__15588;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9850__auto___15585))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9850__auto___15585){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9850__auto___15585),args);
});})(g__9850__auto___15585))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__9850__auto___15585){
return (function (seq15536){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15536));
});})(g__9850__auto___15585))
;


var g__9850__auto___15589 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__9850__auto___15589){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15590 = arguments.length;
var i__8562__auto___15591 = (0);
while(true){
if((i__8562__auto___15591 < len__8561__auto___15590)){
args__8568__auto__.push((arguments[i__8562__auto___15591]));

var G__15592 = (i__8562__auto___15591 + (1));
i__8562__auto___15591 = G__15592;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9850__auto___15589))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9850__auto___15589){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9850__auto___15589),args);
});})(g__9850__auto___15589))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__9850__auto___15589){
return (function (seq15537){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15537));
});})(g__9850__auto___15589))
;


var g__9850__auto___15593 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__9850__auto___15593){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15594 = arguments.length;
var i__8562__auto___15595 = (0);
while(true){
if((i__8562__auto___15595 < len__8561__auto___15594)){
args__8568__auto__.push((arguments[i__8562__auto___15595]));

var G__15596 = (i__8562__auto___15595 + (1));
i__8562__auto___15595 = G__15596;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9850__auto___15593))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9850__auto___15593){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9850__auto___15593),args);
});})(g__9850__auto___15593))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__9850__auto___15593){
return (function (seq15538){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15538));
});})(g__9850__auto___15593))
;


var g__9850__auto___15597 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__9850__auto___15597){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15598 = arguments.length;
var i__8562__auto___15599 = (0);
while(true){
if((i__8562__auto___15599 < len__8561__auto___15598)){
args__8568__auto__.push((arguments[i__8562__auto___15599]));

var G__15600 = (i__8562__auto___15599 + (1));
i__8562__auto___15599 = G__15600;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9850__auto___15597))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9850__auto___15597){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9850__auto___15597),args);
});})(g__9850__auto___15597))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__9850__auto___15597){
return (function (seq15539){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15539));
});})(g__9850__auto___15597))
;


var g__9850__auto___15601 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__9850__auto___15601){
return (function cljs$spec$impl$gen$sample(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15602 = arguments.length;
var i__8562__auto___15603 = (0);
while(true){
if((i__8562__auto___15603 < len__8561__auto___15602)){
args__8568__auto__.push((arguments[i__8562__auto___15603]));

var G__15604 = (i__8562__auto___15603 + (1));
i__8562__auto___15603 = G__15604;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9850__auto___15601))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9850__auto___15601){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9850__auto___15601),args);
});})(g__9850__auto___15601))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__9850__auto___15601){
return (function (seq15540){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15540));
});})(g__9850__auto___15601))
;


var g__9850__auto___15605 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__9850__auto___15605){
return (function cljs$spec$impl$gen$return(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15606 = arguments.length;
var i__8562__auto___15607 = (0);
while(true){
if((i__8562__auto___15607 < len__8561__auto___15606)){
args__8568__auto__.push((arguments[i__8562__auto___15607]));

var G__15608 = (i__8562__auto___15607 + (1));
i__8562__auto___15607 = G__15608;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9850__auto___15605))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9850__auto___15605){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9850__auto___15605),args);
});})(g__9850__auto___15605))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__9850__auto___15605){
return (function (seq15541){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15541));
});})(g__9850__auto___15605))
;


var g__9850__auto___15609 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__9850__auto___15609){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15610 = arguments.length;
var i__8562__auto___15611 = (0);
while(true){
if((i__8562__auto___15611 < len__8561__auto___15610)){
args__8568__auto__.push((arguments[i__8562__auto___15611]));

var G__15612 = (i__8562__auto___15611 + (1));
i__8562__auto___15611 = G__15612;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9850__auto___15609))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9850__auto___15609){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9850__auto___15609),args);
});})(g__9850__auto___15609))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__9850__auto___15609){
return (function (seq15542){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15542));
});})(g__9850__auto___15609))
;


var g__9850__auto___15613 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__9850__auto___15613){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15614 = arguments.length;
var i__8562__auto___15615 = (0);
while(true){
if((i__8562__auto___15615 < len__8561__auto___15614)){
args__8568__auto__.push((arguments[i__8562__auto___15615]));

var G__15616 = (i__8562__auto___15615 + (1));
i__8562__auto___15615 = G__15616;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9850__auto___15613))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9850__auto___15613){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9850__auto___15613),args);
});})(g__9850__auto___15613))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__9850__auto___15613){
return (function (seq15543){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15543));
});})(g__9850__auto___15613))
;


var g__9850__auto___15617 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__9850__auto___15617){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15618 = arguments.length;
var i__8562__auto___15619 = (0);
while(true){
if((i__8562__auto___15619 < len__8561__auto___15618)){
args__8568__auto__.push((arguments[i__8562__auto___15619]));

var G__15620 = (i__8562__auto___15619 + (1));
i__8562__auto___15619 = G__15620;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9850__auto___15617))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9850__auto___15617){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9850__auto___15617),args);
});})(g__9850__auto___15617))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__9850__auto___15617){
return (function (seq15544){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15544));
});})(g__9850__auto___15617))
;

var g__9863__auto___15642 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__9863__auto___15642){
return (function cljs$spec$impl$gen$any(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15643 = arguments.length;
var i__8562__auto___15644 = (0);
while(true){
if((i__8562__auto___15644 < len__8561__auto___15643)){
args__8568__auto__.push((arguments[i__8562__auto___15644]));

var G__15645 = (i__8562__auto___15644 + (1));
i__8562__auto___15644 = G__15645;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9863__auto___15642))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9863__auto___15642){
return (function (args){
return cljs.core.deref.call(null,g__9863__auto___15642);
});})(g__9863__auto___15642))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__9863__auto___15642){
return (function (seq15621){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15621));
});})(g__9863__auto___15642))
;


var g__9863__auto___15646 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__9863__auto___15646){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15647 = arguments.length;
var i__8562__auto___15648 = (0);
while(true){
if((i__8562__auto___15648 < len__8561__auto___15647)){
args__8568__auto__.push((arguments[i__8562__auto___15648]));

var G__15649 = (i__8562__auto___15648 + (1));
i__8562__auto___15648 = G__15649;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9863__auto___15646))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9863__auto___15646){
return (function (args){
return cljs.core.deref.call(null,g__9863__auto___15646);
});})(g__9863__auto___15646))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__9863__auto___15646){
return (function (seq15622){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15622));
});})(g__9863__auto___15646))
;


var g__9863__auto___15650 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__9863__auto___15650){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15651 = arguments.length;
var i__8562__auto___15652 = (0);
while(true){
if((i__8562__auto___15652 < len__8561__auto___15651)){
args__8568__auto__.push((arguments[i__8562__auto___15652]));

var G__15653 = (i__8562__auto___15652 + (1));
i__8562__auto___15652 = G__15653;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9863__auto___15650))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9863__auto___15650){
return (function (args){
return cljs.core.deref.call(null,g__9863__auto___15650);
});})(g__9863__auto___15650))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__9863__auto___15650){
return (function (seq15623){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15623));
});})(g__9863__auto___15650))
;


var g__9863__auto___15654 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__9863__auto___15654){
return (function cljs$spec$impl$gen$char(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15655 = arguments.length;
var i__8562__auto___15656 = (0);
while(true){
if((i__8562__auto___15656 < len__8561__auto___15655)){
args__8568__auto__.push((arguments[i__8562__auto___15656]));

var G__15657 = (i__8562__auto___15656 + (1));
i__8562__auto___15656 = G__15657;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9863__auto___15654))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9863__auto___15654){
return (function (args){
return cljs.core.deref.call(null,g__9863__auto___15654);
});})(g__9863__auto___15654))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__9863__auto___15654){
return (function (seq15624){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15624));
});})(g__9863__auto___15654))
;


var g__9863__auto___15658 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__9863__auto___15658){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15659 = arguments.length;
var i__8562__auto___15660 = (0);
while(true){
if((i__8562__auto___15660 < len__8561__auto___15659)){
args__8568__auto__.push((arguments[i__8562__auto___15660]));

var G__15661 = (i__8562__auto___15660 + (1));
i__8562__auto___15660 = G__15661;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9863__auto___15658))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9863__auto___15658){
return (function (args){
return cljs.core.deref.call(null,g__9863__auto___15658);
});})(g__9863__auto___15658))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__9863__auto___15658){
return (function (seq15625){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15625));
});})(g__9863__auto___15658))
;


var g__9863__auto___15662 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__9863__auto___15662){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15663 = arguments.length;
var i__8562__auto___15664 = (0);
while(true){
if((i__8562__auto___15664 < len__8561__auto___15663)){
args__8568__auto__.push((arguments[i__8562__auto___15664]));

var G__15665 = (i__8562__auto___15664 + (1));
i__8562__auto___15664 = G__15665;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9863__auto___15662))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9863__auto___15662){
return (function (args){
return cljs.core.deref.call(null,g__9863__auto___15662);
});})(g__9863__auto___15662))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__9863__auto___15662){
return (function (seq15626){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15626));
});})(g__9863__auto___15662))
;


var g__9863__auto___15666 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__9863__auto___15666){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15667 = arguments.length;
var i__8562__auto___15668 = (0);
while(true){
if((i__8562__auto___15668 < len__8561__auto___15667)){
args__8568__auto__.push((arguments[i__8562__auto___15668]));

var G__15669 = (i__8562__auto___15668 + (1));
i__8562__auto___15668 = G__15669;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9863__auto___15666))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9863__auto___15666){
return (function (args){
return cljs.core.deref.call(null,g__9863__auto___15666);
});})(g__9863__auto___15666))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__9863__auto___15666){
return (function (seq15627){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15627));
});})(g__9863__auto___15666))
;


var g__9863__auto___15670 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__9863__auto___15670){
return (function cljs$spec$impl$gen$double(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15671 = arguments.length;
var i__8562__auto___15672 = (0);
while(true){
if((i__8562__auto___15672 < len__8561__auto___15671)){
args__8568__auto__.push((arguments[i__8562__auto___15672]));

var G__15673 = (i__8562__auto___15672 + (1));
i__8562__auto___15672 = G__15673;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9863__auto___15670))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9863__auto___15670){
return (function (args){
return cljs.core.deref.call(null,g__9863__auto___15670);
});})(g__9863__auto___15670))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__9863__auto___15670){
return (function (seq15628){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15628));
});})(g__9863__auto___15670))
;


var g__9863__auto___15674 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__9863__auto___15674){
return (function cljs$spec$impl$gen$int(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15675 = arguments.length;
var i__8562__auto___15676 = (0);
while(true){
if((i__8562__auto___15676 < len__8561__auto___15675)){
args__8568__auto__.push((arguments[i__8562__auto___15676]));

var G__15677 = (i__8562__auto___15676 + (1));
i__8562__auto___15676 = G__15677;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9863__auto___15674))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9863__auto___15674){
return (function (args){
return cljs.core.deref.call(null,g__9863__auto___15674);
});})(g__9863__auto___15674))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__9863__auto___15674){
return (function (seq15629){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15629));
});})(g__9863__auto___15674))
;


var g__9863__auto___15678 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__9863__auto___15678){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15679 = arguments.length;
var i__8562__auto___15680 = (0);
while(true){
if((i__8562__auto___15680 < len__8561__auto___15679)){
args__8568__auto__.push((arguments[i__8562__auto___15680]));

var G__15681 = (i__8562__auto___15680 + (1));
i__8562__auto___15680 = G__15681;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9863__auto___15678))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9863__auto___15678){
return (function (args){
return cljs.core.deref.call(null,g__9863__auto___15678);
});})(g__9863__auto___15678))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__9863__auto___15678){
return (function (seq15630){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15630));
});})(g__9863__auto___15678))
;


var g__9863__auto___15682 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__9863__auto___15682){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15683 = arguments.length;
var i__8562__auto___15684 = (0);
while(true){
if((i__8562__auto___15684 < len__8561__auto___15683)){
args__8568__auto__.push((arguments[i__8562__auto___15684]));

var G__15685 = (i__8562__auto___15684 + (1));
i__8562__auto___15684 = G__15685;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9863__auto___15682))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9863__auto___15682){
return (function (args){
return cljs.core.deref.call(null,g__9863__auto___15682);
});})(g__9863__auto___15682))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__9863__auto___15682){
return (function (seq15631){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15631));
});})(g__9863__auto___15682))
;


var g__9863__auto___15686 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__9863__auto___15686){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15687 = arguments.length;
var i__8562__auto___15688 = (0);
while(true){
if((i__8562__auto___15688 < len__8561__auto___15687)){
args__8568__auto__.push((arguments[i__8562__auto___15688]));

var G__15689 = (i__8562__auto___15688 + (1));
i__8562__auto___15688 = G__15689;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9863__auto___15686))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9863__auto___15686){
return (function (args){
return cljs.core.deref.call(null,g__9863__auto___15686);
});})(g__9863__auto___15686))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__9863__auto___15686){
return (function (seq15632){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15632));
});})(g__9863__auto___15686))
;


var g__9863__auto___15690 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__9863__auto___15690){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15691 = arguments.length;
var i__8562__auto___15692 = (0);
while(true){
if((i__8562__auto___15692 < len__8561__auto___15691)){
args__8568__auto__.push((arguments[i__8562__auto___15692]));

var G__15693 = (i__8562__auto___15692 + (1));
i__8562__auto___15692 = G__15693;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9863__auto___15690))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9863__auto___15690){
return (function (args){
return cljs.core.deref.call(null,g__9863__auto___15690);
});})(g__9863__auto___15690))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__9863__auto___15690){
return (function (seq15633){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15633));
});})(g__9863__auto___15690))
;


var g__9863__auto___15694 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__9863__auto___15694){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15695 = arguments.length;
var i__8562__auto___15696 = (0);
while(true){
if((i__8562__auto___15696 < len__8561__auto___15695)){
args__8568__auto__.push((arguments[i__8562__auto___15696]));

var G__15697 = (i__8562__auto___15696 + (1));
i__8562__auto___15696 = G__15697;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9863__auto___15694))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9863__auto___15694){
return (function (args){
return cljs.core.deref.call(null,g__9863__auto___15694);
});})(g__9863__auto___15694))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__9863__auto___15694){
return (function (seq15634){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15634));
});})(g__9863__auto___15694))
;


var g__9863__auto___15698 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__9863__auto___15698){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15699 = arguments.length;
var i__8562__auto___15700 = (0);
while(true){
if((i__8562__auto___15700 < len__8561__auto___15699)){
args__8568__auto__.push((arguments[i__8562__auto___15700]));

var G__15701 = (i__8562__auto___15700 + (1));
i__8562__auto___15700 = G__15701;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9863__auto___15698))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9863__auto___15698){
return (function (args){
return cljs.core.deref.call(null,g__9863__auto___15698);
});})(g__9863__auto___15698))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__9863__auto___15698){
return (function (seq15635){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15635));
});})(g__9863__auto___15698))
;


var g__9863__auto___15702 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__9863__auto___15702){
return (function cljs$spec$impl$gen$string(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15703 = arguments.length;
var i__8562__auto___15704 = (0);
while(true){
if((i__8562__auto___15704 < len__8561__auto___15703)){
args__8568__auto__.push((arguments[i__8562__auto___15704]));

var G__15705 = (i__8562__auto___15704 + (1));
i__8562__auto___15704 = G__15705;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9863__auto___15702))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9863__auto___15702){
return (function (args){
return cljs.core.deref.call(null,g__9863__auto___15702);
});})(g__9863__auto___15702))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__9863__auto___15702){
return (function (seq15636){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15636));
});})(g__9863__auto___15702))
;


var g__9863__auto___15706 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__9863__auto___15706){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15707 = arguments.length;
var i__8562__auto___15708 = (0);
while(true){
if((i__8562__auto___15708 < len__8561__auto___15707)){
args__8568__auto__.push((arguments[i__8562__auto___15708]));

var G__15709 = (i__8562__auto___15708 + (1));
i__8562__auto___15708 = G__15709;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9863__auto___15706))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9863__auto___15706){
return (function (args){
return cljs.core.deref.call(null,g__9863__auto___15706);
});})(g__9863__auto___15706))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__9863__auto___15706){
return (function (seq15637){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15637));
});})(g__9863__auto___15706))
;


var g__9863__auto___15710 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__9863__auto___15710){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15711 = arguments.length;
var i__8562__auto___15712 = (0);
while(true){
if((i__8562__auto___15712 < len__8561__auto___15711)){
args__8568__auto__.push((arguments[i__8562__auto___15712]));

var G__15713 = (i__8562__auto___15712 + (1));
i__8562__auto___15712 = G__15713;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9863__auto___15710))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9863__auto___15710){
return (function (args){
return cljs.core.deref.call(null,g__9863__auto___15710);
});})(g__9863__auto___15710))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__9863__auto___15710){
return (function (seq15638){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15638));
});})(g__9863__auto___15710))
;


var g__9863__auto___15714 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__9863__auto___15714){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15715 = arguments.length;
var i__8562__auto___15716 = (0);
while(true){
if((i__8562__auto___15716 < len__8561__auto___15715)){
args__8568__auto__.push((arguments[i__8562__auto___15716]));

var G__15717 = (i__8562__auto___15716 + (1));
i__8562__auto___15716 = G__15717;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9863__auto___15714))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9863__auto___15714){
return (function (args){
return cljs.core.deref.call(null,g__9863__auto___15714);
});})(g__9863__auto___15714))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__9863__auto___15714){
return (function (seq15639){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15639));
});})(g__9863__auto___15714))
;


var g__9863__auto___15718 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__9863__auto___15718){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15719 = arguments.length;
var i__8562__auto___15720 = (0);
while(true){
if((i__8562__auto___15720 < len__8561__auto___15719)){
args__8568__auto__.push((arguments[i__8562__auto___15720]));

var G__15721 = (i__8562__auto___15720 + (1));
i__8562__auto___15720 = G__15721;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9863__auto___15718))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9863__auto___15718){
return (function (args){
return cljs.core.deref.call(null,g__9863__auto___15718);
});})(g__9863__auto___15718))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__9863__auto___15718){
return (function (seq15640){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15640));
});})(g__9863__auto___15718))
;


var g__9863__auto___15722 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__9863__auto___15722){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15723 = arguments.length;
var i__8562__auto___15724 = (0);
while(true){
if((i__8562__auto___15724 < len__8561__auto___15723)){
args__8568__auto__.push((arguments[i__8562__auto___15724]));

var G__15725 = (i__8562__auto___15724 + (1));
i__8562__auto___15724 = G__15725;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});})(g__9863__auto___15722))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9863__auto___15722){
return (function (args){
return cljs.core.deref.call(null,g__9863__auto___15722);
});})(g__9863__auto___15722))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__9863__auto___15722){
return (function (seq15641){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15641));
});})(g__9863__auto___15722))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__8568__auto__ = [];
var len__8561__auto___15728 = arguments.length;
var i__8562__auto___15729 = (0);
while(true){
if((i__8562__auto___15729 < len__8561__auto___15728)){
args__8568__auto__.push((arguments[i__8562__auto___15729]));

var G__15730 = (i__8562__auto___15729 + (1));
i__8562__auto___15729 = G__15730;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__15726_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__15726_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq15727){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15727));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__15731_SHARP_){
return (new Date(p1__15731_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map