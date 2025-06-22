import { processNumber } from './index.js';

describe('processNumber', () => {
  it('should return 202 when passed 1', () => {
    const result = processNumber(1);
    expect(result).toBe(202);
  });

  it('should return 200 when passed 0', () => {
    const result = processNumber(0);
    expect(result).toBe(200);
  });

  it('should handle negative numbers correctly', () => {
    const result = processNumber(-10);
    expect(result).toBe(180); // (-10 + 100) * 2 = 90 * 2 = 180
  });

  it('should handle larger numbers correctly', () => {
    const result = processNumber(50);
    expect(result).toBe(300); // (50 + 100) * 2 = 150 * 2 = 300
  });
}); 