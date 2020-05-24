import React, { Component } from 'react';
import UserList from '../components/UserList';

const UserData = [
  {
    id: 1,
    name: 'Linh',
    image:
      'https://scontent.fdad3-3.fna.fbcdn.net/v/t1.0-9/p960x960/95385482_279263829906568_2949273679030124544_o.jpg?_nc_cat=100&_nc_sid=7aed08&_nc_ohc=ra2vumzZ9NUAX-hp83r&_nc_ht=scontent.fdad3-3.fna&_nc_tp=6&oh=e0c01868eb58cb23c5cf1feac6dc494c&oe=5EE9FCAC',
    place: 3,
  },
  {
    id: 2,
    name: 'Anh',
    image:
      'https://scontent.fdad3-3.fna.fbcdn.net/v/t1.0-9/p960x960/95385482_279263829906568_2949273679030124544_o.jpg?_nc_cat=100&_nc_sid=7aed08&_nc_ohc=ra2vumzZ9NUAX-hp83r&_nc_ht=scontent.fdad3-3.fna&_nc_tp=6&oh=e0c01868eb58cb23c5cf1feac6dc494c&oe=5EE9FCAC',
    place: 1,
  },
];
class User extends Component {
  render() {
    return <UserList items={UserData} />;
  }
}

export default User;
