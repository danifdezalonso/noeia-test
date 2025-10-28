import React, { useEffect, useState } from 'react'

const SessionNotes: React.FC = () => {
  const [note, setNote] = useState('')

  useEffect(() => {
    const id = setInterval(() => {
      console.debug('autosave', note.slice(0, 20))
    }, 5000)
    return () => clearInterval(id)
  }, [note])

  return (
    <div className="content" role="region" aria-label="Session notes workspace">
      <div style={{ display: 'flex', gap: 12 }}>
        <aside style={{ width: 260 }}>
          <div className="card">Patient list / sessions</div>
        </aside>

        <section style={{ flex: 1 }}>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <h3>Manual Notes</h3>
              <div style={{ fontSize: 13, color: 'var(--text-700)' }}>Autosaved</div>
            </div>
            <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Write notes…" style={{ width: '100%', minHeight: 240, padding: 12, borderRadius: 8, border: '1px solid var(--muted)' }} />
          </div>

          <div className="card" style={{ marginTop: 12 }}>
            <h4>AI Summary</h4>
            <div style={{ color: 'var(--text-700)' }}>Detected emotions and suggested topics will appear here.</div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SessionNotes
