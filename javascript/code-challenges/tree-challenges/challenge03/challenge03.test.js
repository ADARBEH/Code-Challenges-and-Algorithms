// Write your test here


const test03 = require('./challenge03.js');

describe('convert Sorted Arr To Bst', () => {
    it('should return a tree', () => {
        let nums = [-10,-3,0,5,9];
        let tree = test03(nums);
        expect(tree.value).toEqual(0);
        expect(tree.left.value).toEqual(-3);
        expect(tree.right.value).toEqual(9);
        expect(tree.left.left.value).toEqual(-10);
        expect(tree.right.left.value).toEqual(5);
    });
});