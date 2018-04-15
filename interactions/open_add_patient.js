function open_add_patient(_id = -1){
    if(_id == -1){
        id_modal_patient = -1
    }else{
        id_modal_patient = _id
        patient_index = patient_data.findIndex(function(d){return d.id==id_modal_patient;})

        all_new_aviable = patient_data[patient_index].avible_slots.slice()
        document.getElementById('add_new_patient_name').value = patient_data[patient_index].name
    }
    modal.style.display = "block";
    add_mini_calander();
}


function dont_show_model_new_patient(){
    modal.style.display = "none";
    set_active_number(0)
    set_default_calander()
    add_patients()
}

function add_mini_calander(){
    svg_mini_calander.selectAll("g").remove();

    var all_days = svg_mini_calander
                .selectAll("g").data(day_slots)
                .enter().append("g")
                .attr("id", function(d) {return("id_day_"+d.name)})
                .attr("transform", function(d) {
                    pos_x = d.x * width_day_slot
                    return("translate(" + pos_x + ",0)")})

    var slot_labels = svg_mini_calander
        .append("g")
        .attr("id", "slot_labels")
        .attr("transform","translate(0,0)")


    all_days.append("text")
        .attr("x", 1)
        .attr("y", height_day_box/2)
        .attr("fill", "#0E0E0E")
        .attr("alignment-baseline", "middle")
        .attr("font-size",3)
        .text(function(d) {return(d.name)});

    all_slots = all_days.selectAll("g")
            .data(names_slots)
            .enter().append("g")
            .attr("id", function(d) {return(this.parentNode.id+d.id+extra_mini_day_id)})
            .attr("transform", function(d) {return("translate(0," + d.y + ")")})

    all_slots.append("rect")
             .attr("width", width_day_box)
             .attr("height", 5)
             .attr("rx", 1.5)
             .attr("ry", 1.5)
             .attr("fill", empty_bg_color);

    all_slots.append("text")
        .attr("x", width_day_box/2)
        .attr("y", height_day_box/4)
        .attr("width", width_day_box)
        .attr("height", height_day_box)
        .attr("fill", empty_text_color)
        .attr("text-anchor", "middle")
        .attr("font-size",3)
        .text(function(d){ return d.name});

    for(var i =0; i<all_new_aviable.length; i++){
        set_activity_mini_slot(all_new_aviable[i], false)
    }
    all_slots
    .on("mouseover", dragged)
    .on("mousedown", dragstarted)
    .on("mouseup", dragended)
}
