console.log("'mainscript.js is running...'");

document.getElementById("knap").addEventListener("click", hello);
document.getElementById("knap2").addEventListener("click", clear);
document.getElementById("knap3").addEventListener("click", toggleTrue);
document.getElementById("knap4").addEventListener("click", toggleFalse);

let statement;

function hello () {
    if (statement == true) {
        console.log("Sådan, nu virker den!");
    } else {
        console.error("Sørg for at trykke på 'True' inden");
    }
}

function clear () {
    console.clear();
}

function toggleTrue () {
    statement = true;
}

function toggleFalse () {
    statement = false;
}