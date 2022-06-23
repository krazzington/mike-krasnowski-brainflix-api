require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');

app.use(cors());
app.use(express.json())

const videoRouter = require('./routes/videos');

app.use('/videos', videoRouter);
// app.use('/videos/:id', videoRouter);

app.listen(8080, () => {
    console.log('working?');
})