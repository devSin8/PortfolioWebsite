"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-6 px-6 flex justify-center items-center">
      <nav className="flex space-x-6 text-sm font-mono tracking-wide">
        <Link 
          href="/" 
          className="text-text hover:text-accent transition-colors duration-200 relative group"
        >
          Home
          <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-200 group-hover:w-full"></span>
        </Link>
        <Link 
          href="/education" 
          className="text-text hover:text-accent transition-colors duration-200 relative group"
        >
          Education
          <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-200 group-hover:w-full"></span>
        </Link>
        <Link 
          href="/experience" 
          className="text-text hover:text-accent transition-colors duration-200 relative group"
        >
          Experience
          <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-200 group-hover:w-full"></span>
        </Link>
        <Link 
          href="/contact" 
          className="text-text hover:text-accent transition-colors duration-200 relative group"
        >
          Contact
          <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-200 group-hover:w-full"></span>
        </Link>
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
