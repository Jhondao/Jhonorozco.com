import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import TerminalHero from './terminal-hero';

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
                    <span className='text-sm font-medium bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent'>
                        Soluciones Tecnológicas para Empresas
                    </span>
                </div>

                {/* Main heading */}
                <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight'>
                    <span className='bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 dark:from-blue-400 dark:via-cyan-300 dark:to-blue-400 bg-clip-text text-transparent animate-gradient'>
                        Conecto sistemas.
                    </span>
                    <br />
                    <span className='text-slate-800 dark:text-white'>
                        Automatizo procesos. Desarrollo soluciones.
                    </span>
                </h1>

                {/* Subtitle */}
                <p className='text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed'>
                    Ayudo a empresas a optimizar sus operaciones mediante software, integraciones y automatización tecnológica.
                </p>

                {/* Tech tags */}
                <div className='flex flex-wrap gap-2 justify-center mb-8'>
                    {['ERP & E-commerce', 'Integración de APIs', 'Automatización', 'Desarrollo de software'].map((tag) => (
                        <span
                            key={tag}
                            className='px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-16'>
                    <Link
                        href='#contact'
                        className='group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2'
                    >
                        Hablemos de tu proyecto
                        <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                    </Link>
                    <Link
                        href='/soluciones'
                        className='px-8 py-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-full font-semibold border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:scale-105'
                    >
                        Explorar soluciones
                    </Link>
                </div>

                {/* Hero Terminal */}
                <div className='relative w-full max-w-3xl mx-auto'>
                    <TerminalHero />
                </div>
            </div>
        </section>
    );
}
