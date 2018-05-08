/*
function add_patient(new_name){
    if(id_modal_patient == -1){
        var max_id = 0
        for(var i = 0; i<patient_data.length; i++){
            if(patient_data[i].id > max_id){
                max_id = patient_data[i].id
            }
        }
        new_patient = {id: max_id + 1, name:new_name, avible_slots: all_new_aviable.slice(), planned_slots: [], x:0, y:0}
        patient_data.push(new_patient)
    }else{
        patient_index = patient_data.findIndex(function(d){
            return d.id==id_modal_patient;
        })
        patient_data[patient_index].avible_slots = all_new_aviable.slice()
        patient_data[patient_index].name = new_name
    }
    show_all_patients()
    all_new_aviable = []
    dont_show_add_patient()
}
*/
function add_patient(){
    console.log(all_new_aviable);
    console.log(document.getElementById("first_name_input").value)
    new_patient = {first_name: document.getElementById("first_name_input").value,
    last_name: document.getElementById("last_name_input").value}

    $.ajax({
        type: 'POST',
        url: 'php/add_patient.php',
        data: new_patient
        }
    )

}
