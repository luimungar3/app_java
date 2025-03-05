pipeline {
    agent any

    environment {
        // Definir variables de entorno si es necesario
        REGISTRY = "mi-registro-docker"  // Cambia esto al nombre de tu registro de Docker (si es necesario)
        IMAGE_NAME = "lista-de-tareas-app"  // Nombre de la imagen Docker
        IMAGE_TAG = "latest"  // Etiqueta de la imagen (puedes usar la versión de tu aplicación o un número de compilación)
    }

    stages {
        stage('Clonar Repositorio') {
            steps {
                // Clonar el repositorio de tu código fuente
                git 'https://github.com/usuario/tu-repositorio.git'  // Cambia la URL de tu repositorio
            }
        }

        stage('Construir Aplicación con Maven') {
            steps {
                // Ejecutar Maven para construir el archivo JAR
                sh 'mvn clean package -DskipTests=true'  // Puedes agregar o quitar el parámetro `-DskipTests` según sea necesario
            }
        }

        stage('Construir Imagen Docker') {
            steps {
                script {
                    // Construir la imagen Docker
                    sh 'docker build -t ${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG} .'
                }
            }
        }

        stage('Ejecutar Imagen Docker (Opcional)') {
            steps {
                script {
                    // Ejecutar la imagen Docker en un contenedor para pruebas locales
                    sh 'docker run -d -p 8080:8080 ${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}'
                }
            }
        }

        stage('Test de Aplicación (Opcional)') {
            steps {
                // Si tienes pruebas automatizadas, puedes ejecutarlas aquí
                sh 'mvn test'  // Esto ejecutará las pruebas de tu aplicación con Maven
            }
        }

        stage('Push Imagen Docker (Opcional)') {
            steps {
                script {
                    // Publicar la imagen Docker al registro (solo si es necesario)
                    sh 'docker push ${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}'
                }
            }
        }

        stage('Limpiar Contenedores Docker') {
            steps {
                script {
                    // Limpiar contenedores e imágenes Docker no usados
                    sh 'docker system prune -f'
                }
            }
        }
    }

    post {
        always {
            // Este bloque se ejecuta siempre, incluso si falla la pipeline
            cleanWs()  // Limpiar el espacio de trabajo de Jenkins después de la ejecución
        }

        success {
            // Este bloque se ejecuta si la pipeline es exitosa
            echo 'La construcción y despliegue fueron exitosos.'
        }

        failure {
            // Este bloque se ejecuta si la pipeline falla
            echo 'Hubo un error en la construcción o despliegue.'
        }
    }
}
