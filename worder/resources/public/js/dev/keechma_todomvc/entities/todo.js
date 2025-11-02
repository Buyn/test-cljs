// Compiled by ClojureScript 1.10.597 {}
goog.provide('keechma_todomvc.entities.todo');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('keechma_todomvc.edb');
goog.require('goog.ui.IdGenerator');
keechma_todomvc.entities.todo.id_generator = (new goog.ui.IdGenerator());
/**
 * Returns a unique ID for a new todo.
 */
keechma_todomvc.entities.todo.id = (function keechma_todomvc$entities$todo$id(){
return keechma_todomvc.entities.todo.id_generator.getNextUniqueId();
});
/**
 * Returns `true` if `title` is a valid `todo` title.
 */
keechma_todomvc.entities.todo.valid_title_QMARK_ = (function keechma_todomvc$entities$todo$valid_title_QMARK_(title){
return (!(clojure.string.blank_QMARK_.call(null,title)));
});
/**
 * Returns all `todos` with a `status`.
 */
keechma_todomvc.entities.todo.todos_by_status = (function keechma_todomvc$entities$todo$todos_by_status(app_db,status){
var todos = keechma_todomvc.edb.get_collection.call(null,app_db,new cljs.core.Keyword(null,"todos","todos",630308868),new cljs.core.Keyword(null,"list","list",765357683));
var G__25356 = status;
var G__25356__$1 = (((G__25356 instanceof cljs.core.Keyword))?G__25356.fqn:null);
switch (G__25356__$1) {
case "completed":
return cljs.core.filter.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503),todos);

break;
case "active":
return cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503)),todos);

break;
case "all":
return todos;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25356__$1)].join('')));

}
});
/**
 * Returns the `todo` currently being edited.
 */
keechma_todomvc.entities.todo.edit_todo = (function keechma_todomvc$entities$todo$edit_todo(app_db){
return keechma_todomvc.edb.get_item_by_id.call(null,app_db,new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"editing-id","editing-id",-544615278)], null)));
});
/**
 * Sets state: this `todo` is currently being edited.
 */
keechma_todomvc.entities.todo.start_edit = (function keechma_todomvc$entities$todo$start_edit(app_db,p__25358){
var map__25359 = p__25358;
var map__25359__$1 = (((((!((map__25359 == null))))?(((((map__25359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25359):map__25359);
var todo = map__25359__$1;
var id = cljs.core.get.call(null,map__25359__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.assoc_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"editing-id","editing-id",-544615278)], null),id);
});
/**
 * Clears state: no `todo` is currently being edited.
 */
keechma_todomvc.entities.todo.cancel_edit = (function keechma_todomvc$entities$todo$cancel_edit(app_db){
return cljs.core.assoc_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"editing-id","editing-id",-544615278)], null),null);
});
/**
 * Updates `todo` if `new-todo` has a valid `title`.
 */
keechma_todomvc.entities.todo.confirm_edit = (function keechma_todomvc$entities$todo$confirm_edit(app_db,p__25361){
var map__25362 = p__25361;
var map__25362__$1 = (((((!((map__25362 == null))))?(((((map__25362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25362):map__25362);
var new_todo = map__25362__$1;
var id = cljs.core.get.call(null,map__25362__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.call(null,map__25362__$1,new cljs.core.Keyword(null,"title","title",636505583));
if(cljs.core.truth_(id)){
} else {
throw (new Error("Assert failed: id"));
}

if(keechma_todomvc.entities.todo.valid_title_QMARK_.call(null,title)){
return keechma_todomvc.edb.insert_item.call(null,keechma_todomvc.entities.todo.cancel_edit.call(null,app_db),new cljs.core.Keyword(null,"todos","todos",630308868),new_todo);
} else {
return app_db;
}
});
/**
 * Creates an empty `todos` list.
 */
keechma_todomvc.entities.todo.create_todos = (function keechma_todomvc$entities$todo$create_todos(app_db){
return keechma_todomvc.edb.insert_collection.call(null,app_db,new cljs.core.Keyword(null,"todos","todos",630308868),new cljs.core.Keyword(null,"list","list",765357683),cljs.core.PersistentVector.EMPTY);
});
/**
 * If `title` is valid, creates a new `todo` and inserts it at the
 *   beginning of the `todo` list.
 */
keechma_todomvc.entities.todo.create_todo = (function keechma_todomvc$entities$todo$create_todo(app_db,title){
if(keechma_todomvc.entities.todo.valid_title_QMARK_.call(null,title)){
var todo = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),["todo",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keechma_todomvc.entities.todo.id.call(null))].join(''),new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"title","title",636505583),title], null);
return keechma_todomvc.edb.prepend_collection.call(null,app_db,new cljs.core.Keyword(null,"todos","todos",630308868),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo], null));
} else {
return app_db;
}
});
/**
 * Merges new data into a `todo`. `patch-todo` must have an `:id`
 *   value that is the `id` of the `todo` to be updated.
 */
