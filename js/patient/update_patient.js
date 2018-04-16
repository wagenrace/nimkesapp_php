function compareArrays(a, b) {
    return !a.some(function (e, i) {
        return e != b[i];
    });
}

function equal_patients(array1, array2){
    get_all = function(currentList, currentValue){
        currentList.push(currentValue["id"]);
        return(currentList);
    };
    all_ids_1 = array1.reduce(get_all, [])
    all_ids_2 = array2.reduce(get_all, [])
    all_ids_1.sort()
    all_ids_2.sort()
    return(compareArrays(all_ids_1, all_ids_2));
};

function check_new_patients(){
    var parsedJSON;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            parsedJSON = JSON.parse(this.responseText);
            if(parsedJSON && !equal_patients(parsedJSON, patient_data)){
                patient_data = parsedJSON;
                add_patients();
            }
        }
    };
    xmlhttp.open("GET", "php/get_patient.php", true);
    xmlhttp.send();
}

var t=setInterval(check_new_patients,1000);
