// JS.OO.0  - Song list
"use strict";
var $ = function (foo) {                                         // Save keystrokes
    return document.getElementById(foo);
}

let Song = {                                                // create object
    init: function (artist, song, year) {                    // Object method                                                        //Constructor - to create an object with different properties(options). 
        this.artist = artist;                                // initializing properties                                             // THIS specific object
        this.song = song;
        this.year = year;

    },

    getFullInfo: function () {                                 // another object method
        return this.artist + ' - ' + this.song + ', ' + this.year;
    },

    getHtmlElement: function () {                           // A function that will run each time we click Submit Song              
        let listItem = document.createElement("LI");
        let songInfo = document.createTextNode(this.getFullInfo());
        listItem.appendChild(songInfo);
        return listItem;
    }
}

let submitSong = function () {                               // Function for event listener
    let artistName = $('artist').value;                    // To run when submit is clicked
    let songName = $('song').value;
    let relYear = $('year').value;

    if (artistName.length > 0 && songName.length > 0 && relYear > 0) {
        let applySong = Object.create(Song);
        applySong.init(artistName, songName, relYear);
        $('songList').appendChild(applySong.getHtmlElement());
    } else {
        confirm("You forgot to add an artist, song or release year.");
    }
}



// JS.OO.1  - Display planet info

let Planet = {                                                                      // Create object
    info: function (planetName, dist, sidereal, synodic, eccen, orbital) {       // Object method
        this.planetName = planetName;
        this.dist = dist;                                                        // Initializing the properties
        this.sidereal = sidereal;
        this.synodic = synodic;
        this.eccen = eccen;
        this.orbital = orbital;
    },

    getPlanetInfo: function () {
        return "<b>Planet: </b>" + this.planetName  + "<br><b> Distance: </b>" + this.dist + "<br><b>Sidereal Period: </b>" + this.sidereal + "<br><b>Synodic Period: </b>" + this.synodic + "<br><b>Eccentricity: </b>" + this.eccen + "<br><b>Orbital Inclination: </b>" + this.orbital;
    },

}

let planets = [];                           // Create an array with planets
let createPlanets = function () {           // Here we add our planets into the array "planets"

    let mercury = Object.create(Planet);
    mercury.info("Mercury ", "0.3871 AU ", "87.97 days ", "115.88 days ", "0.206 ", "7.00° ");
    planets["Mercury"] = mercury;

    let venus = Object.create(Planet);
    venus.info("Venus", "0.7233 AU ", "224.70 d ", "583.92 d ", "0.007 ", "3.39° ");
    planets["Venus"] = venus;

    let earth = Object.create(Planet);
    earth.info("Earth ", "1 AU ", "1 year ", "365 days ", "0.017 ", "0.00° ");
    planets["Earth"] = earth;

    let mars = Object.create(Planet);
    mars.info("Mars ","1.5237 AU ", "1.8809 years ", "779.94 days ", "0.093 ", "1.85° ");
    planets["Mars"] = mars;

    let jupiter = Object.create(Planet);
    jupiter.info("Jupiter ","5.2028 AU ", "11.862 years ", "398.9 days ", "0.048 ", "3.39° ");
    planets["Jupiter"] = jupiter;

    let saturn = Object.create(Planet);
    saturn.info("Saturn ", "9.5388 AU ", "29.458 years ", "378.1 days ", "0.056 ", "2.49° ");
    planets["Saturn"] = saturn;

    let uranus = Object.create(Planet);
    uranus.info("Uranus ", "19.1914 AU ", "84.01 years ", "369.7 days ", "0.046 ", "0.77° ");
    planets["Uranus"] = uranus;

    let neptune = Object.create(Planet);
    neptune.info("Neptune ", "30.0611 AU ", "164.79 years ", "367.5 days ", "0.010 ", "1.77° ");
    planets["Neptune"] = neptune;

    let pluto = Object.create(Planet);
    pluto.info("Pluto ", "39.5294 AU ", "248.5 years ", "366.7 days ", "0.248 ", "17.15° ");
    planets["Pluto"] = pluto;
}

let changePlanet = function () {                                                 // Function that will store the array data in a function
    let selectedPlanetName = this.value;
    let selectedPlanet = planets[selectedPlanetName];
    $('planetInfoTxt').innerHTML = selectedPlanet.getPlanetInfo();

}



let windowLoad = function () {
    createPlanets();                                                                // Our "Planet library". Here is where our information about the planets are stored.

    $('submitAnswer').addEventListener('click', submitSong);
    $('mercury').addEventListener('click', changePlanet);
    $('venus').addEventListener('click', changePlanet);
    $('earth').addEventListener('click', changePlanet);
    $('mars').addEventListener('click', changePlanet);
    $('jupiter').addEventListener('click', changePlanet);
    $('saturn').addEventListener('click', changePlanet);
    $('uranus').addEventListener('click', changePlanet);
    $('neptune').addEventListener('click', changePlanet);
    $('pluto').addEventListener('click', changePlanet);
}
window.addEventListener('load', windowLoad);

