import React from 'react'
import { dataProyects } from '@/data';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const Proyectos = () => {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/10" id="proyectos">
            <div className='max-w-6xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <div className='inline-block px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 backdrop-blur-sm border border-blue-500/20'>
                        <span className='text-sm font-medium bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent'>
                            Proyectos Personales
                        </span>
                    </div>
                    <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                        <span className='bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent'>
                            Mis
                        </span>
                        <span className='text-slate-800 dark:text-white'> Proyectos</span>
                    </h2>
                    <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
                        Proyectos personales donde aplico nuevas tecnologías y conceptos
                    </p>
                </div>

                {/* Projects Grid */}
                <div className='grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto'>
                    {dataProyects.map((project, index) => (
                        <div
                            key={project.id}
                            className='group relative bg-white dark:bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10'
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Image */}
                            <div className='relative overflow-hidden aspect-video'>
                                <a href={project.url} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={400}
                                        height={225}
                                        className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                                        <div className='px-4 py-2 bg-white dark:bg-slate-900 text-slate-800 dark:text-white rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg'>
                                            Ver Proyecto
                                            <ExternalLink className='w-3.5 h-3.5' />
                                        </div>
                                    </div>
                                </a>
                            </div>

                            {/* Content */}
                            <div className='p-5 space-y-3'>
                                <span className='inline-block w-fit text-xs font-medium px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400'>
                                    {project.category}
                                </span>

                                <h3 className='text-lg font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                                    {project.title}
                                </h3>

                                <p className='text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3'>
                                    {project.description}
                                </p>

                                <div className='flex flex-wrap gap-1.5'>
                                    {project.tecnologies.slice(0, 4).map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className='px-2 py-0.5 text-xs font-medium bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded-full'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='inline-flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors'
                                >
                                    Ver proyecto en vivo
                                    <ExternalLink className='w-3.5 h-3.5' />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Proyectos;
