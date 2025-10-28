import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

type HeaderProps = { onAdd?: () => void }

export default function Header({ onAdd }: HeaderProps): JSX.Element {
  const navigate = useNavigate()

  return (
    <header className="header" role="banner" aria-label="Noeia header">
      <div className="brand">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Noeia
        </Link>
      </div>

      <div className="search">
        <label htmlFor="site-search" className="sr-only">
          Search
        </label>
        <input id="site-search" aria-label="Search sessions, patients" placeholder="Search sessions, patients..." />
      </div>

      <div className="header-actions" role="group" aria-label="Header actions">
        <button className="icon-btn" aria-label="Notifications">
          🔔
        </button>
        <button className="fab" aria-label="Add session or patient" onClick={onAdd}>
          +
        </button>
        <button className="icon-btn" aria-haspopup="menu" aria-label="Profile menu" onClick={() => navigate('/settings')}>
          JD
        </button>
      </div>
    </header>
  )
}
