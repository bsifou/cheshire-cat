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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__7962__auto__,writer__7963__auto__,opt__7964__auto__){
return cljs.core._write.call(null,writer__7963__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__8471__auto__ = [];
var len__8464__auto___13341 = arguments.length;
var i__8465__auto___13342 = (0);
while(true){
if((i__8465__auto___13342 < len__8464__auto___13341)){
args__8471__auto__.push((arguments[i__8465__auto___13342]));

var G__13343 = (i__8465__auto___13342 + (1));
i__8465__auto___13342 = G__13343;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq13340){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13340));
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
var args__8471__auto__ = [];
var len__8464__auto___13345 = arguments.length;
var i__8465__auto___13346 = (0);
while(true){
if((i__8465__auto___13346 < len__8464__auto___13345)){
args__8471__auto__.push((arguments[i__8465__auto___13346]));

var G__13347 = (i__8465__auto___13346 + (1));
i__8465__auto___13346 = G__13347;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq13344){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13344));
});

var g_QMARK__13348 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_13349 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__13348){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__13348))
,null));
var mkg_13350 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__13348,g_13349){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__13348,g_13349))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__13348,g_13349,mkg_13350){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__13348).call(null,x);
});})(g_QMARK__13348,g_13349,mkg_13350))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__13348,g_13349,mkg_13350){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_13350).call(null,gfn);
});})(g_QMARK__13348,g_13349,mkg_13350))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__13348,g_13349,mkg_13350){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_13349).call(null,generator);
});})(g_QMARK__13348,g_13349,mkg_13350))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__8556__auto___13370 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__8556__auto___13370){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13371 = arguments.length;
var i__8465__auto___13372 = (0);
while(true){
if((i__8465__auto___13372 < len__8464__auto___13371)){
args__8471__auto__.push((arguments[i__8465__auto___13372]));

var G__13373 = (i__8465__auto___13372 + (1));
i__8465__auto___13372 = G__13373;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8556__auto___13370))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8556__auto___13370){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8556__auto___13370),args);
});})(g__8556__auto___13370))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__8556__auto___13370){
return (function (seq13351){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13351));
});})(g__8556__auto___13370))
;


var g__8556__auto___13374 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__8556__auto___13374){
return (function cljs$spec$impl$gen$list(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13375 = arguments.length;
var i__8465__auto___13376 = (0);
while(true){
if((i__8465__auto___13376 < len__8464__auto___13375)){
args__8471__auto__.push((arguments[i__8465__auto___13376]));

var G__13377 = (i__8465__auto___13376 + (1));
i__8465__auto___13376 = G__13377;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8556__auto___13374))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8556__auto___13374){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8556__auto___13374),args);
});})(g__8556__auto___13374))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__8556__auto___13374){
return (function (seq13352){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13352));
});})(g__8556__auto___13374))
;


var g__8556__auto___13378 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__8556__auto___13378){
return (function cljs$spec$impl$gen$map(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13379 = arguments.length;
var i__8465__auto___13380 = (0);
while(true){
if((i__8465__auto___13380 < len__8464__auto___13379)){
args__8471__auto__.push((arguments[i__8465__auto___13380]));

var G__13381 = (i__8465__auto___13380 + (1));
i__8465__auto___13380 = G__13381;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8556__auto___13378))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8556__auto___13378){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8556__auto___13378),args);
});})(g__8556__auto___13378))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__8556__auto___13378){
return (function (seq13353){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13353));
});})(g__8556__auto___13378))
;


var g__8556__auto___13382 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__8556__auto___13382){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13383 = arguments.length;
var i__8465__auto___13384 = (0);
while(true){
if((i__8465__auto___13384 < len__8464__auto___13383)){
args__8471__auto__.push((arguments[i__8465__auto___13384]));

var G__13385 = (i__8465__auto___13384 + (1));
i__8465__auto___13384 = G__13385;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8556__auto___13382))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8556__auto___13382){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8556__auto___13382),args);
});})(g__8556__auto___13382))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__8556__auto___13382){
return (function (seq13354){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13354));
});})(g__8556__auto___13382))
;


