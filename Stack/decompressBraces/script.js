/* ------------ Decompress Braces ---------- */
/* ------- Problem -------- */
/*
    Write a function, decompressBraces, that takes in a compressed string as an argument. The function should return the string decompressed.

    The compression format of the input string is 'n{subString}', where the subString within braces should be repeated n times.

    You may assume that every number n is guaranteed to be an integer between 1 through 9.

    You may assume that the input is valid and the decompressed string will only contain alphabetic characters.
*/

/* ---------- Starter Code ---------- */
/*
const decompressBraces = (s) => {
    // todo
};
*/

/* ---------- Solution ----------- */
const decompressBraces = (s) => {
    const nums = '123456789';
    const stack = [];
    for (let char of s) {
        if (nums.includes(char)) {
            stack.push(Number(char));
        } else {
            if (char === '}') {
                let segment = '';
                while (typeof stack[stack.length - 1] !== 'number') {
                    const popped = stack.pop();
                    segment = popped + segment;
                }
                const number = stack.pop();
                stack.push(repeat(segment, number));
            } else if (char !== '{') {
                stack.push(char);
            }
        }
    }

    return stack.join('');
};

const repeat = (str, n) => {
    let result = '';
    for (let i = 0; i < n; i += 1) {
        result += str;
    }
    return result;
};
// s = length of string
// m = count of brace pairs
// Time: O((9^m) * s)
// Space: O((9^m) * s)

/* ----------- testing ---------- */
//Test 00
console.log(decompressBraces("2{q}3{tu}v")); // -> qqtututuv 
//Test 01
console.log(decompressBraces("ch3{ao}")); // -> chaoaoao
//Test 02
console.log(decompressBraces("2{y3{o}}s")); // -> yoooyooos
//Test 03
console.log(decompressBraces("z3{a2{xy}b}")); // -> zaxyxybaxyxybaxyxyb 
//Test 04
console.log(decompressBraces("2{3{r4{e}r}io}")); // -> reeeerreeeerreeeerioreeeerreeeerreeeerio 
//Test 05
console.log(decompressBraces("go3{spinn2{ing}s}")); // -> gospinningingsspinningingsspinningings 
//Test 06
console.log(decompressBraces("2{l2{if}azu}l")); // -> lififazulififazul 
//Test 07
console.log(decompressBraces("3{al4{ec}2{icia}}")); // -> alececececiciaiciaalececececiciaiciaalececececiciaicia 
