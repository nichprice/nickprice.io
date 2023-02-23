"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = {
  "/about": { name: "about" },
  "/portfolio": { name: "portfolio" },
  "/blog": { name: "blog" },
};

export default function Navbar() {
  let pathname = usePathname();

  return (
    <nav className="py-5 mb-12  bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-400 to-sky-400">
      <div className="flex justify-end px-10">
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = path === pathname;
          return (
            <div
              className={clsx({
                "rounded-xl": isActive,
                "opacity-30": isActive,
                "bg-neutral-100": isActive,
              })}
            >
              <Link
                href={path}
                className={clsx("text-white px-4 hover:opacity-70", {
                  "opacity-100": isActive,
                })}
              >
                {name}
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
