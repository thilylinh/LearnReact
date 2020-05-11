import React from 'react';
import styled from 'styled-components';
import { NewTask } from './NewTask';
import TaskList from './TaskList';

const Mainpage = (props) => {
  const todoInTrash = props.todos.filter((todo) => todo.isTrash !== true);
  const todoList = todoInTrash.filter((todo) => !todo.isComplete);
  const todoListComplete = todoInTrash.filter((todo) => todo.isComplete);

  return (
    <>
      <NewTask addTodo={props.addTodo}></NewTask>
      <MainWrapper>
        <TaskList
          text='todo'
          todos={todoList}
          setCompleted={props.setCompleted}
          setDeleted={props.setDeleted}
          editTodo={props.editTodo}
        ></TaskList>
        <TaskList
          text='completed'
          completed
          todos={todoListComplete}
          setCompleted={props.setCompleted}
          setDeleted={props.setDeleted}
          editTodo={props.editTodo}
        ></TaskList>
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  margin: 1.5rem 0;
`;

export default Mainpage;
