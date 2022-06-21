const express = require('express');
const app = express();
//const port = process.env.PORT || process.argv[2] || 8080;
//const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

app.use(cors());
app.use(express.json());