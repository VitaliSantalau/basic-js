import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const compare = [];
  const arr = String(n).split('');

  for(let i = 0; i < arr.length; i++) {
    const tempArr = arr.slice();
    tempArr.splice(i, 1);
    compare.push(Number(tempArr.join('')));
  }
  return Math.max(...compare);
}