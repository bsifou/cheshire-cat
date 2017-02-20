// Compiled by ClojureScript 1.9.473 {}
goog.provide('enfocus.core');
goog.require('cljs.core');
goog.require('enfocus.enlive.syntax');
goog.require('goog.net.XhrIo');
goog.require('goog.dom.query');
goog.require('goog.style');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.async.Delay');
goog.require('goog.Timer');
goog.require('goog.dom.forms');
goog.require('clojure.string');
goog.require('domina');
goog.require('domina.css');
goog.require('domina.xpath');







/**
 * @interface
 */
enfocus.core.ISelector = function(){};

/**
 * takes root node and returns a domina node list
 */
enfocus.core.select = (function enfocus$core$select(var_args){
var args17443 = [];
var len__8561__auto___17446 = arguments.length;
var i__8562__auto___17447 = (0);
while(true){
if((i__8562__auto___17447 < len__8561__auto___17446)){
args17443.push((arguments[i__8562__auto___17447]));

var G__17448 = (i__8562__auto___17447 + (1));
i__8562__auto___17447 = G__17448;
continue;
} else {
}
break;
}

var G__17445 = args17443.length;
switch (G__17445) {
case 1:
return enfocus.core.select.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.core.select.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return enfocus.core.select.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17443.length)].join('')));

}
});

enfocus.core.select.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.enfocus$core$ISelector$select$arity$1 == null)))){
return this$.enfocus$core$ISelector$select$arity$1(this$);
} else {
var x__8116__auto__ = (((this$ == null))?null:this$);
var m__8117__auto__ = (enfocus.core.select[goog.typeOf(x__8116__auto__)]);
if(!((m__8117__auto__ == null))){
return m__8117__auto__.call(null,this$);
} else {
var m__8117__auto____$1 = (enfocus.core.select["_"]);
if(!((m__8117__auto____$1 == null))){
return m__8117__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
}
});

enfocus.core.select.cljs$core$IFn$_invoke$arity$2 = (function (this$,root){
if((!((this$ == null))) && (!((this$.enfocus$core$ISelector$select$arity$2 == null)))){
return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else {
var x__8116__auto__ = (((this$ == null))?null:this$);
var m__8117__auto__ = (enfocus.core.select[goog.typeOf(x__8116__auto__)]);
if(!((m__8117__auto__ == null))){
return m__8117__auto__.call(null,this$,root);
} else {
var m__8117__auto____$1 = (enfocus.core.select["_"]);
if(!((m__8117__auto____$1 == null))){
return m__8117__auto____$1.call(null,this$,root);
} else {
throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
}
});

enfocus.core.select.cljs$core$IFn$_invoke$arity$3 = (function (this$,root,id_mask){
if((!((this$ == null))) && (!((this$.enfocus$core$ISelector$select$arity$3 == null)))){
return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else {
var x__8116__auto__ = (((this$ == null))?null:this$);
var m__8117__auto__ = (enfocus.core.select[goog.typeOf(x__8116__auto__)]);
if(!((m__8117__auto__ == null))){
return m__8117__auto__.call(null,this$,root,id_mask);
} else {
var m__8117__auto____$1 = (enfocus.core.select["_"]);
if(!((m__8117__auto____$1 == null))){
return m__8117__auto____$1.call(null,this$,root,id_mask);
} else {
throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
}
});

enfocus.core.select.cljs$lang$maxFixedArity = 3;



/**
 * @interface
 */
enfocus.core.ITransform = function(){};

/**
 * takes a set of nodes and performs a transform on them
 */
enfocus.core.apply_transform = (function enfocus$core$apply_transform(var_args){
var args17450 = [];
var len__8561__auto___17453 = arguments.length;
var i__8562__auto___17454 = (0);
while(true){
if((i__8562__auto___17454 < len__8561__auto___17453)){
args17450.push((arguments[i__8562__auto___17454]));

var G__17455 = (i__8562__auto___17454 + (1));
i__8562__auto___17454 = G__17455;
continue;
} else {
}
break;
}

var G__17452 = args17450.length;
switch (G__17452) {
case 2:
return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17450.length)].join('')));

}
});

enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$2 = (function (this$,nodes){
if((!((this$ == null))) && (!((this$.enfocus$core$ITransform$apply_transform$arity$2 == null)))){
return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else {
var x__8116__auto__ = (((this$ == null))?null:this$);
var m__8117__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__8116__auto__)]);
if(!((m__8117__auto__ == null))){
return m__8117__auto__.call(null,this$,nodes);
} else {
var m__8117__auto____$1 = (enfocus.core.apply_transform["_"]);
if(!((m__8117__auto____$1 == null))){
return m__8117__auto____$1.call(null,this$,nodes);
} else {
throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
}
});

enfocus.core.apply_transform.cljs$core$IFn$_invoke$arity$3 = (function (this$,nodes,callback){
if((!((this$ == null))) && (!((this$.enfocus$core$ITransform$apply_transform$arity$3 == null)))){
return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else {
var x__8116__auto__ = (((this$ == null))?null:this$);
var m__8117__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__8116__auto__)]);
if(!((m__8117__auto__ == null))){
return m__8117__auto__.call(null,this$,nodes,callback);
} else {
var m__8117__auto____$1 = (enfocus.core.apply_transform["_"]);
if(!((m__8117__auto____$1 == null))){
return m__8117__auto____$1.call(null,this$,nodes,callback);
} else {
throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
}
});

enfocus.core.apply_transform.cljs$lang$maxFixedArity = 3;


enfocus.core.debug = false;
enfocus.core.log_debug = (function enfocus$core$log_debug(mesg){
if((enfocus.core.debug) && (!(cljs.core._EQ_.call(null,window.console,undefined)))){
return console.log(mesg);
} else {
return null;
}
});
enfocus.core.setTimeout = (function enfocus$core$setTimeout(func,ttime){
return goog.Timer.callOnce(func,ttime);
});
enfocus.core.node_QMARK_ = (function enfocus$core$node_QMARK_(tst){
return goog.dom.isNodeLike(tst);
});
enfocus.core.nodelist_QMARK_ = (function enfocus$core$nodelist_QMARK_(tst){
return (tst instanceof NodeList);
});
/**
 * coverts a nodelist, node into a collection
 */
enfocus.core.nodes__GT_coll = (function enfocus$core$nodes__GT_coll(nl){
if((nl === window)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nl], null);
} else {
return domina.nodes.call(null,nl);
}
});
enfocus.core.flatten_nodes_coll = (function enfocus$core$flatten_nodes_coll(values){

return cljs.core.mapcat.call(null,(function (p1__17457_SHARP_){
if(typeof p1__17457_SHARP_ === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__17457_SHARP_)], null);
} else {
return enfocus.core.nodes__GT_coll.call(null,p1__17457_SHARP_);

}
}),values);
});
/**
 * Sets property name to a value on a element and	Returns the original object
 */
enfocus.core.style_set = (function enfocus$core$style_set(obj,values){
var seq__17468_17478 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));
var chunk__17469_17479 = null;
var count__17470_17480 = (0);
var i__17471_17481 = (0);
while(true){
if((i__17471_17481 < count__17470_17480)){
var vec__17472_17482 = cljs.core._nth.call(null,chunk__17469_17479,i__17471_17481);
var attr_17483 = cljs.core.nth.call(null,vec__17472_17482,(0),null);
var value_17484 = cljs.core.nth.call(null,vec__17472_17482,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_17483),value_17484);

var G__17485 = seq__17468_17478;
var G__17486 = chunk__17469_17479;
var G__17487 = count__17470_17480;
var G__17488 = (i__17471_17481 + (1));
seq__17468_17478 = G__17485;
chunk__17469_17479 = G__17486;
count__17470_17480 = G__17487;
i__17471_17481 = G__17488;
continue;
} else {
var temp__4657__auto___17489 = cljs.core.seq.call(null,seq__17468_17478);
if(temp__4657__auto___17489){
var seq__17468_17490__$1 = temp__4657__auto___17489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17468_17490__$1)){
var c__8267__auto___17491 = cljs.core.chunk_first.call(null,seq__17468_17490__$1);
var G__17492 = cljs.core.chunk_rest.call(null,seq__17468_17490__$1);
var G__17493 = c__8267__auto___17491;
var G__17494 = cljs.core.count.call(null,c__8267__auto___17491);
var G__17495 = (0);
seq__17468_17478 = G__17492;
chunk__17469_17479 = G__17493;
count__17470_17480 = G__17494;
i__17471_17481 = G__17495;
continue;
} else {
var vec__17475_17496 = cljs.core.first.call(null,seq__17468_17490__$1);
var attr_17497 = cljs.core.nth.call(null,vec__17475_17496,(0),null);
var value_17498 = cljs.core.nth.call(null,vec__17475_17496,(1),null);
goog.style.setStyle(obj,cljs.core.name.call(null,attr_17497),value_17498);

var G__17499 = cljs.core.next.call(null,seq__17468_17490__$1);
var G__17500 = null;
var G__17501 = (0);
var G__17502 = (0);
seq__17468_17478 = G__17499;
chunk__17469_17479 = G__17500;
count__17470_17480 = G__17501;
i__17471_17481 = G__17502;
continue;
}
} else {
}
}
break;
}

return obj;
});
/**
 * removes the property value from an elements style obj.
 */
enfocus.core.style_remove = (function enfocus$core$style_remove(obj,values){
var seq__17507 = cljs.core.seq.call(null,values);
var chunk__17508 = null;
var count__17509 = (0);
var i__17510 = (0);
while(true){
if((i__17510 < count__17509)){
var attr = cljs.core._nth.call(null,chunk__17508,i__17510);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__17511 = seq__17507;
var G__17512 = chunk__17508;
var G__17513 = count__17509;
var G__17514 = (i__17510 + (1));
seq__17507 = G__17511;
chunk__17508 = G__17512;
count__17509 = G__17513;
i__17510 = G__17514;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__17507);
if(temp__4657__auto__){
var seq__17507__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17507__$1)){
var c__8267__auto__ = cljs.core.chunk_first.call(null,seq__17507__$1);
var G__17515 = cljs.core.chunk_rest.call(null,seq__17507__$1);
var G__17516 = c__8267__auto__;
var G__17517 = cljs.core.count.call(null,c__8267__auto__);
var G__17518 = (0);
seq__17507 = G__17515;
chunk__17508 = G__17516;
count__17509 = G__17517;
i__17510 = G__17518;
continue;
} else {
var attr = cljs.core.first.call(null,seq__17507__$1);
if(cljs.core.truth_(goog.userAgent.IE)){
goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else {
obj.style.removeProperty(cljs.core.name.call(null,attr));
}

var G__17519 = cljs.core.next.call(null,seq__17507__$1);
var G__17520 = null;
var G__17521 = (0);
var G__17522 = (0);
seq__17507 = G__17519;
chunk__17508 = G__17520;
count__17509 = G__17521;
i__17510 = G__17522;
continue;
}
} else {
return null;
}
}
break;
}
});
enfocus.core.get_eff_prop_name = (function enfocus$core$get_eff_prop_name(etype){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("__ef_effect_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(etype)].join('');
});
enfocus.core.get_mills = (function enfocus$core$get_mills(){
return (new Date()).getMilliseconds();
});
enfocus.core.pix_round = (function enfocus$core$pix_round(step){
if((step < (0))){
return Math.floor(step);
} else {
return Math.ceil(step);
}
});
enfocus.core.add_map_attrs = (function enfocus$core$add_map_attrs(var_args){
var args17523 = [];
var len__8561__auto___17536 = arguments.length;
var i__8562__auto___17537 = (0);
while(true){
if((i__8562__auto___17537 < len__8561__auto___17536)){
args17523.push((arguments[i__8562__auto___17537]));

var G__17538 = (i__8562__auto___17537 + (1));
i__8562__auto___17537 = G__17538;
continue;
} else {
}
break;
}

var G__17525 = args17523.length;
switch (G__17525) {
case 2:
return enfocus.core.add_map_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return enfocus.core.add_map_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17523.length)].join('')));

}
});

