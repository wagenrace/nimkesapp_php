<?php

require '../db.php';

$email = "hello@gmail.com";

if ($stmt = $mysqli->prepare("SELECT id, first_name FROM users WHERE email=?")) {
    $stmt->bind_param("s", $email);
    $stmt->execute();

    /* bind variables to prepared statement */
    $stmt->bind_result($col1, $col2);

    /* fetch values */
    while ($stmt->fetch()) {
        $_SESSION['message'] = 'User with this email already exists!';
        header("location: ../error.php");
    }

    /* close statement */
    $stmt->close();
}

/*
$sql = "SELECT first_name FROM users WHERE email=?";

$stmt = $mysqli->prepare($sql);
$stmt->execute();

$first_name = null;
$email = "hello@gmail.com";
if($stmt->prepare($sql)){
    echo "Make the preparetions";
    $stmt->bind_param('s', $email);
    $stmt->bind_result($first_name);
    echo $first_name;
    while ($stmt->fetch()) { // For each row
        echo $first_name;
        $stmt->execute();
        // You can then use the variables declared above, which will have the
        // new values from the query every time $stmt->execute() is ran.
    };
};
*/
