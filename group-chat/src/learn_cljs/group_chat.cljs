(ns ^:figwheel-hooks learn-cljs.group-chat
  (:require
    [goog.dom :as gdom]
    [reagent.core :as reagent :refer [atom]]
    [reagent.dom :as rdom]))

(println "This text is printed from src/learn_cljs/group_chat.cljs. Go ahead and edit it and see reloading in action.")

(defn multiply [a b] (* a b))

(defonce app-state (atom {:text "Hello world!"}))

(defn get-app-element []
  (gdom/getElement "app"))

(defn hello-world []
  [:div
   [:h1 (:text @app-state)]
   [:h3 "Edit this in src/learn_cljs/group_chat.cljs and watch it change!"]])

(defn mount [el]
  (rdom/render [hello-world] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))



(mount-app-element)


(defn ^:after-load on-reload []
  (mount-app-element)



  )
