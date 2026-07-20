import React from 'react';
import type { Metadata } from 'next';
import Introduction from '@/components/sobre-mi/introduction';
import Proyectos from '@/components/sobre-mi/proyectos';
import Experience from '@/components/sobre-mi/experience';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import NavbarAboutMe from '@/components/sobre-mi/navbar-aboutme';
import SobreMi from '@/components/sobre-mi/sobre-mi';
import Educacion from '@/components/sobre-mi/educacion';
import Habilidades from '@/components/sobre-mi/habilidades';

export const metadata: Metadata = {
    title: 'Sobre Mí',
    description:
        'Conoce mi trayectoria como desarrollador frontend: experiencia, habilidades, educación y proyectos personales construidos con React, Next.js y TypeScript.',
    alternates: {
        canonical: '/sobre-mi',
    },
};

export default function Maintenance() {
    return (
        <main className='pb-40'>
            <NavbarAboutMe />
            <Introduction />
            <SobreMi />
            <Habilidades />
            <Experience />
            <Proyectos />
            <Educacion />
            <Contact />
            <Footer />
        </main>
    );
}