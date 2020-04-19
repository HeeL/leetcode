import { strict as assert } from 'assert';

function sum(numbers: Array<number>, target: number): Array<number> {
    for(let i = 0; i < numbers.length; i++ ) {
        for(let j = 0; j < numbers.length; j++ ) {
            if(numbers[i] + numbers[j] === target) {
                return [i, j];
            }
        }
    }
}

assert.deepEqual(sum([4, 5, 8, 3, 13, 9], 9), [0, 1]);
assert.deepEqual(sum([4, 5, 8, 3, 13, 9], 11), [2, 3]);

console.log('SUCCESS');