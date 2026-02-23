"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles, Download } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className='relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden'>
            {/* Background gradient effects */}
            <div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-500/10 dark:from-blue-500/20 dark:to-blue-500/20'></div>
            <div className='absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse'></div>
            <div className='absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000'></div>

            <div className='relative z-10 max-w-4xl mx-auto text-center'>
                {/* Badge */}
                <div className='inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-500/10 dark:from-blue-500/20 dark:to-blue-500/20 backdrop-blur-sm border border-blue-500/20'>
                    <Sparkles className='w-4 h-4 text-blue-500' />
                    <span className='text-sm font-medium bg-gradient-to-r from-blue-600 to-blue-600 dark:from-blue-400 dark:to-blue-400 bg-clip-text text-transparent'>
                        Servicios Profesionales
                    </span>
                </div>

                {/* Main heading */}
                <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight'>
                    <span className='bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 dark:from-blue-400 dark:via-blue-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient'>
                        Transformo Ideas en
                    </span>
                    <br />
                    <span className='text-slate-800 dark:text-white'>
                        Experiencias Digitales
                    </span>
                </h1>

                {/* Subtitle */}
                <p className='text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed'>
                    Desarrollo web moderno, diseño UI/UX innovador y soluciones digitales que impulsan tu negocio al siguiente nivel
                </p>

                {/* CTA Buttons */}
                <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-16'>
                    <Link
                        href='#services'
                        className='group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2'
                    >
                        Ver Servicios
                        <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                    </Link>
                    <Link
                        href='#contact'
                        className='px-8 py-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-full font-semibold border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:scale-105'
                    >
                        Contactar
                    </Link>
                </div>

                {/* Hero Image */}
                <div className='relative w-full max-w-3xl mx-auto'>
                    <div className='relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800'>
                        {/* Decorative gradient overlay */}
                        <div className='absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent z-10'></div>

                        <Image
                            src='/hero-services.jpg'
                            alt='Servicios Profesionales de Desarrollo Web'
                            width={1200}
                            height={600}
                            className='w-full h-auto object-cover'
                            priority
                        />
                    </div>

                    {/* Floating stats cards */}
                    <div className='absolute -bottom-8 left-4 right-4 flex flex-wrap gap-4 justify-center'>
                        <div className='bg-white dark:bg-slate-800 rounded-xl px-6 py-4 shadow-lg border border-slate-200 dark:border-slate-700 backdrop-blur-sm'>
                            <p className='text-2xl font-bold text-blue-600 dark:text-blue-400'>50+</p>
                            <p className='text-sm text-slate-600 dark:text-slate-400'>Proyectos</p>
                        </div>
                        <div className='bg-white dark:bg-slate-800 rounded-xl px-6 py-4 shadow-lg border border-slate-200 dark:border-slate-700 backdrop-blur-sm'>
                            <p className='text-2xl font-bold text-blue-600 dark:text-blue-400'>100%</p>
                            <p className='text-sm text-slate-600 dark:text-slate-400'>Satisfacción</p>
                        </div>
                        <div className='bg-white dark:bg-slate-800 rounded-xl px-6 py-4 shadow-lg border border-slate-200 dark:border-slate-700 backdrop-blur-sm'>
                            <p className='text-2xl font-bold text-blue-600 dark:text-blue-400'>24/7</p>
                            <p className='text-sm text-slate-600 dark:text-slate-400'>Soporte</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom CSS for gradient animation */}
            <style jsx>{`
                @keyframes gradient {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }
                .animate-gradient {
                    background-size: 200% auto;
                    animation: gradient 3s ease infinite;
                }
            `}</style>
        </section>
    );
}
