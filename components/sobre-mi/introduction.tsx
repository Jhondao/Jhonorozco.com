"use client";

import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import { Mail, Linkedin, Github, Download } from 'lucide-react';

export default function Introduction() {
    return (
        <section className='relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden' id='home'>
            {/* Background gradient effects */}
            <div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-500/10 dark:from-blue-500/20 dark:to-blue-500/20'></div>
            <div className='absolute top-20 right-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse'></div>
            <div className='absolute bottom-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000'></div>

            <div className='relative z-10 max-w-6xl mx-auto'>
                <div className='grid md:grid-cols-2 gap-12 items-center'>
                    {/* Text Content */}
                    <div className='text-center md:text-left space-y-6'>
                        {/* Badge */}
                        <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-500/10 dark:from-blue-500/20 dark:to-blue-500/20 backdrop-blur-sm border border-blue-500/20'>
                            <span className='text-sm font-medium bg-gradient-to-r from-blue-600 to-blue-600 dark:from-blue-400 dark:to-blue-400 bg-clip-text text-transparent'>
                                Disponible para proyectos
                            </span>
                        </div>

                        {/* Main heading */}
                        <div>
                            <h3 className='text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-2'>
                                Hola, Soy
                            </h3>
                            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight'>
                                <span className='bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 dark:from-blue-400 dark:via-blue-400 dark:to-blue-400 bg-clip-text text-transparent'>
                                    Jhon D. Orozco
                                </span>
                            </h1>
                            <h2 className='text-2xl md:text-3xl text-slate-700 dark:text-slate-300 font-semibold'>
                                Frontend Developer
                            </h2>
                        </div>

                        {/* Description */}
                        <p className='text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl'>
                            Especializado en crear experiencias web modernas, funcionales y visualmente impactantes que impulsan el éxito de tu negocio.
                        </p>

                        {/* CTA Buttons */}
                        <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
                            <Link
                                href="#contact"
                                className='group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2'
                            >
                                <Mail className='w-5 h-5' />
                                Contacta Conmigo
                            </Link>
                            <a
                                href='/CV_Jhon_Dayron_OrozcoM_Developer.pdf'
                                download
                                className='px-8 py-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-full font-semibold border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2'
                            >
                                <Download className='w-5 h-5' />
                                Descargar CV
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className='flex gap-4 justify-center md:justify-start'>
                            <a
                                href="https://www.linkedin.com/in/jhondao-orozco/"
                                target='_blank'
                                rel="noopener noreferrer"
                                className='p-3 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 text-slate-700 dark:text-slate-300 hover:text-white transition-all duration-300 hover:scale-110'
                            >
                                <Linkedin className='w-5 h-5' />
                            </a>
                            <a
                                href="https://github.com/jhondao"
                                target='_blank'
                                rel="noopener noreferrer"
                                className='p-3 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 text-slate-700 dark:text-slate-300 hover:text-white transition-all duration-300 hover:scale-110'
                            >
                                <Github className='w-5 h-5' />
                            </a>
                            <a
                                href="mailto:jhondao.desarrollo@hotmail.com"
                                className='p-3 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 text-slate-700 dark:text-slate-300 hover:text-white transition-all duration-300 hover:scale-110'
                            >
                                <Mail className='w-5 h-5' />
                            </a>
                        </div>
                    </div>

                    {/* Image */}
                    <div className='relative'>
                        <div className='relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800'>
                            <div className='absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent z-10'></div>
                            <Image
                                src="/imagen-portafolio-jhonorozco.png"
                                alt="Jhon Orozco - Frontend Developer"
                                width={450}
                                height={450}
                                className='w-full h-auto'
                                priority
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className='absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full blur-2xl opacity-50'></div>
                        <div className='absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full blur-2xl opacity-50'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
