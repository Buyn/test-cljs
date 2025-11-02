// Compiled by ClojureScript 1.10.597 {}
goog.provide('keechma_todomvc.components.footer');
goog.require('cljs.core');
goog.require('keechma_todomvc.ui');
/**
 * ## Renders the Footer
 * 
 * - the active `todo` count
 * - buttons to filter the `todo` list by status
 * - the `clear-completed` button if there are any completed `todos`
 * 
 * ### Route Data
 * 
 *   Reads the `route status` from the current route `data` and uses it
 *   to highlight the correct filter button as selected.
 * 
 * ### Subscription Deps
 * 
 *   Each `todo` has a `status` of either `:completed` or `:active`.
 * 
 * - `:count-todos-by-status` returns the count of `todos` with a `status`
 * - `:has-todos-by-status?` returns `true` if there are any `todos` with
 *   a `status`.
 */
keechma_todomvc.components.footer.render = (function keechma_todomvc$components$footer$render(ctx){
var route_status = cljs.core.keyword.call(null,keechma_todomvc.ui.route_GT_.call(null,ctx,new cljs.core.Keyword(null,"status","status",-1997798413)));
var filter_item = (function (status,label){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li>a","li>a",-1587586072),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),keechma_todomvc.ui._LT_url.call(null,ctx,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.name.call(null,status)),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,status,route_status))?"selected":null)], null),label], null);
});
var active_count = keechma_todomvc.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"count-todos-by-status","count-todos-by-status",-1890461039),new cljs.core.Keyword(null,"active","active",1895962068));
var count_label = [" item",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [(1),""], null).call(null,active_count,"s"))," left"].join('');
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.footer","footer.footer",1361475645),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.todo-count","span.todo-count",-324934453),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),active_count], null),count_label], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filters","ul.filters",698823245),filter_item.call(null,new cljs.core.Keyword(null,"all","all",892129742),"All"),filter_item.call(null,new cljs.core.Keyword(null,"active","active",1895962068),"Active"),filter_item.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503),"Completed")], null),(cljs.core.truth_(keechma_todomvc.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"has-todos-by-status?","has-todos-by-status?",-2081255737),new cljs.core.Keyword(null,"completed","completed",-486056503)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.clear-completed","button.clear-completed",1293834241),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return keechma_todomvc.ui._LT_cmd.call(null,ctx,new cljs.core.Keyword(null,"delete-completed","delete-completed",1753568848));
})], null),"Clear completed"], null):null)], null);
});
keechma_todomvc.components.footer.component = keechma_todomvc.ui._LT_comp.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071),keechma_todomvc.components.footer.render,new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count-todos-by-status","count-todos-by-status",-1890461039),new cljs.core.Keyword(null,"has-todos-by-status?","has-todos-by-status?",-2081255737)], null));

//# sourceMappingURL=footer.js.map?rel=1761389400357
