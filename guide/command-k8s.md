 kubectl delete deployment orders-service (name of pods)
  kubectl delete service orders-service
  kubectl delete configmap orders-service-config (name of file yaml that has MapConfig)

  ===== Command Verify ===========
    kubectl get deployments
    kubectl get services
    kubectl get configmaps