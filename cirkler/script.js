let antal = 5;
let toggle = false;

function generateCircles () {
    if (toggle === true) {
        for (i = 0; i < antal; i++) {
            let circle = document.createElement("DIV");
            circle.setAttribute("class", "circle");
            document.getElementById("cirkler").appendChild(circle);
            circle.innerHTML = "<p>" + (i + 1) + "</p>";
        }
    }
}

function removeCircles () {
    document.getElementById("cirkler").innerHTML = "";
}

function activate () {
    if (toggle === false) {
        toggle = true;
        document.getElementById("status").style.backgroundColor = "green";
    } else {
        toggle = false;
        document.getElementById("status").style.backgroundColor = "red";
    }
}
