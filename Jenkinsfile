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
        sh 'npm audit fix --force'
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
  environment {
    DB_CONNEVTION = 'mongodb+srv://API_user:gBxQDOLQ6Grk4Tcw@testcluster0.xlaia.mongodb.net/MPS_DB?retryWrites=true&w=majority'
  }
}