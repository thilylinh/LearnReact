import React from 'react';
import PlaceList from '../components/PlaceList';
//use Hooks
import { useParams } from 'react-router-dom';

const Places = [{
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
}, ];

const UserPlace = () => {
    const userId = useParams().userId;
    const loadPlaces = Places.filter((place) => place.creator === userId);
    return <PlaceList items = { loadPlaces }
    />;
};

export default UserPlace;