(ns ^:figwheel-hooks learn-cljs.weather                    ;; <1>
  (:require
   [goog.dom :as gdom]
   [reagent.dom :as rdom]
   [reagent.core :as r]))

(defn hello-world []                                       ;; <2>
  [:div
   [:h1 {:class "app-title"} "Hello, World"]])

(defn mount-app-element []                                 ;; <3>
  (rdom/render [hello-world] (gdom/getElement "app")))
(mount-app-element)

(defn ^:after-load on-reload []                            ;; <4>
  (mount-app-element))
