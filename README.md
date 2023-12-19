
# Single Deployment Using Helm and K8s

This project covers the step by step guide to Containerize and Deploy Web Application using Docker, Kubernetes and Helm Charts.

## DevOps Tools / Service Used
+ Docker
+ Kubernetes
+ Helm
+ Kind

## Prerequisites

To deploy the Web Application on Docker, Kubernetes and Helm, we have the following prerequisites:

+ Install and configure [Docker](https://docs.docker.com/desktop/)

+ Install and configure [Kubernetes](https://kubernetes.io/docs/setup/)

+ Install and configure [Helm](https://helm.sh/docs/intro/quickstart/)

+ Install and configure [Kind](https://kind.sigs.k8s.io/docs/user/quick-start/)






## How to work

We will start by containerizing our web application. You do not need to worry about creating an application and a Docker file.

I have already created my porfolio React application. This application is available inside the `Application` folder.

You also do not worry about creating a `Dockerfile`, as i have already prepared a `Dockerfile`, which is present inside the `Application` folder.

### Task 1: Containerize and Pushing our Application

For this task, perform the following steps:

+ Create a docker image
+ Push this image to Docker Hub

Use the `cd Application` command to change the directory to the application.

Use the `docker build -t username/my-image_name .` command to build your Docker image.

Use the following commands to push your image to Docker Hub:

```shell
docker login -u my-username -p my-password
docker push my-username/my-image-name
```

After building the image, you can use the following command to verify the image:

```shell
docker images
```

### Task 2: Set Up the Environment

Before moving ahead, we need **Helm**, which we will use later to deploy our application. Helm is a package manager for Kubernetes. It was made to bundle Kubernetes resource files into a single package that can be easily deployed.

You don’t need to worry about downloading Helm or changing its mode. i have already downloaded its install script, and it is available to use in the repo root directory.

For this task, perform the following steps:

+ Use the `cd ..` command to change your directory to root.
+ Use the `ls` command to list all the files.
+ Use the `./get_helm.sh` command to run the installation script.
+ Use the `helm --help` command to verify the installation.

### Task 3: Set Up the Cluster

To run Kubernetes, you need a **cluster**. A **cluster** is a group of computers working together that can be viewed as a single system.

Kubernetes provides us with several distributions to create this cluster. For learning purposes though, we do not need a complete cluster. Instead, we can use any one of the following:

+ minikube
+ kind
+ Docker Desktop
+ kubeadm

We’ll be using **kind**.

For this task, perform the following steps:

+ Create a kind cluster.

We will use the following command: 

```shell
kind create cluster
```

### Task 4: Set Up the Chart

In Helm, a package is known as a **chart**. It is a set of Helm-specific files that install an application on a Kubernetes cluster. A Helm chart helps us deploy applications ranging from simplest to the most complex.

For this task, perform the following steps:

+ Create a Helm chart template.

We will use the following command:

```shell
helm create your-chart-name
```

### Task 5: Configure the Chart

Docker Hub allows differentiation between the images by allowing you to name each image uniquely. You can also save different versions of your applications by classifying these images with different tags.

To deploy your own application, configure the Helm chart to use your own Docker image.

For this task, perform the following steps:

+ Configure the chart to use your repository name.
+ Change the image tag to the one you recently created.

You can change these values in the `values.yaml` which is available in the `/your-chart-name/` directory.

Use the `docker images` command to get your image’s name and tag.

The resultant fields in the values.yaml file would be the following:

    repository: your-image-name
    tag: your-image-tag

### Task 6: Configure the Service

In Kubernetes, a ***Service*** provides an abstraction that defines access to a Pod. It sits in front of the Pod and delivers requests to the Pods behind it. The following are the types of Kubernetes Services:

+ `ClusterIP`
+ `NodePort`
+ `LoadBalancer`
+ `ExternalName`

For this task, perform the following steps:

+ Change the Service type to `NodePort`.
+ Configure the chart to use the `31111` port.

You can perform the task above in the `your-chart-name/values.yaml` file.

The resultant fields in the `values.yaml` file would be the following:

    service:
        type: NodePort
        port: 31111

### Task 7: Verify the Values

Before moving, check if the application is configured correctly, meaning that it is using the correct Service, running on the desired port, and is the correct image name.

Verify that the `your-chart-name/values.yaml` file contains the correct configuration.

We will use the following command:
```shell
helm install --dry-run --debug your-chart-name your-chart-name
```

### Task 8: Configure the Deployment

Every application has unique functionality and may run on the same or different ports depending on the application type. In a `deployment.yaml` file, a `containerPort` is the port on which your application is accessible inside the container.

Your deployment file is in the `/your-chart-name/templates/deployment.yaml` path.

For this task, perform the following steps:

+ Configure your deployment to use your application port `3000`, Change the `containerPort` in the `deployment.yaml` file.

The resultant fields in the `deployment.yaml` file would be the following:

    containerPort: 3000

### Task 9: Deploy the Chart

Once you have edited all the essential fields, it’s time to move ahead and deploy the application.

For this task, perform the following steps:

+ Install the Helm chart.
+ Verify the Pod status.

Since Helm uses the name as the key, you cannot install two applications with the same name in the same namespace. This means that if the installation fails, you need to re-install your chart with a different name.

We will use the following commands: 
```shell
helm install your-app-name your-chart-name
kubectl get pods
```

### Task 10: Access the Application

In the final step of the project, you’ll access your already deployed application over the internet.

For this task, perform the following steps:

+ Check the status of your Service , Use the `kubectl get service` command to check the status of your Service.
+ Access your internal Kubernetes application over the internet. To do that, map your Service port to `31111`.

Use the following command to map your Service to your localhost:
```shell
kubectl port-forward svc/your-service-name --address 0.0.0.0 31111:31111
```

Verify the application is running by using the browser. Refresh the browser for this purpose.







