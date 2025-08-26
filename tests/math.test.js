const math = require('../math');

test('Soma 2 + 3 igual a 5', () => { 
    expect(math.add(2, 3)).toBe(5); 
}); 

test('Subtração 3 - 2 igual a 1', () => { 
    expect(math.subtract(3, 2)).toBe(1); 
}); 

test('Multiplicação 2  3 igual a 6', () => { 
    expect(math.multiply(2, 3)).toBe(6); 
}); 

test('Divisão 6 / 2 igual a 3', () => { 
    expect(math.divide(6, 2)).toBe(3); 
});