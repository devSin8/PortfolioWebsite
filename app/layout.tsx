// app/layout.tsx

import React from "react";
import "./globals.css";
import Header from "../components/Header"; // adjust path if different

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-text font-mono leading-relaxed min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12 px-6 max-w-4xl mx-auto w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
