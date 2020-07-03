function horse(){
}

horse.prototype.jump = function(){
    console.log('Jump!!');
    
}

horse.prototype.run = function(){
    console.log('running');
    
}

module.exports = horse