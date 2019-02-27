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

    it ('Should contain accounts api', () => {
        const cb = Crossbar();

        expect(cb.api.accounts, `Accounts api doesn't exist`).to.exist;
    });

    it ('Should contain devices api', () => {
        const cb = Crossbar();

        expect(cb.api.devices, `devices api doesn't exist`).to.exist;
    });

    it ('Should contain faxes api', () => {
        const cb = Crossbar();

        expect(cb.api.faxes, `faxes api doesn't exist`).to.exist;
    });

    it ('Should contain user_auth api', () => {
        const cb = Crossbar();

        expect(cb.api.user_auth, `user_auth api doesn't exist`).to.exist;
    });

    it ('Should contain users api', () => {
        const cb = Crossbar();

        expect(cb.api.users, `users api doesn't exist`).to.exist;
    });

    it ('Should contain cdrs api', () => {
        const cb = Crossbar();

        expect(cb.api.cdrs, `CDR api doesn't exist`).to.exist;
    });
});