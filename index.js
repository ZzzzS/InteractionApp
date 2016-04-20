var Button = require("./button");
var Mouse = require("./mouse");
var sketch = function(p){
    var b;
    var mouse;
    var canvas;
    p.setup = function () {
        p.createCanvas(960,600);
        var option = {
            position : new p5.Vector(100,100),
            radius:100,
            p:p
        }
        b = new Button(option);
        canvas = document.createElement("canvas");
        canvas.width = 500;
        canvas.height = 500;
        document.body.appendChild(canvas);
        mouse = new Mouse(canvas);
    };
    p.draw = function () {
        p.background(230);
        p.rect(p.mouseX,p.mouseY,100,100);
        b.display();
        console.log(mouse.mousePos);
    };
};

try{
    var myp5 = new p5(sketch,'sketch');
}catch(e){
    alert("本程序基于p5.js开发，请在引用本程序前引入“p5.js”，例如 <script type='text/javascript src='p5.min.js' charset='utf-8'></script>");
}
