(ns giggin.components.orders
  (:require [giggin.state :as state ]))

(defn remove-order
  [id q]
  (if (> q 1)
    (swap! state/orders update id dec)
    (swap! state/orders dissoc id)
    )
  )
(defn orders
  []
  [:div "orders"
   (for [id (keys @state/orders)]
     [:div {:key id}
        [:div.btn.btn--primary.tooltip
              { :data-tooltip "Remove from order!"
                :on-click #(remove-order id (id @state/orders))}
              [:i.icon.icon--cross]]
        (:title (id @state/gigs))
        " - "
        (id @state/orders)
        ])])
