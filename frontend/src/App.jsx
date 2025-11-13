import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateTodo from './component/CreateTodo'
import Todos from './component/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  fetch('http://localhost:3000/todos')
    .then(async (res) => {
      const todos = await res.json();
      setTodos(todos);
    })

  return (
    <>
      <CreateTodo />
      <Todos todos={todos} />
    </>
  )
}

export default App;
