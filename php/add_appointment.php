<?php
require '../db.php';
// Get the Get-stuffies
$account_id = intval($_REQUEST["account_id"]);
echo $account_id;
$client_id = intval($_REQUEST["client_id"]);
echo $client_id;

$start_time = intval($_REQUEST["start_time"]);
echo $start_time;
$stop_time = intval($_REQUEST["stop_time"]);
echo $stop_time;
/*
==============================
Adding appointment to database
==============================
*/
$test_int = 42;
$sql = "INSERT INTO planned_time_slots (account_id, client_id, start_time, stop_time) VALUES (?,?,?,?)";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("iiii", $account_id, $client_id, $start_time, $stop_time); // bind variables

$stmt->execute(); // execute the prepared statement again

$stmt->close(); // close the prepared statement

