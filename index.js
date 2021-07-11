function lw() {
    var cmd = document.getElementById("input").value
    var xhr = new XMLHttpRequest()
    xhr.open("GET","http://192.168.1.207/cgi-bin/linux.py?cmd="+cmd,true)
    xhr.send();
    xhr.onload = function() {
        var output = xhr.responseText;
        document.getElementById("output").innerHTML=output;
        }
    }
