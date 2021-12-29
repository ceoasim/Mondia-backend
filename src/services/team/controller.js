
const { PrismaClient } = require('@prisma/client')

// var bcrypt = require('bcryptjs');

const prisma = new PrismaClient()

const addTeam = async (req, res) => {

		/* 	#swagger.tags = ['Add Team'] 
			#swagger.description = 'Add team details.'
			#swagger.parameters['obj'] = {
				in: 'body',
				description: 'Add new team',
				schema: {
					$name: 'Kristine',
					$startDate:'28/05/21',
					$endDate:'26/06/21',
				}
			}
	*/

	const { name, startDate, endDate } = req.body

	if (name && startDate && endDate) {

		try {
			await prisma.team.create({data: {
				name: name, startDate: startDate, endDate: endDate
			}})

			return res.status(201).json({});

		} catch (e) {
			console.log("error", e);
			return res.status(500).json({ message: "Something went wrong" });
		}
	}
	else {

		return res
			.status(400)
			.send({ error: 'Incomplete parameters' });

	}

};

const addEmployee = async (req, res) => {

		/* 	#swagger.tags = ['Add Employee'] 
			#swagger.description = 'Add Employee details.'
			#swagger.parameters['obj'] = {
				in: 'body',
				description: 'Add new Employee',
				schema: {
					$name: 'Kristine',
					$startDate:'28/05/21',
					$teamId:'61c5342000dd57da00fe5f96',
					$skills:'react js, react native, node',
				}
			}
	*/

	const { name, startDate, teamId, skills } = req.body

	if (name && startDate && teamId) {

		try {
			await prisma.employee.create({data: {
				name: name, startDate: startDate, teamId: teamId, skills: skills
			}})

			return res.status(201).json({});

		} catch (e) {
			console.log("error", e);
			return res.status(500).json({ message: "Something went wrong" });
		}
	}
	else {

		return res
			.status(400)
			.send({ error: 'Incomplete parameters' });

	}

};

const addTask = async (req, res) => {

		/* 	#swagger.tags = ['Add Task'] 
			#swagger.description = 'Add Task details.'
			#swagger.parameters['obj'] = {
				in: 'body',
				description: 'Add new Task',
				schema: {
					$name: 'Kristine',
					$startDate:'28/05/21',
					$taskTime:'60 minutes',
					$employeeId:'61c5342000dd57da00fe5f96',
					$description:'Design ui for login page.',
				}
			}
	*/

	const { name, startDate, taskTime, employeeId, description } = req.body
	if (name && startDate && taskTime && employeeId && description) {

		try {
			await prisma.task.create({data: {
				name: name, startDate: startDate, employeeId: employeeId, description: description, taskTime: taskTime
			}})

			return res.status(201).json({});

		} catch (e) {
			console.log("error", e);
			return res.status(500).json({ message: "Something went wrong" });
		}
	}
	else {

		return res
			.status(400)
			.send({ error: 'Incomplete parameters' });

	}

};
const getAllTasks = async (req, res) => {

		/* 	#swagger.tags = ['Get All Task'] 
			#swagger.description = 'All Task details.'
	*/

		try {
			const tasks = await prisma.task.findMany()

			return res.status(201).json(tasks);

		} catch (e) {
			console.log("error", e);
			return res.status(500).json({ message: "Something went wrong" });
		}

};

module.exports = {
	addTeam,
	addEmployee,
	addTask,
	getAllTasks,
}