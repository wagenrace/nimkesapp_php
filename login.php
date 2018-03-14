<?php
/* User login process, checks if user exists and password is correct */

// Escape email to protect against SQL injections
$email = $mysqli->escape_string($_POST['email']);
$result = $mysqli->query("SELECT * FROM users WHERE email='$email'");

if ($stmt = $mysqli->prepare("SELECT id, first_name, last_name, active FROM users WHERE email=?")) {
    $stmt->bind_param("s", $email);
    $stmt->execute();

    /* bind variables to prepared statement */
    $stmt->bind_result($id, $first_name, $last_name, $active);
    if ($stmt->fetch()) {
        $_SESSION['email'] = $email;
        $_SESSION['first_name'] = $first_name;
        $_SESSION['last_name'] = $last_name;
        $_SESSION['active'] = $active;
        $_SESSION['user_id'] = $id;
        $_SESSION['logged_in'] = true;

        header("location: home.php");
    } else {

        $_SESSION['message'] = "You have entered wrong password, try it again!";
        header("location: error.php");
    }
}
