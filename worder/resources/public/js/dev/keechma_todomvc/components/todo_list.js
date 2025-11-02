// Compiled by ClojureScript 1.10.597 {}
goog.provide('keechma_todomvc.components.todo_list');
goog.require('cljs.core');
goog.require('keechma_todomvc.ui');
/**
 * ## Renders a list of currently visible todos
 * 
 *   `todo` visiblity is controlled by the current `route`.
 * 
 * ### Component Deps
 * 
 * - `:todo-item` Each list item is rendered by a `:todo-item` component
 *   that receives the `todo` and the calculated `is-editing?` value as
 *   arguments.
 * 
 * ### Subscription Deps
 * 
 * - `:todos-by-status` returns `todos` with a `status`
 * - `:edit-todo` returns the `todo` currently being edited, or nil
 */
keechma_todomvc.components.todo_list.render = (function keechma_todomvc$components$todo_list$render(ctx){
var route_status = cljs.core.keyword.call(null,keechma_todomvc.ui.route_GT_.call(null,ctx,new cljs.core.Keyword(null,"status","status",-1997798413)));
var is_editing_QMARK_ = (function (id){
return cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(keechma_todomvc.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"edit-todo","edit-todo",-1317010694))));
});
var todo_item = (function (p__24955){
var map__24956 = p__24955;
var map__24956__$1 = (((((!((map__24956 == null))))?(((((map__24956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24956):map__24956);
var todo = map__24956__$1;
var id = cljs.core.get.call(null,map__24956__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma_todomvc.ui.comp_GT_,ctx,new cljs.core.Keyword(null,"todo-item","todo-item",-1060924804),todo,is_editing_QMARK_.call(null,id)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.todo-list","ul.todo-list",461840379),cljs.core.doall.call(null,cljs.core.map.call(null,todo_item,keechma_todomvc.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"todos-by-status","todos-by-status",161831391),route_status)))], null);
});
keechma_todomvc.components.todo_list.component = keechma_todomvc.ui._LT_comp.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071),keechma_todomvc.components.todo_list.render,new cljs.core.Keyword(null,"component-deps","component-deps",-405716162),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todo-item","todo-item",-1060924804)], null),new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos-by-status","todos-by-status",161831391),new cljs.core.Keyword(null,"edit-todo","edit-todo",-1317010694)], null));

//# sourceMappingURL=todo_list.js.map?rel=1761389400321
