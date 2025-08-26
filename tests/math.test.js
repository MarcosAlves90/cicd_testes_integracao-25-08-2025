const math = require('../math.js');

test('soma 2 + 3 igual a 5', () => { 
    expect(math.add(2, 3)).toBe(5); 
});

test('subtrai 2 - 3 igual a -1', () => { 
    expect(math.subtract(2, 3)).toBe(-1); 
});

test('multiplica 2 * 3 igual a 6', () => {
    expect(math.multiply(2, 3)).toBe(6);
});

test('divide 2 / 3 aproximadamente igual a 0.666...', () => {
    expect(math.divide(2, 3)).toBeCloseTo(0.6666666666, 10);
});