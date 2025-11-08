(ns keechma-todomvc.components.export-txt
  (:require [keechma-todomvc.ui :refer [<comp sub> route>]]
            [clojure.string :as str]))

(defn export-file [todos]
  (let [lines (map (fn [{:keys [title time]}]
                     (str title "\t" (or time 0)))
                   todos)
        content (str/join "\n" lines)
        blob (js/Blob. #js [content] #js {:type "text/plain;charset=utf-8"})
        url (.createObjectURL js/URL blob)
        a (.createElement js/document "a")]
    ;; создаём ссылку
    (set! (.-href a) url)
    (set! (.-download a)
          (str "todos-" (.toISOString (js/Date.)) ".txt"))
    ;; нужно добавить элемент в DOM, иначе Firefox не среагирует
    (.appendChild (.-body js/document) a)
    ;; "клик" по ссылке
    (.click a)
    ;; удаляем элемент из DOM и освобождаем URL чуть позже
    (.remove a)
    (js/setTimeout #(js/URL.revokeObjectURL url) 2000)))

(defn render [ctx]
  (let [route-status (keyword (route> ctx :status))
        todos (sub> ctx :todos-by-status route-status)]
    [:button.export-btn
     {:on-click #(export-file todos)
      :title "Export current list to text file"}
     "💾 Export to text"]))

;; (defn render [ctx]
;;   (let [route-status (keyword (route> ctx :status))
;;         todos (sub> ctx :todos-by-status route-status)]
;;     [:button.export-btn
;;      {:on-click #(export-file @todos)
;;       :title "Export current list to text file"}
;;      "💾 Export to text"]))

(def component
  (<comp :renderer render
         :subscription-deps [:todos-by-status]))
