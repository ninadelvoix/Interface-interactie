// JavaScript Document
console.log("Howdy!");

/* auto */

var deAuto = document.querySelector("main section img"); 
var deOL = document.querySelector("main ol"); 


var button1940 = document.querySelector("ol li:nth-of-type(1) button");

button1940.addEventListener("click", gaNaar1940);

function gaNaar1940 () {
    deAuto.className = "auto1940";
    deOL.scrollLeft = 0;
}


var button1960 = document.querySelector("ol li:nth-of-type(2) button");

button1960.addEventListener("click", gaNaar1960);

function gaNaar1960() {
    deAuto.className = "auto1960";
    deOL.scrollLeft = 192;
}

var button1975 = document.querySelector("ol li:nth-of-type(3) button");

button1975.addEventListener("click", gaNaar1975); 

function gaNaar1975() {
    deAuto.className = "auto1975";
    deOL.scrollLeft = 384;
}

var button1990 = document.querySelector("ol li:nth-of-type(4) button");

button1990.addEventListener("click", gaNaar1990);

function gaNaar1990() {
    deAuto.className = "auto1990";
    deOL.scrollLeft = 576;
}

var button2000 = document.querySelector("ol li:nth-of-type(5) button");

button2000.addEventListener("click", gaNaar2000);

function gaNaar2000() {
    deAuto.className = "auto2000";
    deOL.scrollLeft = 768;
}

/* informatie */

// var tekstinfo = document.querySelector("footer img");

// var button1960 = document.querySelector("ol li:nth-of-type(2) button");

// button1960.addEventListener("click", gaNaar1960);

// function gaNaar1960() {
//     tekstinfo.className = "auto1960";
// }


