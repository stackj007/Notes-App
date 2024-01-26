import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './Editor.css'
export default function Editor() {
  const [tab, setTab] = useState('write')
  const [text, setText] = useState('')

  const handleInputChange = (event) => {
    setText(event.target.value)
  }

  return (
    <div className="editor">
      <div className="tabs">
        <button
          className={tab === 'write' ? 'active' : ''}
          onClick={() => setTab('write')}
        >
          write
        </button>
        <button
          className={tab === 'preview' ? 'active' : ''}
          onClick={() => setTab('preview')}
        >
          preview
        </button>
      </div>
      <div className="body">
        {tab === 'write' && (
          <textarea
            className="text-area"
            value={text}
            onChange={handleInputChange}
          />
        )}
      </div>
    </div>
  )
}
