const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const videoData = require('../data/videos.json');

router.get('/', (req, res) => {
    try {
            if (videoData) {
                res.status(200).json(videoData.map(videos=>({
                    id:videos.id,
                    title:videos.title,
                    channel:videos.channel,
                    image:videos.image
                })));
            } else {
                res.status(404).json({errorDetails: 'Wrong link, sorry'});
            }      
    } catch (error) {
        res.sendStatus(500);
    }
})

router.get('/:id', (req, res) => {
    const videoDetails = [];
    videoData.map(video => {
        return videoDetails.push(video.id)
    })
    try {
        if (videoData) {
            const {params:{id}} = req;
            res.status(200).json(videoData.find((video) => video.id === req.params.id));
        } else {
            res.status(404).json({errorDetails: 'Wrong link, sorry'});
        }
    } catch (error) {
        res.sendStatus(500);
    }
})

router.post('/', (req, res) => {
    const { title, description } = req.body;
    const date = new Date();
    const postTime = date.getTime();
    videoData.push({
        id: uuidv4(),
        title,
        channel: "Mike's Channel",
        description,
        views: "1,001,023",
        likes: "110,985",
        duration: "4:01",
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: postTime,
        image: "http://localhost:8080/images/image0.jpeg",
        comments: []
    });
    fs.writeFileSync('data/videos.json', JSON.stringify(videoData))
    res.status(200).send('Video has been successfully uploaded.')
})

module.exports = router;