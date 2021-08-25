pipeline {
  agent {
    docker {
      image 'node:10.20.1-alpine3.11'
      args '-v $HOME/.m2:/root/.m2'
    }
  }
  stages {
    stage('build') {
      steps {
        sh 'echo $PATH'
        sh 'echo 123'
        sh 'npm install'
      }
    }

  }
}