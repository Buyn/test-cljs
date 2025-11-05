(ns keechma-todomvc.components.timer-button
  (:require [keechma-todomvc.ui :refer [<comp comp> sub>]]
            [reagent.core :as r]))

(defn render [_ctx]
  (let [seconds (r/atom 0)    ;; здесь живёт только результат
        timer-id (r/atom nil)
        toggle! (fn [_]
           (if @timer-id
             ;; Stop
             (do (js/clearInterval @timer-id)
                 (reset! timer-id nil))
             ;; Start
             (let [start-ms (.now js/Date)]
               (reset! timer-id
                       (js/setInterval
                        (fn []
                          (let [elapsed (/ (- (.now js/Date) start-ms) 1000)]
                            (reset! seconds elapsed)))
                        100)))))]  

    (fn []
      [:div.timer
       [:button
        {:on-click toggle!} 
        (if @timer-id "■ Stop" "▶ Start")]
       [:span.seconds (str @seconds " sec")]])))

(def component
  (<comp :renderer render))
