(ns keechma-todomvc.components.export-txt
  (:require [keechma-todomvc.ui :refer [<comp sub> route>]]
            [clojure.string :as str]))

(defn export-file [todos]
  (let [lines (map (fn [{:keys [title time]}]
                     (str title "\t" (or time 0)))
                   todos)
        content (str/join "\n" lines)
        blob (js/Blob. #js [content] #js {:type "text/plain"})
        url (.createObjectURL js/URL blob)
        a (.createElement js/document "a")]
    (set! (.-href a) url)
    (set! (.-download a) "todos.txt")
    (.click a)
    (.revokeObjectURL js/URL url)))

(defn render [ctx]
  (let [route-status (keyword (route> ctx :status))
        todos (sub> ctx :todos-by-status route-status)]
    [:button {:on-click #(export-file @todos)}
     "💾 Export to text"]))

(def component
  (<comp :renderer render
         :subscription-deps [:todos-by-status]))
