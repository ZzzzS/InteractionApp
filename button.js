var util = require("./util");
var Button = function (option){
	EventTarget.call(this);
	if(arguments.length > 0){
		this.position = option.position.copy();
		this.radius = option.radius || 50;
		this.canvas = option.canvas;
		
		this.ctx = this.canvas.getContext('2d');
		
		/*this.pState = "mouseOut";
		this.pSwitch = "off";
		this.switchEffect = true;
		this.hoverCol = this.p.color("#06799F");
		this.pressCol = this.p.color("#216278");
		this.clickCol = this.p.color("#024E68");*/
	}
}
util.inheritPrototype(Button,EventTarget);
Button.prototype.display = function () {
	this.ctx.fillStyle = 'white';
	this.ctx.strokeStyle = 'black';
	this.ctx.beginPath();
	this.ctx.arc(this.position.x,this.position.y,this.radius,0,Math.PI*2,true);
	this.ctx.closePath();
	this.ctx.fill();
	this.ctx.stroke();
}
/*Button.prototype.isSelected = function(){
	if(this.p.mouseX >= this.position.x - this.radius/2 && this.p.mouseX <= this.position.x + this.radius/2 && this.p.mouseY >= this.position.y - this.radius/2 && this.p.mouseY <= this.position.y + this.radius/2){
		return true;
	}else{
		return false;
	}
}
Button.prototype.state = function(){
	if(this.isSelected()){
		if(this.pState == "click"){
			if(this.p.mouseIsPressed){
				return "press";
			}else{
				return "click";
			}
		}else{
			if(this.p.mouseIsPressed){
				return "press";
			}else{
				if(this.pState == "press"){
					if(this.pSwitch == "on"){
						this.pSwitch = "off";
						return "hover";
					}else{
						this.pSwitch = "on";
						return "click";
					}
				}else{
					return "hover";
				}
			}
		}
	}else{
		if(this.pState == "click"){
			return "click";
		}else{
			return "mouseOut";
		}
	}
}
Button.prototype.display = function(){
	if(this.strokeCol){
		this.p.stroke(this.strokeCol);
	}else{
		this.p.noStroke();
	}
	this.p.rectMode('center');
	var state = this.state();
	switch(state){
		case "hover":
			this.p.fill(this.hoverCol);
			this.drawGeometry();
			this.fire({type:"hover"});
			this.pState = "hover";
			break;
		case "mouseOut":
			if(this.fillCol){
				this.p.fill(this.fillCol);
			}else{
				this.p.fill(this.p.color(0,0,100));
			}
			this.drawGeometry();
			this.fire({type:"mouseOut"});
			this.pState = "mouseOut";
			break;
		case "press":	
			this.p.fill(this.pressCol);
			this.drawGeometry();
			this.fire({type:"press"});
			this.pState = "press";
			break;
		case "click":
			this.p.fill(this.clickCol);
			this.drawGeometry();
			this.fire({type:"click"});
			this.pState = "click";
			break;
		default:
			if(this.fillCol){
				this.p.fill(this.fillCol);
			}else{
				this.p.fill(this.p.color(0,0,100));
			}
			this.drawGeometry();
	}
}

Button.prototype.drawGeometry = function(){
	this.p.push();
	this.p.translate(this.position.x,this.position.y);
	this.p.ellipse(0,0,this.radius,this.radius);
	this.p.pop();
}*/

function EventTarget(){
	this.handlers = {};
}

EventTarget.prototype.addHandler = function(type,handler){
	if(typeof this.handlers[type] == "undefined"){
		this.handlers[type] = [];
	}
	this.handlers[type].push(handler);
}
EventTarget.prototype.fire = function(event){
	if(!event.target){
		event.target = this;
	}
	if(this.handlers[event.type] instanceof Array){
		var handlers = this.handlers[event.type];
		for(var i = 0,len = handlers.length;i < len;i++){
			handlers[i](event);
		}
	}
}
EventTarget.prototype.removeHandler = function(type,handler){
	if(this.handlers[type] instanceof Array){
		var handlers = this.handlers[type];
		for(var i = 0,len = handlers.length; i < len;i++){
			if(handers[i] === handler){
				break;
			}
		}
		handlers.splice(i,1);
	}
}

module.exports = Button;