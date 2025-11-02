// Compiled by ClojureScript 1.10.597 {}
goog.provide('secretary.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');

/**
 * @interface
 */
secretary.core.IRouteMatches = function(){};

secretary.core.route_matches = (function secretary$core$route_matches(this$,route){
if((((!((this$ == null)))) && ((!((this$.secretary$core$IRouteMatches$route_matches$arity$2 == null)))))){
return this$.secretary$core$IRouteMatches$route_matches$arity$2(this$,route);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (secretary.core.route_matches[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,this$,route);
} else {
var m__4485__auto__ = (secretary.core.route_matches["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,this$,route);
} else {
throw cljs.core.missing_protocol.call(null,"IRouteMatches.route-matches",this$);
}
}
}
});


/**
 * @interface
 */
secretary.core.IRouteValue = function(){};

secretary.core.route_value = (function secretary$core$route_value(this$){
if((((!((this$ == null)))) && ((!((this$.secretary$core$IRouteValue$route_value$arity$1 == null)))))){
return this$.secretary$core$IRouteValue$route_value$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (secretary.core.route_value[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,this$);
} else {
var m__4485__auto__ = (secretary.core.route_value["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRouteValue.route-value",this$);
}
}
}
});


/**
 * @interface
 */
secretary.core.IRenderRoute = function(){};

secretary.core.render_route = (function secretary$core$render_route(var_args){
var G__24992 = arguments.length;
switch (G__24992) {
case 1:
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(secretary.core.render_route.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((((!((this$ == null)))) && ((!((this$.secretary$core$IRenderRoute$render_route$arity$1 == null)))))){
return this$.secretary$core$IRenderRoute$render_route$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (secretary.core.render_route[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,this$);
} else {
var m__4485__auto__ = (secretary.core.render_route["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderRoute.render-route",this$);
}
}
}
}));

(secretary.core.render_route.cljs$core$IFn$_invoke$arity$2 = (function (this$,params){
if((((!((this$ == null)))) && ((!((this$.secretary$core$IRenderRoute$render_route$arity$2 == null)))))){
return this$.secretary$core$IRenderRoute$render_route$arity$2(this$,params);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (secretary.core.render_route[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,this$,params);
} else {
var m__4485__auto__ = (secretary.core.render_route["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,this$,params);
} else {
throw cljs.core.missing_protocol.call(null,"IRenderRoute.render-route",this$);
}
}
}
}));

(secretary.core.render_route.cljs$lang$maxFixedArity = 2);


secretary.core._STAR_config_STAR_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),""], null));
/**
 * Gets a value for *config* at path.
 */
