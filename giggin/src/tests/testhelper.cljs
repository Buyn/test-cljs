(ns tests.testhelper
  ;; (:require [reagent.ratom :as ratom])
  )


(defn hiccup-normalize [hiccup]
  (cond
    ;; 0️⃣ Reagent atom / cursor / reaction
    (instance? cljs.core/Atom hiccup)
      :__atom__

    (satisfies? cljs.core/IAtom hiccup)
      :__ratom__

    ;; 1️⃣ Reagent-компонент
    (and (vector? hiccup) (fn? (first hiccup)))
      (into [:__component__]
          (map hiccup-normalize (rest hiccup)))

    ;; 2️⃣ hiccup-вектор
    (vector? hiccup)
      (mapv hiccup-normalize hiccup)

    ;; 3️⃣ seq / list (важно!)
    (sequential? hiccup)
      (map hiccup-normalize hiccup)

    ;; 4️⃣ props map
    (map? hiccup)
      (into {}
          (for [[k v] hiccup]
            [k (cond
                 (fn? v) :__fn__
                 :else   (hiccup-normalize v))]))


    ;; 5️⃣ всё остальное

    :else hiccup))
