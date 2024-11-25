(ns learn-cljs.contacts                 ;
  (:require
    [goog.dom :as gdom]
    [hiccups.runtime])
  (:require-macros [hiccups.core :as hiccups]))

(def contact-list [
                   {:first-name "Phillip"
                    :last-name "Jordan"
                    :email "phil.j@hotmail.com"
                    :address {:street "523 Sunny Hills Cir."
                              :city "Springfield"
                              :state "MI"
                              :postal "11111"
                              :country "USA"}}])

(defn make-address [address]
  (select-keys address [:street :city :state :country]))

(defn maybe-set-address [contact]                          ;; <1>
  (if (:address contact)
    (update contact :address make-address)
    contact))

(defn make-contact [contact]
  (-> contact                                              ;; <2>
      (select-keys [:first-name :last-name :email])
      (maybe-set-address)))

(defn add-contact [contact-list input]
  (conj contact-list
        (make-contact input)))

(defn remove-contact [contact-list idx]
  (vec                                                     ;; <1>
    (concat                                                ;; <2>
      (subvec contact-list 0 idx)                          ;; <3>
      (subvec contact-list (inc idx)))))

(defn replace-contact [contact-list idx input]
  (assoc contact-list idx (make-contact input)))

(defn ^:after-load on-reload []



)
