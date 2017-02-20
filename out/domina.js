// Compiled by ClojureScript 1.9.473 {}
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.xml');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('domina.support');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_18236 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_18237 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_18238 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_18238,opt_wrapper_18236,table_section_wrapper_18237,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_18236,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_18237,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_18237,cell_wrapper_18238,table_section_wrapper_18237,table_section_wrapper_18237]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__7436__auto__ = div.firstChild;
if(cljs.core.truth_(and__7436__auto__)){
return div.firstChild.childNodes;
} else {
return and__7436__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__18243 = cljs.core.seq.call(null,tbody);
var chunk__18244 = null;
var count__18245 = (0);
var i__18246 = (0);
while(true){
if((i__18246 < count__18245)){
var child = cljs.core._nth.call(null,chunk__18244,i__18246);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__18247 = seq__18243;
var G__18248 = chunk__18244;
var G__18249 = count__18245;
var G__18250 = (i__18246 + (1));
seq__18243 = G__18247;
chunk__18244 = G__18248;
count__18245 = G__18249;
i__18246 = G__18250;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__18243);
if(temp__4657__auto__){
var seq__18243__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18243__$1)){
var c__8267__auto__ = cljs.core.chunk_first.call(null,seq__18243__$1);
var G__18251 = cljs.core.chunk_rest.call(null,seq__18243__$1);
var G__18252 = c__8267__auto__;
var G__18253 = cljs.core.count.call(null,c__8267__auto__);
var G__18254 = (0);
seq__18243 = G__18251;
chunk__18244 = G__18252;
count__18245 = G__18253;
i__18246 = G__18254;
continue;
} else {
var child = cljs.core.first.call(null,seq__18243__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__18255 = cljs.core.next.call(null,seq__18243__$1);
var G__18256 = null;
var G__18257 = (0);
var G__18258 = (0);
seq__18243 = G__18255;
chunk__18244 = G__18256;
count__18245 = G__18257;
i__18246 = G__18258;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function domina$restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
 * takes an string of html and returns a NodeList of dom fragments
 */
domina.html_to_dom = (function domina$html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__18262 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__18262,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__18262,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__18262,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap),cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__18265 = wrapper.lastChild;
var G__18266 = (level - (1));
wrapper = G__18265;
level = G__18266;
continue;
} else {
return wrapper;
}
break;
}
})();
if(domina.support.extraneous_tbody_QMARK_){
domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__7436__auto__ = !(domina.support.leading_whitespace_QMARK_);
if(and__7436__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__7436__auto__;
}
})())){
domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else {
}

return div.childNodes;
});
domina.string_to_dom = (function domina$string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s))){
return domina.html_to_dom.call(null,s);
} else {
return document.createTextNode(s);
}
});

/**
 * @interface
 */
domina.DomContent = function(){};

/**
 * Returns the content as a sequence of nodes.
 */
