import React from 'react';
import TodoList from './TodoList'
import PersonList from './PersonList'

function App() {
  return (
    <>
    <PersonList />
    <TodoList />
    <input type="text" />
    <button>Add todo</button>
    <button>Clear completed</button>
    <div>0 left to do</div>
    </>
  )
}

export default App;
