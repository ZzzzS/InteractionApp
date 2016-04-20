var Mouse = function (canvas){
    this.cvs = canvas;
    this.cvs.onmousemove = function (e){
        this.mousePos = this.getMousePos(this.cvs,e);
    }.bind(this);
}

Mouse.prototype.getMousePos = function(canvas, evt) { 
   var rect = canvas.getBoundingClientRect(); 
   return { 
     x: evt.clientX - rect.left * (canvas.width / rect.width),
     y: evt.clientY - rect.top * (canvas.height / rect.height)
   }
 }
 
module.exports = Mouse;