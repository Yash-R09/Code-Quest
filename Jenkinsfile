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
                    ls
                    git pull origin main
                '
                '''
            }
        }

        stage('Frontend Build') {
            steps {
                sh '''
                set -eux
                sudo -u ubuntu bash -lc '
                    cd /home/ubuntu/Code-Quest/frontend
                    pwd
                    node -v
                    npm -v
                    npm install
                    npm run build
                '
                '''
            }
        }

        stage('Backend Restart') {
            steps {
                sh '''
                set -eux
                sudo -u ubuntu bash -lc '
                    cd /home/ubuntu/Code-Quest/backend
                    pwd
                    node -v
                    npm -v
                    npm install
                    pm2 list
                    pm2 restart codequest-backend || pm2 start server.js --name codequest-backend
                    pm2 save
                '
                '''
            }
        }

        stage('Deploy Frontend') {
            steps {
                sh '''
                set -eux
                sudo -u ubuntu bash -lc '
                    sudo rm -rf /var/www/html/*
                    sudo cp -r /home/ubuntu/Code-Quest/frontend/dist/* /var/www/html/
                    sudo systemctl restart nginx
                '
                '''
            }
        }
    }
}