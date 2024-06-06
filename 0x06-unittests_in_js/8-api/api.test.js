const { expect, assert } = require('chai');
const request = require('request');

/* eslint-disable */
describe('Index page', () => {
  it('check response body', (done) => {
    request.get('http://localhost:7865/', (error, res, body) => {
      expect(body).equal('Welcome to the payment system');
    });
    done();
  });
  it('check response status code', (done) => {
    request.get('http://localhost:7865/DFG', (error, res, body) => {
      expect(res.statusCode).equal(404);
    });
    done();
  });
  it('check response status code invalid endpoint', (done) => {
    request.get('http://localhost:7865/', (error, res, body) => {
      expect(res.statusCode).equal(200);
    });
    done();
  });
  it('check response Error', (done) => {
    request.get('http://localhost:7865/', (error, res, body) => {
      assert.isNull(error);
    });
    done();
  });
});
/* eslint-enable */
