(ns giggin.core
  (:require [reagent.core :as r]
            [giggin.components.gigs :refer [gigs]]
            [giggin.state :as state ]
            [giggin.components.header :refer [header]]
            [giggin.components.orders :refer [orders]]
            [giggin.components.footer :refer [footer]]))

(defonce app-state state/app-state)

(defn app
  []
  [:div.container
   [header]
   [gigs app-state]
   [orders app-state]
   [footer]])

(defn ^:export main
  []
  (r/render
    [app]
    (.getElementById js/document "app")))
