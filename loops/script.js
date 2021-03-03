console.log("'mainscript.js is running...'");

document.getElementById("knap").addEventListener("click", hello);
document.getElementById("knap2").addEventListener("click", clear);

function hello () {
    for (i = 0; i < 3; i++) {
        console.log("hej");
    }
}

function clear () {
    console.clear();
}