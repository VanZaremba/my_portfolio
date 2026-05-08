export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">© {year} Vanessa Zaremba. All rights reserved.</p>
        <p className="footer__copy">UX/UI Designer — Freelance</p>
      </div>
    </footer>
  )
}
