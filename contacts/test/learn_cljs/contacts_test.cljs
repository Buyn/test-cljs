(ns learn-cljs.contacts-test
    (:require
     [cljs.test :refer-macros [deftest is testing]]
     [learn-cljs.contacts :refer [make-address]]))

(deftest make-address-test
  (is (= {:street "523 Sunny Hills Cir."
           :city "Springfield"
           :state "MI"
           :postal "11111"
          :country "USA"}
         (make-address
           {:street "523 Sunny Hills Cir."
           :city "Springfield"
           :state "MI"
           :postal "11111"
          :country "USA"}))))

;; (deftest multiply-test-2
;;   (is (= (* 75 10) (multiply 10 75))))
