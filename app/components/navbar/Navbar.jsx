'use client'; // This is required because usePathname is a client-side hook

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '../../../public/assets/logos/l.png';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "Team" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className='w-full bg-[linear-gradient(to_bottom,theme(colors.primary)_0%,theme(colors.primary)_70%,theme(colors.primarytransparent)_85%,transparent_100%)] text-white p-4'>
      <nav className='max-w-7xl mx-auto flex justify-between items-center py-2'>
        <div className='text-lg font-bold max-w-80'>
          {/* Using Next.js Image component for optimization */}
          <Image src={logo} alt="Logo" className='w-full' width={150} height={50} />
        </div>
        <ul className='flex gap-10'>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={isActive ? 'text-red-600 font-bold' : ''}
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