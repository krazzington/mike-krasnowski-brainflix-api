const express = require('express');
const router = express.Router();
const port = process.env.PORT || process.argv[2] || 8080;
const { v4: uuidv4 } = require('uuid');

const videoData = require('../data/videos.json');

router.get('/', (req, res) => {
    try {
        if (videoData) {
            res.status(200).json(videoData);
        } else {
            res.status(404).json({errorDetails: 'Wrong link, sorry'});
        }
    } catch (error) {
        res.sendStatus(500);
    }
})

router.get('/:id', (req, res) => {
    try {
        if (videoData) {
            const {params:{id}} = req;
            res.status(200).json(videoData.filter(({id:videoId}) => id === videoId));
        } else {
            res.status(404).json({errorDetails: 'Wrong link, sorry'});
        }
    } catch (error) {
        res.sendStatus(500);
    }
})

router.post('/', (req, res) => {
    try {
        if (videoData) {
            const { id, program, grade } = req.body;
            videoData.push({
              id: uuidv4(),
              name,
              program,
              grade,
            });
            res.json(videoData);
        } else {
            res.status(404).json({errorDetails: 'Sorry, the link is wrong'});
        }
    } catch (error) {
        res.sendStatus(500);
    }
})

module.exports = router;