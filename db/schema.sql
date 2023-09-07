DROP DATABASE IF EXISTS teams_db;

CREATE DATABASE teams_db;

USE teams_db;

CREATE TABLE
    DEPARTMENTS(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR (30) NOT NULL
    );

CREATE TABLE
    ROLES(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR (30) NOT NULL,
        salary DECIMAL NOT NULL,
        department_id INT,
        FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE
        SET NULL
    );