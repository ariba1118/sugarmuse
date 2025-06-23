"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  // Helper to get user's first initial
  function getInitial(name) {
    if (!name) return "?";
    return name.trim().charAt(0).toUpperCase();
  }

  const user = session?.user;

  return (
    <nav
      className="fixed top-0 left-0 rounded-b-md w-full z-50 shadow-xl border-b border-[#a1887f]/30 bg-[#231710]/70
      backdrop-blur-xl
    "
    >
      <div className="max-w-full px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center ">
          <span className="relative left-5 brand-logo font-hello-paris text-5xl lg:text-7xl font-bold text-[#ffe0b2] drop-shadow-sm transition-transform duration-300 hover:scale-105 hover:text-[#f8bbd0]">
            SugarMuse
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="font-petit text-4xl relative -left-12 hidden md:flex items-center gap-10">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "Our Story" },
            { href: "/products", label: "Patisserie" },
            { href: "/gallery", label: "Gallery" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative font-medium px-2 py-1 rounded transition 
                text-[#fce4ec] hover:text-[#ffe0b2] text-2xl tracking-wider
                after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#f8bbd0] after:to-[#ffe0b2] 
                after:transition-all after:duration-300 hover:after:w-full after:rounded-full
              `}
              style={{ textShadow: "0 1px 8px #6d4c41cc" }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Cart + Mobile Menu */}
        <div className="flex items-center gap-3">
          <button
            className="
    px-6 py-2
    rounded-md
    text-2xl font-petit font-semibold
    bg-[#231710]/80
    text-[#ffe0b2]
    shadow-md border border-[#a1887f]/40
    backdrop-blur-sm
    transition-all duration-200
    hover:bg-[#3e2723]/90 hover:text-[#f8bbd0]
    active:scale-95
    cursor-pointer
    select-none
  "
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
