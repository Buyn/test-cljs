(ns tests.testhelper)
  ;; (:require [cljs.test :refer [deftest is]]
  ;;           [reagent.core :as r]


(defn hiccup-normalize [hiccup]
  (cond
    ;; 1️⃣ Reagent-компонент
    (and (vector? hiccup) (fn? (first hiccup)))
      (into [:__component__]
            (map hiccup-normalize (rest hiccup)))
    ;; 2️⃣ hiccup-вектор
    (vector? hiccup)
      (mapv hiccup-normalize hiccup)
    ;; 3️⃣ props map (event handlers и т.п.)
    (map? hiccup)
      (into {}
            (for [[k v] hiccup]
              [k (if (fn? v)
                  :__fn__
                  (hiccup-normalize v))]))
    ;; 4️⃣ всё остальное
    :else hiccup))
