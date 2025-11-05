// Compiled by ClojureScript 1.10.597 {}
goog.provide('keechma_todomvc.worder');
goog.require('cljs.core');
goog.require('keechma_todomvc.components');
goog.require('keechma_todomvc.controllers.todos');
goog.require('keechma_todomvc.subscriptions');
goog.require('reagent.core');
goog.require('keechma.app_state');
keechma_todomvc.worder.multiply = (function keechma_todomvc$worder$multiply(a,b){
return (a * b);
});
if((typeof keechma_todomvc !== 'undefined') && (typeof keechma_todomvc.worder !== 'undefined') && (typeof keechma_todomvc.worder.running_app !== 'undefined')){
} else {
keechma_todomvc.worder.running_app = reagent.core.atom.call(null,null);
}
keechma_todomvc.worder.app_definition = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/:status",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",-1997798413),"all"], null)], null)], null),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"todos","todos",630308868),keechma_todomvc.controllers.todos.__GT_Controller.call(null)], null),new cljs.core.Keyword(null,"components","components",-1073188942),keechma_todomvc.components.system,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776),keechma_todomvc.subscriptions.subscriptions,new cljs.core.Keyword(null,"html-element","html-element",1188696850),document.getElementById("app")], null);
keechma_todomvc.worder.start_BANG_ = (function keechma_todomvc$worder$start_BANG_(){
return cljs.core.reset_BANG_.call(null,keechma_todomvc.worder.running_app,keechma.app_state.start_BANG_.call(null,keechma_todomvc.worder.app_definition));
});
keechma_todomvc.worder.restart_BANG_ = (function keechma_todomvc$worder$restart_BANG_(){
var temp__5733__auto__ = cljs.core.deref.call(null,keechma_todomvc.worder.running_app);
if(cljs.core.truth_(temp__5733__auto__)){
var current = temp__5733__auto__;
return keechma.app_state.stop_BANG_.call(null,current,keechma_todomvc.worder.start_BANG_);
} else {
return keechma_todomvc.worder.start_BANG_.call(null);
}
});
keechma_todomvc.worder.dev_setup = (function keechma_todomvc$worder$dev_setup(){
if(goog.DEBUG){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
keechma_todomvc.worder.main = (function keechma_todomvc$worder$main(){
keechma_todomvc.worder.dev_setup.call(null);

return keechma_todomvc.worder.start_BANG_.call(null);
});
goog.exportSymbol('keechma_todomvc.worder.main', keechma_todomvc.worder.main);
keechma_todomvc.worder.on_reload = (function keechma_todomvc$worder$on_reload(){
return keechma_todomvc.worder.restart_BANG_.call(null);
});

//# sourceMappingURL=worder.js.map?rel=1762299007000
