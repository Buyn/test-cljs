(ns giggin.components.gig-editor
  (:require [reagent.core :as r]
            [clojure.string :as str]))

(defn form-group-item
  [{:keys [id type value values]}]
  (let [chenge-value-to-atom
          #(swap! values
                  assoc
                    (keyword id)
                    (.. % -target -value))]
    [:div.form__group
   [:label.form__label {:for id} id]
   [:input.form__input {:type type
                        :id id
                        :value value
                        :on-change chenge-value-to-atom}]]))

(defn form-sold-out
  [values]
  (let [toggle-checkbox
          #(swap! values
                  assoc
                    :sold-out
                    (.. % -target -checked))]
   [:div.form__group
      [:label.form__label {:for "sold-out"} "sold-out"]
      [:label.form__switch
       [:input#sold-out {
                :type :checkbox
                :checked (:sold-out values)
                :on-change toggle-checkbox}]
       [:i.form__icon]]]))


(defn form-group
  [values]
  [:div
     [form-group-item
        { :id "title"
          :type "text"
          :value (:title @values)
          :values values}]
     [form-group-item
        { :id "desc"
          :type "text"
          :value (:desc @values)
          :values values}]
     [form-group-item
        { :id "img"
          :type "text"
          :value (:img @values)
          :values values}]
     [form-group-item
        { :id "price"
          :type "number"
          :value (:price @values)
          :values values}]])


;; (defn gig-editor-toggle
;;   [app & [status]]
;;   (swap! app update-in [:gig-editor :modal]
;;          #(if (some? status) status (not %))))

(defn gig-editor-toggle
  ([app] (swap! app update-in [:gig-editor :modal] not))
  ([app status]
         (swap! app assoc-in [:gig-editor :modal] status)))


(defn gig-editor-open
  ([app]
   (gig-editor-toggle app true))
  ([app {:keys [id title desc price img sold-out] :as el}]
    (swap! app
          assoc-in [:gig-editor :values]
          { :id       (or id (str "gig-" (random-uuid)))
            :title    (str/trim title)
            :desc     (str/trim desc)
            :img      (str/trim img)
            :price    (js/parseInt price)
            :sold-out sold-out})
   (gig-editor-toggle app true)))

(defn gig-editor-new
  [app]
  (gig-editor-open app
                   {:id (str "gig-" (random-uuid))
                    :title "" :desc "" :price 0 :img "" :sold-out false}))

(defn gig-editor-insert
  "записывает значение из сруктуры гигэдитора в структуру гиг
    или если передано значение то записывает переданое в структуру гиг"
  ([app] (gig-editor-insert app (get-in @app [:gig-editor :values])))
  ([app {:keys [id title desc price img sold-out]}]
    (swap! app
            assoc-in [:gigs id]
            { :id       (or id (str "gig-" (random-uuid)))
              :title    (str/trim title)
              :desc     (str/trim desc)
              :img      (str/trim img)
              :price    (js/parseInt price)
              :sold-out sold-out})))



(defn gig-editor-component
  [app]
  (let [modal (r/cursor app [:gig-editor :modal])
        values (r/cursor app [:gig-editor :values])
        close-modal #(gig-editor-toggle app false)
        save-and-close (fn []
                          (gig-editor-insert app )
                          (close-modal))]
      [:div.modal (when @modal {:class "active"})
    [:div.modal__overlay]
    [:div.modal__container
      [:div.modal__body
        [form-group values]
        [form-sold-out values]]
      [:div.modal__footer
        [:button.btn.btn--link.float--left
          {:on-click close-modal}
          "Cancel"]
        [:button.btn.btn--secondary
          {:on-click save-and-close}
          "Save"]]]]))
