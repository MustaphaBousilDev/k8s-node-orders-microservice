#01--mustapha@mustapha-MS-7D48:~/Desktop/workspace/k8s/k8s-node-orders-microservice$   minikube stop
✋  Stopping node "minikube"  ...
🛑  1 node stopped.
--------------------------------------------------------------------------------
--------------------------------------------------------------------------------
#02--mustapha@mustapha-MS-7D48:~/Desktop/workspace/k8s/k8s-node-orders-microservice$  minikube start
😄  minikube v1.36.0 on Ubuntu 24.04
✨  Using the docker driver based on existing profile
👍  Starting "minikube" primary control-plane node in "minikube" cluster
🚜  Pulling base image v0.0.47 ...
🔄  Restarting existing docker container for "minikube" ...
🎉  minikube 1.37.0 is available! Download it: https://github.com/kubernetes/minikube/releases/tag/v1.37.0
💡  To disable this notice, run: 'minikube config set WantUpdateNotification false'

🐳  Preparing Kubernetes v1.33.1 on Docker 28.1.1 ...
🔎  Verifying Kubernetes components...
    ▪ Using image gcr.io/k8s-minikube/storage-provisioner:v5
🌟  Enabled addons: default-storageclass, storage-provisioner
🏄  Done! kubectl is now configured to use "minikube" cluster and "default" namespace by default
----------------------------------------------------------------------------------
----------------------------------------------------------------------------------
#03--mustapha@mustapha-MS-7D48:~/Desktop/workspace/k8s/k8s-node-orders-microservice$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml
-> result:
namespace/kubernetes-dashboard created
serviceaccount/kubernetes-dashboard created
service/kubernetes-dashboard created
secret/kubernetes-dashboard-certs created
secret/kubernetes-dashboard-csrf created
secret/kubernetes-dashboard-key-holder created
configmap/kubernetes-dashboard-settings created
role.rbac.authorization.k8s.io/kubernetes-dashboard created
clusterrole.rbac.authorization.k8s.io/kubernetes-dashboard created
rolebinding.rbac.authorization.k8s.io/kubernetes-dashboard created
clusterrolebinding.rbac.authorization.k8s.io/kubernetes-dashboard created
deployment.apps/kubernetes-dashboard created
service/dashboard-metrics-scraper created
deployment.apps/dashboard-metrics-scraper created
----------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------
#04--mustapha@mustapha-MS-7D48:~/Desktop/workspace/k8s/k8s-node-orders-microservice/k8s$ kubectl apply -f dashboard-adminuser.yaml
-> result:
serviceaccount/admin-user created
clusterrolebinding.rbac.authorization.k8s.io/admin-user created
------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------
#05--mustapha@mustapha-MS-7D48:~/Desktop/workspace/k8s/k8s-node-orders-microservice/k8s$ kubectl -n kubernetes-dashboard create token admin-user
-> result: 
eyJhbGciOiJSUzI1NiIsImtpZCI6InBPYzRPemJZZEFSdUU1UWh6S19EckZWNWlVangwdVg4eWhxSzVwcHc4UmcifQ.eyJhdWQiOlsiaHR0cHM6Ly9rdWJlcm5ldGVzLmRlZmF1bHQuc3ZjLmNsdXN0ZXIubG9jYWwiXSwiZXhwIjoxNzY0NjM5ODU4LCJpYXQiOjE3NjQ2MzYyNTgsImlzcyI6Imh0dHBzOi8va3ViZXJuZXRlcy5kZWZhdWx0LnN2Yy5jbHVzdGVyLmxvY2FsIiwianRpIjoiYjExZDhlZTYtODI5NS00MGUxLWI3OWYtNTk2OTMwZmZiZmVmIiwia3ViZXJuZXRlcy5pbyI6eyJuYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsInNlcnZpY2VhY2NvdW50Ijp7Im5hbWUiOiJhZG1pbi11c2VyIiwidWlkIjoiNmIyZGZhZmItMjNkNS00OTFlLWExOGUtM2M0ZDdjZjNlOTMxIn19LCJuYmYiOjE3NjQ2MzYyNTgsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlcm5ldGVzLWRhc2hib2FyZDphZG1pbi11c2VyIn0.lCa_or7SFYjBAm_vs7iFxTtQGPGJBWQ5vLIeiwZz3DbWMALdavRPtXRUtADSa0pAHImVNFUddUqm4H7uwsPsV1KpFYE6GxQ_5x75JB6qah6kclDTJsbZ_LbkjeRjDC92tu4B3vPr285mX28XAiDSyGX5oRCi-eIFTyu-dXvpiZP9ItoCcNQaYmzDutZUkUA8EEEtWCxdU-GtCtkEMVW2nt6y1DGFQVOGFtewBYIuwUzCbITIzlysc2zJc_cmRoWfnM8KFxZf_B-wDIjHcsqTA81RGwmYN2bsmaStXGU615nqvQBqe5dhgmYDFwtsGjxjMzIEVdaQBSDWo_B8VP8A7Q
--------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------
#06--mustapha@mustapha-MS-7D48:~/Desktop/workspace/k8s/k8s-node-orders-microservice/k8s$ kubectl proxy
-> result:
Starting to serve on 127.0.0.1:8001
--------------------------------------------------------------------------------------------
#07--vist this url( http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/) and coller the Token for go to the dashboard
