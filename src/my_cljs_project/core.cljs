(prn (binding [*out* (java.io.StringWriter.)](ns my-cljs-project.core)                                  ;; <1>

(js/alert "Hello World!")                                   ;; <2>))
