<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
var parsedJSON;
function showHint(str) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            parsedJSON = JSON.parse(this.responseText);
            console.log(parsedJSON);
        }
    };
    xmlhttp.open("GET", "../php/get_patient.php", true);
    xmlhttp.send();

}
showHint();

function hello_console(){
    showHint("")
}

var t=setInterval(hello_console,1000);

</script>
</head>
<body>

<p><b>Start typing a name in the input field below:</b></p>
<form>
First name: <input type="text">
</form>
<p>Suggestions: <span id="txtHint"></span></p>
</body>
</html>
