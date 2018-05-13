class Fighter {
    constructor (name, power, health = 1000) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage) {
        this.health -= damage;
        console.log(`${this.name} health: ${this.health}`);
    }

    hit(enemy, point = 10) {
        let damage = point * this.power;
        enemy.setDamage(damage);
    }
}