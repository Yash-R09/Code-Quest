pipeline {
    agent any

    triggers {
        githubPush()
    }

    environment {
        AWS_REGION = 'ap-south-1'
        AWS_ACCOUNT = '399399108501'

        BACKEND_IMAGE = "${AWS_ACCOUNT}.dkr.ecr.${AWS_REGION}.amazonaws.com/codequest-backend"
        FRONTEND_IMAGE = "${AWS_ACCOUNT}.dkr.ecr.${AWS_REGION}.amazonaws.com/codequest-frontend"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Login to Amazon ECR') {
            steps {
                sh '''
                aws ecr get-login-password --region $AWS_REGION | \
                docker login \
                --username AWS \
                --password-stdin \
                $AWS_ACCOUNT.dkr.ecr.$AWS_REGION.amazonaws.com
                '''
            }
        }

        stage('Build Backend Image') {
            steps {
                dir('backend') {
                    sh '''
                    docker build \
                        -t $BACKEND_IMAGE:latest .
                    '''
                }
            }
        }

        stage('Build Frontend Image') {
            steps {
                dir('frontend') {
                    sh '''
                    docker build \
                        -t $FRONTEND_IMAGE:latest .
                    '''
                }
            }
        }

        stage('Push Backend Image') {
            steps {
                sh '''
                docker push $BACKEND_IMAGE:latest
                '''
            }
        }

        stage('Push Frontend Image') {
            steps {
                sh '''
                docker push $FRONTEND_IMAGE:latest
                '''
            }
        }

        stage('Start Instance Refresh') {
            steps {
                sh '''
                aws autoscaling start-instance-refresh \
                    --auto-scaling-group-name codequest-asg \
                    --region $AWS_REGION
                '''
            }
        }
    }
}