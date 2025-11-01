🚦 RideTrack

RideTrack is a lightweight, containerized backend for tracking rides and managing live ride statuses.
Built with Node.js, Docker, and Jenkins, it showcases automated CI/CD workflows and secure cloud deployment.

| Layer                | Technology         |
| -------------------- | ------------------ |
| **Backend**          | Node.js (Express)  |
| **CI/CD**            | Jenkins            |
| **Containerization** | Docker             |
| **Cloud Hosting**    | AWS EC2 (t3.large) |

📦 Features

🔗 RESTful API for ride tracking and status management

🐳 Dockerized backend ensuring consistent environment setup

⚙️ Automated Jenkins pipeline with stages for:

Dependency installation

Application runtime validation

Docker image build

Deployment placeholder for EC2 or Kubernetes

🔧 CI/CD Pipeline Overview

Flow Diagram:

GitHub Push
   ↓
Jenkins Trigger
   ↓
Install Dependencies
   ↓
Run App & Validate
   ↓
Build Docker Image
   ↓
Deploy to EC2 / Kubernetes

📂 Project Structure

RideTrack/
├── src/
│   └── server.js
├── Dockerfile
├── Jenkinsfile
├── package.json
└── README.md

🧪 Sample Output

$ curl http://localhost:3000
🚦 RideTrack backend is live — CI/CD pipeline initialized.


