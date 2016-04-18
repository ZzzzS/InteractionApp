function Mouse(canvas){
    this.canvas = canvas;
    //var mousePos;
    this.canvas.onmousemove = function (e){
        var _box = e.currentTarget.getBoundingClientRect();
        Mouse.mousePos = {
            x : e.clientX - _box.left * (e.currentTarget.width / _box.width),
            y : e.clientY - _box.top * (e.currentTarget.height / _box.height)
        }
    }
}



module.exports = Mouse;