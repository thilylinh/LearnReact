const express = require('express');
const router = express.Router();


const places = [{
    id: 'p1',
    title: 'Ha Long Bay',
    description: 'One of the most famous bay in the world!',
    imageUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/3a/35/66.jpg',
    address: 'Viet Nam',
    location: {
        lat: 20.944765,
        lng: 107.1691438,
    },
    creator: '1',
}, {
    id: 'p2',
    title: 'Hà nội',
    description: 'Abc',
    imageUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/3a/35/66.jpg',
    address: 'Viet Nam',
    location: {
        lat: 20.944765,
        lng: 107.1691438,
    },
    creator: '2',
}]

//get all places 
router.get('/', (req, res, next) => {
        res.json(places)
    })
    //get place by id
router.get('/:pid', (req, res, next) => {
    console.log("Get api request in Places");
    const placeID = req.params.pid;
    const place = places.find(p => {
        return p.id === placeID;
    });
    //get error
    if (!place) {
        const error = new Error("Could not find a place!");
        error = 404;
        return next(error);
    }

    res.json({ place })
});
//get place by user id
router.get('/user/:uid', (req, res, next) => {
    const userId = req.params.uid;
    const place = places.find(p => {
            return p.creator === userId;
        })
        //get error
    if (!place) {
        const error = new Error("Could not find a place by user id!");
        error = 404;
        return next(error);
    }
    res.json({ place });
})

module.exports = router;