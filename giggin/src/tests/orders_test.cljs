(ns tests.orders-test
  (:require [cljs.test :refer [deftest is]]
            [giggin.state :as state ]
            [tests.testhelper :refer [hiccup-normalize] ]
            [reagent.core :as r]
            [giggin.components.orders :as t]))



(deftest orders-test
  (let [app state/app-state
        ;; modal (r/cursor app [:gig-editor :modal])
        gigs (state/gigs-cursor app)
        gig1 (first @gigs)
        init-value    (t/orders app)
        ;; test1-id-value (str "gig-" (random-uuid))
        ;; test1-value   {:id test1-id-value
        ;;               :title "test" :desc "test" :price 100 :img "100" :sold-out false}
        ]
    ;; (println init-value)
    ;; (is (= init-value [:aside [:div.order [#object[giggin$components$admin_panel$admin_panel] app] [:div.empty [:div.title "You don't have any orders."] [:div.subtitle "Click on a + to add an order"]]]]))
    (is (= (first init-value) :aside))
    (is (= (first (second init-value)) :div.order))
    (is (= (hiccup-normalize init-value)
       [:aside
        [:div.order
         [:__component__ app]
         [:div.empty
          [:div.title "You don't have any orders."]
          [:div.subtitle "Click on a + to add an order"]]]]))

    (is (= (hiccup-normalize init-value)
       [:aside
        [:div.order
         [:__component__ app]
         [:div.empty
          [:div.title "You don't have any orders."]
          [:div.subtitle "Click on a + to add an order"]]]]))
    ;; (t/gig-editor-new app)
    ;; (is (= (dissoc @value :id) (dissoc init-value :id)))
    ;; (is (= @modal true))
    ))


(deftest orders-item-test
  (let [app state/app-state
        gigs (state/gigs-cursor app)
        orders (state/orders-cursor app)
        ;; modal (r/cursor app [:gig-editor :modal])
        gig1 (first @gigs)
        init-value    (t/order-item orders (:id gig1) 1 @gigs)
        ;; test1-id-value (str "gig-" (random-uuid))
        ;; test1-value   {:id test1-id-value
        ;;               :title "test" :desc "test" :price 100 :img "100" :sold-out false}
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
