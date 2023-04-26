// JavaScript Document
console.log("Howdy!");

/* auto */

var deAuto = document.querySelector("main section img"); 
var deOL = document.querySelector("main ol"); 

/* tekstvlak */

var infoH2 =  document.querySelector("section:nth-of-type(2) h2"); 
var infoP = document.querySelector("section:nth-of-type(2) p"); 
var infoImg1 = document.querySelector("section:nth-of-type(2) img:nth-of-type(1)"); 
var infoImg2 = document.querySelector("section:nth-of-type(2) img:nth-of-type(2)");

/* weg */
var deWeg = document.querySelector("section:nth-of-type(1)"); 

/* buttons */

var button1940 = document.querySelector("ol li:nth-of-type(1) button");

button1940.addEventListener("click", gaNaar1940);

function gaNaar1940 () {
    deAuto.className = "auto1940";
    deOL.scrollLeft = 0;
    deWeg.className = "weg1940";

    infoH2.textContent = "1940";
    infoP.textContent = "McDonald’s werd voor het eerst opgericht in 1940 door de broers Richard en Maurice McDonald in San Bernardino, Californië. Het restaurant heette destijds “McDonald’s Bar-B-Q” en had een menu dat bestond uit barbecuesandwiches, hotdogs en sinaasappelsap. In 1948 sloten ze hun oorspronkelijke restaurant en openden een nieuwe met een gestroomlijnd menu dat alleen bestond uit hamburgers, frietjes en milkshakes.";
    infoImg1.src = "images/1940-logo.png";
    infoImg2.scr = "images/verpakking-1940-za.png";
}


var button1960 = document.querySelector("ol li:nth-of-type(2) button");

button1960.addEventListener("click", gaNaar1960);

function gaNaar1960() {
    deAuto.className = "auto1960";
    deOL.scrollLeft = 192;
    deWeg.className = "weg1960";

    infoH2.textContent = "1960";
    infoP.textContent = "In de jaren zestig breidde McDonald’s zich snel uit over de Verenigde Staten en begon het een wereldmerk te worden. Het bedrijf was een van de meest succesvolle fastfoodketens ter wereld werd. In die tijd stond McDonald’s bekend om zijn eenvoudige en gestroomlijnde menu, dat voornamelijk bestond uit hamburgers, frietjes, milkshakes en frisdranken. De mascotte van het bedrijf, Ronald McDonald, werd in 1963 geïntroduceerd en werd al snel een geliefd figuur onder kinderen.";
    infoImg1.src = "images/1960-logo.png"; 
    infoImg2.src = "images/verpakking-1960-za.png";
}

var button1975 = document.querySelector("ol li:nth-of-type(3) button");

button1975.addEventListener("click", gaNaar1975); 

function gaNaar1975() {
    deAuto.className = "auto1975";
    deOL.scrollLeft = 384;
    deWeg.className = "weg1975";

    infoH2.textContent = "1975";
    infoP.textContent = "In 1975 bleef McDonald’s zich snel uitbreiden, met meer dan 3.000 vestigingen wereldwijd. Het menu van het bedrijf was uitgegroeid tot een verscheidenheid aan hamburgers, sandwiches en salades, maar ook ontbijt items zoals Egg McMuffins. Het bedrijf had in 1974 het Ronald McDonald Huis Charities opgericht, dat huisvesting en ondersteuning bood aan gezinnen van ernstig zieke kinderen.";
    infoImg1.src = "images/1975-logo.png";
    infoImg2.src = "images/verpakking-1975-za.png";

}

var button1990 = document.querySelector("ol li:nth-of-type(4) button");

button1990.addEventListener("click", gaNaar1990);

function gaNaar1990() {
    deAuto.className = "auto1990";
    deOL.scrollLeft = 576;
    deWeg.className = "weg1990";

    infoH2.textContent = "1990";
    infoP.textContent = "In 1990 had McDonald’s met meer dan 12.000 restaurants in 59 landen. Het menu van het bedrijf was uitgebreid met een breed scala aan items. Een van de belangrijkste ontwikkelingen bij McDonald’s in de jaren negentig was de introductie van gezondere menu-opties, zoals salades en gegrilde kipsandwiches. Het bedrijf begon ook het aanbieden van kleinere porties en het verminderen van de hoeveelheid vet en calorieën in haar voedsel. Daarnaast bleef McDonald’s innoveren op het gebied van restaurantontwerp en technologie.";
    infoImg1.src = "images/1990-logo.png";
    infoImg2.src = "images/verpakking-1990-za.png";
}

var button2000 = document.querySelector("ol li:nth-of-type(5) button");

button2000.addEventListener("click", gaNaar2000);

function gaNaar2000() {
    deAuto.className = "auto2000";
    deOL.scrollLeft = 768;
    deWeg.className = "weg2000";

    infoH2.textContent = "2000's";
    infoP.textContent = "In de jaren 2000 heeft McDonald’s meer dan 30.000 restaurants in meer dan 100 landen. Het menu van het bedrijf is geëvolueerd met nog meer opties, waaronder premium hamburgers, salades en koffiedranken. Een van de belangrijkste ontwikkelingen bij McDonald’s in de jaren 2000 was de hernieuwde aandacht van het bedrijf voor de klantervaring. Het bedrijf investeerde veel in verbouwingen en upgrades van restaurants zoals zelfbediening apparaten, verkorten van wachttijden en het verhogen van de nauwkeurigheid in de bestellingen.";
    infoImg1.src = "images/2000-logo.png";
    infoImg2.src = "images/verpakking-2005-za.png";
}

/* informatie */

// var tekstinfo = document.querySelector("footer img");

// var button1960 = document.querySelector("ol li:nth-of-type(2) button");

// button1960.addEventListener("click", gaNaar1960);

// function gaNaar1960() {
//     tekstinfo.className = "auto1960";
// }


