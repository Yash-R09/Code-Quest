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