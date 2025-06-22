import { plus100 } from 'lib-napi-add';

/**
 * Takes an argument, passes it to plus_100, multiplies by 2 and returns result
 * @param {number} arg - The input number
 * @returns {number} - (arg + 100) * 2
 */
function processNumber(arg) {
  const result = plus100(arg);
  return result * 2;
}

export { processNumber };
