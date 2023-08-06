import React from 'react';

import Image from 'next/image';

export default function PortfolioForPortfolioPage({
  imageUrl,
  title,
  description,
}) {
  return (
    <section className="text-gray-600 body-font overflow-hidden py-4">
      <div className="container px-5 py-4 pb-6 pt-0 md:pt-4 w-[75%] mx-auto border-1 rounded-xl shadow-md  shadow-gray-500">
        <div className="mx-auto flex flex-wrap">
          <Image
            alt="portfolio website"
            width={712}
            height={430}
            className=" lg:w-[50%] sm:h-64 py-4 object-contain object-center rounded bg-transparent"
            src={imageUrl}
            objectFit="cover"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 lg:mt-0 lg:text-left text-center">
            <h1 className="text-gray-900 md:text-3xl title-font font-medium mb-1">
              {title}
            </h1>
            <p className="leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
