const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

/* eslint-disable */
describe('payment', () => {
  it('sendPaymentRequestToApi should be the same as Utils.calculateNumber(SUM...)', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(calculateNumberSpy, 'SUM', 100, 20);
    calculateNumberSpy.restore();
  });
});
/* eslint-enable */
