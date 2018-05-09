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
<html>
<head>
  <meta charset="UTF-8">
  <title>Welcome <?= $first_name.' '.$last_name ?></title>
  <?php include 'css/css.html'; ?>
</head>

<?php 
    /*
if ($_SERVER['REQUEST_METHOD'] == 'POST') 
{
    if (isset($_POST['add_patient'])) {

        require 'php/add_patient.php';
        
    }elseif (isset($_POST['add_patient'])) {

        require 'php/add_patient.php';
        
    }
}*/
?>

<body onmouseup="mouseUp()">
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
    
    <script src="jquery-3.3.1.min.js"></script>
    <script src="https://d3js.org/d3.v5.min.js"></script>
    
    <div class="tab-group">
    <li class="tab"><a href="#signup" onclick="open_add_patient();">Add patient</a></li>
    <li class="tab"><a href="#signup">Save</a></li>
    <li class="tab"><a href="#signup">Load</a></li>   
    </div>
    
    
    <div id="myModal" class="modal">
      <div class="modal-content">

        <span class="close" onclick="dont_show_add_patient()">&times;</span>
        
        <div class="input-boxes">

            <div class="field-wrap">
              First Name <span class="req">*</span><br>
            <input type="name" required autocomplete="off" name="new_patient_fname" id="first_name_input"/>
          </div>
            
            <div class="field-wrap">
              Last Name <span class="req">*</span><br>
                <input type="name" autocomplete="off" name="new_patient_lname" id="last_name_input"/>
            </div>
            
            <div class="field-wrap">
                Email Address <span class="req">*</span> <br>
            <input type="email" autocomplete="off" name="new_patient_email"/>
          </div>
          
          <button class="button button-block" onclick="add_patient();dont_show_add_patient();">Save</button>
        </div>

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
    

    <script src="js/global_vars.js"></script>
    <script src="js/global_function.js"></script>
    <script src="js/appointment/show_calander.js"></script>
    <script src="js/appointment/show_appointment.js"></script>
    <script src="js/appointment/add_appointment.js"></script>

    <script src="js/patient/show_patient_bench.js"></script>
    <script src="js/patient/add_patient.js"></script>
    <script src="js/patient/open_add_patient.js"></script>
    <script src="js/patient/show_patient.js"></script>
    <script src="js/patient/show_possible_patients.js"></script>
    <script src="js/patient/show_possible_slots.js"></script>
    <script src="js/patient/update_patient.js"></script>
    <script>
        //add all patients to bench
        show_all_patients()

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                dont_show_add_patient();
            }
        }
    </script>
</body>
</html>
