/* ------------- Nesting Score ------------- */
/* -------- Problem ----------- */
/*
    Write a function, nestingScore, that takes in a string of brackets as an argument. The function should return the score of the string according to the following rules:

    [] is worth 1 point
    XY is worth m + n points where X, Y are substrings of well-formed brackets and m, n are their respective scores
    [S] is worth 2 * k points where S is a substring of well-formed brackets and k is the score of that substring
    You may assume that the input only contains well-formed square brackets.
*/

/* --------- Starter Code ---------- */
/*
const nestingScore = (str) => {
    // todo
};
*/

/* --------- Solution ---------- */
const nestingScore = (str) => {
    const stack = [0];
    for (let char of str) {
        if (char === '[') {
            stack.push(0);
        } else {
            const popped = stack.pop();
            if (popped === 0) {
                stack[stack.length - 1] += 1;
            } else {
                stack[stack.length - 1] += 2 * popped;
            }
        }
    }

    return stack[0];
};
// n = length of string
// Time: O(n)
// Space: O(n)

/* ---------- Testing ---------- */
//Test 00
console.log(nestingScore("[]")); // -> 1
//Test 01
console.log(nestingScore("[[][]]")); // -> 4
//Test 02
console.log(nestingScore("[[][][]]")); // -> 6
//Test 03
console.log(nestingScore("[[][]][]")); // -> 5
//Test 04
console.log(nestingScore("[][[][]][[]]")); // -> 7
//Test 05
console.log(nestingScore("[[[[[[[][]]]]]]][]")); // -> 129
//Test 06
console.log(nestingScore("[][][]")); // -> 3
//Test 07
console.log(nestingScore("[[]]")); // -> 2