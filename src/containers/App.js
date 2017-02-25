import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import FilterLinkList from '../components/FilterLinkList';


export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Paper zDepth={2} className="todoapp">
          <AddTodo />
          <VisibleTodoList />
          <FilterLinkList />
        </Paper>
      </MuiThemeProvider>
    );
  }
}

