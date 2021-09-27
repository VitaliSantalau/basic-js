import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {

  constructor(mode = true) {
    this.mode = mode;
    this.start = 'A'.charCodeAt(0);
    this.end = 'Z'.charCodeAt(0);
    this.quantity = this.end - this.start + 1;
  }

  handle(message = null, key = null, type) {
    if(message === null || key === null) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();

    const resArr = [];
    let resCharCode = 0;
    let keyCount = 0;

    const getCharCode = (i) => { 
      return type === 'encrypt'
        ? (message.charCodeAt(i) + key.charCodeAt(keyCount)) % this.quantity
        : (message.charCodeAt(i) + this.quantity - key.charCodeAt(keyCount)) % this.quantity;
    }

    for(let i = 0; i < message.length; i++) {
      resCharCode = getCharCode(i);
      if(message.charCodeAt(i) < this.start || message.charCodeAt(i) > this.end) {
        resArr.push(message[i]);
      } else {
        resArr.push(String.fromCharCode(this.start + resCharCode));
        keyCount = (keyCount+1) % key.length;
      }
    }

    return this.mode ? resArr.join('') : resArr.reverse().join('');
  }

  encrypt(message, key) {
    return this.handle(message, key, 'encrypt');
  }

  decrypt(message, key) {
    return this.handle(message, key, 'decrypt');
  }
}