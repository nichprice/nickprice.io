"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = {
  "/about": { name: "about" },
  "/portfolio": { name: "portfolio" },
};

export default function Sidebar() {
  let pathname = usePathname();

  return (
    <nav className="py-5 mb-12 px-40 flex justify-between bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-400 to-sky-400">
      <a href="/" className="font-semiboldit text-white text-xl">
        np.io
      </a>
      <div className="flex items-center">
        {Object.entries(navItems).map(([path, { name }]) => {
          const isActive = path === pathname;
          return (
            <div
              className={clsx({
                "rounded-xl": isActive,
                "bg-opacity-30": isActive,
                "bg-neutral-100": isActive,
              })}
            >
              <Link
                href={path}
                className={clsx("text-white px-3 text-lg", {
                  "hover:opacity-70": !isActive,
                })}
              >
                {name}
              </Link>
            </div>
          );
        })}
        <div>
          <Link
            href="https://medium.com/@price.nich"
            className="text-white px-3 text-lg hover:opacity-70"
          >
            blog
          </Link>
          <Link
            href="public/files/Nicholas Price Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white px-3 text-lg hover:opacity-70"
          >
            resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
