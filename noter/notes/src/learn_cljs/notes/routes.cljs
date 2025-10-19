(ns learn-cljs.notes.routes
  (:require [learn-cljs.notes.events :refer [emit!]]
            [bide.core :as bide]))

(defonce router                                            ;; <1>
  (bide/router [["/" :home]
                ["/notes/new" :create-note]
                ["/notes/:note-id" :edit-note]]))

(defn navigate! [route-params]
  (println "routes navigate!" route-params)
  (apply bide/navigate! router route-params))

(defn- on-navigate [name params query]
  (println "bide on-navigate " name params query)
  (emit! :route/navigated [name params query]))

(defn initialize! []                                       ;; <4>
  (bide/start! router {:default :routes/home
                       :on-navigate on-navigate}))
