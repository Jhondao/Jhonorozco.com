import Navbar from '@/components/navbar';
import React from 'react';
import Services from '@/components/services';
import Porfolio from '@/components/portfolio';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Beneficios from '@/components/sobre-mi/beneficios';
import Testimonials from '@/components/testimonials';

export default function Maintenance() {
  return (
    <main className='pb-40'>
      <Navbar />
      <Hero />
      <Beneficios />
      <Services />
      <Porfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}