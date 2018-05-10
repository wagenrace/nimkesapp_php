<?php
require '../db.php';
session_start();

$first_name_client = $mysqli->escape_string($_POST['first_name']);
$last_name_client = $mysqli->escape_string($_POST['last_name']);
$email_client = $mysqli->escape_string($_POST['email']);

$availabilty = $mysqli->escape_string($_POST['availability']);
$availabilty = str_replace("\\","",$availabilty);
/*
==========================
Adding patient to database
==========================
*/
$sql = "INSERT INTO clients (first_name, last_name, email, availability) VALUES (?,?,?,?)";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("ssss", $first_name_client,$last_name_client,$email_client,$availabilty); // bind variables

$stmt->execute(); // execute the prepared statement again

$stmt->close(); // close the prepared statement

/*
=========================================
Adding patient and user to relation table
=========================================
*/

$sql = "INSERT INTO accounts_clients (account_id, client_id, access_level) VALUES (?,?,?)";

$stmt = $mysqli->prepare($sql);
$stmt->bind_param("sss", $account_id,$last_id,$acces_level); // bind variables
$account_id = $_SESSION['user_id'];
$last_id = $mysqli->insert_id;
$acces_level = "1";
    
$stmt->execute();

$stmt->close();
