import pro1 from "../../assets/tf-project-1-architecture-diagram.png";
import pro2 from "../../assets/prometheus-observability-stack-architecture-diagram.png";
import proj3 from "../../assets/Fault-Tolerant-Web-Hosting-on-Kubernetes.png";


const ProjectCardData = [
  {
    imgsrc: pro1,
    title: "AWS - Terraform Project 1",
    text: "Setup jenkins on Amazon-linux EC2 instance (under VPC) using Terraform and Ansible",
    repo: "https://github.com/natan-barel/Terraform-Project-1/",
    view: "",
  },
  {
    imgsrc: pro2,
    title: "AWS - Prometheus Observability Stack Using Docker",
    text: "Prometheus, Grafana & Alert Manager using Terraform, Docker and Docker Compose",
    repo: "https://github.com/natan-barel/prometheus-observability-stack",
    view: "",
  },
  {
    imgsrc: proj3,
    title: "Fault-Tolerant Web Hosting on Kubernetes",
    text: "Containerize and deploy a fault-tolerant Web Application using Docker and Kubernetes",
    repo: "https://github.com/natan-barel/Fault-Tolerant-Web-Hosting-on-Kubernetes",
    view: ""
  }
];

export default ProjectCardData;
