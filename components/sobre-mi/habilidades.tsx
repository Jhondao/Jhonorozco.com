"use client";

import React from 'react';
import { dataSoftSkills } from '@/data';


export default function Habilidades() {
    return (
        <section id="soft-skills" className="py-20 px-6 bg-gradient-to-b from-transparent via-slate-50/30 to-transparent dark:via-slate-900/10">
            <div className='max-w-6xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <div className='inline-block px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-slate-500/10 to-gray-500/10 dark:from-slate-500/20 dark:to-gray-500/20 backdrop-blur-sm border border-slate-500/20'>
                        <span className='text-sm font-medium bg-gradient-to-r from-slate-600 to-gray-600 dark:from-slate-400 dark:to-gray-400 bg-clip-text text-transparent'>
                            Habilidades Blandas
                        </span>
                    </div>
                    <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                        <span className='bg-gradient-to-r from-slate-600 to-gray-600 dark:from-slate-400 dark:to-gray-400 bg-clip-text text-transparent'>
                            Habilidades
                        </span>
                        <span className='text-slate-800 dark:text-white'> blandas</span>
                    </h2>
                    <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
                        Competencias interpersonales que complementan mi perfil técnico
                    </p>
                </div>

                {/* Skills Grid */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {dataSoftSkills.map((skill) => {
                        const IconComponent = skill.icon;
                        return (
                            <div
                                key={skill.id}
                                className='group relative bg-white dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-slate-500/50 dark:hover:border-slate-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-slate-500/10 hover:-translate-y-1'
                            >
                                {/* Gradient overlay on hover */}
                                <div className='absolute inset-0 bg-gradient-to-br from-slate-500/5 to-gray-500/5 dark:from-slate-500/10 dark:to-gray-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                                <div className='relative z-10'>
                                    {/* Icon */}
                                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${skill.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <IconComponent className='w-6 h-6 text-white' />
                                    </div>

                                    {/* Content */}
                                    <h3 className='text-lg font-bold mb-2 text-slate-800 dark:text-white group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors'>
                                        {skill.title}
                                    </h3>
                                    <p className='text-sm text-slate-600 dark:text-slate-300 leading-relaxed'>
                                        {skill.description}
                                    </p>
                                </div>

                                {/* Decorative corner gradient */}
                                <div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-slate-500/10 to-gray-500/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
