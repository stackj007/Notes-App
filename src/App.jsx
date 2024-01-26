import { useState } from 'react'
import Editor from './Components/Editor'
import Sidebar from './Components/sidebar'
import './App.css'

function App() {
  return (
    <div className="app">
      <Sidebar className="sidebar" />
      <Editor className="editor" />
    </div>
  )
}

export default App
