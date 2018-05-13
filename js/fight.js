function makeRound() {
    var currentRound = 1;

    return function() {
        console.log(`---------------------`);
        console.log(`*******ROUND ${currentRound}*******`);
        return currentRound++;
    };
}

function fight(fighter, improvedFighter, ...points) {
    let fighter1 = fighter;
    let fighter2 = improvedFighter;
    let round = makeRound();

    if (points.length == 0) {
        console.log('😐 The fight was cancelled.');
    }

    for (let i=0; i < points.length; i++) {
        let current_round = round();

        if (isFightFinished(current_round)) {
            getFightResult(fighter1, fighter2);
            break;
        }

        let victim;

        if (isFirstHit(current_round)) {
            fighter1.hit(fighter2);
            victim = fighter2;
        } else {
            fighter2.doubleHit(fighter1);
            victim = fighter1;
        }

        if (! victim.isAlive()) {
            getFightResult(fighter1, fighter2);

            break;
        }
    }
}

function isFirstHit(num) { return num % 2;}
function isFightFinished(round) { return round > 12; }
function getFightResult(fighter1, fighter2) {
    console.log(`---------------------`);
    console.log('Fight has been finished.');

    if (fighter1.health <= 0 || (fighter1.health < fighter2.health)) {
        console.log(`😁 ${fighter2.name} won the fight.`)
    } else if (fighter2.health <= 0 || (fighter1.health > fighter2.health)) {
        console.log(`😁 ${fighter1.name} won the fight.`)
    } else if (fighter1.health == fighter2.health) {
        console.log('😲 Fight result: DRAW');
    } else {
        console.log('Houston, we have a problem');
    }
}
