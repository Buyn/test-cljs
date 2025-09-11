(ns learn-cljs.chat
    (:require [learn-cljs.chat.message-bus :as bus]
              [learn-cljs.chat.components.app              ;; <1>
               :refer [init-app]]

              [goog.dom :as gdom]))

(defonce initialized?
  (do
    (init-app                                              ;; <3>
      (gdom/getElement "app")
      bus/msg-ch)
    true))