var g__8556__auto___13386 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__8556__auto___13386){
return (function cljs$spec$impl$gen$set(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13387 = arguments.length;
var i__8465__auto___13388 = (0);
while(true){
if((i__8465__auto___13388 < len__8464__auto___13387)){
args__8471__auto__.push((arguments[i__8465__auto___13388]));

var G__13389 = (i__8465__auto___13388 + (1));
i__8465__auto___13388 = G__13389;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8556__auto___13386))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8556__auto___13386){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8556__auto___13386),args);
});})(g__8556__auto___13386))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__8556__auto___13386){
return (function (seq13355){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13355));
});})(g__8556__auto___13386))
;


var g__8556__auto___13390 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__8556__auto___13390){
return (function cljs$spec$impl$gen$vector(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13391 = arguments.length;
var i__8465__auto___13392 = (0);
while(true){
if((i__8465__auto___13392 < len__8464__auto___13391)){
args__8471__auto__.push((arguments[i__8465__auto___13392]));

var G__13393 = (i__8465__auto___13392 + (1));
i__8465__auto___13392 = G__13393;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8556__auto___13390))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8556__auto___13390){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8556__auto___13390),args);
});})(g__8556__auto___13390))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__8556__auto___13390){
return (function (seq13356){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13356));
});})(g__8556__auto___13390))
;


var g__8556__auto___13394 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__8556__auto___13394){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13395 = arguments.length;
var i__8465__auto___13396 = (0);
while(true){
if((i__8465__auto___13396 < len__8464__auto___13395)){
args__8471__auto__.push((arguments[i__8465__auto___13396]));

var G__13397 = (i__8465__auto___13396 + (1));
i__8465__auto___13396 = G__13397;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8556__auto___13394))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8556__auto___13394){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8556__auto___13394),args);
});})(g__8556__auto___13394))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__8556__auto___13394){
return (function (seq13357){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13357));
});})(g__8556__auto___13394))
;


var g__8556__auto___13398 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__8556__auto___13398){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13399 = arguments.length;
var i__8465__auto___13400 = (0);
while(true){
if((i__8465__auto___13400 < len__8464__auto___13399)){
args__8471__auto__.push((arguments[i__8465__auto___13400]));

var G__13401 = (i__8465__auto___13400 + (1));
i__8465__auto___13400 = G__13401;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8556__auto___13398))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8556__auto___13398){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8556__auto___13398),args);
});})(g__8556__auto___13398))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__8556__auto___13398){
return (function (seq13358){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13358));
});})(g__8556__auto___13398))
;


var g__8556__auto___13402 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__8556__auto___13402){
return (function cljs$spec$impl$gen$elements(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13403 = arguments.length;
var i__8465__auto___13404 = (0);
while(true){
if((i__8465__auto___13404 < len__8464__auto___13403)){
args__8471__auto__.push((arguments[i__8465__auto___13404]));

var G__13405 = (i__8465__auto___13404 + (1));
i__8465__auto___13404 = G__13405;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8556__auto___13402))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8556__auto___13402){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8556__auto___13402),args);
});})(g__8556__auto___13402))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__8556__auto___13402){
return (function (seq13359){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13359));
});})(g__8556__auto___13402))
;


var g__8556__auto___13406 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__8556__auto___13406){
return (function cljs$spec$impl$gen$bind(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13407 = arguments.length;
var i__8465__auto___13408 = (0);
while(true){
if((i__8465__auto___13408 < len__8464__auto___13407)){
args__8471__auto__.push((arguments[i__8465__auto___13408]));

var G__13409 = (i__8465__auto___13408 + (1));
i__8465__auto___13408 = G__13409;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8556__auto___13406))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8556__auto___13406){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8556__auto___13406),args);
});})(g__8556__auto___13406))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__8556__auto___13406){
return (function (seq13360){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13360));
});})(g__8556__auto___13406))
;


