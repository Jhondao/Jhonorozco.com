"use client";

import React from 'react';
import { Shield, Zap, HeadphonesIcon, TrendingUp, Award, Clock } from 'lucide-react';

const dataBeneficios = [
    {
        id: 1,
        title: "Calidad Garantizada",
        description: "Código limpio, escalable y siguiendo las mejores prácticas del desarrollo moderno",
        icon: Shield,
        color: "from-purple-500 to-purple-600"
    },
    {
        id: 2,
        title: "Desarrollo Rápido",
        description: "Entregas ágiles sin comprometer la calidad del producto final",
        icon: Zap,
        color: "from-blue-500 to-blue-600"
    },
    {
        id: 3,
        title: "Soporte 24/7",
        description: "Asistencia continua para resolver cualquier duda o inconveniente",
        icon: HeadphonesIcon,
        color: "from-purple-500 to-blue-600"
    },
    {
        id: 4,
        title: "SEO Optimizado",
        description: "Tu sitio web posicionado en los primeros resultados de búsqueda",
        icon: TrendingUp,
        color: "from-blue-500 to-purple-600"
    },
    {
        id: 5,
        title: "Diseño Premium",
        description: "Interfaces modernas que destacan y convierten visitantes en clientes",
        icon: Award,
        color: "from-purple-600 to-blue-500"
    },
    {
        id: 6,
        title: "Actualizaciones",
        description: "Mantenimiento continuo para mantener tu sitio siempre actualizado",
        icon: Clock,
        color: "from-blue-600 to-purple-500"
    }
];

export default function Beneficios() {
    return (
        <section className='py-20 px-6 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-950/10' id="beneficios">
            <div className='max-w-6xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <div className='inline-block px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 backdrop-blur-sm border border-purple-500/20'>
                        <span className='text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent'>
                            ¿Por qué elegirme?
                        </span>
                    </div>
                    <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                        <span className='bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent'>
                            Beneficios
                        </span>
                        <span className='text-slate-800 dark:text-white'> que Marcan la Diferencia</span>
                    </h2>
                    <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
                        Trabajo con dedicación para ofrecerte soluciones digitales que impulsen tu negocio
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {dataBeneficios.map((beneficio) => {
                        const IconComponent = beneficio.icon;
                        return (
                            <div
                                key={beneficio.id}
                                className='group relative bg-white dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1'
                            >
                                {/* Gradient overlay on hover */}
                                <div className='absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                                <div className='relative z-10'>
                                    {/* Icon */}
                                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${beneficio.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <IconComponent className='w-6 h-6 text-white' />
                                    </div>

                                    {/* Content */}
                                    <h3 className='text-xl font-bold mb-3 text-slate-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors'>
                                        {beneficio.title}
                                    </h3>
                                    <p className='text-slate-600 dark:text-slate-300 leading-relaxed'>
                                        {beneficio.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className='mt-16 text-center'>
                    <div className='inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 dark:from-purple-500/20 dark:via-blue-500/20 dark:to-purple-500/20 border border-purple-500/20'>
                        <div className='text-left'>
                            <h3 className='text-2xl font-bold text-slate-800 dark:text-white mb-2'>
                                ¿Listo para comenzar tu proyecto?
                            </h3>
                            <p className='text-slate-600 dark:text-slate-300'>
                                Hablemos sobre cómo puedo ayudarte a alcanzar tus objetivos
                            </p>
                        </div>
                        <a
                            href='#contact'
                            className='px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap'
                        >
                            Contactar Ahora
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
