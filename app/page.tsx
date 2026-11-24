import Navbar from '@/components/navbar';
import React from 'react';
import Services from '@/components/services';
import Porfolio from '@/components/portfolio';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Problemas from '@/components/problemas';
import Testimonials from '@/components/testimonials';
import TimelineProcess from '@/components/timeline-process';
import FAQ from '@/components/faq';
import PresentacionProfesional from '@/components/presentacion-profesional';

export default function Maintenance() {
  return (
    <main className='pb-40'>
      <Navbar />
      <Hero />
      <Problemas />
      <Services />
      <TimelineProcess />
      <Porfolio />
      <Testimonials />
      <FAQ />
      <PresentacionProfesional />
      <Contact />
      <Footer />
    </main>
  );
}