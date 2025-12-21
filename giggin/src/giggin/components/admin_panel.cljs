(ns giggin.components.admin-panel
  (:require [giggin.state :refer [gigs-cursor]]
            [giggin.fb.db :refer [db-save!]]))

(defn admin-panel
  [app]
  [:div.admin-panel
   [:button.btn.btn--primary
    {:styles {:width "100%"}
     :on-click #(db-save! ["gigs"] (clj->js @(gigs-cursor app)))}
    "Publish"]])
