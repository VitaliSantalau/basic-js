import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  };

  const res = arr.slice();

  for(let i = 0; i < res.length; i++) {
    if(res[i+1] && res[i] === '--discard-next') {
      res.splice(i, 2);
      i+=2;
    } 
    if(res[i-1] && res[i] === '--discard-prev') {
      res.splice(i-1, 2);
    } 
    if(res[i+1] && res[i] === '--double-next') {
      res.splice(i, 1, res[i+1]);
    } 
    if(res[i-1] && res[i] === '--double-prev') {
      res.splice(i, 1 , res[i-1]);
    } 
  }
  return res.filter(el => el !== '--discard-prev' && el !== '--double-prev' && el !== '--double-next' && el !== '--discard-next');
}