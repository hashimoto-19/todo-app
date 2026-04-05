import { useState } from 'react'
import './App.css'

function App() {
  const[todos, setTodos] = useState([
    { id: 1, text: '第３章の復習をする', completed: false },
    { id: 2, text: 'Todoアプリを完成させる', completed: false }
  ]);

const [input, setInput] = useState('');





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
        placeholder='タスクを入力してください'
        className='todo-input'
        />

        <button type="submit" className='add-button'>
          追加
        </button>
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
