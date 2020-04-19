import { strict as assert } from 'assert';

function sum(numbers: Array<number>, target: number): Array<number> {
    const dict = {};
    for(let i = 0; i < numbers.length; i++) {
        if (dict[target - numbers[i]] >= 0) {
            return [dict[target - numbers[i]], i];
        }
        dict[numbers[i]] = i;
    }
}

assert.deepEqual(sum([4, 5, 8, 3, 13, 9], 9), [0, 1]);
assert.deepEqual(sum([4, 5, 8, 3, 13, 9], 11), [2, 3]);

console.log('SUCCESS');