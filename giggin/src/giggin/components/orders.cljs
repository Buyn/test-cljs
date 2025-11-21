(ns giggin.components.orders
  (:require [giggin.state :as state ]
            [giggin.helpers :refer [price-format] ]))


(defn orders-total
  [orders gigs]
  (->> orders
       (map (fn [[id quant]]
              (* quant (get-in gigs [id :price]))))
       (apply + 0)))

(defn remove-order
  [id q]
  (if (> q 1)
    (swap! state/orders update id dec)
    (swap! state/orders dissoc id)))

(defn order-item
  [id quant gigs]
  (let [title (get-in gigs [id :title])
        src   (get-in gigs [id :img])
        price (get-in gigs [id :price])]
      [:div.item {:key id}
        [:div.img
          [:img { :src src
                  :alt title}]]
        [:div.content
          [:p.title (str
            title " \u00D7 " quant)]]
        [:div.action
          [:div.price (price-format (* quant price))]
          [:button.btn.btn--link.tooltip
                { :data-tooltip "Remove"
                  :on-click #(remove-order id quant)}
              [:i.icon.icon--cross]]]]))



(defn orders
  []
  (let [orders state/orders
        gigs   state/gigs]
   [:aside
    [:div.order 
      (if (empty? @orders)
        [:div.empty
         [:div.title "You don't have any orders."]
         [:div.subtitle "Click on a + to add an order"]]
        [:div.body
          (for [[id quant] @orders]
              (order-item id quant @gigs))
          [:div.total
            [:hr]
            [:div.item
              [:div.content "Total: "]
              [:div.action
              [:div.price
                (price-format (orders-total @orders @gigs))]]
              [:button.btn.btn--link.tooltip
                  { :data-tooltip "Remove all"
                    :on-click #(reset! orders {})}
                [:i.icon.icon--delete]]]]])]]))
