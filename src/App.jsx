import { useState } from 'react'
import Editor from './Components/Editor'
import Sidebar from './Components/sidebar'
import './App.css'

function App() {
  return (
    <div className="app">
      <Editor className="editor" />
      <Sidebar className="sidebar" />
    </div>
  )
}

export default App
