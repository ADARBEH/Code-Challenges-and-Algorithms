// Write your test here

const  Check_string_have_same_word  = require('./challenge02');
const { expect } = require('@jest/globals');

describe('Check the string have same word', () => {
    it('should return the first word that repeated in the string', () => {
        const string = 'ASAC is a department at LTUC. ASAC teaches programming in LTUC.';
        expect(Check_string_have_same_word(string)).toBe('ASAC');
    })
    it('should return No Repetition if the string not have same word', () => {
        const string = 'I am learning programming at ASAC.';
        expect(Check_string_have_same_word(string)).toBe('No Repetition');
    })
}
);