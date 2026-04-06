import { useState } from 'react'
import './App.css'

function App() {
  const[todos, setTodos] = useState([
    { id: 1, text: '第３章の復習をする', completed: false },
    { id: 2, text: 'Todoアプリを完成させる', completed: false }
  ]);

const [input, setInput] = useState('');

const [error, setError] = useState('');

const addTodo = () => {
  const text = input.trim();
  if (!text) {
    setError('タスクを入力してください');
    return;
  }
  setTodos([
  ...todos,
  {
    id: Date.now(),
    text,
    completed: false,
  },
  ]);
  setInput('');
  setError('');
};
const toggleTodo = (id) => {
  setTodos(
    todos.map(todo =>
      todo.id === id 
      ? { ...todo, completed: !todo.completed }
       : todo
    )
  );
};
  return (
    <div className="app">
      <h1>ToDoアプリ</h1>

      <div className="todo-form">
        <label htmlFor="todo-input" className='form-label'>
          新しいタスク
        </label>
        <input id="todo-input" 
        type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='新しいToDoを入力してください'
        className='todo-input'
        />

        <button type="submit" className='add-button' onClick={addTodo}>
          追加
        </button>
        {error && <p className="error-message">{error}</p>}
      </div>








      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>  
  );
}

export default App
