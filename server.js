require('dotenv').config();

const express = require('express')
const app = express()
const ENV = require('./uilts/env');
const PORT = ENV.get("PORT", 5000);
const router = require('./controllers/calendar');
app.use(router);
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
module.exports = app;