import { useState } from 'react'
import Editor from './Components/Editor'
import Sidebar from './Components/sidebar'
import './App.css'

function App() {
  const [notes, setNotes] = useState([])
  const [selectedNoteId, setSelectedNoteId] = useState(null)

  const createNewNote = () => {
    const newNote = {
      id: Date.now(),
      title: '',
      content: '',
    }
    setNotes([...notes, newNote])
    setSelectedNoteId(newNote.id)
  }

  const selectNote = (id) => {
    setSelectedNoteId(id)
  }

  const findCurrentNote = notes.find(
    (note) => note.id === selectedNoteId
  )

  return (
    <div className="app">
      <Sidebar onAddNote={createNewNote} />

      <div className="noteList">
        {notes.map((note) => (
          <div
            key={note.id}
            className="noteTitle"
            onClick={() => selectNote(note.id)}
          ></div>
        ))}
      </div>

      <Editor note={findCurrentNote} />
    </div>
  )
}

export default App
