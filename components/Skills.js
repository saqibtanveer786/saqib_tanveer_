import React from 'react';

// Importing icons from react-icons
import { AiOutlineHtml5 } from 'react-icons/ai';
import { RiCss3Fill } from 'react-icons/ri';
import { DiJavascript1 } from 'react-icons/di';
import { IoLogoNodejs } from 'react-icons/io';
import { TbBrandReactNative } from 'react-icons/tb';
import { TbBrandNextjs } from 'react-icons/tb';

export default function Skills() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-24 mx-auto w-[98%] flex items-center justify-center ">
        <div className="flex flex-wrap w-full items-center justify-center ">
          <h1 className="title-font sm:text-4xl text-3xl mb-12 font-medium text-gray-900">
            My Skills
          </h1>
          <div className="container flex flex-wrap justify-center">
            <div className="flex relative pb-12 flex-col justify-center items-center text-center gap-3 w-[400px] mx-8 ">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                <AiOutlineHtml5 />
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  HTML 5
                </h2>
                <p className="leading-relaxed">
                  HTML 5 one from my skills. I have been working with HTML 5 for
                  a long time and i a nice grip on it.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12 flex-col justify-center items-center text-center gap-3 w-[400px] mx-8">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                <RiCss3Fill />
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  CSS 3
                </h2>
                <p className="leading-relaxed">
                  Beside of HTML5 another skill I have is CSS3. I have almost 1+
                  year of experience in using it and have a nice grip.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12 flex-col justify-center items-center text-center gap-3 w-[400px] mx-8">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                <DiJavascript1 />
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  JavaScript
                </h2>
                <p className="leading-relaxed">
                  In Web development JavaScript is my favourite. I have been
                  using this for more than 2 years and have written the logic
                  for many interesting thing like Todo List App, Calculator and
                  Tic-Tac-Toe in it.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12 flex-col justify-center items-center text-center gap-3 w-[400px] mx-8">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                <IoLogoNodejs />
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  Node.js
                </h2>
                <p className="leading-relaxed">
                  I am developing web applications by using Node.js since 1
                  year. I have developed many application like a blog, a website
                  for showcasng design with admin dashboard in Node.js.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12 flex-col justify-center items-center text-center gap-3 w-[400px] mx-8">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                <TbBrandReactNative />
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  React.js
                </h2>
                <p className="leading-relaxed">
                  One of my best skill is React.js. I love react beacause of its
                  component structure and navigation without getting reload. I
                  have a good of experience of developing thing using React.js.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12 flex-col justify-center items-center text-center gap-3 w-[400px] mx-8">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                <TbBrandNextjs />
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  Next.js
                </h2>
                <p className="leading-relaxed">
                  I also use to work in Next.js which have the features like
                  file based routing, SSR, SSG, and its special components like
                  Image, Link etc make it easy for a developer but also increase
                  the quality and performes of website build in it. Its SEO
                  friendly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
