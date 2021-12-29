const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')


const { services } = require('./src/services/index');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Mount REST on /api
app.use('/api', services);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(err.status).send({ message: err.message });
        return;
    }
    next();
});

const port = process.env.PORT || 3000;

app.listen(port, () =>
    console.log(`Express app listening on localhost:${port}`)
);
