const calculateNumber = require('./2-calcul_chai');
const { expect } = require('chai');

/* eslint-disable */
describe('calculateNumber(SUM)', () => {
  it('normal number', () => {
    expect(calculateNumber('SUM', 1, 3)).equal(4);
  });
  it('zahlen number', () => {
    expect(calculateNumber('SUM', 1, -3)).equal(-2);
  });
  it('radical number', () => {
    expect(calculateNumber('SUM', 1, 3.7)).equal(5);
    expect(calculateNumber('SUM', 1.2, 3.7)).equal(5);
    expect(calculateNumber('SUM', 1.5, 3.7)).equal(6);
  });
  it('non-radical number', () => {
    expect(calculateNumber('SUM', Math.E, Math.PI)).equal(6);
  });
});
describe('calculateNumber(SUBTRACT)', () => {
  it('normal number', () => {
    expect(calculateNumber('SUBTRACT', 1, 3)).equal(-2);
  });
  it('zahlen number', () => {
    expect(calculateNumber('SUBTRACT', 1, -3)).equal(4);
  });
  it('radical number', () => {
    expect(calculateNumber('SUBTRACT', 1.5, 3.7)).equal(-2);
  });
  it('non-radical number', () => {
    expect(calculateNumber('SUBTRACT', Math.E, Math.PI)).equal(0);
  });
});
describe('calculateNumber(DIVIDE)', () => {
  it('normal number', () => {
    expect(calculateNumber('DIVIDE', 1, 3)).equal(1 / 3);
  });
  it('zahlen number', () => {
    expect(calculateNumber('DIVIDE', 1, -3)).equal(-1 / 3);
  });
  it('radical number', () => {
    expect(calculateNumber('DIVIDE', 1.5, 3.7)).equal(0.5);
  });
  it('non-radical number', () => {
    expect(calculateNumber('DIVIDE', Math.E, Math.PI)).equal(1);
  });
  it('Infinity number', () => {
    expect(calculateNumber('DIVIDE', 1, 0)).equal('Error');
  });
});
/* eslint-enable */