var g__8556__auto___13410 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__8556__auto___13410){
return (function cljs$spec$impl$gen$choose(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13411 = arguments.length;
var i__8465__auto___13412 = (0);
while(true){
if((i__8465__auto___13412 < len__8464__auto___13411)){
args__8471__auto__.push((arguments[i__8465__auto___13412]));

var G__13413 = (i__8465__auto___13412 + (1));
i__8465__auto___13412 = G__13413;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8556__auto___13410))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8556__auto___13410){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8556__auto___13410),args);
});})(g__8556__auto___13410))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__8556__auto___13410){
return (function (seq13361){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13361));
});})(g__8556__auto___13410))
;


var g__8556__auto___13414 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__8556__auto___13414){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13415 = arguments.length;
var i__8465__auto___13416 = (0);
while(true){
if((i__8465__auto___13416 < len__8464__auto___13415)){
args__8471__auto__.push((arguments[i__8465__auto___13416]));

var G__13417 = (i__8465__auto___13416 + (1));
i__8465__auto___13416 = G__13417;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8556__auto___13414))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8556__auto___13414){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8556__auto___13414),args);
});})(g__8556__auto___13414))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__8556__auto___13414){
return (function (seq13362){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13362));
});})(g__8556__auto___13414))
;


var g__8556__auto___13418 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__8556__auto___13418){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13419 = arguments.length;
var i__8465__auto___13420 = (0);
while(true){
if((i__8465__auto___13420 < len__8464__auto___13419)){
args__8471__auto__.push((arguments[i__8465__auto___13420]));

var G__13421 = (i__8465__auto___13420 + (1));
i__8465__auto___13420 = G__13421;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8556__auto___13418))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8556__auto___13418){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8556__auto___13418),args);
});})(g__8556__auto___13418))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__8556__auto___13418){
return (function (seq13363){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13363));
});})(g__8556__auto___13418))
;


var g__8556__auto___13422 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__8556__auto___13422){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13423 = arguments.length;
var i__8465__auto___13424 = (0);
while(true){
if((i__8465__auto___13424 < len__8464__auto___13423)){
args__8471__auto__.push((arguments[i__8465__auto___13424]));

var G__13425 = (i__8465__auto___13424 + (1));
i__8465__auto___13424 = G__13425;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8556__auto___13422))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8556__auto___13422){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8556__auto___13422),args);
});})(g__8556__auto___13422))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__8556__auto___13422){
return (function (seq13364){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13364));
});})(g__8556__auto___13422))
;


var g__8556__auto___13426 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__8556__auto___13426){
return (function cljs$spec$impl$gen$sample(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13427 = arguments.length;
var i__8465__auto___13428 = (0);
while(true){
if((i__8465__auto___13428 < len__8464__auto___13427)){
args__8471__auto__.push((arguments[i__8465__auto___13428]));

var G__13429 = (i__8465__auto___13428 + (1));
i__8465__auto___13428 = G__13429;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8556__auto___13426))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8556__auto___13426){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8556__auto___13426),args);
});})(g__8556__auto___13426))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__8556__auto___13426){
return (function (seq13365){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13365));
});})(g__8556__auto___13426))
;


var g__8556__auto___13430 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__8556__auto___13430){
return (function cljs$spec$impl$gen$return(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13431 = arguments.length;
var i__8465__auto___13432 = (0);
while(true){
if((i__8465__auto___13432 < len__8464__auto___13431)){
args__8471__auto__.push((arguments[i__8465__auto___13432]));

var G__13433 = (i__8465__auto___13432 + (1));
i__8465__auto___13432 = G__13433;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8556__auto___13430))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8556__auto___13430){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8556__auto___13430),args);
});})(g__8556__auto___13430))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__8556__auto___13430){
return (function (seq13366){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13366));
});})(g__8556__auto___13430))
;


var g__8556__auto___13434 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__8556__auto___13434){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13435 = arguments.length;
var i__8465__auto___13436 = (0);
while(true){
if((i__8465__auto___13436 < len__8464__auto___13435)){
args__8471__auto__.push((arguments[i__8465__auto___13436]));

var G__13437 = (i__8465__auto___13436 + (1));
i__8465__auto___13436 = G__13437;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8556__auto___13434))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8556__auto___13434){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8556__auto___13434),args);
});})(g__8556__auto___13434))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__8556__auto___13434){
return (function (seq13367){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13367));
});})(g__8556__auto___13434))
;


