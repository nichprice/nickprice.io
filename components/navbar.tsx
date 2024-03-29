"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
// import resume from "../../public/files/resume.pdf";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { title: "About", url: "/about" },
    { title: "Portfolio", url: "/portfolio" },
    { title: "Blog", url: "/blog" },

    // {
    //   title: "Resume",
    //   url: { resume },
    //   download: true,
    // },
  ];

  return (
    <nav className="bg-sky-500 text-white dark:bg-orange-400 flex items-center justify-between py-3 px-16">
      <div className="flex items-center">
        <Link className="text-2xl font-bold" href="/">
          np.io
        </Link>
      </div>
      <div className="flex items-center">
        <div className="md:hidden">
          <button
            type="button"
            className="text-white hover:opacity-70 focus:outline-none focus:text-white"
            onClick={toggleSidebar}
          >
            <FaBars size={24} />
          </button>
        </div>
        <div className="hidden md:flex space-x-16">
          {links.map((link) => (
            <Link
              className="text-xl font-medium hover:opacity-70"
              href={link.url}
              key={link.title}
              target={link.url.startsWith("http") ? "_blank" : ""}
              rel="noopener noreferrer"
              // download={link.download}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 bottom-0 z-10 bg-orange-400 text-white w-64 px-6 pt-20 transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <button
            type="button"
            className="text-white hover:opacity-70 focus:outline-none focus:text-white md:hidden"
            onClick={toggleSidebar}
          >
            <FaBars size={24} />
          </button>
        </div>
        <div className="flex flex-col space-y-4">
          {links.map((link) => (
            <Link
              className="text-xl font-medium hover:opacity-70"
              href={link.url}
              key={link.title}
              target={link.url.startsWith("http") ? "_blank" : ""}
              rel="noopener noreferrer"
              onClick={toggleSidebar}
              // download={link.download}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
