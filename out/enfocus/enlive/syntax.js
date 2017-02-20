// Compiled by ClojureScript 1.9.473 {}
goog.provide('enfocus.enlive.syntax');
goog.require('cljs.core');
enfocus.enlive.syntax.sel_to_str = (function enfocus$enlive$syntax$sel_to_str(input){
var item = cljs.core.first.call(null,input);
var rest = cljs.core.rest.call(null,input);
var end = ((cljs.core.empty_QMARK_.call(null,rest))?cljs.core.list(cljs.core.List.EMPTY):enfocus.enlive.syntax.sel_to_str.call(null,rest));
if((item instanceof cljs.core.Keyword)){
return cljs.core.map.call(null,((function (item,rest,end){
return (function (p1__18125_SHARP_){
return cljs.core.conj.call(null,p1__18125_SHARP_,cljs.core.name.call(null,item));
});})(item,rest,end))
,end);
} else {
if(typeof item === 'string'){
return cljs.core.map.call(null,((function (item,rest,end){
return (function (p1__18126_SHARP_){
return cljs.core.conj.call(null,p1__18126_SHARP_,item);
});})(item,rest,end))
,end);
} else {
if(cljs.core.set_QMARK_.call(null,item)){
return cljs.core.reduce.call(null,((function (item,rest,end){
return (function (r1,it){
return cljs.core.concat.call(null,r1,cljs.core.map.call(null,((function (item,rest,end){
return (function (p1__18127_SHARP_){
return cljs.core.conj.call(null,p1__18127_SHARP_,it);
});})(item,rest,end))
,end));
});})(item,rest,end))
,cljs.core.PersistentVector.EMPTY,cljs.core.flatten.call(null,enfocus.enlive.syntax.sel_to_str.call(null,item)));
} else {
if(cljs.core.coll_QMARK_.call(null,item)){
var x1 = enfocus.enlive.syntax.sel_to_str.call(null,item);
var sub = cljs.core.map.call(null,((function (x1,item,rest,end){
return (function (p1__18128_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__18128_SHARP_);
});})(x1,item,rest,end))
,enfocus.enlive.syntax.sel_to_str.call(null,item));
var iter__8236__auto__ = ((function (x1,sub,item,rest,end){
return (function enfocus$enlive$syntax$sel_to_str_$_iter__18135(s__18136){
return (new cljs.core.LazySeq(null,((function (x1,sub,item,rest,end){
return (function (){
var s__18136__$1 = s__18136;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__18136__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var s = cljs.core.first.call(null,xs__5205__auto__);
var iterys__8232__auto__ = ((function (s__18136__$1,s,xs__5205__auto__,temp__4657__auto__,x1,sub,item,rest,end){
return (function enfocus$enlive$syntax$sel_to_str_$_iter__18135_$_iter__18137(s__18138){
return (new cljs.core.LazySeq(null,((function (s__18136__$1,s,xs__5205__auto__,temp__4657__auto__,x1,sub,item,rest,end){
return (function (){
var s__18138__$1 = s__18138;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__18138__$1);
if(temp__4657__auto____$1){
var s__18138__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18138__$2)){
var c__8234__auto__ = cljs.core.chunk_first.call(null,s__18138__$2);
var size__8235__auto__ = cljs.core.count.call(null,c__8234__auto__);
var b__18140 = cljs.core.chunk_buffer.call(null,size__8235__auto__);
if((function (){var i__18139 = (0);
while(true){
if((i__18139 < size__8235__auto__)){
var e = cljs.core._nth.call(null,c__8234__auto__,i__18139);
cljs.core.chunk_append.call(null,b__18140,(function (){
cljs.core.println.call(null,s,e);

return cljs.core.conj.call(null,e,s);
})()
);

var G__18141 = (i__18139 + (1));
i__18139 = G__18141;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18140),enfocus$enlive$syntax$sel_to_str_$_iter__18135_$_iter__18137.call(null,cljs.core.chunk_rest.call(null,s__18138__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18140),null);
}
} else {
var e = cljs.core.first.call(null,s__18138__$2);
return cljs.core.cons.call(null,(function (){
cljs.core.println.call(null,s,e);

return cljs.core.conj.call(null,e,s);
})()
,enfocus$enlive$syntax$sel_to_str_$_iter__18135_$_iter__18137.call(null,cljs.core.rest.call(null,s__18138__$2)));
}
} else {
return null;
}
break;
}
});})(s__18136__$1,s,xs__5205__auto__,temp__4657__auto__,x1,sub,item,rest,end))
,null,null));
});})(s__18136__$1,s,xs__5205__auto__,temp__4657__auto__,x1,sub,item,rest,end))
;
var fs__8233__auto__ = cljs.core.seq.call(null,iterys__8232__auto__.call(null,end));
if(fs__8233__auto__){
return cljs.core.concat.call(null,fs__8233__auto__,enfocus$enlive$syntax$sel_to_str_$_iter__18135.call(null,cljs.core.rest.call(null,s__18136__$1)));
} else {
var G__18142 = cljs.core.rest.call(null,s__18136__$1);
s__18136__$1 = G__18142;
continue;
}
} else {
return null;
}
break;
}
});})(x1,sub,item,rest,end))
,null,null));
});})(x1,sub,item,rest,end))
;
return iter__8236__auto__.call(null,sub);
} else {
return input;

}
}
}
}
});
enfocus.enlive.syntax.convert = (function enfocus$enlive$syntax$convert(sel){
if(typeof sel === 'string'){
return sel;
} else {
var temp__4655__auto__ = enfocus.enlive.syntax.sel_to_str.call(null,sel);
if(cljs.core.truth_(temp__4655__auto__)){
var ors = temp__4655__auto__;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.apply.call(null,cljs.core.concat,cljs.core.interpose.call(null,",",ors))));
} else {
return null;
}
}
});
enfocus.enlive.syntax.attr_pairs = (function enfocus$enlive$syntax$attr_pairs(op,elms){
var ts = (function (p__18147){
var vec__18148 = p__18147;
var x = cljs.core.nth.call(null,vec__18148,(0),null);
var y = cljs.core.nth.call(null,vec__18148,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,x)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op),cljs.core.str.cljs$core$IFn$_invoke$arity$1("='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),cljs.core.str.cljs$core$IFn$_invoke$arity$1("']")].join('');
});
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,ts,cljs.core.partition.call(null,(2),elms)));
});
enfocus.enlive.syntax.attr_QMARK_ = (function enfocus$enlive$syntax$attr_QMARK_(var_args){
var args__8568__auto__ = [];
var len__8561__auto___18153 = arguments.length;
var i__8562__auto___18154 = (0);
while(true){
if((i__8562__auto___18154 < len__8561__auto___18153)){
args__8568__auto__.push((arguments[i__8562__auto___18154]));

var G__18155 = (i__8562__auto___18154 + (1));
i__8562__auto___18154 = G__18155;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return enfocus.enlive.syntax.attr_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});

enfocus.enlive.syntax.attr_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (elms){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__18151_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,p1__18151_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
}),elms));
});

