import { Navbar } from '../components'
import Footer from '../components/Footer'
import { Metadata } from './global-types'
import './globals.scss'

export const metadata: Metadata = {
  title: 'biofidelicX diary',
  description:
    "biofidelicX diary is the ideal location to stay informed and up-to-date on the most recent research and discoveries in bio-science, whether you're a student, a scientist, or simply someone with a passion for learning about the natural world.",
  keywords: 'biofidelicx diary, biofidelicx academy',
  author: 'Vercel',
  'og:url': 'https://nextjs.org/',
  'og:title': 'Next.js',
  'og:description':
    "biofidelicX diary is the ideal location to stay informed and up-to-date on the most recent research and discoveries in bio-science, whether you're a student, a scientist, or simply someone with a passion for learning about the natural world.",
  'og:image': 'https://nextjs.org/static/twitter-cards/home.jpg',
  twitter: {
    handle: '@vercel',
    site: '@vercel',
    cardType: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