enfocus.core.add_map_attrs.cljs$core$IFn$_invoke$arity$2 = (function (elem,ats){
if(cljs.core.truth_(elem)){
if(cljs.core.map_QMARK_.call(null,ats)){
var seq__17526_17540 = cljs.core.seq.call(null,ats);
var chunk__17527_17541 = null;
var count__17528_17542 = (0);
var i__17529_17543 = (0);
while(true){
if((i__17529_17543 < count__17528_17542)){
var vec__17530_17544 = cljs.core._nth.call(null,chunk__17527_17541,i__17529_17543);
var k_17545 = cljs.core.nth.call(null,vec__17530_17544,(0),null);
var v_17546 = cljs.core.nth.call(null,vec__17530_17544,(1),null);
enfocus.core.add_map_attrs.call(null,elem,k_17545,v_17546);

var G__17547 = seq__17526_17540;
var G__17548 = chunk__17527_17541;
var G__17549 = count__17528_17542;
var G__17550 = (i__17529_17543 + (1));
seq__17526_17540 = G__17547;
chunk__17527_17541 = G__17548;
count__17528_17542 = G__17549;
i__17529_17543 = G__17550;
continue;
} else {
var temp__4657__auto___17551 = cljs.core.seq.call(null,seq__17526_17540);
if(temp__4657__auto___17551){
var seq__17526_17552__$1 = temp__4657__auto___17551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17526_17552__$1)){
var c__8267__auto___17553 = cljs.core.chunk_first.call(null,seq__17526_17552__$1);
var G__17554 = cljs.core.chunk_rest.call(null,seq__17526_17552__$1);
var G__17555 = c__8267__auto___17553;
var G__17556 = cljs.core.count.call(null,c__8267__auto___17553);
var G__17557 = (0);
seq__17526_17540 = G__17554;
chunk__17527_17541 = G__17555;
count__17528_17542 = G__17556;
i__17529_17543 = G__17557;
continue;
} else {
var vec__17533_17558 = cljs.core.first.call(null,seq__17526_17552__$1);
var k_17559 = cljs.core.nth.call(null,vec__17533_17558,(0),null);
var v_17560 = cljs.core.nth.call(null,vec__17533_17558,(1),null);
enfocus.core.add_map_attrs.call(null,elem,k_17559,v_17560);

var G__17561 = cljs.core.next.call(null,seq__17526_17552__$1);
var G__17562 = null;
var G__17563 = (0);
var G__17564 = (0);
seq__17526_17540 = G__17561;
chunk__17527_17541 = G__17562;
count__17528_17542 = G__17563;
i__17529_17543 = G__17564;
continue;
}
} else {
}
}
break;
}

return elem;
} else {
return null;
}
} else {
return null;
}
});

enfocus.core.add_map_attrs.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
elem.setAttribute(cljs.core.name.call(null,k),v);

return elem;
});

enfocus.core.add_map_attrs.cljs$lang$maxFixedArity = 3;

/**
 * this is incremented everytime a remote template is loaded and decremented when
 * it is added to the dom cache
 */
enfocus.core.tpl_load_cnt = cljs.core.atom.call(null,(0));
/**
 * cache for the remote templates
 */
enfocus.core.tpl_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
enfocus.core.hide_style = new cljs.core.PersistentArrayMap(null, 1, ["style","display: none; width: 0px; height: 0px"], null).strobj;
/**
 * Add a hidden div to hold the dom as we are transforming it this has to be done
 * because css selectors do not work unless we have it in the main dom
 */
enfocus.core.create_hidden_dom = (function enfocus$core$create_hidden_dom(child){
var div = goog.dom.createDom("div",enfocus.core.hide_style);
if(cljs.core._EQ_.call(null,child.nodeType,(11))){
goog.dom.appendChild(div,child);
} else {
enfocus.core.log_debug.call(null,cljs.core.count.call(null,domina.nodes.call(null,child)));

var seq__17569_17573 = cljs.core.seq.call(null,domina.nodes.call(null,child));
var chunk__17570_17574 = null;
var count__17571_17575 = (0);
var i__17572_17576 = (0);
while(true){
if((i__17572_17576 < count__17571_17575)){
var node_17577 = cljs.core._nth.call(null,chunk__17570_17574,i__17572_17576);
goog.dom.appendChild(div,node_17577);

var G__17578 = seq__17569_17573;
var G__17579 = chunk__17570_17574;
var G__17580 = count__17571_17575;
var G__17581 = (i__17572_17576 + (1));
seq__17569_17573 = G__17578;
chunk__17570_17574 = G__17579;
count__17571_17575 = G__17580;
i__17572_17576 = G__17581;
continue;
} else {
var temp__4657__auto___17582 = cljs.core.seq.call(null,seq__17569_17573);
if(temp__4657__auto___17582){
var seq__17569_17583__$1 = temp__4657__auto___17582;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17569_17583__$1)){
var c__8267__auto___17584 = cljs.core.chunk_first.call(null,seq__17569_17583__$1);
var G__17585 = cljs.core.chunk_rest.call(null,seq__17569_17583__$1);
var G__17586 = c__8267__auto___17584;
var G__17587 = cljs.core.count.call(null,c__8267__auto___17584);
var G__17588 = (0);
seq__17569_17573 = G__17585;
chunk__17570_17574 = G__17586;
count__17571_17575 = G__17587;
i__17572_17576 = G__17588;
continue;
} else {
var node_17589 = cljs.core.first.call(null,seq__17569_17583__$1);
goog.dom.appendChild(div,node_17589);

var G__17590 = cljs.core.next.call(null,seq__17569_17583__$1);
var G__17591 = null;
var G__17592 = (0);
var G__17593 = (0);
seq__17569_17573 = G__17590;
chunk__17570_17574 = G__17591;
count__17571_17575 = G__17592;
i__17572_17576 = G__17593;
continue;
}
} else {
}
}
break;
}
}

goog.dom.appendChild(goog.dom.getDocument().documentElement,div);

return div;
});
/**
 * removes the hidden div and returns the children
 */
enfocus.core.remove_node_return_child = (function enfocus$core$remove_node_return_child(div){
var child = div.childNodes;
var frag = document.createDocumentFragment();
goog.dom.append(frag,child);

goog.dom.removeNode(div);

return frag;
});
enfocus.core.last_element_child = (function enfocus$core$last_element_child(node){

return goog.dom.getLastElementChild(node);
});
/**
 * replaces all the ids in a string html fragement/template with a generated
 * symbol appended on to a existing id this is done to make sure we don't have
 * id colisions during the transformation process
 */
enfocus.core.replace_ids = (function enfocus$core$replace_ids(var_args){
var args17594 = [];
var len__8561__auto___17597 = arguments.length;
var i__8562__auto___17598 = (0);
while(true){
if((i__8562__auto___17598 < len__8561__auto___17597)){
args17594.push((arguments[i__8562__auto___17598]));

var G__17599 = (i__8562__auto___17598 + (1));
i__8562__auto___17598 = G__17599;
continue;
} else {
}
break;
}

var G__17596 = args17594.length;
switch (G__17596) {
case 1:
return enfocus.core.replace_ids.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.core.replace_ids.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17594.length)].join('')));

}
});

enfocus.core.replace_ids.cljs$core$IFn$_invoke$arity$1 = (function (text){
return enfocus.core.replace_ids.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,cljs.core.gensym.call(null,"id"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("_")].join(''),text);
});

enfocus.core.replace_ids.cljs$core$IFn$_invoke$arity$2 = (function (id_mask,text){
var re = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_mask,text.replace(re,((function (re){
return (function (a,b,c,d){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_mask),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(d)].join('');
});})(re))
)], null);
});

enfocus.core.replace_ids.cljs$lang$maxFixedArity = 2;

/**
 * before adding the dom back into the live dom we reset the masked ids to orig vals
 */
enfocus.core.reset_ids = (function enfocus$core$reset_ids(sym,nod){
var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");
var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (id_nodes,nod_col){
return (function (p1__17601_SHARP_){
var id = p1__17601_SHARP_.getAttribute("id");
var rid = id.replace(sym,"");
return p1__17601_SHARP_.setAttribute("id",rid);
});})(id_nodes,nod_col))
,nod_col));
});
/**
 * loads a remote file into the cache, and masks the ids to avoid collisions
 */
enfocus.core.load_remote_dom = (function enfocus$core$load_remote_dom(uri,dom_key,id_mask){
if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null)){
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);

var req = (new goog.net.XhrIo());
var callback = ((function (req){
return (function (req__$1){
var text = req__$1.getResponseText();
var vec__17605 = enfocus.core.replace_ids.call(null,id_mask,text);
var sym = cljs.core.nth.call(null,vec__17605,(0),null);
var txt = cljs.core.nth.call(null,vec__17605,(1),null);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
});})(req))
;
goog.events.listen(req,goog.net.EventType.COMPLETE,((function (req,callback){
return (function (){
callback.call(null,req);

return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
});})(req,callback))
);

return req.send(uri,"GET");
} else {
return null;
}
});
enfocus.core.html_to_dom = (function enfocus$core$html_to_dom(html){
var dfa = enfocus.core.nodes__GT_coll.call(null,domina.html_to_dom.call(null,html));
var frag = document.createDocumentFragment();
enfocus.core.log_debug.call(null,cljs.core.count.call(null,dfa));

var seq__17612_17616 = cljs.core.seq.call(null,dfa);
var chunk__17613_17617 = null;
var count__17614_17618 = (0);
var i__17615_17619 = (0);
while(true){
if((i__17615_17619 < count__17614_17618)){
var df_17620 = cljs.core._nth.call(null,chunk__17613_17617,i__17615_17619);
goog.dom.append(frag,df_17620);

var G__17621 = seq__17612_17616;
var G__17622 = chunk__17613_17617;
var G__17623 = count__17614_17618;
var G__17624 = (i__17615_17619 + (1));
seq__17612_17616 = G__17621;
chunk__17613_17617 = G__17622;
count__17614_17618 = G__17623;
i__17615_17619 = G__17624;
continue;
} else {
var temp__4657__auto___17625 = cljs.core.seq.call(null,seq__17612_17616);
if(temp__4657__auto___17625){
var seq__17612_17626__$1 = temp__4657__auto___17625;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17612_17626__$1)){
var c__8267__auto___17627 = cljs.core.chunk_first.call(null,seq__17612_17626__$1);
var G__17628 = cljs.core.chunk_rest.call(null,seq__17612_17626__$1);
var G__17629 = c__8267__auto___17627;
var G__17630 = cljs.core.count.call(null,c__8267__auto___17627);
var G__17631 = (0);
seq__17612_17616 = G__17628;
chunk__17613_17617 = G__17629;
count__17614_17618 = G__17630;
i__17615_17619 = G__17631;
continue;
} else {
var df_17632 = cljs.core.first.call(null,seq__17612_17626__$1);
goog.dom.append(frag,df_17632);

var G__17633 = cljs.core.next.call(null,seq__17612_17626__$1);
var G__17634 = null;
var G__17635 = (0);
var G__17636 = (0);
seq__17612_17616 = G__17633;
chunk__17613_17617 = G__17634;
count__17614_17618 = G__17635;
i__17615_17619 = G__17636;
continue;
}
} else {
}
}
break;
}

return frag;
});
/**
 * returns and dom from the cache and symbol used to scope the ids
 */
enfocus.core.get_cached_dom = (function enfocus$core$get_cached_dom(uri){
var nod = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);
if(cljs.core.truth_(nod)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,nod),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,nod))], null);
} else {
return null;
}
});
/**
 * returns the cached snippet or creates one and adds it to the cache if needed
 */
enfocus.core.get_cached_snippet = (function enfocus$core$get_cached_snippet(uri,sel){
var sel_str = enfocus.core.create_sel_str.call(null,sel);
var cache = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sel_str)].join(''));
if(cljs.core.truth_(cache)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cache),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,cache))], null);
} else {
var vec__17641 = enfocus.core.get_cached_dom.call(null,uri);
var sym = cljs.core.nth.call(null,vec__17641,(0),null);
var tdom = cljs.core.nth.call(null,vec__17641,(1),null);
var dom = enfocus.core.create_hidden_dom.call(null,tdom);
var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));
var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__17641,sym,tdom,dom,tsnip,sel_str,cache){
return (function (p1__17637_SHARP_){
return p1__17637_SHARP_.outerHTML;
});})(vec__17641,sym,tdom,dom,tsnip,sel_str,cache))
,tsnip));
enfocus.core.remove_node_return_child.call(null,dom);

cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sel_str)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,html_snip], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,enfocus.core.html_to_dom.call(null,html_snip)], null);
}
});
/**
 * wrapper function for extractors that maps the extraction to
 * all nodes returned by the selector
 */
enfocus.core.extr_multi_node = (function enfocus$core$extr_multi_node(var_args){
var args17644 = [];
var len__8561__auto___17651 = arguments.length;
var i__8562__auto___17652 = (0);
while(true){
if((i__8562__auto___17652 < len__8561__auto___17651)){
args17644.push((arguments[i__8562__auto___17652]));

var G__17653 = (i__8562__auto___17652 + (1));
i__8562__auto___17652 = G__17653;
continue;
} else {
}
break;
}

var G__17646 = args17644.length;
switch (G__17646) {
case 1:
return enfocus.core.extr_multi_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.core.extr_multi_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17644.length)].join('')));

}
});

enfocus.core.extr_multi_node.cljs$core$IFn$_invoke$arity$1 = (function (func){
return enfocus.core.extr_multi_node.call(null,func,null);
});

enfocus.core.extr_multi_node.cljs$core$IFn$_invoke$arity$2 = (function (func,filt){
var trans = (function enfocus$core$trans(pnodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);
var result = cljs.core.map.call(null,func,pnod_col);
var result__$1 = (cljs.core.truth_(filt)?cljs.core.filter.call(null,filt,result):result);
if((cljs.core.count.call(null,result__$1) <= (1))){
return cljs.core.first.call(null,result__$1);
} else {
return result__$1;
}
});
if(typeof enfocus.core.t_enfocus$core17647 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {enfocus.core.ITransform}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
enfocus.core.t_enfocus$core17647 = (function (func,filt,trans,meta17648){
this.func = func;
this.filt = filt;
this.trans = trans;
this.meta17648 = meta17648;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
enfocus.core.t_enfocus$core17647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_17649,meta17648__$1){
var self__ = this;
var _17649__$1 = this;
return (new enfocus.core.t_enfocus$core17647(self__.func,self__.filt,self__.trans,meta17648__$1));
});})(trans))
;

