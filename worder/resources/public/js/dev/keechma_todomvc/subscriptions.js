// Compiled by ClojureScript 1.10.597 {}
goog.provide('keechma_todomvc.subscriptions');
goog.require('cljs.core');
goog.require('keechma_todomvc.entities.todo');
goog.require('reagent.ratom');
/**
 * Returns a `reaction` on the list of `todos` with a `status`.
 */
keechma_todomvc.subscriptions.todos_by_status = (function keechma_todomvc$subscriptions$todos_by_status(app_db,status){
return reagent.ratom.make_reaction.call(null,(function (){
return keechma_todomvc.entities.todo.todos_by_status.call(null,cljs.core.deref.call(null,app_db),status);
}));
});
/**
 * Derived `reaction` that returns the `count` of `todos` with a
 *   `status`. Fires only when the `count` changes, independent of the
 *   details of the list contents.
 */
keechma_todomvc.subscriptions.count_todos_by_status = (function keechma_todomvc$subscriptions$count_todos_by_status(app_db,status){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.count.call(null,cljs.core.deref.call(null,keechma_todomvc.subscriptions.todos_by_status.call(null,app_db,status)));
}));
});
/**
 * Derived `reaction` that returns `true` if any `todos` with a `status`
 *   exist. Fires only on a transition either way between `none` and
 *   `some`, independent of the details of the list contents.
 */
keechma_todomvc.subscriptions.has_todos_by_status_QMARK_ = (function keechma_todomvc$subscriptions$has_todos_by_status_QMARK_(app_db,status){
return reagent.ratom.make_reaction.call(null,(function (){
return (!((cljs.core.seq.call(null,cljs.core.deref.call(null,keechma_todomvc.subscriptions.todos_by_status.call(null,app_db,status))) == null)));
}));
});
/**
 * Returns a `reaction` that indicates if there are currently any `todos`
 *   at all.
 */
keechma_todomvc.subscriptions.has_todos_QMARK_ = (function keechma_todomvc$subscriptions$has_todos_QMARK_(app_db){
return keechma_todomvc.subscriptions.has_todos_by_status_QMARK_.call(null,app_db,new cljs.core.Keyword(null,"all","all",892129742));
});
/**
 * Returns a `reaction` on the `todo` that is being edited.
 */
keechma_todomvc.subscriptions.edit_todo = (function keechma_todomvc$subscriptions$edit_todo(app_db){
return reagent.ratom.make_reaction.call(null,(function (){
return keechma_todomvc.entities.todo.edit_todo.call(null,cljs.core.deref.call(null,app_db));
}));
});
keechma_todomvc.subscriptions.subscriptions = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"todos-by-status","todos-by-status",161831391),keechma_todomvc.subscriptions.todos_by_status,new cljs.core.Keyword(null,"count-todos-by-status","count-todos-by-status",-1890461039),keechma_todomvc.subscriptions.count_todos_by_status,new cljs.core.Keyword(null,"has-todos-by-status?","has-todos-by-status?",-2081255737),keechma_todomvc.subscriptions.has_todos_by_status_QMARK_,new cljs.core.Keyword(null,"has-todos?","has-todos?",1891687793),keechma_todomvc.subscriptions.has_todos_QMARK_,new cljs.core.Keyword(null,"edit-todo","edit-todo",-1317010694),keechma_todomvc.subscriptions.edit_todo], null);

//# sourceMappingURL=subscriptions.js.map?rel=1761389401589
