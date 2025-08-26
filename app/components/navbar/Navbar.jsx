"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { leadsandbrandlogo } from '@/app/data';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi'; 
import Socillinks from '../sociallinks/Socillinks';

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#team", label: "Team" },
    { href: "/#about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/#contact", label: "Contact" },
  ];

  // Scrollspy effect
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="w-full bg-[linear-gradient(to_bottom,theme(colors.primary)_0%,theme(colors.primary)_70%,theme(colors.primarytransparent)_85%,transparent_100%)] text-white p-4 z-50">
      <nav className="relative max-w-7xl mx-auto flex justify-between items-center py-2 z-50">
        {/* Logo */}
        <div className="text-lg font-bold max-w-50 md:max-w-80 ">
          <Image src={leadsandbrandlogo} alt="Logo" className="w-full" width={150} height={50} />
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-10">
          {navLinks.map((link) => {
            const isActive =
              link.href.startsWith("#")
                ? activeSection === link.href.replace("#", "")
                : pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  scroll={true}
                  className={isActive ? "text-red-600 font-bold" : ""}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Hamburger menu (mobile only) */}
        <div className="md:hidden">
          <button onClick={toggleSidebar}>
            {isSidebarOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-primary text-white px-10 pt-30 transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-40 md:hidden flex flex-col justify-between`}
      >


        <ul className="flex flex-col gap-6 ">
          {navLinks.map((link) => {
            const isActive =
              link.href.startsWith("#")
                ? activeSection === link.href.replace("#", "")
                : pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  scroll={true}
                  onClick={closeSidebar}
                  className={isActive ? "text-red-600 font-bold" : ""}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Socillinks />

      </div>
    </div>
  );
}
