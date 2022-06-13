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
});

describe('growUp', () => {
    it('adds one to age' , () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.age).toEqual(1);
})
    it('adds two to age' , () => {
    const pet = new Pet('Fido');
    pet.growUp();
    pet.growUp();
    expect(pet.age).toEqual(2);
})

})