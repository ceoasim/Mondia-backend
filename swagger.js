const swaggerAutogen = require('swagger-autogen')()


const doc = {

    info: {
        version: '',      // by default: '1.0.0'
        title: '',        // by default: 'REST API'
        description: '',  // by default: ''
    },
    host: '',      // by default: 'localhost:3000'
    basePath: '',  // by default: '/'
    schemes: [],   // by default: ['http']
    consumes: [],  // by default: ['application/json']
    produces: [],  // by default: ['application/json']
    // tags: [        // by default: empty Array
    //     {
    //         name: '',         // Tag name
    //         description: '',  // Tag description
    //     },
    //     // { ... }
    // ], 
    securityDefinitions: {
        bearerAuth: {
            name: "Authorization",
            type: "apiKey",
            in: "header"
        }
    }
    ,  // by default: empty object
    definitions: {
        // User: {
        //     id: 1,
        //     name: "Loreeum Epson",
        //     email: "john.doe@gmail.com",
        //     address: "5th Avenue",
        //     phone_number: "221512154",
        //     district: "Xyz"
        // },

        // BusinessUser: {
        //     id: 1,
        //     businessType: "Transport",
        //     email: "john.doe@gmail.com",
        //     phoneNumber: "221512154",
        //     address: "5th Avenue"
        // },
      

    }
}

const outputFile = './swagger_output.json'
const endpointsFiles = ['./index.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index')           // Your project's root file
})
