(prn (binding [*out* (java.io.StringWriter.)](ns learn-cljs.reagent-test
    (:require [reagent.core :as r]                         ;; <1>
              [reagent.ratom :as ratom]                    ;; <2>
              [reagent.dom :as rdom]
              [goog.dom :as gdom]
              [goog.events :as gevents]))))

(prn (binding [*out* (java.io.StringWriter.)](def a-cell (r/atom 0))                                    ;; <3>
(def b-cell (r/atom 0))
(def c-cell
  (ratom/make-reaction                                     ;; <4>
    #(+ @a-cell @b-cell)))

(def a (gdom/getElement "cell-a"))
(def b (gdom/getElement "cell-b"))
(def c (gdom/getElement "cell-c"))
(def test-text (gdom/getElement "test-text"))

(defn update-cell [cell]
  (fn [e]
    (let [num (js/parseInt (.. e -target -value))]
      (reset! cell num))))


(gevents/listen a "change" (update-cell a-cell))           ;; <5>
(gevents/listen b "change" (update-cell b-cell))

(ratom/run!                                                ;; <6>
  (set! (.-value c) @c-cell)
  )))

(prn (binding [*out* (java.io.StringWriter.)](defn- date-string [d]
  (let [pad-zero #(.padStart (.toString %) 2 "0")
        y (.getFullYear d)
        m (-> (.getMonth d) inc pad-zero)
        d (pad-zero (.getDate d))]
    (str y "-" m "-" d)))

(defn- current-date-string [d]
  (let [pad-zero #(.padStart (.toString %) 2 "0")
        y (.getFullYear d)
        m (-> (.getMonth d) inc pad-zero)
        d (pad-zero (.getDate d))]
    (str y "-" m "-" d)))

(defn initial-inputs []
  {:date (date-string (js/Date.))

   :minutes "0"})

(defonce state
  (r/atom {:inputs (initial-inputs)
           :entries {}}))

(defn date-input []
  (let [val (r/cursor state [:inputs :date])]              ;; <1>
    (fn []
      [:div.input-wrapper
        [:label "Day"]
        [:input {:type "date"
                 :value @val                               ;; <2>
                 :on-change #(reset! val                   ;; <3>
                               (.. % -target -value))}]])))

(defn time-input []
  (let [val (r/cursor state [:inputs :minutes])]
    (fn []
      [:div.input-wrapper
       [:label "Time (minutes)"]
       [:input {:type "number" :min 0 :step 1
                :value @val
                :on-change #(reset! val (.. % -target -value))}]])))))

(prn (binding [*out* (java.io.StringWriter.)](defn submit-button []
  [:div.actions
   [:button {:type "submit"} "Submit"]])

(defn submit-form [state]
  (let [{:keys [date minutes]} (:inputs state)]
    (-> state
        (assoc-in [:entries date] (js/parseInt minutes))
        (assoc :inputs (initial-inputs)))))))

(prn (binding [*out* (java.io.StringWriter.)](defn get-points [entries]
  (let [ms-in-day 86400000
        chart-days 30
        now (js/Date.now)]
    (map (fn [i]
           (let [days-ago (- chart-days (inc i))
                 date (date-string (js/Date. (- now (* ms-in-day days-ago))))]
             (get entries date 0)))
         (range chart-days))))))

(prn (binding [*out* (java.io.StringWriter.)](defn- random-point []
  (js/Math.floor (* (js/Math.random) 100)))

(defonce chart-data
  (let [points (map random-point (range 30))]              ;; <1>
    (r/atom {:points points
             :chart-max (reduce max 1 points)})))

(def chart-width 400)
(def chart-height 200)
(def bar-spacing 2)

(defn chart []
  (let [entries (r/cursor state [:entries])
        chart-data (ratom/make-reaction
                    #(let [points (get-points @entries)]
                       {:points points
                        :chart-max (reduce max 1 points)}))]
    (fn []
      (let [{:keys [points chart-max]} @chart-data
            bar-width (- (/ chart-width (count points))
                         bar-spacing)]
        [:svg.chart {:x 0 :y 0
                     :width chart-width :height chart-height}
         (for [[i point] (map-indexed vector points)
               :let [x (* i (+ bar-width bar-spacing))
                     pct (- 1 (/ point chart-max))
                     bar-height (- chart-height (* chart-height pct))
                     y (- chart-height bar-height)]]
           [:rect {:key i
                   :x x :y y
                   :width bar-width
                   :height bar-height}])]))))))

(prn (binding [*out* (java.io.StringWriter.)]))

(prn (binding [*out* (java.io.StringWriter.)](defn form []
  [:form.input-form {:on-submit (fn [e]
                                    (.preventDefault e)
                                    (swap! state submit-form))}
    [date-input]                                           ;; <3>
    [time-input]
    [submit-button]])))

(prn (binding [*out* (java.io.StringWriter.)](defn app []
  [:div.app
    [chart]
    [form]])

(rdom/render
  [app]
  (gdom/getElement "app"))))
