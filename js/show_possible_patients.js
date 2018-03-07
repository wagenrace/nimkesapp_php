function show_possible_slots(time_slot){
    patient_index = patient_data.findIndex(function(d){return d.id==patient_id;})
    var avaible_slots = patient_data[patient_index].avible_slots
    avaible_slots.forEach(function(element) {
        day_slot = d3.select("#"+element)
        day_slot.select("rect").attr("stroke-width", "1");
        day_slot.select("rect").attr("stroke", "green");
    });
}

function dont_show_possible_slots(patient_id){
    if(patient_id != 0){
    patient_index = patient_data.findIndex(function(d){return d.id==patient_id;})
    var avaible_slots = patient_data[patient_index].avible_slots
    avaible_slots.forEach(function(element) {
        day_slot = d3.select("#"+element)
        day_slot.select("rect").attr("stroke-width", "0");
    });
    }
}