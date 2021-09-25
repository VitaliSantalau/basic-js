import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition,
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;
  
  function repeatStr() {
    const n = repeatTimes;
    const sep = separator;
    let outStr='';
    for(let i = 1; i <= n; i++) {
      outStr = `${outStr}${str}${repeatSubStr()}${i !== n ? sep : ''}`;
    }
    return outStr;
  }

  function repeatSubStr() {
    if(addition === undefined) return '';
    const n = additionRepeatTimes;
    const sep = additionSeparator;
    let outStr='';
    for(let i = 1; i <= n; i++) {
      outStr = `${outStr}${addition}${i !== n ? sep : ''}`;
    }
    return outStr;
  }

  return repeatStr()
}