enfocus.core.t_enfocus$core17647.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_17649){
var self__ = this;
var _17649__$1 = this;
return self__.meta17648;
});})(trans))
;

enfocus.core.t_enfocus$core17647.prototype.enfocus$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

enfocus.core.t_enfocus$core17647.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core17647.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core17647.prototype.call = ((function (trans){
return (function() {
var G__17655 = null;
var G__17655__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__17655__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__17655 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__17655__2.call(this,self__,nodes);
case 3:
return G__17655__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17655.cljs$core$IFn$_invoke$arity$2 = G__17655__2;
G__17655.cljs$core$IFn$_invoke$arity$3 = G__17655__3;
return G__17655;
})()
;})(trans))
;

enfocus.core.t_enfocus$core17647.prototype.apply = ((function (trans){
return (function (self__,args17650){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args17650)));
});})(trans))
;

enfocus.core.t_enfocus$core17647.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core17647.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core17647.getBasis = ((function (trans){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"filt","filt",1809760609,null),new cljs.core.Symbol(null,"trans","trans",322027676,null),new cljs.core.Symbol(null,"meta17648","meta17648",-1105805055,null)], null);
});})(trans))
;

enfocus.core.t_enfocus$core17647.cljs$lang$type = true;

enfocus.core.t_enfocus$core17647.cljs$lang$ctorStr = "enfocus.core/t_enfocus$core17647";

enfocus.core.t_enfocus$core17647.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__8059__auto__,writer__8060__auto__,opt__8061__auto__){
return cljs.core._write.call(null,writer__8060__auto__,"enfocus.core/t_enfocus$core17647");
});})(trans))
;

enfocus.core.__GT_t_enfocus$core17647 = ((function (trans){
return (function enfocus$core$__GT_t_enfocus$core17647(func__$1,filt__$1,trans__$1,meta17648){
return (new enfocus.core.t_enfocus$core17647(func__$1,filt__$1,trans__$1,meta17648));
});})(trans))
;

}

return (new enfocus.core.t_enfocus$core17647(func,filt,trans,cljs.core.PersistentArrayMap.EMPTY));
});

enfocus.core.extr_multi_node.cljs$lang$maxFixedArity = 2;

/**
 * Allows standard domina functions to be chainable
 */
enfocus.core.multi_node_chain = (function enfocus$core$multi_node_chain(var_args){
var args17657 = [];
var len__8561__auto___17668 = arguments.length;
var i__8562__auto___17669 = (0);
while(true){
if((i__8562__auto___17669 < len__8561__auto___17668)){
args17657.push((arguments[i__8562__auto___17669]));

var G__17670 = (i__8562__auto___17669 + (1));
i__8562__auto___17669 = G__17670;
continue;
} else {
}
break;
}

var G__17659 = args17657.length;
switch (G__17659) {
case 1:
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17657.length)].join('')));

}
});

enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$1 = (function (func){
var trans = (function (nodes,chain){
var val = func.call(null,nodes);
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
if(typeof enfocus.core.t_enfocus$core17660 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {enfocus.core.ITransform}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
enfocus.core.t_enfocus$core17660 = (function (func,trans,meta17661){
this.func = func;
this.trans = trans;
this.meta17661 = meta17661;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
enfocus.core.t_enfocus$core17660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_17662,meta17661__$1){
var self__ = this;
var _17662__$1 = this;
return (new enfocus.core.t_enfocus$core17660(self__.func,self__.trans,meta17661__$1));
});})(trans))
;

enfocus.core.t_enfocus$core17660.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_17662){
var self__ = this;
var _17662__$1 = this;
return self__.meta17661;
});})(trans))
;

enfocus.core.t_enfocus$core17660.prototype.enfocus$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

enfocus.core.t_enfocus$core17660.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core17660.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core17660.prototype.call = ((function (trans){
return (function() {
var G__17672 = null;
var G__17672__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__17672__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__17672 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__17672__2.call(this,self__,nodes);
case 3:
return G__17672__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17672.cljs$core$IFn$_invoke$arity$2 = G__17672__2;
G__17672.cljs$core$IFn$_invoke$arity$3 = G__17672__3;
return G__17672;
})()
;})(trans))
;

enfocus.core.t_enfocus$core17660.prototype.apply = ((function (trans){
return (function (self__,args17663){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args17663)));
});})(trans))
;

enfocus.core.t_enfocus$core17660.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core17660.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core17660.getBasis = ((function (trans){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"trans","trans",322027676,null),new cljs.core.Symbol(null,"meta17661","meta17661",1725757830,null)], null);
});})(trans))
;

enfocus.core.t_enfocus$core17660.cljs$lang$type = true;

enfocus.core.t_enfocus$core17660.cljs$lang$ctorStr = "enfocus.core/t_enfocus$core17660";

enfocus.core.t_enfocus$core17660.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__8059__auto__,writer__8060__auto__,opt__8061__auto__){
return cljs.core._write.call(null,writer__8060__auto__,"enfocus.core/t_enfocus$core17660");
});})(trans))
;

enfocus.core.__GT_t_enfocus$core17660 = ((function (trans){
return (function enfocus$core$__GT_t_enfocus$core17660(func__$1,trans__$1,meta17661){
return (new enfocus.core.t_enfocus$core17660(func__$1,trans__$1,meta17661));
});})(trans))
;

}

return (new enfocus.core.t_enfocus$core17660(func,trans,cljs.core.PersistentArrayMap.EMPTY));
});

enfocus.core.multi_node_chain.cljs$core$IFn$_invoke$arity$2 = (function (values,func){
var trans = (function (nodes,chain){
var vnodes = cljs.core.mapcat.call(null,(function (p1__17656_SHARP_){
return domina.nodes.call(null,p1__17656_SHARP_);
}),values);
var val = func.call(null,nodes,vnodes);
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
if(typeof enfocus.core.t_enfocus$core17664 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {enfocus.core.ITransform}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
enfocus.core.t_enfocus$core17664 = (function (values,func,trans,meta17665){
this.values = values;
this.func = func;
this.trans = trans;
this.meta17665 = meta17665;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
enfocus.core.t_enfocus$core17664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_17666,meta17665__$1){
var self__ = this;
var _17666__$1 = this;
return (new enfocus.core.t_enfocus$core17664(self__.values,self__.func,self__.trans,meta17665__$1));
});})(trans))
;

enfocus.core.t_enfocus$core17664.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_17666){
var self__ = this;
var _17666__$1 = this;
return self__.meta17665;
});})(trans))
;

enfocus.core.t_enfocus$core17664.prototype.enfocus$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

enfocus.core.t_enfocus$core17664.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core17664.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core17664.prototype.call = ((function (trans){
return (function() {
var G__17673 = null;
var G__17673__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__17673__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__17673 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__17673__2.call(this,self__,nodes);
case 3:
return G__17673__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17673.cljs$core$IFn$_invoke$arity$2 = G__17673__2;
G__17673.cljs$core$IFn$_invoke$arity$3 = G__17673__3;
return G__17673;
})()
;})(trans))
;

enfocus.core.t_enfocus$core17664.prototype.apply = ((function (trans){
return (function (self__,args17667){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args17667)));
});})(trans))
;

enfocus.core.t_enfocus$core17664.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core17664.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core17664.getBasis = ((function (trans){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"values","values",2013177083,null),new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"trans","trans",322027676,null),new cljs.core.Symbol(null,"meta17665","meta17665",-1915181800,null)], null);
});})(trans))
;

enfocus.core.t_enfocus$core17664.cljs$lang$type = true;

enfocus.core.t_enfocus$core17664.cljs$lang$ctorStr = "enfocus.core/t_enfocus$core17664";

enfocus.core.t_enfocus$core17664.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__8059__auto__,writer__8060__auto__,opt__8061__auto__){
return cljs.core._write.call(null,writer__8060__auto__,"enfocus.core/t_enfocus$core17664");
});})(trans))
;

enfocus.core.__GT_t_enfocus$core17664 = ((function (trans){
return (function enfocus$core$__GT_t_enfocus$core17664(values__$1,func__$1,trans__$1,meta17665){
return (new enfocus.core.t_enfocus$core17664(values__$1,func__$1,trans__$1,meta17665));
});})(trans))
;

}

return (new enfocus.core.t_enfocus$core17664(values,func,trans,cljs.core.PersistentArrayMap.EMPTY));
});

enfocus.core.multi_node_chain.cljs$lang$maxFixedArity = 2;

/**
 * Replaces the content of the element. Values can be nodes or collection of nodes.
 */
enfocus.core.content = (function enfocus$core$content(var_args){
var args__8568__auto__ = [];
var len__8561__auto___17677 = arguments.length;
var i__8562__auto___17678 = (0);
while(true){
if((i__8562__auto___17678 < len__8561__auto___17677)){
args__8568__auto__.push((arguments[i__8562__auto___17678]));

var G__17679 = (i__8562__auto___17678 + (1));
i__8562__auto___17678 = G__17679;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return enfocus.core.content.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});

enfocus.core.content.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__17674_SHARP_,p2__17675_SHARP_){
domina.destroy_children_BANG_.call(null,p1__17674_SHARP_);

return domina.append_BANG_.call(null,p1__17674_SHARP_,p2__17675_SHARP_);
}));
});

enfocus.core.content.cljs$lang$maxFixedArity = (0);

enfocus.core.content.cljs$lang$applyTo = (function (seq17676){
return enfocus.core.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17676));
});

/**
 * Replaces the content of the element with the dom structure represented by the html string passed
 */
enfocus.core.html_content = (function enfocus$core$html_content(txt){
return enfocus.core.multi_node_chain.call(null,(function (p1__17680_SHARP_){
return domina.set_html_BANG_.call(null,p1__17680_SHARP_,txt);
}));
});
/**
 * Assocs attributes and values on the selected element.
 */
enfocus.core.set_attr = (function enfocus$core$set_attr(var_args){
var args__8568__auto__ = [];
var len__8561__auto___17693 = arguments.length;
var i__8562__auto___17694 = (0);
while(true){
if((i__8562__auto___17694 < len__8561__auto___17693)){
args__8568__auto__.push((arguments[i__8562__auto___17694]));

var G__17695 = (i__8562__auto___17694 + (1));
i__8562__auto___17694 = G__17695;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return enfocus.core.set_attr.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});

enfocus.core.set_attr.cljs$core$IFn$_invoke$arity$variadic = (function (values){
var pairs = cljs.core.partition.call(null,(2),values);
return enfocus.core.multi_node_chain.call(null,((function (pairs){
return (function (p1__17681_SHARP_){
var seq__17683 = cljs.core.seq.call(null,pairs);
var chunk__17684 = null;
var count__17685 = (0);
var i__17686 = (0);
while(true){
if((i__17686 < count__17685)){
var vec__17687 = cljs.core._nth.call(null,chunk__17684,i__17686);
var name = cljs.core.nth.call(null,vec__17687,(0),null);
var value = cljs.core.nth.call(null,vec__17687,(1),null);
domina.set_attr_BANG_.call(null,p1__17681_SHARP_,name,value);

var G__17696 = seq__17683;
var G__17697 = chunk__17684;
var G__17698 = count__17685;
var G__17699 = (i__17686 + (1));
seq__17683 = G__17696;
chunk__17684 = G__17697;
count__17685 = G__17698;
i__17686 = G__17699;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__17683);
if(temp__4657__auto__){
var seq__17683__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17683__$1)){
var c__8267__auto__ = cljs.core.chunk_first.call(null,seq__17683__$1);
var G__17700 = cljs.core.chunk_rest.call(null,seq__17683__$1);
var G__17701 = c__8267__auto__;
var G__17702 = cljs.core.count.call(null,c__8267__auto__);
var G__17703 = (0);
seq__17683 = G__17700;
chunk__17684 = G__17701;
count__17685 = G__17702;
i__17686 = G__17703;
continue;
} else {
var vec__17690 = cljs.core.first.call(null,seq__17683__$1);
var name = cljs.core.nth.call(null,vec__17690,(0),null);
var value = cljs.core.nth.call(null,vec__17690,(1),null);
domina.set_attr_BANG_.call(null,p1__17681_SHARP_,name,value);

var G__17704 = cljs.core.next.call(null,seq__17683__$1);
var G__17705 = null;
var G__17706 = (0);
var G__17707 = (0);
seq__17683 = G__17704;
chunk__17684 = G__17705;
count__17685 = G__17706;
i__17686 = G__17707;
continue;
}
} else {
return null;
}
}
break;
}
});})(pairs))
);
});

enfocus.core.set_attr.cljs$lang$maxFixedArity = (0);

enfocus.core.set_attr.cljs$lang$applyTo = (function (seq17682){
return enfocus.core.set_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17682));
});

