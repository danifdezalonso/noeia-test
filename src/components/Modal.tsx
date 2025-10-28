import React, { useEffect } from 'react'

type ModalProps = {
  open: boolean
  title: string
  onClose: () => void
  children?: React.ReactNode
}

export default function Modal({ open, title, onClose, children }: ModalProps): JSX.Element | null {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null
  return (
    <div role="dialog" aria-modal="true" aria-label={title} style={{
      position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(16,22,22,0.28)', zIndex: 1000
    }}>
      <div style={{ width: 'min(920px,96%)', borderRadius: 12, padding: 18, background: 'white', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <h3 style={{ margin: 0 }}>{title}</h3>
          <button onClick={onClose} className="icon-btn" aria-label="Close">✕</button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}
