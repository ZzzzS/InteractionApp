var Geometry = {};
Geometry.Vector = function (x,y){
    this.x = x || 0;
    this.y = y || 0;
}
Geometry.Vector.prototype.copy = function(){
    var vect = new Geometry.Vector(this.x, this.y);
    return vect;
}
module.exports = Geometry;

