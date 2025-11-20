(ns giggin.components.orders
  (:require [giggin.state :as state ]))

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
          [:div.price (* quant price)]
          [:button.btn.btn--link.tooltip
                { :data-tooltip "Remove"
                  :on-click #(remove-order id quant)}
              [:i.icon.icon--cross]]]]))

(defn orders
  []
  [:aside
    [:div.order 
      [:div.body
        (for [[id quant] @state/orders]
            (order-item id quant @state/gigs))
       "sumup"]]])
