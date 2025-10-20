(ns learn-cljs.notes.state
  (:require [reagent.core :as r]
            [learn-cljs.notes.events :as events]))

(def initial-state
  {:current-route [:home]                                  ;; <1>
   :notifications {:messages []                            ;; <2>
                   :next-id 0}
   :data {:notes {}
          :tags {}}})

(defonce app (r/atom initial-state))

(def handlers (atom {}))

(defn register-handler! [event-type handler-fn]
  (swap! handlers assoc event-type handler-fn))

(events/register-listener!
 (fn [type payload]
   (println "handlerer externel")
   (when-let [handler-fn (get @handlers type)]
     (println "handlerer internel")
     (swap! app #(handler-fn  % payload)))))
