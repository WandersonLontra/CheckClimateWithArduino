DROP DATABASE IF EXISTS "name of database";

CREATE DATABASE "name of database";

CREATE TABLE "climatestorage" (
  "id" SERIAL PRIMARY KEY,
  "temperature" numeric DEFAULT 0,
  "humidity" numeric DEFAULT 0,
  "date" timestamp DEFAULT (now())
);
