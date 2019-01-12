import Chance from 'chance';
import faker from 'faker';

const chance = new Chance();

const genders = ['OLD MAN', 'OLD WOMAN'];

const phrases = {
    professionPhrase: `Never\nunderestimate\nan\n ${chance.pickone(genders)}\n Who is also an\n ${chance.profession()}\n and was born in\n${chance.month()}`.toUpperCase(),
    anger: `WALK AWAY\nTHIS\n${chance.profession().toUpperCase()}\nHAS ANGER ISSUES\nAND A\nSERIOUS\nDISLIKE\nFOR STUPID PEOPLE`.toUpperCase(),
    location: `just an\n${chance.profession()}\nLiving in\n${faker.address.country()}`.toUpperCase()
}

export const generatePhrase = () => {
    let keys = Object.keys(phrases);
    return phrases[keys[keys.length * Math.random() << 0]];
}