/* ------------ Paired Parentheses -------------- */
/* -------- Problem --------- */
/*
    Write a function, pairedParentheses, that takes in a string as an argument. The function should return a boolean indicating whether or not the string has well-formed parentheses.

    You may assume the string contains only alphabetic characters, '(', or ')'.
*/

/* ----------- Starter Code ---------- */
/*
const pairedParentheses = (str) => {
    // todo
};
*/

/* ----------- Solution ----------- */
const pairedParentheses = (str) => {
    let count = 0;

    for (let char of str) {
        if (char === '(') {
            count += 1;
        } else if (char === ')') {
            if (count === 0) {
                return false;
            }

            count -= 1;
        }
    }

    return count === 0;
};
// n = length of string
// Time: O(n)
// Space: O(1)

/* --------- Testing --------- */
//Test 00
console.log(pairedParentheses("(david)((abby))")); // -> true
//Test 01
console.log(pairedParentheses("()rose(jeff")); // -> false
//Test 02
console.log(pairedParentheses(")(")); // -> false
//Test 03
console.log(pairedParentheses("()")); // -> true
//Test 04
console.log(pairedParentheses("(((potato())))")); // -> true
//Test 05
console.log(pairedParentheses("(())(water)()")); // -> true
//Test 06
console.log(pairedParentheses("(())(water()()")); // -> false
//Test 07
console.log(pairedParentheses("")); // -> true
//Test 08
console.log(pairedParentheses("))()")); // -> false