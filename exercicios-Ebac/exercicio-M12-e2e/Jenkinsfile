pipeline {
    agent any

    stages {
        stage('Clonar o repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/RaphaelLimaSouza/exercicio-ebac-M15.git'
            }
        }

        stage('Acessar pasta') {
            steps {
                bat "cd exercicio-M14-API"
            }
        }

        stage('Instalar dependências') {
            steps {
                dir('exercicio-M12-e2e') {
                  bat 'npm install'
                }
            }
        }
        
        stage('Instalar servidor') {
            steps {
                bat 'npm install -g serverest --force'
            }
        }
        
        stage('Subir servidor') {
            steps {
                dir('exercicio-M12-e2e') {
                bat 'start cmd /k "npx serverest && npm run cy:run'
               }
            }
        }

    stage('Realizar os testes') {
      steps {
          dir('exercicio-M12-e2e') {
        bat 'npm run cy:run'
          }
      }
    }
  }
}