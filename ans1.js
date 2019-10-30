//document.addEventListener("contextmenu", function(e){
//  e.preventDefault();
//}, false);
/*function disableselect(e) {
    return false;
}

function reEnable() {
    return true;
}

document.onselectstart = new Function("return false");

if (window.sidebar) {
    document.onmousedown = disableselect;
    document.onclick = reEnable;
}*/
function ans1() {
    r1 = document.getElementById("r1").value;
    r2 = document.getElementById("r2").value;
    r3 = document.getElementById("r3").value;
    r4 = document.getElementById("r4").value;
    r5 = document.getElementById("r5").value;
    r6 = document.getElementById("r6").value;
    if (r1.toLowerCase() == "keyboard") {
        document.getElementById('err1').innerHTML = "Correct!";
    }
    ;
    if (r2.toLowerCase() == "mirror") {
        document.getElementById('err2').innerHTML = "Correct!";
    }
    ;
    if (r3.toLowerCase() == "echo") {
        document.getElementById('err3').innerHTML = "Correct!";
    }
    ;
    if (r4.toLowerCase() == "eye") {
        document.getElementById('err4').innerHTML = "Correct!";
    }
    ;
    if (r5.toLowerCase() == "secret") {
        document.getElementById('err5').innerHTML = "Correct!";
    }
    ;
    if (r6.toLowerCase() == "coffin") {
        document.getElementById('err6').innerHTML = "Correct!";
    }
    ;
}
