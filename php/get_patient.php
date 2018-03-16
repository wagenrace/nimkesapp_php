<?php
session_start();
require '../db.php';
echo "hello world<br>";
// &&
if ($stmt_acc_client = $mysqli->prepare("SELECT client_id FROM accounts_clients WHERE account_id=?")) {
    if($stmt_client = $mysqli->prepare("SELECT first_name, last_name FROM clients WHERE id=?")){
        $results = array();

        $user_id = $_SESSION['user_id'];
        echo "user id $user_id<br>";
        $stmt_acc_client->bind_param("i", $user_id);
        $stmt_acc_client->execute();
        $stmt_acc_client->bind_result($client_id);
        /* bind result variables */

        //"SELECT first_name, last_name FROM clients WHERE id=?"


        /* fetch value */
        while($stmt_acc_client->fetch()){
            echo "client $client_id<br>";
            $stmt_client->bind_param("i", $client_id);
            $stmt_client->execute();
            $stmt_client->bind_result($first_name, $last_name);

            if($stmt_client->fetch()){
                $result = array($user_id, $first_name, $last_name);
                echo "$first_name<br>";
                print_r($result);
                echo " <br>";
            }else{
                echo "error<br>";
            }
        }
    }else{
        echo "ERROR: second statement";
    }

    /* close statement */
    $stmt_acc_client->close();
}else{
    echo "ERROR: first statement";
}

?>
