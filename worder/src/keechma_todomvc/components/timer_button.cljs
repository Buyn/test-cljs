(ns keechma-todomvc.components.timer-button
  (:require [keechma-todomvc.ui :refer [<comp comp> sub>]]
            [reagent.core :as r]))

(defn render [ctx]
  (let [running? (r/atom false)
          seconds  (r/atom 0)
          timer-id (r/atom nil)]
      (fn []
        [:div.timer
          [:button
            {:on-click
              (fn [_]
                (if @running?
                  (do
                    (swap! running? not)
                    (js/clearInterval @timer-id)
                    (reset! timer-id nil))
                  (do
                    (reset! seconds 0)
                    (swap! running? not)
                    (reset! timer-id
                            (js/setInterval
                              #(swap! seconds inc)
                              1000)))))}
            (if @running? "■ Stop" "▶ Start")]
          [:span.seconds (str @seconds " sec.")]])))

(def component
  (<comp :renderer render
         ;; :component-deps [:new-todo
         ;;                  :toggle-todos
         ;;                  :todo-list
         ;;                  :footer]
         ;; :subscription-deps [:has-todos?]
         ))
