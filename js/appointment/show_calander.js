for(var i = start_slot; i < 19; i++){
        slota = {id: i + "00",
                 name: i + ":00",
                 y: (i - start_slot)* height_day_box + height_day_box}
        slotb = {id: i + "30",
                 name: i + ":30",
                 y: ((i + 0.5) - start_slot)* height_day_box + height_day_box}
        names_slots.push(slota)
        names_slots.push(slotb)
    };


function show_calander(){
    svg_calander.selectAll("g").remove();

    var all_days = svg_calander
                .selectAll("g").data(day_slots)
                .enter().append("g")
                .attr("id", function(d) {return("id_day_"+d.name)})
                .attr("transform", function(d) {
                    pos_x = (d.x+0.30) * width_day_slot
                    return("translate(" + pos_x + ",0)")})

    var slot_labels = svg_calander
        .append("g")
        .attr("id", "slot_labels")
        .attr("transform","translate(0,0)")


    svg_calander.select("#slot_labels")
                .selectAll("g")
                .data(names_slots)
                .enter()
                .append("g")
                .attr("transform", function(d){ return("translate(0, " +d.y + ")")})
                .append("text")
                .attr("width", 2)
                .attr("x", 0)
                .attr("y", 0)
                .attr("fill", "#0E0E0E")
                .attr("alignment-baseline", "middle")
                .attr("font-size",1.5)
                .text(function(d){ return d.name});


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
            .attr("id", function(d) {return(this.parentNode.id+d.id)})
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
        .text(empty_text);

    all_slots
        .on("click", function(d){
            if(active_patient != 0){
                empty_day_slot(this.id)
                fill_day_slot(this.id, active_patient)
                set_active_number(0)
            }
       });
}

show_calander()
