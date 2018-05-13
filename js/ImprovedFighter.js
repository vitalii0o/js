class ImprovedFighter extends Fighter {
    constructor (name, power, health) {
        super(name, power, health);
    }

    doubleHit(enemy, point = 10) {
        const double_point = (x) =>  { return 2 * x };
        super.hit(enemy, double_point(point));
    }
}