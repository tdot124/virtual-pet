const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('returns an object with given pet name', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido')
    })
    it('has an initial age of zero', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    });
    it('has an initial hunger of zero', () => {
        const pet = new Pet('Fido');
        expect(pet.hunger).toEqual(0);
    });
    it('has an initial fitness of ten', () => {
        const pet = new Pet('Fido');
        expect(pet.fitness).toEqual(10);
    });
});

describe('growUp', () => {
    it('adds one to age' , () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
    })
    it('adds two to age when called twice' , () => {
        const pet = new Pet('Fido');
        pet.growUp();
        pet.growUp();
        expect(pet.age).toEqual(2);
    })
    it('adds five to hunger', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    })
    it('decreases fitness by three', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });

});

describe('walk', () => {
    it('increases the pets fitness level by 4 up to a maximum of 10', () => {
        const pet = new Pet('Fido');
        pet.walk();
        expect(pet.fitness).toEqual(10);
        pet.growUp();
        pet.growUp();
        expect(pet.fitness).toEqual(4);
        pet.walk();
        expect(pet.fitness).toEqual(8);
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });

    it('increases the pets fitness level by 4 up to a maximum of 10', () => {
        const pet = new Pet('Fido');
        pet.fitness = 9;
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });
});