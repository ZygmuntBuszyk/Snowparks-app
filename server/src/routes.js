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

    })
}