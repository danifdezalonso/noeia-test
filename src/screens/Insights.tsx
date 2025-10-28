import React from 'react'

const Insights: React.FC = () => {
  return (
    <div className="content page" role="region" aria-label="Insights">
      <h2>Insights</h2>
      <div className="grid" style={{ marginTop: 12 }}>
        <div className="card" style={{ minHeight: 160 }}>Sessions per week — chart placeholder</div>
        <div className="card" style={{ minHeight: 160 }}>Revenue vs unpaid — chart placeholder</div>
        <div className="card" style={{ minHeight: 160 }}>Session type distribution — chart placeholder</div>
        <div className="card" style={{ minHeight: 160 }}>AI insight: Emotional stability trending up</div>
      </div>
    </div>
  )
}

export default Insights
