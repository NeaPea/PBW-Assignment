"use strict";
//JSlint has been used - 2 lines fail: 4 & 28
var $ = function (foo) { // Save keystrokes
    return document.getElementById(foo);
};


// Assignment JS.Can.0 & JS.Can.1

var poly = function () {
    var canvas = $("myCanvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.beginPath();            // new path
        ctx.moveTo(50, 200);        // goto coordinate in canvas
        ctx.lineTo(150, 50);        // line to coordinate
        ctx.lineTo(180, 150);      // another line to coord
        ctx.lineTo(50, 200);        // Linnea: Line to where opening path began.
        ctx.closePath();            // Linnea: close the path
        ctx.fillStyle = "silver";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 10;
        ctx.fill();   // fills poly
        ctx.stroke(); // draws lines
    }
};

// Assignment JS.Can.2
var changeCanvasSize = function () { // Function to change "room" size
    var canvas1 = $("canvas1");
    var width = $("width").value;
    var height = $("height").value;
    canvas1.width = width;
    canvas1.height = height;

    console.log("You have changed the canvas size to: " + width + " x " + height + " pixels.");
}


let shapes = [];
let shape = {
    shapeInfo: function(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    },

    drawShape: function() {
         this.ctx.fillStyle = this.color;
         this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}


var drawFurniture = function () {
    var toolBox = $("canvas2");
    if (toolBox.getContext) {
        var ctx = toolBox.getContext("2d");
        ctx.fillStyle = "#59d4f3";
        ctx.fillRect(140, 10, 150, 50);
        ctx.fillStyle = "#7359f3";
        ctx.fillRect(190, 70, 100, 50);
        ctx.fillStyle = "#f3599e";
        ctx.fillRect(200, 130, 90, 70);
        ctx.fillStyle = "#f39e59";
        ctx.fillRect(210, 210, 80, 90);
        ctx.fillStyle = "#59f387";
        ctx.beginPath();
        ctx.arc(240, 310, 50, 0, Math.PI);
        ctx.closePath();
        ctx.fill();

        console.log("hello");
    }
}



var onLoad = function () {
    drawFurniture();
    poly();
    $("setSize").addEventListener("click", changeCanvasSize);
}


window.addEventListener("load", onLoad);