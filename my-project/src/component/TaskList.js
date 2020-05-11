import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import Task from './Task';

const TaskList = (props) => {
  const { todos } = props;
  return (
    <TaskItem>
      <Banner completed={props.completed}>{props.text}</Banner>
      {todos.map((todo) => (
        <Task
          key={todo.id}
          completed={props.completed}
          todo={todo}
          setCompleted={props.setCompleted}
          setDeleted={props.setDeleted}
          editTodo={props.editTodo}
        />
      ))}
    </TaskItem>
  );
};
const TaskItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default TaskList;
