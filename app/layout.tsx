import Provider from '@/app/provider'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import AuthWrapper from '@/components/wrapper/auth-wrapper'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL("https://starter.rasmic.xyz"),
  title: {
    default: 'Nextjs Starter Kit',
    template: `%s | Nextjs Starter Kit`
  },
  description: 'The Ultimate Nextjs 14 Starter Kit for quickly building your SaaS, giving you time to focus on what really matters',
  openGraph: {
    description: 'The Ultimate Nextjs 14 Starter Kit for quickly building your SaaS, giving you time to focus on what really matters',
    images: ['https://utfs.io/f/8a428f85-ae83-4ca7-9237-6f8b65411293-eun6ii.png'],
    url: 'https://starter.rasmic.xyz/'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nextjs Starter Kit',
    description: 'The Ultimate Nextjs 14 Starter Kit for quickly building your SaaS, giving you time to focus on what really matters',
    siteId: "",
    creator: "@rasmic",
    creatorId: "",
    images: ['https://utfs.io/f/8a428f85-ae83-4ca7-9237-6f8b65411293-eun6ii.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthWrapper>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link
            rel="preload"
            href="https://utfs.io/f/31dba2ff-6c3b-4927-99cd-b928eaa54d5f-5w20ij.png"
            as="image"
          />
          <link
            rel="preload"
            href="https://utfs.io/f/69a12ab1-4d57-4913-90f9-38c6aca6c373-1txg2.png"
            as="image"
          />
        </head>
        <body className={GeistSans.className}>
          <Provider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </Provider>
          <Script
            defer
            src="https://umami-nine-livid.vercel.app/script.js"
            data-website-id="8cabe5cc-2ed1-4ee4-bc5c-6928512c7433"
            strategy="afterInteractive"
          />
        </body>
      </html>
    </AuthWrapper>
  )
}