import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Mainpage from './Mainpage';

class App extends Component {
  state = {
    todos: [],
  };
  componentDidMount() {
    this.setState({ todos: this.props.todos });
  }
  setCompleted = (id) => {
    var todo = this.state.todos.find((todo) => todo.id === id);
    var todoList = this.state.todos.filter((todo) => todo.id !== id);
    var newTodo = {
      id: todo.id,
      title: todo.title,
      isComplete: !todo.isComplete,
      isTrash: todo.isTrash,
    };
    this.setState({ todos: [...todoList, newTodo] });
  };
  setDeleted = (id) => {
    var todo = this.state.todos.find((todo) => todo.id === id);
    var todoList = this.state.todos.filter((todo) => todo.id !== id);
    var newTodo = {
      id: todo.id,
      title: todo.title,
      isComplete: todo.isComplete,
      isTrash: !todo.isTrash,
    };
    this.setState({ todos: [...todoList, newTodo] });
  };
  addTodo = (title) => {
    var newTodo = {
      id: new Date().getMilliseconds(),
      title: title,
      isComplete: false,
      isTrash: false,
    };
    this.state.todos.push(newTodo);
    this.setState(this.state.todos);
  };
  editTodo = (title, id) => {
    var list = this.state.todos;
    let arr = list.filter((todo) => todo.id === id);
    arr.map((todo) => {
      todo.title = title;
    });
    // console.log(list);
    this.setState({ todos: list });
  };
  render() {
    return (
      <AppContainer>
        <Navbar></Navbar>
        <Mainpage
          todos={this.state.todos}
          setCompleted={this.setCompleted}
          setDeleted={this.setDeleted}
          addTodo={this.addTodo}
          editTodo={this.editTodo}
        ></Mainpage>
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
    width: min(960px,100%);
    margin 0 auto;
`;

export default App;
