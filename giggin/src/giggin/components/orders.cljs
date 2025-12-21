(ns giggin.components.orders
  (:require [giggin.state :as state ]
            [giggin.helpers :refer [format-price]]
            [giggin.state :refer [orders-cursor gigs-cursor]]
            [giggin.components.admin-panel :refer [admin-panel]]
            [giggin.components.checkout-modal :refer [checkout-modal]]))

(defn add-to-order
  [app id]
  (swap! app update-in [:orders id] inc))

(defn orders-total
  [orders gigs]
  (->> orders
       (map (fn [[id quant]]
              (* quant (get-in gigs [id :price]))))
       (apply + 0)))

(defn remove-order
  [orders id q]
  (if (> q 1)
    (swap! orders update id dec)
    (swap! orders dissoc id)))

(defn order-item
  [orders id quant gigs]
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
          [:div.price (format-price (* quant price))]
          [:button.btn.btn--link.tooltip
                { :data-tooltip "Remove"
                  :on-click #(remove-order orders id quant)}
              [:i.icon.icon--cross]]]]))


(defn orders
  [app]
  (let [orders (orders-cursor app)
        gigs   (gigs-cursor app)]
   [:aside
    [:div.order 
      [admin-panel app]
      (if (empty? @orders)
        [:div.empty
         [:div.title "You don't have any orders."]
         [:div.subtitle "Click on a + to add an order"]]
        [:div.body
          (for [[id quant] @orders]
              (order-item orders id quant @gigs))
          [:div.total
            [:hr]
            [:div.item
              [:div.content "Total: "]
              [:div.action
              [:div.price
                (format-price (orders-total @orders @gigs))]]
              [:button.btn.btn--link.tooltip
                  { :data-tooltip "Remove all"
                    :on-click #(reset! orders {})}
                [:i.icon.icon--delete]]]
            [checkout-modal]]])]]))
