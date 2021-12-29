const express = require('express')

const { addRouter } = require('./team/router');

const services = express.Router();

services.use('/add', addRouter);

module.exports = {
    services
}