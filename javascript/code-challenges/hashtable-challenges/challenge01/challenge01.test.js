// Write your test here

const { Ckeck_sum, covert_root_to_array } = require('./challenge01');
const { expect } = require('@jest/globals');



describe('Check the sum of two numbers in the linked list', () => {
    it('should return true if the sum of two numbers in the linked list equal the integer', () => {
        const root = [7, 2, 9, 1, 5, null, 14];
        const integer = 3;
        expect(Ckeck_sum(root, integer)).toBeTruthy();
    })
    it('should return false if the sum of two numbers in the linked list not equal the integer', () => {
        const root = [7, 2, 9, 1, 5, null, 14];
        const integer = 4;
        expect(Ckeck_sum(root, integer)).toBeFalsy();
    })
});

