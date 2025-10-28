import React from 'react'

const Home: React.FC = () => {
  return (
    <main className="content" role="main" aria-label="Home dashboard">
      <section className="page" aria-labelledby="today-sessions">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <h2 id="today-sessions">Today’s Sessions</h2>
          <a href="#more" style={{ fontSize: 13 }}>
            View all
          </a>
        </div>
        <div className="grid">
          <div className="card">
            <strong>09:00</strong> — Maria P. <button style={{ float: 'right' }}>Join</button>
            <div style={{ marginTop: 8, color: 'var(--text-700)' }}>Individual — 50 min</div>
          </div>

          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 12, color: 'var(--text-700)' }}>Pending Payments</div>
                <div style={{ fontWeight: 600, fontSize: 18 }}>USD 3,240</div>
              </div>
              <a href="#billing" style={{ alignSelf: 'center' }}>
                View
              </a>
            </div>
          </div>

          <div className="card">
            <div style={{ fontSize: 12, color: 'var(--text-700)' }}>Patients at Risk</div>
            <div style={{ marginTop: 8 }}>
              <div style={{ background: '#FDF6F2', padding: 8, borderRadius: 8 }}>• Ana R. — elevated risk</div>
            </div>
          </div>

          <div className="card">
            <div style={{ fontSize: 12, color: 'var(--text-700)' }}>Monthly Revenue</div>
            <div style={{ height: 80, marginTop: 8, background: 'linear-gradient(90deg,#E6FAF9,#FFFFFF)', borderRadius: 8 }} aria-hidden />
          </div>
        </div>
      </section>

      <section className="page" aria-labelledby="ai-suggestions">
        <h3 id="ai-suggestions">AI Suggestions</h3>
        <div className="grid" style={{ marginTop: 8 }}>
          <div className="card">Remind Alejandro about intake form — <button>Send</button></div>
          <div className="card">Suggested focus for next session with Maria — anxiety triggers</div>
        </div>
      </section>
    </main>
  )
}

export default Home
