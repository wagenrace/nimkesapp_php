/*window.onload = function () { 
 //Check the support for the File API support 
 if (window.File && window.FileReader && window.FileList && window.Blob) {
    var fileSelected = document.getElementById('txtfiletoread');
    fileSelected.addEventListener('change', function (e) { 
         //Set the extension for the file 
         var fileExtension = /text.* /; 
         //Get the file object 
         var fileTobeRead = fileSelected.files[0];
        //Check of the extension match 
         if (fileTobeRead.type.match(fileExtension)) { 
             //Initialize the FileReader object to read the 2file 
             var fileReader = new FileReader(); 
             fileReader.onload = function (e) { 
                 set_default_calander();
                 patient_data = JSON.parse(fileReader.result);
                 add_patients();
                 set_active_number(0)
             } 
             fileReader.readAsText(fileTobeRead); 
         } 
         else { 
             alert("Please select text file"); 
         }

    }, false);
} 
    else { 
        alert("Files are not supported"); 
    } 
}*/