secretary.core.get_config = (function secretary$core$get_config(path){
var path__$1 = ((cljs.core.sequential_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.get_in.call(null,cljs.core.deref.call(null,secretary.core._STAR_config_STAR_),path__$1);
});
/**
 * Associates a value val for *config* at path.
 */
secretary.core.set_config_BANG_ = (function secretary$core$set_config_BANG_(path,val){
var path__$1 = ((cljs.core.sequential_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
return cljs.core.swap_BANG_.call(null,secretary.core._STAR_config_STAR_,cljs.core.assoc_in,path__$1,val);
});
secretary.core.encode = encodeURIComponent;
if((typeof secretary !== 'undefined') && (typeof secretary.core !== 'undefined') && (typeof secretary.core.encode_pair !== 'undefined')){
} else {
/**
 * Given a key and a value return and encoded key-value pair.
 */
secretary.core.encode_pair = (function (){var method_table__4672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"secretary.core","encode-pair"),(function (p__24994){
var vec__24995 = p__24994;
var k = cljs.core.nth.call(null,vec__24995,(0),null);
var v = cljs.core.nth.call(null,vec__24995,(1),null);
if(((cljs.core.sequential_QMARK_.call(null,v)) || (cljs.core.set_QMARK_.call(null,v)))){
return new cljs.core.Keyword("secretary.core","sequential","secretary.core/sequential",-347187207);
} else {
if((function (){var or__4185__auto__ = cljs.core.map_QMARK_.call(null,v);
if(or__4185__auto__){
return or__4185__auto__;
} else {
if((!((v == null)))){
if((((v.cljs$lang$protocol_mask$partition0$ & (67108864))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IRecord$)))){
return true;
} else {
if((!v.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,v);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,v);
}
}
})()){
return new cljs.core.Keyword("secretary.core","map","secretary.core/map",-31086646);
} else {
return null;
}
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
secretary.core.key_index = (function secretary$core$key_index(var_args){
var G__25001 = arguments.length;
switch (G__25001) {
case 1:
return secretary.core.key_index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return secretary.core.key_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(secretary.core.key_index.cljs$core$IFn$_invoke$arity$1 = (function (k){
return [cljs.core.name.call(null,k),"[]"].join('');
}));

(secretary.core.key_index.cljs$core$IFn$_invoke$arity$2 = (function (k,index){
return [cljs.core.name.call(null,k),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index),"]"].join('');
}));

(secretary.core.key_index.cljs$lang$maxFixedArity = 2);

cljs.core._add_method.call(null,secretary.core.encode_pair,new cljs.core.Keyword("secretary.core","sequential","secretary.core/sequential",-347187207),(function (p__25003){
var vec__25004 = p__25003;
var k = cljs.core.nth.call(null,vec__25004,(0),null);
var v = cljs.core.nth.call(null,vec__25004,(1),null);
var encoded = cljs.core.map_indexed.call(null,(function (i,x){
var pair = ((cljs.core.coll_QMARK_.call(null,x))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.call(null,k,i),x], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.call(null,k),x], null));
return secretary.core.encode_pair.call(null,pair);
}),v);
return clojure.string.join.call(null,"&",encoded);
}));
cljs.core._add_method.call(null,secretary.core.encode_pair,new cljs.core.Keyword("secretary.core","map","secretary.core/map",-31086646),(function (p__25007){
var vec__25008 = p__25007;
var k = cljs.core.nth.call(null,vec__25008,(0),null);
var v = cljs.core.nth.call(null,vec__25008,(1),null);
var encoded = cljs.core.map.call(null,(function (p__25011){
var vec__25012 = p__25011;
var ik = cljs.core.nth.call(null,vec__25012,(0),null);
var iv = cljs.core.nth.call(null,vec__25012,(1),null);
return secretary.core.encode_pair.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secretary.core.key_index.call(null,k,cljs.core.name.call(null,ik)),iv], null));
}),v);
return clojure.string.join.call(null,"&",encoded);
}));
cljs.core._add_method.call(null,secretary.core.encode_pair,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__25015){
var vec__25016 = p__25015;
var k = cljs.core.nth.call(null,vec__25016,(0),null);
var v = cljs.core.nth.call(null,vec__25016,(1),null);
return [cljs.core.name.call(null,k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(secretary.core.encode.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}));
/**
 * Convert a map of query parameters into url encoded string.
 */
secretary.core.encode_query_params = (function secretary$core$encode_query_params(query_params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,secretary.core.encode_pair,query_params));
});
/**
 * Like js/encodeURIComponent excepts ignore slashes.
 */
secretary.core.encode_uri = (function secretary$core$encode_uri(uri){
return clojure.string.join.call(null,"/",cljs.core.map.call(null,secretary.core.encode,clojure.string.split.call(null,uri,/\//)));
});
secretary.core.decode = decodeURIComponent;
/**
 * Parse a value from a serialized query-string key index. If the
 *   index value is empty 0 is returned, if it's a digit it returns the
 *   js/parseInt value, otherwise it returns the extracted index.
 */
secretary.core.parse_path = (function secretary$core$parse_path(path){
var index_re = /\[([^\]]*)\]*/;
var parts = cljs.core.re_seq.call(null,index_re,path);
return cljs.core.map.call(null,(function (p__25019){
var vec__25020 = p__25019;
var _ = cljs.core.nth.call(null,vec__25020,(0),null);
var part = cljs.core.nth.call(null,vec__25020,(1),null);
if(cljs.core.empty_QMARK_.call(null,part)){
return (0);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/\d+/,part))){
return parseInt(part);
} else {
return part;

}
}
}),parts);
});
/**
 * Return a key path for a serialized query-string entry.
 * 
 *   Ex.
 * 
 *  (key-parse "foo[][a][][b]")
 *  ;; => ("foo" 0 "a" 0 "b")
 *   
 */
secretary.core.key_parse = (function secretary$core$key_parse(k){
var re = /([^\[\]]+)((?:\[[^\]]*\])*)?/;
var vec__25023 = cljs.core.re_matches.call(null,re,k);
var _ = cljs.core.nth.call(null,vec__25023,(0),null);
var key = cljs.core.nth.call(null,vec__25023,(1),null);
var path = cljs.core.nth.call(null,vec__25023,(2),null);
var parsed_path = (cljs.core.truth_(path)?secretary.core.parse_path.call(null,path):null);
return cljs.core.cons.call(null,key,parsed_path);
});
/**
 * Like assoc-in but numbers in path create vectors instead of maps.
 * 
 *   Ex.
 * 
 *  (assoc-in-query-params {} ["foo" 0] 1)
 *  ;; => {"foo" [1]}
 * 
 *  (assoc-in-query-params {} ["foo" 0 "a"] 1)
 *  ;; => {"foo" [{"a" 1}]}
 *   
 */
secretary.core.assoc_in_query_params = (function secretary$core$assoc_in_query_params(m,path,v){
var heads = (function (xs){
return cljs.core.map_indexed.call(null,(function (i,_){
return cljs.core.take.call(null,(i + (1)),xs);
}),xs);
});
var hs = heads.call(null,path);
var m__$1 = cljs.core.reduce.call(null,(function (m__$1,h){
if(((typeof cljs.core.last.call(null,h) === 'number') && ((!(cljs.core.vector_QMARK_.call(null,cljs.core.get_in.call(null,m__$1,cljs.core.butlast.call(null,h)))))))){
return cljs.core.assoc_in.call(null,m__$1,cljs.core.butlast.call(null,h),cljs.core.PersistentVector.EMPTY);
} else {
return m__$1;
}
}),m,hs);
if((cljs.core.last.call(null,path) === (0))){
return cljs.core.update_in.call(null,m__$1,cljs.core.butlast.call(null,path),cljs.core.conj,v);
} else {
return cljs.core.assoc_in.call(null,m__$1,path,v);
}
});
/**
 * Extract a map of query parameters from a query string.
 */
secretary.core.decode_query_params = (function secretary$core$decode_query_params(query_string){
var parts = clojure.string.split.call(null,query_string,/&/);
var params = cljs.core.reduce.call(null,(function (m,part){
var vec__25026 = clojure.string.split.call(null,part,/=/,(2));
var k = cljs.core.nth.call(null,vec__25026,(0),null);
var v = cljs.core.nth.call(null,vec__25026,(1),null);
return secretary.core.assoc_in_query_params.call(null,m,secretary.core.key_parse.call(null,k),secretary.core.decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,parts);
var params__$1 = clojure.walk.keywordize_keys.call(null,params);
return params__$1;
});
/**
 * Like re-matches but result is a always vector. If re does not
 *   capture matches then it will return a vector of [m m] as if it had a
 *   single capture. Other wise it maintains consistent behavior with
 *   re-matches. 
 */
secretary.core.re_matches_STAR_ = (function secretary$core$re_matches_STAR_(re,s){
var ms = cljs.core.re_matches.call(null,re,s);
if(cljs.core.truth_(ms)){
if(cljs.core.sequential_QMARK_.call(null,ms)){
return ms;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms,ms], null);
}
} else {
return null;
}
});
secretary.core.re_escape_chars = cljs.core.set.call(null,"\\.*+|?()[]{}$^");
secretary.core.re_escape = (function secretary$core$re_escape(s){
return cljs.core.reduce.call(null,(function (s__$1,c){
if(cljs.core.truth_(secretary.core.re_escape_chars.call(null,c))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1),"\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}),"",s);
});
/**
 * Attempt to lex a single token from s with clauses. Each clause is a
 *   pair of [regexp action] where action is a function. regexp is
 *   expected to begin with ^ and contain a single capture. If the
 *   attempt is successful a vector of [s-without-token (action capture)]
 *   is returned. Otherwise the result is nil.
 */
secretary.core.lex_STAR_ = (function secretary$core$lex_STAR_(s,clauses){
return cljs.core.some.call(null,(function (p__25029){
var vec__25030 = p__25029;
var re = cljs.core.nth.call(null,vec__25030,(0),null);
var action = cljs.core.nth.call(null,vec__25030,(1),null);
var temp__5735__auto__ = cljs.core.re_find.call(null,re,s);
if(cljs.core.truth_(temp__5735__auto__)){
var vec__25033 = temp__5735__auto__;
var m = cljs.core.nth.call(null,vec__25033,(0),null);
var c = cljs.core.nth.call(null,vec__25033,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,cljs.core.count.call(null,m)),action.call(null,c)], null);
} else {
return null;
}
}),clauses);
});
/**
 * Return a pair of [regex params]. regex is a compiled regular
 *   expression for matching routes. params is a list of route param
 *   names (:*, :id, etc.). 
 */
secretary.core.lex_route = (function secretary$core$lex_route(s,clauses){
var s__$1 = s;
var pattern = "";
var params = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.seq.call(null,s__$1)){
var vec__25042 = secretary.core.lex_STAR_.call(null,s__$1,clauses);
var s__$2 = cljs.core.nth.call(null,vec__25042,(0),null);
var vec__25045 = cljs.core.nth.call(null,vec__25042,(1),null);
var r = cljs.core.nth.call(null,vec__25045,(0),null);
var p = cljs.core.nth.call(null,vec__25045,(1),null);
var G__25048 = s__$2;
var G__25049 = [pattern,cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
var G__25050 = cljs.core.conj.call(null,params,p);
s__$1 = G__25048;
pattern = G__25049;
params = G__25050;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.re_pattern.call(null,["^",pattern,"$"].join('')),cljs.core.remove.call(null,cljs.core.nil_QMARK_,params)], null);
}
break;
}
});
/**
 * Given a route return an instance of IRouteMatches.
 */
secretary.core.compile_route = (function secretary$core$compile_route(orig_route){
var clauses = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\*([^\s.:*\/]*)/,(function (v){
var r = "(.*?)";
var p = ((cljs.core.seq.call(null,v))?cljs.core.keyword.call(null,v):new cljs.core.Keyword(null,"*","*",-1294732318));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\:([^\s.:*\/]+)/,(function (v){
var r = "([^,;?/]+)";
var p = cljs.core.keyword.call(null,v);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^([^:*]+)/,(function (v){
var r = secretary.core.re_escape.call(null,v);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null);
})], null)], null);
var vec__25051 = secretary.core.lex_route.call(null,orig_route,clauses);
var re = cljs.core.nth.call(null,vec__25051,(0),null);
var params = cljs.core.nth.call(null,vec__25051,(1),null);
if((typeof secretary !== 'undefined') && (typeof secretary.core !== 'undefined') && (typeof secretary.core.t_secretary$core25054 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {secretary.core.IRouteValue}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {secretary.core.IRouteMatches}
*/
secretary.core.t_secretary$core25054 = (function (orig_route,clauses,vec__25051,re,params,meta25055){
this.orig_route = orig_route;
this.clauses = clauses;
this.vec__25051 = vec__25051;
this.re = re;
this.params = params;
this.meta25055 = meta25055;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(secretary.core.t_secretary$core25054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25056,meta25055__$1){
var self__ = this;
var _25056__$1 = this;
return (new secretary.core.t_secretary$core25054(self__.orig_route,self__.clauses,self__.vec__25051,self__.re,self__.params,meta25055__$1));
}));

(secretary.core.t_secretary$core25054.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25056){
var self__ = this;
var _25056__$1 = this;
return self__.meta25055;
}));

(secretary.core.t_secretary$core25054.prototype.secretary$core$IRouteValue$ = cljs.core.PROTOCOL_SENTINEL);

(secretary.core.t_secretary$core25054.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.orig_route;
}));

