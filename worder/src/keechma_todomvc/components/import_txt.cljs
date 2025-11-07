(ns keechma-todomvc.components.import-txt
  (:require [keechma-todomvc.ui :refer [<comp comp> sub> <cmd]]
            [reagent.core :as r]))

(defn import-file [ctx e]
  (let [file (-> e .-target .-files (aget 0))
        reader (js/FileReader.)]
    (set! (.-onload reader)
          (fn [evt]
            (let [content (.. evt -target -result)
                  lines (.split content "\n")]
              (doseq [l lines]
                (let [t (clojure.string/trim l)]
                  (when-not (empty? t)
                    (<cmd ctx :create-todo t)))))))
    (.readAsText reader file)))

(defn render [ctx]
  (let [file-input (r/atom nil)]  
    (fn []
      [:div
        [:input {:type "file"
                :style {:display "none"}
                :ref #(reset! file-input %)
                :on-change #(import-file ctx %)}]
        [:button {:on-click #(.click @file-input)}
        "Import from file"]])))

(def component
  (<comp :renderer render))
