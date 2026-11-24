import React from 'react'
import Link from 'next/link'
import { dataSoluciones } from '@/data'
import { ArrowRight } from 'lucide-react'

export default function Services() {
    return (
        <section className='py-20 px-6 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/10' id="services">
            <div className='max-w-6xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <div className='inline-block px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 backdrop-blur-sm border border-blue-500/20'>
                        <span className='text-sm font-medium bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent'>
                            Lo que ofrezco
                        </span>
                    </div>
                    <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                        <span className='bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent'>
                            Soluciones
                        </span>
                        <span className='text-slate-800 dark:text-white'> Tecnológicas</span>
                    </h2>
                    <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
                        Conecto tus plataformas, automatizo procesos y desarrollo el software que tu operación necesita
                    </p>
                </div>

                {/* Solutions Grid (summary) */}
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {dataSoluciones.map((solucion, index) => (
                        <Link
                            key={solucion.id}
                            href={`/soluciones#${solucion.slug}`}
                            className='group relative bg-white dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1'
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Gradient overlay on hover */}
                            <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                            <div className='relative z-10'>
                                {/* Icon with gradient background */}
                                <div className='inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg [&_svg]:w-5 [&_svg]:h-5'>
                                    <div className='text-white'>
                                        {solucion.icon}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className='text-lg font-bold mb-2 text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors min-h-[3.5rem]'>
                                    {solucion.title}
                                </h3>

                                <p className='text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4'>
                                    {solucion.description}
                                </p>

                                <span className='inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400'>
                                    Ver más
                                    <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                                </span>
                            </div>

                            {/* Decorative corner gradient */}
                            <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                        </Link>
                    ))}
                </div>

                {/* CTA to full page */}
                <div className='mt-10 text-center'>
                    <Link
                        href='/soluciones'
                        className='inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105'
                    >
                        Explorar soluciones
                        <ArrowRight className='w-5 h-5' />
                    </Link>
                </div>
            </div>
        </section>
    )
}
