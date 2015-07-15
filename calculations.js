// other stuff??

var variables=require('./variables');

// skill area



// mood area

var Mood=function(){
    var angry=0;
    this.setAngry=function(val){
        angry=val;
    }
    this.getAngry=function(){
        return angry;
    }
    Object.defineProperty(this, 'angry', {get:this.getAngry, set:this.setAngry})
    Object.defineProperty(this, 'afraid', {get:function(val){return -angry;}, set:function(val){angry=-val;}})
    return this;
}

module.exports={'Mood':Mood}