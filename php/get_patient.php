<?php
session_start();
require '../db.php';
echo "hello world<br>";
if ($stmt = $mysqli->prepare("SELECT client_id FROM accounts_clients WHERE account_id=?")) {
    $stmt->execute();

    $user_id = $_SESSION['user_id'];
    $stmt->bind_param("i", $user_id);
    echo "user id is $user_id <br>";
    echo "user id type is ". gettype($user_id);
    /* bind result variables */
    $stmt->bind_result($result);

    /* fetch value */
    while($stmt->fetch()){
        echo "client_id $result <br>";
    }

    /* close statement */
    $stmt->close();
}else{
    echo "I blame the unicorn";
}

?>
