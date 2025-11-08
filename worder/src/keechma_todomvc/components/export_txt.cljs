(ns keechma-todomvc.components.export-txt
  (:require [keechma-todomvc.ui :refer [<comp sub> route>]]
            [clojure.string :as str]))

(defn export-file [todos {:keys [sep ext eof]}]
  (let [lines (map (fn [{:keys [title time]}]
                     (str title sep (or time 0)))
                   todos)
        content (str/join eof lines)
        blob (js/Blob. #js [content] #js {:type "text/plain;charset=utf-8"})
        url (.createObjectURL js/URL blob)
        a (.createElement js/document "a")]
    ;; создаём ссылку
    (set! (.-href a) url)
    (set! (.-download a)
          (str "words-" (.toISOString (js/Date.)) ext))
    ;; нужно добавить элемент в DOM, иначе Firefox не среагирует
    (.appendChild (.-body js/document) a)
    ;; "клик" по ссылке
    (.click a)
    ;; удаляем элемент из DOM и освобождаем URL чуть позже
    (.remove a)
    (js/setTimeout #(js/URL.revokeObjectURL url) 2000)))

(defn render [ctx {:keys [title] :as props}]
  (let [route-status (keyword (route> ctx :status))
        todos (sub> ctx :todos-by-status route-status)]
    [:button.export-btn
     {:on-click #(export-file todos props)
      :title "Export current list to text file"}
     "💾 Export to text"]))

(def component
  (<comp :renderer render
         :subscription-deps [:todos-by-status]))
