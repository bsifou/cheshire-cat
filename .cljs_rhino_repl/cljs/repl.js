// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12334){
var map__12359 = p__12334;
var map__12359__$1 = ((((!((map__12359 == null)))?((((map__12359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12359.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12359):map__12359);
var m = map__12359__$1;
var n = cljs.core.get.call(null,map__12359__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12359__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12361_12383 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12362_12384 = null;
var count__12363_12385 = (0);
var i__12364_12386 = (0);
while(true){
if((i__12364_12386 < count__12363_12385)){
var f_12387 = cljs.core._nth.call(null,chunk__12362_12384,i__12364_12386);
cljs.core.println.call(null,"  ",f_12387);

var G__12388 = seq__12361_12383;
var G__12389 = chunk__12362_12384;
var G__12390 = count__12363_12385;
var G__12391 = (i__12364_12386 + (1));
seq__12361_12383 = G__12388;
chunk__12362_12384 = G__12389;
count__12363_12385 = G__12390;
i__12364_12386 = G__12391;
continue;
} else {
var temp__4657__auto___12392 = cljs.core.seq.call(null,seq__12361_12383);
if(temp__4657__auto___12392){
var seq__12361_12393__$1 = temp__4657__auto___12392;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12361_12393__$1)){
var c__8170__auto___12394 = cljs.core.chunk_first.call(null,seq__12361_12393__$1);
var G__12395 = cljs.core.chunk_rest.call(null,seq__12361_12393__$1);
var G__12396 = c__8170__auto___12394;
var G__12397 = cljs.core.count.call(null,c__8170__auto___12394);
var G__12398 = (0);
seq__12361_12383 = G__12395;
chunk__12362_12384 = G__12396;
count__12363_12385 = G__12397;
i__12364_12386 = G__12398;
continue;
} else {
var f_12399 = cljs.core.first.call(null,seq__12361_12393__$1);
cljs.core.println.call(null,"  ",f_12399);

var G__12400 = cljs.core.next.call(null,seq__12361_12393__$1);
var G__12401 = null;
var G__12402 = (0);
var G__12403 = (0);
seq__12361_12383 = G__12400;
chunk__12362_12384 = G__12401;
count__12363_12385 = G__12402;
i__12364_12386 = G__12403;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12404 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7351__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7351__auto__)){
return or__7351__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12404);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12404)))?cljs.core.second.call(null,arglists_12404):arglists_12404));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12365_12405 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12366_12406 = null;
var count__12367_12407 = (0);
var i__12368_12408 = (0);
while(true){
if((i__12368_12408 < count__12367_12407)){
var vec__12369_12409 = cljs.core._nth.call(null,chunk__12366_12406,i__12368_12408);
var name_12410 = cljs.core.nth.call(null,vec__12369_12409,(0),null);
var map__12372_12411 = cljs.core.nth.call(null,vec__12369_12409,(1),null);
var map__12372_12412__$1 = ((((!((map__12372_12411 == null)))?((((map__12372_12411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12372_12411.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12372_12411):map__12372_12411);
var doc_12413 = cljs.core.get.call(null,map__12372_12412__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12414 = cljs.core.get.call(null,map__12372_12412__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12410);

cljs.core.println.call(null," ",arglists_12414);

if(cljs.core.truth_(doc_12413)){
cljs.core.println.call(null," ",doc_12413);
} else {
}

var G__12415 = seq__12365_12405;
var G__12416 = chunk__12366_12406;
var G__12417 = count__12367_12407;
var G__12418 = (i__12368_12408 + (1));
seq__12365_12405 = G__12415;
chunk__12366_12406 = G__12416;
count__12367_12407 = G__12417;
i__12368_12408 = G__12418;
continue;
} else {
var temp__4657__auto___12419 = cljs.core.seq.call(null,seq__12365_12405);
if(temp__4657__auto___12419){
var seq__12365_12420__$1 = temp__4657__auto___12419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12365_12420__$1)){
var c__8170__auto___12421 = cljs.core.chunk_first.call(null,seq__12365_12420__$1);
var G__12422 = cljs.core.chunk_rest.call(null,seq__12365_12420__$1);
var G__12423 = c__8170__auto___12421;
var G__12424 = cljs.core.count.call(null,c__8170__auto___12421);
var G__12425 = (0);
seq__12365_12405 = G__12422;
chunk__12366_12406 = G__12423;
count__12367_12407 = G__12424;
i__12368_12408 = G__12425;
continue;
} else {
var vec__12374_12426 = cljs.core.first.call(null,seq__12365_12420__$1);
var name_12427 = cljs.core.nth.call(null,vec__12374_12426,(0),null);
var map__12377_12428 = cljs.core.nth.call(null,vec__12374_12426,(1),null);
var map__12377_12429__$1 = ((((!((map__12377_12428 == null)))?((((map__12377_12428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12377_12428.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12377_12428):map__12377_12428);
var doc_12430 = cljs.core.get.call(null,map__12377_12429__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12431 = cljs.core.get.call(null,map__12377_12429__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12427);

cljs.core.println.call(null," ",arglists_12431);

if(cljs.core.truth_(doc_12430)){
cljs.core.println.call(null," ",doc_12430);
} else {
}

var G__12432 = cljs.core.next.call(null,seq__12365_12420__$1);
var G__12433 = null;
var G__12434 = (0);
var G__12435 = (0);
seq__12365_12405 = G__12432;
chunk__12366_12406 = G__12433;
count__12367_12407 = G__12434;
i__12368_12408 = G__12435;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__12379 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12380 = null;
var count__12381 = (0);
var i__12382 = (0);
while(true){
if((i__12382 < count__12381)){
var role = cljs.core._nth.call(null,chunk__12380,i__12382);
var temp__4657__auto___12436__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12436__$1)){
var spec_12437 = temp__4657__auto___12436__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_12437));
} else {
}

var G__12438 = seq__12379;
var G__12439 = chunk__12380;
var G__12440 = count__12381;
var G__12441 = (i__12382 + (1));
seq__12379 = G__12438;
chunk__12380 = G__12439;
count__12381 = G__12440;
i__12382 = G__12441;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__12379);
if(temp__4657__auto____$1){
var seq__12379__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12379__$1)){
var c__8170__auto__ = cljs.core.chunk_first.call(null,seq__12379__$1);
var G__12442 = cljs.core.chunk_rest.call(null,seq__12379__$1);
var G__12443 = c__8170__auto__;
var G__12444 = cljs.core.count.call(null,c__8170__auto__);
var G__12445 = (0);
seq__12379 = G__12442;
chunk__12380 = G__12443;
count__12381 = G__12444;
i__12382 = G__12445;
continue;
} else {
var role = cljs.core.first.call(null,seq__12379__$1);
var temp__4657__auto___12446__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12446__$2)){
var spec_12447 = temp__4657__auto___12446__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_12447));
} else {
}

var G__12448 = cljs.core.next.call(null,seq__12379__$1);
var G__12449 = null;
var G__12450 = (0);
var G__12451 = (0);
seq__12379 = G__12448;
chunk__12380 = G__12449;
count__12381 = G__12450;
i__12382 = G__12451;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map