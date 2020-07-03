function mouse(name){
    this.name = name 
    this.isDead = false
     
}
mouse.prototype.die = function(){
    this.isDead =true
}
mouse.prototype.sleep = function(){
    console.log('sleep');
    
}
module.exports = mouse