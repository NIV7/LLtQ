/**
 * Created by Jared on 7/15/2015.
 */
var variables=require('./variables');
var calculations=require('./calculations');
var _=require('lodash');



var getGameState = function(){
    return {
        skills: _.cloneDeep(variables.skill.start)
    };
}

module.exports = getGameState;