enfocus.enlive.syntax.attr_QMARK_.cljs$lang$maxFixedArity = (0);

enfocus.enlive.syntax.attr_QMARK_.cljs$lang$applyTo = (function (seq18152){
return enfocus.enlive.syntax.attr_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18152));
});

enfocus.enlive.syntax.attr_EQ_ = (function enfocus$enlive$syntax$attr_EQ_(var_args){
var args__8568__auto__ = [];
var len__8561__auto___18157 = arguments.length;
var i__8562__auto___18158 = (0);
while(true){
if((i__8562__auto___18158 < len__8561__auto___18157)){
args__8568__auto__.push((arguments[i__8562__auto___18158]));

var G__18159 = (i__8562__auto___18158 + (1));
i__8562__auto___18158 = G__18159;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return enfocus.enlive.syntax.attr_EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});

enfocus.enlive.syntax.attr_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"",elms);
});

enfocus.enlive.syntax.attr_EQ_.cljs$lang$maxFixedArity = (0);

enfocus.enlive.syntax.attr_EQ_.cljs$lang$applyTo = (function (seq18156){
return enfocus.enlive.syntax.attr_EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18156));
});

enfocus.enlive.syntax.attr_has = (function enfocus$enlive$syntax$attr_has(var_args){
var args__8568__auto__ = [];
var len__8561__auto___18162 = arguments.length;
var i__8562__auto___18163 = (0);
while(true){
if((i__8562__auto___18163 < len__8561__auto___18162)){
args__8568__auto__.push((arguments[i__8562__auto___18163]));

var G__18164 = (i__8562__auto___18163 + (1));
i__8562__auto___18163 = G__18164;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((1) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((1)),(0),null)):null);
return enfocus.enlive.syntax.attr_has.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8569__auto__);
});

