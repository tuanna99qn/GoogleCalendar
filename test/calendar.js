let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
const expect = chai.expect;
chai.use(chaiHttp);

describe('Calener',()=>{
    it('get calendar done',(done => {
        chai.request(server)
            .get('/calendar')
            .send({})
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done();
            });
    }))
    it('get calendar faild',(done => {
        chai.request(server)
            .get('/')
            .send({})
            .end(function (err, res) {
                expect(res).to.have.status(404);
                done();
            });
    }))
});
it('create calendar done',(done => {
    chai.request(server)
        .post('/calendar')
        .send({})
        .end(function (err, res) {
            expect(res).to.have.status(200);
            done();
        });
}))
it('create calendar fail',(done => {
    chai.request(server)
        .post('/')
        .send({})
        .end(function (err, res) {
            expect(res).to.have.status(404);
            done();
        });
}))
it('update calendar done',(done => {
    chai.request(server)
        .put('/calendar/q8at8icnkca1sfahmff6cmsvdk@group.calendar.google.com')
        .send({})
        .end(function (err, res) {
            expect(res).to.have.status(200);
            done();
        });
}))
it('update calendar missing id',(done => {
    chai.request(server)
        .put('/calendar/')
        .send({})
        .end(function (err, res) {
            expect(res).to.have.status(404);
            done();
        });
}))
it('delete calendar done',(done => {
    chai.request(server)
        .delete('/calendar/ov2ufdrquderd6uscq0lvajs04@group.calendar.google.com')
        .send({})
        .end(function (err, res) {
            expect(res).to.have.status(200);
            done();
        });
}))
it('delete calendar missing id',(done => {
    chai.request(server)
        .delete('/calendar/')
        .send({})
        .end(function (err, res) {
            expect(res).to.have.status(404);
            done();
        });
}))
describe('Event: ', () => {
    it(' get Event done ', (done) => {
        chai.request(server)
            .get('/event/q8at8icnkca1sfahmff6cmsvdk@group.calendar.google.com')
            .send({})
            .end(function (err, res) {
                    expect(res).to.have.status(200);
                done();
            });
    });
    it(' get Event thieu url ', (done) => {
        chai.request(server)
            .get('/')
            .send({})
            .end(function (err, res) {
                expect(res).to.have.status(404);
                done();
            });
    });

    it(' delete Event done ', (done) => {
        chai.request(server)
            .delete('/event/q8at8icnkca1sfahmff6cmsvdk@group.calendar.google.com')
            .send('')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });
    it(' delete Event fail ', (done) => {
        chai.request(server)
            .delete('/')
            .send()
            .end(function (err, res) {
                expect(res).to.have.status(404);
                done();
            });
    });
    it(' create Event done ', (done) => {
        chai.request(server)
            .post('/event/q8at8icnkca1sfahmff6cmsvdk@group.calendar.google.com')
            .send({})
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });
    it(' update Event done ', (done) => {
        chai.request(server)
            .post('/update/vereg9greh26l7ghdtigg2spds')
            .send({})
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });
    it(' update Event miss id ', (done) => {
        chai.request(server)
            .post('/update')
            .send({})
            .end(function (err, res) {
                expect(res).to.have.status(404);
                done();
            });
    });
})