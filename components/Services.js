import React from 'react';

import { BiLogoNodejs } from 'react-icons/bi';

export default function Services() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-24 mx-auto w-[90%]">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Services I Offer
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                  <BiLogoNodejs />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Static Website
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  I offer the static webstie like personal portfolio, landing
                  pages and other. I develop static websites either by using
                  HTML CSS JavaScript or by React.js and Next.js.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                  <BiLogoNodejs />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Dynamic web apps
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  I also provide my client dynamic web web apps like a blog or a
                  e-commerce store build in node.js either by HTML CSS
                  JavaScript and Node.js or by MERN(MongoDB Express.js React.js
                  Node.js) MENN(MongoDB Express.js Next.js Node.js) Stack.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                  <BiLogoNodejs />
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Customize existing Projects
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  I can also Customize and apply changes on your existing
                  projects. If you have to change something in your webstie or
                  web application then feel free to order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
