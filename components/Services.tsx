const services = [
  {
    num: '01',
    title: 'UX/UI Design',
    bullets: [
      'Design in Figma, including wireframes and high-fidelity interfaces',
      'Interactive prototypes to validate flows and user experience',
      'Focus on clarity, usability, and real user behavior',
    ],
  },
  {
    num: '02',
    title: 'UX/UI Reviews',
    bullets: [
      'Identify friction points, usability issues, and unclear flows',
      'Video walkthrough explaining findings and insights',
      'Structured report with clear, actionable recommendations',
    ],
  },  
  {
    num: '03',
    title: 'Frontend Development',
    bullets: [
    'Fast, responsive websites built with React, Next.js, and modern frontend tools',
    'Pixel-perfect implementation based on Figma designs and design systems',
    'Clean, scalable interfaces focused on performance and user experience',
    ],
  },
]

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <span className="section-tag">What I offer</span>
        <h2 className="services__heading">
          <em>Services</em>
        </h2>

        <ul className="services__list">
          {services.map((s) => (
            <li key={s.num} className="service-item">
              <span className="service-item__num">{s.num}</span>
              <div>
                <h3 className="service-item__title">{s.title}</h3>
                <ul className="service-item__bullets">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
