import Chance from 'chance';
import faker from 'faker';

const chance = new Chance();

const genders = ['OLD MAN', 'OLD WOMAN'];

export const generatePhrase = (options) => {
    const phrases = {
        professionPhrase: `Never underestimate a ${chance.pickone(genders)} Who is also a ${options.occupation} and was born in ${chance.month()}`,
        anger: `WALK AWAY THIS ${options.occupation} HAS ANGER ISSUES AND A SERIOUS DISLIKE FOR STUPID PEOPLE`,
        location: `just a ${options.occupation} Living in ${faker.address.country()}`
    }
    
    let keys = Object.keys(phrases);
    return phrases[keys[keys.length * Math.random() << 0]].toUpperCase();
}