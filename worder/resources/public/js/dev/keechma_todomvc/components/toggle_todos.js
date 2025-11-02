// Compiled by ClojureScript 1.10.597 {}
goog.provide('keechma_todomvc.components.toggle_todos');
goog.require('cljs.core');
goog.require('keechma_todomvc.ui');
/**
 * ## Renders a checkbox element
 * 
 *   The checkbox toggles the `status` of all `todos` between `:completed`
 *   and `:active`. If the `status` of the `todos` is a mixture of
 *   `:completed` and `:active`, sets them all to `:completed`.
 * 
 * ### Subscription Deps
 * 
 * - `has-todos-by-status?` returns true if there are any `todos` with a `status`
 */
keechma_todomvc.components.toggle_todos.render = (function keechma_todomvc$components$toggle_todos$render(ctx){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#toggle-all.toggle-all","input#toggle-all.toggle-all",759407834),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__24943_SHARP_){
return keechma_todomvc.ui._LT_cmd.call(null,ctx,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349),p1__24943_SHARP_.target.checked);
}),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.not.call(null,keechma_todomvc.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"has-todos-by-status?","has-todos-by-status?",-2081255737),new cljs.core.Keyword(null,"active","active",1895962068)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349)], null),"Mark all as completed"], null)], null);
});
keechma_todomvc.components.toggle_todos.component = keechma_todomvc.ui._LT_comp.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071),keechma_todomvc.components.toggle_todos.render,new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"has-todos-by-status?","has-todos-by-status?",-2081255737)], null));

//# sourceMappingURL=toggle_todos.js.map?rel=1761389400279