(secretary.core.t_secretary$core25054.prototype.secretary$core$IRouteMatches$ = cljs.core.PROTOCOL_SENTINEL);

(secretary.core.t_secretary$core25054.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (_,route){
var self__ = this;
var ___$1 = this;
var temp__5735__auto__ = secretary.core.re_matches_STAR_.call(null,self__.re,route);
if(cljs.core.truth_(temp__5735__auto__)){
var vec__25057 = temp__5735__auto__;
var seq__25058 = cljs.core.seq.call(null,vec__25057);
var first__25059 = cljs.core.first.call(null,seq__25058);
var seq__25058__$1 = cljs.core.next.call(null,seq__25058);
var ___$2 = first__25059;
var ms = seq__25058__$1;
return cljs.core.merge_with.call(null,cljs.core.vector,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,self__.params,cljs.core.map.call(null,secretary.core.decode,ms))));
} else {
return null;
}
}));

(secretary.core.t_secretary$core25054.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"orig-route","orig-route",899103121,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null),new cljs.core.Symbol(null,"vec__25051","vec__25051",-208257309,null),new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"meta25055","meta25055",-975184149,null)], null);
}));

(secretary.core.t_secretary$core25054.cljs$lang$type = true);

(secretary.core.t_secretary$core25054.cljs$lang$ctorStr = "secretary.core/t_secretary$core25054");

