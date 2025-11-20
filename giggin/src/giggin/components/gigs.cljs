(ns giggin.components.gigs
  (:require [giggin.state :as state ]))

(defn gig
  [{:keys [id img title price desc] :as el}]
  [:div.gig {:key id}
    [:img.gig__artwork {:src img :alt title}]
    [:div.gig__body
     [:div.gig__title
      [:div.btn.btn--primary.float--right.tooltip {:data-tooltip "Add to order!"}
       [:i.icon.icon--plus]]
      title]]
   [:p.gig__price price]
   [:p.gig__desc desc]])

(defn gigs
  []
  [:main
    [:div.gigs
     (for [el (vals @state/gigs)]
       (gig el))
     ;; (map gig (vals @state/gigs))
     ]])
