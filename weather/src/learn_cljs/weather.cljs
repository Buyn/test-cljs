(prn (binding [*out* (java.io.StringWriter.)](ns ^:figwheel-hooks learn-cljs.weather                    ;; <1>
  (:require
   [goog.dom :as gdom]
   [reagent.dom :as rdom]
   [reagent.core :as r]
   [ajax.core :as ajax]))))

(prn (binding [*out* (java.io.StringWriter.)](defonce app-state (r/atom {:title "WhichWeather"
                            :postal-code ""
                            :api-key ""
                            :temperatures {:today {:label "Today"
                                                   :value nil}
                                           :tomorrow {:label "Tomorrow"
                                                      :value nil}}}))))

(prn (binding [*out* (java.io.StringWriter.)](defn handle-response [resp]
  (let [today (get-in resp ["list" 0 "main" "temp"])       ;; <1>
        tomorrow (get-in resp ["list" 8 "main" "temp"])]
    (swap! app-state                                       ;; <2>
        update-in [:temperatures :today :value] (constantly today))
    (swap! app-state
        update-in [:temperatures :tomorrow :value] (constantly tomorrow))))))

(prn (binding [*out* (java.io.StringWriter.)](defn get-forecast! []
  (let [postal-code (:postal-code @app-state)]             ;; <1>
    (ajax/GET "http://api.openweathermap.org/data/2.5/forecast"
         {:params {"q" postal-code
                   "appid" "12b0904cfab748cbcb6e98a5dc7c7ac4"
                   "units" "imperial"}
          :handler handle-response})))                     ;; <2>))

(prn (binding [*out* (java.io.StringWriter.)](defn title []
  [:h1 (:title @app-state)])

(defn temperature [temp]                                   ;; <1>
  [:div {:class "temperature"}
   [:div {:class "value"}
    (:value temp)]
   [:h2 (:label temp)]])

(defn postal-code []
  [:div {:class "postal-code"}
    [:h3 "Enter your postal code"]
    [:input {:type "text"
          :placeholder "api-key"
          :value (:api-key @app-state)
          :on-change #(swap! app-state assoc :api-key (-> % .-target .-value))}]
    [:input {:type "text"
          :placeholder "Postal Code"
          :value (:postal-code @app-state)
          :on-change #(swap! app-state assoc :postal-code (-> % .-target .-value))}]
    [:button {:on-click get-forecast!} "Go"]])

(defn app []
  [:div {:class "app"}
   [title]                                                 ;; <2>
   [:div {:class "temperatures"}
    (for [temp (vals (:temperatures @app-state))]          ;; <3>
      [temperature temp])]
   [postal-code]])))

(prn (binding [*out* (java.io.StringWriter.)](defn mount-app-element []                                 ;; <4>
  (rdom/render [app] (gdom/getElement "app")))

(mount-app-element)

(defn ^:after-load on-reload []                            ;; <4>
  (mount-app-element))))
