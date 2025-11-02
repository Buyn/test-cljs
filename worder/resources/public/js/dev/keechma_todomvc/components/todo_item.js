// Compiled by ClojureScript 1.10.597 {}
goog.provide('keechma_todomvc.components.todo_item');
goog.require('cljs.core');
goog.require('keechma_todomvc.ui');
/**
 * ## Renders a todo list item
 * 
 *   The item's content includes:
 * 
 * - a `checkbox` for toggling `:completed`
 * - a `label` displaying the `:title`
 * - a `button` to delete the item
 * 
 * If the item is currently being edited, overlays a `todo-edit` component.
 * 
 * ### Component Deps
 * 
 * - `:todo-edit` presents ui to edit a `todo`'s title
 * 
 * ### Arguments
 * 
 *   This render function has arguments in addition to `ctx`. Values for
 *   those are provided at the site where this component is included
 *   within another, in this case `:todo-list`. If this were a `form-2`
 *   render function, the returned function would have only `todo` and
 *   `is-editing?` as arguments.
 */
keechma_todomvc.components.todo_item.render = (function keechma_todomvc$components$todo_item$render(ctx,todo,is_editing_QMARK_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(is_editing_QMARK_)?new cljs.core.Keyword(null,"editing","editing",1365491601):null),(cljs.core.truth_(new cljs.core.Keyword(null,"completed","completed",-486056503).cljs$core$IFn$_invoke$arity$1(todo))?new cljs.core.Keyword(null,"completed","completed",-486056503):null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.view","div.view",-1680900976),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),(function (){
return keechma_todomvc.ui._LT_cmd.call(null,ctx,new cljs.core.Keyword(null,"start-edit","start-edit",2031179152),todo);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.toggle","input.toggle",-519545942),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"completed","completed",-486056503).cljs$core$IFn$_invoke$arity$1(todo),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return keechma_todomvc.ui._LT_cmd.call(null,ctx,new cljs.core.Keyword(null,"toggle-todo","toggle-todo",1473079782),todo);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(todo)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.destroy","button.destroy",1044866871),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return keechma_todomvc.ui._LT_cmd.call(null,ctx,new cljs.core.Keyword(null,"delete-todo","delete-todo",-134034723),todo);
})], null)], null)], null),(cljs.core.truth_(is_editing_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma_todomvc.ui.comp_GT_,ctx,new cljs.core.Keyword(null,"todo-edit","todo-edit",-1066689529)], null):null)], null);
});
keechma_todomvc.components.todo_item.component = keechma_todomvc.ui._LT_comp.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071),keechma_todomvc.components.todo_item.render,new cljs.core.Keyword(null,"component-deps","component-deps",-405716162),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todo-edit","todo-edit",-1066689529)], null));

//# sourceMappingURL=todo_item.js.map?rel=1761389400344
