(ns keechma-todomvc.components.import-txt
  (:require [keechma-todomvc.ui :refer [<comp comp> sub> <cmd]]
            [reagent.core :as r]
            [clojure.string :as str]))

(defn process-lines [ctx content]
  (doseq [line (str/split content #"\n")]
    (let [t (str/trim line)]
      (when-not (empty? t)
        (<cmd ctx :create-todo t)))))

(defn import-from-path [ctx path]
  ;; путь может быть абсолютный для разработки
  ;; или относительный к ./txt/ при проде
  (let [url (if (.startsWith path "/")
              path
              (str "./txt/" path))]
    (-> (js/fetch url)
        (.then (fn [resp]
                 (if (.-ok resp)
                   (.text resp)
                   (throw (js/Error. (str "HTTP error: " (.-status resp)))))))
        (.then #(process-lines ctx %))
        (.catch #(js/console.error "Import failed:" %)))))

(defn import-from-dialog [ctx e]
  (let [file (-> e .-target .-files (aget 0))
        reader (js/FileReader.)]
    (set! (.-onload reader)
          (fn [evt]
            (let [content (.. evt -target -result)]
              (process-lines ctx content))))
    (.readAsText reader file)))

(defn render [ctx {:keys [path title]
                   :or {title "📎 Import from file"}}]
  (let [file-input (r/atom nil)]
    (fn []
      [:div.import-wrapper
       (if path
         [:button {:on-click #(import-from-path ctx path)} title]
         [:<>
          [:input {:type "file"
                   :style {:display "none"}
                   :ref #(reset! file-input %)
                   :on-change #(import-from-dialog ctx %)}]
          [:button {:on-click #(.click @file-input)} title]])])))

(def component
  (<comp :renderer render))
