<?php
if ($stmt = $mysqli->prepare("SELECT * FROM users WHERE email=?")) {
    $stmt->bind_param("s", $email);

    $stmt->execute();

    /* bind result variables */
    $stmt->bind_result($result);

    /* fetch value */
    $stmt->fetch();

    /* close statement */
    $stmt->close();
}

?>
