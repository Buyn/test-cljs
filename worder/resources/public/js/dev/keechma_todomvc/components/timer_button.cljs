(ns keechma-todomvc.components.timer-button
  (:require [keechma-todomvc.ui :refer [<comp comp> sub>]]))

(defn render [ctx]
  [:h1 "seconds"]
  [:h1 "Worder"]
  )

(def component
  (<comp :renderer render
         ;; :component-deps [:new-todo
         ;;                  :toggle-todos
         ;;                  :todo-list
         ;;                  :footer]
         ;; :subscription-deps [:has-todos?]
         ))