enfocus.enlive.syntax.attr_has.cljs$core$IFn$_invoke$arity$variadic = (function (x,vals){
var ts = (function (y){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,x)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("~='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),cljs.core.str.cljs$core$IFn$_invoke$arity$1("']")].join('');
});
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,ts,vals));
});

enfocus.enlive.syntax.attr_has.cljs$lang$maxFixedArity = (1);

enfocus.enlive.syntax.attr_has.cljs$lang$applyTo = (function (seq18160){
var G__18161 = cljs.core.first.call(null,seq18160);
var seq18160__$1 = cljs.core.next.call(null,seq18160);
return enfocus.enlive.syntax.attr_has.cljs$core$IFn$_invoke$arity$variadic(G__18161,seq18160__$1);
});

enfocus.enlive.syntax.attr_starts = (function enfocus$enlive$syntax$attr_starts(var_args){
var args__8568__auto__ = [];
var len__8561__auto___18166 = arguments.length;
var i__8562__auto___18167 = (0);
while(true){
if((i__8562__auto___18167 < len__8561__auto___18166)){
args__8568__auto__.push((arguments[i__8562__auto___18167]));

var G__18168 = (i__8562__auto___18167 + (1));
i__8562__auto___18167 = G__18168;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return enfocus.enlive.syntax.attr_starts.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});

enfocus.enlive.syntax.attr_starts.cljs$core$IFn$_invoke$arity$variadic = (function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"^",elms);
});

enfocus.enlive.syntax.attr_starts.cljs$lang$maxFixedArity = (0);

enfocus.enlive.syntax.attr_starts.cljs$lang$applyTo = (function (seq18165){
return enfocus.enlive.syntax.attr_starts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18165));
});

enfocus.enlive.syntax.attr_ends = (function enfocus$enlive$syntax$attr_ends(var_args){
var args__8568__auto__ = [];
var len__8561__auto___18170 = arguments.length;
var i__8562__auto___18171 = (0);
while(true){
if((i__8562__auto___18171 < len__8561__auto___18170)){
args__8568__auto__.push((arguments[i__8562__auto___18171]));

var G__18172 = (i__8562__auto___18171 + (1));
i__8562__auto___18171 = G__18172;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return enfocus.enlive.syntax.attr_ends.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});

enfocus.enlive.syntax.attr_ends.cljs$core$IFn$_invoke$arity$variadic = (function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"$",elms);
});

enfocus.enlive.syntax.attr_ends.cljs$lang$maxFixedArity = (0);

enfocus.enlive.syntax.attr_ends.cljs$lang$applyTo = (function (seq18169){
return enfocus.enlive.syntax.attr_ends.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18169));
});

enfocus.enlive.syntax.attr_contains = (function enfocus$enlive$syntax$attr_contains(var_args){
var args__8568__auto__ = [];
var len__8561__auto___18174 = arguments.length;
var i__8562__auto___18175 = (0);
while(true){
if((i__8562__auto___18175 < len__8561__auto___18174)){
args__8568__auto__.push((arguments[i__8562__auto___18175]));

var G__18176 = (i__8562__auto___18175 + (1));
i__8562__auto___18175 = G__18176;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return enfocus.enlive.syntax.attr_contains.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});

enfocus.enlive.syntax.attr_contains.cljs$core$IFn$_invoke$arity$variadic = (function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"*",elms);
});

