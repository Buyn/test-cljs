(ns giggin.helpers)

(defn format-price
  "convert cens to evro"
  [cents]
  (str "$" (/ cents 100)))
