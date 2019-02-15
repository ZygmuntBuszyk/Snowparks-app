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
    });
    app.get('/snowpark', (req,res)=> {
        console.log(req)
        const param = req.query.param
    });
    app.get('/snowparks', (req,res) => {
        const param = req.query.param
        console.log(param);
        if(param){
            Snowpark.find({name:param} && {country:param} && {mountain: param} && {city:param} && {_id: param}, (err, snowparks)=> {
                if(err) throw err;
                if(snowparks.length === 0 || snowparks === undefined) {
                    console.log('empty array');
                    res.send({
                        message: 'No matches'
                    })
                }
                else {
                    res.send({
                        snowparks
                    })
                }
               
            })
        }
        else {
            // Pustry string, zwraca wszystko
            Snowpark.find({}, (err, snowparks) => {
                if(err) throw err;
               res.send({
                   snowparks
               })
            })
        }
     
    });
    // app.get('/snowparks/:id')
}