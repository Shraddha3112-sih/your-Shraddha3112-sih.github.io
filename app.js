import React, { useState } from 'react';
import TodoInput from './todoinput';
import TodoItem from './todoitem';

function App() {
  const [todos, setTodos] = useState([]);

  
  const addTodo = (text) => {
    setTodos([...todos, text]);
  };

  
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>My Todo List</h1>
      
      <TodoInput onAddTodo={addTodo} />

      <ul>
        {todos.map((todo, index) => (
          <TodoItem 
            key={index} 
            task={todo} 
            onDelete={() => deleteTodo(index)} 
          />
        ))}
      </ul>
    </div>
  );
}

export default App;