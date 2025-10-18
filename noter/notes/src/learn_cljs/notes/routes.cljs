(ns learn-cljs.notes.routes
  (:require [learn-cljs.notes.events :refer [emit!]]
            [bide.core :as bide]))

(defonce router                                            ;; <1>
  (bide/router [["/" :home]
                ["/notes/new" :create-note]
                ["/notes/:note-id" :edit-note]]))

(defn navigate! [route-params]                             ;; <2>
  (apply bide/navigate! router route-params))

(defn- on-navigate [name params query]                     ;; <3>
  (emit! :route/navigated [name params query]))

(defn initialize! []                                       ;; <4>
  (bide/start! router {:default :routes/home
                       :on-navigate on-navigate}))
