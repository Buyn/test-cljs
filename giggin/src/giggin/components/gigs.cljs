(ns giggin.components.gigs
  (:require
            [giggin.components.gig-editor :refer [gig-editor-component gig-editor-open gig-editor-new]]
            [giggin.components.orders :refer [add-to-order]]
            [reagent.core :as r]
            [giggin.helpers :refer [format-price]]))

(defn gig [app {:keys [id img title price desc] :as el}]
    [:div.gig {:key id}
      [:img.gig__artwork {:src img
                          :alt title
                          :on-click #(gig-editor-open app el)}]
      [:div.gig__body
        [:div.gig__title
          [:div.btn.btn--primary.float--right.tooltip
            { :data-tooltip "Add to order!"
              :on-click #(add-to-order app id)}
            [:i.icon.icon--plus]]
          title]]
      [:p.gig__price (format-price price)]
      [:p.gig__desc desc]])

(defn add-new-gig [app]
  [:div.gig
    [:button.add-gig
        {:on-click #(gig-editor-new app)}
        [:div.add__title
      [:i.icon.icon--plus]
      [:h1 "Add gig"]]]])

(defn gigs [app]
    [:main
      [gig-editor-component app]
      [:div.gigs
        [add-new-gig app]
        (for [el (vals (:gigs @app))]
          (gig app el))]])
