import React, { useState } from 'react';

function TodoInput({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      onAddTodo(inputValue);
      setInputValue(''); 
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Enter a task..."
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}

export default TodoInput;