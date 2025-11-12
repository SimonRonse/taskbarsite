pipeline {
    agent any

    triggers {
        // Trigger only when pushing to production branch
        pollSCM('') // disables polling since webhook will handle triggers
    }

    environment {
        DEPLOY_DIR = '/var/www/taskbar'
        FRONTEND_DIR = "${env.DEPLOY_DIR}/frontend"
        BACKEND_DIR = "${env.DEPLOY_DIR}/backend"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'production', credentialsId: 'github-app-credentials-id', url: 'https://github.com/SimonRonse/taskbarsite.git'
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm ci'
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy Frontend') {
            steps {
                sh 'mkdir -p ${FRONTEND_DIR}'
                sh 'rm -rf ${FRONTEND_DIR}/*'
                sh 'cp -r frontend/dist/* ${FRONTEND_DIR}/'
            }
        }
    }
}
