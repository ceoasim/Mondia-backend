const express = require('express')
// const jwt = require('express-jwt')

// const secretkey = (require('../../../secret'))

const controller = require('./controller')

const addRouter = express.Router();

addRouter.route('/team').post(controller.addTeam)
addRouter.route('/employee').post(controller.addEmployee)
addRouter.route('/task').post(controller.addTask)
addRouter.route('/task').get(controller.getAllTasks)

module.exports = {
    addRouter
}