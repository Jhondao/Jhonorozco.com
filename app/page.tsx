import Navbar from '@/components/navbar';
import React from 'react';
import Services from '@/components/services';
import Porfolio from '@/components/portfolio';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Problemas from '@/components/problemas';
import Beneficios from '@/components/beneficios';
import Testimonials from '@/components/testimonials';
import TimelineProcess from '@/components/timeline-process';
import FAQ from '@/components/faq';
import LaboratorioTeaser from '@/components/laboratorio-teaser';
import PresentacionProfesional from '@/components/presentacion-profesional';

export default function Maintenance() {
  return (
    <main className='pb-40'>
      <Navbar />
      <Hero />
      <Problemas />
      <Beneficios />
      <Services />
      <TimelineProcess />
      <Porfolio />
      <Testimonials />
      <FAQ />
      <LaboratorioTeaser />
      <PresentacionProfesional />
      <Contact />
      <Footer />
    </main>
  );
}