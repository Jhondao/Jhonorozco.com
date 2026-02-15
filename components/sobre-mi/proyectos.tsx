"use client";

import React from 'react'
import { dataProyects } from '@/data';
import Image from 'next/image';
import { ExternalLink, Code2 } from 'lucide-react';

const Proyectos = () => {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-transparent via-emerald-50/30 to-transparent dark:via-emerald-950/10" id="proyectos">
            <div className='max-w-6xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <div className='inline-block px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20 backdrop-blur-sm border border-emerald-500/20'>
                        <span className='text-sm font-medium bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent'>
                            Proyectos Personales
                        </span>
                    </div>
                    <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                        <span className='bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent'>
                            Mis
                        </span>
                        <span className='text-slate-800 dark:text-white'> Proyectos</span>
                    </h2>
                    <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
                        Proyectos personales donde aplico nuevas tecnologías y conceptos
                    </p>
                </div>

                {/* Projects Grid */}
                <div className='grid md:grid-cols-1 gap-8 max-w-4xl mx-auto'>
                    {dataProyects.map((project, index) => (
                        <div
                            key={project.id}
                            className='group relative bg-white dark:bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10'
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Gradient overlay on hover */}
                            <div className='absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 dark:from-emerald-500/10 dark:to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                            <div className='relative z-10 grid md:grid-cols-1 gap-8 p-8'>
                                {/* Image */}
                                <div className='relative overflow-hidden rounded-xl'>
                                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={250}
                                            height={250}
                                            className='w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110 rounded-xl'
                                        />
                                        {/* Overlay on hover */}
                                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl'>
                                            <div className='px-6 py-3 bg-white dark:bg-slate-900 text-slate-800 dark:text-white rounded-full font-semibold flex items-center gap-2 shadow-lg'>
                                                Ver Proyecto
                                                <ExternalLink className='w-4 h-4' />
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                {/* Content */}
                                <div className='flex flex-col justify-center space-y-4'>

                                    {/* Title */}
                                    <h3 className='text-2xl font-bold text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors'>
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className='text-slate-600 dark:text-slate-300 leading-relaxed'>
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className='space-y-2'>
                                        <p className='text-sm font-semibold text-slate-700 dark:text-slate-300'>
                                            Tecnologías:
                                        </p>
                                        <div className='flex flex-wrap gap-2'>
                                            {project.tecnologies.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className='px-3 py-1 text-xs font-medium bg-gradient-to-r from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20 text-emerald-700 dark:text-emerald-300 rounded-full border border-emerald-500/20'
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Link */}
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold transition-colors'
                                    >
                                        Ver proyecto en vivo
                                        <ExternalLink className='w-4 h-4' />
                                    </a>
                                </div>
                            </div>

                            {/* Decorative corner gradient */}
                            <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Proyectos;
