(ns tests.orders-test
  (:require [cljs.test :refer [deftest is]]
            [giggin.state :as state ]
            [tests.testhelper :refer [hiccup-normalize] ]
            [reagent.core :as r]
            [giggin.components.orders :as t]))

(deftest orders-test
  (let [app state/app-state
        ;; modal (r/cursor app [:gig-editor :modal])
        orders (state/orders-cursor app)
        gigs (state/gigs-cursor app)
        ;; gig1 (second (first @gigs))
        gig1 (:gig-05 @gigs)
        init-value    #(t/orders app)
        ;; test1-id-value (str "gig-" (random-uuid))
        ;; test1-value   {:id test1-id-value
        ;;               :title "test" :desc "test" :price 100 :img "100" :sold-out false}
        ]
    ;; (println @gigs)
    ;; (println gig1)
    (is (= (first (init-value)) :aside))
    (is (= (first (second (init-value))) :div.order))
    (is (= (hiccup-normalize (init-value))
       [:aside
        [:div.order
         [:__component__ :__ratom__]
         [:div.empty
          [:div.title "You don't have any orders."]
          [:div.subtitle "Click on a + to add an order"]]]]))
    (is (= true (empty? @orders)))
    (t/add-to-order  app (:id gig1))
    (is (= false (empty? @orders)))
    ;; (println (hiccup-normalize (t/orders app)))
    ;; (println "gig1 = " gig1)
    (is (= 5000 (:price gig1)))
    (is (= (hiccup-normalize (t/orders app))
       [:aside
        [:div.order
         [:__component__ :__ratom__]
         [:div.body
          [[:div.item
            {:key :gig-05}
            [:div.img
             [:img {
                :src "https://res.cloudinary.com/schae/image/upload/f_auto,q_auto/v1519552695/giggin/dan-schiumarini-427769.jpg",
                :alt "White"}]]
            [:div.content [:p.title "White × 1"]]
            [:div.action
             [:div.price "$50"]
             [:button.btn.btn--link.tooltip
              {:data-tooltip "Remove", :on-click :__fn__}
              [:i.icon.icon--cross]]]]]
          [:div.total
           [:hr]
           [:div.item
            [:div.content "Total: "]
            [:div.action [:div.price "$50"]]
            [:button.btn.btn--link.tooltip
             {:data-tooltip "Remove all", :on-click :__fn__}
             [:i.icon.icon--delete]]]
           [:__component__]]]]]))
    ))


(deftest orders-item-test
  (let [app state/app-state
        gigs (state/gigs-cursor app)
        orders (state/orders-cursor app)
        ;; modal (r/cursor app [:gig-editor :modal])
        gig1 (first @gigs)
        init-value    (t/order-item orders (:id gig1) 1 @gigs)
        ]
    (is (= (hiccup-normalize init-value)
      [:div.item {:key nil}
        [:div.img [:img {:src nil, :alt nil}]]
        [:div.content [:p.title " × 1"]]
        [:div.action
          [:div.price "$0"]
          [:button.btn.btn--link.tooltip
            {:data-tooltip "Remove",
              :on-click :__fn__}
            [:i.icon.icon--cross]]]]))
    ;; (t/gig-editor-new app)
    ;; (is (= (dissoc @value :id) (dissoc init-value :id)))
    ;; (is (= @modal true))
    ))
