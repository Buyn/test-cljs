// Compiled by ClojureScript 1.10.597 {}
goog.provide('keechma_todomvc.components');
goog.require('cljs.core');
goog.require('keechma_todomvc.components.app');
goog.require('keechma_todomvc.components.footer');
goog.require('keechma_todomvc.components.new_todo');
goog.require('keechma_todomvc.components.todo_edit');
goog.require('keechma_todomvc.components.todo_item');
goog.require('keechma_todomvc.components.todo_list');
goog.require('keechma_todomvc.components.toggle_todos');
/**
 * Defines the component `system`. All the components that send commands
 *   are configured to send them to the `:todos` topic controller.
 */
keechma_todomvc.components.system = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"main","main",-2117802661),keechma_todomvc.components.app.component,new cljs.core.Keyword(null,"footer","footer",1606445390),cljs.core.assoc.call(null,keechma_todomvc.components.footer.component,new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"todos","todos",630308868)),new cljs.core.Keyword(null,"new-todo","new-todo",1331420444),cljs.core.assoc.call(null,keechma_todomvc.components.new_todo.component,new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"todos","todos",630308868)),new cljs.core.Keyword(null,"todo-edit","todo-edit",-1066689529),cljs.core.assoc.call(null,keechma_todomvc.components.todo_edit.component,new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"todos","todos",630308868)),new cljs.core.Keyword(null,"todo-item","todo-item",-1060924804),cljs.core.assoc.call(null,keechma_todomvc.components.todo_item.component,new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"todos","todos",630308868)),new cljs.core.Keyword(null,"todo-list","todo-list",653205378),keechma_todomvc.components.todo_list.component,new cljs.core.Keyword(null,"toggle-todos","toggle-todos",1635358696),cljs.core.assoc.call(null,keechma_todomvc.components.toggle_todos.component,new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"todos","todos",630308868))], null);

//# sourceMappingURL=components.js.map?rel=1762299006778
