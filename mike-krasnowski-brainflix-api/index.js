require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static('public'))

const {PORT, BACKEND_URL} = process.env;

const videoRouter = require('./routes/videos');

app.use('/videos', videoRouter);

app.listen(PORT, () => {
    console.log('working?');
})