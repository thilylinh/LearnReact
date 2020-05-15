import React, { Component } from 'react';
import styled from 'styled-components';
import background from '../Image/todolist-vert.png';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Background src={background}></Background>
      </Container>
    );
  }
}
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  margin: 1.5rem 0;
`;

const Background = styled.img`
  width: min(960px);
  height: auto;
`;
