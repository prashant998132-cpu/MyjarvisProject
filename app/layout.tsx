import './globals.css';
import React from 'react';

export const metadata = {
  title: 'JARVIS v4.0',
  description: 'AI Tools Platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
