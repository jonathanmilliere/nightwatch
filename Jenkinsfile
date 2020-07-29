pipeline {
    agent {
        docker { image 'larcado/nodejs-chrome' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'npm install'
                sh 'npm run test -- --env default'
            }
        }
    }
}