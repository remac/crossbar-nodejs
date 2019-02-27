const chai = require('chai');

const expect = chai.expect;

describe('Crossbar Tests', () => {
    beforeAll(() => {

    });

    it ('should work', () => {
        expect(1).to.equal(1, `Doesn't work`);
    });
});