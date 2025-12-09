(ns giggin.api
  (:require [ajax.core :refer [GET]]))

(defn index-by
  [key coll]
  "Transfomr a coll to a map with a given key as a lookup value"
  (->> coll
       ;; (map (juxt key identity))
       (map (juxt #(keyword (key %)) identity))
       (into {})))

(defn handler [gigs response]
  (reset! gigs (index-by :id response)))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(defn fetch-gigs
  [gigs]
  (GET "https://gist.githubusercontent.com/jacekschae/8c10aa58a6163905fffcec33dd6f5a01/raw/20874f73b2c1d0ad08d828131d6ea8392950780a/gigs.json"
       {:handler #(handler gigs %)
        :error-handler error-handler
        :response-format :json
        :keywords? true}))
