const express = require('express');
const app = express();
const path = require('path');
const startDB = require('./data/db')
const cors = require('cors');
const helmet = require('helmet')

// static
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')
app.set('views', './views')

// config
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(helmet({contentSecurityPolicy: false,}))
app.use(cors({optionsSuccessStatus: 200}))
require('dotenv').config()

// run db
startDB()

// routes
const projectRoute = require('./routes/projects')
const techRoute = require('./routes/techs')
app.use('/projects', projectRoute)
app.use('/techs', techRoute)

app.get('/' , (req , res) => {
    res.render('index')
})


const PORT = process.env.PORT || 3000

// server
app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}, http://localhost:8080/`)
})