var g__8556__auto___13438 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__8556__auto___13438){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13439 = arguments.length;
var i__8465__auto___13440 = (0);
while(true){
if((i__8465__auto___13440 < len__8464__auto___13439)){
args__8471__auto__.push((arguments[i__8465__auto___13440]));

var G__13441 = (i__8465__auto___13440 + (1));
i__8465__auto___13440 = G__13441;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8556__auto___13438))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8556__auto___13438){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8556__auto___13438),args);
});})(g__8556__auto___13438))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__8556__auto___13438){
return (function (seq13368){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13368));
});})(g__8556__auto___13438))
;


var g__8556__auto___13442 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__8556__auto___13442){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13443 = arguments.length;
var i__8465__auto___13444 = (0);
while(true){
if((i__8465__auto___13444 < len__8464__auto___13443)){
args__8471__auto__.push((arguments[i__8465__auto___13444]));

var G__13445 = (i__8465__auto___13444 + (1));
i__8465__auto___13444 = G__13445;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8556__auto___13442))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8556__auto___13442){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8556__auto___13442),args);
});})(g__8556__auto___13442))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__8556__auto___13442){
return (function (seq13369){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13369));
});})(g__8556__auto___13442))
;

var g__8569__auto___13467 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__8569__auto___13467){
return (function cljs$spec$impl$gen$any(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13468 = arguments.length;
var i__8465__auto___13469 = (0);
while(true){
if((i__8465__auto___13469 < len__8464__auto___13468)){
args__8471__auto__.push((arguments[i__8465__auto___13469]));

var G__13470 = (i__8465__auto___13469 + (1));
i__8465__auto___13469 = G__13470;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8569__auto___13467))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8569__auto___13467){
return (function (args){
return cljs.core.deref.call(null,g__8569__auto___13467);
});})(g__8569__auto___13467))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__8569__auto___13467){
return (function (seq13446){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13446));
});})(g__8569__auto___13467))
;


var g__8569__auto___13471 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__8569__auto___13471){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13472 = arguments.length;
var i__8465__auto___13473 = (0);
while(true){
if((i__8465__auto___13473 < len__8464__auto___13472)){
args__8471__auto__.push((arguments[i__8465__auto___13473]));

var G__13474 = (i__8465__auto___13473 + (1));
i__8465__auto___13473 = G__13474;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8569__auto___13471))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8569__auto___13471){
return (function (args){
return cljs.core.deref.call(null,g__8569__auto___13471);
});})(g__8569__auto___13471))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__8569__auto___13471){
return (function (seq13447){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13447));
});})(g__8569__auto___13471))
;


var g__8569__auto___13475 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__8569__auto___13475){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13476 = arguments.length;
var i__8465__auto___13477 = (0);
while(true){
if((i__8465__auto___13477 < len__8464__auto___13476)){
args__8471__auto__.push((arguments[i__8465__auto___13477]));

var G__13478 = (i__8465__auto___13477 + (1));
i__8465__auto___13477 = G__13478;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8569__auto___13475))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8569__auto___13475){
return (function (args){
return cljs.core.deref.call(null,g__8569__auto___13475);
});})(g__8569__auto___13475))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__8569__auto___13475){
return (function (seq13448){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13448));
});})(g__8569__auto___13475))
;


var g__8569__auto___13479 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__8569__auto___13479){
return (function cljs$spec$impl$gen$char(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13480 = arguments.length;
var i__8465__auto___13481 = (0);
while(true){
if((i__8465__auto___13481 < len__8464__auto___13480)){
args__8471__auto__.push((arguments[i__8465__auto___13481]));

var G__13482 = (i__8465__auto___13481 + (1));
i__8465__auto___13481 = G__13482;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8569__auto___13479))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8569__auto___13479){
return (function (args){
return cljs.core.deref.call(null,g__8569__auto___13479);
});})(g__8569__auto___13479))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__8569__auto___13479){
return (function (seq13449){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13449));
});})(g__8569__auto___13479))
;


