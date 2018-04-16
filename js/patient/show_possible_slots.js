var show_mode_possible_slots = false

function show_possible_slots(patient_id){
    patient_index = patient_data.findIndex(function(d){return d.id==patient_id;})
    var avaible_slots = patient_data[patient_index].avible_slots
    avaible_slots.forEach(function(element) {
        day_slot = d3.select("#"+element)
        var time_slot_is_empty = true
        for(var i=0; i<patient_data.length;i++){
            index = patient_data[i].planned_slots.indexOf(element)
            if (index >= 0) {
                time_slot_is_empty = false
            }
        }

        if(time_slot_is_empty){
            day_slot.select("rect").attr("fill", "green");
            day_slot.select("text").attr("fill", "white");
        }else{
           day_slot.select("rect").attr("fill", "green");
            day_slot.select("text").attr("fill", "red");
        }
    });
    show_mode_possible_slots = true
}

function dont_show_possible_slots(patient_id){
    if(show_mode_possible_slots){
        show_mode_possible_slots = false
        set_default_calander();
        add_patients();
    }
}
