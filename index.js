function backend() {

    var command = document.getElementById("input").value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET","http://192.168.99.101//cgi-bin/backend.py?cmd="+command,true);
    xhr.send();
    xhr.onload = function() {
        var output = xhr.responseText;
        document.getElementById("div3").innerHTML=output;
        }
}
