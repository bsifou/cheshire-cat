// Compiled by ClojureScript 1.9.473 {}
goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
domina.xpath.select_node_STAR_ = (function domina$xpath$select_node_STAR_(path,node,technique_1,technique_2){
var doc = goog.dom.getOwnerDocument(node);
if(cljs.core.truth_((function (){var and__7436__auto__ = node.selectSingleNode;
if(cljs.core.truth_(and__7436__auto__)){
return doc.setProperty;
} else {
return and__7436__auto__;
}
})())){
doc.setProperty("SelectionLanguage","XPath");

return technique_1.call(null,node,path);
} else {
if(cljs.core.truth_(doc.evaluate)){
return technique_2.call(null,null,doc,node,path);
} else {
throw (new Error("Could not find XPath support in this browser."));

}
}
});
/**
 * Selects a single node using an XPath expression and a root node
 */
domina.xpath.select_node = (function domina$xpath$select_node(expr,node){
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node__$1,expr__$1){
return node__$1.selectSingleNode(expr__$1);
}),(function (resolver,doc,node__$1,expr__$1){
var result = doc.evaluate(expr__$1,node__$1,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);
return result.singleNodeValue;
}));
});
/**
 * Selects multiple nodes using an XPath expression and a root node
 */
domina.xpath.select_nodes = (function domina$xpath$select_nodes(expr,node){
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node__$1,expr__$1){
return node__$1.selectNodes(expr__$1);
}),(function (resolver,doc,node__$1,expr__$1){
var result = doc.evaluate(expr__$1,node__$1,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var num_results = result.snapshotLength;
var i = (0);
var acc = null;
while(true){
if((i < num_results)){
var G__18222 = (i + (1));
var G__18223 = cljs.core.cons.call(null,result.snapshotItem(i),acc);
i = G__18222;
acc = G__18223;
continue;
} else {
return acc;
}
break;
}
}));
});
domina.xpath.root_element = (function domina$xpath$root_element(){
return (goog.dom.getElementsByTagNameAndClass("html")[(0)]);
});
/**
 * Returns content based on an xpath expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
 */
domina.xpath.xpath = (function domina$xpath$xpath(var_args){
var args18224 = [];
var len__8561__auto___18230 = arguments.length;
var i__8562__auto___18231 = (0);
while(true){
if((i__8562__auto___18231 < len__8561__auto___18230)){
args18224.push((arguments[i__8562__auto___18231]));

var G__18232 = (i__8562__auto___18231 + (1));
i__8562__auto___18231 = G__18232;
continue;
} else {
}
break;
}

var G__18226 = args18224.length;
switch (G__18226) {
case 1:
return domina.xpath.xpath.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18224.length)].join('')));

}
});

domina.xpath.xpath.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return domina.xpath.xpath.call(null,domina.xpath.root_element.call(null),expr);
});

domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2 = (function (base,expr){
if(typeof domina.xpath.t_domina$xpath18227 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.DomContent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
domina.xpath.t_domina$xpath18227 = (function (base,expr,meta18228){
this.base = base;
this.expr = expr;
this.meta18228 = meta18228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.xpath.t_domina$xpath18227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18229,meta18228__$1){
var self__ = this;
var _18229__$1 = this;
return (new domina.xpath.t_domina$xpath18227(self__.base,self__.expr,meta18228__$1));
});

domina.xpath.t_domina$xpath18227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18229){
var self__ = this;
var _18229__$1 = this;
return self__.meta18228;
});

domina.xpath.t_domina$xpath18227.prototype.domina$DomContent$ = cljs.core.PROTOCOL_SENTINEL;

domina.xpath.t_domina$xpath18227.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.mapcat.call(null,cljs.core.partial.call(null,domina.xpath.select_nodes,self__.expr),domina.nodes.call(null,self__.base));
});

domina.xpath.t_domina$xpath18227.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.partial.call(null,domina.xpath.select_node,self__.expr),domina.nodes.call(null,self__.base))));
});

domina.xpath.t_domina$xpath18227.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null),new cljs.core.Symbol(null,"meta18228","meta18228",-1826500724,null)], null);
});

domina.xpath.t_domina$xpath18227.cljs$lang$type = true;

domina.xpath.t_domina$xpath18227.cljs$lang$ctorStr = "domina.xpath/t_domina$xpath18227";

domina.xpath.t_domina$xpath18227.cljs$lang$ctorPrWriter = (function (this__8059__auto__,writer__8060__auto__,opt__8061__auto__){
return cljs.core._write.call(null,writer__8060__auto__,"domina.xpath/t_domina$xpath18227");
});

domina.xpath.__GT_t_domina$xpath18227 = (function domina$xpath$__GT_t_domina$xpath18227(base__$1,expr__$1,meta18228){
return (new domina.xpath.t_domina$xpath18227(base__$1,expr__$1,meta18228));
});

}

return (new domina.xpath.t_domina$xpath18227(base,expr,cljs.core.PersistentArrayMap.EMPTY));
});

domina.xpath.xpath.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=xpath.js.map