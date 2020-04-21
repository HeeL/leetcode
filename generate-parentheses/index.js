const assert = require('assert');

    function generateParentheses(n) {
        const result = []
        function backtrack(str, left, right) {
            if (str.length == 2 * n) {
                result.push(str);
            }
            if (left < n) {
                backtrack(str + '(', left + 1, right);
            }
            if (left > right) {
                backtrack(str + ')', left, right + 1);
            }
        }
        backtrack('', 0, 0);
        return result;
    }


    assert.deepEqual(generateParentheses(1), ['()']);
    assert.deepEqual(
        generateParentheses(3),
        [
            "((()))",
            "(()())",
            "(())()",
            "()(())",
            "()()()"
        ]
    );

    console.log('SUCCESS');