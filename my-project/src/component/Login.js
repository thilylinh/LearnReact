import React, { Component } from 'react';
import styled from 'styled-components';

export default class Login extends Component {
  render() {
    return (
      <Container>
        <LoginForm>
          <Lable>Email</Lable>
          <InputText></InputText>
          <Lable>Password</Lable>
          <InputText></InputText>
        </LoginForm>
      </Container>
    );
  }
}

const Container = styled.div`
  width: min(100%, 350px);
  height: auto;
  margin: 0 auto;
`;

const LoginForm = styled.form`
  width: min(90%, 350px);
  padding: 10px;
  background: transparent;
`;
const Lable = styled.label`
  color: blue;
  font-size: 1rem;
`;

const InputText = styled.input`
  width: min(80%, 350px);
  height: 20px;
  line-height: 1rem;
  color: gray;
  background: white;
`;
const ButtonSubmit = styled.button``;
