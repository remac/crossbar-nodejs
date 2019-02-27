const chai = require('chai');
const Crossbar = require('../lib/crossbar');

const expect = chai.expect;

describe('Crossbar Tests', () => {
    beforeAll(() => {

    });

    it ('Should initialize with defaults', (done) => {
        try {
            const cb = Crossbar();
            done();
        } catch(err) {
            done(err);
        }
    });
});