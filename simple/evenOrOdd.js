/**
 * Problem:
 * Write a program that checks whether a given number is even or odd.
 *
 * Your task:
 * Implement the function `isEvenOrOdd` that takes a number and returns either "Even" or "Odd".
 *
 * Example:
 * isEvenOrOdd(4) should return "Even".
 * isEvenOrOdd(3) should return "Odd".
 */

// Write your solution here

function isEvenOrOdd(num) {

    let result = num % 2;

    if (result === 0) {
        return 'Even'
    } else {
        return 'Odd'
    }

}

console.log(isEvenOrOdd(164));

module.exports = isEvenOrOdd;