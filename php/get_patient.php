<?php
session_start();
require '../db.php';

if ($stmt_acc_client = $mysqli->prepare("SELECT client_id FROM accounts_clients WHERE account_id=?")) {
    if($stmt_client = $mysqli->prepare("SELECT first_name, last_name FROM clients WHERE id=?")){
        $all_client_ids = array();

        /*
        Selecting all client_ids
        */
        $user_id = $_SESSION['user_id'];
        $stmt_acc_client->bind_param("i", $user_id);
        $stmt_acc_client->execute();
        $stmt_acc_client->bind_result($client_id);
        while($stmt_acc_client->fetch()){
            array_push($all_client_ids, $client_id);
        }

        $stmt_acc_client->close();

        /*
        Get names from clients
        */
        $results = array();
        $stmt_client->bind_param("i", $client_id);
        $stmt_client->bind_result($first_name, $last_name);

        foreach ($all_client_ids as $client_id) {
            $full_client = new \stdClass();
            $stmt_client->execute();
            if($stmt_client->fetch()){
                $result = array($user_id, $first_name);
                $full_client->id=$client_id;
                $full_client->name=$first_name;
                $full_client->last_name=$last_name;
                array_push($results, json_encode($full_client));
            }
        }
        echo json_encode($results);
    }
    /* close statement */
    $stmt_client->close();
}

?>
