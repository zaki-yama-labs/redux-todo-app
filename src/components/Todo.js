import React, { PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';
import { ListItem } from 'material-ui/List';

export default class Todo extends React.Component {
  render() {
    return (
      <ListItem
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
        }}
        leftCheckbox={<Checkbox onCheck={this.props.onClick} />}
        primaryText={this.props.text}
      />
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};
