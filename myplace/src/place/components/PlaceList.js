import React, { Component } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  List,
  styled,
} from '@material-ui/core';
import PlaceItem from './PlaceItem';
import { Link } from 'react-router-dom';

export class PlaceList extends Component {
  render() {
    const { items } = this.props;

    console.log('item ne', items);
    if (items.length === 0) {
      return (
        <Container>
          <CardContent>
            <Typography> No place not found.Maybe create one ? </Typography>
            <SharedButton>
              <Links to='/place/new'>Share your place</Links>
            </SharedButton>
          </CardContent>
        </Container>
      );
    }
    return (
      <List>
        {items.map((place) => (
          <PlaceItem
            key={place.id}
            id={place.id}
            image={place.image}
            title={place.title}
            description={place.description}
            address={place.address}
            creatorID={place.creator}
            coordinates={place.location}
            onDelete={this.props.onDeletePlace}
          />
        ))}
      </List>
    );
  }
}

export default PlaceList;

const Container = styled(Card)({
  margin: '0 auto',
  textAlign: 'center',
});

const SharedButton = styled(Button)({
  background: '#FCFF5A',
  color: 'white',
  '&:hover': {
    opacity: 1.5,
    background: 'yellow',
  },
  marginTop: '0.5rem',
});

const Links = styled(Link)({
  textDecoration: 'none',
});
