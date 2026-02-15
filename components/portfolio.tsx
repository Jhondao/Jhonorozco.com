"use client";

import { dataPortfolio } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const Porfolio = () => {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-transparent via-green-50/30 to-transparent dark:via-green-950/10" id="portfolio">
            <div className='max-w-6xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <div className='inline-block px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-green-500/10 to-teal-500/10 dark:from-green-500/20 dark:to-teal-500/20 backdrop-blur-sm border border-green-500/20'>
                        <span className='text-sm font-medium bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400 bg-clip-text text-transparent'>
                            Mis Trabajos
                        </span>
                    </div>
                    <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                        <span className='bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-400 dark:to-teal-400 bg-clip-text text-transparent'>
                            Portfolio
                        </span>
                        <span className='text-slate-800 dark:text-white'> de Proyectos</span>
                    </h2>
                    <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
                        Trabajos recientes que demuestran mi experiencia y dedicación
                    </p>
                </div>

                {/* Portfolio Grid */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {dataPortfolio.map((data, index) => (
                        <div
                            key={data.id}
                            className='group relative bg-white dark:bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-green-500/50 dark:hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2'
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Image Container */}
                            <div className='relative overflow-hidden aspect-video'>
                                <Image
                                    src={data.image}
                                    alt={data.title}
                                    width={400}
                                    height={300}
                                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                />
                                {/* Gradient overlay */}
                                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300'></div>

                                {/* Hover overlay with link */}
                                <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <Link
                                        href={data.urlDemo}
                                        target='_blank'
                                        className='px-6 py-3 bg-white dark:bg-slate-900 text-slate-800 dark:text-white rounded-full font-semibold flex items-center gap-2 shadow-lg hover:scale-105 transition-transform'
                                    >
                                        Ver Sitio
                                        <ExternalLink className='w-4 h-4' />
                                    </Link>
                                </div>
                            </div>

                            {/* Content */}
                            <div className='p-6'>
                                <h3 className='text-lg font-bold text-slate-800 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-2'>
                                    {data.title}
                                </h3>
                            </div>

                            {/* Decorative corner gradient */}
                            <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Porfolio;