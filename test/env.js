const Env = require('../uilts/env');
const {assert, expect} = require('chai');
// unit test
context('without arguments', function() {
    //test usit test
    it('PORT', function () {
        assert.equal(Env.get("PORT"), '5000', 'PORT equal `5000`');
    });
    it('PORT', function () {
        assert.notEqual(Env.getOrFail("PORT"), '3000', 'PORT not equal `3000`');
    });
    it('CALENDAR_ID', function () {
        assert.equal(Env.get("CALENDAR_ID"), 'ldcssc61no9o89glha70happ2s@group.calendar.google.com', 'CALENDAR_ID equal `ldcssc61no9o89glha70happ2s@group.calendar.google.com`');
    });
    it('CALENDAR_ID', function () {
        assert.notEqual(Env.getOrFail("CALENDAR_ID"), '3000', 'CALENDAR_ID not equal `sdsadasdsad`');
    });
});