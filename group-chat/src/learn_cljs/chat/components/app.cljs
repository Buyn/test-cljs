(ns learn-cljs.chat.components.app
  (:require [learn-cljs.chat.components.header :refer [init-header]]
            [learn-cljs.chat.components.sidebar            ;; <1>
             :refer [init-sidebar]]
            [learn-cljs.chat.components.dom :as dom]
            [goog.dom :as gdom])
  (:import [goog.dom TagName]))

(defn init-main []
  (gdom/createDom TagName.SECTION "content-main"
    (init-header)))

(defn init-app [el msg-ch]
  (let [wrapper (dom/div "app-wrapper"                     ;; <2>
                  (init-sidebar msg-ch)
                  (init-main))]
    (set! (.-innerText el) "")
    (.appendChild el wrapper)))
