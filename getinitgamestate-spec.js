/**
 * Created by Jared on 7/15/2015.
 */
var getInit=require('./getinitgamestate');

describe('something',function(){
    it(
        'gives me an object',function(){
            var rootState = getInit();
            expect(rootState).toBeDefined();
            expect(rootState.skills).toBeDefined();
            expect(rootState.skills.sosh.dem.elegy).toEqual(0);
        }
    )
});