var g__8569__auto___13483 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__8569__auto___13483){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13484 = arguments.length;
var i__8465__auto___13485 = (0);
while(true){
if((i__8465__auto___13485 < len__8464__auto___13484)){
args__8471__auto__.push((arguments[i__8465__auto___13485]));

var G__13486 = (i__8465__auto___13485 + (1));
i__8465__auto___13485 = G__13486;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8569__auto___13483))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8569__auto___13483){
return (function (args){
return cljs.core.deref.call(null,g__8569__auto___13483);
});})(g__8569__auto___13483))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__8569__auto___13483){
return (function (seq13450){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13450));
});})(g__8569__auto___13483))
;


var g__8569__auto___13487 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__8569__auto___13487){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13488 = arguments.length;
var i__8465__auto___13489 = (0);
while(true){
if((i__8465__auto___13489 < len__8464__auto___13488)){
args__8471__auto__.push((arguments[i__8465__auto___13489]));

var G__13490 = (i__8465__auto___13489 + (1));
i__8465__auto___13489 = G__13490;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8569__auto___13487))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8569__auto___13487){
return (function (args){
return cljs.core.deref.call(null,g__8569__auto___13487);
});})(g__8569__auto___13487))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__8569__auto___13487){
return (function (seq13451){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13451));
});})(g__8569__auto___13487))
;


var g__8569__auto___13491 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__8569__auto___13491){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13492 = arguments.length;
var i__8465__auto___13493 = (0);
while(true){
if((i__8465__auto___13493 < len__8464__auto___13492)){
args__8471__auto__.push((arguments[i__8465__auto___13493]));

var G__13494 = (i__8465__auto___13493 + (1));
i__8465__auto___13493 = G__13494;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8569__auto___13491))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8569__auto___13491){
return (function (args){
return cljs.core.deref.call(null,g__8569__auto___13491);
});})(g__8569__auto___13491))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__8569__auto___13491){
return (function (seq13452){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13452));
});})(g__8569__auto___13491))
;


var g__8569__auto___13495 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__8569__auto___13495){
return (function cljs$spec$impl$gen$double(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13496 = arguments.length;
var i__8465__auto___13497 = (0);
while(true){
if((i__8465__auto___13497 < len__8464__auto___13496)){
args__8471__auto__.push((arguments[i__8465__auto___13497]));

var G__13498 = (i__8465__auto___13497 + (1));
i__8465__auto___13497 = G__13498;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8569__auto___13495))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8569__auto___13495){
return (function (args){
return cljs.core.deref.call(null,g__8569__auto___13495);
});})(g__8569__auto___13495))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__8569__auto___13495){
return (function (seq13453){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13453));
});})(g__8569__auto___13495))
;


var g__8569__auto___13499 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__8569__auto___13499){
return (function cljs$spec$impl$gen$int(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13500 = arguments.length;
var i__8465__auto___13501 = (0);
while(true){
if((i__8465__auto___13501 < len__8464__auto___13500)){
args__8471__auto__.push((arguments[i__8465__auto___13501]));

var G__13502 = (i__8465__auto___13501 + (1));
i__8465__auto___13501 = G__13502;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8569__auto___13499))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8569__auto___13499){
return (function (args){
return cljs.core.deref.call(null,g__8569__auto___13499);
});})(g__8569__auto___13499))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__8569__auto___13499){
return (function (seq13454){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13454));
});})(g__8569__auto___13499))
;


var g__8569__auto___13503 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__8569__auto___13503){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13504 = arguments.length;
var i__8465__auto___13505 = (0);
while(true){
if((i__8465__auto___13505 < len__8464__auto___13504)){
args__8471__auto__.push((arguments[i__8465__auto___13505]));

var G__13506 = (i__8465__auto___13505 + (1));
i__8465__auto___13505 = G__13506;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8569__auto___13503))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8569__auto___13503){
return (function (args){
return cljs.core.deref.call(null,g__8569__auto___13503);
});})(g__8569__auto___13503))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__8569__auto___13503){
return (function (seq13455){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13455));
});})(g__8569__auto___13503))
;


