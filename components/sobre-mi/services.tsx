"use client";

import React from 'react'
import { dataServices } from '@/data'
import { Check } from 'lucide-react'

export default function Services() {
    return (
        <section className='py-20 px-6 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/10' id="services">
            <div className='max-w-6xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <div className='inline-block px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 backdrop-blur-sm border border-blue-500/20'>
                        <span className='text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent'>
                            Lo que ofrezco
                        </span>
                    </div>
                    <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                        <span className='bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent'>
                            Servicios
                        </span>
                        <span className='text-slate-800 dark:text-white'> Profesionales</span>
                    </h2>
                    <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
                        Impulso tu presencia online con soluciones digitales a medida
                    </p>
                </div>

                {/* Services Grid */}
                <div className='grid md:grid-cols-3 gap-8'>
                    {dataServices.map((service, index) => (
                        <div
                            key={service.id}
                            className='group relative bg-white dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2'
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Gradient overlay on hover */}
                            <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                            <div className='relative z-10'>
                                {/* Icon with gradient background */}
                                <div className='inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg'>
                                    <div className='text-white'>
                                        {service.icon}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className='text-xl font-bold mb-6 text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors min-h-[3.5rem]'>
                                    {service.title}
                                </h3>

                                {/* Features list */}
                                <ul className='space-y-3'>
                                    {service.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className='flex gap-3 items-start text-slate-600 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors'
                                        >
                                            <div className='flex-shrink-0 mt-1'>
                                                <div className='p-1 rounded-full bg-gradient-to-br from-blue-500 to-purple-600'>
                                                    <Check size={14} className='text-white' />
                                                </div>
                                            </div>
                                            <span className='text-sm leading-relaxed'>{feature.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Decorative corner gradient */}
                            <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
