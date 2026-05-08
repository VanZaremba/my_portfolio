'use client'

import { useEffect, useState } from 'react'

const FULL_TEXT = "Hi, I'm Vanessa"
const TYPING_SPEED = 80  // ms per character
const START_DELAY = 400  // ms before typing begins

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++
        setDisplayed(FULL_TEXT.slice(0, i))
        if (i >= FULL_TEXT.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, TYPING_SPEED)
      return () => clearInterval(interval)
    }, START_DELAY)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero__image-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://framerusercontent.com/images/JxWlMY89FisW0dcRdxsQ0smcS40.png"
          alt="Vanessa Zaremba"
          loading="eager"
        />
      </div>

      <div className="hero__text">
        <p className="hero__eyebrow">UX/UI Designer &amp; Frontend Developer</p>

        <h1 className="hero__name">
          <span className="hero__typewriter">
            {displayed}
            <span className={`hero__cursor ${done ? 'hero__cursor--done' : ''}`}>|</span>
          </span>
          <br />

        </h1>

        <p className="hero__desc">
          Designing intuitive digital experiences with a developer’s mindset.
        </p>
        <a href="#work" className="hero__cta">
          View Work
        </a>
      </div>
    </section>
  )
}
