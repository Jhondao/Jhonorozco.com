import Navbar from '@/components/navbar';
import React from 'react';
import Introduction from '../components/introduction';
import AboutMe from '@/components/about-me';
import Proyectos from '@/components/proyectos';
import Experience from '../components/experience';
import Services from '@/components/services';
import Porfolio from '@/components/portfolio';
import Testimonials from '@/components/testimonials';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Hero from '@/components/sobre-mi/hero';

export default function Maintenance() {
  return (
    <main className='pb-40'>
      <Navbar />
      <Hero />
      <Services />
      <Proyectos />
      <Porfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}