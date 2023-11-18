/* ---------------- Array Stepper --------------- */
/* ---------- Problem ------------ */
/*
    Write a function, arrayStepper, that takes in an array of numbers as an argument. You start at the first position of the array. The function should return a boolean indicating whether or not it is possible to reach the last position of the array. When situated at some position of the array, you may take a maximum number of steps based on the number at that position.

    For example, given:

    idx =  0  1  2  3  4  5
    numbers = [2, 4, 2, 0, 0, 1]

    The answer is true.
    We start at idx 0, we could take 1 step or 2 steps forward.
    The correct choice is to take 1 step to idx 1.
    Then take 4 steps forward to the end at idx 5.
*/

/* ----------- Starter Code ----------- */
/*
const arrayStepper = (nums) => {
  // todo
};
*/

/* ----------- Solution ----------- */
const arrayStepper = (numbers, i = 0, memo = {}) => {
  if (i in memo) return memo[i];

  if (i >= numbers.length - 1) return true;

  const maxStep = numbers[i];
  for (let step = 1; step <= maxStep; step += 1) {
    if (arrayStepper(numbers, i + step, memo) === true) {
      memo[i] = true;
      return true;
    }
  }

  memo[i] = false;
  return false;
};
// n = length of numbers
// Time: O(n^2)
// Space: O(n)

/* ----------- Testing ----------- */
//Test 00
arrayStepper([2, 4, 2, 0, 0, 1]); // -> true
//Test 01
arrayStepper([2, 3, 2, 0, 0, 1]); // -> false
//Test 02
arrayStepper([3, 1, 3, 1, 0, 1]); // -> true
//Test 03
arrayStepper([4, 1, 5, 1, 1, 1, 0, 4]); // -> true
//Test 04
arrayStepper([4, 1, 2, 1, 1, 1, 0, 4]); // -> false
//Test 05
arrayStepper([1, 1, 1, 1, 1, 0]); // -> true
//Test 06
arrayStepper([1, 1, 1, 1, 0, 0]); // -> false
//Test 07
arrayStepper([
  31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13,
  12, 11, 10, 9, 8, 7, 6, 5, 3, 2, 1, 0, 0, 0,
]); // -> false
