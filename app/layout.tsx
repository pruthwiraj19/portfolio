import type { Metadata } from 'next'
import { Bebas_Neue, Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
})

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Pruthwiraj Deshmukh | Marketing Portfolio',
  description: 'MMS Marketing student at WeSchool with experience in customer research, retail sales and business analytics.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "try{if(localStorage.getItem('portfolio-theme')==='light'){document.documentElement.classList.replace('dark','light')}}catch{}" }} />
      </head>
      <body className={`${spaceGrotesk.variable} ${bebasNeue.variable}`}>{children}</body>
    </html>
  )
}
