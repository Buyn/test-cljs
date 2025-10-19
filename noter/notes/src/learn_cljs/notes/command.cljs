(ns learn-cljs.notes.command
  (:require [learn-cljs.notes.events :refer [emit!]]
            [learn-cljs.notes.routes :as routes]))


(defn handle-test-hello! [name]
  (println "Hello" name)                                   ;; <1>
  (emit! :test/greeting-dispatched {:name name}))          ;; <2>

(defn handle-navigate! [route-params]
  (routes/navigate! route-params))

(defn dispatch!
  ([command] (dispatch! command nil))
  ([command payload]
   (js/setTimeout                                          ;; <3>
     #(case command
        :test/hello (handle-test-hello! payload)
        :route/navigate (handle-navigate! payload)
        (js/console.error (str "Error: unhandled command: " command)))
     0)))
