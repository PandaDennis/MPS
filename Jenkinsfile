pipeline {
  agent any
  stages {
    stage('Check npm version') {
      steps {
        echo 'checking..'
        sh 'npm -v'
      }
    }

    stage('Build') {
      steps {
        echo 'Building..'
        sh 'npm install'
      }
    }

    stage('Test') {
      environment {
        CI = 'true'
      }
      steps {
        echo 'Testing..'
        sh 'set -x'
        sh 'set +x'
      }
      steps {
        echo 'Testing..'
        sh 'npm audit fix --force'
        sh 'npm test'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying....'
        sh 'npm start'
      }
    }

  }
  tools {
    nodejs 'nodejs'
  }
}