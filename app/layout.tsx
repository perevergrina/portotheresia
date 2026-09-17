import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Theresia Verani Peregrina — Social Media & Communication',
  description:
    'Portfolio of Theresia Verani Peregrina, a social media specialist and communication graduate based in Yogyakarta.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

