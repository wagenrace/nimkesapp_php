<?php
/* Displays user information and some useful messages */
require 'db.php';
session_start();

// Check if user is logged in using the session variable
if ( $_SESSION['logged_in'] != 1 ) {
  $_SESSION['message'] = "You must log in before viewing your profile page!";
  header("location: error.php");    
}
else {
    // Makes it easier to read
    $first_name = ucfirst($_SESSION['first_name']);
    $last_name = ucfirst($_SESSION['last_name']);
    $email = $_SESSION['email'];
    $active = $_SESSION['active'];
}
?>
<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <title>Welcome <?= $first_name.' '.$last_name ?></title>
  <?php include 'css/css.html'; ?>
</head>
  
<?php 
if ($_SERVER['REQUEST_METHOD'] == 'POST') 
{
    if (isset($_POST['add_patient'])) {

        require 'php/add_patient.php';
        
    }elseif (isset($_POST['add_patient'])) {

        require 'php/add_patient.php';
        
    }
}
?>

<body>
    <?php
    // Keep reminding the user this account is not active, until they activate
      if ( !$active ){
          echo
          '<div class="info">
          Account is unverified, please confirm your email by clicking
          on the email link!
          </div>';
      }   

    // Keep reminding the user this account is not active, until they activate
      echo
      " <div class='account_info'>
      Welcome $first_name $last_name 
      </div>";

    ?>
    
    
    <div class="tab-group">
    <li class="tab"><a href="#signup" onclick="show_model_new_patient();">Add patient</a></li>
    <li class="tab"><a href="#signup">Save</a></li>
    <li class="tab"><a href="#signup">Load</a></li>   
    </div>
    
    
    <div id="myModal" class="modal">
      <div class="modal-content">

        <span class="close" onclick="dont_show_model_new_patient()">&times;</span>
        
          <div class="input-boxes">
        <form action="home.php" method="post" autocomplete="off" class="input-form">
          
            <div class="field-wrap">
              First Name <span class="req">*</span><br>
            <input type="name" required autocomplete="off" name="first_name"/>
          </div>
            
            <div class="field-wrap">
              Last Name <span class="req">*</span><br>
                <input type="name" required autocomplete="off" name="last_name"/>
            </div>
            
            <div class="field-wrap">
                Email Address <span class="req">*</span> <br>
            <input type="email" required autocomplete="off" name="email"/>
          </div>
          
          <button class="button button-block" name="add_patient" method="post">Save</button>
        </form>
          
          </div>
          <!--
        
            Name: <input type="text" id="add_new_patient_name"><br>

        </div>
        <div class="save-button">
            <button onclick="add_new_patient();" >Save</button>
        </div>
-->
        <div class="mini-calander">
          <svg id="mini_calander_svg" viewbox="0 0 100 100">
              </svg>
        </div>
      </div>

    </div>
    
    
    <div class="patient_bench" id="patient_bench">
        <!-- <svg id="patient_bench_svg" viewbox="0 0 200 99"></svg> -->
    </div>

    <div class="calander">
        <svg id="calander_svg" viewbox="0 0 100 100"></svg>
    </div>
    
    <script src="https://d3js.org/d3.v5.min.js"></script>
    <script src="js/initilize_patient_bench.js"></script>
    <script src="js/initilize_calander.js"></script>
    <script src="js/show_possible_slots.js"></script>
    <script src="js/fill_day_slot.js"></script>
    <script src="js/add_patient_d3.js"></script>
    <script src="js/load_clients.js"></script>
    <script src="js/save_clients.js"></script>
    <script src="js/add_new_patient.js"></script>
    <script src="js/general_mouse_actions.js"></script>
    <script>
        //add all patients to bench
        add_patients()

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                dont_show_model_new_patient();
            }
        }
    </script>
</body>
</html>
