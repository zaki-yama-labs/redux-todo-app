import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class AddTodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const text = this.state.input.trim();
    if (!text) {
      return;
    }
    this.props.onSubmit(text);
    this.setState({
      input: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <TextField
            id="todo-title"
            value={this.state.input}
            onChange={(e) => this.handleChange(e)}
          />
          <RaisedButton
            label="Add Todo"
            onTouchTap={(e) => this.handleSubmit(e)}
          />
        </form>
      </div>
    );
  }
}

AddTodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
