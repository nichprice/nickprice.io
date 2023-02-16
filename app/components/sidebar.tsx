"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = {
  about: {
    name: "about",
  },
  blog: {
    name: "blog",
  },
  portfolio: {
    name: "porfolio",
  },
};

export default function Navbar() {
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <Link className="px-8" key="/" href="/">
        home
      </Link>
      <ul className="flex items-center">
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = path;
          return (
            <li>
              <Link className="px-8" key={path} href={path}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
