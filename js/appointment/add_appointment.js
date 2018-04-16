function add_appointment(id){
    if(active_patient != 0){
        empty_day_slot(id)
        fill_day_slot(id, active_patient)
        set_active_number(0)

        // TODO add AJAX for database

        /*
        //update database
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };

        console.log(parseInt(time_slot.match(/\d+/)))
        var day_name = time_slot.match(/[a-z,A-Z,_]+/)[0].split("_")[2];
        console.log(day_name)
        var i = names_days.findIndex(function(d){return d==day_name;})
        console.log(i)
        xmlhttp.open("GET", "php/add_appointment.php?account_id=" + String(patient_id) + "&client_id="+ String(patient_id) +"&start_time="+ String(patient_id) +"&stop_time="+ String(patient_id), true);
        xmlhttp.send();
        */
    }
}
