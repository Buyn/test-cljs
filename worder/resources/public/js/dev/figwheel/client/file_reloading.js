// Compiled by ClojureScript 1.10.597 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4185__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4185__auto__){
return or__4185__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4185__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return ((goog.string.startsWith("clojure.",name)) || (goog.string.startsWith("goog.",name)));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28082_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28082_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (v,k,_){
return goog.object.forEach(v,(function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28083 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28084 = null;
var count__28085 = (0);
var i__28086 = (0);
while(true){
if((i__28086 < count__28085)){
var n = cljs.core._nth.call(null,chunk__28084,i__28086);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28087 = seq__28083;
var G__28088 = chunk__28084;
var G__28089 = count__28085;
var G__28090 = (i__28086 + (1));
seq__28083 = G__28087;
chunk__28084 = G__28088;
count__28085 = G__28089;
i__28086 = G__28090;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28083);
if(temp__5735__auto__){
var seq__28083__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28083__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__28083__$1);
var G__28091 = cljs.core.chunk_rest.call(null,seq__28083__$1);
var G__28092 = c__4609__auto__;
var G__28093 = cljs.core.count.call(null,c__4609__auto__);
var G__28094 = (0);
seq__28083 = G__28091;
chunk__28084 = G__28092;
count__28085 = G__28093;
i__28086 = G__28094;
continue;
} else {
var n = cljs.core.first.call(null,seq__28083__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28095 = cljs.core.next.call(null,seq__28083__$1);
var G__28096 = null;
var G__28097 = (0);
var G__28098 = (0);
seq__28083 = G__28095;
chunk__28084 = G__28096;
count__28085 = G__28097;
i__28086 = G__28098;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__28099){
var vec__28100 = p__28099;
var _ = cljs.core.nth.call(null,vec__28100,(0),null);
var v = cljs.core.nth.call(null,vec__28100,(1),null);
var and__4174__auto__ = v;
if(cljs.core.truth_(and__4174__auto__)){
return v.call(null,dep);
} else {
return and__4174__auto__;
}
}),cljs.core.filter.call(null,(function (p__28103){
var vec__28104 = p__28103;
var k = cljs.core.nth.call(null,vec__28104,(0),null);
var v = cljs.core.nth.call(null,vec__28104,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28116_28124 = cljs.core.seq.call(null,deps);
var chunk__28117_28125 = null;
var count__28118_28126 = (0);
var i__28119_28127 = (0);
while(true){
if((i__28119_28127 < count__28118_28126)){
var dep_28128 = cljs.core._nth.call(null,chunk__28117_28125,i__28119_28127);
if(cljs.core.truth_((function (){var and__4174__auto__ = dep_28128;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28128));
} else {
return and__4174__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28128,(depth + (1)),state);
} else {
}


var G__28129 = seq__28116_28124;
var G__28130 = chunk__28117_28125;
var G__28131 = count__28118_28126;
var G__28132 = (i__28119_28127 + (1));
seq__28116_28124 = G__28129;
chunk__28117_28125 = G__28130;
count__28118_28126 = G__28131;
i__28119_28127 = G__28132;
continue;
} else {
var temp__5735__auto___28133 = cljs.core.seq.call(null,seq__28116_28124);
if(temp__5735__auto___28133){
var seq__28116_28134__$1 = temp__5735__auto___28133;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28116_28134__$1)){
var c__4609__auto___28135 = cljs.core.chunk_first.call(null,seq__28116_28134__$1);
var G__28136 = cljs.core.chunk_rest.call(null,seq__28116_28134__$1);
var G__28137 = c__4609__auto___28135;
var G__28138 = cljs.core.count.call(null,c__4609__auto___28135);
var G__28139 = (0);
seq__28116_28124 = G__28136;
chunk__28117_28125 = G__28137;
count__28118_28126 = G__28138;
i__28119_28127 = G__28139;
continue;
} else {
var dep_28140 = cljs.core.first.call(null,seq__28116_28134__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = dep_28140;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28140));
} else {
return and__4174__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28140,(depth + (1)),state);
} else {
}


var G__28141 = cljs.core.next.call(null,seq__28116_28134__$1);
var G__28142 = null;
var G__28143 = (0);
var G__28144 = (0);
seq__28116_28124 = G__28141;
chunk__28117_28125 = G__28142;
count__28118_28126 = G__28143;
i__28119_28127 = G__28144;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28120){
var vec__28121 = p__28120;
var seq__28122 = cljs.core.seq.call(null,vec__28121);
var first__28123 = cljs.core.first.call(null,seq__28122);
var seq__28122__$1 = cljs.core.next.call(null,seq__28122);
var x = first__28123;
var xs = seq__28122__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__28107_SHARP_){
return clojure.set.difference.call(null,p1__28107_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28145 = cljs.core.seq.call(null,provides);
var chunk__28146 = null;
var count__28147 = (0);
var i__28148 = (0);
while(true){
if((i__28148 < count__28147)){
var prov = cljs.core._nth.call(null,chunk__28146,i__28148);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28157_28165 = cljs.core.seq.call(null,requires);
var chunk__28158_28166 = null;
var count__28159_28167 = (0);
var i__28160_28168 = (0);
while(true){
if((i__28160_28168 < count__28159_28167)){
var req_28169 = cljs.core._nth.call(null,chunk__28158_28166,i__28160_28168);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28169,prov);


var G__28170 = seq__28157_28165;
var G__28171 = chunk__28158_28166;
var G__28172 = count__28159_28167;
var G__28173 = (i__28160_28168 + (1));
seq__28157_28165 = G__28170;
chunk__28158_28166 = G__28171;
count__28159_28167 = G__28172;
i__28160_28168 = G__28173;
continue;
} else {
var temp__5735__auto___28174 = cljs.core.seq.call(null,seq__28157_28165);
if(temp__5735__auto___28174){
var seq__28157_28175__$1 = temp__5735__auto___28174;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28157_28175__$1)){
var c__4609__auto___28176 = cljs.core.chunk_first.call(null,seq__28157_28175__$1);
var G__28177 = cljs.core.chunk_rest.call(null,seq__28157_28175__$1);
var G__28178 = c__4609__auto___28176;
var G__28179 = cljs.core.count.call(null,c__4609__auto___28176);
var G__28180 = (0);
seq__28157_28165 = G__28177;
chunk__28158_28166 = G__28178;
count__28159_28167 = G__28179;
i__28160_28168 = G__28180;
continue;
} else {
var req_28181 = cljs.core.first.call(null,seq__28157_28175__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28181,prov);


var G__28182 = cljs.core.next.call(null,seq__28157_28175__$1);
var G__28183 = null;
var G__28184 = (0);
var G__28185 = (0);
seq__28157_28165 = G__28182;
chunk__28158_28166 = G__28183;
count__28159_28167 = G__28184;
i__28160_28168 = G__28185;
continue;
}
} else {
}
}
break;
}


var G__28186 = seq__28145;
var G__28187 = chunk__28146;
var G__28188 = count__28147;
var G__28189 = (i__28148 + (1));
seq__28145 = G__28186;
chunk__28146 = G__28187;
count__28147 = G__28188;
i__28148 = G__28189;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__28145);
if(temp__5735__auto__){
var seq__28145__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28145__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__28145__$1);
var G__28190 = cljs.core.chunk_rest.call(null,seq__28145__$1);
var G__28191 = c__4609__auto__;
var G__28192 = cljs.core.count.call(null,c__4609__auto__);
var G__28193 = (0);
seq__28145 = G__28190;
chunk__28146 = G__28191;
count__28147 = G__28192;
i__28148 = G__28193;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28145__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28161_28194 = cljs.core.seq.call(null,requires);
var chunk__28162_28195 = null;
var count__28163_28196 = (0);
var i__28164_28197 = (0);
while(true){
if((i__28164_28197 < count__28163_28196)){
var req_28198 = cljs.core._nth.call(null,chunk__28162_28195,i__28164_28197);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28198,prov);


var G__28199 = seq__28161_28194;
var G__28200 = chunk__28162_28195;
var G__28201 = count__28163_28196;
var G__28202 = (i__28164_28197 + (1));
seq__28161_28194 = G__28199;
chunk__28162_28195 = G__28200;
count__28163_28196 = G__28201;
i__28164_28197 = G__28202;
continue;
} else {
var temp__5735__auto___28203__$1 = cljs.core.seq.call(null,seq__28161_28194);
if(temp__5735__auto___28203__$1){
var seq__28161_28204__$1 = temp__5735__auto___28203__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28161_28204__$1)){
var c__4609__auto___28205 = cljs.core.chunk_first.call(null,seq__28161_28204__$1);
var G__28206 = cljs.core.chunk_rest.call(null,seq__28161_28204__$1);
var G__28207 = c__4609__auto___28205;
var G__28208 = cljs.core.count.call(null,c__4609__auto___28205);
var G__28209 = (0);
seq__28161_28194 = G__28206;
chunk__28162_28195 = G__28207;
count__28163_28196 = G__28208;
i__28164_28197 = G__28209;
continue;
} else {
var req_28210 = cljs.core.first.call(null,seq__28161_28204__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28210,prov);


var G__28211 = cljs.core.next.call(null,seq__28161_28204__$1);
var G__28212 = null;
var G__28213 = (0);
var G__28214 = (0);
seq__28161_28194 = G__28211;
chunk__28162_28195 = G__28212;
count__28163_28196 = G__28213;
i__28164_28197 = G__28214;
continue;
}
} else {
}
}
break;
}


var G__28215 = cljs.core.next.call(null,seq__28145__$1);
var G__28216 = null;
var G__28217 = (0);
var G__28218 = (0);
seq__28145 = G__28215;
chunk__28146 = G__28216;
count__28147 = G__28217;
i__28148 = G__28218;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28219_28223 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28220_28224 = null;
var count__28221_28225 = (0);
var i__28222_28226 = (0);
while(true){
if((i__28222_28226 < count__28221_28225)){
var ns_28227 = cljs.core._nth.call(null,chunk__28220_28224,i__28222_28226);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28227);


var G__28228 = seq__28219_28223;
var G__28229 = chunk__28220_28224;
var G__28230 = count__28221_28225;
var G__28231 = (i__28222_28226 + (1));
seq__28219_28223 = G__28228;
chunk__28220_28224 = G__28229;
count__28221_28225 = G__28230;
i__28222_28226 = G__28231;
continue;
} else {
var temp__5735__auto___28232 = cljs.core.seq.call(null,seq__28219_28223);
if(temp__5735__auto___28232){
var seq__28219_28233__$1 = temp__5735__auto___28232;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28219_28233__$1)){
var c__4609__auto___28234 = cljs.core.chunk_first.call(null,seq__28219_28233__$1);
var G__28235 = cljs.core.chunk_rest.call(null,seq__28219_28233__$1);
var G__28236 = c__4609__auto___28234;
var G__28237 = cljs.core.count.call(null,c__4609__auto___28234);
var G__28238 = (0);
seq__28219_28223 = G__28235;
chunk__28220_28224 = G__28236;
count__28221_28225 = G__28237;
i__28222_28226 = G__28238;
continue;
} else {
var ns_28239 = cljs.core.first.call(null,seq__28219_28233__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28239);


var G__28240 = cljs.core.next.call(null,seq__28219_28233__$1);
var G__28241 = null;
var G__28242 = (0);
var G__28243 = (0);
seq__28219_28223 = G__28240;
chunk__28220_28224 = G__28241;
count__28221_28225 = G__28242;
i__28222_28226 = G__28243;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4185__auto__ = goog.require__;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__28244__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28244 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28245__i = 0, G__28245__a = new Array(arguments.length -  0);
while (G__28245__i < G__28245__a.length) {G__28245__a[G__28245__i] = arguments[G__28245__i + 0]; ++G__28245__i;}
  args = new cljs.core.IndexedSeq(G__28245__a,0,null);
} 
return G__28244__delegate.call(this,args);};
G__28244.cljs$lang$maxFixedArity = 0;
G__28244.cljs$lang$applyTo = (function (arglist__28246){
var args = cljs.core.seq(arglist__28246);
return G__28244__delegate(args);
});
G__28244.cljs$core$IFn$_invoke$arity$variadic = G__28244__delegate;
return G__28244;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28247_SHARP_,p2__28248_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28247_SHARP_)),p2__28248_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28249_SHARP_,p2__28250_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28249_SHARP_),p2__28250_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28251 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28251.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__28251.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__28251;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28252){if((e28252 instanceof Error)){
var e = e28252;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28252;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28253){if((e28253 instanceof Error)){
var e = e28253;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28253;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28254 = cljs.core._EQ_;
var expr__28255 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28254.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28255))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28254.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28255))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28254.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28255))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28257,callback){
var map__28258 = p__28257;
var map__28258__$1 = (((((!((map__28258 == null))))?(((((map__28258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28258):map__28258);
var file_msg = map__28258__$1;
var request_url = cljs.core.get.call(null,map__28258__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4185__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22827__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_28296){
var state_val_28297 = (state_28296[(1)]);
if((state_val_28297 === (7))){
var inst_28292 = (state_28296[(2)]);
var state_28296__$1 = state_28296;
var statearr_28298_28324 = state_28296__$1;
(statearr_28298_28324[(2)] = inst_28292);

(statearr_28298_28324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28297 === (1))){
var state_28296__$1 = state_28296;
var statearr_28299_28325 = state_28296__$1;
(statearr_28299_28325[(2)] = null);

(statearr_28299_28325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28297 === (4))){
var inst_28262 = (state_28296[(7)]);
var inst_28262__$1 = (state_28296[(2)]);
var state_28296__$1 = (function (){var statearr_28300 = state_28296;
(statearr_28300[(7)] = inst_28262__$1);

return statearr_28300;
})();
if(cljs.core.truth_(inst_28262__$1)){
var statearr_28301_28326 = state_28296__$1;
(statearr_28301_28326[(1)] = (5));

} else {
var statearr_28302_28327 = state_28296__$1;
(statearr_28302_28327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28297 === (15))){
var inst_28275 = (state_28296[(8)]);
var inst_28277 = (state_28296[(9)]);
var inst_28279 = inst_28277.call(null,inst_28275);
var state_28296__$1 = state_28296;
var statearr_28303_28328 = state_28296__$1;
(statearr_28303_28328[(2)] = inst_28279);

(statearr_28303_28328[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28297 === (13))){
var inst_28286 = (state_28296[(2)]);
var state_28296__$1 = state_28296;
var statearr_28304_28329 = state_28296__$1;
(statearr_28304_28329[(2)] = inst_28286);

(statearr_28304_28329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28297 === (6))){
var state_28296__$1 = state_28296;
var statearr_28305_28330 = state_28296__$1;
(statearr_28305_28330[(2)] = null);

(statearr_28305_28330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28297 === (17))){
var inst_28283 = (state_28296[(2)]);
var state_28296__$1 = state_28296;
var statearr_28306_28331 = state_28296__$1;
(statearr_28306_28331[(2)] = inst_28283);

(statearr_28306_28331[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28297 === (3))){
var inst_28294 = (state_28296[(2)]);
var state_28296__$1 = state_28296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28296__$1,inst_28294);
} else {
if((state_val_28297 === (12))){
var state_28296__$1 = state_28296;
var statearr_28307_28332 = state_28296__$1;
(statearr_28307_28332[(2)] = null);

(statearr_28307_28332[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28297 === (2))){
var state_28296__$1 = state_28296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28296__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28297 === (11))){
var inst_28267 = (state_28296[(10)]);
var inst_28273 = figwheel.client.file_reloading.blocking_load.call(null,inst_28267);
var state_28296__$1 = state_28296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28296__$1,(14),inst_28273);
} else {
if((state_val_28297 === (9))){
var inst_28267 = (state_28296[(10)]);
var state_28296__$1 = state_28296;
if(cljs.core.truth_(inst_28267)){
var statearr_28308_28333 = state_28296__$1;
(statearr_28308_28333[(1)] = (11));

} else {
var statearr_28309_28334 = state_28296__$1;
(statearr_28309_28334[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28297 === (5))){
var inst_28268 = (state_28296[(11)]);
var inst_28262 = (state_28296[(7)]);
var inst_28267 = cljs.core.nth.call(null,inst_28262,(0),null);
var inst_28268__$1 = cljs.core.nth.call(null,inst_28262,(1),null);
var state_28296__$1 = (function (){var statearr_28310 = state_28296;
(statearr_28310[(11)] = inst_28268__$1);

(statearr_28310[(10)] = inst_28267);

return statearr_28310;
})();
if(cljs.core.truth_(inst_28268__$1)){
var statearr_28311_28335 = state_28296__$1;
(statearr_28311_28335[(1)] = (8));

} else {
var statearr_28312_28336 = state_28296__$1;
(statearr_28312_28336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28297 === (14))){
var inst_28267 = (state_28296[(10)]);
var inst_28277 = (state_28296[(9)]);
var inst_28275 = (state_28296[(2)]);
var inst_28276 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28277__$1 = cljs.core.get.call(null,inst_28276,inst_28267);
var state_28296__$1 = (function (){var statearr_28313 = state_28296;
(statearr_28313[(8)] = inst_28275);

(statearr_28313[(9)] = inst_28277__$1);

return statearr_28313;
})();
if(cljs.core.truth_(inst_28277__$1)){
var statearr_28314_28337 = state_28296__$1;
(statearr_28314_28337[(1)] = (15));

} else {
var statearr_28315_28338 = state_28296__$1;
(statearr_28315_28338[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28297 === (16))){
var inst_28275 = (state_28296[(8)]);
var inst_28281 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28275);
var state_28296__$1 = state_28296;
var statearr_28316_28339 = state_28296__$1;
(statearr_28316_28339[(2)] = inst_28281);

(statearr_28316_28339[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28297 === (10))){
var inst_28288 = (state_28296[(2)]);
var state_28296__$1 = (function (){var statearr_28317 = state_28296;
(statearr_28317[(12)] = inst_28288);

return statearr_28317;
})();
var statearr_28318_28340 = state_28296__$1;
(statearr_28318_28340[(2)] = null);

(statearr_28318_28340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28297 === (8))){
var inst_28268 = (state_28296[(11)]);
var inst_28270 = eval(inst_28268);
var state_28296__$1 = state_28296;
var statearr_28319_28341 = state_28296__$1;
(statearr_28319_28341[(2)] = inst_28270);

(statearr_28319_28341[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$state_machine__22733__auto__ = null;
var figwheel$client$file_reloading$state_machine__22733__auto____0 = (function (){
var statearr_28320 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28320[(0)] = figwheel$client$file_reloading$state_machine__22733__auto__);

(statearr_28320[(1)] = (1));

return statearr_28320;
});
var figwheel$client$file_reloading$state_machine__22733__auto____1 = (function (state_28296){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_28296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e28321){if((e28321 instanceof Object)){
var ex__22736__auto__ = e28321;
var statearr_28322_28342 = state_28296;
(statearr_28322_28342[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28343 = state_28296;
state_28296 = G__28343;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22733__auto__ = function(state_28296){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22733__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22733__auto____1.call(this,state_28296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22733__auto____0;
figwheel$client$file_reloading$state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22733__auto____1;
return figwheel$client$file_reloading$state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_28323 = f__22828__auto__.call(null);
(statearr_28323[(6)] = c__22827__auto__);

return statearr_28323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));

return c__22827__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28345 = arguments.length;
switch (G__28345) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28347,callback){
var map__28348 = p__28347;
var map__28348__$1 = (((((!((map__28348 == null))))?(((((map__28348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28348):map__28348);
var file_msg = map__28348__$1;
var namespace = cljs.core.get.call(null,map__28348__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28350){
var map__28351 = p__28350;
var map__28351__$1 = (((((!((map__28351 == null))))?(((((map__28351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28351):map__28351);
var file_msg = map__28351__$1;
var namespace = cljs.core.get.call(null,map__28351__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28353){
var map__28354 = p__28353;
var map__28354__$1 = (((((!((map__28354 == null))))?(((((map__28354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28354):map__28354);
var file_msg = map__28354__$1;
var namespace = cljs.core.get.call(null,map__28354__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4185__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28356,callback){
var map__28357 = p__28356;
var map__28357__$1 = (((((!((map__28357 == null))))?(((((map__28357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28357):map__28357);
var file_msg = map__28357__$1;
var request_url = cljs.core.get.call(null,map__28357__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28357__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22827__auto___28407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_28392){
var state_val_28393 = (state_28392[(1)]);
if((state_val_28393 === (1))){
var inst_28366 = cljs.core.seq.call(null,files);
var inst_28367 = cljs.core.first.call(null,inst_28366);
var inst_28368 = cljs.core.next.call(null,inst_28366);
var inst_28369 = files;
var state_28392__$1 = (function (){var statearr_28394 = state_28392;
(statearr_28394[(7)] = inst_28367);

(statearr_28394[(8)] = inst_28368);

(statearr_28394[(9)] = inst_28369);

return statearr_28394;
})();
var statearr_28395_28408 = state_28392__$1;
(statearr_28395_28408[(2)] = null);

(statearr_28395_28408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (2))){
var inst_28375 = (state_28392[(10)]);
var inst_28369 = (state_28392[(9)]);
var inst_28374 = cljs.core.seq.call(null,inst_28369);
var inst_28375__$1 = cljs.core.first.call(null,inst_28374);
var inst_28376 = cljs.core.next.call(null,inst_28374);
var inst_28377 = (inst_28375__$1 == null);
var inst_28378 = cljs.core.not.call(null,inst_28377);
var state_28392__$1 = (function (){var statearr_28396 = state_28392;
(statearr_28396[(10)] = inst_28375__$1);

(statearr_28396[(11)] = inst_28376);

return statearr_28396;
})();
if(inst_28378){
var statearr_28397_28409 = state_28392__$1;
(statearr_28397_28409[(1)] = (4));

} else {
var statearr_28398_28410 = state_28392__$1;
(statearr_28398_28410[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (3))){
var inst_28390 = (state_28392[(2)]);
var state_28392__$1 = state_28392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28392__$1,inst_28390);
} else {
if((state_val_28393 === (4))){
var inst_28375 = (state_28392[(10)]);
var inst_28380 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28375);
var state_28392__$1 = state_28392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28392__$1,(7),inst_28380);
} else {
if((state_val_28393 === (5))){
var inst_28386 = cljs.core.async.close_BANG_.call(null,out);
var state_28392__$1 = state_28392;
var statearr_28399_28411 = state_28392__$1;
(statearr_28399_28411[(2)] = inst_28386);

(statearr_28399_28411[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (6))){
var inst_28388 = (state_28392[(2)]);
var state_28392__$1 = state_28392;
var statearr_28400_28412 = state_28392__$1;
(statearr_28400_28412[(2)] = inst_28388);

(statearr_28400_28412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (7))){
var inst_28376 = (state_28392[(11)]);
var inst_28382 = (state_28392[(2)]);
var inst_28383 = cljs.core.async.put_BANG_.call(null,out,inst_28382);
var inst_28369 = inst_28376;
var state_28392__$1 = (function (){var statearr_28401 = state_28392;
(statearr_28401[(12)] = inst_28383);

(statearr_28401[(9)] = inst_28369);

return statearr_28401;
})();
var statearr_28402_28413 = state_28392__$1;
(statearr_28402_28413[(2)] = null);

(statearr_28402_28413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22733__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22733__auto____0 = (function (){
var statearr_28403 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28403[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22733__auto__);

(statearr_28403[(1)] = (1));

return statearr_28403;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22733__auto____1 = (function (state_28392){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_28392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e28404){if((e28404 instanceof Object)){
var ex__22736__auto__ = e28404;
var statearr_28405_28414 = state_28392;
(statearr_28405_28414[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28415 = state_28392;
state_28392 = G__28415;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22733__auto__ = function(state_28392){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22733__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22733__auto____1.call(this,state_28392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22733__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22733__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_28406 = f__22828__auto__.call(null);
(statearr_28406[(6)] = c__22827__auto___28407);

return statearr_28406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28416,opts){
var map__28417 = p__28416;
var map__28417__$1 = (((((!((map__28417 == null))))?(((((map__28417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28417):map__28417);
var eval_body = cljs.core.get.call(null,map__28417__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28417__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4174__auto__ = eval_body;
if(cljs.core.truth_(and__4174__auto__)){
return typeof eval_body === 'string';
} else {
return and__4174__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28419){var e = e28419;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__28420_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28420_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28421){
var vec__28422 = p__28421;
var k = cljs.core.nth.call(null,vec__28422,(0),null);
var v = cljs.core.nth.call(null,vec__28422,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28425){
var vec__28426 = p__28425;
var k = cljs.core.nth.call(null,vec__28426,(0),null);
var v = cljs.core.nth.call(null,vec__28426,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28432,p__28433){
var map__28434 = p__28432;
var map__28434__$1 = (((((!((map__28434 == null))))?(((((map__28434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28434):map__28434);
var opts = map__28434__$1;
var before_jsload = cljs.core.get.call(null,map__28434__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28434__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28434__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28435 = p__28433;
var map__28435__$1 = (((((!((map__28435 == null))))?(((((map__28435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28435):map__28435);
var msg = map__28435__$1;
var files = cljs.core.get.call(null,map__28435__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28435__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28435__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22827__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__22828__auto__ = (function (){var switch__22732__auto__ = (function (state_28589){
var state_val_28590 = (state_28589[(1)]);
if((state_val_28590 === (7))){
var inst_28450 = (state_28589[(7)]);
var inst_28452 = (state_28589[(8)]);
var inst_28451 = (state_28589[(9)]);
var inst_28449 = (state_28589[(10)]);
var inst_28457 = cljs.core._nth.call(null,inst_28450,inst_28452);
var inst_28458 = figwheel.client.file_reloading.eval_body.call(null,inst_28457,opts);
var inst_28459 = (inst_28452 + (1));
var tmp28591 = inst_28450;
var tmp28592 = inst_28451;
var tmp28593 = inst_28449;
var inst_28449__$1 = tmp28593;
var inst_28450__$1 = tmp28591;
var inst_28451__$1 = tmp28592;
var inst_28452__$1 = inst_28459;
var state_28589__$1 = (function (){var statearr_28594 = state_28589;
(statearr_28594[(7)] = inst_28450__$1);

(statearr_28594[(8)] = inst_28452__$1);

(statearr_28594[(9)] = inst_28451__$1);

(statearr_28594[(11)] = inst_28458);

(statearr_28594[(10)] = inst_28449__$1);

return statearr_28594;
})();
var statearr_28595_28678 = state_28589__$1;
(statearr_28595_28678[(2)] = null);

(statearr_28595_28678[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (20))){
var inst_28492 = (state_28589[(12)]);
var inst_28500 = figwheel.client.file_reloading.sort_files.call(null,inst_28492);
var state_28589__$1 = state_28589;
var statearr_28596_28679 = state_28589__$1;
(statearr_28596_28679[(2)] = inst_28500);

(statearr_28596_28679[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (27))){
var state_28589__$1 = state_28589;
var statearr_28597_28680 = state_28589__$1;
(statearr_28597_28680[(2)] = null);

(statearr_28597_28680[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (1))){
var inst_28441 = (state_28589[(13)]);
var inst_28438 = before_jsload.call(null,files);
var inst_28439 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28440 = (function (){return (function (p1__28429_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28429_SHARP_);
});
})();
var inst_28441__$1 = cljs.core.filter.call(null,inst_28440,files);
var inst_28442 = cljs.core.not_empty.call(null,inst_28441__$1);
var state_28589__$1 = (function (){var statearr_28598 = state_28589;
(statearr_28598[(14)] = inst_28439);

(statearr_28598[(13)] = inst_28441__$1);

(statearr_28598[(15)] = inst_28438);

return statearr_28598;
})();
if(cljs.core.truth_(inst_28442)){
var statearr_28599_28681 = state_28589__$1;
(statearr_28599_28681[(1)] = (2));

} else {
var statearr_28600_28682 = state_28589__$1;
(statearr_28600_28682[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (24))){
var state_28589__$1 = state_28589;
var statearr_28601_28683 = state_28589__$1;
(statearr_28601_28683[(2)] = null);

(statearr_28601_28683[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (39))){
var inst_28542 = (state_28589[(16)]);
var state_28589__$1 = state_28589;
var statearr_28602_28684 = state_28589__$1;
(statearr_28602_28684[(2)] = inst_28542);

(statearr_28602_28684[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (46))){
var inst_28584 = (state_28589[(2)]);
var state_28589__$1 = state_28589;
var statearr_28603_28685 = state_28589__$1;
(statearr_28603_28685[(2)] = inst_28584);

(statearr_28603_28685[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (4))){
var inst_28486 = (state_28589[(2)]);
var inst_28487 = cljs.core.List.EMPTY;
var inst_28488 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28487);
var inst_28489 = (function (){return (function (p1__28430_SHARP_){
var and__4174__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28430_SHARP_);
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28430_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28430_SHARP_))));
} else {
return and__4174__auto__;
}
});
})();
var inst_28490 = cljs.core.filter.call(null,inst_28489,files);
var inst_28491 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28492 = cljs.core.concat.call(null,inst_28490,inst_28491);
var state_28589__$1 = (function (){var statearr_28604 = state_28589;
(statearr_28604[(17)] = inst_28488);

(statearr_28604[(12)] = inst_28492);

(statearr_28604[(18)] = inst_28486);

return statearr_28604;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28605_28686 = state_28589__$1;
(statearr_28605_28686[(1)] = (16));

} else {
var statearr_28606_28687 = state_28589__$1;
(statearr_28606_28687[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (15))){
var inst_28476 = (state_28589[(2)]);
var state_28589__$1 = state_28589;
var statearr_28607_28688 = state_28589__$1;
(statearr_28607_28688[(2)] = inst_28476);

(statearr_28607_28688[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (21))){
var inst_28502 = (state_28589[(19)]);
var inst_28502__$1 = (state_28589[(2)]);
var inst_28503 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28502__$1);
var state_28589__$1 = (function (){var statearr_28608 = state_28589;
(statearr_28608[(19)] = inst_28502__$1);

return statearr_28608;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28589__$1,(22),inst_28503);
} else {
if((state_val_28590 === (31))){
var inst_28587 = (state_28589[(2)]);
var state_28589__$1 = state_28589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28589__$1,inst_28587);
} else {
if((state_val_28590 === (32))){
var inst_28542 = (state_28589[(16)]);
var inst_28547 = inst_28542.cljs$lang$protocol_mask$partition0$;
var inst_28548 = (inst_28547 & (64));
var inst_28549 = inst_28542.cljs$core$ISeq$;
var inst_28550 = (cljs.core.PROTOCOL_SENTINEL === inst_28549);
var inst_28551 = ((inst_28548) || (inst_28550));
var state_28589__$1 = state_28589;
if(cljs.core.truth_(inst_28551)){
var statearr_28609_28689 = state_28589__$1;
(statearr_28609_28689[(1)] = (35));

} else {
var statearr_28610_28690 = state_28589__$1;
(statearr_28610_28690[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (40))){
var inst_28564 = (state_28589[(20)]);
var inst_28563 = (state_28589[(2)]);
var inst_28564__$1 = cljs.core.get.call(null,inst_28563,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28565 = cljs.core.get.call(null,inst_28563,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28566 = cljs.core.not_empty.call(null,inst_28564__$1);
var state_28589__$1 = (function (){var statearr_28611 = state_28589;
(statearr_28611[(20)] = inst_28564__$1);

(statearr_28611[(21)] = inst_28565);

return statearr_28611;
})();
if(cljs.core.truth_(inst_28566)){
var statearr_28612_28691 = state_28589__$1;
(statearr_28612_28691[(1)] = (41));

} else {
var statearr_28613_28692 = state_28589__$1;
(statearr_28613_28692[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (33))){
var state_28589__$1 = state_28589;
var statearr_28614_28693 = state_28589__$1;
(statearr_28614_28693[(2)] = false);

(statearr_28614_28693[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (13))){
var inst_28462 = (state_28589[(22)]);
var inst_28466 = cljs.core.chunk_first.call(null,inst_28462);
var inst_28467 = cljs.core.chunk_rest.call(null,inst_28462);
var inst_28468 = cljs.core.count.call(null,inst_28466);
var inst_28449 = inst_28467;
var inst_28450 = inst_28466;
var inst_28451 = inst_28468;
var inst_28452 = (0);
var state_28589__$1 = (function (){var statearr_28615 = state_28589;
(statearr_28615[(7)] = inst_28450);

(statearr_28615[(8)] = inst_28452);

(statearr_28615[(9)] = inst_28451);

(statearr_28615[(10)] = inst_28449);

return statearr_28615;
})();
var statearr_28616_28694 = state_28589__$1;
(statearr_28616_28694[(2)] = null);

(statearr_28616_28694[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (22))){
var inst_28505 = (state_28589[(23)]);
var inst_28502 = (state_28589[(19)]);
var inst_28510 = (state_28589[(24)]);
var inst_28506 = (state_28589[(25)]);
var inst_28505__$1 = (state_28589[(2)]);
var inst_28506__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28505__$1);
var inst_28507 = (function (){var all_files = inst_28502;
var res_SINGLEQUOTE_ = inst_28505__$1;
var res = inst_28506__$1;
return (function (p1__28431_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28431_SHARP_));
});
})();
var inst_28508 = cljs.core.filter.call(null,inst_28507,inst_28505__$1);
var inst_28509 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28510__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28509);
var inst_28511 = cljs.core.not_empty.call(null,inst_28510__$1);
var state_28589__$1 = (function (){var statearr_28617 = state_28589;
(statearr_28617[(23)] = inst_28505__$1);

(statearr_28617[(26)] = inst_28508);

(statearr_28617[(24)] = inst_28510__$1);

(statearr_28617[(25)] = inst_28506__$1);

return statearr_28617;
})();
if(cljs.core.truth_(inst_28511)){
var statearr_28618_28695 = state_28589__$1;
(statearr_28618_28695[(1)] = (23));

} else {
var statearr_28619_28696 = state_28589__$1;
(statearr_28619_28696[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (36))){
var state_28589__$1 = state_28589;
var statearr_28620_28697 = state_28589__$1;
(statearr_28620_28697[(2)] = false);

(statearr_28620_28697[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (41))){
var inst_28564 = (state_28589[(20)]);
var inst_28568 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28569 = cljs.core.map.call(null,inst_28568,inst_28564);
var inst_28570 = cljs.core.pr_str.call(null,inst_28569);
var inst_28571 = ["figwheel-no-load meta-data: ",inst_28570].join('');
var inst_28572 = figwheel.client.utils.log.call(null,inst_28571);
var state_28589__$1 = state_28589;
var statearr_28621_28698 = state_28589__$1;
(statearr_28621_28698[(2)] = inst_28572);

(statearr_28621_28698[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (43))){
var inst_28565 = (state_28589[(21)]);
var inst_28575 = (state_28589[(2)]);
var inst_28576 = cljs.core.not_empty.call(null,inst_28565);
var state_28589__$1 = (function (){var statearr_28622 = state_28589;
(statearr_28622[(27)] = inst_28575);

return statearr_28622;
})();
if(cljs.core.truth_(inst_28576)){
var statearr_28623_28699 = state_28589__$1;
(statearr_28623_28699[(1)] = (44));

} else {
var statearr_28624_28700 = state_28589__$1;
(statearr_28624_28700[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (29))){
var inst_28542 = (state_28589[(16)]);
var inst_28505 = (state_28589[(23)]);
var inst_28508 = (state_28589[(26)]);
var inst_28502 = (state_28589[(19)]);
var inst_28510 = (state_28589[(24)]);
var inst_28506 = (state_28589[(25)]);
var inst_28538 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28541 = (function (){var all_files = inst_28502;
var res_SINGLEQUOTE_ = inst_28505;
var res = inst_28506;
var files_not_loaded = inst_28508;
var dependencies_that_loaded = inst_28510;
return (function (p__28540){
var map__28625 = p__28540;
var map__28625__$1 = (((((!((map__28625 == null))))?(((((map__28625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28625):map__28625);
var namespace = cljs.core.get.call(null,map__28625__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_28542__$1 = cljs.core.group_by.call(null,inst_28541,inst_28508);
var inst_28544 = (inst_28542__$1 == null);
var inst_28545 = cljs.core.not.call(null,inst_28544);
var state_28589__$1 = (function (){var statearr_28627 = state_28589;
(statearr_28627[(16)] = inst_28542__$1);

(statearr_28627[(28)] = inst_28538);

return statearr_28627;
})();
if(inst_28545){
var statearr_28628_28701 = state_28589__$1;
(statearr_28628_28701[(1)] = (32));

} else {
var statearr_28629_28702 = state_28589__$1;
(statearr_28629_28702[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (44))){
var inst_28565 = (state_28589[(21)]);
var inst_28578 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28565);
var inst_28579 = cljs.core.pr_str.call(null,inst_28578);
var inst_28580 = ["not required: ",inst_28579].join('');
var inst_28581 = figwheel.client.utils.log.call(null,inst_28580);
var state_28589__$1 = state_28589;
var statearr_28630_28703 = state_28589__$1;
(statearr_28630_28703[(2)] = inst_28581);

(statearr_28630_28703[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (6))){
var inst_28483 = (state_28589[(2)]);
var state_28589__$1 = state_28589;
var statearr_28631_28704 = state_28589__$1;
(statearr_28631_28704[(2)] = inst_28483);

(statearr_28631_28704[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (28))){
var inst_28508 = (state_28589[(26)]);
var inst_28535 = (state_28589[(2)]);
var inst_28536 = cljs.core.not_empty.call(null,inst_28508);
var state_28589__$1 = (function (){var statearr_28632 = state_28589;
(statearr_28632[(29)] = inst_28535);

return statearr_28632;
})();
if(cljs.core.truth_(inst_28536)){
var statearr_28633_28705 = state_28589__$1;
(statearr_28633_28705[(1)] = (29));

} else {
var statearr_28634_28706 = state_28589__$1;
(statearr_28634_28706[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (25))){
var inst_28506 = (state_28589[(25)]);
var inst_28522 = (state_28589[(2)]);
var inst_28523 = cljs.core.not_empty.call(null,inst_28506);
var state_28589__$1 = (function (){var statearr_28635 = state_28589;
(statearr_28635[(30)] = inst_28522);

return statearr_28635;
})();
if(cljs.core.truth_(inst_28523)){
var statearr_28636_28707 = state_28589__$1;
(statearr_28636_28707[(1)] = (26));

} else {
var statearr_28637_28708 = state_28589__$1;
(statearr_28637_28708[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (34))){
var inst_28558 = (state_28589[(2)]);
var state_28589__$1 = state_28589;
if(cljs.core.truth_(inst_28558)){
var statearr_28638_28709 = state_28589__$1;
(statearr_28638_28709[(1)] = (38));

} else {
var statearr_28639_28710 = state_28589__$1;
(statearr_28639_28710[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (17))){
var state_28589__$1 = state_28589;
var statearr_28640_28711 = state_28589__$1;
(statearr_28640_28711[(2)] = recompile_dependents);

(statearr_28640_28711[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (3))){
var state_28589__$1 = state_28589;
var statearr_28641_28712 = state_28589__$1;
(statearr_28641_28712[(2)] = null);

(statearr_28641_28712[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (12))){
var inst_28479 = (state_28589[(2)]);
var state_28589__$1 = state_28589;
var statearr_28642_28713 = state_28589__$1;
(statearr_28642_28713[(2)] = inst_28479);

(statearr_28642_28713[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (2))){
var inst_28441 = (state_28589[(13)]);
var inst_28448 = cljs.core.seq.call(null,inst_28441);
var inst_28449 = inst_28448;
var inst_28450 = null;
var inst_28451 = (0);
var inst_28452 = (0);
var state_28589__$1 = (function (){var statearr_28643 = state_28589;
(statearr_28643[(7)] = inst_28450);

(statearr_28643[(8)] = inst_28452);

(statearr_28643[(9)] = inst_28451);

(statearr_28643[(10)] = inst_28449);

return statearr_28643;
})();
var statearr_28644_28714 = state_28589__$1;
(statearr_28644_28714[(2)] = null);

(statearr_28644_28714[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (23))){
var inst_28505 = (state_28589[(23)]);
var inst_28508 = (state_28589[(26)]);
var inst_28502 = (state_28589[(19)]);
var inst_28510 = (state_28589[(24)]);
var inst_28506 = (state_28589[(25)]);
var inst_28513 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28515 = (function (){var all_files = inst_28502;
var res_SINGLEQUOTE_ = inst_28505;
var res = inst_28506;
var files_not_loaded = inst_28508;
var dependencies_that_loaded = inst_28510;
return (function (p__28514){
var map__28645 = p__28514;
var map__28645__$1 = (((((!((map__28645 == null))))?(((((map__28645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28645):map__28645);
var request_url = cljs.core.get.call(null,map__28645__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_28516 = cljs.core.reverse.call(null,inst_28510);
var inst_28517 = cljs.core.map.call(null,inst_28515,inst_28516);
var inst_28518 = cljs.core.pr_str.call(null,inst_28517);
var inst_28519 = figwheel.client.utils.log.call(null,inst_28518);
var state_28589__$1 = (function (){var statearr_28647 = state_28589;
(statearr_28647[(31)] = inst_28513);

return statearr_28647;
})();
var statearr_28648_28715 = state_28589__$1;
(statearr_28648_28715[(2)] = inst_28519);

(statearr_28648_28715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (35))){
var state_28589__$1 = state_28589;
var statearr_28649_28716 = state_28589__$1;
(statearr_28649_28716[(2)] = true);

(statearr_28649_28716[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (19))){
var inst_28492 = (state_28589[(12)]);
var inst_28498 = figwheel.client.file_reloading.expand_files.call(null,inst_28492);
var state_28589__$1 = state_28589;
var statearr_28650_28717 = state_28589__$1;
(statearr_28650_28717[(2)] = inst_28498);

(statearr_28650_28717[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (11))){
var state_28589__$1 = state_28589;
var statearr_28651_28718 = state_28589__$1;
(statearr_28651_28718[(2)] = null);

(statearr_28651_28718[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (9))){
var inst_28481 = (state_28589[(2)]);
var state_28589__$1 = state_28589;
var statearr_28652_28719 = state_28589__$1;
(statearr_28652_28719[(2)] = inst_28481);

(statearr_28652_28719[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (5))){
var inst_28452 = (state_28589[(8)]);
var inst_28451 = (state_28589[(9)]);
var inst_28454 = (inst_28452 < inst_28451);
var inst_28455 = inst_28454;
var state_28589__$1 = state_28589;
if(cljs.core.truth_(inst_28455)){
var statearr_28653_28720 = state_28589__$1;
(statearr_28653_28720[(1)] = (7));

} else {
var statearr_28654_28721 = state_28589__$1;
(statearr_28654_28721[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (14))){
var inst_28462 = (state_28589[(22)]);
var inst_28471 = cljs.core.first.call(null,inst_28462);
var inst_28472 = figwheel.client.file_reloading.eval_body.call(null,inst_28471,opts);
var inst_28473 = cljs.core.next.call(null,inst_28462);
var inst_28449 = inst_28473;
var inst_28450 = null;
var inst_28451 = (0);
var inst_28452 = (0);
var state_28589__$1 = (function (){var statearr_28655 = state_28589;
(statearr_28655[(7)] = inst_28450);

(statearr_28655[(8)] = inst_28452);

(statearr_28655[(32)] = inst_28472);

(statearr_28655[(9)] = inst_28451);

(statearr_28655[(10)] = inst_28449);

return statearr_28655;
})();
var statearr_28656_28722 = state_28589__$1;
(statearr_28656_28722[(2)] = null);

(statearr_28656_28722[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (45))){
var state_28589__$1 = state_28589;
var statearr_28657_28723 = state_28589__$1;
(statearr_28657_28723[(2)] = null);

(statearr_28657_28723[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (26))){
var inst_28505 = (state_28589[(23)]);
var inst_28508 = (state_28589[(26)]);
var inst_28502 = (state_28589[(19)]);
var inst_28510 = (state_28589[(24)]);
var inst_28506 = (state_28589[(25)]);
var inst_28525 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28527 = (function (){var all_files = inst_28502;
var res_SINGLEQUOTE_ = inst_28505;
var res = inst_28506;
var files_not_loaded = inst_28508;
var dependencies_that_loaded = inst_28510;
return (function (p__28526){
var map__28658 = p__28526;
var map__28658__$1 = (((((!((map__28658 == null))))?(((((map__28658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28658):map__28658);
var namespace = cljs.core.get.call(null,map__28658__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28658__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_28528 = cljs.core.map.call(null,inst_28527,inst_28506);
var inst_28529 = cljs.core.pr_str.call(null,inst_28528);
var inst_28530 = figwheel.client.utils.log.call(null,inst_28529);
var inst_28531 = (function (){var all_files = inst_28502;
var res_SINGLEQUOTE_ = inst_28505;
var res = inst_28506;
var files_not_loaded = inst_28508;
var dependencies_that_loaded = inst_28510;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_28532 = setTimeout(inst_28531,(10));
var state_28589__$1 = (function (){var statearr_28660 = state_28589;
(statearr_28660[(33)] = inst_28530);

(statearr_28660[(34)] = inst_28525);

return statearr_28660;
})();
var statearr_28661_28724 = state_28589__$1;
(statearr_28661_28724[(2)] = inst_28532);

(statearr_28661_28724[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (16))){
var state_28589__$1 = state_28589;
var statearr_28662_28725 = state_28589__$1;
(statearr_28662_28725[(2)] = reload_dependents);

(statearr_28662_28725[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (38))){
var inst_28542 = (state_28589[(16)]);
var inst_28560 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28542);
var state_28589__$1 = state_28589;
var statearr_28663_28726 = state_28589__$1;
(statearr_28663_28726[(2)] = inst_28560);

(statearr_28663_28726[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (30))){
var state_28589__$1 = state_28589;
var statearr_28664_28727 = state_28589__$1;
(statearr_28664_28727[(2)] = null);

(statearr_28664_28727[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (10))){
var inst_28462 = (state_28589[(22)]);
var inst_28464 = cljs.core.chunked_seq_QMARK_.call(null,inst_28462);
var state_28589__$1 = state_28589;
if(inst_28464){
var statearr_28665_28728 = state_28589__$1;
(statearr_28665_28728[(1)] = (13));

} else {
var statearr_28666_28729 = state_28589__$1;
(statearr_28666_28729[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (18))){
var inst_28496 = (state_28589[(2)]);
var state_28589__$1 = state_28589;
if(cljs.core.truth_(inst_28496)){
var statearr_28667_28730 = state_28589__$1;
(statearr_28667_28730[(1)] = (19));

} else {
var statearr_28668_28731 = state_28589__$1;
(statearr_28668_28731[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (42))){
var state_28589__$1 = state_28589;
var statearr_28669_28732 = state_28589__$1;
(statearr_28669_28732[(2)] = null);

(statearr_28669_28732[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (37))){
var inst_28555 = (state_28589[(2)]);
var state_28589__$1 = state_28589;
var statearr_28670_28733 = state_28589__$1;
(statearr_28670_28733[(2)] = inst_28555);

(statearr_28670_28733[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28590 === (8))){
var inst_28462 = (state_28589[(22)]);
var inst_28449 = (state_28589[(10)]);
var inst_28462__$1 = cljs.core.seq.call(null,inst_28449);
var state_28589__$1 = (function (){var statearr_28671 = state_28589;
(statearr_28671[(22)] = inst_28462__$1);

return statearr_28671;
})();
if(inst_28462__$1){
var statearr_28672_28734 = state_28589__$1;
(statearr_28672_28734[(1)] = (10));

} else {
var statearr_28673_28735 = state_28589__$1;
(statearr_28673_28735[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22733__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22733__auto____0 = (function (){
var statearr_28674 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28674[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22733__auto__);

(statearr_28674[(1)] = (1));

return statearr_28674;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22733__auto____1 = (function (state_28589){
while(true){
var ret_value__22734__auto__ = (function (){try{while(true){
var result__22735__auto__ = switch__22732__auto__.call(null,state_28589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22735__auto__;
}
break;
}
}catch (e28675){if((e28675 instanceof Object)){
var ex__22736__auto__ = e28675;
var statearr_28676_28736 = state_28589;
(statearr_28676_28736[(5)] = ex__22736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28737 = state_28589;
state_28589 = G__28737;
continue;
} else {
return ret_value__22734__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22733__auto__ = function(state_28589){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22733__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22733__auto____1.call(this,state_28589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22733__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22733__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22733__auto__;
})()
})();
var state__22829__auto__ = (function (){var statearr_28677 = f__22828__auto__.call(null);
(statearr_28677[(6)] = c__22827__auto__);

return statearr_28677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22829__auto__);
}));

return c__22827__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28740,link){
var map__28741 = p__28740;
var map__28741__$1 = (((((!((map__28741 == null))))?(((((map__28741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28741):map__28741);
var file = cljs.core.get.call(null,map__28741__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__28738_SHARP_,p2__28739_SHARP_){
if(cljs.core._EQ_.call(null,p1__28738_SHARP_,p2__28739_SHARP_)){
return p1__28738_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28744){
var map__28745 = p__28744;
var map__28745__$1 = (((((!((map__28745 == null))))?(((((map__28745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28745):map__28745);
var match_length = cljs.core.get.call(null,map__28745__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28745__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28743_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28743_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28747_SHARP_,p2__28748_SHARP_){
return cljs.core.assoc.call(null,p1__28747_SHARP_,cljs.core.get.call(null,p2__28748_SHARP_,key),p2__28748_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_28749 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_28749);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_28749);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28750,p__28751){
var map__28752 = p__28750;
var map__28752__$1 = (((((!((map__28752 == null))))?(((((map__28752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28752):map__28752);
var on_cssload = cljs.core.get.call(null,map__28752__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__28753 = p__28751;
var map__28753__$1 = (((((!((map__28753 == null))))?(((((map__28753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28753):map__28753);
var files_msg = map__28753__$1;
var files = cljs.core.get.call(null,map__28753__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1761389407390
