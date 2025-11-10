"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-6 flex justify-between items-center text-sm text-gray-300">
      <nav className="space-x-6 font-mono tracking-wide">
        <Link href="/" className="hover:text-teal-400 transition">Home</Link>
        <Link href="/education" className="hover:text-teal-400 transition">Education</Link>
        <Link href="/experience" className="hover:text-teal-400 transition">Experience</Link>
        <Link href="/contact" className="hover:text-teal-400 transition">Contact</Link>
      </nav>
    </header>
  );
}
