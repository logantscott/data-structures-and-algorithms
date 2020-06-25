const { ha, blah } = require('./array-map.js');

const arr = [1, 2, 3, 4, '5', '6', 'hello'];

describe('casters', () => {
    it('can cast values to a number', () => {
        expect(arr.map(el => ha(el))).toEqual([2, 4, 6, 8, 10, 12, NaN]);
        expect([2, 4, 6, 8, 10, 12, NaN]).toEqual(blah(arr, ha));
    });
});
