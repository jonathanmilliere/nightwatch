pipeline {
    agent {
        dockerfile {
          filename "Dockerfile"
        }
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