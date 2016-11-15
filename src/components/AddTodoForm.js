import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class AddTodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
          <TextField id="todo-title" value={this.state.input} onChange={this.handleChange} />
          <RaisedButton label="Add Todo" onTouchTap={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

AddTodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
