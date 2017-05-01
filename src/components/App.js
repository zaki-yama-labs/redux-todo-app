import React from 'react';
import Header from './Header';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import FilterLinkList from './FilterLinkList';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AddTodo />
        <VisibleTodoList />
        <FilterLinkList />
      </div>
    );
  }
}

