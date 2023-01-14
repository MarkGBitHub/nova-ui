import React from 'react';
import './App.css';
import TodoHeader from '../components/TodoHeader';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

function App() {
  return (
    <div className="container-fluid">
      <TodoHeader/>
      <AddTodo/>
      <TodoList status='Pending'/>
      <TodoList status='Completed'/>
    </div>
  );
}

export default App;
