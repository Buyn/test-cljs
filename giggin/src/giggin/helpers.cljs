(ns giggin.helpers)

(defn price-format
  "convert cens to evro"
  [cents]
  (str "$" (/ cents 100)))
