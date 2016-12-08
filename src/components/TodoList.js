import React, { PropTypes } from 'react';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    return (
      <List>
        {this.props.todos.map((todo) => {
          return (
            <div key={todo.id}>
              <Todo
                {...todo}
                onClick={() => this.props.onTodoClick(todo.id)}
              />
              <Divider />
            </div>
          );
        })}
      </List>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};
