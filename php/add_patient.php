<?php

$first_name_client = $mysqli->escape_string($_POST['first_name']);
$last_name_client = $mysqli->escape_string($_POST['last_name']);
$email_client = $mysqli->escape_string($_POST['email']);

$result = $mysqli->query("SELECT * FROM users WHERE email='$email'");

if ( true ) {
    $sql = "INSERT INTO clients (first_name, last_name, email) " 
            . "VALUES ('$first_name_client','$last_name_client','$email_client')";
    $mysqli->query($sql);
    
    $last_id = $mysqli->insert_id;
    
    $sql = "INSERT INTO accounts_clients (account_id, client_id, access_level) " 
            . "VALUES ('0', '$last_id',  '1')";
    $mysqli->query($sql) or die($mysqli->error);
    echo "<script>add_new_patient('$first_name_client')</script>";
};

