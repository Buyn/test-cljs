(ns keechma-todomvc.components.timer-button
  (:require [keechma-todomvc.ui :refer [<comp comp> sub>]]
            [reagent.core :as r]))

(defn render [_ctx]
  (let [seconds (r/atom 0)
        timer-id (r/atom nil)
        start-ms (r/atom nil)
        running? (fn [](not (= @timer-id nil)))
        counter (fn [] (reset! seconds (/ (- (.now js/Date) @start-ms) 1000)))
        stop! (fn []
                (counter)
                (js/clearInterval @timer-id)
                (reset! timer-id nil)
                (reset! start-ms nil))
        start! (fn []
                  (reset! start-ms (.now js/Date))
                  (reset! timer-id (js/setInterval counter 100)))
        toggle! (fn [_] (if (running?) (stop!) (start!)))]  
    (fn []
      [:div.timer {:class (when (running?) "running")}
       [:button
        {:on-click toggle!} 
        (if (running?) "■ Stop" "▶ Start")]
       [:span.seconds (str @seconds " sec")]])))

(def component
  (<comp :renderer render))
