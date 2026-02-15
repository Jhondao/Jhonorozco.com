import React from 'react';
import Introduction from '@/components/introduction';
import AboutMe from '@/components/about-me';
import Proyectos from '@/components/proyectos';
import Experience from '@/components/experience';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import NavbarAboutMe from '@/components/sobre-mi/navbar-aboutme';


export default function Maintenance() {
    return (
        <main className='pb-40'>
            <NavbarAboutMe />
            <Introduction />
            <AboutMe />
            <Experience />
            <Proyectos />
            <Contact />
            <Footer />
        </main>
    );
}