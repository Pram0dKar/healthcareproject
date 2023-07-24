const express = require('express')
const app = express()
const port = 5000


app.use(express.static('public'));
var bodyParser = require('body-parser');

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})

app.post('',(req,res) => {
    res.render('index', { text: 'Hey' })
})

app.post('/',(req,res) => {
    res.send('POST request to the homepage')
})
app.post('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})
app.listen(port, () => console.info(`App listening on port ${port}`))