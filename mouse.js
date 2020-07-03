function mouse(name){
    this.name = name 
    this.isDead = false
     
}
mouse.prototype.die = function(){
    this.isDead =true
}
mouse.prototype.run = function(){
    console.log('run');
    
}
module.exports = mouse