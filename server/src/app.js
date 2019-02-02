const express = require('express');
const cors = require('cors');
const morgan = require('morgan');





const app = express();

// BODY PARSER
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// MORGAN
app.use(morgan('combined'))
// Cors - "is needed for: A server to be hosted on a diffrent domain and we want any client to hit the server" //it gives a security risk
app.use(cors());



// ROUTES
require('./routes')(app)

// CONFIG
const {port} = require('./config/config')


app.listen(port, () => {
    console.log(`servers started on port: ${[port]}`)
})