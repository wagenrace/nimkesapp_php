<?php

require '../db.php';

$email = "hello_1@gmail.com";

if ($stmt = $mysqli->prepare("SELECT id, first_name FROM users WHERE email=?")) {
    $stmt->bind_param("s", $email);
    $stmt->execute();

    /* bind variables to prepared statement */
    $stmt->bind_result($col1, $col2);

    /* fetch values */
    if ($stmt->fetch()) {
        echo "$col1, $col2 <br>";
        //$_SESSION['message'] = 'User with this email already exists!';
        //header("location: ../error.php");
    }else{
        echo "hello world";
    }

    /* close statement */
    $stmt->close();
}
