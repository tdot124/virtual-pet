const ageDeath = 30;
const minHunger = 0;
const hungerWarning = 5;
const hungerDeath = 10;
const maxFitness = 10;
const fitnessWarning = 3;
const fitnessDeath = 0;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = minHunger;
    this.fitness = maxFitness;
};

Pet.prototype = {
    get isAlive() {
        return this.age < ageDeath && this.hunger < hungerDeath && this.fitness > fitnessDeath;
    }
};

Pet.prototype.growUp = function() {
    if(!this.isAlive) {
        throw new Error('Your pet is no longer alive :(')
    }
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;    
};

Pet.prototype.walk = function() {
    if(!this.isAlive) {
        throw new Error('Your pet is no longer alive :(')
    }
    this.fitness += 4;
    if (this.fitness > maxFitness) {
        this.fitness = maxFitness;
    };
}

Pet.prototype.feed = function() {
    if(!this.isAlive) {
        throw new Error('Your pet is no longer alive :(')
    }
    this.hunger -= 3;
    if (this.hunger < minHunger) {
        this.hunger = minHunger;
    } 
};

Pet.prototype.checkUp = function() {
    if(!this.isAlive) {
        throw new Error('Your pet is no longer alive :(')
    }
    if(this.fitness <= fitnessWarning && this.hunger >= hungerWarning) {
        return 'I am hungry AND I need a walk';
    } else if (this.hunger >= hungerWarning) {
        return 'I am hungry';
    } else if (this.fitness <= fitnessWarning) {
        return 'I need a walk';
    } else {
        return 'I feel great!'
    }
}
    

module.exports = Pet;