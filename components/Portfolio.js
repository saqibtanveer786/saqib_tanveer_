import React from 'react';

import Image from 'next/image';

// Importing subcomponent
import SubPortfolioBox from '@/subcomponents/SubPortfolioBox';


export default function Portfolio() {
  return (
    <section className="text-gray-600 body-font w-[90%] m-auto">
      <div className="container px-5 pt-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">My Work</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Here are the projects I have worked on.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          <SubPortfolioBox imageUrl={'/portfolioImages/mohizBai.png'} title={'React.js Portfolio Website'} subTitle={'build in React.js'} description={'This is a portfolio website developed by using React.js. This website also have the functionality of CRUD opprations for designs. This image is of the about page of that website.'} />
          <SubPortfolioBox imageUrl={'/portfolioImages/portfolioItem2.png'} title={'Sample for a Website'} subTitle={'build in Next.js'} description={'This is the sample I developed for a client from US. It is the sample of Navbar, Top Section and of Footer.'} />
          <SubPortfolioBox imageUrl={'/portfolioImages/portfolioItem3.png'} title={'Sample for a Website'} subTitle={'build in Next.js'} description={'TThis is an other sample I developed for a client from US. It is the sample of Navbar, Top Section and of Footer.'} />
          <SubPortfolioBox imageUrl={'/portfolioImages/portfolioItem4.png'} title={'Next.js Portfolio website'} subTitle={'build in Next.js'} description={'This is my own portfolio website you are visiting developed by using Next.js and Tailwind along with it.'} />
        </div>
      </div>
    </section>
  );
}
