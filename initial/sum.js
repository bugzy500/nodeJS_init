/**
 * Calculates the sum of two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function calculateSum(a, b) {
  return a + b;
}

const random = Math.random(); // random number between 0 and 1

module.exports = {
    calculateSum: calculateSum,
    random: random
}