domina.nodes = (function domina$nodes(content){
if((!((content == null))) && (!((content.domina$DomContent$nodes$arity$1 == null)))){
return content.domina$DomContent$nodes$arity$1(content);
} else {
var x__8116__auto__ = (((content == null))?null:content);
var m__8117__auto__ = (domina.nodes[goog.typeOf(x__8116__auto__)]);
if(!((m__8117__auto__ == null))){
return m__8117__auto__.call(null,content);
} else {
var m__8117__auto____$1 = (domina.nodes["_"]);
if(!((m__8117__auto____$1 == null))){
return m__8117__auto____$1.call(null,content);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
}
});

/**
 * Returns the content as a single node (the first node, if the content contains more than one
 */
domina.single_node = (function domina$single_node(nodeseq){
if((!((nodeseq == null))) && (!((nodeseq.domina$DomContent$single_node$arity$1 == null)))){
return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else {
var x__8116__auto__ = (((nodeseq == null))?null:nodeseq);
var m__8117__auto__ = (domina.single_node[goog.typeOf(x__8116__auto__)]);
if(!((m__8117__auto__ == null))){
return m__8117__auto__.call(null,nodeseq);
} else {
var m__8117__auto____$1 = (domina.single_node["_"]);
if(!((m__8117__auto____$1 == null))){
return m__8117__auto____$1.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
}
});

domina._STAR_debug_STAR_ = true;
domina.log_debug = (function domina$log_debug(var_args){
var args__8568__auto__ = [];
var len__8561__auto___18268 = arguments.length;
var i__8562__auto___18269 = (0);
while(true){
if((i__8562__auto___18269 < len__8561__auto___18268)){
args__8568__auto__.push((arguments[i__8562__auto___18269]));

var G__18270 = (i__8562__auto___18269 + (1));
i__8562__auto___18269 = G__18270;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});

domina.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if((domina._STAR_debug_STAR_) && (!(cljs.core._EQ_.call(null,window.console,undefined)))){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log_debug.cljs$lang$maxFixedArity = (0);

domina.log_debug.cljs$lang$applyTo = (function (seq18267){
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18267));
});

domina.log = (function domina$log(var_args){
var args__8568__auto__ = [];
var len__8561__auto___18272 = arguments.length;
var i__8562__auto___18273 = (0);
while(true){
if((i__8562__auto___18273 < len__8561__auto___18272)){
args__8568__auto__.push((arguments[i__8562__auto___18273]));

var G__18274 = (i__8562__auto___18273 + (1));
i__8562__auto___18273 = G__18274;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return domina.log.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});

domina.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log.cljs$lang$maxFixedArity = (0);

domina.log.cljs$lang$applyTo = (function (seq18271){
return domina.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18271));
});

/**
 * Returns content containing a single node by looking up the given ID
 */
domina.by_id = (function domina$by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
 * Returns content containing nodes which have the specified CSS class.
 */
domina.by_class = (function domina$by_class(class_name){
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
 * Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
 */
domina.children = (function domina$children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
 * Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
 */
domina.common_ancestor = (function domina$common_ancestor(var_args){
var args__8568__auto__ = [];
var len__8561__auto___18276 = arguments.length;
var i__8562__auto___18277 = (0);
while(true){
if((i__8562__auto___18277 < len__8561__auto___18276)){
args__8568__auto__.push((arguments[i__8562__auto___18277]));

var G__18278 = (i__8562__auto___18277 + (1));
i__8562__auto___18277 = G__18278;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});

domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
});

domina.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.common_ancestor.cljs$lang$applyTo = (function (seq18275){
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18275));
});

/**
 * Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
 */
domina.ancestor_QMARK_ = (function domina$ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
 * Returns a deep clone of content.
 */
domina.clone = (function domina$clone(content){
return cljs.core.map.call(null,(function (p1__18279_SHARP_){
return p1__18279_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.append_BANG_ = (function domina$append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.insert_BANG_ = (function domina$insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__18280_SHARP_,p2__18281_SHARP_){
return goog.dom.insertChildAt(p1__18280_SHARP_,p2__18281_SHARP_,idx);
}),parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.prepend_BANG_ = (function domina$prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,(0));

return parent_content;
});
/**
 * Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_before_BANG_ = (function domina$insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__18283_SHARP_,p2__18282_SHARP_){
return goog.dom.insertSiblingBefore(p2__18282_SHARP_,p1__18283_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__18285_SHARP_,p2__18284_SHARP_){
return goog.dom.insertSiblingAfter(p2__18284_SHARP_,p1__18285_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__18287_SHARP_,p2__18286_SHARP_){
return goog.dom.replaceNode(p2__18286_SHARP_,p1__18287_SHARP_);
}),old_content,new_content);

return old_content;
});
/**
 * Removes all the nodes in a content from the DOM and returns them.
 */
domina.detach_BANG_ = (function domina$detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the nodes in a content from the DOM. Returns nil.
 */
domina.destroy_BANG_ = (function domina$destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the child nodes in a content from the DOM. Returns the original content.
 */
domina.destroy_children_BANG_ = (function domina$destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));

return content;
});
/**
 * Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
 */
domina.style = (function domina$style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
});
/**
 * Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
 */
domina.attr = (function domina$attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
 * Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_style_BANG_ = (function domina$set_style_BANG_(var_args){
var args__8568__auto__ = [];
var len__8561__auto___18295 = arguments.length;
var i__8562__auto___18296 = (0);
while(true){
if((i__8562__auto___18296 < len__8561__auto___18295)){
args__8568__auto__.push((arguments[i__8562__auto___18296]));

var G__18297 = (i__8562__auto___18296 + (1));
i__8562__auto___18296 = G__18297;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((2) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8569__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__18291_18298 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__18292_18299 = null;
var count__18293_18300 = (0);
var i__18294_18301 = (0);
while(true){
if((i__18294_18301 < count__18293_18300)){
var n_18302 = cljs.core._nth.call(null,chunk__18292_18299,i__18294_18301);
goog.style.setStyle(n_18302,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__18303 = seq__18291_18298;
var G__18304 = chunk__18292_18299;
var G__18305 = count__18293_18300;
var G__18306 = (i__18294_18301 + (1));
seq__18291_18298 = G__18303;
chunk__18292_18299 = G__18304;
count__18293_18300 = G__18305;
i__18294_18301 = G__18306;
continue;
} else {
var temp__4657__auto___18307 = cljs.core.seq.call(null,seq__18291_18298);
if(temp__4657__auto___18307){
var seq__18291_18308__$1 = temp__4657__auto___18307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18291_18308__$1)){
var c__8267__auto___18309 = cljs.core.chunk_first.call(null,seq__18291_18308__$1);
var G__18310 = cljs.core.chunk_rest.call(null,seq__18291_18308__$1);
var G__18311 = c__8267__auto___18309;
var G__18312 = cljs.core.count.call(null,c__8267__auto___18309);
var G__18313 = (0);
seq__18291_18298 = G__18310;
chunk__18292_18299 = G__18311;
count__18293_18300 = G__18312;
i__18294_18301 = G__18313;
continue;
} else {
var n_18314 = cljs.core.first.call(null,seq__18291_18308__$1);
goog.style.setStyle(n_18314,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__18315 = cljs.core.next.call(null,seq__18291_18308__$1);
var G__18316 = null;
var G__18317 = (0);
var G__18318 = (0);
seq__18291_18298 = G__18315;
chunk__18292_18299 = G__18316;
count__18293_18300 = G__18317;
i__18294_18301 = G__18318;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.set_style_BANG_.cljs$lang$maxFixedArity = (2);

domina.set_style_BANG_.cljs$lang$applyTo = (function (seq18288){
var G__18289 = cljs.core.first.call(null,seq18288);
var seq18288__$1 = cljs.core.next.call(null,seq18288);
var G__18290 = cljs.core.first.call(null,seq18288__$1);
var seq18288__$2 = cljs.core.next.call(null,seq18288__$1);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18289,G__18290,seq18288__$2);
});

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__8568__auto__ = [];
var len__8561__auto___18326 = arguments.length;
var i__8562__auto___18327 = (0);
while(true){
if((i__8562__auto___18327 < len__8561__auto___18326)){
args__8568__auto__.push((arguments[i__8562__auto___18327]));

var G__18328 = (i__8562__auto___18327 + (1));
i__8562__auto___18327 = G__18328;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((2) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8569__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__18322_18329 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__18323_18330 = null;
var count__18324_18331 = (0);
var i__18325_18332 = (0);
while(true){
if((i__18325_18332 < count__18324_18331)){
var n_18333 = cljs.core._nth.call(null,chunk__18323_18330,i__18325_18332);
n_18333.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__18334 = seq__18322_18329;
var G__18335 = chunk__18323_18330;
var G__18336 = count__18324_18331;
var G__18337 = (i__18325_18332 + (1));
seq__18322_18329 = G__18334;
chunk__18323_18330 = G__18335;
count__18324_18331 = G__18336;
i__18325_18332 = G__18337;
continue;
} else {
var temp__4657__auto___18338 = cljs.core.seq.call(null,seq__18322_18329);
if(temp__4657__auto___18338){
var seq__18322_18339__$1 = temp__4657__auto___18338;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18322_18339__$1)){
var c__8267__auto___18340 = cljs.core.chunk_first.call(null,seq__18322_18339__$1);
var G__18341 = cljs.core.chunk_rest.call(null,seq__18322_18339__$1);
var G__18342 = c__8267__auto___18340;
var G__18343 = cljs.core.count.call(null,c__8267__auto___18340);
var G__18344 = (0);
seq__18322_18329 = G__18341;
chunk__18323_18330 = G__18342;
count__18324_18331 = G__18343;
i__18325_18332 = G__18344;
continue;
} else {
var n_18345 = cljs.core.first.call(null,seq__18322_18339__$1);
n_18345.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__18346 = cljs.core.next.call(null,seq__18322_18339__$1);
var G__18347 = null;
var G__18348 = (0);
var G__18349 = (0);
seq__18322_18329 = G__18346;
chunk__18323_18330 = G__18347;
count__18324_18331 = G__18348;
i__18325_18332 = G__18349;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.set_attr_BANG_.cljs$lang$maxFixedArity = (2);

domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq18319){
var G__18320 = cljs.core.first.call(null,seq18319);
var seq18319__$1 = cljs.core.next.call(null,seq18319);
var G__18321 = cljs.core.first.call(null,seq18319__$1);
var seq18319__$2 = cljs.core.next.call(null,seq18319__$1);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18320,G__18321,seq18319__$2);
});

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__18354_18358 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__18355_18359 = null;
var count__18356_18360 = (0);
var i__18357_18361 = (0);
while(true){
if((i__18357_18361 < count__18356_18360)){
var n_18362 = cljs.core._nth.call(null,chunk__18355_18359,i__18357_18361);
n_18362.removeAttribute(cljs.core.name.call(null,name));

var G__18363 = seq__18354_18358;
var G__18364 = chunk__18355_18359;
var G__18365 = count__18356_18360;
var G__18366 = (i__18357_18361 + (1));
seq__18354_18358 = G__18363;
chunk__18355_18359 = G__18364;
count__18356_18360 = G__18365;
i__18357_18361 = G__18366;
continue;
} else {
var temp__4657__auto___18367 = cljs.core.seq.call(null,seq__18354_18358);
if(temp__4657__auto___18367){
var seq__18354_18368__$1 = temp__4657__auto___18367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18354_18368__$1)){
var c__8267__auto___18369 = cljs.core.chunk_first.call(null,seq__18354_18368__$1);
var G__18370 = cljs.core.chunk_rest.call(null,seq__18354_18368__$1);
var G__18371 = c__8267__auto___18369;
var G__18372 = cljs.core.count.call(null,c__8267__auto___18369);
var G__18373 = (0);
seq__18354_18358 = G__18370;
chunk__18355_18359 = G__18371;
count__18356_18360 = G__18372;
i__18357_18361 = G__18373;
continue;
} else {
var n_18374 = cljs.core.first.call(null,seq__18354_18368__$1);
n_18374.removeAttribute(cljs.core.name.call(null,name));

var G__18375 = cljs.core.next.call(null,seq__18354_18368__$1);
var G__18376 = null;
var G__18377 = (0);
var G__18378 = (0);
seq__18354_18358 = G__18375;
chunk__18355_18359 = G__18376;
count__18356_18360 = G__18377;
i__18357_18361 = G__18378;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Parses a CSS style string and returns the properties as a map.
 */
domina.parse_style_attributes = (function domina$parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__18382 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__18382,(0),null);
var v = cljs.core.nth.call(null,vec__18382,(1),null);
if(cljs.core.truth_((function (){var and__7436__auto__ = k;
if(cljs.core.truth_(and__7436__auto__)){
return v;
} else {
return and__7436__auto__;
}
})())){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
 * Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
 */
domina.styles = (function domina$styles(content){
var style = domina.attr.call(null,content,"style");
if(typeof style === 'string'){
return domina.parse_style_attributes.call(null,style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.parse_style_attributes.call(null,style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
 * Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
 */
domina.attrs = (function domina$attrs(content){
var node = domina.single_node.call(null,content);
var attrs = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs){
return (function (p1__18385_SHARP_){
var attr = attrs.item(p1__18385_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue]);
} else {
return null;
}
});})(node,attrs))
,cljs.core.range.call(null,attrs.length))));
});
/**
 * Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
 */
domina.set_styles_BANG_ = (function domina$set_styles_BANG_(content,styles){
var seq__18396_18406 = cljs.core.seq.call(null,styles);
var chunk__18397_18407 = null;
var count__18398_18408 = (0);
var i__18399_18409 = (0);
while(true){
if((i__18399_18409 < count__18398_18408)){
var vec__18400_18410 = cljs.core._nth.call(null,chunk__18397_18407,i__18399_18409);
var name_18411 = cljs.core.nth.call(null,vec__18400_18410,(0),null);
var value_18412 = cljs.core.nth.call(null,vec__18400_18410,(1),null);
domina.set_style_BANG_.call(null,content,name_18411,value_18412);

var G__18413 = seq__18396_18406;
var G__18414 = chunk__18397_18407;
var G__18415 = count__18398_18408;
var G__18416 = (i__18399_18409 + (1));
seq__18396_18406 = G__18413;
chunk__18397_18407 = G__18414;
count__18398_18408 = G__18415;
i__18399_18409 = G__18416;
continue;
} else {
var temp__4657__auto___18417 = cljs.core.seq.call(null,seq__18396_18406);
if(temp__4657__auto___18417){
var seq__18396_18418__$1 = temp__4657__auto___18417;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18396_18418__$1)){
var c__8267__auto___18419 = cljs.core.chunk_first.call(null,seq__18396_18418__$1);
var G__18420 = cljs.core.chunk_rest.call(null,seq__18396_18418__$1);
var G__18421 = c__8267__auto___18419;
var G__18422 = cljs.core.count.call(null,c__8267__auto___18419);
var G__18423 = (0);
seq__18396_18406 = G__18420;
chunk__18397_18407 = G__18421;
count__18398_18408 = G__18422;
i__18399_18409 = G__18423;
continue;
} else {
var vec__18403_18424 = cljs.core.first.call(null,seq__18396_18418__$1);
var name_18425 = cljs.core.nth.call(null,vec__18403_18424,(0),null);
var value_18426 = cljs.core.nth.call(null,vec__18403_18424,(1),null);
domina.set_style_BANG_.call(null,content,name_18425,value_18426);

var G__18427 = cljs.core.next.call(null,seq__18396_18418__$1);
var G__18428 = null;
var G__18429 = (0);
var G__18430 = (0);
seq__18396_18406 = G__18427;
chunk__18397_18407 = G__18428;
count__18398_18408 = G__18429;
i__18399_18409 = G__18430;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attrs_BANG_ = (function domina$set_attrs_BANG_(content,attrs){
var seq__18441_18451 = cljs.core.seq.call(null,attrs);
var chunk__18442_18452 = null;
var count__18443_18453 = (0);
var i__18444_18454 = (0);
while(true){
if((i__18444_18454 < count__18443_18453)){
var vec__18445_18455 = cljs.core._nth.call(null,chunk__18442_18452,i__18444_18454);
var name_18456 = cljs.core.nth.call(null,vec__18445_18455,(0),null);
var value_18457 = cljs.core.nth.call(null,vec__18445_18455,(1),null);
domina.set_attr_BANG_.call(null,content,name_18456,value_18457);

var G__18458 = seq__18441_18451;
var G__18459 = chunk__18442_18452;
var G__18460 = count__18443_18453;
var G__18461 = (i__18444_18454 + (1));
seq__18441_18451 = G__18458;
chunk__18442_18452 = G__18459;
count__18443_18453 = G__18460;
i__18444_18454 = G__18461;
continue;
} else {
var temp__4657__auto___18462 = cljs.core.seq.call(null,seq__18441_18451);
if(temp__4657__auto___18462){
var seq__18441_18463__$1 = temp__4657__auto___18462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18441_18463__$1)){
var c__8267__auto___18464 = cljs.core.chunk_first.call(null,seq__18441_18463__$1);
var G__18465 = cljs.core.chunk_rest.call(null,seq__18441_18463__$1);
var G__18466 = c__8267__auto___18464;
var G__18467 = cljs.core.count.call(null,c__8267__auto___18464);
var G__18468 = (0);
seq__18441_18451 = G__18465;
chunk__18442_18452 = G__18466;
count__18443_18453 = G__18467;
i__18444_18454 = G__18468;
continue;
} else {
var vec__18448_18469 = cljs.core.first.call(null,seq__18441_18463__$1);
var name_18470 = cljs.core.nth.call(null,vec__18448_18469,(0),null);
var value_18471 = cljs.core.nth.call(null,vec__18448_18469,(1),null);
domina.set_attr_BANG_.call(null,content,name_18470,value_18471);

var G__18472 = cljs.core.next.call(null,seq__18441_18463__$1);
var G__18473 = null;
var G__18474 = (0);
var G__18475 = (0);
seq__18441_18451 = G__18472;
chunk__18442_18452 = G__18473;
count__18443_18453 = G__18474;
i__18444_18454 = G__18475;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns true if the node has the specified CSS class. Assumes content is a single node.
 */
domina.has_class_QMARK_ = (function domina$has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
 * Adds the specified CSS class to each node in the content.
 */
domina.add_class_BANG_ = (function domina$add_class_BANG_(content,class$){
var seq__18480_18484 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__18481_18485 = null;
var count__18482_18486 = (0);
var i__18483_18487 = (0);
while(true){
if((i__18483_18487 < count__18482_18486)){
var node_18488 = cljs.core._nth.call(null,chunk__18481_18485,i__18483_18487);
goog.dom.classes.add(node_18488,class$);

var G__18489 = seq__18480_18484;
var G__18490 = chunk__18481_18485;
var G__18491 = count__18482_18486;
var G__18492 = (i__18483_18487 + (1));
seq__18480_18484 = G__18489;
chunk__18481_18485 = G__18490;
count__18482_18486 = G__18491;
i__18483_18487 = G__18492;
continue;
} else {
var temp__4657__auto___18493 = cljs.core.seq.call(null,seq__18480_18484);
if(temp__4657__auto___18493){
var seq__18480_18494__$1 = temp__4657__auto___18493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18480_18494__$1)){
var c__8267__auto___18495 = cljs.core.chunk_first.call(null,seq__18480_18494__$1);
var G__18496 = cljs.core.chunk_rest.call(null,seq__18480_18494__$1);
var G__18497 = c__8267__auto___18495;
var G__18498 = cljs.core.count.call(null,c__8267__auto___18495);
var G__18499 = (0);
seq__18480_18484 = G__18496;
chunk__18481_18485 = G__18497;
count__18482_18486 = G__18498;
i__18483_18487 = G__18499;
continue;
} else {
var node_18500 = cljs.core.first.call(null,seq__18480_18494__$1);
goog.dom.classes.add(node_18500,class$);

var G__18501 = cljs.core.next.call(null,seq__18480_18494__$1);
var G__18502 = null;
var G__18503 = (0);
var G__18504 = (0);
seq__18480_18484 = G__18501;
chunk__18481_18485 = G__18502;
count__18482_18486 = G__18503;
i__18483_18487 = G__18504;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Removes the specified CSS class from each node in the content.
 */
domina.remove_class_BANG_ = (function domina$remove_class_BANG_(content,class$){
var seq__18509_18513 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__18510_18514 = null;
var count__18511_18515 = (0);
var i__18512_18516 = (0);
while(true){
if((i__18512_18516 < count__18511_18515)){
var node_18517 = cljs.core._nth.call(null,chunk__18510_18514,i__18512_18516);
goog.dom.classes.remove(node_18517,class$);

var G__18518 = seq__18509_18513;
var G__18519 = chunk__18510_18514;
var G__18520 = count__18511_18515;
var G__18521 = (i__18512_18516 + (1));
seq__18509_18513 = G__18518;
chunk__18510_18514 = G__18519;
count__18511_18515 = G__18520;
i__18512_18516 = G__18521;
continue;
} else {
var temp__4657__auto___18522 = cljs.core.seq.call(null,seq__18509_18513);
if(temp__4657__auto___18522){
var seq__18509_18523__$1 = temp__4657__auto___18522;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18509_18523__$1)){
var c__8267__auto___18524 = cljs.core.chunk_first.call(null,seq__18509_18523__$1);
var G__18525 = cljs.core.chunk_rest.call(null,seq__18509_18523__$1);
var G__18526 = c__8267__auto___18524;
var G__18527 = cljs.core.count.call(null,c__8267__auto___18524);
var G__18528 = (0);
seq__18509_18513 = G__18525;
chunk__18510_18514 = G__18526;
count__18511_18515 = G__18527;
i__18512_18516 = G__18528;
continue;
} else {
var node_18529 = cljs.core.first.call(null,seq__18509_18523__$1);
goog.dom.classes.remove(node_18529,class$);

var G__18530 = cljs.core.next.call(null,seq__18509_18523__$1);
var G__18531 = null;
var G__18532 = (0);
var G__18533 = (0);
seq__18509_18513 = G__18530;
chunk__18510_18514 = G__18531;
count__18511_18515 = G__18532;
i__18512_18516 = G__18533;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Toggles the specified CSS class from each node in the content.
 */
domina.toggle_class_BANG_ = (function domina$toggle_class_BANG_(content,class$){
var seq__18538_18542 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__18539_18543 = null;
var count__18540_18544 = (0);
var i__18541_18545 = (0);
while(true){
if((i__18541_18545 < count__18540_18544)){
var node_18546 = cljs.core._nth.call(null,chunk__18539_18543,i__18541_18545);
goog.dom.classes.toggle(node_18546,class$);

var G__18547 = seq__18538_18542;
var G__18548 = chunk__18539_18543;
var G__18549 = count__18540_18544;
var G__18550 = (i__18541_18545 + (1));
seq__18538_18542 = G__18547;
chunk__18539_18543 = G__18548;
count__18540_18544 = G__18549;
i__18541_18545 = G__18550;
continue;
} else {
var temp__4657__auto___18551 = cljs.core.seq.call(null,seq__18538_18542);
if(temp__4657__auto___18551){
var seq__18538_18552__$1 = temp__4657__auto___18551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18538_18552__$1)){
var c__8267__auto___18553 = cljs.core.chunk_first.call(null,seq__18538_18552__$1);
var G__18554 = cljs.core.chunk_rest.call(null,seq__18538_18552__$1);
var G__18555 = c__8267__auto___18553;
var G__18556 = cljs.core.count.call(null,c__8267__auto___18553);
var G__18557 = (0);
seq__18538_18542 = G__18554;
chunk__18539_18543 = G__18555;
count__18540_18544 = G__18556;
i__18541_18545 = G__18557;
continue;
} else {
var node_18558 = cljs.core.first.call(null,seq__18538_18552__$1);
goog.dom.classes.toggle(node_18558,class$);

var G__18559 = cljs.core.next.call(null,seq__18538_18552__$1);
var G__18560 = null;
var G__18561 = (0);
var G__18562 = (0);
seq__18538_18542 = G__18559;
chunk__18539_18543 = G__18560;
count__18540_18544 = G__18561;
i__18541_18545 = G__18562;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
 */
domina.classes = (function domina$classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
 * Sets the class attribute of the content nodes to classes, which can
 *   be either a class attribute string or a seq of classname strings.
 */
domina.set_classes_BANG_ = (function domina$set_classes_BANG_(content,classes){
var classes_18571__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__18567_18572 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__18568_18573 = null;
var count__18569_18574 = (0);
var i__18570_18575 = (0);
while(true){
if((i__18570_18575 < count__18569_18574)){
var node_18576 = cljs.core._nth.call(null,chunk__18568_18573,i__18570_18575);
goog.dom.classes.set(node_18576,classes_18571__$1);

var G__18577 = seq__18567_18572;
var G__18578 = chunk__18568_18573;
var G__18579 = count__18569_18574;
var G__18580 = (i__18570_18575 + (1));
seq__18567_18572 = G__18577;
chunk__18568_18573 = G__18578;
count__18569_18574 = G__18579;
i__18570_18575 = G__18580;
continue;
} else {
var temp__4657__auto___18581 = cljs.core.seq.call(null,seq__18567_18572);
if(temp__4657__auto___18581){
var seq__18567_18582__$1 = temp__4657__auto___18581;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18567_18582__$1)){
var c__8267__auto___18583 = cljs.core.chunk_first.call(null,seq__18567_18582__$1);
var G__18584 = cljs.core.chunk_rest.call(null,seq__18567_18582__$1);
var G__18585 = c__8267__auto___18583;
var G__18586 = cljs.core.count.call(null,c__8267__auto___18583);
var G__18587 = (0);
seq__18567_18572 = G__18584;
chunk__18568_18573 = G__18585;
count__18569_18574 = G__18586;
i__18570_18575 = G__18587;
continue;
} else {
var node_18588 = cljs.core.first.call(null,seq__18567_18582__$1);
goog.dom.classes.set(node_18588,classes_18571__$1);

var G__18589 = cljs.core.next.call(null,seq__18567_18582__$1);
var G__18590 = null;
var G__18591 = (0);
var G__18592 = (0);
seq__18567_18572 = G__18589;
chunk__18568_18573 = G__18590;
count__18569_18574 = G__18591;
i__18570_18575 = G__18592;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
 */
domina.text = (function domina$text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
 * Sets the text value of all the nodes in the given content.
 */
domina.set_text_BANG_ = (function domina$set_text_BANG_(content,value){
var seq__18597_18601 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__18598_18602 = null;
var count__18599_18603 = (0);
var i__18600_18604 = (0);
while(true){
if((i__18600_18604 < count__18599_18603)){
var node_18605 = cljs.core._nth.call(null,chunk__18598_18602,i__18600_18604);
goog.dom.setTextContent(node_18605,value);

var G__18606 = seq__18597_18601;
var G__18607 = chunk__18598_18602;
var G__18608 = count__18599_18603;
var G__18609 = (i__18600_18604 + (1));
seq__18597_18601 = G__18606;
chunk__18598_18602 = G__18607;
count__18599_18603 = G__18608;
i__18600_18604 = G__18609;
continue;
} else {
var temp__4657__auto___18610 = cljs.core.seq.call(null,seq__18597_18601);
if(temp__4657__auto___18610){
var seq__18597_18611__$1 = temp__4657__auto___18610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18597_18611__$1)){
var c__8267__auto___18612 = cljs.core.chunk_first.call(null,seq__18597_18611__$1);
var G__18613 = cljs.core.chunk_rest.call(null,seq__18597_18611__$1);
var G__18614 = c__8267__auto___18612;
var G__18615 = cljs.core.count.call(null,c__8267__auto___18612);
var G__18616 = (0);
seq__18597_18601 = G__18613;
chunk__18598_18602 = G__18614;
count__18599_18603 = G__18615;
i__18600_18604 = G__18616;
continue;
} else {
var node_18617 = cljs.core.first.call(null,seq__18597_18611__$1);
goog.dom.setTextContent(node_18617,value);

var G__18618 = cljs.core.next.call(null,seq__18597_18611__$1);
var G__18619 = null;
var G__18620 = (0);
var G__18621 = (0);
seq__18597_18601 = G__18618;
chunk__18598_18602 = G__18619;
count__18599_18603 = G__18620;
i__18600_18604 = G__18621;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the value of a node (presumably a form field). Assumes content is a single node.
 */
domina.value = (function domina$value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
 * Sets the value of all the nodes (presumably form fields) in the given content.
 */
domina.set_value_BANG_ = (function domina$set_value_BANG_(content,value){
var seq__18626_18630 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__18627_18631 = null;
var count__18628_18632 = (0);
var i__18629_18633 = (0);
while(true){
if((i__18629_18633 < count__18628_18632)){
var node_18634 = cljs.core._nth.call(null,chunk__18627_18631,i__18629_18633);
goog.dom.forms.setValue(node_18634,value);

var G__18635 = seq__18626_18630;
var G__18636 = chunk__18627_18631;
var G__18637 = count__18628_18632;
var G__18638 = (i__18629_18633 + (1));
seq__18626_18630 = G__18635;
chunk__18627_18631 = G__18636;
count__18628_18632 = G__18637;
i__18629_18633 = G__18638;
continue;
} else {
var temp__4657__auto___18639 = cljs.core.seq.call(null,seq__18626_18630);
if(temp__4657__auto___18639){
var seq__18626_18640__$1 = temp__4657__auto___18639;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18626_18640__$1)){
var c__8267__auto___18641 = cljs.core.chunk_first.call(null,seq__18626_18640__$1);
var G__18642 = cljs.core.chunk_rest.call(null,seq__18626_18640__$1);
var G__18643 = c__8267__auto___18641;
var G__18644 = cljs.core.count.call(null,c__8267__auto___18641);
var G__18645 = (0);
seq__18626_18630 = G__18642;
chunk__18627_18631 = G__18643;
count__18628_18632 = G__18644;
i__18629_18633 = G__18645;
continue;
} else {
var node_18646 = cljs.core.first.call(null,seq__18626_18640__$1);
goog.dom.forms.setValue(node_18646,value);

var G__18647 = cljs.core.next.call(null,seq__18626_18640__$1);
var G__18648 = null;
var G__18649 = (0);
var G__18650 = (0);
seq__18626_18630 = G__18647;
chunk__18627_18631 = G__18648;
count__18628_18632 = G__18649;
i__18629_18633 = G__18650;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the innerHTML of a node. Assumes content is a single node.
 */
domina.html = (function domina$html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function domina$replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function domina$set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if((allows_inner_html_QMARK_) && ((domina.support.leading_whitespace_QMARK_) || (cljs.core.not.call(null,leading_whitespace_QMARK_))) && (!(special_tag_QMARK_))){
var value_18661 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__18657_18662 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__18658_18663 = null;
var count__18659_18664 = (0);
var i__18660_18665 = (0);
while(true){
if((i__18660_18665 < count__18659_18664)){
var node_18666 = cljs.core._nth.call(null,chunk__18658_18663,i__18660_18665);
node_18666.innerHTML = value_18661;

var G__18667 = seq__18657_18662;
var G__18668 = chunk__18658_18663;
var G__18669 = count__18659_18664;
var G__18670 = (i__18660_18665 + (1));
seq__18657_18662 = G__18667;
chunk__18658_18663 = G__18668;
count__18659_18664 = G__18669;
i__18660_18665 = G__18670;
continue;
} else {
var temp__4657__auto___18671 = cljs.core.seq.call(null,seq__18657_18662);
if(temp__4657__auto___18671){
var seq__18657_18672__$1 = temp__4657__auto___18671;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18657_18672__$1)){
var c__8267__auto___18673 = cljs.core.chunk_first.call(null,seq__18657_18672__$1);
var G__18674 = cljs.core.chunk_rest.call(null,seq__18657_18672__$1);
var G__18675 = c__8267__auto___18673;
var G__18676 = cljs.core.count.call(null,c__8267__auto___18673);
var G__18677 = (0);
seq__18657_18662 = G__18674;
chunk__18658_18663 = G__18675;
count__18659_18664 = G__18676;
i__18660_18665 = G__18677;
continue;
} else {
var node_18678 = cljs.core.first.call(null,seq__18657_18672__$1);
node_18678.innerHTML = value_18661;

var G__18679 = cljs.core.next.call(null,seq__18657_18672__$1);
var G__18680 = null;
var G__18681 = (0);
var G__18682 = (0);
seq__18657_18662 = G__18679;
chunk__18658_18663 = G__18680;
count__18659_18664 = G__18681;
i__18660_18665 = G__18682;
continue;
}
} else {
}
}
break;
}
}catch (e18656){if((e18656 instanceof Error)){
var e_18683 = e18656;
domina.replace_children_BANG_.call(null,content,value_18661);
} else {
throw e18656;

}
}} else {
domina.replace_children_BANG_.call(null,content,html_string);
}

return content;
});
/**
 * Sets the innerHTML value for all the nodes in the given content.
 */
domina.set_html_BANG_ = (function domina$set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else {
return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
 * Returns data associated with a node for a given key. Assumes
 *   content is a single node. If the bubble parameter is set to true,
 *   will search parent nodes if the key is not found.
 */
domina.get_data = (function domina$get_data(var_args){
var args18684 = [];
var len__8561__auto___18687 = arguments.length;
var i__8562__auto___18688 = (0);
while(true){
if((i__8562__auto___18688 < len__8561__auto___18687)){
args18684.push((arguments[i__8562__auto___18688]));

var G__18689 = (i__8562__auto___18688 + (1));
i__8562__auto___18688 = G__18689;
continue;
} else {
}
break;
}

var G__18686 = args18684.length;
switch (G__18686) {
case 2:
return domina.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18684.length)].join('')));

}
});

domina.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.get_data.call(null,node,key,false);
});

domina.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__7436__auto__ = bubble;
if(cljs.core.truth_(and__7436__auto__)){
return (value == null);
} else {
return and__7436__auto__;
}
})())){
var temp__4657__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4657__auto__)){
var parent = temp__4657__auto__;
return domina.get_data.call(null,parent,key,true);
} else {
return null;
}
} else {
return value;
}
});

domina.get_data.cljs$lang$maxFixedArity = 3;

/**
 * Sets a data on the node for a given key. Assumes content is a
 *   single node. Data should be ClojureScript values and data structures
 *   only; using other objects as data may result in memory leaks on some
 *   browsers.
 */
domina.set_data_BANG_ = (function domina$set_data_BANG_(node,key,value){
var m = (function (){var or__7448__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__7448__auto__)){
return or__7448__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
 * Takes a two-arg function, a reference DomContent and new
 *   DomContent. Applies the function for each reference / content
 *   combination. Uses clones of the new content for each additional
 *   parent after the first.
 */
domina.apply_with_cloning = (function domina$apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__18697_18701 = cljs.core.seq.call(null,children);
var chunk__18698_18702 = null;
var count__18699_18703 = (0);
var i__18700_18704 = (0);
while(true){
if((i__18700_18704 < count__18699_18703)){
var child_18705 = cljs.core._nth.call(null,chunk__18698_18702,i__18700_18704);
frag.appendChild(child_18705);

var G__18706 = seq__18697_18701;
var G__18707 = chunk__18698_18702;
var G__18708 = count__18699_18703;
var G__18709 = (i__18700_18704 + (1));
seq__18697_18701 = G__18706;
chunk__18698_18702 = G__18707;
count__18699_18703 = G__18708;
i__18700_18704 = G__18709;
continue;
} else {
var temp__4657__auto___18710 = cljs.core.seq.call(null,seq__18697_18701);
if(temp__4657__auto___18710){
var seq__18697_18711__$1 = temp__4657__auto___18710;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18697_18711__$1)){
var c__8267__auto___18712 = cljs.core.chunk_first.call(null,seq__18697_18711__$1);
var G__18713 = cljs.core.chunk_rest.call(null,seq__18697_18711__$1);
var G__18714 = c__8267__auto___18712;
var G__18715 = cljs.core.count.call(null,c__8267__auto___18712);
var G__18716 = (0);
seq__18697_18701 = G__18713;
chunk__18698_18702 = G__18714;
count__18699_18703 = G__18715;
i__18700_18704 = G__18716;
continue;
} else {
var child_18717 = cljs.core.first.call(null,seq__18697_18711__$1);
frag.appendChild(child_18717);

var G__18718 = cljs.core.next.call(null,seq__18697_18711__$1);
var G__18719 = null;
var G__18720 = (0);
var G__18721 = (0);
seq__18697_18701 = G__18718;
chunk__18698_18702 = G__18719;
count__18699_18703 = G__18720;
i__18700_18704 = G__18721;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents)){
f.call(null,cljs.core.first.call(null,parents),first_child);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__18691_SHARP_,p2__18692_SHARP_){
return f.call(null,p1__18691_SHARP_,p2__18692_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var args18722 = [];
var len__8561__auto___18725 = arguments.length;
var i__8562__auto___18726 = (0);
while(true){
if((i__8562__auto___18726 < len__8561__auto___18725)){
args18722.push((arguments[i__8562__auto___18726]));

var G__18727 = (i__8562__auto___18726 + (1));
i__8562__auto___18726 = G__18727;
continue;
} else {
}
break;
}

var G__18724 = args18722.length;
switch (G__18724) {
case 1:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18722.length)].join('')));

}
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_item.call(null,nl,(0));
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,nl.item(n),domina.lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.lazy_nl_via_item.cljs$lang$maxFixedArity = 2;

domina.lazy_nl_via_array_ref = (function domina$lazy_nl_via_array_ref(var_args){
var args18729 = [];
var len__8561__auto___18732 = arguments.length;
var i__8562__auto___18733 = (0);
while(true){
if((i__8562__auto___18733 < len__8561__auto___18732)){
args18729.push((arguments[i__8562__auto___18733]));

var G__18734 = (i__8562__auto___18733 + (1));
i__8562__auto___18733 = G__18734;
continue;
} else {
}
break;
}

var G__18731 = args18729.length;
switch (G__18731) {
case 1:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18729.length)].join('')));

}
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_array_ref.call(null,nl,(0));
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,(nl[n]),domina.lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.lazy_nl_via_array_ref.cljs$lang$maxFixedArity = 2;

/**
 * A lazy seq view of a js/NodeList, or other array-like javascript things
 */
domina.lazy_nodelist = (function domina$lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.lazy_nl_via_item.call(null,nl);
} else {
return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function domina$array_like_QMARK_(obj){
var and__7436__auto__ = obj;
if(cljs.core.truth_(and__7436__auto__)){
var and__7436__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__7436__auto____$1){
return obj.length;
} else {
return and__7436__auto____$1;
}
} else {
return and__7436__auto__;
}
});
/**
 * Some versions of IE have things that are like arrays in that they
 *   respond to .length, but are not arrays nor NodeSets. This returns a
 *   real sequence view of such objects. If passed an object that is not
 *   a logical sequence at all, returns a single-item seq containing the
 *   object.
 */
domina.normalize_seq = (function domina$normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((list_thing == null)))?((((list_thing.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === list_thing.cljs$core$ISeqable$)))?true:(((!list_thing.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing))){
return cljs.core.seq.call(null,list_thing);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing))){
return domina.lazy_nodelist.call(null,list_thing);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["string"] = true);

(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));

(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));

(domina.DomContent["_"] = true);

(domina.nodes["_"] = (function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === content.cljs$core$ISeqable$)))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.seq.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return domina.lazy_nodelist.call(null,content);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

(domina.single_node["_"] = (function (content){
if((content == null)){
return null;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === content.cljs$core$ISeqable$)))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.first.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return content.item((0));
} else {
return content;

}
}
}
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

NodeList.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

StaticNodeList.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});

HTMLCollection.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
});

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.lazy_nodelist.call(null,coll__$1);
});
} else {
}

//# sourceMappingURL=domina.js.map