/**
 * Dissocs attributes on the selected element.
 */
enfocus.core.remove_attr = (function enfocus$core$remove_attr(var_args){
var args__8568__auto__ = [];
var len__8561__auto___17714 = arguments.length;
var i__8562__auto___17715 = (0);
while(true){
if((i__8562__auto___17715 < len__8561__auto___17714)){
args__8568__auto__.push((arguments[i__8562__auto___17715]));

var G__17716 = (i__8562__auto___17715 + (1));
i__8562__auto___17715 = G__17716;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return enfocus.core.remove_attr.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});

enfocus.core.remove_attr.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,(function (p1__17708_SHARP_){
var seq__17710 = cljs.core.seq.call(null,values);
var chunk__17711 = null;
var count__17712 = (0);
var i__17713 = (0);
while(true){
if((i__17713 < count__17712)){
var name = cljs.core._nth.call(null,chunk__17711,i__17713);
domina.remove_attr_BANG_.call(null,p1__17708_SHARP_,name);

var G__17717 = seq__17710;
var G__17718 = chunk__17711;
var G__17719 = count__17712;
var G__17720 = (i__17713 + (1));
seq__17710 = G__17717;
chunk__17711 = G__17718;
count__17712 = G__17719;
i__17713 = G__17720;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__17710);
if(temp__4657__auto__){
var seq__17710__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17710__$1)){
var c__8267__auto__ = cljs.core.chunk_first.call(null,seq__17710__$1);
var G__17721 = cljs.core.chunk_rest.call(null,seq__17710__$1);
var G__17722 = c__8267__auto__;
var G__17723 = cljs.core.count.call(null,c__8267__auto__);
var G__17724 = (0);
seq__17710 = G__17721;
chunk__17711 = G__17722;
count__17712 = G__17723;
i__17713 = G__17724;
continue;
} else {
var name = cljs.core.first.call(null,seq__17710__$1);
domina.remove_attr_BANG_.call(null,p1__17708_SHARP_,name);

var G__17725 = cljs.core.next.call(null,seq__17710__$1);
var G__17726 = null;
var G__17727 = (0);
var G__17728 = (0);
seq__17710 = G__17725;
chunk__17711 = G__17726;
count__17712 = G__17727;
i__17713 = G__17728;
continue;
}
} else {
return null;
}
}
break;
}
}));
});

enfocus.core.remove_attr.cljs$lang$maxFixedArity = (0);

enfocus.core.remove_attr.cljs$lang$applyTo = (function (seq17709){
return enfocus.core.remove_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17709));
});

enfocus.core.set_prop = (function enfocus$core$set_prop(var_args){
var args__8568__auto__ = [];
var len__8561__auto___17734 = arguments.length;
var i__8562__auto___17735 = (0);
while(true){
if((i__8562__auto___17735 < len__8561__auto___17734)){
args__8568__auto__.push((arguments[i__8562__auto___17735]));

var G__17736 = (i__8562__auto___17735 + (1));
i__8562__auto___17735 = G__17736;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return enfocus.core.set_prop.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});

enfocus.core.set_prop.cljs$core$IFn$_invoke$arity$variadic = (function (forms){
return (function (node){
var h = cljs.core.mapcat.call(null,(function (p__17730){
var vec__17731 = p__17730;
var n = cljs.core.nth.call(null,vec__17731,(0),null);
var v = cljs.core.nth.call(null,vec__17731,(1),null);
var x__8290__auto__ = cljs.core.name.call(null,n);
return cljs.core._conj.call(null,(function (){var x__8290__auto____$1 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8290__auto____$1);
})(),x__8290__auto__);
}),cljs.core.partition.call(null,(2),forms));
return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
});

enfocus.core.set_prop.cljs$lang$maxFixedArity = (0);

enfocus.core.set_prop.cljs$lang$applyTo = (function (seq17729){
return enfocus.core.set_prop.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17729));
});

/**
 * returns true if the element has a given class
 */
enfocus.core.has_class = (function enfocus$core$has_class(el,cls){
return goog.dom.classes.hasClass(el,cls);
});
/**
 * Adds the specified classes to the selected element.
 */
enfocus.core.add_class = (function enfocus$core$add_class(var_args){
var args__8568__auto__ = [];
var len__8561__auto___17743 = arguments.length;
var i__8562__auto___17744 = (0);
while(true){
if((i__8562__auto___17744 < len__8561__auto___17743)){
args__8568__auto__.push((arguments[i__8562__auto___17744]));

var G__17745 = (i__8562__auto___17744 + (1));
i__8562__auto___17744 = G__17745;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return enfocus.core.add_class.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});

enfocus.core.add_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,(function (p1__17737_SHARP_){
var seq__17739 = cljs.core.seq.call(null,values);
var chunk__17740 = null;
var count__17741 = (0);
var i__17742 = (0);
while(true){
if((i__17742 < count__17741)){
var val = cljs.core._nth.call(null,chunk__17740,i__17742);
domina.add_class_BANG_.call(null,p1__17737_SHARP_,val);

var G__17746 = seq__17739;
var G__17747 = chunk__17740;
var G__17748 = count__17741;
var G__17749 = (i__17742 + (1));
seq__17739 = G__17746;
chunk__17740 = G__17747;
count__17741 = G__17748;
i__17742 = G__17749;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__17739);
if(temp__4657__auto__){
var seq__17739__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17739__$1)){
var c__8267__auto__ = cljs.core.chunk_first.call(null,seq__17739__$1);
var G__17750 = cljs.core.chunk_rest.call(null,seq__17739__$1);
var G__17751 = c__8267__auto__;
var G__17752 = cljs.core.count.call(null,c__8267__auto__);
var G__17753 = (0);
seq__17739 = G__17750;
chunk__17740 = G__17751;
count__17741 = G__17752;
i__17742 = G__17753;
continue;
} else {
var val = cljs.core.first.call(null,seq__17739__$1);
domina.add_class_BANG_.call(null,p1__17737_SHARP_,val);

var G__17754 = cljs.core.next.call(null,seq__17739__$1);
var G__17755 = null;
var G__17756 = (0);
var G__17757 = (0);
seq__17739 = G__17754;
chunk__17740 = G__17755;
count__17741 = G__17756;
i__17742 = G__17757;
continue;
}
} else {
return null;
}
}
break;
}
}));
});

enfocus.core.add_class.cljs$lang$maxFixedArity = (0);

enfocus.core.add_class.cljs$lang$applyTo = (function (seq17738){
return enfocus.core.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17738));
});

/**
 * Removes the specified classes from the selected element.
 */
enfocus.core.remove_class = (function enfocus$core$remove_class(var_args){
var args__8568__auto__ = [];
var len__8561__auto___17764 = arguments.length;
var i__8562__auto___17765 = (0);
while(true){
if((i__8562__auto___17765 < len__8561__auto___17764)){
args__8568__auto__.push((arguments[i__8562__auto___17765]));

var G__17766 = (i__8562__auto___17765 + (1));
i__8562__auto___17765 = G__17766;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});

enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,(function (p1__17758_SHARP_){
var seq__17760 = cljs.core.seq.call(null,values);
var chunk__17761 = null;
var count__17762 = (0);
var i__17763 = (0);
while(true){
if((i__17763 < count__17762)){
var val = cljs.core._nth.call(null,chunk__17761,i__17763);
domina.remove_class_BANG_.call(null,p1__17758_SHARP_,val);

var G__17767 = seq__17760;
var G__17768 = chunk__17761;
var G__17769 = count__17762;
var G__17770 = (i__17763 + (1));
seq__17760 = G__17767;
chunk__17761 = G__17768;
count__17762 = G__17769;
i__17763 = G__17770;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__17760);
if(temp__4657__auto__){
var seq__17760__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17760__$1)){
var c__8267__auto__ = cljs.core.chunk_first.call(null,seq__17760__$1);
var G__17771 = cljs.core.chunk_rest.call(null,seq__17760__$1);
var G__17772 = c__8267__auto__;
var G__17773 = cljs.core.count.call(null,c__8267__auto__);
var G__17774 = (0);
seq__17760 = G__17771;
chunk__17761 = G__17772;
count__17762 = G__17773;
i__17763 = G__17774;
continue;
} else {
var val = cljs.core.first.call(null,seq__17760__$1);
domina.remove_class_BANG_.call(null,p1__17758_SHARP_,val);

var G__17775 = cljs.core.next.call(null,seq__17760__$1);
var G__17776 = null;
var G__17777 = (0);
var G__17778 = (0);
seq__17760 = G__17775;
chunk__17761 = G__17776;
count__17762 = G__17777;
i__17763 = G__17778;
continue;
}
} else {
return null;
}
}
break;
}
}));
});

enfocus.core.remove_class.cljs$lang$maxFixedArity = (0);

enfocus.core.remove_class.cljs$lang$applyTo = (function (seq17759){
return enfocus.core.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17759));
});

/**
 * Sets the specified classes on the selected element
 */
enfocus.core.set_class = (function enfocus$core$set_class(var_args){
var args__8568__auto__ = [];
var len__8561__auto___17781 = arguments.length;
var i__8562__auto___17782 = (0);
while(true){
if((i__8562__auto___17782 < len__8561__auto___17781)){
args__8568__auto__.push((arguments[i__8562__auto___17782]));

var G__17783 = (i__8562__auto___17782 + (1));
i__8562__auto___17782 = G__17783;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return enfocus.core.set_class.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});

enfocus.core.set_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,(function (p1__17779_SHARP_){
return domina.set_classes_BANG_.call(null,p1__17779_SHARP_,values);
}));
});

enfocus.core.set_class.cljs$lang$maxFixedArity = (0);

enfocus.core.set_class.cljs$lang$applyTo = (function (seq17780){
return enfocus.core.set_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17780));
});

enfocus.core.do__GT_ = (function enfocus$core$do__GT_(var_args){
var args__8568__auto__ = [];
var len__8561__auto___17789 = arguments.length;
var i__8562__auto___17790 = (0);
while(true){
if((i__8562__auto___17790 < len__8561__auto___17789)){
args__8568__auto__.push((arguments[i__8562__auto___17790]));

var G__17791 = (i__8562__auto___17790 + (1));
i__8562__auto___17790 = G__17791;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return enfocus.core.do__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});

enfocus.core.do__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (forms){

return (function (pnod){
var seq__17785 = cljs.core.seq.call(null,forms);
var chunk__17786 = null;
var count__17787 = (0);
var i__17788 = (0);
while(true){
if((i__17788 < count__17787)){
var fun = cljs.core._nth.call(null,chunk__17786,i__17788);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__17792 = seq__17785;
var G__17793 = chunk__17786;
var G__17794 = count__17787;
var G__17795 = (i__17788 + (1));
seq__17785 = G__17792;
chunk__17786 = G__17793;
count__17787 = G__17794;
i__17788 = G__17795;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__17785);
if(temp__4657__auto__){
var seq__17785__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17785__$1)){
var c__8267__auto__ = cljs.core.chunk_first.call(null,seq__17785__$1);
var G__17796 = cljs.core.chunk_rest.call(null,seq__17785__$1);
var G__17797 = c__8267__auto__;
var G__17798 = cljs.core.count.call(null,c__8267__auto__);
var G__17799 = (0);
seq__17785 = G__17796;
chunk__17786 = G__17797;
count__17787 = G__17798;
i__17788 = G__17799;
continue;
} else {
var fun = cljs.core.first.call(null,seq__17785__$1);
enfocus.core.apply_transform.call(null,fun,pnod);

var G__17800 = cljs.core.next.call(null,seq__17785__$1);
var G__17801 = null;
var G__17802 = (0);
var G__17803 = (0);
seq__17785 = G__17800;
chunk__17786 = G__17801;
count__17787 = G__17802;
i__17788 = G__17803;
continue;
}
} else {
return null;
}
}
break;
}
});
});

enfocus.core.do__GT_.cljs$lang$maxFixedArity = (0);

enfocus.core.do__GT_.cljs$lang$applyTo = (function (seq17784){
return enfocus.core.do__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17784));
});

/**
 * Appends the content of the element. Values can be nodes or collection of nodes.
 */
enfocus.core.append = (function enfocus$core$append(var_args){
var args__8568__auto__ = [];
var len__8561__auto___17807 = arguments.length;
var i__8562__auto___17808 = (0);
while(true){
if((i__8562__auto___17808 < len__8561__auto___17807)){
args__8568__auto__.push((arguments[i__8562__auto___17808]));

var G__17809 = (i__8562__auto___17808 + (1));
i__8562__auto___17808 = G__17809;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return enfocus.core.append.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});

enfocus.core.append.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__17804_SHARP_,p2__17805_SHARP_){
return domina.append_BANG_.call(null,p1__17804_SHARP_,p2__17805_SHARP_);
}));
});

enfocus.core.append.cljs$lang$maxFixedArity = (0);

enfocus.core.append.cljs$lang$applyTo = (function (seq17806){
return enfocus.core.append.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17806));
});

/**
 * Prepends the content of the element. Values can be nodes or collection of nodes.
 */