var g__8569__auto___13507 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__8569__auto___13507){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13508 = arguments.length;
var i__8465__auto___13509 = (0);
while(true){
if((i__8465__auto___13509 < len__8464__auto___13508)){
args__8471__auto__.push((arguments[i__8465__auto___13509]));

var G__13510 = (i__8465__auto___13509 + (1));
i__8465__auto___13509 = G__13510;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8569__auto___13507))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8569__auto___13507){
return (function (args){
return cljs.core.deref.call(null,g__8569__auto___13507);
});})(g__8569__auto___13507))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__8569__auto___13507){
return (function (seq13456){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13456));
});})(g__8569__auto___13507))
;


var g__8569__auto___13511 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__8569__auto___13511){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13512 = arguments.length;
var i__8465__auto___13513 = (0);
while(true){
if((i__8465__auto___13513 < len__8464__auto___13512)){
args__8471__auto__.push((arguments[i__8465__auto___13513]));

var G__13514 = (i__8465__auto___13513 + (1));
i__8465__auto___13513 = G__13514;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8569__auto___13511))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8569__auto___13511){
return (function (args){
return cljs.core.deref.call(null,g__8569__auto___13511);
});})(g__8569__auto___13511))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__8569__auto___13511){
return (function (seq13457){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13457));
});})(g__8569__auto___13511))
;


var g__8569__auto___13515 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__8569__auto___13515){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13516 = arguments.length;
var i__8465__auto___13517 = (0);
while(true){
if((i__8465__auto___13517 < len__8464__auto___13516)){
args__8471__auto__.push((arguments[i__8465__auto___13517]));

var G__13518 = (i__8465__auto___13517 + (1));
i__8465__auto___13517 = G__13518;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8569__auto___13515))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8569__auto___13515){
return (function (args){
return cljs.core.deref.call(null,g__8569__auto___13515);
});})(g__8569__auto___13515))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__8569__auto___13515){
return (function (seq13458){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13458));
});})(g__8569__auto___13515))
;


var g__8569__auto___13519 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__8569__auto___13519){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13520 = arguments.length;
var i__8465__auto___13521 = (0);
while(true){
if((i__8465__auto___13521 < len__8464__auto___13520)){
args__8471__auto__.push((arguments[i__8465__auto___13521]));

var G__13522 = (i__8465__auto___13521 + (1));
i__8465__auto___13521 = G__13522;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8569__auto___13519))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8569__auto___13519){
return (function (args){
return cljs.core.deref.call(null,g__8569__auto___13519);
});})(g__8569__auto___13519))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__8569__auto___13519){
return (function (seq13459){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13459));
});})(g__8569__auto___13519))
;


var g__8569__auto___13523 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__8569__auto___13523){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13524 = arguments.length;
var i__8465__auto___13525 = (0);
while(true){
if((i__8465__auto___13525 < len__8464__auto___13524)){
args__8471__auto__.push((arguments[i__8465__auto___13525]));

var G__13526 = (i__8465__auto___13525 + (1));
i__8465__auto___13525 = G__13526;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8569__auto___13523))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8569__auto___13523){
return (function (args){
return cljs.core.deref.call(null,g__8569__auto___13523);
});})(g__8569__auto___13523))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__8569__auto___13523){
return (function (seq13460){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13460));
});})(g__8569__auto___13523))
;


var g__8569__auto___13527 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__8569__auto___13527){
return (function cljs$spec$impl$gen$string(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13528 = arguments.length;
var i__8465__auto___13529 = (0);
while(true){
if((i__8465__auto___13529 < len__8464__auto___13528)){
args__8471__auto__.push((arguments[i__8465__auto___13529]));

var G__13530 = (i__8465__auto___13529 + (1));
i__8465__auto___13529 = G__13530;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8569__auto___13527))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8569__auto___13527){
return (function (args){
return cljs.core.deref.call(null,g__8569__auto___13527);
});})(g__8569__auto___13527))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__8569__auto___13527){
return (function (seq13461){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13461));
});})(g__8569__auto___13527))
;


