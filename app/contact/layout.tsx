import { Metadata } from '../global-types'

export const metadata: Metadata = {
  title: 'biofidelicX diary',
  description: "biofidelicX diary's categories",
  keywords: 'biofidelicX diary, biofidelicX academy',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