enfocus.core.prepend = (function enfocus$core$prepend(var_args){
var args__8568__auto__ = [];
var len__8561__auto___17813 = arguments.length;
var i__8562__auto___17814 = (0);
while(true){
if((i__8562__auto___17814 < len__8561__auto___17813)){
args__8568__auto__.push((arguments[i__8562__auto___17814]));

var G__17815 = (i__8562__auto___17814 + (1));
i__8562__auto___17814 = G__17815;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return enfocus.core.prepend.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});

enfocus.core.prepend.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__17810_SHARP_,p2__17811_SHARP_){
return domina.prepend_BANG_.call(null,p1__17810_SHARP_,p2__17811_SHARP_);
}));
});

enfocus.core.prepend.cljs$lang$maxFixedArity = (0);

enfocus.core.prepend.cljs$lang$applyTo = (function (seq17812){
return enfocus.core.prepend.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17812));
});

/**
 * inserts the content before the selected node. Values can be nodes or collection of nodes
 */
enfocus.core.before = (function enfocus$core$before(var_args){
var args__8568__auto__ = [];
var len__8561__auto___17819 = arguments.length;
var i__8562__auto___17820 = (0);
while(true){
if((i__8562__auto___17820 < len__8561__auto___17819)){
args__8568__auto__.push((arguments[i__8562__auto___17820]));

var G__17821 = (i__8562__auto___17820 + (1));
i__8562__auto___17820 = G__17821;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return enfocus.core.before.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});

enfocus.core.before.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__17816_SHARP_,p2__17817_SHARP_){
return domina.insert_before_BANG_.call(null,p1__17816_SHARP_,p2__17817_SHARP_);
}));
});

enfocus.core.before.cljs$lang$maxFixedArity = (0);

enfocus.core.before.cljs$lang$applyTo = (function (seq17818){
return enfocus.core.before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17818));
});

/**
 * inserts the content after the selected node. Values can be nodes or collection of nodes
 */
enfocus.core.after = (function enfocus$core$after(var_args){
var args__8568__auto__ = [];
var len__8561__auto___17825 = arguments.length;
var i__8562__auto___17826 = (0);
while(true){
if((i__8562__auto___17826 < len__8561__auto___17825)){
args__8568__auto__.push((arguments[i__8562__auto___17826]));

var G__17827 = (i__8562__auto___17826 + (1));
i__8562__auto___17826 = G__17827;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return enfocus.core.after.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});

enfocus.core.after.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__17822_SHARP_,p2__17823_SHARP_){
return domina.insert_after_BANG_.call(null,p1__17822_SHARP_,p2__17823_SHARP_);
}));
});

enfocus.core.after.cljs$lang$maxFixedArity = (0);

enfocus.core.after.cljs$lang$applyTo = (function (seq17824){
return enfocus.core.after.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17824));
});

/**
 * substitutes the content for the selected node. Values can be nodes or collection of nodes
 */
enfocus.core.substitute = (function enfocus$core$substitute(var_args){
var args__8568__auto__ = [];
var len__8561__auto___17831 = arguments.length;
var i__8562__auto___17832 = (0);
while(true){
if((i__8562__auto___17832 < len__8561__auto___17831)){
args__8568__auto__.push((arguments[i__8562__auto___17832]));

var G__17833 = (i__8562__auto___17832 + (1));
i__8562__auto___17832 = G__17833;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return enfocus.core.substitute.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});

enfocus.core.substitute.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return enfocus.core.multi_node_chain.call(null,values,(function (p1__17828_SHARP_,p2__17829_SHARP_){
return domina.swap_content_BANG_.call(null,p1__17828_SHARP_,p2__17829_SHARP_);
}));
});

enfocus.core.substitute.cljs$lang$maxFixedArity = (0);

enfocus.core.substitute.cljs$lang$applyTo = (function (seq17830){
return enfocus.core.substitute.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17830));
});

/**
 * removes the selected nodes from the dom
 */
enfocus.core.remove_node = (function enfocus$core$remove_node(){
return enfocus.core.multi_node_chain.call(null,(function (p1__17834_SHARP_){
return domina.detach_BANG_.call(null,p1__17834_SHARP_);
}));
});
/**
 * wrap and element in a new element defined as :div {:class 'temp'}
 */
enfocus.core.wrap = (function enfocus$core$wrap(elm,mattr){
return (function (pnod){
var elem = goog.dom.createElement(cljs.core.name.call(null,elm));
enfocus.core.add_map_attrs.call(null,elem,mattr);

enfocus.core.at.call(null,elem,enfocus.core.content.call(null,pnod.cloneNode(true)));

return enfocus.core.at.call(null,pnod,enfocus.core.do__GT_.call(null,enfocus.core.after.call(null,elem),enfocus.core.remove_node.call(null)));
});
});
/**
 * replaces a node with all its children
 */
enfocus.core.unwrap = (function enfocus$core$unwrap(){
return (function (pnod){
var frag = document.createDocumentFragment();
goog.dom.append(frag,pnod.childNodes);

return goog.dom.replaceNode(frag,pnod);
});
});
/**
 * set a list of style elements from the selected nodes
 */
enfocus.core.set_style = (function enfocus$core$set_style(var_args){
var args__8568__auto__ = [];
var len__8561__auto___17847 = arguments.length;
var i__8562__auto___17848 = (0);
while(true){
if((i__8562__auto___17848 < len__8561__auto___17847)){
args__8568__auto__.push((arguments[i__8562__auto___17848]));

var G__17849 = (i__8562__auto___17848 + (1));
i__8562__auto___17848 = G__17849;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return enfocus.core.set_style.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});

enfocus.core.set_style.cljs$core$IFn$_invoke$arity$variadic = (function (values){
var pairs = cljs.core.partition.call(null,(2),values);
return enfocus.core.multi_node_chain.call(null,((function (pairs){
return (function (p1__17835_SHARP_){
var seq__17837 = cljs.core.seq.call(null,pairs);
var chunk__17838 = null;
var count__17839 = (0);
var i__17840 = (0);
while(true){
if((i__17840 < count__17839)){
var vec__17841 = cljs.core._nth.call(null,chunk__17838,i__17840);
var name = cljs.core.nth.call(null,vec__17841,(0),null);
var value = cljs.core.nth.call(null,vec__17841,(1),null);
domina.set_style_BANG_.call(null,p1__17835_SHARP_,name,value);

var G__17850 = seq__17837;
var G__17851 = chunk__17838;
var G__17852 = count__17839;
var G__17853 = (i__17840 + (1));
seq__17837 = G__17850;
chunk__17838 = G__17851;
count__17839 = G__17852;
i__17840 = G__17853;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__17837);
if(temp__4657__auto__){
var seq__17837__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17837__$1)){
var c__8267__auto__ = cljs.core.chunk_first.call(null,seq__17837__$1);
var G__17854 = cljs.core.chunk_rest.call(null,seq__17837__$1);
var G__17855 = c__8267__auto__;
var G__17856 = cljs.core.count.call(null,c__8267__auto__);
var G__17857 = (0);
seq__17837 = G__17854;
chunk__17838 = G__17855;
count__17839 = G__17856;
i__17840 = G__17857;
continue;
} else {
var vec__17844 = cljs.core.first.call(null,seq__17837__$1);
var name = cljs.core.nth.call(null,vec__17844,(0),null);
var value = cljs.core.nth.call(null,vec__17844,(1),null);
domina.set_style_BANG_.call(null,p1__17835_SHARP_,name,value);

var G__17858 = cljs.core.next.call(null,seq__17837__$1);
var G__17859 = null;
var G__17860 = (0);
var G__17861 = (0);
seq__17837 = G__17858;
chunk__17838 = G__17859;
count__17839 = G__17860;
i__17840 = G__17861;
continue;
}
} else {
return null;
}
}
break;
}
});})(pairs))
);
});

enfocus.core.set_style.cljs$lang$maxFixedArity = (0);

enfocus.core.set_style.cljs$lang$applyTo = (function (seq17836){
return enfocus.core.set_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17836));
});

/**
 * remove a list style elements from the selected nodes. note: you can only remove styles that are inline
 */
enfocus.core.remove_style = (function enfocus$core$remove_style(var_args){
var args__8568__auto__ = [];
var len__8561__auto___17863 = arguments.length;
var i__8562__auto___17864 = (0);
while(true){
if((i__8562__auto___17864 < len__8561__auto___17863)){
args__8568__auto__.push((arguments[i__8562__auto___17864]));

var G__17865 = (i__8562__auto___17864 + (1));
i__8562__auto___17864 = G__17865;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return enfocus.core.remove_style.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});

enfocus.core.remove_style.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return (function (pnod){
return enfocus.core.style_remove.call(null,pnod,values);
});
});

enfocus.core.remove_style.cljs$lang$maxFixedArity = (0);

enfocus.core.remove_style.cljs$lang$applyTo = (function (seq17862){
return enfocus.core.remove_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17862));
});

/**
 * calls the focus function on the selected node
 */
enfocus.core.focus = (function enfocus$core$focus(){
return (function (node){
return node.focus();
});
});
/**
 * calls the blur function on the selected node
 */
enfocus.core.blur = (function enfocus$core$blur(){
return (function (node){
return node.blur();
});
});
/**
 * addes key value pair of data to the selected nodes. Only use clojure data structures when setting
 */
enfocus.core.set_data = (function enfocus$core$set_data(ky,val){
return enfocus.core.multi_node_chain.call(null,(function (p1__17866_SHARP_){
return domina.set_data_BANG_.call(null,p1__17866_SHARP_,ky,val);
}));
});
/**
 * delays and action by a set timeout, note this is an async operations
 */
enfocus.core.delay = (function enfocus$core$delay(var_args){
var args__8568__auto__ = [];
var len__8561__auto___17869 = arguments.length;
var i__8562__auto___17870 = (0);
while(true){
if((i__8562__auto___17870 < len__8561__auto___17869)){
args__8568__auto__.push((arguments[i__8562__auto___17870]));

var G__17871 = (i__8562__auto___17870 + (1));
i__8562__auto___17870 = G__17871;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((1) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((1)),(0),null)):null);
return enfocus.core.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8569__auto__);
});

enfocus.core.delay.cljs$core$IFn$_invoke$arity$variadic = (function (ttime,funcs){
return (function (pnod){
return enfocus.core.setTimeout.call(null,(function (){
return cljs.core.apply.call(null,enfocus.core.at,pnod,funcs);
}),ttime);
});
});

enfocus.core.delay.cljs$lang$maxFixedArity = (1);

enfocus.core.delay.cljs$lang$applyTo = (function (seq17867){
var G__17868 = cljs.core.first.call(null,seq17867);
var seq17867__$1 = cljs.core.next.call(null,seq17867);
return enfocus.core.delay.cljs$core$IFn$_invoke$arity$variadic(G__17868,seq17867__$1);
});

/**
 * replaces entries like the following ${var1} in attributes and text
 */
