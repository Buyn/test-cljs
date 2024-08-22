(ns learn-cljs.starbase
  (:require [bterm.core :as bterm]
            [bterm.io :as io]
            [learn-cljs.starbase.data :as data]
            [goog.dom :as gdom]))

(enable-console-print!)

(def term
  (bterm/attach (gdom/getElement "app")
                {:prompt "=> "
                 :font-size 14}))



(declare on-answer)

(defn prompt [game current]                                ;; <1>
  (let [scene (get game current)                           ;; <2>
        type (:type scene)]
    (io/clear term)
    (when (or (= :win type)                                ;; <3>
              (= :lose type))
      (io/print term
                (if (= :win type)                          ;; <4>
                    "You've Won! "
                    "Game Over ")))
    (io/println term (:title scene))                       ;; <5>
    (io/println term (:dialog scene))
    (io/read term #(on-answer game current %))))           ;; <6>

(defn on-answer [game current answer])

(prompt data/game :start)

