var p5 = require("./p5");
var Button = require("./button");

var sketch = function(p){
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

var myp5 = new p5(sketch,'sketch');