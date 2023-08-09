import React from 'react';

import Image from 'next/image';
import PortfolioForPortfolioPage from '@/components/PortfolioForPortfolioPage';

export default function page() {
  return (
    <>
      <PortfolioForPortfolioPage
        imageUrl={`/portfolioImages/mohizBai.png`}
        title={'React.js Portfolio Website'}
        description={'This is a portfolio website developed by using React.js. This website also have the functionality of CRUD opprations for designs. This image is of the about page of that website.'}
        />
      <PortfolioForPortfolioPage
        imageUrl={`/portfolioImages/portfolioItem2.png`}
        title={'Sample for a Website'}
        description={'This is the sample I developed for a client from US. It is the sample of Navbar, Top Section and of Footer.'}
        />
      <PortfolioForPortfolioPage
        imageUrl={`/portfolioImages/portfolioItem3.png`}
        title={'Sample for a Website'}
        description={'This is an other sample I developed for a client from US. It is the sample of Navbar, Top Section and of Footer.'}
      />
      <PortfolioForPortfolioPage
        imageUrl={`/portfolioImages/portfolioItem4.png`}
        title={'Next.js Portfolio website'}
        description={'This is my own portfolio website you are visiting developed by using Next.js and Tailwind along with it.'}
      />
    </>
  );
}
