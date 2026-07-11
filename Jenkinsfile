pipeline {
    agent any

    triggers {
        githubPush()
    }

    stages {

        stage('Git Pull') {
            steps {
                sh '''
                set -eux
                sudo -u ubuntu bash -lc '
                    cd /home/ubuntu/Code-Quest
                    pwd
                    git pull origin main
                '
                '''
            }
        }

        stage('Login to Amazon ECR') {
            steps {
                sh '''
                set -eux

                aws ecr get-login-password --region ap-south-1 | \
                docker login \
                --username AWS \
                --password-stdin \
                399399108501.dkr.ecr.ap-south-1.amazonaws.com
                '''
            }
        }

        stage('Docker Deploy') {
            steps {
                sh '''
                set -eux
                sudo -u ubuntu bash -lc '
                    cd /home/ubuntu/Code-Quest
                    docker compose down || true
                    docker compose up -d --build
                    docker compose ps
                '
                '''
            }
        }
    }
}