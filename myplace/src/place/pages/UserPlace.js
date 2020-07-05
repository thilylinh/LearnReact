import React, { useState, useEffect } from 'react';
import PlaceList from '../components/PlaceList';
//use Hooks
import { useParams } from 'react-router-dom';

// const Places = [{
//     id: 'p1',
//     title: 'Ha Long Bay',
//     description: 'One of the most famous bay in the world!',
//     imageUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/3a/35/66.jpg',
//     address: 'Viet Nam',
//     location: {
//         lat: 20.944765,
//         lng: 107.1691438,
//     },
//     creator: '1',
// }, ];

const UserPlace = () => {
    const [place, setplace] = useState([]);
    const userId = useParams().userId;
    useEffect(() => {
        try {
            loadData();
        } catch (err) {
            alert('error', err);
        }
    });
    const loadData = async() => {
        const res = await fetch(`http://localhost:3001/api/places/user/${userId}`);
        const data = await res.json();
        setplace(data.places);
    };

    const placeDeletedHandler = deletedPlaceId => {
        setplace(prevPlaces =>
            prevPlaces.filter(place => place.id !== deletedPlaceId)
        );
    };
    return <PlaceList items = { place }
    onDeletePlace = { placeDeletedHandler }
    />;
};

export default UserPlace;