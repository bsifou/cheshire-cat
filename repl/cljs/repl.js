// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__14506){
var map__14531 = p__14506;
var map__14531__$1 = ((((!((map__14531 == null)))?((((map__14531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14531):map__14531);
var m = map__14531__$1;
var n = cljs.core.get.call(null,map__14531__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__14531__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__14533_14555 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14534_14556 = null;
var count__14535_14557 = (0);
var i__14536_14558 = (0);
while(true){
if((i__14536_14558 < count__14535_14557)){
var f_14559 = cljs.core._nth.call(null,chunk__14534_14556,i__14536_14558);
cljs.core.println.call(null,"  ",f_14559);

var G__14560 = seq__14533_14555;
var G__14561 = chunk__14534_14556;
var G__14562 = count__14535_14557;
var G__14563 = (i__14536_14558 + (1));
seq__14533_14555 = G__14560;
chunk__14534_14556 = G__14561;
count__14535_14557 = G__14562;
i__14536_14558 = G__14563;
continue;
} else {
var temp__4657__auto___14564 = cljs.core.seq.call(null,seq__14533_14555);
if(temp__4657__auto___14564){
var seq__14533_14565__$1 = temp__4657__auto___14564;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14533_14565__$1)){
var c__8267__auto___14566 = cljs.core.chunk_first.call(null,seq__14533_14565__$1);
var G__14567 = cljs.core.chunk_rest.call(null,seq__14533_14565__$1);
var G__14568 = c__8267__auto___14566;
var G__14569 = cljs.core.count.call(null,c__8267__auto___14566);
var G__14570 = (0);
seq__14533_14555 = G__14567;
chunk__14534_14556 = G__14568;
count__14535_14557 = G__14569;
i__14536_14558 = G__14570;
continue;
} else {
var f_14571 = cljs.core.first.call(null,seq__14533_14565__$1);
cljs.core.println.call(null,"  ",f_14571);

var G__14572 = cljs.core.next.call(null,seq__14533_14565__$1);
var G__14573 = null;
var G__14574 = (0);
var G__14575 = (0);
seq__14533_14555 = G__14572;
chunk__14534_14556 = G__14573;
count__14535_14557 = G__14574;
i__14536_14558 = G__14575;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_14576 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7448__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7448__auto__)){
return or__7448__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_14576);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_14576)))?cljs.core.second.call(null,arglists_14576):arglists_14576));
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
var seq__14537_14577 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14538_14578 = null;
var count__14539_14579 = (0);
var i__14540_14580 = (0);
while(true){
if((i__14540_14580 < count__14539_14579)){
var vec__14541_14581 = cljs.core._nth.call(null,chunk__14538_14578,i__14540_14580);
var name_14582 = cljs.core.nth.call(null,vec__14541_14581,(0),null);
var map__14544_14583 = cljs.core.nth.call(null,vec__14541_14581,(1),null);
var map__14544_14584__$1 = ((((!((map__14544_14583 == null)))?((((map__14544_14583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14544_14583.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14544_14583):map__14544_14583);
var doc_14585 = cljs.core.get.call(null,map__14544_14584__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14586 = cljs.core.get.call(null,map__14544_14584__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14582);

cljs.core.println.call(null," ",arglists_14586);

if(cljs.core.truth_(doc_14585)){
cljs.core.println.call(null," ",doc_14585);
} else {
}

var G__14587 = seq__14537_14577;
var G__14588 = chunk__14538_14578;
var G__14589 = count__14539_14579;
var G__14590 = (i__14540_14580 + (1));
seq__14537_14577 = G__14587;
chunk__14538_14578 = G__14588;
count__14539_14579 = G__14589;
i__14540_14580 = G__14590;
continue;
} else {
var temp__4657__auto___14591 = cljs.core.seq.call(null,seq__14537_14577);
if(temp__4657__auto___14591){
var seq__14537_14592__$1 = temp__4657__auto___14591;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14537_14592__$1)){
var c__8267__auto___14593 = cljs.core.chunk_first.call(null,seq__14537_14592__$1);
var G__14594 = cljs.core.chunk_rest.call(null,seq__14537_14592__$1);
var G__14595 = c__8267__auto___14593;
var G__14596 = cljs.core.count.call(null,c__8267__auto___14593);
var G__14597 = (0);
seq__14537_14577 = G__14594;
chunk__14538_14578 = G__14595;
count__14539_14579 = G__14596;
i__14540_14580 = G__14597;
continue;
} else {
var vec__14546_14598 = cljs.core.first.call(null,seq__14537_14592__$1);
var name_14599 = cljs.core.nth.call(null,vec__14546_14598,(0),null);
var map__14549_14600 = cljs.core.nth.call(null,vec__14546_14598,(1),null);
var map__14549_14601__$1 = ((((!((map__14549_14600 == null)))?((((map__14549_14600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14549_14600.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14549_14600):map__14549_14600);
var doc_14602 = cljs.core.get.call(null,map__14549_14601__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14603 = cljs.core.get.call(null,map__14549_14601__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14599);

cljs.core.println.call(null," ",arglists_14603);

if(cljs.core.truth_(doc_14602)){
cljs.core.println.call(null," ",doc_14602);
} else {
}

var G__14604 = cljs.core.next.call(null,seq__14537_14592__$1);
var G__14605 = null;
var G__14606 = (0);
var G__14607 = (0);
seq__14537_14577 = G__14604;
chunk__14538_14578 = G__14605;
count__14539_14579 = G__14606;
i__14540_14580 = G__14607;
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

var seq__14551 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__14552 = null;
var count__14553 = (0);
var i__14554 = (0);
while(true){
if((i__14554 < count__14553)){
var role = cljs.core._nth.call(null,chunk__14552,i__14554);
var temp__4657__auto___14608__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___14608__$1)){
var spec_14609 = temp__4657__auto___14608__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_14609));
} else {
}

var G__14610 = seq__14551;
var G__14611 = chunk__14552;
var G__14612 = count__14553;
var G__14613 = (i__14554 + (1));
seq__14551 = G__14610;
chunk__14552 = G__14611;
count__14553 = G__14612;
i__14554 = G__14613;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__14551);
if(temp__4657__auto____$1){
var seq__14551__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14551__$1)){
var c__8267__auto__ = cljs.core.chunk_first.call(null,seq__14551__$1);
var G__14614 = cljs.core.chunk_rest.call(null,seq__14551__$1);
var G__14615 = c__8267__auto__;
var G__14616 = cljs.core.count.call(null,c__8267__auto__);
var G__14617 = (0);
seq__14551 = G__14614;
chunk__14552 = G__14615;
count__14553 = G__14616;
i__14554 = G__14617;
continue;
} else {
var role = cljs.core.first.call(null,seq__14551__$1);
var temp__4657__auto___14618__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___14618__$2)){
var spec_14619 = temp__4657__auto___14618__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_14619));
} else {
}

var G__14620 = cljs.core.next.call(null,seq__14551__$1);
var G__14621 = null;
var G__14622 = (0);
var G__14623 = (0);
seq__14551 = G__14620;
chunk__14552 = G__14621;
count__14553 = G__14622;
i__14554 = G__14623;
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
