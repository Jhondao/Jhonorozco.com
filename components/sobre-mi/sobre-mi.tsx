"use client";

import React from "react";
import { Phone } from "lucide-react";
import Link from 'next/link';

export default function SobreMi() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent via-cyan-50/30 to-transparent dark:via-cyan-950/10" id="about-me">
      <div className='max-w-4xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div className='inline-block px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 backdrop-blur-sm border border-cyan-500/20'>
            <span className='text-sm font-medium bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent'>
              Conóceme
            </span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            <span className='bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent'>
              Sobre
            </span>
            <span className='text-slate-800 dark:text-white'> Mí</span>
          </h2>
        </div>

        {/* About Text - Centered */}
        <div className="relative bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-12 border border-slate-200 dark:border-slate-700">
          {/* Gradient background */}
          <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 dark:from-cyan-500/10 dark:to-blue-500/10 rounded-2xl'></div>

          <div className='relative z-10 space-y-6'>

            <p className='text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-center'>
              Soy profesional de Ingeniería de Sistemas, con más de 7 años de experiencia enfocado
              en el desarrollo de software y la construcción de soluciones tecnológicas para
              empresas: desde aplicaciones web y móviles hasta integración de plataformas y
              automatización de procesos.
            </p>

            <p className='text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-center'>
              A lo largo de mi carrera he trabajado en proyectos diversos, desde sitios web
              corporativos hasta integración de APIs REST, automatización de flujos y aplicaciones
              móviles. Me especializo en React, Next.js, React Native y el ecosistema de JavaScript
              moderno, con experiencia adicional en Drupal, WordPress y herramientas de
              automatización como n8n.
            </p>

            <p className='text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-center'>
              Mi metodología de trabajo incluye el análisis de las necesidades reales de cada
              proyecto, la optimización constante del rendimiento y la aplicación de buenas
              prácticas de accesibilidad web (WCAG), siempre buscando soluciones funcionales y
              sostenibles en el tiempo.
            </p>

            {/* CTA Button - Centered */}
            <div className='flex justify-center pt-4'>
              <Link
                href="mailto:jhondao.desarrollo@hotmail.com"
                className='inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105'
              >
                <Phone size={20} />
                Contactar
              </Link>
            </div>
          </div>

          {/* Decorative corner gradients */}
          <div className='absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-2xl'></div>
          <div className='absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur-2xl'></div>
        </div>
      </div>
    </section>
  );
}
