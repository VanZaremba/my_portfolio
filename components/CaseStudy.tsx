'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Project, Block, Section } from '@/lib/projects'

// ─── Block renderers ──────────────────────────────────────────

function PlaceholderImage({ alt }: { alt: string }) {
  return (
    <div className="cs-placeholder">
      <span className="cs-placeholder__icon">🖼</span>
      <span className="cs-placeholder__label">{alt}</span>
      <span className="cs-placeholder__hint">Add image to /public folder</span>
    </div>
  )
}

function ImageBlock({ block }: { block: Extract<Block, { type: 'image' }> }) {
  return (
    <figure className={`cs-image cs-image--${block.size ?? 'large'}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={block.src}
        alt={block.alt}
        onError={(e) => {
          const target = e.currentTarget
          target.style.display = 'none'
          const placeholder = target.nextElementSibling as HTMLElement
          if (placeholder) placeholder.style.display = 'flex'
        }}
      />
      <PlaceholderImage alt={block.alt} />
      {block.caption && <figcaption className="cs-caption">{block.caption}</figcaption>}
    </figure>
  )
}

function ImageGridBlock({
  block,
}: {
  block: Extract<Block, { type: 'image-grid' }>
}) {
  return (
    <div className={`cs-grid cs-grid--${block.columns ?? 2}`}>
      {block.images.map((img, i) => (
        <figure key={i} className="cs-grid__item">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.src}
            alt={img.alt}
            onError={(e) => {
              const target = e.currentTarget
              target.style.display = 'none'
              const placeholder = target.nextElementSibling as HTMLElement
              if (placeholder) placeholder.style.display = 'flex'
            }}
          />
          <PlaceholderImage alt={img.alt} />
          {img.caption && <figcaption className="cs-caption">{img.caption}</figcaption>}
        </figure>
      ))}
    </div>
  )
}

function TextBlock({ block }: { block: Extract<Block, { type: 'text' }> }) {
  const html = block.content.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  return (
    <p className="cs-text" dangerouslySetInnerHTML={{ __html: html }} />
  )
}

function DecisionsBlock({
  block,
}: {
  block: Extract<Block, { type: 'decisions' }>
}) {
  return (
    <ul className="cs-decisions">
      {block.items.map((item, i) => (
        <li key={i} className="cs-decision">
          <div className="cs-decision__choice">{item.choice}</div>
          <div className="cs-decision__why">
            <span className="cs-decision__why-label">Why</span>
            {item.why}
          </div>
        </li>
      ))}
    </ul>
  )
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case 'image':
      return <ImageBlock key={i} block={block} />
    case 'image-grid':
      return <ImageGridBlock key={i} block={block} />
    case 'text':
      return <TextBlock key={i} block={block} />
    case 'decisions':
      return <DecisionsBlock key={i} block={block} />
      case 'link':
      return (
        <a
          key={i}
          href={block.href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600"
          style={{ textDecoration: 'underline' }}
        >
          {block.content}
        </a>)
    default:
      return null
  }
}

// ─── Section IDs for nav ──────────────────────────────────────

const SECTION_ORDER: Section['id'][] = [
  'overview',
  'problem',
  'process',
  'solution',
  'results',
]

// ─── Main component ───────────────────────────────────────────

export default function CaseStudy({ project }: { project: Project }) {
  const [activeSection, setActiveSection] = useState<string>('overview')

  return (
    <>
      <style>{`
        :root {
          --project-accent: ${project.color};
        }
      `}</style>

      {/* ── Back nav ── */}
      <header className="cs-topbar">
        <Link href="/#work" className="cs-back">
          ← Back to work
        </Link>
      </header>

      {/* ── Hero ── */}
      <section className="cs-hero">
        <div className="cs-hero__meta">
          <div className="cs-hero__tags">
            {project.tags.map((t) => (
              <span key={t} className="cs-tag">{t}</span>
            ))}
          </div>
          <div className="cs-hero__details">
            <span>{project.year}</span>
            <span className="cs-hero__dot">·</span>
            <span>{project.role}</span>
          </div>
        </div>
        <h1 className="cs-hero__title">{project.title}</h1>
        <p className="cs-hero__tagline">{project.tagline}</p>

        <div className="cs-hero__cover">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.cover}
            alt={project.title}
            onError={(e) => {
              const target = e.currentTarget
              target.style.display = 'none'
              const placeholder = target.nextElementSibling as HTMLElement
              if (placeholder) placeholder.style.display = 'flex'
            }}
          />
          <div className="cs-hero__cover-placeholder">
            <span>📁</span>
            <span>Add cover image to {project.cover}</span>
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="cs-body">
        {/* Sticky sidebar nav */}
        <aside className="cs-sidebar">
          <nav className="cs-sidenav">
            {SECTION_ORDER.map((id) => {
              const section = project.sections.find((s) => s.id === id)
              if (!section) return null
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`cs-sidenav__item ${activeSection === id ? 'cs-sidenav__item--active' : ''}`}
                  onClick={() => setActiveSection(id)}
                >
                  <span className="cs-sidenav__dot" />
                  {section.label}
                </a>
              )
            })}
          </nav>
        </aside>

        {/* Sections */}
        <main className="cs-sections">
          {project.sections.map((section) => (
            <section key={section.id} id={section.id} className="cs-section">
              <div className="cs-section__header">
                <span className="cs-section__label">{section.label}</span>
                <h2 className="cs-section__title">{section.title}</h2>
              </div>
              <div className="cs-section__content">
                {section.blocks.map((block, i) => renderBlock(block, i))}
              </div>
            </section>
          ))}

          {/* Next project CTA */}
          <div className="cs-next">
            <p className="cs-next__label">Next project</p>
            <Link href="/#work" className="cs-next__link">
              Back to all work →
            </Link>
          </div>
        </main>
      </div>
    </>
  )
}
