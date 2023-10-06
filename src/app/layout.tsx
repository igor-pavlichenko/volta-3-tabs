import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Volta 3 tabs',
  description: '3 tabs with 2 screens each',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
