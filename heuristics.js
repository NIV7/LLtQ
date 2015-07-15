/**
 * Created by Jared on 7/15/2015.
 */

var getHeuristic = function(state) {
    // apply all event checks
    var results = _.map(checks, function(check) {
        return check.test(state);
    })
    // aggregate results

    // return single heuristic value

};