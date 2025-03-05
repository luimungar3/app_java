FROM openjdk:11-jdr-slim
WORKDIR /app
COPY target/lista-de-tareas-0.0.1-SNAPSHOT.jar /app/lista-de-tareas.jar
EXPOSE 8081
CMD ["java", "-jar", "lista-de-tareas.jar"]
