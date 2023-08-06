import React from 'react';

import Image from 'next/image';
import PortfolioForPortfolioPage from '@/components/PortfolioForPortfolioPage';

export default function page() {
  return (
    <>
      <PortfolioForPortfolioPage
        imageUrl={`/portfolioImages/mohizBai.png`}
        title={'React.js Portfolio Website'}
        description={'This is description'}
        />
      <PortfolioForPortfolioPage
        imageUrl={`/portfolioImages/calculator.png`}
        title={'Calculator'}
        description={'This is description'}
        />
      <PortfolioForPortfolioPage
        imageUrl={`/portfolioImages/front.png`}
        title={'Next.js Portfolio website'}
        description={'This is description'}
      />
    </>
  );
}
