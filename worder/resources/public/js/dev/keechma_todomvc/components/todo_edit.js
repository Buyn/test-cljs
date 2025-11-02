// Compiled by ClojureScript 1.10.597 {}
goog.provide('keechma_todomvc.components.todo_edit');
goog.require('cljs.core');
goog.require('keechma_todomvc.ui');
goog.require('keechma_todomvc.util');
goog.require('reagent.core');
/**
 * ## Renders an Edit Field
 * 
 * ### Form 3 render function
 * 
 *   Returns a `reagent class` created from a map that allows us to
 *   provide additional component data to `reagent` including
 *   implementations for `react lifecycle functions` like
 *   `:component-did-mount`.
 * 
 * ### Subscription Deps
 * 
 * - `:edit-todo` returns the `todo` currently being edited, or nil
 * 
 * ### Note
 * 
 *   This component is using a `form 3` render function to demonstrate
 *   the additional flexibility it allows. In this case, we could get the
 *   same effect by setting the `:auto-focus` attribute on the
 *   `:input.edit` element to `true` within a `form 2` render function.
 */
keechma_todomvc.components.todo_edit.form_3_render = (function keechma_todomvc$components$todo_edit$form_3_render(ctx){
var edit_todo = keechma_todomvc.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"edit-todo","edit-todo",-1317010694));
var todo_title = reagent.core.atom.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(edit_todo));
var handle_change = (function (p1__24950_SHARP_){
return cljs.core.reset_BANG_.call(null,todo_title,p1__24950_SHARP_.target.value);
});
var update = (function (){
return keechma_todomvc.ui._LT_cmd.call(null,ctx,new cljs.core.Keyword(null,"confirm-edit","confirm-edit",1517923775),cljs.core.assoc.call(null,edit_todo,new cljs.core.Keyword(null,"title","title",636505583),cljs.core.deref.call(null,todo_title)));
});
var cancel = (function (){
return keechma_todomvc.ui._LT_cmd.call(null,ctx,new cljs.core.Keyword(null,"cancel-edit","cancel-edit",-1598330442));
});
var handle_key_down = (function (p1__24951_SHARP_){
var key_code = p1__24951_SHARP_.keyCode;
if(keechma_todomvc.util.is_enter_QMARK_.call(null,key_code)){
update.call(null);
} else {
}

if(keechma_todomvc.util.is_esc_QMARK_.call(null,key_code)){
return cancel.call(null);
} else {
return null;
}
});
var render = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.edit","input.edit",-1006801207),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,todo_title),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),update,new cljs.core.Keyword(null,"on-change","on-change",-732046149),handle_change,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),handle_key_down], null)], null);
});
var focus_input = (function (p1__24952_SHARP_){
var node = reagent.core.dom_node.call(null,p1__24952_SHARP_);
var length = cljs.core.count.call(null,node.value);
node.focus();

return node.setSelectionRange(length,length);
});
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"todo-edit",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),render,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),focus_input], null));
});
keechma_todomvc.components.todo_edit.component = keechma_todomvc.ui._LT_comp.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071),keechma_todomvc.components.todo_edit.form_3_render,new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit-todo","edit-todo",-1317010694)], null));

//# sourceMappingURL=todo_edit.js.map?rel=1761389400308
