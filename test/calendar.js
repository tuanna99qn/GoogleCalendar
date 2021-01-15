let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
const expect = chai.expect;
chai.use(chaiHttp);
describe('Calendar: ', () => {
    it(' get caledar done ', (done) => {
        chai.request(server)
            .get('/get')
            .send({})
            .end(function (err, res) {
                    expect(res).to.have.status(200);
                done();
            });
    });
    it(' get caledar thieu url ', (done) => {
        chai.request(server)
            .get('/')
            .send({})
            .end(function (err, res) {
                expect(res).to.have.status(404);
                done();
            });
    });

    it(' delete caledar done ', (done) => {
        chai.request(server)
            .delete('/ornm6k5h4tm3vp0g494g58vrnc')
            .send('')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });
    it(' delete caledar fail ', (done) => {
        chai.request(server)
            .delete('/')
            .send()
            .end(function (err, res) {
                expect(res).to.have.status(404);
                done();
            });
    });
    it(' create caledar done ', (done) => {
        chai.request(server)
            .post('/')
            .send({})
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });
    it(' update caledar done ', (done) => {
        chai.request(server)
            .post('/update/vereg9greh26l7ghdtigg2spds')
            .send({})
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });
    it(' update caledar miss id ', (done) => {
        chai.request(server)
            .post('/update')
            .send({})
            .end(function (err, res) {
                expect(res).to.have.status(404);
                done();
            });
    });
})