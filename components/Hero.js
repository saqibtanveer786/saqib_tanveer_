import React from 'react';
import Link from 'next/link';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="text-gray-600 body-font w-[90%] m-auto">
      <div className="container mx-auto flex px-3 py-12 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I am Saqib Tanveer |
            <br className="hidden lg:inline-block " />
            Full Stack Web Developer
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a Full stack web developer and offer my skills as a service. If
            you wish then I can also develop website or web application either
            for your self or for your business.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Hire Me
            </button>
            <Link
              href={'#contact'}
              className="ml-4 text-blue-500 inline-flex font-bold bg-gray-100 border-2 border-blue-500 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg "
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center">
          <Image
            className="object-contain object-center rounded"
            alt="hero"
            src="/saqib_tanveer_.jpeg"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
