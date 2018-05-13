class Fighter {
    constructor (name, power, health = 100) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage) {
        this.health -= damage;
        console.log(`health: ${this.health}`);
    }

    hit(enemy, point = 10) {
        let damage = point * enemy.power;
        enemy.setDamage(damage);
    }
}