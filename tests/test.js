// let dom = require("../public/js/dom.js");
const supertest = require('supertest');
const router = require('../src/router');
const data = require('../src/data.js');

describe('Testing routes', () => {
    test('Test public file html', (done) => {
        supertest(router)
            .get('/')
            .expect(200)
            .expect('Content-Type', 'text/html')
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                expect(res.statusCode).toBe(200);
                done();
            });
    });
    test('Test public files style', (done) => {
        supertest(router)
            .get('/public/main.css')
            .expect(200)
            .expect('Content-Type', 'text/css')
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                expect(res.statusCode).toBe(200);
                done();
            });
    });
    test('Test public files javascript', (done) => {
        supertest(router)
            .get('/public/js/dom.js')
            .expect(200)
            .expect('Content-Type', 'application/javascript')
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                expect(res.statusCode).toBe(200);
                done();
            });
    });
});
describe('Testing routes', () => {

    test('Test src files json statusCode', (done) => {
        supertest(router)
            .get('/src/data.json')
            .expect(200)
            .expect('Content-Type', 'application/json')
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                expect(res.statusCode).toBe(200);
                done();
            });
    });
    test('Test src files json content', (done) => {
        supertest(router)
            .get('/src/under')
            .expect(200)
            .expect('Content-Type', 'application/json')
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                expect(res.text).toBe(JSON.stringify(data));
                done();
            });
    });
})