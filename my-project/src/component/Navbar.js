import styled from 'styled-components';
import React from 'react';

const Navbar = () => {
  return (
    <Wrapper>
      <Brand>Navbar</Brand>
      <NavList>
        <Item trash>Trash</Item>
        <Item>Login</Item>
      </NavList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;
const Brand = styled.a`
  text-decoration: none;
  font-size: 2.5rem;
  line-height: 3rem;
  color: red;
  background: transparent;
  cusor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  align-item: center;
  font-size: 1.5rem;
  line-height: 1.2rem;
  background: transparent;
  margin-left: auto;
`;
const Item = styled.li`
  color: ${(props) => (props.trash ? 'yellow' : 'red')};
  margin-right: 10px;
  &:hover {
    opacity: 0.7;
  }
`;
export default Navbar;
