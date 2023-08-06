import Link from 'next/link';
import React from 'react';

import Image from 'next/image';

// Importing SVG
import saqib_tanveer_svg from '../public/saqib_tanveer.svg';

export default function Header() {
  return (
    <main className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center w-[90%] ">
        <Link
          href={'/'}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image
            src="/saqib_tanveer_.jpeg"
            width={30}
            height={20}
            alt="Picture of the author"
            style={{ borderRadius: 50 }}
            // objectFit="contain"
          />
          <span className="ml-3 text-xl">saqib_tanveer_</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link
            href={'/'}
            className="mr-5 hover:text-blue-500 transition-all hover:border-blue-500 hover:border-b-4"
          >
            Home
          </Link>
          <Link
            href={'/portfolio'}
            className="mr-5 hover:text-blue-500 transition-all hover:border-blue-500 hover:border-b-4"
          >
            Portfolio
          </Link>
          {/* <Link className="mr-5 hover:text-gray-900">About</Link> */}
          <Link
            href={'/contact'}
            className="mr-5 hover:text-blue-500 transition-all hover:border-blue-500 hover:border-b-4"
          >
            Contact
          </Link>
        </nav>
        {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button> */}
      </div>
    </main>
  );
}
