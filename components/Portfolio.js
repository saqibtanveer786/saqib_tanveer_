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
    <SubPortfolioBox imageUrl={'/portfolioImages/mohizBai.png'}/>
    <SubPortfolioBox imageUrl={'/portfolioImages/front.png'}/>
    <SubPortfolioBox imageUrl={'/portfolioImages/calculator.png'}/>
    </div>
  </div>
</section>
  );
}
