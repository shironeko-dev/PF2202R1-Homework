class Animal {
    constructor(name, weight, speed, aliveStatus) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.aliveStatus = aliveStatus;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    getWeight() {
        return this.weight;
    }

    setSpeed(speed) {
        this.speed = speed;
    }

    getSpeed() {
        return this.speed;
    }

    setAliveStatus(aliveStatus) {
        this.aliveStatus = aliveStatus;
    }

    isAlive() {
        return this.aliveStatus;
    }
}