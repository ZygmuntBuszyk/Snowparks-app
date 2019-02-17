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
        console.log(req.body.image)
       
        // Check if image is valid
        const pattern = new RegExp(
            /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/ )
      
        if(pattern.test(req.body.image)) {
        snowpark = new Snowpark(req.body)
        snowpark.save()
        .catch(err => console.log(err))
        .then(sp => {
            // console.log(sp);
            res.send(sp);
        })
        }
        else {
        req.body.image = 'https://cdn.vuetifyjs.com/images/cards/desert.jpg'
        snowpark = new Snowpark(req.body)
        snowpark.save()
        .catch(err => console.log(err))
        .then(sp => {
            // console.log(sp);
            res.send(sp);
        })
    }
    });
    app.get('/snowpark', (req,res)=> {
        console.log(req)
        const param = req.query.param
    });
    app.get('/snowparks', (req,res) => {
        const param = req.query.param
        console.log(param);
        if(param){
            Snowpark.find({name:param} || {country:param} || {mountain: param} || {city:param}, (err, snowparks)=> {
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
    app.get('/snowparksId',(req,res) => {
        console.log(`reqbody is: ${req.body}`)
        const param = req.query.param
        console.log(`THIS IS PARAM: ${param}`);
        Snowpark.findById(param, (err, snowpark) => {
            if(err) throw err;
            res.send({
                snowpark
            })
        })
    })
}