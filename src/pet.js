const fitnessLimit = 10;
const minHunger = 0;
const hungerWarning = 5;
const fitnessWarning = 3;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = minHunger;
    this.fitness = fitnessLimit;
};

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function() {
    this.fitness += 4;
    if (this.fitness > fitnessLimit) {
        this.fitness = fitnessLimit;
    };
}

Pet.prototype.feed = function() {
    this.hunger -= 3;
    if (this.hunger < minHunger) {
        this.hunger = minHunger;
    } 
};

Pet.prototype.checkUp = function() {
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