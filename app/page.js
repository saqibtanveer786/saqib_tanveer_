import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Testimonial from '@/components/Testimonial';

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Skills />
      <Services />
      <Testimonial />
      <Contact />      
    </>
  );
}
