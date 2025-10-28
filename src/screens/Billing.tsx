import React from 'react'

const Billing: React.FC = () => {
  return (
    <div className="content page" role="region" aria-label="Billing">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Billing</h2>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="icon-btn">Export CSV</button>
          <button className="icon-btn">Filter</button>
        </div>
      </div>

      <div style={{ marginTop: 12 }} className="card">
        <table className="table" aria-label="Billing table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Patient</th>
              <th>Type</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2025-10-27</td>
              <td>Maria P.</td>
              <td>Individual</td>
              <td>USD 50</td>
              <td>Paid</td>
            </tr>
            <tr>
              <td>2025-10-21</td>
              <td>Ana R.</td>
              <td>Intake</td>
              <td>USD 70</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Billing
