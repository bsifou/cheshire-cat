// Compiled by ClojureScript 1.9.473 {}
goog.provide('domina.css');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
goog.require('goog.dom.query');
domina.css.root_element = (function domina$css$root_element(){
return (goog.dom.getElementsByTagNameAndClass("html")[(0)]);
});
/**
 * Returns content based on a css selector expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
 */
domina.css.sel = (function domina$css$sel(var_args){
var args18748 = [];
var len__8561__auto___18754 = arguments.length;
var i__8562__auto___18755 = (0);
while(true){
if((i__8562__auto___18755 < len__8561__auto___18754)){
args18748.push((arguments[i__8562__auto___18755]));

var G__18756 = (i__8562__auto___18755 + (1));
i__8562__auto___18755 = G__18756;
continue;
} else {
}
break;
}

var G__18750 = args18748.length;
switch (G__18750) {
case 1:
return domina.css.sel.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.css.sel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18748.length)].join('')));

}
});

domina.css.sel.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return domina.css.sel.call(null,domina.css.root_element.call(null),expr);
});

domina.css.sel.cljs$core$IFn$_invoke$arity$2 = (function (base,expr){
if(typeof domina.css.t_domina$css18751 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.DomContent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
domina.css.t_domina$css18751 = (function (base,expr,meta18752){
this.base = base;
this.expr = expr;
this.meta18752 = meta18752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.css.t_domina$css18751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18753,meta18752__$1){
var self__ = this;
var _18753__$1 = this;
return (new domina.css.t_domina$css18751(self__.base,self__.expr,meta18752__$1));
});

domina.css.t_domina$css18751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18753){
var self__ = this;
var _18753__$1 = this;
return self__.meta18752;
});

domina.css.t_domina$css18751.prototype.domina$DomContent$ = cljs.core.PROTOCOL_SENTINEL;

domina.css.t_domina$css18751.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__18746_SHARP_){
return domina.normalize_seq.call(null,goog.dom.query(self__.expr,p1__18746_SHARP_));
});})(___$1))
,domina.nodes.call(null,self__.base));
});

domina.css.t_domina$css18751.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__18747_SHARP_){
return domina.normalize_seq.call(null,goog.dom.query(self__.expr,p1__18747_SHARP_));
});})(___$1))
,domina.nodes.call(null,self__.base))));
});

domina.css.t_domina$css18751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null),new cljs.core.Symbol(null,"meta18752","meta18752",1003682893,null)], null);
});

domina.css.t_domina$css18751.cljs$lang$type = true;

domina.css.t_domina$css18751.cljs$lang$ctorStr = "domina.css/t_domina$css18751";

domina.css.t_domina$css18751.cljs$lang$ctorPrWriter = (function (this__8059__auto__,writer__8060__auto__,opt__8061__auto__){
return cljs.core._write.call(null,writer__8060__auto__,"domina.css/t_domina$css18751");
});

domina.css.__GT_t_domina$css18751 = (function domina$css$__GT_t_domina$css18751(base__$1,expr__$1,meta18752){
return (new domina.css.t_domina$css18751(base__$1,expr__$1,meta18752));
});

}

return (new domina.css.t_domina$css18751(base,expr,cljs.core.PersistentArrayMap.EMPTY));
});

domina.css.sel.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=css.js.map