keechma_todomvc.entities.todo.update_todo = (function keechma_todomvc$entities$todo$update_todo(app_db,p__25364){
var map__25365 = p__25364;
var map__25365__$1 = (((((!((map__25365 == null))))?(((((map__25365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25365):map__25365);
var patch_todo = map__25365__$1;
var id = cljs.core.get.call(null,map__25365__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(id)){
} else {
throw (new Error("Assert failed: id"));
}

return keechma_todomvc.edb.insert_item.call(null,app_db,new cljs.core.Keyword(null,"todos","todos",630308868),patch_todo);
});
/**
 * Toggles the `:completed` status of a saved `todo`.
 */
keechma_todomvc.entities.todo.toggle_todo = (function keechma_todomvc$entities$todo$toggle_todo(app_db,todo){
return keechma_todomvc.entities.todo.update_todo.call(null,app_db,cljs.core.update.call(null,todo,new cljs.core.Keyword(null,"completed","completed",-486056503),cljs.core.not));
});
/**
 * Marks all `todos` as completed or not based on `completed?`.
 */
keechma_todomvc.entities.todo.toggle_all = (function keechma_todomvc$entities$todo$toggle_all(app_db,completed_QMARK_){
return cljs.core.reduce.call(null,(function (acc,todo){
return keechma_todomvc.entities.todo.update_todo.call(null,acc,cljs.core.assoc.call(null,todo,new cljs.core.Keyword(null,"completed","completed",-486056503),completed_QMARK_));
}),app_db,keechma_todomvc.entities.todo.todos_by_status.call(null,app_db,new cljs.core.Keyword(null,"all","all",892129742)));
});
/**
 * Removes a `todo` from the EntityDB.
 */
keechma_todomvc.entities.todo.delete_todo = (function keechma_todomvc$entities$todo$delete_todo(app_db,p__25367){
var map__25368 = p__25367;
var map__25368__$1 = (((((!((map__25368 == null))))?(((((map__25368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25368):map__25368);
var todo = map__25368__$1;
var id = cljs.core.get.call(null,map__25368__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return keechma_todomvc.edb.remove_item.call(null,app_db,new cljs.core.Keyword(null,"todos","todos",630308868),id);
});
/**
 * Removes all completed `todos` from the EntityDB.
 */
keechma_todomvc.entities.todo.delete_completed = (function keechma_todomvc$entities$todo$delete_completed(app_db){
return cljs.core.reduce.call(null,(function (acc,p__25370){
var map__25371 = p__25370;
var map__25371__$1 = (((((!((map__25371 == null))))?(((((map__25371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25371):map__25371);
var id = cljs.core.get.call(null,map__25371__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return keechma_todomvc.edb.remove_item.call(null,acc,new cljs.core.Keyword(null,"todos","todos",630308868),id);
}),app_db,keechma_todomvc.entities.todo.todos_by_status.call(null,app_db,new cljs.core.Keyword(null,"completed","completed",-486056503)));
});
/**
 * Returns a mapping from `todo` topic `command` keywords to `action`
 *   functions. The mapping is suitable for use by
 *   `keechma.controller/dispatcher`.
 * 
 *   Adapts the calling convention from the one used by
 *   `keechma.controllers/dispatcher`:
 * 
 *   `(action-fn app-db-atom args-vec)`
 * 
 *   to one that is more natural for ClojureScript:
 * 
 *   `(handler app-db-atom arg1 arg2 arg3 ...)`.
 * 
 *   Combined with `<cmd` in `ui.cljs`, this allows natural-looking
 *   arguments in calls to `<cmd` to be handled by a handler with a
 *   natural looking argument vector in its definition. This insulates
 *   app developers from the restriction against varags in protocol
 *   functions that results in `keechma.ui-component/send-command`
 *   supporting only exactly 2 or 3 args, the last one an optional
 *   explicit vector of additional args.
 * 
 *   The adapter also provides the side-effect of updating the `app-db`
 *   with the result of each call, allowing the handlers to be written
 *   and tested as pure functions that return the new `app-db` value.
 */
keechma_todomvc.entities.todo.actions = (function keechma_todomvc$entities$todo$actions(){
var cmd_handlers = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"start-edit","start-edit",2031179152),keechma_todomvc.entities.todo.start_edit,new cljs.core.Keyword(null,"cancel-edit","cancel-edit",-1598330442),keechma_todomvc.entities.todo.cancel_edit,new cljs.core.Keyword(null,"confirm-edit","confirm-edit",1517923775),keechma_todomvc.entities.todo.confirm_edit,new cljs.core.Keyword(null,"create-todo","create-todo",-56398988),keechma_todomvc.entities.todo.create_todo,new cljs.core.Keyword(null,"delete-todo","delete-todo",-134034723),keechma_todomvc.entities.todo.delete_todo,new cljs.core.Keyword(null,"toggle-todo","toggle-todo",1473079782),keechma_todomvc.entities.todo.toggle_todo,new cljs.core.Keyword(null,"toggle-all","toggle-all",554849349),keechma_todomvc.entities.todo.toggle_all,new cljs.core.Keyword(null,"delete-completed","delete-completed",1753568848),keechma_todomvc.entities.todo.delete_completed], null);
var action_adapter = (function (f){
return (function (app_db,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,app_db,f,args);
});
});
return cljs.core.reduce_kv.call(null,(function (acc,k,f){
return cljs.core.assoc.call(null,acc,k,action_adapter.call(null,f));
}),cljs.core.PersistentArrayMap.EMPTY,cmd_handlers);
});

//# sourceMappingURL=todo.js.map?rel=1761389401215