(secretary.core.t_secretary$core25054.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"secretary.core/t_secretary$core25054");
}));

/**
 * Positional factory function for secretary.core/t_secretary$core25054.
 */
secretary.core.__GT_t_secretary$core25054 = (function secretary$core$compile_route_$___GT_t_secretary$core25054(orig_route__$1,clauses__$1,vec__25051__$1,re__$1,params__$1,meta25055){
return (new secretary.core.t_secretary$core25054(orig_route__$1,clauses__$1,vec__25051__$1,re__$1,params__$1,meta25055));
});

}

return (new secretary.core.t_secretary$core25054(orig_route,clauses,vec__25051,re,params,cljs.core.PersistentArrayMap.EMPTY));
});
secretary.core.render_route_STAR_ = (function secretary$core$render_route_STAR_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___25063 = arguments.length;
var i__4790__auto___25064 = (0);
while(true){
if((i__4790__auto___25064 < len__4789__auto___25063)){
args__4795__auto__.push((arguments[i__4790__auto___25064]));

var G__25065 = (i__4790__auto___25064 + (1));
i__4790__auto___25064 = G__25065;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(secretary.core.render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,args){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.secretary$core$IRenderRoute$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,secretary.core.IRenderRoute,obj):false)):cljs.core.native_satisfies_QMARK_.call(null,secretary.core.IRenderRoute,obj))){
return cljs.core.apply.call(null,secretary.core.render_route,obj,args);
} else {
return null;
}
}));

