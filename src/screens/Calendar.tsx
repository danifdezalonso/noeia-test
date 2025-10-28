import React from 'react'

type Meeting = {
  id: string
  title: string
  patient?: string
  day: number // 0 = Monday .. 4 = Friday
  start: number // minutes from 00:00
  end: number // minutes from 00:00
}

const HOUR_START = 8
const HOUR_END = 18

function minutesToTop(startMinutes: number) {
  const totalHours = HOUR_END - HOUR_START
  const minutesFromStart = startMinutes - HOUR_START * 60
  const percent = (minutesFromStart / (totalHours * 60)) * 100
  return percent
}

function minutesToHeight(start: number, end: number) {
  const totalHours = HOUR_END - HOUR_START
  const durationMinutes = Math.max(15, end - start)
  return (durationMinutes / (totalHours * 60)) * 100
}

const sampleMeetings: Meeting[] = [
  { id: 'm1', title: 'Session — Maria P.', patient: 'Maria P.', day: 0, start: 9 * 60, end: 9 * 60 + 50 },
  { id: 'm2', title: 'Intake — Alejandro', patient: 'Alejandro', day: 1, start: 11 * 60 + 15, end: 12 * 60 },
  { id: 'm3', title: 'Follow-up — Ana R.', patient: 'Ana R.', day: 2, start: 14 * 60, end: 14 * 60 + 45 },
  { id: 'm4', title: 'Group Session', day: 4, start: 16 * 60, end: 17 * 60 },
]

const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']

const Calendar: React.FC = () => {
  return (
    <div className="content page" role="region" aria-label="Calendar">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <div>
          <button className="icon-btn" aria-label="Previous">
            ◀
          </button>
          <button className="icon-btn" aria-label="Today">
            Today
          </button>
          <button className="icon-btn" aria-label="Next">
            ▶
          </button>
        </div>
        <div style={{ fontWeight: 600 }}>Week view</div>
      </div>

      <div className="calendar-wrapper">
        <div style={{ width: 220 }}>
          <div className="card" style={{ marginBottom: 12 }}>
            <strong>Mini month</strong>
            <div style={{ marginTop: 8, color: 'var(--text-700)' }}>Oct 2025</div>
          </div>
          <div className="card">Sync with Google</div>
        </div>

        <div style={{ flex: 1 }}>
          <div className="calendar-header">
            <div />
            <div className="calendar-weekdays">
              {weekdays.map((d) => (
                <div key={d} className="weekday">
                  {d}
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: 8 }}>
            <div className="calendar-times">
              {Array.from({ length: HOUR_END - HOUR_START + 1 }).map((_, i) => {
                const hour = HOUR_START + i
                return (
                  <div key={hour} className="time-slot">
                    {hour}:00
                  </div>
                )
              })}
            </div>

            <div className="calendar-grid" aria-hidden>
              {Array.from({ length: 5 }).map((_, day) => (
                <div key={day} className="day-column">
                  {/* background slots to give visual hourly rhythm */}
                  {Array.from({ length: HOUR_END - HOUR_START }).map((__, idx) => (
                    <div key={idx} style={{ height: 48 }} />
                  ))}

                  {/* Render events for this day */}
                  {sampleMeetings
                    .filter((m) => m.day === day)
                    .map((m) => {
                      const top = minutesToTop(m.start)
                      const height = minutesToHeight(m.start, m.end)
                      return (
                        <div
                          key={m.id}
                          className="calendar-event"
                          style={{ top: `${top}%`, height: `${height}%`, left: '6%', right: '6%' }}
                        >
                          <div style={{ fontWeight: 600 }}>{m.title}</div>
                          <div className="meta">{`${String(Math.floor(m.start / 60)).padStart(2, '0')}:${String(m.start % 60).padStart(2, '0')} - ${String(Math.floor(m.end / 60)).padStart(2, '0')}:${String(m.end % 60).padStart(2, '0')}`}</div>
                        </div>
                      )
                    })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
