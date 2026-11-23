import { Briefcase, Calendar, Star } from 'lucide-react';

import { dataWorkExperience } from '@/data';

export default function WorkExperience() {
    return (
        <section id="experience" className="py-20 px-6 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/10">
            <div className='max-w-6xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <div className='inline-block px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 backdrop-blur-sm border border-blue-500/20'>
                        <span className='text-sm font-medium bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent'>
                            Mi Trayectoria
                        </span>
                    </div>
                    <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                        <span className='bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent'>
                            Experiencia
                        </span>
                        <span className='text-slate-800 dark:text-white'> Laboral</span>
                    </h2>
                    <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
                        Empresas y proyectos donde he aportado como desarrollador
                    </p>
                </div>

                {/* Timeline */}
                <div className='max-w-4xl mx-auto space-y-8'>
                    {dataWorkExperience.map((job, index) => (
                        <div key={job.id} className='group relative'>
                            {/* Timeline line */}
                            {index !== dataWorkExperience.length - 1 && (
                                <div className='absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-cyan-500/50 dark:from-blue-400/50 dark:to-cyan-400/50 -mb-8'></div>
                            )}

                            <div className='relative flex gap-6'>
                                {/* Icon */}
                                <div className='flex-shrink-0'>
                                    <div className='p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 group-hover:scale-110 transition-transform duration-300 shadow-lg'>
                                        <Briefcase className='w-6 h-6 text-white' />
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className='relative flex-grow bg-white dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1'>
                                    <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                                    <div className='relative z-10 space-y-3'>
                                        {/* Period Badge */}
                                        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 border border-blue-500/20'>
                                            <Calendar className='w-3 h-3 text-blue-600 dark:text-blue-400' />
                                            <span className='text-xs font-medium text-blue-700 dark:text-blue-300'>
                                                {job.period}
                                            </span>
                                        </div>

                                        {/* Role + Company */}
                                        <h3 className='text-xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                                            {job.role}
                                        </h3>
                                        <p className='text-sm font-semibold text-slate-600 dark:text-slate-400'>
                                            {job.company}
                                        </p>

                                        {/* Bullets */}
                                        <ul className='space-y-1.5 pt-1'>
                                            {job.bullets.map((bullet, i) => (
                                                <li key={i} className='text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex gap-2'>
                                                    <span className='text-blue-500 dark:text-blue-400 mt-1'>•</span>
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Highlights (logros) */}
                                        {job.highlights && job.highlights.length > 0 && (
                                            <div className='pt-3 mt-3 border-t border-slate-200 dark:border-slate-700 space-y-1.5'>
                                                <p className='text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide'>
                                                    Logros
                                                </p>
                                                {job.highlights.map((highlight, i) => (
                                                    <div key={i} className='text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex gap-2'>
                                                        <Star className='w-3.5 h-3.5 text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0' />
                                                        <span>{highlight}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
