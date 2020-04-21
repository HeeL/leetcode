const assert = require('assert');

function createRange(from, to) {
    return from === to ? String(to) : String(from) + '->' + String(to);
}

function summaryRanges(nums) {
    const ranges = [];
    let from = nums[0]
    let to = nums[0]

    nums.forEach(function(num){
        if (to + 1 < num) {
            ranges.push(createRange(from, to));
            from = num;
        }
        to = num;
    });
    ranges.push(createRange(from, to));

    return ranges;
}

assert.deepEqual(
    summaryRanges([0, 1, 2, 4, 5, 7]),
    ['0->2', '4->5', '7']
);
assert.deepEqual(
    summaryRanges([0, 2, 3, 4, 6, 8, 9]),
    ['0', '2->4', '6', '8->9']
);

console.log('SUCCESS');