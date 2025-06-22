import { plus100 } from 'lib-napi-add';
import { plus100 as plus100_2 } from 'lib-embed-distance';

/**
 * Takes an argument, passes it to plus_100, multiplies by 2 and returns result
 * @param {number} arg - The input number
 * @returns {number} - (arg + 100) * 2
 */
function processNumber(arg) {
  const result = plus100(arg);
  return result * 2;
}

function processNumber2(arg) {
  const result = plus100_2(arg);
  return result * 2;
}

export { processNumber, processNumber2 };
