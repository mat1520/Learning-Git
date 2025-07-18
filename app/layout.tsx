import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Learning Git - Aprende Git de forma interactiva',
  description: 'Aplicación web educativa para aprender Git de forma interactiva con guías, videos y ejercicios prácticos.',
  keywords: ['git', 'aprendizaje', 'programación', 'control de versiones', 'educación'],
  authors: [{ name: 'Ariel Melo' }],
  creator: 'Ariel Melo',
  openGraph: {
    title: 'Learning Git - Aprende Git de forma interactiva',
    description: 'Aplicación web educativa para aprender Git de forma interactiva con guías, videos y ejercicios prácticos.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
