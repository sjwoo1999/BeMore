// src/app/layout.tsx

import './global.css';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="w-full px-6 py-4 shadow bg-white">
          <h1 className="text-2xl font-bold text-cyan-600">🧠 BeMore</h1>
        </header>
        <main className="max-w-3xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
