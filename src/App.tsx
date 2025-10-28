import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Modal from './components/Modal'
import Home from './screens/Home'
import Calendar from './screens/Calendar'
import Patients from './screens/Patients'
import SessionNotes from './screens/SessionNotes'
import Billing from './screens/Billing'
import Insights from './screens/Insights'
import Settings from './screens/Settings'

export default function App(): JSX.Element {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="app-shell">
      <Header onAdd={() => setModalOpen(true)} />
      <div className="app-main">
        {/* Sidebar on the left for desktop; accessible order preserved */}
        <Sidebar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/notes" element={<SessionNotes />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Sidebar />
      </div>

      <Modal open={modalOpen} title="Add: Session or Patient" onClose={() => setModalOpen(false)}>
        <div style={{ display: 'grid', gap: 8 }}>
          <button className="icon-btn">Create Session</button>
          <button className="icon-btn">Add Patient</button>
        </div>
      </Modal>
    </div>
  )
}
