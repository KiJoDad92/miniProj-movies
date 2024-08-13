DROP DATABASE IF EXISTS movie_db;
CREATE DATABASE movie_db;

\c movie_db;

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
movie_name VARCHAR(30) NOT NULL
);

CREATE TABLE reviews (
    id SERIAL PRIMARY Key,
    review TEXT Not Null,
    FOREIGN KEY (movies_id)
);