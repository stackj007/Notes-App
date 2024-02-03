import PropTypes from 'prop-types'
import './Sidebar.css'

export default function Sidebar({ onAddNote }) {
  return (
    <div className="sidebarContainer">
      <header>
        <h1>Notes</h1>
        <button onClick={onAddNote}>+</button>
      </header>
    </div>
  )
}

Sidebar.propTypes = {
  onAddNote: PropTypes.func.isRequired,
}
