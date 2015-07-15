var variables=require('./variables');

var _=require('lodash');

describe('skill',function(){

    _.each(variables.skill.start, function(v1, category){
        _.each(v1, function(v2, topic){
            _.each(v2, function(rank, ability) {
                it('baseline '+"skill.start."+category+"."+topic+"."+ability,function(){
                    expect(rank).toEqual(0);
                });
            });
        });
    });

    _.each(variables.skill.current, function(v1, category){
        _.each(v1, function(v2, topic){
            _.each(v2, function(rank, ability) {
                it('power level under 9000 '+"skill.current."+category+"."+topic+"."+ability,function(){
                    expect(rank).toBeLessThan(111);
                });
            });
        });
    });

});