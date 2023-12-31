/* ---------- Parenthetical Possibilities --------- */
/* ------ Problem ------- */
/*
    Write a function, parentheticalPossibilities, that takes in a string as an argument. The function should return an array containing all of the strings that could be generated by expanding all parentheses of the string into its possibilities.

    For example, the possibilities for 'x(mn)yz' are 'xmyz', 'xnyz'.
*/

/* --------- Starter Code ---------- */
/*
const parentheticalPossibilities = (s) => {
    // todo
}
*/

/* --------- Solution ---------- */
const parentheticalPossibilities = (s) => {
    if (s === "") return [""];

    const { remaining, chars } = getOptions(s);
    const suffixes = parentheticalPossibilities(remaining);
    const possibilities = [];

    for (let char of chars) {
        for (let suffix of suffixes) {
            possibilities.push(char + suffix);
        }
    }

    return possibilities;
};

const getOptions = (s) => {
    if (s[0] === "(") {
        const endIdx = s.indexOf(")");
        const remaining = s.slice(endIdx + 1);
        const chars = s.slice(1, endIdx).split("");
        return { remaining, chars };
    } else {
        const remaining = s.slice(1);
        const chars = [s[0]];
        return { remaining, chars };
    }
};
// n = length of the string, m = length of largest parenthetical group
// Time: ~O(m^n)
// Space: ~O(m^n)

/* --------- Testing ---------- */
//Test 00
console.table(parentheticalPossibilities('x(mn)yz')); // -> 
// [ 'xmyz', 'xnyz' ]

//Test 01
console.table(parentheticalPossibilities("(qr)ab(stu)c")); // ->
// [ 'qabsc', 'qabtc', 'qabuc', 'rabsc', 'rabtc', 'rabuc' ]

//Test 02
console.table(parentheticalPossibilities("taco")); // ->
// ['taco']

//Test 03
console.table(parentheticalPossibilities("")); // ->
// ['']

//Test 04
console.table(parentheticalPossibilities("(etc)(blvd)(cat)")); // ->
// [
//  'ebc', 'eba', 'ebt', 'elc', 'ela',
//  'elt', 'evc', 'eva', 'evt', 'edc',
//  'eda', 'edt', 'tbc', 'tba', 'tbt',
//  'tlc', 'tla', 'tlt', 'tvc', 'tva',
//  'tvt', 'tdc', 'tda', 'tdt', 'cbc',
//  'cba', 'cbt', 'clc', 'cla', 'clt',
//  'cvc', 'cva', 'cvt', 'cdc', 'cda',
//  'cdt'
// ]
