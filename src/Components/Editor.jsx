import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
export default function Editor() {
  const [tap, setTap] = useState('write')
  const [text, setText] = useState('')

  return (
    <div>
      <button onClick={() => setTab('write')}>write</button>
      <button onClick={() => setTab('preview')}>
        preview
      </button>
    </div>
  )
}
