// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__14509){
var map__14534 = p__14509;
var map__14534__$1 = ((((!((map__14534 == null)))?((((map__14534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14534):map__14534);
var m = map__14534__$1;
var n = cljs.core.get.call(null,map__14534__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__14534__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__14536_14558 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14537_14559 = null;
var count__14538_14560 = (0);
var i__14539_14561 = (0);
while(true){
if((i__14539_14561 < count__14538_14560)){
var f_14562 = cljs.core._nth.call(null,chunk__14537_14559,i__14539_14561);
cljs.core.println.call(null,"  ",f_14562);

var G__14563 = seq__14536_14558;
var G__14564 = chunk__14537_14559;
var G__14565 = count__14538_14560;
var G__14566 = (i__14539_14561 + (1));
seq__14536_14558 = G__14563;
chunk__14537_14559 = G__14564;
count__14538_14560 = G__14565;
i__14539_14561 = G__14566;
continue;
} else {
var temp__4657__auto___14567 = cljs.core.seq.call(null,seq__14536_14558);
if(temp__4657__auto___14567){
var seq__14536_14568__$1 = temp__4657__auto___14567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14536_14568__$1)){
var c__8267__auto___14569 = cljs.core.chunk_first.call(null,seq__14536_14568__$1);
var G__14570 = cljs.core.chunk_rest.call(null,seq__14536_14568__$1);
var G__14571 = c__8267__auto___14569;
var G__14572 = cljs.core.count.call(null,c__8267__auto___14569);
var G__14573 = (0);
seq__14536_14558 = G__14570;
chunk__14537_14559 = G__14571;
count__14538_14560 = G__14572;
i__14539_14561 = G__14573;
continue;
} else {
var f_14574 = cljs.core.first.call(null,seq__14536_14568__$1);
cljs.core.println.call(null,"  ",f_14574);

var G__14575 = cljs.core.next.call(null,seq__14536_14568__$1);
var G__14576 = null;
var G__14577 = (0);
var G__14578 = (0);
seq__14536_14558 = G__14575;
chunk__14537_14559 = G__14576;
count__14538_14560 = G__14577;
i__14539_14561 = G__14578;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_14579 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7448__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7448__auto__)){
return or__7448__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_14579);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_14579)))?cljs.core.second.call(null,arglists_14579):arglists_14579));
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
var seq__14540_14580 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14541_14581 = null;
var count__14542_14582 = (0);
var i__14543_14583 = (0);
while(true){
if((i__14543_14583 < count__14542_14582)){
var vec__14544_14584 = cljs.core._nth.call(null,chunk__14541_14581,i__14543_14583);
var name_14585 = cljs.core.nth.call(null,vec__14544_14584,(0),null);
var map__14547_14586 = cljs.core.nth.call(null,vec__14544_14584,(1),null);
var map__14547_14587__$1 = ((((!((map__14547_14586 == null)))?((((map__14547_14586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14547_14586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14547_14586):map__14547_14586);
var doc_14588 = cljs.core.get.call(null,map__14547_14587__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14589 = cljs.core.get.call(null,map__14547_14587__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14585);

cljs.core.println.call(null," ",arglists_14589);

if(cljs.core.truth_(doc_14588)){
cljs.core.println.call(null," ",doc_14588);
} else {
}

var G__14590 = seq__14540_14580;
var G__14591 = chunk__14541_14581;
var G__14592 = count__14542_14582;
var G__14593 = (i__14543_14583 + (1));
seq__14540_14580 = G__14590;
chunk__14541_14581 = G__14591;
count__14542_14582 = G__14592;
i__14543_14583 = G__14593;
continue;
} else {
var temp__4657__auto___14594 = cljs.core.seq.call(null,seq__14540_14580);
if(temp__4657__auto___14594){
var seq__14540_14595__$1 = temp__4657__auto___14594;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14540_14595__$1)){
var c__8267__auto___14596 = cljs.core.chunk_first.call(null,seq__14540_14595__$1);
var G__14597 = cljs.core.chunk_rest.call(null,seq__14540_14595__$1);
var G__14598 = c__8267__auto___14596;
var G__14599 = cljs.core.count.call(null,c__8267__auto___14596);
var G__14600 = (0);
seq__14540_14580 = G__14597;
chunk__14541_14581 = G__14598;
count__14542_14582 = G__14599;
i__14543_14583 = G__14600;
continue;
} else {
var vec__14549_14601 = cljs.core.first.call(null,seq__14540_14595__$1);
var name_14602 = cljs.core.nth.call(null,vec__14549_14601,(0),null);
var map__14552_14603 = cljs.core.nth.call(null,vec__14549_14601,(1),null);
var map__14552_14604__$1 = ((((!((map__14552_14603 == null)))?((((map__14552_14603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14552_14603.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14552_14603):map__14552_14603);
var doc_14605 = cljs.core.get.call(null,map__14552_14604__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14606 = cljs.core.get.call(null,map__14552_14604__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14602);

cljs.core.println.call(null," ",arglists_14606);

if(cljs.core.truth_(doc_14605)){
cljs.core.println.call(null," ",doc_14605);
} else {
}

var G__14607 = cljs.core.next.call(null,seq__14540_14595__$1);
var G__14608 = null;
var G__14609 = (0);
var G__14610 = (0);
seq__14540_14580 = G__14607;
chunk__14541_14581 = G__14608;
count__14542_14582 = G__14609;
i__14543_14583 = G__14610;
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

var seq__14554 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__14555 = null;
var count__14556 = (0);
var i__14557 = (0);
while(true){
if((i__14557 < count__14556)){
var role = cljs.core._nth.call(null,chunk__14555,i__14557);
var temp__4657__auto___14611__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___14611__$1)){
var spec_14612 = temp__4657__auto___14611__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_14612));
} else {
}

var G__14613 = seq__14554;
var G__14614 = chunk__14555;
var G__14615 = count__14556;
var G__14616 = (i__14557 + (1));
seq__14554 = G__14613;
chunk__14555 = G__14614;
count__14556 = G__14615;
i__14557 = G__14616;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__14554);
if(temp__4657__auto____$1){
var seq__14554__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14554__$1)){
var c__8267__auto__ = cljs.core.chunk_first.call(null,seq__14554__$1);
var G__14617 = cljs.core.chunk_rest.call(null,seq__14554__$1);
var G__14618 = c__8267__auto__;
var G__14619 = cljs.core.count.call(null,c__8267__auto__);
var G__14620 = (0);
seq__14554 = G__14617;
chunk__14555 = G__14618;
count__14556 = G__14619;
i__14557 = G__14620;
continue;
} else {
var role = cljs.core.first.call(null,seq__14554__$1);
var temp__4657__auto___14621__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___14621__$2)){
var spec_14622 = temp__4657__auto___14621__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_14622));
} else {
}

var G__14623 = cljs.core.next.call(null,seq__14554__$1);
var G__14624 = null;
var G__14625 = (0);
var G__14626 = (0);
seq__14554 = G__14623;
chunk__14555 = G__14624;
count__14556 = G__14625;
i__14557 = G__14626;
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