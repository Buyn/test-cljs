(ns giggin.components.gig-editor)

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
                         ;; :id "sold-out"
                :type :checkbox
                :checked (:sold-out @values)
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


(defn gig-editor
  [modal values insert-gig]
  (let [close-modal #(reset! modal false)
        save-and-close (fn []
                          (insert-gig @values)
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
