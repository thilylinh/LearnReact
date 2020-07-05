import React, { Component } from 'react';
import UserItem from './UserItem';
import { List } from '@material-ui/core';

export class UserList extends Component {
  render() {
    const { items } = this.props;
    if (items.length === 0) {
      return <h5>No user found!</h5>;
    }
    return (
      <List>
        {items.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            image={user.image}
            placeCount={user.places.length}
          />
        ))}
      </List>
    );
  }
}

export default UserList;
