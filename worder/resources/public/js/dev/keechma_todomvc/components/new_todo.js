// Compiled by ClojureScript 1.10.597 {}
goog.provide('keechma_todomvc.components.new_todo');
goog.require('cljs.core');
goog.require('keechma_todomvc.ui');
goog.require('keechma_todomvc.util');
goog.require('reagent.core');
/**
 * ## Renders an input field for a new todo
 * 
 *   Stores the pending new `title` inside a local `atom`. When the user
 *   presses `enter`, sends a `:create-todo` command to the `todos`
 *   controller to create the new `todo`.
 * 
 * ### Form 2 Render
 * 
 *   A `form 2` render function sets up local state and returns a
 *   rendering function from its first call. That `inner` rendering
 *   function will be called each time `reagent` needs to render the
 *   component. The arguments for the `inner` function are the same as
 *   for the `form 2` render function except that the `ctx` argument is
 *   not present. The local state can be used by the code in the `inner`
 *   render function. It will persist until the component is unmounted.
 */
keechma_todomvc.components.new_todo.form_2_render = (function keechma_todomvc$components$new_todo$form_2_render(ctx){
var new_title = reagent.core.atom.call(null,"");
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.new-todo","input.new-todo",740309452),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs to be done?",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,new_title),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__24960_SHARP_){
return cljs.core.reset_BANG_.call(null,new_title,p1__24960_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__24961_SHARP_){
if(keechma_todomvc.util.is_enter_QMARK_.call(null,p1__24961_SHARP_.keyCode)){
keechma_todomvc.ui._LT_cmd.call(null,ctx,new cljs.core.Keyword(null,"create-todo","create-todo",-56398988),cljs.core.deref.call(null,new_title));

return cljs.core.reset_BANG_.call(null,new_title,"");
} else {
return null;
}
})], null)], null);
});
});
keechma_todomvc.components.new_todo.component = keechma_todomvc.ui._LT_comp.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071),keechma_todomvc.components.new_todo.form_2_render);

//# sourceMappingURL=new_todo.js.map?rel=1761389400332
