(defn make-contact [contact]
  (select-keys contact [:first-name :last-name :email :postal :address]))