enfocus.enlive.syntax.attr_contains.cljs$lang$maxFixedArity = (0);

enfocus.enlive.syntax.attr_contains.cljs$lang$applyTo = (function (seq18173){
return enfocus.enlive.syntax.attr_contains.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18173));
});

enfocus.enlive.syntax.attr_BAR__EQ_ = (function enfocus$enlive$syntax$attr_BAR__EQ_(var_args){
var args__8568__auto__ = [];
var len__8561__auto___18178 = arguments.length;
var i__8562__auto___18179 = (0);
while(true){
if((i__8562__auto___18179 < len__8561__auto___18178)){
args__8568__auto__.push((arguments[i__8562__auto___18179]));

var G__18180 = (i__8562__auto___18179 + (1));
i__8562__auto___18179 = G__18180;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return enfocus.enlive.syntax.attr_BAR__EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});

enfocus.enlive.syntax.attr_BAR__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (elms){
return enfocus.enlive.syntax.attr_pairs.call(null,"|",elms);
});

enfocus.enlive.syntax.attr_BAR__EQ_.cljs$lang$maxFixedArity = (0);

enfocus.enlive.syntax.attr_BAR__EQ_.cljs$lang$applyTo = (function (seq18177){
return enfocus.enlive.syntax.attr_BAR__EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18177));
});

enfocus.enlive.syntax.nth_op = (function enfocus$enlive$syntax$nth_op(var_args){
var args18181 = [];
var len__8561__auto___18184 = arguments.length;
var i__8562__auto___18185 = (0);
while(true){
if((i__8562__auto___18185 < len__8561__auto___18184)){
args18181.push((arguments[i__8562__auto___18185]));

var G__18186 = (i__8562__auto___18185 + (1));
i__8562__auto___18185 = G__18186;
continue;
} else {
}
break;
}

var G__18183 = args18181.length;
switch (G__18183) {
case 2:
return enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18181.length)].join('')));

}
});

enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$2 = (function (op,x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(":nth-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op),cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
});

enfocus.enlive.syntax.nth_op.cljs$core$IFn$_invoke$arity$3 = (function (op,x,y){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(":nth-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op),cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((y > (0)))?"+":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('');
});

enfocus.enlive.syntax.nth_op.cljs$lang$maxFixedArity = 3;

enfocus.enlive.syntax.nth_child = (function enfocus$enlive$syntax$nth_child(var_args){
var args18188 = [];
var len__8561__auto___18191 = arguments.length;
var i__8562__auto___18192 = (0);
while(true){
if((i__8562__auto___18192 < len__8561__auto___18191)){
args18188.push((arguments[i__8562__auto___18192]));

var G__18193 = (i__8562__auto___18192 + (1));
i__8562__auto___18192 = G__18193;
continue;
} else {
}
break;
}

var G__18190 = args18188.length;
switch (G__18190) {
case 1:
return enfocus.enlive.syntax.nth_child.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.enlive.syntax.nth_child.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18188.length)].join('')));

}
});

enfocus.enlive.syntax.nth_child.cljs$core$IFn$_invoke$arity$1 = (function (x){
return enfocus.enlive.syntax.nth_op.call(null,"child",x);
});

enfocus.enlive.syntax.nth_child.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.call(null,"child",x,y);
});

enfocus.enlive.syntax.nth_child.cljs$lang$maxFixedArity = 2;

enfocus.enlive.syntax.nth_last_child = (function enfocus$enlive$syntax$nth_last_child(var_args){
var args18195 = [];
var len__8561__auto___18198 = arguments.length;
var i__8562__auto___18199 = (0);
while(true){
if((i__8562__auto___18199 < len__8561__auto___18198)){
args18195.push((arguments[i__8562__auto___18199]));

var G__18200 = (i__8562__auto___18199 + (1));
i__8562__auto___18199 = G__18200;
continue;
} else {
}
break;
}

var G__18197 = args18195.length;
switch (G__18197) {
case 1:
return enfocus.enlive.syntax.nth_last_child.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.enlive.syntax.nth_last_child.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18195.length)].join('')));

}
});

