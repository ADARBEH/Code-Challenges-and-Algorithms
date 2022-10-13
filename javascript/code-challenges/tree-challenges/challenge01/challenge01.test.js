// Write your test here
// Write your test here

const test01 = require('./challenge01.js');

describe('test01', () => {
    it('should return a tree', () => {
        let preorder = [3,9,20,15,7];
        let inorder = [9,3,15,20,7];
        let tree = test01(preorder,inorder);
        expect(tree.value).toEqual(3);
        expect(tree.left.value).toEqual(9);
        expect(tree.right.value).toEqual(20);
        expect(tree.right.left.value).toEqual(15);
        expect(tree.right.right.value).toEqual(7);
    });
});