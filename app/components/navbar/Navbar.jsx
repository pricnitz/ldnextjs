'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '../../../public/assets/logos/l.png';

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#team", label: "Team" },
    { href: "/#about", label: "About" },
    { href: "/portfolio", label: "Portfolio" }, // separate page
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
      { threshold: 0.6 } // trigger when 60% of section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="w-full bg-[linear-gradient(to_bottom,theme(colors.primary)_0%,theme(colors.primary)_70%,theme(colors.primarytransparent)_85%,transparent_100%)] text-white p-4 fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-2">
        <div className="text-lg font-bold max-w-80">
          <Image src={logo} alt="Logo" className="w-full" width={150} height={50} />
        </div>
        <ul className="flex gap-10">
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
      </nav>
    </div>
  );
}
