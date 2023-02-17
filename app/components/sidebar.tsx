"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="py-5 px-6 mb-12 flex justify-between bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-400 to-sky-400">
      <Link className="px-8 text-white text-xl" href="/">
        home
      </Link>
      <ul className="flex items-center text-white text-xl">
        <li>
          <Link className="px-8" href="/about">
            about
          </Link>
        </li>
        <li>
          <Link className="px-8" href="/portfolio">
            portfolio
          </Link>
        </li>
        <li>
          <Link className="px-8" href="/blog">
            blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
