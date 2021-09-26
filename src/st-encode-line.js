import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  if(str === '') return '';
  const arr = [];

  let subArr = [str[0]];  
  for(let i = 1; i < str.length; i++) {
    if(str[i] === str[i-1]) {
      subArr.push(str[i]);
    } else {
      arr.push(subArr);
      subArr = [str[i]];
    }
  }
  arr.push(subArr)

  return arr.reduce((acc, elem) => {
    acc = `${acc}${elem.length === 1 ? '' : elem.length}${elem[0]}`;
    return acc;
  }, ``);
}