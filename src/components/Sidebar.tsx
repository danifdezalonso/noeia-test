import React from 'react'
import { NavLink } from 'react-router-dom'

type NavItem = { to: string; id: string; label: string; icon: string }

const nav: NavItem[] = [
  { to: '/', id: 'home', label: 'Home', icon: '🏠' },
  { to: '/calendar', id: 'calendar', label: 'Calendar', icon: '📅' },
  { to: '/patients', id: 'patients', label: 'Patients', icon: '👥' },
  { to: '/notes', id: 'notes', label: 'Session Notes', icon: '📝' },
  { to: '/billing', id: 'billing', label: 'Billing', icon: '💳' },
  { to: '/insights', id: 'insights', label: 'Insights', icon: '📊' },
]

export default function Sidebar(): JSX.Element {
  return (
    <aside className="sidebar" role="navigation" aria-label="Main">
      {nav.map((item) => (
        <NavLink
          key={item.id}
          to={item.to}
          className={({ isActive }) => (isActive ? 'icon-btn active' : 'icon-btn')}
          title={item.label}
        >
          <div style={{ fontSize: 20 }}>{item.icon}</div>
          <div style={{ fontSize: 11 }}>{item.label}</div>
        </NavLink>
      ))}
    </aside>
  )
}
