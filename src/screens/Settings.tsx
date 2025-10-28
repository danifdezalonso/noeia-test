import React from 'react'

const Settings: React.FC = () => {
  return (
    <div className="content page" role="region" aria-label="Settings">
      <h2>Settings</h2>
      <div className="card" style={{ marginTop: 12 }}>
        <p style={{ color: 'var(--text-700)' }}>Profile and app settings go here.</p>
      </div>
    </div>
  )
}

export default Settings
