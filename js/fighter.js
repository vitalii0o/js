class Fighter {
    constructor (name, power, health = 1000) {
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage) {
        this.health -= damage;
        console.log(`${this.name}'s health: ${this.health}`);
    }

    hit(enemy, point = 10) {
        let damage = point * this.power;
        console.log(`${this.name} hit ${enemy.name} with  ${damage} damage`);
        enemy.setDamage(damage);
    }

    isAlive() {
        let isAlive = this.health >= 0;
        if (isAlive) {
            console.log(`${this.name}: 'I am still alive.'`);
        } else {
            console.log(`${this.name} is dead.`);
        }
        return isAlive;
    }
}