enfocus.enlive.syntax.nth_last_child.cljs$core$IFn$_invoke$arity$1 = (function (x){
return enfocus.enlive.syntax.nth_op.call(null,"last-child",x);
});

enfocus.enlive.syntax.nth_last_child.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.call(null,"last-child",x,y);
});

enfocus.enlive.syntax.nth_last_child.cljs$lang$maxFixedArity = 2;

enfocus.enlive.syntax.nth_of_type = (function enfocus$enlive$syntax$nth_of_type(var_args){
var args18202 = [];
var len__8561__auto___18205 = arguments.length;
var i__8562__auto___18206 = (0);
while(true){
if((i__8562__auto___18206 < len__8561__auto___18205)){
args18202.push((arguments[i__8562__auto___18206]));

var G__18207 = (i__8562__auto___18206 + (1));
i__8562__auto___18206 = G__18207;
continue;
} else {
}
break;
}

var G__18204 = args18202.length;
switch (G__18204) {
case 1:
return enfocus.enlive.syntax.nth_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.enlive.syntax.nth_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18202.length)].join('')));

}
});

enfocus.enlive.syntax.nth_of_type.cljs$core$IFn$_invoke$arity$1 = (function (x){
return enfocus.enlive.syntax.nth_op.call(null,"of-type",x);
});

enfocus.enlive.syntax.nth_of_type.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.call(null,"of-type",x,y);
});

enfocus.enlive.syntax.nth_of_type.cljs$lang$maxFixedArity = 2;

enfocus.enlive.syntax.nth_last_of_type = (function enfocus$enlive$syntax$nth_last_of_type(var_args){
var args18209 = [];
var len__8561__auto___18212 = arguments.length;
var i__8562__auto___18213 = (0);
while(true){
if((i__8562__auto___18213 < len__8561__auto___18212)){
args18209.push((arguments[i__8562__auto___18213]));

var G__18214 = (i__8562__auto___18213 + (1));
i__8562__auto___18213 = G__18214;
continue;
} else {
}
break;
}

var G__18211 = args18209.length;
switch (G__18211) {
case 1:
return enfocus.enlive.syntax.nth_last_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return enfocus.enlive.syntax.nth_last_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18209.length)].join('')));

}
});

enfocus.enlive.syntax.nth_last_of_type.cljs$core$IFn$_invoke$arity$1 = (function (x){
return enfocus.enlive.syntax.nth_op.call(null,"last-of-type",x);
});

enfocus.enlive.syntax.nth_last_of_type.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return enfocus.enlive.syntax.nth_op.call(null,"last-of-type",x,y);
});

enfocus.enlive.syntax.nth_last_of_type.cljs$lang$maxFixedArity = 2;

enfocus.enlive.syntax.but = (function enfocus$enlive$syntax$but(var_args){
var args__8568__auto__ = [];
var len__8561__auto___18217 = arguments.length;
var i__8562__auto___18218 = (0);
while(true){
if((i__8562__auto___18218 < len__8561__auto___18217)){
args__8568__auto__.push((arguments[i__8562__auto___18218]));

var G__18219 = (i__8562__auto___18218 + (1));
i__8562__auto___18218 = G__18219;
continue;
} else {
}
break;
}

var argseq__8569__auto__ = ((((0) < args__8568__auto__.length))?(new cljs.core.IndexedSeq(args__8568__auto__.slice((0)),(0),null)):null);
return enfocus.enlive.syntax.but.cljs$core$IFn$_invoke$arity$variadic(argseq__8569__auto__);
});

enfocus.enlive.syntax.but.cljs$core$IFn$_invoke$arity$variadic = (function (sel){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(enfocus.enlive.syntax.convert.call(null,sel)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
});

enfocus.enlive.syntax.but.cljs$lang$maxFixedArity = (0);

enfocus.enlive.syntax.but.cljs$lang$applyTo = (function (seq18216){
return enfocus.enlive.syntax.but.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18216));
});


//# sourceMappingURL=syntax.js.map