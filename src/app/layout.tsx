import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Volta 3 tabs',
  description: '3 tabs with 2 screens each',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <div>
        <Image width={130} height={50} src="/volta-white-anim.gif" alt={''} />
      </div>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
