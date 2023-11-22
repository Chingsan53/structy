/* ------------ Befitting Brackets ----------- */
/* --------- Problem ---------- */
/*
    Write a function, befittingBrackets, that takes in a string as an argument. The function should return a boolean indicating whether or not the string contains correctly matched brackets.

    You may assume the string contains only characters: ( ) [ ] { }
*/

/* ---------- Starter Code ----------- */
/*
const befittingBrackets = (str) => {
    // todo
};
*/

/* ---------- Solution --------- */
const befittingBrackets = (str) => {
    const stack = [];

    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let char of str) {
        if (char in brackets) {
            stack.push(brackets[char]);
        } else {
            if (stack.length > 0 && stack[stack.length - 1] === char) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
};
// n = length of string
// Time: O(n)
// Space: O(n)

/* --------- Testing --------- */
//Test 00
console.log(befittingBrackets('(){}[](())')); // -> true
//Test 01
console.log(befittingBrackets('({[]})')); // -> true
//Test 02
console.log(befittingBrackets('[][}')); // -> false
//Test 03
console.log(befittingBrackets('{[]}({}')); // -> false
//Test 04
console.log(befittingBrackets('[]{}(}[]')); // -> false
//Test 05
console.log(befittingBrackets('[]{}()[]')); // -> true
//Test 06
console.log(befittingBrackets(']{}')); // -> false
//Test 07
console.log(befittingBrackets('')); // -> true
//Test 08
console.log(befittingBrackets('{[(}])')); // -> false