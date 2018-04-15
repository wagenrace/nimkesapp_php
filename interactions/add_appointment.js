function add_appointment(id){
    if(active_patient != 0){
        empty_day_slot(id)
        fill_day_slot(id, active_patient)
        set_active_number(0)

        // TODO add AJAX for database
    }
}
