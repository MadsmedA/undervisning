console.log("'mainscript.js is running...'");

document.getElementById("knap").addEventListener("click", hello);
document.getElementById("knap2").addEventListener("click", clear);

function hello () {
    console.log("hej");
}

function clear () {
    console.clear();
}

// Function expression
// let hello = function () {
//     console.log("hello");
// }

// Arrow function
// let hello = () => {
//     console.log("hello");
// }
