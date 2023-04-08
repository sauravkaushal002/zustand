import { useState } from 'react'

import './App.css'
import Todo from "./components/Todo"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<Todo text ={"for checking"}/>
    </div>
  )
}

export default App
