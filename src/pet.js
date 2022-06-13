function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
};

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

const fitnessLimit = 10;

Pet.prototype.walk = function() {
    this.fitness += 4;
    if (this.fitness > fitnessLimit) {
        this.fitness = fitnessLimit;
    };
}
        
    

module.exports = Pet;