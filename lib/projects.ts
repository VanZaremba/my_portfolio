export type ImageBlock = {
  type: 'image'
  src: string          // e.g. '/projects/civil/hero.png'
  alt: string
  caption?: string
  size?: 'full' | 'large' | 'medium'  // default: 'large'
}

export type ImageGridBlock = {
  type: 'image-grid'
  images: { src: string; alt: string; caption?: string }[]
  columns?: 2 | 3      // default: 2
}

export type TextBlock = {
  type: 'text'
  content: string      // supports basic **bold** markdown
}

export type DecisionBlock = {
  type: 'decision'
  choice: string
  why: string
}

export type DecisionGroupBlock = {
  type: 'decisions'
  items: { choice: string; why: string }[]
}

export type LinkBlock = {
  type: 'link'
  content: string
  href: string
}

export type Block =
  | ImageBlock
  | ImageGridBlock
  | TextBlock
  | DecisionBlock
  | DecisionGroupBlock
  | LinkBlock

export type Section = {
  id: 'overview' | 'problem' | 'process' | 'solution' | 'results'
  label: string
  title: string
  blocks: Block[]
}

export type Project = {
  slug: string
  title: string
  tagline: string
  tags: string[]
  year: string
  role: string
  cover: string        // path to cover image in /public
  color: string        // accent color for this project
  sections: Section[]
}

// ─── ADD / EDIT YOUR PROJECTS HERE ──────────────────────────────

export const projects: Project[] = [
  {
    slug: 'civil-marriage',
    title: 'Civil Marriage Platform Design',
    tagline: 'Designed a digital platform concept to simplify civil marriage validation through a secure and intuitive remote experience.',
    tags: ['UX/UI Design', 'Figma', 'Blockchaim', 'Platform'],
    year: '2021',
    role: 'UX/UI Designer',
    cover: '/images/civil-marriage-bg.png',
    color: '#c8502a',
    sections: [
      {
        id: 'overview',
        label: 'Overview',
        title: 'What is this project?',
        blocks: [
          {
            type: 'text',
            content:
              'A conceptual UX/UI platform designed to modernize and simplify the civil marriage validation process through a secure and intuitive digital experience.',
          },
          {
            type: 'image',
            src: '/images/civil-marriage-flow.png',
            alt: 'Civil Marriage Platform overview',
            caption: 'Civil Marriage Validation Platform',
            size: 'full',
          },
        ],
      },
      {
        id: 'problem',
        label: 'Problem',
        title: 'What problem were we solving?',
        blocks: [
          {
            type: 'text',
            content:
              'During the pandemic, civil marriages moved to remote formats, creating the need to ensure the same legal validity as in-person processes. Users needed to validate legal documents remotely. Blockchain was explored as a secure solution, introducing the challenge of translating a complex technology into a clear and user-friendly experience.',
          },
        ],
      },
      {
        id: 'process',
        label: 'Process',
        title: 'How did I approach the design?',
        blocks: [
          {
            type: 'text',
            content:
              'Designed a step-by-step flow to guide users through the process, reducing confusion and improving understanding at each stage. Focused on clarity, hierarchy, and guiding users through decisions with confidence.',
          },
          {
            type: 'decisions',
            items: [
              {
                choice: 'Chose a step-by-step wizard instead of a single long form',
                why: 'Testing showed users felt overwhelmed by long forms. Breaking it into steps with a visible progress bar reduced drop-off significantly.',
              },
              {
                choice: 'Added a "document checklist" before the user starts',
                why: 'This was the single biggest usability improvement: showing required documents upfront eliminated the #1 error users made.',
              },
              {
                choice: 'Used plain language throughout, no legal jargon',
                why: 'Government copy was rewritten with a content designer.',
              },
            ],
          },
        ],
      },
      {
        id: 'solution',
        label: 'Solution',
        title: 'The final design',
        blocks: [
          {
            type: 'text',
            content:
              'The platform guides users through 3 clear steps: eligibility check, document preparation, scheduling. Each step has contextual help, plain language, and a persistent progress indicator.',
          },
        ],
      },
    ],
  },

  {
    slug: 'travel-planner',
    title: 'Travel Planner Onboarding',
    tagline: 'Redesigning the first-run experience to activate users faster.',
    tags: ['UX/UI Design', 'Onboarding', 'Redesign', 'Mobile'],
    year: '2026',
    role: 'UX/UI Designer',
    cover: '/images/travel-planner-bg.png',
    color: '#3a6b8a',
    sections: [
      {
        id: 'overview',
        label: 'Overview',
        title: 'What is this project?',
        blocks: [
          {
            type: 'text',
            content:
              'A redesign of a travel planner app onboarding focused on reducing drop-off and helping users reach their first meaningful action faster.',
          },
        ],
      },
      {
        id: 'problem',
        label: 'Problem',
        title: 'Why were users dropping off?',
        blocks: [
          {
            type: 'text',
            content:
              'The onboarding prioritized feature explanations over user activation. Users were guided through passive walkthroughs before experiencing any meaningful value, creating high cognitive load and low engagement early in the journey.',
          },
          {
            type: 'decisions',
            items: [
              {
                choice: 'Passive onboarding experience',
                why: 'Without an immediate action or sense of progress, many users abandoned the flow before experiencing the app’s real value.',
              },
            ],
          },
          {
            type: 'image',
            src: '/images/original-flow.jpg',
            alt: 'Drop-off funnel analysis',
            caption: 'Original Onbording',
          },
        ],
      },
      {
        id: 'process',
        label: 'Process',
        title: 'How I redesigned the flow',
        blocks: [
          {
            type: 'text',
            content:
              'I redesigned the onboarding around user activation. the new flow focused on helping them take meaningful action early, allowing users to understand the product by interacting with it, not by reading about it.',
          },
          {
            type: 'link',
            content: 'Click here to view the interactive prototype',
            href: 'https://www.figma.com/proto/M4zz8nZaSzn6EtFksH0CqN/Partiu---travel-planner?node-id=26-805&p=f&t=Ad6b8aKZlVA0lz93-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=26%3A444',
          },
          {
            type: 'image-grid',
            columns: 2,
            images: [
              // { src: '/images/original-flow.png', alt: 'Original flow', caption: 'Original onboarding — 7 steps' },
              { src: '/images/redesigned-flow.jpg', alt: 'Redesigned flow', caption: 'Redesigned onboarding' },
            ],
          },
          {
            type: 'decisions',
            items: [
              {
                choice: 'Introduced trip and activity creation earlier in the journey',
                why: 'Helping users start planning a trip earlier created faster engagement and allowed them to experience the product’s core value sooner.',
              },
            ],
          },
        ],
      },
      {
        id: 'results',
        label: 'Results',
        title: 'The impact',
        blocks: [
          {
            type: 'text',
            content:
              'The redesigned onboarding was validated in testing and handed off to the development team with a complete Figma spec and interaction notes.',
          },
          {
            type: 'decisions',
            items: [
              {
                choice: '↑ Stronger understanding of product value',
                why: 'Users understood what the app was for much earlier in the journey, improving engagement from the first screens.',
              },
              {
                choice: '↓ Reduced onboarding complexity',
                why: 'The new flow removed unnecessary explanations and focused only on actions relevant to the user’s immediate goal.',
              },
            ],
          },
        ],
      },
    ],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug)
}
