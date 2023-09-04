export const metadata: MetaData = {
  title: 'biofidelicX diary',
  description: "biofidelicX diary's authors",
  keywords: 'biofidelicX diary, biofidelicX academy',
  author: 'Vercel',
  'og:url': 'https://nextjs.org/',
  'og:title': 'Categories - biofidelicX diary',
  'og:description': "biofidelicX diary's authors",
  'og:image': 'https://nextjs.org/static/twitter-cards/home.jpg',
  twitter: {
    handle: '@vercel',
    site: '@vercel',
    cardType: 'summary_large_image',
  },
}

export default function AuthorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
