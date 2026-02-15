"use client";

import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

import { dataEducacion } from '@/data';

export default function Educacion() {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-transparent via-violet-50/30 to-transparent dark:via-violet-950/10">
            <div className='max-w-6xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <div className='inline-block px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 dark:from-violet-500/20 dark:to-purple-500/20 backdrop-blur-sm border border-violet-500/20'>
                        <span className='text-sm font-medium bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent'>
                            Mi Formación
                        </span>
                    </div>
                    <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                        <span className='bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent'>
                            Educación
                        </span>
                        <span className='text-slate-800 dark:text-white'> & Certificaciones</span>
                    </h2>
                    <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
                        Formación académica y certificaciones que respaldan mi experiencia profesional
                    </p>
                </div>

                {/* Education Timeline */}
                <div className='max-w-4xl mx-auto space-y-8'>
                    {dataEducacion.map((item, index) => (
                        <div
                            key={item.id}
                            className='group relative'
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Timeline line */}
                            {index !== dataEducacion.length - 1 && (
                                <div className='absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-violet-500/50 to-purple-500/50 dark:from-violet-400/50 dark:to-purple-400/50 -mb-8'></div>
                            )}

                            <div className='relative flex gap-6'>
                                {/* Icon */}
                                <div className='flex-shrink-0'>
                                    <div className='p-3 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 group-hover:scale-110 transition-transform duration-300 shadow-lg'>
                                        <GraduationCap className='w-6 h-6 text-white' />
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className='flex-grow bg-white dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-violet-500/50 dark:hover:border-violet-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1'>
                                    {/* Gradient overlay on hover */}
                                    <div className='absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 dark:from-violet-500/10 dark:to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                                    <div className='relative z-10 space-y-3'>
                                        {/* Period Badge */}
                                        <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 dark:from-violet-500/20 dark:to-purple-500/20 border border-violet-500/20'>
                                            <Calendar className='w-3 h-3 text-violet-600 dark:text-violet-400' />
                                            <span className='text-xs font-medium text-violet-700 dark:text-violet-300'>
                                                {item.period}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className='text-xl font-bold text-slate-800 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors flex items-center gap-2'>
                                            {item.title}
                                            <Award className='w-5 h-5 text-violet-500' />
                                        </h3>

                                        {/* Institution */}
                                        <p className='text-sm font-semibold text-slate-600 dark:text-slate-400'>
                                            {item.institution}
                                        </p>

                                        {/* Description */}
                                        <p className='text-slate-600 dark:text-slate-300 leading-relaxed'>
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Decorative corner gradient */}
                                    <div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