enfocus.core.replace_vars = (function enfocus$core$replace_vars(vars){
var rep_str = (function enfocus$core$replace_vars_$_rep_str(text){
return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__17873_SHARP_,p2__17872_SHARP_){
return vars.call(null,cljs.core.keyword.call(null,p2__17872_SHARP_));
}));
});
return (function enfocus$core$replace_vars_$_rep_node(pnod){
if(cljs.core.truth_(pnod.attributes)){
var seq__17898_17906 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));
var chunk__17899_17907 = null;
var count__17900_17908 = (0);
var i__17901_17909 = (0);
while(true){
if((i__17901_17909 < count__17900_17908)){
var idx_17910 = cljs.core._nth.call(null,chunk__17899_17907,i__17901_17909);
var attr_17911 = pnod.attributes.item(idx_17910);
if(cljs.core.truth_(attr_17911.specified)){
attr_17911.value = rep_str.call(null,attr_17911.value);
} else {
}

var G__17912 = seq__17898_17906;
var G__17913 = chunk__17899_17907;
var G__17914 = count__17900_17908;
var G__17915 = (i__17901_17909 + (1));
seq__17898_17906 = G__17912;
chunk__17899_17907 = G__17913;
count__17900_17908 = G__17914;
i__17901_17909 = G__17915;
continue;
} else {
var temp__4657__auto___17916 = cljs.core.seq.call(null,seq__17898_17906);
if(temp__4657__auto___17916){
var seq__17898_17917__$1 = temp__4657__auto___17916;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17898_17917__$1)){
var c__8267__auto___17918 = cljs.core.chunk_first.call(null,seq__17898_17917__$1);
var G__17919 = cljs.core.chunk_rest.call(null,seq__17898_17917__$1);
var G__17920 = c__8267__auto___17918;
var G__17921 = cljs.core.count.call(null,c__8267__auto___17918);
var G__17922 = (0);
seq__17898_17906 = G__17919;
chunk__17899_17907 = G__17920;
count__17900_17908 = G__17921;
i__17901_17909 = G__17922;
continue;
} else {
var idx_17923 = cljs.core.first.call(null,seq__17898_17917__$1);
var attr_17924 = pnod.attributes.item(idx_17923);
if(cljs.core.truth_(attr_17924.specified)){
attr_17924.value = rep_str.call(null,attr_17924.value);
} else {
}

var G__17925 = cljs.core.next.call(null,seq__17898_17917__$1);
var G__17926 = null;
var G__17927 = (0);
var G__17928 = (0);
seq__17898_17906 = G__17925;
chunk__17899_17907 = G__17926;
count__17900_17908 = G__17927;
i__17901_17909 = G__17928;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core._EQ_.call(null,pnod.nodeType,(3))){
return pnod.nodeValue = rep_str.call(null,pnod.nodeValue);
} else {
var seq__17902 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));
var chunk__17903 = null;
var count__17904 = (0);
var i__17905 = (0);
while(true){
if((i__17905 < count__17904)){
var cnode = cljs.core._nth.call(null,chunk__17903,i__17905);
enfocus$core$replace_vars_$_rep_node.call(null,cnode);

var G__17929 = seq__17902;
var G__17930 = chunk__17903;
var G__17931 = count__17904;
var G__17932 = (i__17905 + (1));
seq__17902 = G__17929;
chunk__17903 = G__17930;
count__17904 = G__17931;
i__17905 = G__17932;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__17902);
if(temp__4657__auto__){
var seq__17902__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17902__$1)){
var c__8267__auto__ = cljs.core.chunk_first.call(null,seq__17902__$1);
var G__17933 = cljs.core.chunk_rest.call(null,seq__17902__$1);
var G__17934 = c__8267__auto__;
var G__17935 = cljs.core.count.call(null,c__8267__auto__);
var G__17936 = (0);
seq__17902 = G__17933;
chunk__17903 = G__17934;
count__17904 = G__17935;
i__17905 = G__17936;
continue;
} else {
var cnode = cljs.core.first.call(null,seq__17902__$1);
enfocus$core$replace_vars_$_rep_node.call(null,cnode);

var G__17937 = cljs.core.next.call(null,seq__17902__$1);
var G__17938 = null;
var G__17939 = (0);
var G__17940 = (0);
seq__17902 = G__17937;
chunk__17903 = G__17938;
count__17904 = G__17939;
i__17905 = G__17940;
continue;
}
} else {
return null;
}
}
break;
}
}
});
});
enfocus.core.exists_in_QMARK_ = (function enfocus$core$exists_in_QMARK_(col_or_val,val){
if(cljs.core.coll_QMARK_.call(null,col_or_val)){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([val], true),col_or_val);
} else {
return cljs.core._EQ_.call(null,col_or_val,val);
}
});
/**
 * sets the value of a form input (text,select,checkbox,etc...)
 *   format (at node (set-form-input value))
 */
enfocus.core.set_form_input = (function enfocus$core$set_form_input(val){
return (function (el){
if((cljs.core._EQ_.call(null,el.type,"checkbox")) || (cljs.core._EQ_.call(null,el.type,"radio"))){
return el.checked = enfocus.core.exists_in_QMARK_.call(null,val,el.value);
} else {
var nval = (((cljs.core.coll_QMARK_.call(null,val)) && (!(typeof val === 'string')))?cljs.core.vec.call(null,val):((cljs.core._EQ_.call(null,el.type,"select-multiple"))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [val], null):val));
return goog.dom.forms.setValue(el,cljs.core.clj__GT_js.call(null,nval));
}
});
});
/**
 * sets the values of a form based on a map
 *   (set-form {:val1 'val' :val2 'val'})
 */
enfocus.core.set_form = (function enfocus$core$set_form(value_map){
return (function (form_node){
if(cljs.core._EQ_.call(null,form_node.nodeName,"FORM")){
var seq__17945 = cljs.core.seq.call(null,cljs.core.range.call(null,form_node.length));
var chunk__17946 = null;
var count__17947 = (0);
var i__17948 = (0);
while(true){
if((i__17948 < count__17947)){
var idx = cljs.core._nth.call(null,chunk__17946,i__17948);
var el_17949 = (form_node.elements[idx]);
var ky_17950 = cljs.core.keyword.call(null,el_17949.name);
var val_17951 = ky_17950.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_17950)){
var val_17952__$1 = (cljs.core.truth_(val_17951)?val_17951:"");
enfocus.core.set_form_input.call(null,val_17952__$1).call(null,el_17949);
} else {
}

var G__17953 = seq__17945;
var G__17954 = chunk__17946;
var G__17955 = count__17947;
var G__17956 = (i__17948 + (1));
seq__17945 = G__17953;
chunk__17946 = G__17954;
count__17947 = G__17955;
i__17948 = G__17956;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__17945);
if(temp__4657__auto__){
var seq__17945__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17945__$1)){
var c__8267__auto__ = cljs.core.chunk_first.call(null,seq__17945__$1);
var G__17957 = cljs.core.chunk_rest.call(null,seq__17945__$1);
var G__17958 = c__8267__auto__;
var G__17959 = cljs.core.count.call(null,c__8267__auto__);
var G__17960 = (0);
seq__17945 = G__17957;
chunk__17946 = G__17958;
count__17947 = G__17959;
i__17948 = G__17960;
continue;
} else {
var idx = cljs.core.first.call(null,seq__17945__$1);
var el_17961 = (form_node.elements[idx]);
var ky_17962 = cljs.core.keyword.call(null,el_17961.name);
var val_17963 = ky_17962.call(null,value_map);
if(cljs.core.contains_QMARK_.call(null,value_map,ky_17962)){
var val_17964__$1 = (cljs.core.truth_(val_17963)?val_17963:"");
enfocus.core.set_form_input.call(null,val_17964__$1).call(null,el_17961);
} else {
}

var G__17965 = cljs.core.next.call(null,seq__17945__$1);
var G__17966 = null;
var G__17967 = (0);
var G__17968 = (0);
seq__17945 = G__17965;
chunk__17946 = G__17966;
count__17947 = G__17967;
i__17948 = G__17968;
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
});
});
/**
 * takes clojure data structure and emits a document element
 */
enfocus.core.html = (function enfocus$core$html(node_spec){
if(typeof node_spec === 'string'){
return document.createTextNode(node_spec);
} else {
if(cljs.core.vector_QMARK_.call(null,node_spec)){
var vec__17988 = node_spec;
var seq__17989 = cljs.core.seq.call(null,vec__17988);
var first__17990 = cljs.core.first.call(null,seq__17989);
var seq__17989__$1 = cljs.core.next.call(null,seq__17989);
var tag = first__17990;
var vec__17991 = seq__17989__$1;
var seq__17992 = cljs.core.seq.call(null,vec__17991);
var first__17993 = cljs.core.first.call(null,seq__17992);
var seq__17992__$1 = cljs.core.next.call(null,seq__17992);
var m = first__17993;
var ms = seq__17992__$1;
var more = vec__17991;
var vec__17994 = cljs.core.name.call(null,tag).split(/(?=[#.])/);
var seq__17995 = cljs.core.seq.call(null,vec__17994);
var first__17996 = cljs.core.first.call(null,seq__17995);
var seq__17995__$1 = cljs.core.next.call(null,seq__17995);
var tag_name = first__17996;
var segments = seq__17995__$1;
var id = cljs.core.some.call(null,((function (vec__17988,seq__17989,first__17990,seq__17989__$1,tag,vec__17991,seq__17992,first__17993,seq__17992__$1,m,ms,more,vec__17994,seq__17995,first__17996,seq__17995__$1,tag_name,segments){
return (function (seg){
if(cljs.core._EQ_.call(null,"#",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__17988,seq__17989,first__17990,seq__17989__$1,tag,vec__17991,seq__17992,first__17993,seq__17992__$1,m,ms,more,vec__17994,seq__17995,first__17996,seq__17995__$1,tag_name,segments))
,segments);
var classes = cljs.core.keep.call(null,((function (vec__17988,seq__17989,first__17990,seq__17989__$1,tag,vec__17991,seq__17992,first__17993,seq__17992__$1,m,ms,more,vec__17994,seq__17995,first__17996,seq__17995__$1,tag_name,segments,id){
return (function (seg){
if(cljs.core._EQ_.call(null,".",seg.charAt((0)))){
return cljs.core.subs.call(null,seg,(1));
} else {
return null;
}
});})(vec__17988,seq__17989,first__17990,seq__17989__$1,tag,vec__17991,seq__17992,first__17993,seq__17992__$1,m,ms,more,vec__17994,seq__17995,first__17996,seq__17995__$1,tag_name,segments,id))
,segments);
var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);
var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",-1388402092),id):attrs);
var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);
var content = cljs.core.flatten.call(null,cljs.core.map.call(null,enfocus.core.html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));
var node = document.createElement(tag_name);
var seq__17997_18007 = cljs.core.seq.call(null,attrs__$2);
var chunk__17998_18008 = null;
var count__17999_18009 = (0);
var i__18000_18010 = (0);
while(true){
if((i__18000_18010 < count__17999_18009)){
var vec__18001_18011 = cljs.core._nth.call(null,chunk__17998_18008,i__18000_18010);
var key_18012 = cljs.core.nth.call(null,vec__18001_18011,(0),null);
var val_18013 = cljs.core.nth.call(null,vec__18001_18011,(1),null);
node.setAttribute(cljs.core.name.call(null,key_18012),val_18013);

var G__18014 = seq__17997_18007;
var G__18015 = chunk__17998_18008;
var G__18016 = count__17999_18009;
var G__18017 = (i__18000_18010 + (1));
seq__17997_18007 = G__18014;
chunk__17998_18008 = G__18015;
count__17999_18009 = G__18016;
i__18000_18010 = G__18017;
continue;
} else {
var temp__4657__auto___18018 = cljs.core.seq.call(null,seq__17997_18007);
if(temp__4657__auto___18018){
var seq__17997_18019__$1 = temp__4657__auto___18018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17997_18019__$1)){
var c__8267__auto___18020 = cljs.core.chunk_first.call(null,seq__17997_18019__$1);
var G__18021 = cljs.core.chunk_rest.call(null,seq__17997_18019__$1);
var G__18022 = c__8267__auto___18020;
var G__18023 = cljs.core.count.call(null,c__8267__auto___18020);
var G__18024 = (0);
seq__17997_18007 = G__18021;
chunk__17998_18008 = G__18022;
count__17999_18009 = G__18023;
i__18000_18010 = G__18024;
continue;
} else {
var vec__18004_18025 = cljs.core.first.call(null,seq__17997_18019__$1);
var key_18026 = cljs.core.nth.call(null,vec__18004_18025,(0),null);
var val_18027 = cljs.core.nth.call(null,vec__18004_18025,(1),null);
node.setAttribute(cljs.core.name.call(null,key_18026),val_18027);

var G__18028 = cljs.core.next.call(null,seq__17997_18019__$1);
var G__18029 = null;
var G__18030 = (0);
var G__18031 = (0);
seq__17997_18007 = G__18028;
chunk__17998_18008 = G__18029;
count__17999_18009 = G__18030;
i__18000_18010 = G__18031;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(content)){
return domina.append_BANG_.call(null,node,content);
} else {
return null;
}
} else {
if(cljs.core.sequential_QMARK_.call(null,node_spec)){
return cljs.core.flatten.call(null,cljs.core.map.call(null,enfocus.core.html,node_spec));
} else {
return document.createTextNode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_spec)].join(''));

}
}
}
});
/**
 * returns the attribute on the selected element or elements.
 * in cases where more than one element is selected you will
 * receive a list of values
 */
enfocus.core.get_attr = (function enfocus$core$get_attr(attr){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return pnod.getAttribute(cljs.core.name.call(null,attr));
}));
});
/**
 * returns the text value of the selected element or elements.
 * in cases where more than one element is selected you will
 * receive a list of values
 */
enfocus.core.get_text = (function enfocus$core$get_text(){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return goog.dom.getTextContent(pnod);
}));
});
/**
 * returns the data on a selected node for a given key. If bubble is set will look at parent
 */
enfocus.core.get_data = (function enfocus$core$get_data(var_args){
var args18032 = [];
var len__8561__auto___18035 = arguments.length;
var i__8562__auto___18036 = (0);
while(true){
if((i__8562__auto___18036 < len__8561__auto___18035)){
args18032.push((arguments[i__8562__auto___18036]));

var G__18037 = (i__8562__auto___18036 + (1));
i__8562__auto___18036 = G__18037;
continue;
} else {
}
break;
}

var G__18034 = args18032.length;
switch (G__18034) {
case 1:
return enfocus.core.get_data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.core.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18032.length)].join('')));

}
});

enfocus.core.get_data.cljs$core$IFn$_invoke$arity$1 = (function (ky){
return enfocus.core.get_data.call(null,ky,false);
});

enfocus.core.get_data.cljs$core$IFn$_invoke$arity$2 = (function (ky,bubble){
return enfocus.core.extr_multi_node.call(null,(function (node){
return domina.get_data.call(null,node,ky,bubble);
}));
});

enfocus.core.get_data.cljs$lang$maxFixedArity = 2;

/**
 * returns the property on the selected element or elements.
 * in cases where more than one element is selected you will
 * receive a list of values
 */
