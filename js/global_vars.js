/*
Variables for the mini calander within the model add_patient
*/
var change_stuff = false
var svg_mini_calander = d3.select("#mini_calander_svg")
var all_new_aviable = []
var extra_mini_day_id = "_mini"
var modal = document.getElementById('myModal');
var id_modal_patient = -1

/*
Setting up the Calander
*/
var appoinment_local_data = [{patient_id:1, planned_slot:"id_day_Tuesday800"},
                            {patient_id:1, planned_slot:"id_day_Tuesday900"}]
var svg_calander = d3.select("#calander_svg")
var names_days = ["Monday", "Tuesday", "Wensday", "Thursday", "Friday"]
var day_slots = []
for(var i = 0; i < names_days.length; i++){
    new_enter = {name: names_days[i], x:i, hold:null}
    day_slots.push(new_enter)
}
var width_day_slot = 100 / day_slots.length
var width_day_box =  width_day_slot * 0.9
var height_day_box = width_day_box / 1.618

var names_slots = []
start_slot = 8

/*
Setting up the Appoinments
*/
var empty_bg_color = "#E0E0E0"
var empty_text = "empty"
var empty_text_color = "#808080"
var all_appoinments = [{id: 0,
                       slot: "id_day_Tuesday800"},
                      {id: 0,
                       slot: "id_day_Monday800"}]
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
