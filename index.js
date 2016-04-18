//var p5 = require("./p5");
var Button = require("./button");
var geo = require("./geometry");
var Mouse = require("./mouse");

var vect = new geo.Vector(100,100);

var newCanvas = (function () {
    var canvas = document.createElement("canvas");
    canvas.width = 960;
    canvas.height = 600;
    document.body.appendChild(canvas);
    return canvas;
}());


var mouse = new Mouse(newCanvas);
var mousePos = mouse.mousePos;
document.write(mousePos.x);

var option = {
    position : vect,
    canvas : newCanvas,
    radius : 50
}

var b = new Button(option);
b.display();
/*var sketch = function(p){
    var b;
    p.setup = function () {
        p.createCanvas(960,600);
        var option = {
            position : new p5.Vector(100,100),
            //radius:100,
            p:p
        }
        b = new Button(option);
    };
    p.draw = function () {
        p.background(230);
        p.rect(p.mouseX,p.mouseY,100,100);
        b.display();
    };
};

var myp5 = new p5(sketch,'sketch');*/
