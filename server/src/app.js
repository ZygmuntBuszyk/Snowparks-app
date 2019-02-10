const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const multer = require('multer');
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const GridFsStorage = require('multer-gridfs-storage');
const path = require('path');



const app = express();

// BODY PARSER
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// MORGAN
app.use(morgan('combined'))
// Cors - "is needed for: A server to be hosted on a diffrent domain and we want any client to hit the server" //it gives a security risk
app.use(cors());





// MONGODB AND CONNECTIONS WITH GRID 
const {MongoURI} = require('./config/keys');

// Connecting
mongoose.connect(MongoURI, { useNewUrlParser: true })
    .then(()=> console.log('CONNECTED TO DATABASE')) 
    .catch(err => console.log(err));
const db = mongoose.connection;


// "Once our connection opens, our callback will be called"
let gfs;
db.once('open', ()=> {
    gfs = Grid(db ,mongoose.mongo)
    gfs.collection('uploads')
})


// Create a store engine
const storage = new GridFsStorage({
    url: MongoURI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
          const filename = file.originalname;
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
      });
    }
  });


const upload = multer({storage});

// ROUTES
require('./routes')(app,upload)

// CONFIG
const {port} = require('./config/config')


app.listen(port, () => {
    console.log(`servers started on port: ${[port]}`)
})