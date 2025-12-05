(ns tests.gig-editor-test
  (:require [cljs.test :refer [deftest is]]
            [giggin.state :as state ]
            [reagent.core :as r]
            [giggin.components.gig-editor :as t]))

(deftest new-edit-test
  (let [app state/app-state
        value (r/cursor app [:gig-editor :values])
        modal (r/cursor app [:gig-editor :modal])
        init-value    @value
        test1-id-value (str "gig-" (random-uuid))
        test1-value   {:id test1-id-value
                      :title "test" :desc "test" :price 100 :img "100" :sold-out false}]
    (is (= (not @modal)))
    (t/gig-editor-new app)
    (is (= (dissoc @value :id) (dissoc init-value :id)))
    (is (= @modal true))
    (t/gig-editor-toggle app false)
    (is (= @modal false))
    (t/gig-editor-open app test1-value)
    (is (= @value test1-value))
    (is (= @modal true))
    (t/gig-editor-insert app)
    (is (= @value test1-value))
    (is (= (get-in @app [:gigs test1-id-value]) test1-value))
    (is (= @modal true))
    (t/gig-editor-new app)
    (is (= (dissoc @value :id) (dissoc init-value :id)))
    (is (= @modal true))
    ))
