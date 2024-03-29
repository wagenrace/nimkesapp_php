<?php

require '../db.php';

if ($mysqli->connect_errno) {
    printf("Connection failed: %s\n", $mysqli->connect_error);
    die();
}

//create the database
if ( !$mysqli->query('CREATE DATABASE accounts') ) {
    printf("Errormessage: %s\n", $mysqli->error);
}


//create users table with all the fields
$mysqli->query('
CREATE TABLE `accounts`.`users` 
(
    `id` INT NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(50) NOT NULL,
     `last_name` VARCHAR(50) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `hash` VARCHAR(32) NOT NULL,
    `active` BOOL NOT NULL DEFAULT 0,
PRIMARY KEY (`id`) 
);');


$mysqli->query('
CREATE TABLE `accounts`.`clients` 
(
    `id` INT NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(50) NOT NULL,
     `last_name` VARCHAR(50) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
PRIMARY KEY (`id`) 
);');

$mysqli->query('
CREATE TABLE `accounts`.`accounts_clients`
(
    `id` INT NOT NULL AUTO_INCREMENT,
    `account_id` INT NOT NULL,
     `client_id` INT NOT NULL,
    `access_level` INT NOT NULL DEFAULT 1,
PRIMARY KEY (`id`) 
);'); // or die($mysqli->error);

?>
