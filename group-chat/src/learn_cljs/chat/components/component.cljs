(ns learn-cljs.chat.components.component
  (:require [learn-cljs.chat.state :as state]))

(defn init-component
  "Initialize a component.
  Parameters:
  el - Element in which to render component
  watch-key - Key that uniquely identifies this component
  accessor - Function that takes the app state and returns the
             component state
  render - Function that takes the parent element and component
           state and renders DOM"
  [el watch-key accessor render]
  (add-watch state/app-state watch-key                     ;; <1>
    (fn [_ _ old new]
      (let [state-old (accessor old)                       ;; <2>
            state-new (accessor new)]
        (when (not= state-old state-new)                   ;; <3>
          (set! (.-innerText el) "")
          (render el state-new)))))
  (render el (accessor @state/app-state))                  ;; <4>
  el)                                                      ;; <5>
