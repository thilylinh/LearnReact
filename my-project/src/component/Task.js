import React, { Component } from 'react';
import styled from 'styled-components';
import { FaCheck, FaTrash, FaUndo } from 'react-icons/fa';

export default class Task extends Component {
  state = {
    textTodo: this.props.todo.title,
    isEdit: false,
  };
  handleCompleteOrUndo = () => {
    this.props.setCompleted(this.props.todo.id);
  };
  handleDelete = () => {
    this.props.setDeleted(this.props.todo.id);
  };
  handleOnEditing = () => {
    this.setState({ isEdit: true });
  };
  handleChangeText = (event) => {
    this.setState({ textTodo: event.target.value });
  };

  render() {
    const { todo } = this.props;
    let handleEdit = () => {
      this.props.editTodo(this.state.textTodo, this.props.todo.id);
      this.setState({ isEdit: false });
    };
    return (
      <TaskWrapper>
        {!this.state.isEdit ? (
          <TodoLable onDoubleClick={this.handleOnEditing}>
            {todo.title}
          </TodoLable>
        ) : (
          <InputEdit
            value={this.state.textTodo}
            onChange={this.handleChangeText}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                handleEdit();
                console.log(this.state.textTodo);
              }
            }}
          ></InputEdit>
        )}

        <CustomButton onClick={this.handleCompleteOrUndo}>
          {this.props.completed ? <FaUndo /> : <FaCheck />}
        </CustomButton>
        <CustomButton delete onClick={this.handleDelete}>
          <FaTrash />
        </CustomButton>
      </TaskWrapper>
    );
  }
}

const TaskWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  background: #c4c4c4;
  width: min(90%, 350px);
  min-height: 50px;
`;
const TodoLable = styled.label`
  width: 100%;
  max-width: 80%;
  margin-right: auto;
  margin-left: 4px;
  line-height: 1rem;
  border: none;
`;
const CustomButton = styled.button`
  background: yellow;
  width: 40px;
  height: 40px;
  color: ${(props) => (props.delete ? 'red' : 'blue')};
  font-size: 1.2rem;
  margin-right: 4px;
  cursor: pointer;
  background: transparent;
  &:hover {
    opacity: 0.8;
  }
  border: none;
  &:focus {
    outline: none;
  }
`;
const InputEdit = styled.input`
  width: 100%;
  max-width: 80%;
  border: none;
  margin-right: auto;
  margin-left: 4px;
  line-height: 2rem;
`;
