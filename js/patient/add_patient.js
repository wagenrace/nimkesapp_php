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
    add_patients()
    all_new_aviable = []
    dont_show_model_new_patient()
}
