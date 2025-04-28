(ns learn-cljs.contacts                 ;
  (:require
    [goog.dom :as gdom]
    [hiccups.runtime]
    [goog.events :as gevents]
    [clojure.string :as str])
  (:require-macros [hiccups.core :as hiccups]))

(declare refresh! Set-app-html!)

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

(def initial-state
  {:contacts contact-list
   :selected nil
   :editing? false})

(def app-container (gdom/getElement "app"))

(def top-bar
  [:div {:class "navbar has-shadow"}
   [:div {:class "container"}
    [:div {:class "navbar-brand"}
     [:span {:class "navbar-item"}
      "ClojureScript Contacts"]]]])

(defn form-field                                           ;; <1>
  ([id value label] (form-field id value label "text"))
  ([id value label type]
   [:div {:class "field"}
     [:label {:class "label"} label]
     [:div {:class "control"}
       [:input {:id id
                :value value
                :type type
                :class "input"}]]]))

(defn render-contact-details [contact]
  (let [address (get contact :address {})]                 ;; <2>
    [:div {:id "contact-form" :class "contact-form"}
      (form-field "input-first-name" (:first-name contact) "First Name")
      (form-field "input-last-name" (:last-name contact) "Last Name")
      (form-field "input-email" (:email contact) "Email" "email")
      [:fieldset
        [:legend "Address"]
        (form-field "input-street" (:street address) "Street")
        (form-field "input-city" (:city address) "City")
        (form-field "input-state" (:state address) "State")
        (form-field "input-postal" (:postal address) "Postal Code")
        (form-field "input-country" (:country address) "Country")]]))

(defn action-button [id text icon-class]
  [:button {:id id
            :class "button is-primary is-light"}
    [:span {:class (str "mu " icon-class)}]
    (str " " text)])

(def save-button (action-button "save-contact" "Save" "mu-file"))
(def cancel-button (action-button "cancel-edit" "Cancel" "mu-cancel"))
(def add-button (action-button "add-contact" "Add" "mu-plus"))

(defn section-header [editing?]
  [:div {:class "section-header"}
    [:div {:class "level"}
      [:div {:class "level-left"}
        [:div {:class "level-item"}
          [:h1 {:class "subtitle"}
            [:span {:class "mu mu-user"}]
            "Edit Contact"]]]
      [:div {:class "level-right"}
        (if editing?
          [:div {:class "buttons"} cancel-button save-button]
          add-button)]]])

(defn format-name [contact]                                ;; <1>
  (->> contact                                             ;; <2>
       ((juxt :first-name :last-name))                     ;; <3>
       (str/join " ")))

(defn delete-icon [idx]
  [:span {:class "delete-icon"
          :data-idx idx}
    [:span {:class "mu mu-delete"}]])

(defn render-contact-list-item [idx contact selected?]
  [:div {:class (str "card contact-summary" (when selected? " selected"))
         :data-idx idx}                                    ;; <4>
    [:div {:class "card-content"}
      [:div {:class "level"}
        [:div {:class "level-left"}
          [:div {:class "level-item"}
            (delete-icon idx)
            (format-name contact)]]
        [:div {:class "level-right"}
          [:span {:class "mu mu-right"}]]]]])

(defn render-contact-list [state]
  (let [{:keys [:contacts :selected]} state]
    [:div {:class "contact-list column is-4 hero is-fullheight"}
      (map-indexed (fn [idx contact]
                     (render-contact-list-item idx contact (= idx selected)))
                   contacts)]))

(defn render-app! [state]
  (set-app-html!
    (hiccups/html
      [:div {:class "app-main"}
        top-bar
        [:div {:class "columns"}
          (render-contact-list state)
          [:div {:class "contact-details column is-8"}
            (section-header (:editing? state))
            [:div {:class "hero is-fullheight"}
              (if (:editing? state)
                (render-contact-details (get-in state [:contacts (:selected state)] {}))
                no-contact-details)]]]])))

(defn on-open-contact [e state]
  (refresh!
    (let [idx (int (.. e -currentTarget -dataset -idx))]
      (assoc state :selected idx
                   :editing? true))))

(def no-contact-details   [:p {:class "notice"}    "No contact selected"])

(defn get-field-value [id]
  (let [value (.-value (gdom/getElement id))]
    (when (not (empty? value)) value)))

(defn get-contact-form-data []
  {:first-name (get-field-value "input-first-name")
   :last-name (get-field-value "input-last-name")
   :email (get-field-value "input-email")
   :address {:street (get-field-value "input-street")
             :city (get-field-value "input-city")
             :state (get-field-value "input-state")
             :postal (get-field-value "input-postal")
             :country (get-field-value "input-country")}})

(defn on-save-contact [state]
  (refresh!
    (let [contact (get-contact-form-data)
          idx (:selected state)
          state (dissoc state :selected :editing?)]        ;; <1>
      (if idx
        (update state :contacts                            ;; <2>
                replace-contact idx contact)
        (update state :contacts
                add-contact contact)))))

(defn on-add-contact [state]
  (refresh! (-> state
                (assoc :editing? true)
                (dissoc :selected))))

(defn replace-contact [contact-list idx input]
  (assoc contact-list idx (make-contact input)))

(defn on-save-contact [state]
  (refresh!
    (let [contact (get-contact-form-data)
          idx (:selected state)
          state (dissoc state :selected :editing?)]
      (if idx
        (update state :contacts replace-contact idx contact)
        (update state :contacts add-contact contact)))))

(defn on-cancel-edit [state]
  (refresh! (dissoc state :selected :editing?)))

(defn on-delete-contact [e state]
  (.stopPropagation e)
  (let [idx (int (.. e -currentTarget -dataset -idx))]
    (refresh! (-> state
                  (update :contacts remove-contact idx)
                  (cond-> (= idx (:selected state))
                    (dissoc :selected :editing?))))))

(defn attach-event-handlers! [state]
  (doseq [elem (array-seq (gdom/getElementsByClass "contact-summary"))]
    (gevents/listen elem "click"
      (fn [e] (on-open-contact e state))))

  (doseq [elem (array-seq (gdom/getElementsByClass "delete-icon"))]
    (gevents/listen elem "click"
      (fn [e] (on-delete-contact e state))))

  (when-let [add-button (gdom/getElement "add-contact")]
    (gevents/listen add-button "click"
      (fn [_] (on-add-contact state))))

  (when-let [save-button (gdom/getElement "save-contact")]
    (gevents/listen save-button "click"
      (fn [_] (on-save-contact state))))

  (when-let [cancel-button (gdom/getElement "cancel-edit")]
    (gevents/listen cancel-button "click"
      (fn [_] (on-cancel-edit state)))))

(defn set-app-html! [html-str]
  (set! (.-innerHTML app-container) html-str))

(defn refresh! [state]                                     ;; <3>
  (render-app! state)
  (attach-event-handlers! state))

(refresh! initial-state)                                   ;; <4>
