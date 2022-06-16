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
        pet.fitness = 1;
        pet.walk();
        expect(pet.fitness).toEqual(5);
        });

    it('increases the pets fitness level by 4 up to a maximum of 10', () => {
        const pet = new Pet('Fido');
        pet.fitness = 9;
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });
});

describe('feed', () => {
    it('decreases pet hunger counter to a a minimum of zero', () => {
        const pet = new Pet('Fido');
        pet.hunger = 9;
        pet.feed();
        expect(pet.hunger).toEqual(6);
        pet.feed();
        expect(pet.hunger).toEqual(3);
        pet.feed();
        expect(pet.hunger).toEqual(0);
    });

    it('decreases pet hunger counter to a a minimum of zero', () => {
        const pet = new Pet('Fido');
        pet.hunger = 1;        
        pet.feed();
        expect(pet.hunger).toEqual(0);
    });
});

describe('checkUp' , () => {
    it('returns I am hungry AND I need a walk if fitness is 3 or less and Hunger is 5 or more', () => {
    const pet = new Pet('Fido');
    pet.fitness = 3;
    pet.hunger = 5;
    expect(pet.checkUp()).toEqual('I am hungry AND I need a walk')
    });

    it('returns I am hungry if hunger is 5 or more & fitness is above 3', () => {
        const pet = new Pet('Fido');
        pet.fitness = 6;
        pet.hunger = 5;
        expect(pet.checkUp()).toEqual('I am hungry')
    });

    it('returns I need a walk if fitness is 3 or less', () => {
        const pet = new Pet('Fido');
        pet.fitness = 2;
        pet.hunger = 2;
        expect(pet.checkUp()).toEqual('I need a walk')
    });

    it('returns I feel great! if fitness is above 3 & hunger is less than 5', () => {
        const pet = new Pet('Fido');
        pet.fitness = 7;
        pet.hunger = 2;
        expect(pet.checkUp()).toEqual('I feel great!')
    });
});

describe('isAlive', () => {
    it('returns true after pet is created', () => {
        const pet = new Pet('Fido');
        expect(pet.isAlive).toEqual(true);
    });

    it('returns false when fitness is zero', () => {
        const pet = new Pet('Fido');
        pet.fitness = 0;
        expect(pet.isAlive).toEqual(false);
        });

    it('returns false when hunger is 10 or above', () => {
        const pet = new Pet('Fido');
        pet.hunger = 11;
        expect(pet.isAlive).toEqual(false);
        });
    
    it('returns false when age reaches 30', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(pet.isAlive).toEqual(false);
        });
    
})

describe('isAlive guard clauses', () => {
    it('Throws an error Your pet is no longer alive :( when using checkUp if isAlive is false', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
    });

    it('Throws an error Your pet is no longer alive :( when trying to use walk function if isAlive is false', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
        });

    it('Throws an error Your pet is no longer alive :( when trying to use growUp function if isAlive is false', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
        });
    
    it('Throws an error Your pet is no longer alive :( when trying to use feed function if isAlive is false', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
        });
    })