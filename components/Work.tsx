const projects = [
  {
    tag: 'UI UX · Figma · Platform',
    title: 'Civil Marriage Platform',
    desc: 'End-to-end UX/UI design for a government civil marriage platform, focused on clarity and accessibility across complex flows.',
    cover: '/images/civil-marriage-bg.png',
    href: '/projects/civil-marriage',
  },
  {
    tag: 'Redesign · Onboarding · Figma',
    title: 'Travel Planner Onboarding',
    desc: 'Redesign of the onboarding experience for a travel planner app — simplifying user activation and reducing drop-off.',
    cover: '/images/travel-planner-bg.png',
    href: '/projects/travel-planner',
  },
]

export default function Work() {
  return (
    <section className="work section" id="work">
      <div className="container">
        <span className="section-tag">Selected Work</span>
        <h2 className="work__heading">
          See what I&apos;ve been<br />
          <em>working on</em>
        </h2>

        <div className="work__grid">
          {projects.map((p) => (
            <a key={p.title} href={p.href} className="project-card">
              <div className="project-card__thumb">
                <div className="project-card__thumb-inner"><img className="project-card__image" src={p.cover}></img></div>
              </div>
              <div className="project-card__body">
                <p className="project-card__tag">{p.tag}</p>
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
