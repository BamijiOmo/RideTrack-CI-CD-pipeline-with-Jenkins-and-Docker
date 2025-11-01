pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run App') {
            steps {
                sh 'node src/server.js & sleep 5'
                sh 'curl -s http://localhost:3000'
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    docker.build('ridetrack-image')
                }
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Deployment step placeholder — customize for EC2, Kubernetes, or staging server.'
            }
        }
    }
}

