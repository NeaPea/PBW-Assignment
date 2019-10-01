/*"use strict";
var $ = function (foo) {                            // Save keystrokes
    return document.getElementById(foo);
}

let submitSong = function (){                              // Function for event listener
    let artistName = $('artist').value;                    // To run when submit is clicked
    let songName = $('song').value;
    let relYear = $('year').value;

    if (artistName.length && songName.length && relYear.length > 0) {
        $('right').innerHTML = artistName;
        $('right').innerHTML = songName;
        $('right').innerHTML = relYear;
    } else {
        console.log('the fuck is this shit?');
    }
}


    let Songs = {                                                // create object
        init: function(artist, song, year, list) {                      // object method
            this.artist = $('artist').value;                   // initializing properties
            this.song = $('song').value; 
            this.year = $('year').value; 
            this.list = [];
        },
        
        getFullInfo: function() {                                 // another object method
            return '<p>' + this.artist + ' ' +  this.song + ', ' + this.year + '</p>';
        }
    }
    
    
    let applySong = Object.create(Songs);      // create object based on Person
    console.log(applySong.getFullInfo());     // invoke method       





let windowLoad = function () {
    $('submitAnswer').addEventListener('click', submitSong)
}

window.addEventListener('load', windowLoad);*/

"use strict";
let Songs = {                                                // create object
    init: function(artist, song, year) {                      // object method
        this.artist = $('artist').value;                  // initializing properties
        this.song = $('song').value; 
        this.year = $('year').value; 
    },
        
    getFullInfo: function() {                                 // another object method
        return '<p>' + this.artist + ' ' + this.song + ' ' +  this.year + '</p>';   //nml
    }
}

var $ = function (foo) {                            // Save keystrokes
    return document.getElementById(foo);
}

let submitSong = function (){                              // Function for event listener
    let artistName = $('artist').value;                    // To run when submit is clicked
    let songName = $('song').value;
    let relYear = $('year').value;
    
    if (artistName.length && songName.length && relYear.length > 0) {

        let applySong = Object.create(Songs);      // create object based on Songs
        applySong.init();                          // initialize object nml
        songs.push(applySong);                     // put object into array nml
        console.log(applySong.getFullInfo());      // invoke method, debug       
/*        
        $('right').innerHTML = artistName;          // throw out
        $('right').innerHTML += ' ' + songName;
        $('right').innerHTML += ' ' + relYear;
*/
        printArray();                               // print array instead see line 40 nml
    } else {
        console.log('the fuck is this shit?');
    }
}

const printArray = function() {
    // clear $('right'), ie either clear innerHTML, or loop throug firstChild and remove    
    // loop through array and print every object with obj.getFullInfo()
    // use for of loop
    let div1 = $('right');
    while (div1.firstChild) {                       // Removing all children from an element
            div1.removeChild(div1.firstChild);
    }
    for (song of songs) {                           // loop them onto screen
        let p = song.getFullInfo();
        $('right').innerHTML = p;
    }

}




let songs = [];

const windowLoad = function () {
    $('submitAnswer').addEventListener('click', submitSong)
}

window.addEventListener('load', windowLoad);
