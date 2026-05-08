import type { Metadata } from 'next'
import './globals.css'
import './casestudy.css'

export const metadata: Metadata = {
  title: 'Vanessa Zaremba — UX/UI Designer',
  description:
    'UX/UI Designer with a Frontend Background. 5+ years designing interfaces across finance and product. Currently freelancing.',
  openGraph: {
    title: 'Vanessa Zaremba — UX/UI Designer',
    description:
      'Turning complex ideas into clear, intuitive digital experiences.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Mono:ital,wght@0,300;0,400;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
