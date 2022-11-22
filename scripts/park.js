"use strict"

const filterOptionsList = document.getElementById("filterOptionsList");
const locationsList = document.getElementById("locationsList");
const parkTypeList = document.getElementById("parkTypeList");
const parkList = document.getElementById("parkList");
const allList = document.getElementById("all");
const parkInfoPara = document.getElementById("parkInfoPara");



window.onload = function () {
    filterOptionsList.onchange = displayList;
    locationsList.onchange = parksByLocation;
    parkTypeList.onchange = parksByType;
    parkList.onchange = displayParkInfo;

}

function initLocationsList() {
    locationsList.length = 0;
    parkInfoPara.style.display = "none"

    let locationOption = new Option("Select a location", "select"); 
    locationsList.appendChild(locationOption); 

    for (let location of locationsArray) {
        let option = new Option(location, location);
        locationsList.appendChild(option);
    }
}

function initParkTypeList() {
    parkTypeList.length = 0;
    parkInfoPara.style.display = "none"

    let parkTypeOption = new Option("Select a park type", "select");
    parkTypeList.appendChild(parkTypeOption);

    for (let parkType of parkTypesArray) {
        let option = new Option(parkType, parkType);
        parkTypeList.appendChild(option);
    }
}

function displayList() {
    locationsList.style.display = "none";
    parkTypeList.style.display = "none";
    parkList.style.display = "none";

    if (filterOptionsList.value == "location") {
        initLocationsList();
        locationsList.style.display = "block"
    }
    else if (filterOptionsList.value == "type") {
        initParkTypeList();
        parkTypeList.style.display = "block"
    }
    else {
        locationsList.style.display = "none"
        parkTypeList.style.display = "none"
        parkInfoPara.style.display = "none"
    }
}

function parksByLocation() {
    parkList.length = 0;
    parkInfoPara.style.display = "none"

    let parkOption = new Option("Select a park", "select"); 
    parkList.appendChild(parkOption); 
    for (let park of nationalParksArray) {
        if (locationsList.value == park.State) {
            let option = new Option(park.LocationName, park.LocationID);
            parkList.appendChild(option);
        }
    }
    if (locationsList.value != "select") {
        parkList.style.display = "block"
    }
    else {
        parkList.style.display = "none"
        parkInfoPara.style.display = "none"
    }
}

function parksByType() {
    parkList.length = 0;
    parkInfoPara.style.display = "none"

    let parkOption = new Option("Select a park", "select"); 
    parkList.appendChild(parkOption); 

    for (let park of nationalParksArray) {
        if (park.LocationName.indexOf(parkTypeList.value) != -1) {
            let option = new Option(park.LocationName, park.LocationID);
            parkList.appendChild(option);
        }
    }
    if (parkTypeList.value != "select") {
        parkList.style.display = "block"
    }
    else {
        parkList.style.display = "none"
        parkInfoPara.style.display = "none"
    }
}

function displayParkInfo() {
    for (let park of nationalParksArray) {
        if (parkList.value == park.LocationID) {
            parkInfoPara.innerHTML = "<span class='fw-bold'>Mailing Address: </span><br>"
                + park.LocationName + " (" + park.LocationID + ")  <br>" + park.Address +
                "<br>" + park.City + ", " + park.State + " " + park.ZipCode +
                "<br><span class='fw-bold'>Phone Number:</span> " + park.Phone +
                "<br><span class='fw-bold'>Fax Number:</span> " + park.Fax +
                "<br><span class='fw-bold'>Coordinates:</span> " + park.Latitude +", " + park.Longitude;
            if (park.Visit) {     
            parkInfoPara.innerHTML += `<br><a href="${park.Visit}"> Visit </a>`
            }
        }
    }
    if (parkList.value != "select") {
        parkInfoPara.style.display = "block"
    }
    else {
        parkInfoPara.style.display = "none"
    }

}

function displayParks(parks) {

    for (let park of parks) {
        let tbodyOutput = document.getElementById("tbodyOutput")
        let row = tbodyOutput.insertRow();
        let tdParkName = row.insertCell();
        tdParkName.innerHTML = park.LocationName;

        let tdAddress = row.insertCell(1);
        tdAddress.innerHTML = park.Address;

        let tdCity = row.insertCell(2);
        tdCity.innerHTML = park.City;

        let tdState = row.insertCell(3);
        tdState.innerHTML = park.State;

        let tdZipCode = row.insertCell(4);
        tdZipCode.innerHTML = park.ZipCode;
    }};

    function searchBtnOnClick() {
        let all = document.getElementById("all");
        let allValue = all.value;
    }

