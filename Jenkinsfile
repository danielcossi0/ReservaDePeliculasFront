pipeline {
//Donde se va a ejecutar el Pipeline
  agent {
    label 'Slave4_Induccion'
  }

//Opciones específicas de Pipeline dentro del Pipeline
  options {
        buildDiscarder(logRotator(numToKeepStr: '3'))
     disableConcurrentBuilds()
  }
//Una sección que define las herramientas “preinstaladas” en Jenkins
  tools {
    jdk 'JDK8_Centos'
    gradle 'Gradle5.0_Centos'
  }
//Aquí comienzan los “items” del Pipeline
  stages{
      stage('Checkout') {
      steps{
        echo "------------>Checkout<------------"
        checkout([
            $class: 'GitSCM',
            branches: [[name: '*/master']],
            doGenerateSubmoduleConfigurations: false,
            extensions: [],
            gitTool: 'Default',
            submoduleCfg: [],
            userRemoteConfigs: [[
            credentialsId: 'GitHub_danielcossi0', 
            url:'https://github.com/danielcossi0/ReservaDePeliculasFront.git'
            ]]
        ])
      }
    }


     stage('NPM Install') {
      steps{
        echo "------------>Installing<------------"
        sh 'npm install'
      }
    }


    stage('Lint Analysis') {  
      steps{
        echo "------------>Lint Analysis<------------"
        sh 'npm run lint --silent'
      }
    }
/*
    stage('Test') {
      steps{
        echo "------------>Testing<------------"
        sh 'npm run test'
      }
    }*/
    
    stage('Static Code Analysis'){
        steps{
            echo '------------>Analisis de código estático<------------'
            withSonarQubeEnv('Sonar') {
                     sh "${tool name: 'SonarScanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'}/bin/sonar-scanner -Dproject.settings=sonar-project.properties"
            }
        }
    }


    stage('Build') {
            steps {
              echo "------------>Building<------------"
              sh 'npm run build'
            }
        }
  }
  post {
    always {
      echo 'This will always run'
    }
    success {
      echo 'This will run only if successful'
     }
    failure {
      echo 'This will run only if failed'
          mail (to: 'daniel.cossio@ceiba.com.co',subject: "Failed Pipeline:${currentBuild.fullDisplayName}",body: "Something is wrong with ${env.BUILD_URL}")
    }
    unstable {
      echo 'This will run only if the run was marked as unstable'
    }
    changed {
      echo 'This will run only if the state of the Pipeline has changed'
      echo 'For example, if the Pipeline was previously failing but is now successful'
    }
  }
}