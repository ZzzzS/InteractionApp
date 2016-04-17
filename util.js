var util = util || {
    inheritPrototype : function (subType,superType){
        var prototype = this.object(superType.prototype);
        prototype.constructor = subType;
        subType.prototype = prototype;
    },
    object : function (o){
        function F(){}
        F.prototype = o;
        return new F();
    }
};


module.exports = util;