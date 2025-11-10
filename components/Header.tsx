"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 flex justify-between items-center text-sm">
      <nav className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/education">Education</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