(secretary.core.render_route_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(secretary.core.render_route_STAR_.cljs$lang$applyTo = (function (seq25060){
var G__25061 = cljs.core.first.call(null,seq25060);
var seq25060__$1 = cljs.core.next.call(null,seq25060);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25061,seq25060__$1);
}));

secretary.core._STAR_routes_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
secretary.core.add_route_BANG_ = (function secretary$core$add_route_BANG_(obj,action){
var obj__$1 = ((typeof obj === 'string')?secretary.core.compile_route.call(null,obj):obj);
return cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj__$1,action], null));
});
secretary.core.remove_route_BANG_ = (function secretary$core$remove_route_BANG_(obj){
return cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,(function (rs){
return cljs.core.filterv.call(null,(function (p__25066){
var vec__25067 = p__25066;
var x = cljs.core.nth.call(null,vec__25067,(0),null);
var _ = cljs.core.nth.call(null,vec__25067,(1),null);
return cljs.core.not_EQ_.call(null,x,obj);
}),rs);
}));
});
secretary.core.reset_routes_BANG_ = (function secretary$core$reset_routes_BANG_(){
return cljs.core.reset_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.PersistentVector.EMPTY);
});
secretary.core.locate_route = (function secretary$core$locate_route(route){
return cljs.core.some.call(null,(function (p__25070){
var vec__25071 = p__25070;
var compiled_route = cljs.core.nth.call(null,vec__25071,(0),null);
var action = cljs.core.nth.call(null,vec__25071,(1),null);
var temp__5735__auto__ = secretary.core.route_matches.call(null,compiled_route,route);
if(cljs.core.truth_(temp__5735__auto__)){
var params = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"route","route",329891309),compiled_route], null);
} else {
return null;
}
}),cljs.core.deref.call(null,secretary.core._STAR_routes_STAR_));
});
/**
 * Returns original route value as set in defroute when passed a URI path.
 */
