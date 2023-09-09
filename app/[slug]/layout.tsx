import { Metadata } from '../global-types'

export const metadata: Metadata = {
  title: 'Next.js',
  description: 'Next.js is the React framework for production',
  keywords: 'next,javascript,nextjs,react,framework',
  author: 'Vercel',
  'og:url': 'https://nextjs.org/',
  'og:title': 'Next.js',
  'og:description': 'Next.js is the React framework for production',
  'og:image': 'https://nextjs.org/static/twitter-cards/home.jpg',
  twitter: {
    handle: '@vercel',
    site: '@vercel',
    cardType: 'summary_large_image',
  },
}

export default function PostDetailsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
