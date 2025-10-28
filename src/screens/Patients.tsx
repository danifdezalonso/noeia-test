import React from 'react'

const Patients: React.FC = () => {
  return (
    <div className="content page" role="region" aria-label="Patients">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Patients</h2>
        <div>
          <input placeholder="Search patients..." style={{ padding: 8, borderRadius: 8, border: '1px solid var(--border)' }} />
        </div>
      </div>

      <div style={{ marginTop: 12 }} className="card">
        <table className="table" aria-label="Patients table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Professional</th>
              <th>Last Session</th>
              <th>Pending</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>Ana R.</td>
              <td>Dr. M.</td>
              <td>2025-10-20</td>
              <td>USD 0</td>
            </tr>
            <tr>
              <td>002</td>
              <td>Maria P.</td>
              <td>Dr. L.</td>
              <td>2025-10-27</td>
              <td>USD 50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Patients
