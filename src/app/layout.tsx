import React from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Header } from '@/features';
import '../style/globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Car filter page',
  description: 'Filter cars by type and model year',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header className="mb-4" />

        <main>{children}</main>
      </body>
    </html>
  );
}
