"use strict"

const mountainsList = document.getElementById("mountainsList");
const mountainInfo = document.getElementById("mountainOptions");
let option = new Option("Select a mountain", "select");
mountainsList.appendChild(option);

window.onload = function() {
    initMountainsList(); 
    mountainsList.onchange = displayInfo;
}

function initMountainsList() {
    for (let mountain of mountainsArray) {
        let option = new Option(mountain.name, mountain.name);
        mountainsList.appendChild(option);
    }
}

function displayInfo() {
    mountainInfo.innerHTML = "";
    for (let mountain of mountainsArray) {
        if (mountainsList.value == "select") {
            mountainOptions.innerHTML = "";
        }
        else if (mountain.name == mountainsList.value) {
            mountainOptions.innerHTML += "<br>" +
            mountain.name + "<br>" 
            + "Elevation: "  + mountain.elevation + "<br>" + 
            mountain.desc + "<br><img src='images/" + mountain.img +
             "' width='100%'></img>";  
        getSunsetForMountain(mountain.coords.lat, mountain.coords.lng).then(data => {
                mountainOptions.innerHTML += "<br>" + "Sunrise/sunset (UTC)" + 
                data.results.sunrise + "/" + data.results.sunset;
               });
            }
    }
}


// function that can "fetch" the sunrise/sunset times
async function getSunsetForMountain(lat, lng){
    let response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
    let data = await response.json();
    return data;
   }

// Fetch the sunset/sunrise times for a specific mountain
   
