const fitnessLimit = 10;
const minHunger = 0;

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

    

module.exports = Pet;