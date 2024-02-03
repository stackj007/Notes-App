import { useState } from 'react'
import Editor from './Components/Editor'
import Sidebar from './Components/sidebar'
import './App.css'

function App() {
  const [notes, setNotes] = useState([])

  return (
    <div className="app">
      <Sidebar onAddNote={() => setNotes([...notes, {}])} />

      <Editor />
    </div>
  )
}

export default App
