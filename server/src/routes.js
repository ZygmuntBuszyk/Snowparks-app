const Snowpark = require('./models/snowpark');

module.exports = (app, upload)=> {
    app.get('/', (req,res) => {
        res.send({
            message: 'Hello there'
        })    
    });
    app.post('/upload', upload.single('file'), (req,res)=> {
        res.send({
            message: 'all cool'
        })

    });
    app.post('/add', (req,res)=> {
        // console.log(req.body)
        
        snowpark = new Snowpark(req.body)
        snowpark.save()
        .catch(err => console.log(err))
        .then(sp => {
            // console.log(sp);
            res.send(sp);
        })

        // const {name,mountain,country,city,description,website,image} = req.body
        
    })
}