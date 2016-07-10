import React from 'react';
import { connect } from 'react-redux';
import { getVisibleTodos } from './store/todos';

let TodoList = ({todos, onTodoClick}) => (
  <div>
    <ul>
      {todos.map(todo => {
        return (
          <li
            key={todo.id}
            onClick={() => {
              onTodoClick(todo.id);
            }}
            style={{textDecoration: todo.completed? 'line-through': 'none'}}>
            {todo.text}
          </li>)
      })}
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: (id) => {
      dispatch({
        type: 'TOGGLE_TODO',
        id
      });
    }
  };
}

TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

module.exports = TodoList;
