FROM openjdk:11-jre-slim

RUN apt-get update && apt-get install -y maven

WORKDIR /app

COPY . .

EXPOSE 8081

CMD ["mvn", "clean", "package", "-DskipTests=true"]

