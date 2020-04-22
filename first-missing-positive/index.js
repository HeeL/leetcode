const assert = require('assert');

const firstMissingPositive = nums => {
    hash = {};
    for(let i = 0; i < nums.length; i++) {
        hash[nums[i]] = 1;
    }
    for(let i = 1; i < nums.length + 2; i++) {
        if (!hash[i]) {
            return i;
        }
    }
};

assert.equal(firstMissingPositive([1, 2, 0]), 3);
assert.equal(firstMissingPositive([1]), 2);
assert.equal(firstMissingPositive([]), 1);
assert.equal(firstMissingPositive([3, 4, -1, 1]), 2);
assert.equal(firstMissingPositive([7, 8, 9, 11, 12]), 1);

console.log('SUCCESS');