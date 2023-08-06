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
    <div className="lg:w-1/3 sm:w-1/2 p-4">
    <div className="flex relative">
      <Image alt='Portfolio Image' src={'/portfolioImages/mohizBai.png'} height={300} width={300} className="absolute inset-0 w-full h-full object-contain object-center" />
      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
      </div>
    </div>
    </div>
    <div className="lg:w-1/3 sm:w-1/2 p-4">
    <div className="flex relative">
      <Image alt='Portfolio Image' src={'/portfolioImages/front.png'} height={300} width={300} className="absolute inset-0 w-full h-full object-contain object-center" />
      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
      </div>
    </div>
    </div>
    <div className="lg:w-1/3 sm:w-1/2 p-4">
    <div className="flex relative">
      <Image alt='Portfolio Image' src={'/portfolioImages/calculator.png'} height={300} width={300} className="absolute inset-0 w-full h-full object-contain object-center" />
      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
      </div>
    </div>
    </div>
    </div>
  </div>
</section>
  );
}
