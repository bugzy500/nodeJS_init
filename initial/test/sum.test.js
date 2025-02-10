const assert = require('assert');
const sum = require('../sum');

console.log(sum)

describe('sum.calculateSum', () => {
    it('should return 3 when adding 1 and 2', () => {
        assert.strictEqual(sum.calculateSum(1, 2), 3);
    });

    it('should return 0 when adding -1 and 1', () => {
        assert.strictEqual(sum.calculateSum(-1, 1), 0);
    });

    it('should return -3 when adding -1 and -2', () => {
        assert.strictEqual(sum.calculateSum(-1, -2), -3);
    });
});
