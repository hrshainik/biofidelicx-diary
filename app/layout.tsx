import { Navbar } from '../components'
import Footer from '../components/Footer'
import './globals.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <head>
        <title>biofidelicX diary</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="biofidelicX diary is the ideal location to stay informed and up-to-date on the most recent research and discoveries in bio-science, whether you're a student, a scientist, or simply someone with a passion for learning about the natural world."
        />
        <meta
          name="keywords"
          content="biofidelicx diary, biofidelicx academy"
        />
        <meta name="author" content="Habibur Rahman" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
