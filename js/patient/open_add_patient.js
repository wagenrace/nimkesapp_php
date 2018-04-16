function open_add_patient(_id = -1){
    if(_id == -1){
        id_modal_patient = -1
    }else{
        id_modal_patient = _id
        patient_index = patient_data.findIndex(function(d){return d.id==id_modal_patient;})

        all_new_aviable = patient_data[patient_index].avible_slots.slice()
        document.getElementById('first_name_input').value = patient_data[patient_index].name
    }
    modal.style.display = "block";
    add_mini_calander();
}


function dont_show_add_patient(){
    modal.style.display = "none";
    set_active_number(0)
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

function dragstarted(d) {
    change_stuff = true
    var _day_slot = this.id.split(extra_mini_day_id)[0]
    turn_off = all_new_aviable.indexOf(_day_slot) > -1
    set_activity_mini_slot(_day_slot, turn_off)
}


function dragged(d) {
    var _day_slot = this.id.split(extra_mini_day_id)[0]
    if(change_stuff){
        set_activity_mini_slot(_day_slot, turn_off)
    }
}


function dragended(d) {
    var _day_slot = this.id.split(extra_mini_day_id)[0]
    if(change_stuff){
        set_activity_mini_slot(_day_slot, turn_off)
    }
    change_stuff = false
}

function set_activity_mini_slot(time_slot, status){
    if(status){
        /*DEACTIVED*/
     d3.select("#"+time_slot + extra_mini_day_id).select("rect").attr("fill", empty_bg_color);
        d3.select("#"+time_slot + extra_mini_day_id).select("text").attr("fill", empty_text_color);
        index_n = all_new_aviable.indexOf(time_slot)
        if(index_n >= 0){
            all_new_aviable.splice(index_n, 1)
        }
    }else{
        /*ACTIVED*/
        d3.select("#"+time_slot + extra_mini_day_id).select("rect").attr("fill", "green");
        d3.select("#"+time_slot + extra_mini_day_id).select("text").attr("fill", "White");
        index_n = all_new_aviable.indexOf(time_slot)
        if(index_n < 0){
            all_new_aviable.push(time_slot)
        }
    }
}
