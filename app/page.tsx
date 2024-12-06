import Navbar from '@/components/navbar';
import React from 'react';
import Introduction from '../components/introduction';
import AboutMe from '@/components/about-me';
import Experience from '../components/experience';
import Services from '@/components/services';
import Porfolio from '@/components/portfolio';
import Testimonials from '@/components/testimonials';
import Contact from '@/components/contact';
import Footer from '@/components/footer';


export default function Maintenance() {
  return (
    <main className='pb-40'>
      <Navbar />
      <Introduction />
      <AboutMe />
      <Experience />
      <Services />
      <Porfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}