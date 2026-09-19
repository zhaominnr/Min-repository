interface Props {
  show: boolean
  label: string
}

export function RewardBurst({ show, label }: Props) {
  if (!show) return null
  return (
    <div className="reward" role="status" aria-live="polite">
      <span>{label} ⭐</span>
      <i className="burst" style={{ left: '20%', top: '40%' }} aria-hidden>
        ✨
      </i>
      <i className="burst" style={{ left: '70%', top: '35%' }} aria-hidden>
        🌟
      </i>
      <i className="burst" style={{ left: '50%', top: '55%' }} aria-hidden>
        🎉
      </i>
    </div>
  )
}
