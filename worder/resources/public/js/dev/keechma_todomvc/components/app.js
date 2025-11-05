// Compiled by ClojureScript 1.10.597 {}
goog.provide('keechma_todomvc.components.app');
goog.require('cljs.core');
goog.require('keechma_todomvc.ui');
/**
 * ## Renders the top level UI
 * 
 *   Some elements are rendered inline, others are implemented as
 *   `components`. Each `component` will have its own `context` provided.
 * 
 * ### Component Deps
 * 
 * - `:new-todo` top field where new `todos` are entered
 * - `:toggle-todos` checkbox to the left of `:new-todo`
 * - `:todo-list` main body list of `todos`
 * - `:footer` active count, filtering, clearing
 * 
 * ### Subscription Deps
 * 
 * - `:has-todos?` returns true if there are any todos in the EntityDB.
 */
keechma_todomvc.components.app.render = (function keechma_todomvc$components$app$render(ctx){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.todoapp","section.todoapp",61469282),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.header","header.header",1073294241),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Worder"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma_todomvc.ui.comp_GT_,ctx,new cljs.core.Keyword(null,"new-todo","new-todo",1331420444)], null)], null),(cljs.core.truth_(keechma_todomvc.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"has-todos?","has-todos?",1891687793)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.main","section.main",548517124),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma_todomvc.ui.comp_GT_,ctx,new cljs.core.Keyword(null,"toggle-todos","toggle-todos",1635358696)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma_todomvc.ui.comp_GT_,ctx,new cljs.core.Keyword(null,"todo-list","todo-list",653205378)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma_todomvc.ui.comp_GT_,ctx,new cljs.core.Keyword(null,"footer","footer",1606445390)], null)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.info","footer.info",-868940546),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Double-click to edit a word"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://keechma.com"], null),"Keechma"], null)," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://todomvc.com"], null),"TodoMVC"], null)], null)], null)], null);
});
keechma_todomvc.components.app.component = keechma_todomvc.ui._LT_comp.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071),keechma_todomvc.components.app.render,new cljs.core.Keyword(null,"component-deps","component-deps",-405716162),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-todo","new-todo",1331420444),new cljs.core.Keyword(null,"toggle-todos","toggle-todos",1635358696),new cljs.core.Keyword(null,"todo-list","todo-list",653205378),new cljs.core.Keyword(null,"footer","footer",1606445390)], null),new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"has-todos?","has-todos?",1891687793)], null));

//# sourceMappingURL=app.js.map?rel=1762299006631
