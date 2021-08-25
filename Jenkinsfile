pipeline {
  agent {
    node {
      label 'node'
    }

  }
  stages {
    stage('build') {
      steps {
        sh '''echo $PATH
echo 123
npm install'''
      }
    }

  }
}