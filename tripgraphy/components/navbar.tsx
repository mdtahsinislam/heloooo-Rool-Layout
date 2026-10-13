

//C:\Web-Development\MyNextjs Journey\Copy Tipo graphy\tripgraphy\components\navbar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="backdrop-blur bg-white/30 border-b border-white/20 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Left - Logo */}
   <div className="flex mb-3">
         <Image
  src="/images/tr.png"
  alt="TripGraphy Logo"
  width={100}
  height={100}
  className="rounded-lg"
/>
        

        <h1 className="text-3xl font-bold text-cyan-600 tracking-wide -ml-5 mt-10">
          TripGraphy
        </h1>

   </div>
        {/* Center - Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-lg font-medium">
           <Link href="/" className="hover:text-cyan-600 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-cyan-600 transition">
            About
          </Link>
          <Link href="/blogs" className="hover:text-cyan-600 transition">
            Blogs
          </Link>
          <Link href="/blogs/id" className="hover:text-cyan-600 transition">
            Blog ID
          </Link>
        </div>

        {/* Right - Login */}
        <div className="hidden md:block">
          <Link
            href="/login"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-cyan-700 transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden btn btn-ghost"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Items */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 text-lg font-medium">
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/blogs" className="hover:text-blue-600 transition">
            Blogs
          </Link>
          <Link href="/blogs/id" className="hover:text-blue-600 transition">
            Blog ID
          </Link>
          <Link
            href="/login"
            className="mt-2 px-5 py-2 bg-blue-600 text-white text-center rounded-lg shadow hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
