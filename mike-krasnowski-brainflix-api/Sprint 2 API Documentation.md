# Project 2 - BrainFlix API

## Overview
- The url for the API is `https://project-2-api.herokuapp.com`
- Every "video" object will contain unique details however the video link will be the same
- The API comes seeded with a list of videos
  - Each seeded video will contain three default comments
- **Note:** This API has a temporary memory. It may restart intermittently and forget all videos and comments that you have created (except for the three default comments)

## Authentication
- To register with the API and get a key, make a GET request to `/register`
    - You can do this with the browser and you only need to do it once. Store the key in a global variable in your website.
- You must append `?api_key=<your_api_key_here>` to each of your API request URLs (except for `/register`)

## API Errors
- This API may return a 400 or 404 error
#### Example error body
```json
{
  "message": "No video with that id exists"
}
```

## Routes

### GET `/videos`
- Returns an array of video objects 
- Contains only enough information to display in side bar
#### Response body example
```json
[
    {   
        "id": "1af0jruup5gu", 
        "title": "BMX Rampage: 2018 Highlights", 
        "channel": "Red Cow", 
        "image": "https://i.imgur.com/l2Xfgpl.jpg" 
    },
    { 
        "id": "1ainjruutd1j", 
        "title": "Become A Travel Pro In One Easy Lesson", 
        "channel": "Todd Welch", 
        "image": "https://i.imgur.com/5qyCZrD.jpg"
    }
]
```

### GET `/videos/:id`
- `:id` must be swapped out with the id of a video as found in the list of videos
- Returns a detailed object of a single video
    -  Details include the list of comments for that video
- Example response body
```json
{ 
        "id": "1af0jruup5gu",
        "title": "BMX Rampage: 2018 Highlights",
        "channel": "Red Cow",
        "image": "https://i.imgur.com/l2Xfgpl.jpg",
        "description": "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
        "views": "1,001,023",
        "likes": "110,985",
        "duration": "4:01",
        "video": "https://project-2-api.herokuapp.com/stream",
        "timestamp": 1545162149000,
        "comments": [
            {
                "name": "Micheal Lyons",
                "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of concert I have EVER witnessed.",
                "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
                "likes": 0,
                "timestamp": 1545162149000
            },
            {
                "name": "Gary Wong",
                "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
                "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
                "likes": 0,
                "timestamp": 1544595784046
            },
            {
                "name": "Theodore Duncan",
                "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
                "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
                "likes": 0,
                "timestamp": 1542262984046
            }
        ] 
    }
```

## The following endpoints are not required to satisfy the requirements of sprint 2

### POST `/videos/:id/comments`
- `:id` must be swapped out with the numeric id of a video as found in the list of videos
- Creates a new comment for a specific video
- Post body example
```
{
	"name": "Nigel",
	"comment": "This is a test"
}
```
- response body example
```
{
  "name": "Nigel",
  "comment": "This is a test",
  "id": 4,
  "timestamp": 1531857374673
}
```

### DELETE `/videos/:videoId/comments/:commentId`
- Deletes the given comment and returns it in the response body
- `:videoId` must be swapped out with the numeric id of a video as found in the list of videos
- `:commentId` must be swapped out with the numeric id of a comment as found in the list of comments for the given video
- **this endpoint is not mandatory**. It is present for those interested in clearing out comments or going beyond the assignment requirements
- Response body example
```
{
    "name": "Ian",
    "comment": "You could make $5000 a day too!",
    "id": 1,
    "timestamp": 1530744338878
}
```
