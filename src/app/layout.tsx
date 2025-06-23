import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Cursor from '@/components/Cursor';
import GlowingBall from '@/components/GlowingBall';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Максим Ткач - Full Stack Developer',
  description: 'Портфолио Full Stack разработчика',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlowingBall />
        <Cursor />
        {children}
      </body>
    </html>
  );
} 