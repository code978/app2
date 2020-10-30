const express = require('express');
const app = express();
const connectDB = require('./config/databse');
const port = process.env.PORT || 8000;
const time2 = require('./models/time2');
app.use(express.static(__dirname));
app.set('view engine', 'ejs');

connectDB();
app.get('/', async (req, res) => {
    const time = await time2.find();
    console.log(time);
    res.render('index',{time:time});
})

app.get('/gettime', async (req, res) => {
    const time = new time2({ response: new Date() })
    await time.save();
    res.redirect('/');
})

app.listen(port, () => console.log("server started at: 8000"));