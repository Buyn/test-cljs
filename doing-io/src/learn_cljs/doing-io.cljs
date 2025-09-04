(prn (binding [*out* (java.io.StringWriter.)](ns ^:figwheel-hooks learn-cljs.doing-io
  (:require
   [goog.dom :as gdom]))

(println "This text is printed from src/learn_cljs/doing_io.cljs. Go ahead and edit it and see reloading in action.")

(defn multiply [a b] (* a b))


(defonce app-state (atom {:text "Hello world!"}))

(defn get-app-element []
  (gdom/getElement "app"))




(defn ^:after-load on-reload []



)))
