import { notFound } from 'next/navigation'
import { getProject, getAllSlugs } from '@/lib/projects'
import CaseStudy from '@/components/CaseStudy'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const project = getProject(params.slug)
  if (!project) return {}
  return {
    title: `${project.title} — Vanessa Zaremba`,
    description: project.tagline,
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)
  if (!project) notFound()
  return <CaseStudy project={project} />
}
