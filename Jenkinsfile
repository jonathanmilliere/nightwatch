pipeline {
    agent {
        dockerfile {
          filename "Dockerfile"
        }
    }
    stages {
        stage('Run Tests') {
            steps {
                sh 'node --version'
                sh 'npm -v'
                sh 'google-chrome --version'
                sh 'npm install'
                sh 'npm run test -- --env default'
            }
        }
    }
}