enfocus.core.get_prop = (function enfocus$core$get_prop(prop){
return enfocus.core.extr_multi_node.call(null,(function (pnod){
return (pnod[cljs.core.name.call(null,prop)]);
}));
});
/**
 * this function takes a map, key and value.  It will check if
 * the value exists and create a seq of values if one exits.
 */
enfocus.core.merge_form_val = (function enfocus$core$merge_form_val(form_map,ky,val){
var mval = form_map.call(null,ky);
if(cljs.core.truth_(val)){
if((cljs.core.coll_QMARK_.call(null,mval)) && (cljs.core.coll_QMARK_.call(null,val))){
return cljs.core.assoc.call(null,form_map,ky,cljs.core.into.call(null,mval,val));
} else {
if(cljs.core.coll_QMARK_.call(null,mval)){
return cljs.core.assoc.call(null,form_map,ky,cljs.core.conj.call(null,mval,val));
} else {
if(cljs.core.truth_(mval)){
return cljs.core.assoc.call(null,form_map,ky,cljs.core.PersistentHashSet.createAsIfByAssoc([mval,val], true));
} else {
return cljs.core.assoc.call(null,form_map,ky,val);

}
}
}
} else {
return form_map;
}
});
/**
 * returns the value of a given form input (text,select,checkbox,etc...)    If more than  one value exists it will return a set of values.
 */
enfocus.core.read_form_input = (function enfocus$core$read_form_input(){
var trans = (function (nodes,chain){
var nod_col = enfocus.core.nodes__GT_coll.call(null,nodes);
var result = cljs.core.reduce.call(null,((function (nod_col){
return (function (p1__18040_SHARP_,p2__18039_SHARP_){
var vals = cljs.core.js__GT_clj.call(null,goog.dom.forms.getValue(p2__18039_SHARP_));
if((!(typeof vals === 'string')) && (cljs.core.coll_QMARK_.call(null,vals))){
return cljs.core.into.call(null,p1__18040_SHARP_,vals);
} else {
if(cljs.core.truth_(vals)){
return cljs.core.conj.call(null,p1__18040_SHARP_,vals);
} else {
return p1__18040_SHARP_;
}
}
});})(nod_col))
,cljs.core.PersistentHashSet.EMPTY,nod_col);
if(cljs.core.empty_QMARK_.call(null,result)){
return null;
} else {
if((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,result))) && (cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["checkbox",null,"select-multiple",null], null), null).call(null,cljs.core.first.call(null,nod_col).type)))){
return cljs.core.first.call(null,result);
} else {
return result;

}
}
});
if(typeof enfocus.core.t_enfocus$core18045 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {enfocus.core.ITransform}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
enfocus.core.t_enfocus$core18045 = (function (trans,meta18046){
this.trans = trans;
this.meta18046 = meta18046;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
enfocus.core.t_enfocus$core18045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (trans){
return (function (_18047,meta18046__$1){
var self__ = this;
var _18047__$1 = this;
return (new enfocus.core.t_enfocus$core18045(self__.trans,meta18046__$1));
});})(trans))
;

enfocus.core.t_enfocus$core18045.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (trans){
return (function (_18047){
var self__ = this;
var _18047__$1 = this;
return self__.meta18046;
});})(trans))
;

enfocus.core.t_enfocus$core18045.prototype.enfocus$core$ITransform$ = cljs.core.PROTOCOL_SENTINEL;

enfocus.core.t_enfocus$core18045.prototype.enfocus$core$ITransform$apply_transform$arity$2 = ((function (trans){
return (function (_,nodes){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core18045.prototype.enfocus$core$ITransform$apply_transform$arity$3 = ((function (trans){
return (function (_,nodes,chain){
var self__ = this;
var ___$1 = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core18045.prototype.call = ((function (trans){
return (function() {
var G__18049 = null;
var G__18049__2 = (function (self__,nodes){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,null);
});
var G__18049__3 = (function (self__,nodes,chain){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return self__.trans.call(null,nodes,chain);
});
G__18049 = function(self__,nodes,chain){
switch(arguments.length){
case 2:
return G__18049__2.call(this,self__,nodes);
case 3:
return G__18049__3.call(this,self__,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18049.cljs$core$IFn$_invoke$arity$2 = G__18049__2;
G__18049.cljs$core$IFn$_invoke$arity$3 = G__18049__3;
return G__18049;
})()
;})(trans))
;

enfocus.core.t_enfocus$core18045.prototype.apply = ((function (trans){
return (function (self__,args18048){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args18048)));
});})(trans))
;

enfocus.core.t_enfocus$core18045.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (trans){
return (function (nodes){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,null);
});})(trans))
;

enfocus.core.t_enfocus$core18045.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (trans){
return (function (nodes,chain){
var self__ = this;
var _ = this;
return self__.trans.call(null,nodes,chain);
});})(trans))
;

enfocus.core.t_enfocus$core18045.getBasis = ((function (trans){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"trans","trans",322027676,null),new cljs.core.Symbol(null,"meta18046","meta18046",212532403,null)], null);
});})(trans))
;

enfocus.core.t_enfocus$core18045.cljs$lang$type = true;

enfocus.core.t_enfocus$core18045.cljs$lang$ctorStr = "enfocus.core/t_enfocus$core18045";

enfocus.core.t_enfocus$core18045.cljs$lang$ctorPrWriter = ((function (trans){
return (function (this__8059__auto__,writer__8060__auto__,opt__8061__auto__){
return cljs.core._write.call(null,writer__8060__auto__,"enfocus.core/t_enfocus$core18045");
});})(trans))
;

enfocus.core.__GT_t_enfocus$core18045 = ((function (trans){
return (function enfocus$core$read_form_input_$___GT_t_enfocus$core18045(trans__$1,meta18046){
return (new enfocus.core.t_enfocus$core18045(trans__$1,meta18046));
});})(trans))
;

}

return (new enfocus.core.t_enfocus$core18045(trans,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns a map of the form values tied to name of input fields.
 * {:name1 'value1' name2 #{'select1' 'select2'}}
 */
enfocus.core.read_form = (function enfocus$core$read_form(){
return enfocus.core.extr_multi_node.call(null,(function (node){
var inputs = node.elements;
return cljs.core.reduce.call(null,((function (inputs){
return (function (p1__18051_SHARP_,p2__18050_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,inputs.item(p2__18050_SHARP_).name))){
return enfocus.core.merge_form_val.call(null,p1__18051_SHARP_,cljs.core.keyword.call(null,inputs.item(p2__18050_SHARP_).name),enfocus.core.read_form_input.call(null).call(null,inputs.item(p2__18050_SHARP_)));
} else {
return p1__18051_SHARP_;
}
});})(inputs))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.call(null,inputs.length));
}));
});
enfocus.core.reg_filt = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * filter allows you to apply function to futhur scope down what is returned by a selector
 */
enfocus.core.filter = (function enfocus$core$filter(tst,trans){
return enfocus.core.multi_node_chain.call(null,(function() {
var enfocus$core$filter_$_filt = null;
var enfocus$core$filter_$_filt__1 = (function (pnodes){
return enfocus$core$filter_$_filt.call(null,pnodes,null);
});
var enfocus$core$filter_$_filt__2 = (function (pnodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);
var ttest = (((tst instanceof cljs.core.Keyword))?cljs.core.deref.call(null,enfocus.core.reg_filt).call(null,tst):tst);
var res = cljs.core.filter.call(null,ttest,pnod_col);
if((chain == null)){
return enfocus.core.apply_transform.call(null,trans,res);
} else {
return enfocus.core.apply_transform.call(null,trans,res,chain);
}
});
enfocus$core$filter_$_filt = function(pnodes,chain){
switch(arguments.length){
case 1:
return enfocus$core$filter_$_filt__1.call(this,pnodes);
case 2:
return enfocus$core$filter_$_filt__2.call(this,pnodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
enfocus$core$filter_$_filt.cljs$core$IFn$_invoke$arity$1 = enfocus$core$filter_$_filt__1;
enfocus$core$filter_$_filt.cljs$core$IFn$_invoke$arity$2 = enfocus$core$filter_$_filt__2;
return enfocus$core$filter_$_filt;
})()
);
});
/**
 * registers a filter for a given keyword
 */
enfocus.core.register_filter = (function enfocus$core$register_filter(ky,func){
return cljs.core.swap_BANG_.call(null,enfocus.core.reg_filt,cljs.core.assoc,ky,func);
});
/**
 * takes a list of options and returns the selected ones. 
 */
enfocus.core.selected_options = (function enfocus$core$selected_options(pnod){
return pnod.selected;
});
/**
 * takes a list of radio or checkboxes and returns the checked ones
 */
enfocus.core.checked_radio_checkbox = (function enfocus$core$checked_radio_checkbox(pnod){
return pnod.checked;
});
enfocus.core.register_filter.call(null,new cljs.core.Keyword(null,"selected","selected",574897764),enfocus.core.selected_options);
enfocus.core.register_filter.call(null,new cljs.core.Keyword(null,"checked","checked",-50955819),enfocus.core.checked_radio_checkbox);
enfocus.core.match_QMARK_ = (function enfocus$core$match_QMARK_(selector){
return (function (node){
if(cljs.core.truth_((node["matches"]))){
return node.matches(selector);
} else {
if(cljs.core.truth_((node["matchesSelector"]))){
return node.matchesSelector(selector);
} else {
if(cljs.core.truth_((node["msMatchesSelector"]))){
return node.msMatchesSelector(selector);
} else {
if(cljs.core.truth_((node["mozMatchesSelector"]))){
return node.mozMatchesSelector(selector);
} else {
if(cljs.core.truth_((node["webkitMatchesSelector"]))){
return node.webkitMatchesSelector(selector);
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([node], true),enfocus.core.nodes__GT_coll.call(null,enfocus.core.select.call(null,node)));

}
}
}
}
}
});
});
/**
 * converts keywords, symbols and strings used in the enlive selector
 * syntax to a string representing a standard css selector.  It also
 * applys id masking if mask provided
 */
enfocus.core.create_sel_str = (function enfocus$core$create_sel_str(var_args){
var args18053 = [];
var len__8561__auto___18056 = arguments.length;
var i__8562__auto___18057 = (0);
while(true){
if((i__8562__auto___18057 < len__8561__auto___18056)){
args18053.push((arguments[i__8562__auto___18057]));

var G__18058 = (i__8562__auto___18057 + (1));
i__8562__auto___18057 = G__18058;
continue;
} else {
}
break;
}

var G__18055 = args18053.length;
switch (G__18055) {
case 1:
return enfocus.core.create_sel_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.core.create_sel_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18053.length)].join('')));

}
});

enfocus.core.create_sel_str.cljs$core$IFn$_invoke$arity$1 = (function (css_sel){
return enfocus.core.create_sel_str.call(null,"",css_sel);
});

enfocus.core.create_sel_str.cljs$core$IFn$_invoke$arity$2 = (function (id_mask_sym,css_sel){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__18052_SHARP_){
if((p1__18052_SHARP_ instanceof cljs.core.Symbol)){
return enfocus.core.css_syms.call(null,p1__18052_SHARP_);
} else {
if((p1__18052_SHARP_ instanceof cljs.core.Keyword)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,p1__18052_SHARP_).replace("#",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_mask_sym)].join('')))].join('');
} else {
if(cljs.core.vector_QMARK_.call(null,p1__18052_SHARP_)){
return enfocus.core.create_sel_str.call(null,p1__18052_SHARP_);
} else {
if(typeof p1__18052_SHARP_ === 'string'){
return p1__18052_SHARP_.replace("#",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_mask_sym)].join(''));
} else {
return null;
}
}
}
}
}),css_sel));
});

enfocus.core.create_sel_str.cljs$lang$maxFixedArity = 2;

/**
 * takes either an enlive selector or a css3 selector and returns a set of nodes that match the selector
 */
enfocus.core.css_select = (function enfocus$core$css_select(var_args){
var args18060 = [];
var len__8561__auto___18063 = arguments.length;
var i__8562__auto___18064 = (0);
while(true){
if((i__8562__auto___18064 < len__8561__auto___18063)){
args18060.push((arguments[i__8562__auto___18064]));

var G__18065 = (i__8562__auto___18064 + (1));
i__8562__auto___18064 = G__18065;
continue;
} else {
}
break;
}

var G__18062 = args18060.length;
switch (G__18062) {
case 1:
return enfocus.core.css_select.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.core.css_select.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return enfocus.core.css_select.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18060.length)].join('')));

}
});

enfocus.core.css_select.cljs$core$IFn$_invoke$arity$1 = (function (css_sel){
return enfocus.core.css_select.call(null,"",document,css_sel);
});

enfocus.core.css_select.cljs$core$IFn$_invoke$arity$2 = (function (dom_node,css_sel){
return enfocus.core.css_select.call(null,"",dom_node,css_sel);
});

enfocus.core.css_select.cljs$core$IFn$_invoke$arity$3 = (function (id_mask_sym,dom_node,css_sel){
var sel = clojure.string.trim.call(null,enfocus.enlive.syntax.convert.call(null,enfocus.core.create_sel_str.call(null,id_mask_sym,css_sel)));
var ret = domina.css.sel.call(null,dom_node,sel);
return ret;
});

