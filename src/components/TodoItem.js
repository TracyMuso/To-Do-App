/* eslint-disable react/destructuring-assignment */
import React from 'react';

class TodoItem extends React.PureComponent {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        />
        <button type="button" onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
          Delete
        </button>
      </li>
    );
  }
}

export default TodoItem;
