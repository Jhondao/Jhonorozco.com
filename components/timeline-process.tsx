"use client";

import React from 'react';
import { dataProcess } from '@/data';

export default function TimelineProcess() {
    return (
        <section className='py-20 px-6 bg-slate-50/50 dark:bg-slate-900/20' id="process">
            <div className='max-w-6xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <div className='inline-block px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-500/10 dark:from-blue-500/20 dark:to-blue-500/20 backdrop-blur-sm border border-blue-500/20'>
                        <span className='text-sm font-medium bg-gradient-to-r from-blue-600 to-blue-600 dark:from-blue-400 dark:to-blue-400 bg-clip-text text-transparent'>
                            Mi Metodología
                        </span>
                    </div>
                    <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                        <span className='bg-gradient-to-r from-blue-600 to-blue-600 dark:from-blue-400 dark:to-blue-400 bg-clip-text text-transparent'>
                            Proceso
                        </span>
                        <span className='text-slate-800 dark:text-white'> de trabajo</span>
                    </h2>
                    <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
                        Un enfoque estructurado y transparente para llevar tu idea al siguiente nivel
                    </p>
                </div>

                {/* Timeline Grid */}
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative'>
                    {/* Connecting line (desktop only) */}
                    <div className='hidden lg:block absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/20 via-blue-500/20 to-green-500/20 -z-0'></div>

                    {dataProcess.map((step, index) => (
                        <div
                            key={step.id}
                            className='relative group flex flex-col items-center text-center'
                        >
                            {/* Step Number Badge */}
                            <div className='absolute -top-4 -right-2 w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-sm font-bold text-slate-400 group-hover:text-blue-500 transition-colors z-20 shadow-sm'>
                                0{index + 1}
                            </div>

                            {/* Icon Circle */}
                            <div className={`relative z-10 w-20 h-20 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} shadow-lg group-hover:scale-110 transition-all duration-300 group-hover:rotate-3`}>
                                <div className='text-white w-10 h-10 flex items-center justify-center'>
                                    {step.icon}
                                </div>
                                {/* Pulse Effect */}
                                <div className='absolute inset-0 rounded-2xl bg-inherit opacity-20 animate-ping group-hover:animate-none'></div>
                            </div>

                            {/* Content */}
                            <div className='relative z-10'>
                                <h3 className='text-xl font-bold mb-3 text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                                    {step.title}
                                </h3>
                                <p className='text-slate-600 dark:text-slate-400 text-sm leading-relaxed px-2'>
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}