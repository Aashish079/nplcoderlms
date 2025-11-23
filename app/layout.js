import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL('https://lms.nplcoder.org'),
  title: {
    default: 'NPLCoder LMS | Learning Management System',
    template: 'NPLCoder LMS'
  },
  description: 'NPLCoder Learning Management System - Empowering Nepali students through quality tech education and resources.',
  keywords: [
    'NPLCoder', 'LMS', 'Learning Management System', 'Nepal Programming', 
    'Tech Education Nepal', 'Coding Nepal', 'Online Learning Nepal'
  ],
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lms.nplcoder.org',
    siteName: 'NPLCoder LMS',
    title: 'NPLCoder LMS | Learning Management System',
    description: 'Empowering Nepali students through quality tech education and resources.',
    images: [
      {
        url: '/images/NPLCoder.png', 
        width: 1200,
        height: 630,
        alt: 'NPLCoder LMS',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'NPLCoder LMS | Learning Management System',
    description: 'Empowering Nepali students through quality tech education.',
    images: ['/images/NPLCoder.png'],
    creator: '@nplcoder', 
    site: '@nplcoder',
  },
  
  icons: {
    icon: [
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/favicon.ico' },
    ],
  },
  
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className="font-verdana antialiased">
          <ThemeProvider>
            <Nav />
            <div className="pt-20">
              {children}
            </div>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