enfocus.core.css_select.cljs$lang$maxFixedArity = 3;

enfocus.core.nil_t = (function enfocus$core$nil_t(func){
var or__7448__auto__ = func;
if(cljs.core.truth_(or__7448__auto__)){
return or__7448__auto__;
} else {
return enfocus.core.remove_node;
}
});
enfocus.core.i_at = (function enfocus$core$i_at(var_args){
var args__8568__auto__ = [];
var len__8561__auto___18085 = arguments.length;
var i__8562__auto___18086 = (0);
while(true){
if((i__8562__auto___18086 < len__8561__auto___18085)){
args__8568__auto__.push((arguments[i__8562__auto___18086]));

var G__18087 = (i__8562__auto___18086 + (1));
i__8562__auto___18086 = G__18087;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((2) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((2)),(0),null)):null);
return enfocus.core.i_at.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8569__auto__);
});

enfocus.core.i_at.cljs$core$IFn$_invoke$arity$variadic = (function (id_mask,node,trans){
var cnt = cljs.core.count.call(null,trans);
var sel_QMARK_ = (function (){var and__7436__auto__ = !((node == null));
if(and__7436__auto__){
if(!((node == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === node.enfocus$core$ISelector$))){
return true;
} else {
if((!node.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,node);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,node);
}
} else {
return and__7436__auto__;
}
})();
if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__18072 = ((sel_QMARK_)?(function (){var x__8290__auto__ = document;
return cljs.core._conj.call(null,(function (){var x__8290__auto____$1 = cljs.core.conj.call(null,trans,node);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8290__auto____$1);
})(),x__8290__auto__);
})():(function (){var x__8290__auto__ = node;
return cljs.core._conj.call(null,(function (){var x__8290__auto____$1 = trans;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8290__auto____$1);
})(),x__8290__auto__);
})());
var node__$1 = cljs.core.nth.call(null,vec__18072,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__18072,(1),null);
var seq__18075 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),trans__$1));
var chunk__18076 = null;
var count__18077 = (0);
var i__18078 = (0);
while(true){
if((i__18078 < count__18077)){
var vec__18079 = cljs.core._nth.call(null,chunk__18076,i__18078);
var sel = cljs.core.nth.call(null,vec__18079,(0),null);
var t = cljs.core.nth.call(null,vec__18079,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__18088 = seq__18075;
var G__18089 = chunk__18076;
var G__18090 = count__18077;
var G__18091 = (i__18078 + (1));
seq__18075 = G__18088;
chunk__18076 = G__18089;
count__18077 = G__18090;
i__18078 = G__18091;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__18075);
if(temp__4657__auto__){
var seq__18075__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18075__$1)){
var c__8267__auto__ = cljs.core.chunk_first.call(null,seq__18075__$1);
var G__18092 = cljs.core.chunk_rest.call(null,seq__18075__$1);
var G__18093 = c__8267__auto__;
var G__18094 = cljs.core.count.call(null,c__8267__auto__);
var G__18095 = (0);
seq__18075 = G__18092;
chunk__18076 = G__18093;
count__18077 = G__18094;
i__18078 = G__18095;
continue;
} else {
var vec__18082 = cljs.core.first.call(null,seq__18075__$1);
var sel = cljs.core.nth.call(null,vec__18082,(0),null);
var t = cljs.core.nth.call(null,vec__18082,(1),null);
enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));

var G__18096 = cljs.core.next.call(null,seq__18075__$1);
var G__18097 = null;
var G__18098 = (0);
var G__18099 = (0);
seq__18075 = G__18096;
chunk__18076 = G__18097;
count__18077 = G__18098;
i__18078 = G__18099;
continue;
}
} else {
return null;
}
}
break;
}
}
});

enfocus.core.i_at.cljs$lang$maxFixedArity = (2);

enfocus.core.i_at.cljs$lang$applyTo = (function (seq18067){
var G__18068 = cljs.core.first.call(null,seq18067);
var seq18067__$1 = cljs.core.next.call(null,seq18067);
var G__18069 = cljs.core.first.call(null,seq18067__$1);
var seq18067__$2 = cljs.core.next.call(null,seq18067__$1);
return enfocus.core.i_at.cljs$core$IFn$_invoke$arity$variadic(G__18068,G__18069,seq18067__$2);
});

enfocus.core.at = (function enfocus$core$at(var_args){
var args__8568__auto__ = [];
var len__8561__auto___18102 = arguments.length;
var i__8562__auto___18103 = (0);
while(true){
if((i__8562__auto___18103 < len__8561__auto___18102)){
args__8568__auto__.push((arguments[i__8562__auto___18103]));

var G__18104 = (i__8562__auto___18103 + (1));
i__8562__auto___18103 = G__18104;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((1) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((1)),(0),null)):null);
return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8569__auto__);
});

enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic = (function (node,trans){
return cljs.core.apply.call(null,enfocus.core.i_at,"",node,trans);
});

enfocus.core.at.cljs$lang$maxFixedArity = (1);

enfocus.core.at.cljs$lang$applyTo = (function (seq18100){
var G__18101 = cljs.core.first.call(null,seq18100);
var seq18100__$1 = cljs.core.next.call(null,seq18100);
return enfocus.core.at.cljs$core$IFn$_invoke$arity$variadic(G__18101,seq18100__$1);
});

enfocus.core.from = (function enfocus$core$from(var_args){
var args__8568__auto__ = [];
var len__8561__auto___18115 = arguments.length;
var i__8562__auto___18116 = (0);
while(true){
if((i__8562__auto___18116 < len__8561__auto___18115)){
args__8568__auto__.push((arguments[i__8562__auto___18116]));

var G__18117 = (i__8562__auto___18116 + (1));
i__8562__auto___18116 = G__18117;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((1) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((1)),(0),null)):null);
return enfocus.core.from.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8569__auto__);
});

enfocus.core.from.cljs$core$IFn$_invoke$arity$variadic = (function (node,trans){
var cnt = cljs.core.count.call(null,trans);
var sel_QMARK_ = ((!((node == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === node.enfocus$core$ISelector$)))?true:(((!node.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,node):false)):cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,node));
if((sel_QMARK_) && (cljs.core._EQ_.call(null,(1),cnt))){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else {
if(cljs.core._EQ_.call(null,(1),cnt)){
return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else {
var vec__18108 = ((sel_QMARK_)?(function (){var x__8290__auto__ = document;
return cljs.core._conj.call(null,(function (){var x__8290__auto____$1 = cljs.core.conj.call(null,trans,node);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8290__auto____$1);
})(),x__8290__auto__);
})():(function (){var x__8290__auto__ = node;
return cljs.core._conj.call(null,(function (){var x__8290__auto____$1 = trans;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8290__auto____$1);
})(),x__8290__auto__);
})());
var node__$1 = cljs.core.nth.call(null,vec__18108,(0),null);
var trans__$1 = cljs.core.nth.call(null,vec__18108,(1),null);
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,((function (vec__18108,node__$1,trans__$1,cnt,sel_QMARK_){
return (function (p__18111){
var vec__18112 = p__18111;
var ky = cljs.core.nth.call(null,vec__18112,(0),null);
var sel = cljs.core.nth.call(null,vec__18112,(1),null);
var ext = cljs.core.nth.call(null,vec__18112,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
});})(vec__18108,node__$1,trans__$1,cnt,sel_QMARK_))
,cljs.core.partition.call(null,(3),trans__$1)));

}
}
});

enfocus.core.from.cljs$lang$maxFixedArity = (1);

enfocus.core.from.cljs$lang$applyTo = (function (seq18105){
var G__18106 = cljs.core.first.call(null,seq18105);
var seq18105__$1 = cljs.core.next.call(null,seq18105);
return enfocus.core.from.cljs$core$IFn$_invoke$arity$variadic(G__18106,seq18105__$1);
});

enfocus.core.xpath = (function enfocus$core$xpath(path){
return (function (root,id_mask){
if(cljs.core.empty_QMARK_.call(null,id_mask)){
return domina.xpath.xpath.call(null,root,path);
} else {
var tmp = path.replace("@ID='",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("@ID='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_mask)].join(''));
var mpath = path.replace("@id='",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("@id='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_mask)].join(''));
return domina.xpath.xpath.call(null,root,mpath);
}
});
});
enfocus.core.this_node = (function enfocus$core$this_node(root,id_mask){
return root;
});
if(cljs.core.truth_((typeof Text != 'undefined'))){
Text.prototype.domina$DomContent$ = cljs.core.PROTOCOL_SENTINEL;

Text.prototype.domina$DomContent$nodes$arity$1 = (function (content){
var content__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$1], null);
});

Text.prototype.domina$DomContent$single_node$arity$1 = (function (content){
var content__$1 = this;
return content__$1;
});
} else {
}
(enfocus.core.ISelector["function"] = true);

(enfocus.core.select["function"] = (function() {
var G__18118 = null;
var G__18118__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__18118__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__18118__3 = (function (this$,root,id_mask){
return this$.call(null,root,id_mask);
});
G__18118 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__18118__1.call(this,this$);
case 2:
return G__18118__2.call(this,this$,root);
case 3:
return G__18118__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18118.cljs$core$IFn$_invoke$arity$1 = G__18118__1;
G__18118.cljs$core$IFn$_invoke$arity$2 = G__18118__2;
G__18118.cljs$core$IFn$_invoke$arity$3 = G__18118__3;
return G__18118;
})()
);

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$1 = (function (this$){
var this$__$1 = this;
return enfocus.core.select.call(null,this$__$1,document,"");
});

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$2 = (function (this$,root){
var this$__$1 = this;
return enfocus.core.select.call(null,this$__$1,root,"");
});

cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$3 = (function (this$,root,id_mask){
var this$__$1 = this;
return enfocus.core.css_select.call(null,id_mask,root,this$__$1);
});

(enfocus.core.ISelector["string"] = true);

(enfocus.core.select["string"] = (function() {
var G__18119 = null;
var G__18119__1 = (function (this$){
return enfocus.core.select.call(null,this$,document,"");
});
var G__18119__2 = (function (this$,root){
return enfocus.core.select.call(null,this$,root,"");
});
var G__18119__3 = (function (this$,root,id_mask){
return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
});
G__18119 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__18119__1.call(this,this$);
case 2:
return G__18119__2.call(this,this$,root);
case 3:
return G__18119__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18119.cljs$core$IFn$_invoke$arity$1 = G__18119__1;
G__18119.cljs$core$IFn$_invoke$arity$2 = G__18119__2;
G__18119.cljs$core$IFn$_invoke$arity$3 = G__18119__3;
return G__18119;
})()
);

(enfocus.core.ISelector["null"] = true);

(enfocus.core.select["null"] = (function() {
var G__18120 = null;
var G__18120__1 = (function (this$){
return cljs.core.List.EMPTY;
});
var G__18120__2 = (function (this$,root){
return cljs.core.List.EMPTY;
});
var G__18120__3 = (function (this$,root,id_mask){
return cljs.core.List.EMPTY;
});
G__18120 = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return G__18120__1.call(this,this$);
case 2:
return G__18120__2.call(this,this$,root);
case 3:
return G__18120__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18120.cljs$core$IFn$_invoke$arity$1 = G__18120__1;
G__18120.cljs$core$IFn$_invoke$arity$2 = G__18120__2;
G__18120.cljs$core$IFn$_invoke$arity$3 = G__18120__3;
return G__18120;
})()
);
(enfocus.core.ITransform["function"] = true);

(enfocus.core.apply_transform["function"] = (function() {
var G__18121 = null;
var G__18121__2 = (function (trans,nodes){
return cljs.core.doall.call(null,cljs.core.map.call(null,trans,enfocus.core.nodes__GT_coll.call(null,nodes)));
});
var G__18121__3 = (function (trans,nodes,chain){
var pnod_col = enfocus.core.nodes__GT_coll.call(null,nodes);
var val = cljs.core.doall.call(null,cljs.core.map.call(null,trans,pnod_col));
if(cljs.core.truth_(chain)){
return enfocus.core.apply_transform.call(null,chain,nodes);
} else {
return val;
}
});
G__18121 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__18121__2.call(this,trans,nodes);
case 3:
return G__18121__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18121.cljs$core$IFn$_invoke$arity$2 = G__18121__2;
G__18121.cljs$core$IFn$_invoke$arity$3 = G__18121__3;
return G__18121;
})()
);

(enfocus.core.ITransform["null"] = true);

(enfocus.core.apply_transform["null"] = (function() {
var G__18122 = null;
var G__18122__2 = (function (trans,nodes){
return nodes;
});
var G__18122__3 = (function (trans,nodes,chain){
return nodes;
});
G__18122 = function(trans,nodes,chain){
switch(arguments.length){
case 2:
return G__18122__2.call(this,trans,nodes);
case 3:
return G__18122__3.call(this,trans,nodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18122.cljs$core$IFn$_invoke$arity$2 = G__18122__2;
G__18122.cljs$core$IFn$_invoke$arity$3 = G__18122__3;
return G__18122;
})()
);

//# sourceMappingURL=core.js.map