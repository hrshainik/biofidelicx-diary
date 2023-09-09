import { Metadata } from '../../global-types'

export const metadata: Metadata = {
  title: 'biofidelicX diary',
  description: "biofidelicx diary's categories",
  keywords: 'biofidelicX diary, biofidelicX academy',
  author: 'Vercel',
  'og:url': 'https://nextjs.org/',
  'og:title': 'Categories - biofidelicX diary',
  'og:description': "biofidelicx diary's categories",
  'og:image': 'https://nextjs.org/static/twitter-cards/home.jpg',
  twitter: {
    handle: '@vercel',
    site: '@vercel',
    cardType: 'summary_large_image',
  },
}

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
