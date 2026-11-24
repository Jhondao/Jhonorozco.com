import React from 'react';
import { dataBeneficios } from '@/data';
import { cn } from '@/lib/utils';


export default function Beneficios() {
    return (
        <section className='py-20 px-6 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/10' id="beneficios">
            <div className='max-w-6xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <div className='inline-block px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-500/10 dark:from-blue-500/20 dark:to-blue-500/20 backdrop-blur-sm border border-blue-500/20'>
                        <span className='text-sm font-medium bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent'>
                            ¿Por qué elegirme?
                        </span>
                    </div>
                    <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                        <span className='bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent'>
                            Beneficios
                        </span>
                        <span className='text-slate-800 dark:text-white'> que Marcan la Diferencia</span>
                    </h2>
                    <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
                        Trabajo con dedicación para ofrecerte soluciones digitales que impulsen tu negocio
                    </p>
                </div>

                {/* Benefits Bento Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {dataBeneficios.map((beneficio, index) => {
                        const IconComponent = beneficio.icon;
                        const isFeatured = index === 0;
                        const isWide = index === 1 || index === 4 || index === 5;
                        return (
                            <div
                                key={beneficio.id}
                                className={cn(
                                    'group relative bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1',
                                    isFeatured ? 'p-10 lg:col-span-2 lg:row-span-2 flex flex-col justify-center' : 'p-8',
                                    isWide && 'lg:col-span-2'
                                )}
                            >
                                {/* Gradient overlay on hover */}
                                <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-500/5 dark:from-blue-500/10 dark:to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                                <div className='relative z-10'>
                                    {/* Icon */}
                                    <div className={cn(
                                        `inline-flex rounded-xl bg-gradient-to-br ${beneficio.color} mb-4 group-hover:scale-110 transition-transform duration-300`,
                                        isFeatured ? 'p-4' : 'p-3'
                                    )}>
                                        <IconComponent className={isFeatured ? 'w-8 h-8 text-white' : 'w-6 h-6 text-white'} />
                                    </div>

                                    {/* Content */}
                                    <h3 className={cn(
                                        'font-bold mb-3 text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors',
                                        isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'
                                    )}>
                                        {beneficio.title}
                                    </h3>
                                    <p className={cn(
                                        'text-slate-600 dark:text-slate-300 leading-relaxed',
                                        isFeatured && 'text-lg max-w-md'
                                    )}>
                                        {beneficio.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className='mt-16 text-center'>
                    <div className='inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 via-blue-500/10 to-blue-500/10 dark:from-blue-500/20 dark:via-blue-500/20 dark:to-blue-500/20 border border-blue-500/20'>
                        <div className='text-left'>
                            <h3 className='text-2xl font-bold text-slate-800 dark:text-white mb-2'>
                                ¿Listo para comenzar tu proyecto?
                            </h3>
                            <p className='text-slate-600 dark:text-slate-300'>
                                Hablemos sobre cómo puedo ayudarte a alcanzar tus objetivos
                            </p>
                        </div>
                        <a
                            href='#contact'
                            className='px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap'
                        >
                            Contactar Ahora
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
