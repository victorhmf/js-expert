docker run -d \
  --name postgres \
  -e POSTGRES_USER=victor.fernandes \
  -e POSTGRES_PASSWORD=123456 \
  -e POSTGRES_DB=heroes \
  -p 5432:5432 \
  bitnami/postgresql:11

de postgres psql --username victor.fernandes --dbname heroes

CREATE TABLE warriors(id serial PRIMARY KEY, name VARCHAR (255) NOT NULL);
SELECT * FROM warriors;

#mongodb

docker run -d \
  --name mongodb \
  -e MONGO_INITDB_ROOT_USERNAME=victor.fernandes \
  -e MONGO_INITDB_ROOT_PASSWORD=123456 \
  -p 27017:27017 \
  mongo:4