secretary.core.locate_route_value = (function secretary$core$locate_route_value(uri){
return secretary.core.route_value.call(null,new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(secretary.core.locate_route.call(null,uri)));
});
secretary.core.prefix = (function secretary$core$prefix(){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(secretary.core.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",-265908465)], null)));
});
secretary.core.uri_without_prefix = (function secretary$core$uri_without_prefix(uri){
return clojure.string.replace.call(null,uri,cljs.core.re_pattern.call(null,["^",secretary.core.prefix.call(null)].join('')),"");
});
/**
 * Ensures that the uri has a leading slash
 */
secretary.core.uri_with_leading_slash = (function secretary$core$uri_with_leading_slash(uri){
if(cljs.core._EQ_.call(null,"/",cljs.core.first.call(null,uri))){
return uri;
} else {
return ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join('');
}
});
/**
 * Dispatch an action for a given route if it matches the URI path.
 */
secretary.core.dispatch_BANG_ = (function secretary$core$dispatch_BANG_(uri){
var vec__25074 = clojure.string.split.call(null,secretary.core.uri_without_prefix.call(null,uri),/\?/);
var uri_path = cljs.core.nth.call(null,vec__25074,(0),null);
var query_string = cljs.core.nth.call(null,vec__25074,(1),null);
var uri_path__$1 = secretary.core.uri_with_leading_slash.call(null,uri_path);
var query_params = (cljs.core.truth_(query_string)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",900640534),secretary.core.decode_query_params.call(null,query_string)], null):null);
var map__25077 = secretary.core.locate_route.call(null,uri_path__$1);
var map__25077__$1 = (((((!((map__25077 == null))))?(((((map__25077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25077):map__25077);
var action = cljs.core.get.call(null,map__25077__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var params = cljs.core.get.call(null,map__25077__$1,new cljs.core.Keyword(null,"params","params",710516235));
var action__$1 = (function (){var or__4185__auto__ = action;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.identity;
}
})();
var params__$1 = cljs.core.merge.call(null,params,query_params);
return action__$1.call(null,params__$1);
});
secretary.core.invalid_params = (function secretary$core$invalid_params(params,validations){
return cljs.core.reduce.call(null,(function (m,p__25079){
var vec__25080 = p__25079;
var key = cljs.core.nth.call(null,vec__25080,(0),null);
var validation = cljs.core.nth.call(null,vec__25080,(1),null);
var value = cljs.core.get.call(null,params,key);
if(cljs.core.truth_(cljs.core.re_matches.call(null,validation,value))){
return m;
} else {
return cljs.core.assoc.call(null,m,key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,validation], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),validations));
});
secretary.core.params_valid_QMARK_ = (function secretary$core$params_valid_QMARK_(params,validations){
return cljs.core.empty_QMARK_.call(null,secretary.core.invalid_params.call(null,params,validations));
});
goog.object.set(secretary.core.IRouteMatches,"string",true);

goog.object.set(secretary.core.route_matches,"string",(function (this$,route){
return secretary.core.route_matches.call(null,secretary.core.compile_route.call(null,this$),route);
}));

(RegExp.prototype.secretary$core$IRouteMatches$ = cljs.core.PROTOCOL_SENTINEL);

(RegExp.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (this$,route){
var this$__$1 = this;
var temp__5735__auto__ = secretary.core.re_matches_STAR_.call(null,this$__$1,route);
if(cljs.core.truth_(temp__5735__auto__)){
var vec__25083 = temp__5735__auto__;
var seq__25084 = cljs.core.seq.call(null,vec__25083);
var first__25085 = cljs.core.first.call(null,seq__25084);
var seq__25084__$1 = cljs.core.next.call(null,seq__25084);
var _ = first__25085;
var ms = seq__25084__$1;
return cljs.core.vec.call(null,ms);
} else {
return null;
}
}));

(cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (p__25086,route){
var vec__25087 = p__25086;
var seq__25088 = cljs.core.seq.call(null,vec__25087);
var first__25089 = cljs.core.first.call(null,seq__25088);
var seq__25088__$1 = cljs.core.next.call(null,seq__25088);
var route_string = first__25089;
var validations = seq__25088__$1;
var vec__25090 = this;
var seq__25091 = cljs.core.seq.call(null,vec__25090);
var first__25092 = cljs.core.first.call(null,seq__25091);
var seq__25091__$1 = cljs.core.next.call(null,seq__25091);
var route_string__$1 = first__25092;
var validations__$1 = seq__25091__$1;
var params = secretary.core.route_matches.call(null,secretary.core.compile_route.call(null,route_string__$1),route);
if(secretary.core.params_valid_QMARK_.call(null,params,validations__$1)){
return params;
} else {
return null;
}
}));
goog.object.set(secretary.core.IRouteValue,"string",true);

goog.object.set(secretary.core.route_value,"string",(function (this$){
return secretary.core.route_value.call(null,secretary.core.compile_route.call(null,this$));
}));

(RegExp.prototype.secretary$core$IRouteValue$ = cljs.core.PROTOCOL_SENTINEL);

(RegExp.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));

(cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.secretary$core$IRouteValue$route_value$arity$1 = (function (p__25093){
var vec__25094 = p__25093;
var seq__25095 = cljs.core.seq.call(null,vec__25094);
var first__25096 = cljs.core.first.call(null,seq__25095);
var seq__25095__$1 = cljs.core.next.call(null,seq__25095);
var route_string = first__25096;
var validations = seq__25095__$1;
var vec__25097 = this;
var seq__25098 = cljs.core.seq.call(null,vec__25097);
var first__25099 = cljs.core.first.call(null,seq__25098);
var seq__25098__$1 = cljs.core.next.call(null,seq__25098);
var route_string__$1 = first__25099;
var validations__$1 = seq__25098__$1;
return cljs.core.vec.call(null,cljs.core.cons.call(null,secretary.core.route_value.call(null,route_string__$1),validations__$1));
}));
goog.object.set(secretary.core.IRenderRoute,"string",true);

goog.object.set(secretary.core.render_route,"string",(function() {
var G__25109 = null;
var G__25109__1 = (function (this$){
return secretary.core.render_route.call(null,this$,cljs.core.PersistentArrayMap.EMPTY);
});
var G__25109__2 = (function (this$,params){
var map__25100 = params;
var map__25100__$1 = (((((!((map__25100 == null))))?(((((map__25100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25100):map__25100);
var m = map__25100__$1;
var query_params = cljs.core.get.call(null,map__25100__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var a = cljs.core.atom.call(null,m);
var path = this$.replace((new RegExp(":[^\\s.:*/]+|\\*[^\\s.:*/]*","g")),(function ($1){
var lookup = cljs.core.keyword.call(null,((cljs.core._EQ_.call(null,$1,"*"))?$1:cljs.core.subs.call(null,$1,(1))));
var v = cljs.core.get.call(null,cljs.core.deref.call(null,a),lookup);
var replacement = ((cljs.core.sequential_QMARK_.call(null,v))?(function (){
cljs.core.swap_BANG_.call(null,a,cljs.core.assoc,lookup,cljs.core.next.call(null,v));

return secretary.core.encode_uri.call(null,cljs.core.first.call(null,v));
})()
:(cljs.core.truth_(v)?secretary.core.encode_uri.call(null,v):$1));
return replacement;
}));
var path__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(secretary.core.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",-265908465)], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
var temp__5733__auto__ = (function (){var and__4174__auto__ = query_params;
if(cljs.core.truth_(and__4174__auto__)){
return secretary.core.encode_query_params.call(null,query_params);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var query_string = temp__5733__auto__;
return [path__$1,"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_string)].join('');
} else {
return path__$1;
}
});
G__25109 = function(this$,params){
switch(arguments.length){
case 1:
return G__25109__1.call(this,this$);
case 2:
return G__25109__2.call(this,this$,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__25109.cljs$core$IFn$_invoke$arity$1 = G__25109__1;
G__25109.cljs$core$IFn$_invoke$arity$2 = G__25109__2;
return G__25109;
})()
);

(cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$1 = (function (this$){
var this$__$1 = this;
return secretary.core.render_route.call(null,this$__$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.PersistentVector.prototype.secretary$core$IRenderRoute$render_route$arity$2 = (function (p__25102,params){
var vec__25103 = p__25102;
var seq__25104 = cljs.core.seq.call(null,vec__25103);
var first__25105 = cljs.core.first.call(null,seq__25104);
var seq__25104__$1 = cljs.core.next.call(null,seq__25104);
var route_string = first__25105;
var validations = seq__25104__$1;
var vec__25106 = this;
var seq__25107 = cljs.core.seq.call(null,vec__25106);
var first__25108 = cljs.core.first.call(null,seq__25107);
var seq__25107__$1 = cljs.core.next.call(null,seq__25107);
var route_string__$1 = first__25108;
var validations__$1 = seq__25107__$1;
var invalid = secretary.core.invalid_params.call(null,params,validations__$1);
if(cljs.core.empty_QMARK_.call(null,invalid)){
return secretary.core.render_route.call(null,route_string__$1,params);
} else {
throw cljs.core.ex_info.call(null,"Could not build route: invalid params",invalid);
}
}));

//# sourceMappingURL=core.js.map?rel=1761389400570
