// Write your test here


const test02 = require('./challenge02.js');

describe('test02', () => {
    it('should return true', () => {
        let p = [1,2,3];
        let q = [1,2,3];
        let result = test02(p,q);
        expect(result).toEqual(true);
    });

    it('should return false', () => {
        let p = [1,2,3];
        let q = [1,2,4];
        let result = test02(p,q);
        expect(result).toEqual(false);
    });
});
