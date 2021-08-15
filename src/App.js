import React , { Fragment } from 'react';
import './App.css';


// components

import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';


function App() {
  return (
    <div className="App container">
      <Fragment>
        <div className="container" >
          <InputTodo></InputTodo>
          <ListTodos></ListTodos>
        </div>
      </Fragment>
    </div>
  );
}

export default App;
