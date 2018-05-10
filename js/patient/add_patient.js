function add_patient(){
    new_patient = {first_name: document.getElementById("first_name_input").value,
    last_name: document.getElementById("last_name_input").value,
    email: document.getElementById("last_name_input").value,
    availability: JSON.stringify(all_new_aviable)}
    $.ajax({
        type: 'POST',
        url: 'php/add_patient.php',
        data: new_patient
        }
    )
    check_new_patients();
}
