"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = {
  "/": { name: "home" },
  "/about": { name: "about" },
  "/portfolio": { name: "portfolio" },
  "/blog": { name: "blog" },
};

export default function Navbar() {
  return (
    <nav className="py-5 px-6 mb-12 flex justify-between bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-400 to-sky-400">
      <Link
        href="/"
        className="text-white text-xl hover:opacity-70 border-b-2: isActive border-b-white:isActive "
      >
        home
      </Link>
      <ul className="flex items-center text-white text-xl">
        <li>
          <Link href="/about" className="px-8 hover:opacity-70">
            about
          </Link>
        </li>
        <li>
          <Link href="/portfolio" className="px-8 hover:opacity-70">
            portfolio
          </Link>
        </li>
        <li>
          <Link href="/blog" className="px-8 hover:opacity-70">
            blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
