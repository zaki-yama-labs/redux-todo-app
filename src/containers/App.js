import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import FilterLinkList from '../components/FilterLinkList';

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AddTodo />
          <VisibleTodoList />
          <FilterLinkList />
        </div>
      </MuiThemeProvider>
    );
  }
}

