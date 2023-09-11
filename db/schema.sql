-- Drop the 'teams_db' database if it exists

DROP DATABASE IF EXISTS teams_db;

-- Create a new 'teams_db' database

CREATE DATABASE teams_db;

-- Use the 'teams_db' database for subsequent queries

USE teams_db;

-- Create a 'DEPARTMENTS' table

CREATE TABLE
    DEPARTMENTS(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR (30) NOT NULL
    );

-- Create a 'ROLES' table

CREATE TABLE
    ROLES(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR (30) NOT NULL,
        salary DECIMAL NOT NULL,
        department_id INT,
        FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE
        SET NULL
    );

-- Create an 'EMPLOYEES' table

CREATE TABLE
    EMPLOYEES (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INT,
        manager_id INT NULL,
        FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE
        SET
            NULL,
            FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE
        SET NULL
    );