(ns giggin.components.gigs
  (:require [giggin.state :as state ]))

(defn gig
  [gig]
  [:div.gig {:key (:id gig)}
    [:img.gig__artwork {:src (:img gig) :alt (:title gig)}]
    [:div.gig
      [:div.title (:title gig)]
      [:div.desc (:desc gig)]]
   ])

(defn gigs
  []
  [:main
    [:div.gigs (map gig (vals @state/gigs))]])
