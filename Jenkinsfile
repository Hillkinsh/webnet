pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh '''echo $PATH
npm install'''
      }
    }

  }
  environment {
    PATH = '/root/.nvm/versions/node/v16.6.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin'
  }
}