/*
Setting up the patient bench
*/

var patient_data = [{x : 0,
                     y : 0,
                     id: 1,
                     name: "Test Client",
                     avible_slots:["id_day_Tuesday800",
                                   "id_day_Tuesday900",
                                   "id_day_Tuesday930",
                                   "id_day_Tuesday1000"],
                     planned_slots:["id_day_Tuesday800",
                                   "id_day_Tuesday900"]}];

var width_patient_box =  100
var height_patient_box = width_patient_box / 1.618
var active_patient = 0

var svg_patient_bench = d3.select("#patient_bench").append("svg")
    .attr("viewBox", "0 0 " + width_patient_box + " " + (patient_data.length * 100))

svg_patient_bench
    .enter()
    .append("g")
    .attr("id", function(d) {return("id_num_0")})
    .attr("transform", function(d) {return("translate(0,0)")})
