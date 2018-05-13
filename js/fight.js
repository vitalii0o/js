function makeRound() {
    var currentRound = 1;

    return function() {
        console.log(`Round ${currentRound}`);
        return currentRound++;
    };
}

function fight(fighter, improvedFighter, ...points) {
    let fighter1 = fighter;
    let fighter2 = improvedFighter;
    let round = makeRound();

    points.forEach(function (point) {
        round();
    });


}