"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
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
    <nav>
      {Object.entries(navItems).map(([path, { name }]) => {
        const isActive = path;
        return (
          <Link key={path} href={path}>
            {name}
          </Link>
        );
      })}
    </nav>
  );
}