var g__8569__auto___13531 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__8569__auto___13531){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13532 = arguments.length;
var i__8465__auto___13533 = (0);
while(true){
if((i__8465__auto___13533 < len__8464__auto___13532)){
args__8471__auto__.push((arguments[i__8465__auto___13533]));

var G__13534 = (i__8465__auto___13533 + (1));
i__8465__auto___13533 = G__13534;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8569__auto___13531))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8569__auto___13531){
return (function (args){
return cljs.core.deref.call(null,g__8569__auto___13531);
});})(g__8569__auto___13531))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__8569__auto___13531){
return (function (seq13462){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13462));
});})(g__8569__auto___13531))
;


var g__8569__auto___13535 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__8569__auto___13535){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13536 = arguments.length;
var i__8465__auto___13537 = (0);
while(true){
if((i__8465__auto___13537 < len__8464__auto___13536)){
args__8471__auto__.push((arguments[i__8465__auto___13537]));

var G__13538 = (i__8465__auto___13537 + (1));
i__8465__auto___13537 = G__13538;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8569__auto___13535))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8569__auto___13535){
return (function (args){
return cljs.core.deref.call(null,g__8569__auto___13535);
});})(g__8569__auto___13535))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__8569__auto___13535){
return (function (seq13463){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13463));
});})(g__8569__auto___13535))
;


var g__8569__auto___13539 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__8569__auto___13539){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13540 = arguments.length;
var i__8465__auto___13541 = (0);
while(true){
if((i__8465__auto___13541 < len__8464__auto___13540)){
args__8471__auto__.push((arguments[i__8465__auto___13541]));

var G__13542 = (i__8465__auto___13541 + (1));
i__8465__auto___13541 = G__13542;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8569__auto___13539))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8569__auto___13539){
return (function (args){
return cljs.core.deref.call(null,g__8569__auto___13539);
});})(g__8569__auto___13539))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__8569__auto___13539){
return (function (seq13464){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13464));
});})(g__8569__auto___13539))
;


var g__8569__auto___13543 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__8569__auto___13543){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13544 = arguments.length;
var i__8465__auto___13545 = (0);
while(true){
if((i__8465__auto___13545 < len__8464__auto___13544)){
args__8471__auto__.push((arguments[i__8465__auto___13545]));

var G__13546 = (i__8465__auto___13545 + (1));
i__8465__auto___13545 = G__13546;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8569__auto___13543))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8569__auto___13543){
return (function (args){
return cljs.core.deref.call(null,g__8569__auto___13543);
});})(g__8569__auto___13543))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__8569__auto___13543){
return (function (seq13465){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13465));
});})(g__8569__auto___13543))
;


var g__8569__auto___13547 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__8569__auto___13547){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13548 = arguments.length;
var i__8465__auto___13549 = (0);
while(true){
if((i__8465__auto___13549 < len__8464__auto___13548)){
args__8471__auto__.push((arguments[i__8465__auto___13549]));

var G__13550 = (i__8465__auto___13549 + (1));
i__8465__auto___13549 = G__13550;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});})(g__8569__auto___13547))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8569__auto___13547){
return (function (args){
return cljs.core.deref.call(null,g__8569__auto___13547);
});})(g__8569__auto___13547))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__8569__auto___13547){
return (function (seq13466){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13466));
});})(g__8569__auto___13547))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__8471__auto__ = [];
var len__8464__auto___13553 = arguments.length;
var i__8465__auto___13554 = (0);
while(true){
if((i__8465__auto___13554 < len__8464__auto___13553)){
args__8471__auto__.push((arguments[i__8465__auto___13554]));

var G__13555 = (i__8465__auto___13554 + (1));
i__8465__auto___13554 = G__13555;
continue;
} else {
}
break;
}

var argseq__8472__auto__ = ((((0) < args__8471__auto__.length))?(new cljs.core.IndexedSeq(args__8471__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8472__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__13551_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__13551_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq13552){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13552));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__13556_SHARP_){
return (new Date(p1__13556_SHARP_));
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