function set_active_number(patient_id){
    //TODO if active_patient == - 1 { delete stuff}
    if(active_patient > 0){
        dont_show_possible_slots(active_patient)
    }

    if(patient_id > -1){
        document.body.style.cursor = "auto"
    }

    if(active_patient == patient_id){
        d3.select("#id_num_"+patient_id).select("rect").attr("fill", "yellow");
            dont_show_possible_slots(patient_id)
            active_patient= 0
    }else if(patient_id == -1){
        document.body.style.cursor = "not-allowed"
        active_patient = -1
    }else{
        if(patient_id != 0){
           show_possible_slots(patient_id)
        }
        d3.select("#id_num_"+active_patient).select("rect").attr("fill", "yellow");
        d3.select("#id_num_"+patient_id).select("rect").attr("fill", "green");
        active_patient= patient_id
    }
}

function fill_day_slot(time_slot, patient_id){
    if(patient_id == -1){
        //setting the color and text
        d3.select("#"+time_slot).select("rect").attr("fill", empty_bg_color);
        d3.select("#"+time_slot).select("text").text(empty_text);
    } else {
        // Finding the patient
        patient_index = patient_data.findIndex(function(d){return d.id==patient_id;})
        patient = patient_data[patient_index]

        //setting the color and text
        d3.select("#"+time_slot).select("rect").attr("fill", "yellow");
        d3.select("#"+time_slot).select("text").text(patient.name);

        if (patient.planned_slots.indexOf(time_slot) < 0) {
            patient_data[patient_index].planned_slots.push(time_slot)
        }

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
    }
}

function empty_day_slot(time_slot){
    //Remove entery in previous clients
    for(var i=0; i<patient_data.length;i++){
        index = patient_data[i].planned_slots.indexOf(time_slot)
        if (index >= 0) {
            patient_data[i].planned_slots.splice(index, 1)
        }
    }
}

function delete_day_slot(){
    if(active_patient == -1){
        set_active_number(0)
    }else{
        set_active_number(-1)

    }
}
