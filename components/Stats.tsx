const stats = [
  { number: '5+', label: 'Years of Experience' },
  { number: '20+', label: 'Interfaces Designed' },
  { number: 'CRM & LPs', label: 'Industry Experience' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats__grid">
        {stats.map((s) => (
          <div key={s.label} className="stats__item">
            <span className="stats__number">{s.number}</span>
            <span className="stats__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
