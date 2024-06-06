const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', () => {
    const baseUrl = 'http://localhost:7865';

    before((done) => {
        app.listen(7865, () => {
            console.log('Test server running on port 7865');
            done();
        });
    });

    it('should return status code 200', (done) => {
        request.get(baseUrl, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should return the correct message', (done) => {
        request.get(baseUrl, (error, response, body) => {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});
