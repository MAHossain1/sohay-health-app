'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, Search, X } from 'lucide-react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const Navbar = ({ session }: { session: UserProps | null }) => {
  console.log(session);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { text: 'রোগ ও সমস্যা', href: '/disease-and-health' },
    { text: 'যৌন স্বাস্থ্য', href: '/sexual-health' },
    { text: 'গর্ভাবস্থা', href: '#' },
    { text: 'পেটের সমস্যা ও রোগ', href: '#' },
    { text: 'সুস্থ থাকুন', href: '#' },
  ];

  const SearchPopup = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center">
      <div className="bg-white w-full max-w-4xl mt-4 mx-4 rounded-lg shadow-xl overflow-hidden">
        <div className="p-4 flex items-center border-b">
          <input
            type="text"
            placeholder="কোন সমস্যার ব্যাপারে খোঁজ করছেন লিখুন"
            className="flex-1 text-lg font-medium focus:outline-none"
            autoFocus
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="ml-4 p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <nav className="bg-white shadow-xl relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="https://assets.shohay.health/themes/shohay-theme/assets/img/logo.svg"
                  alt="logo"
                  height={40}
                  width={115}
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4 ml-auto">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-500 hover:text-blue-600 px-2 py-1 rounded transition font-medium"
                >
                  {item.text}
                </a>
              ))}

              {session?.user ? (
                <button
                  onClick={() => signOut()}
                  className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition duration-200"
                >
                  Logout
                </button>
              ) : (
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
                  <a href="/login">Login</a>
                </button>
              )}

              <button
                onClick={() => setIsSearchOpen(true)}
                type="button"
                className="p-2 rounded-full text-gray-500 hover:text-blue-600 focus:outline-none transition"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>

            {/* for mobile/responsive view */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsSearchOpen(true)}
                type="button"
                className="p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
              >
                <Search className="h-6 w-6" />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="p-2 ml-2 text-gray-600 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Responsive/Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.text}
                  </a>
                ))}
              </div>
              {session?.user ? (
                <button
                  onClick={() => signOut()}
                  className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition duration-200"
                >
                  Logout
                </button>
              ) : (
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
                  <a href="/login">Login</a>
                </button>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Search Popup */}
      {isSearchOpen && <SearchPopup />}
    </>
  );
};

export default Navbar;
