const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vanessa-zaremba/' },
  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~01ab775207ee158e70' },
  { label: 'GitHub', href: 'https://github.com/VanZaremba/' },
]

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__inner">
          <div>
            <h2 className="contact__heading">
              Struggling with<br />
              usability or<br />
              <em>unclear flows?</em><br />
              Let&apos;s fix that.
            </h2>
            <a
              href="mailto:zaremba.van@gmail.com"
              className="contact__email"
            >
              zaremba.van@gmail.com
            </a>
          </div>

          <div className="contact__links">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
