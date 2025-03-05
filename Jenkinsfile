pipeline {
    agent any

    environment {
        REGISTRY = "docker.io"  // Registro Docker (Docker Hub en este caso)
    }

    stages {
        stage('Verificacion SCM') {
            steps {
                // Verificamos el código fuente desde el repositorio
                checkout scm

                // Obtener el último commit de git y guardarlo en un archivo
                script {
                    sh "git rev-parse --short HEAD > .git/commit-id"
                    gitcommit = readFile('.git/commit-id').trim()
                }
            }
        }

        stage('Test') {
            steps {
                // Crear un contenedor de pruebas y ejecutar las pruebas
                script {
                    def contenedortest = docker.image('openjdk:11-jre-slim')  // Usamos un contenedor con Java
                    contenedortest.pull()
                    contenedortest.inside {
                        // Ejecutar la construcción de la aplicación usando Maven
                        sh 'mvn clean package -DskipTests=true'
                        // Ejecutar las pruebas si las tienes configuradas
                        sh 'mvn test'
                    }
                }
            }
        }

        stage('Docker Build & Push') {
            steps {
                // Construir y subir la imagen Docker al registro
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub') {
                        def nuestraapp = docker.build("miguel7834/app_listatareas:${gitcommit}", ".")
                        // Subir la imagen con el commit hash como tag
                        nuestraapp.push()
                    }
                }
            }
        }
    }

    post {
        always {
            // Limpiar cualquier archivo o contenedor no usado
            cleanWs()
        }

        success {
            // Si la pipeline fue exitosa
            echo 'La construcción y despliegue fueron exitosos.'
        }

        failure {
            // Si la pipeline falla
            echo 'Hubo un error en la construcción o despliegue.'
        }
    }
}
