"use strict";
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
        init: function(artist, song, year) {                      // object method
            this.artist = $('artist').value;                   // initializing properties
            this.song = $('song').value; 
            this.year = $('year').value; 
        },
        
        getFullInfo: function() {                                 // another object method
            return Songs(artist, song, year);
        }
    }
    
    
    let applySong = Object.create(Songs);      // create object based on Person
    console.log(applySong.getFullInfo());     // invoke method       





let windowLoad = function () {
    $('submitAnswer').addEventListener('click', submitSong)
}

window.addEventListener('load', windowLoad);
