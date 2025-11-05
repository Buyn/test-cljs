// Compiled by ClojureScript 1.10.597 {}
goog.provide('keechma_todomvc.app');
goog.require('cljs.core');
goog.require('keechma_todomvc.components');
goog.require('keechma_todomvc.controllers.todos');
goog.require('keechma_todomvc.subscriptions');
goog.require('keechma.app_state');
if((typeof keechma_todomvc !== 'undefined') && (typeof keechma_todomvc.app !== 'undefined') && (typeof keechma_todomvc.app.running_app !== 'undefined')){
} else {
keechma_todomvc.app.running_app = cljs.core.atom.call(null,null);
}
/**
 * Pulls the app together.
 */
keechma_todomvc.app.app_definition = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [":status",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),"all"], null)], null)], null),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"todos","todos",630308868),keechma_todomvc.controllers.todos.__GT_Controller.call(null)], null),new cljs.core.Keyword(null,"components","components",-1073188942),keechma_todomvc.components.system,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),keechma_todomvc.subscriptions.subscriptions,new cljs.core.Keyword(null,"html-element","html-element",1188696850),document.getElementById("app")], null);
/**
 * Starts the app.
 */
keechma_todomvc.app.start_BANG_ = (function keechma_todomvc$app$start_BANG_(){
return cljs.core.reset_BANG_.call(null,keechma_todomvc.app.running_app,keechma.app_state.start_BANG_.call(null,keechma_todomvc.app.app_definition));
});
/**
 * Restarts the app. `project.clj` contains a config setting for
 *   `figwheel` requesting a call to this function whenever the code is
 *   reloaded.
 */
keechma_todomvc.app.restart_BANG_ = (function keechma_todomvc$app$restart_BANG_(){
var temp__5733__auto__ = cljs.core.deref.call(null,keechma_todomvc.app.running_app);
if(cljs.core.truth_(temp__5733__auto__)){
var current = temp__5733__auto__;
return keechma.app_state.stop_BANG_.call(null,current,keechma_todomvc.app.start_BANG_);
} else {
return keechma_todomvc.app.start_BANG_.call(null);
}
});
/**
 * Enables console output for dev builds.
 */
keechma_todomvc.app.dev_setup = (function keechma_todomvc$app$dev_setup(){
if(goog.DEBUG){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
/**
 * Called from `index.html` to start the app. Exported because
 *   `index.html` refers to it by name even in non-dev builds.
 */
keechma_todomvc.app.main = (function keechma_todomvc$app$main(){
keechma_todomvc.app.dev_setup.call(null);

return keechma_todomvc.app.start_BANG_.call(null);
});
goog.exportSymbol('keechma_todomvc.app.main', keechma_todomvc.app.main);

//# sourceMappingURL=app.js.map?rel=1762299007022
