const { assert } = require('chai');

const calculateNumber = (type, a, b) => {
  switch (type) {
    case 'SUM':
      return Math.round(a) + Math.round(b);
    case 'SUBTRACT':
      return Math.round(a) - Math.round(b);
    case 'DIVIDE':
      try {
        assert(Math.round(b) !== 0);
        return Math.round(a) / Math.round(b);
      } catch (e) {
        return 'Error';
      }
    default:
      return 'Error';
  }
};

module.exports = calculateNumber;
