"use client";

import React from 'react';
import { dataFaq } from '@/data';
import { HelpCircle } from 'lucide-react';

export default function FAQ() {
    return (
        <section className='py-20 px-6 bg-gradient-to-b from-transparent via-blue-50/10 to-transparent dark:via-blue-950/5' id="faq">
            <div className='max-w-4xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <div className='inline-block px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-500/10 dark:from-blue-500/20 dark:to-blue-500/20 backdrop-blur-sm border border-blue-500/20'>
                        <span className='text-sm font-medium bg-gradient-to-r from-blue-600 to-blue-600 dark:from-blue-400 dark:to-blue-400 bg-clip-text text-transparent'>
                            Dudas comunes
                        </span>
                    </div>
                    <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                        <span className='bg-gradient-to-r from-blue-600 to-blue-600 dark:from-blue-400 dark:to-blue-400 bg-clip-text text-transparent'>
                            Preguntas
                        </span>
                        <span className='text-slate-800 dark:text-white'> frecuentes</span>
                    </h2>
                    <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
                        Resuelvo tus inquietudes para que podamos empezar a trabajar juntos sin dudas
                    </p>
                </div>

                {/* FAQ List */}
                <div className='space-y-6'>
                    {dataFaq.map((item) => (
                        <div
                            key={item.id}
                            className='group bg-white dark:bg-slate-800/40 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5'
                        >
                            <div className='flex gap-4 md:gap-6'>
                                <div className='flex-shrink-0'>
                                    <div className='p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300'>
                                        <HelpCircle className='w-6 h-6' />
                                    </div>
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold mb-3 text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                                        {item.question}
                                    </h3>
                                    <p className='text-slate-600 dark:text-slate-300 leading-relaxed'>
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}