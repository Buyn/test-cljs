(ns giggin.components.gigs
  (:require [giggin.state :as state ]
            [giggin.components.gig-editor :refer [gig-editor]]
            [reagent.core :as r]
            [clojure.string :as str]
            [giggin.helpers :refer [format-price]]))

(defn gig [{:keys [id img title price desc] :as el}]
  (let [add-to-order #(swap! state/orders update id inc)]
    [:div.gig {:key id}
      [:img.gig__artwork {:src img :alt title}]
      [:div.gig__body
        [:div.gig__title
          [:div.btn.btn--primary.float--right.tooltip
            { :data-tooltip "Add to order!"
              :on-click add-to-order}
            [:i.icon.icon--plus]]
          title]]
      [:p.gig__price (format-price price)]
      [:p.gig__desc desc]]))

(defn insert-gig
  [{:keys [id title desc price img sold-out]}]
  (swap! state/gigs
         assoc id { :id id
                    :title (str/trim title)
                    :desc (str/trim desc)
                    :img (str/trim img)
                    :price (js/parseInt price)
                    :sold-out sold-out}))


(defn btn-add-gig []
  (let [modal (r/atom false)
        values (r/atom {:id (str "gig-" (random-uuid))
                        :title "" :desc "" :price 0 :img "" :sold-out false})]
        [:div.gig
          [:button.add-gig
              {:on-click #(reset! modal true)}
              [:div.add__title
            [:i.icon.icon--plus]
            [:h1 "Add gig"]]]
          [gig-editor modal values insert-gig]]))

(defn gigs []
  [:main
    [:div.gigs
      [btn-add-gig]
      (for [el (vals @state/gigs)]
        (gig el))]])
