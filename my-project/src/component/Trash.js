import React, { Component } from 'react';
import styled from 'styled-components';

class Trash extends Component {
  render() {
    return (
      <TrashContainer>
        <p>This is trash</p>
      </TrashContainer>
    );
  }
}

const TrashContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: min(350px);
  height: auto;
  align-items: center;
`;
export default Trash;
