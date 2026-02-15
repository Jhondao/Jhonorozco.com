"use client";

import { dataContact } from "@/data";
import Link from 'next/link';
import ContactForm from "./contact-form";

const Contact = () => {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-transparent via-indigo-50/30 to-transparent dark:via-indigo-950/10" id="contact">
            <div className='max-w-6xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <div className='inline-block px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-indigo-500/10 to-violet-500/10 dark:from-indigo-500/20 dark:to-violet-500/20 backdrop-blur-sm border border-indigo-500/20'>
                        <span className='text-sm font-medium bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent'>
                            Hablemos
                        </span>
                    </div>
                    <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                        <span className='bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent'>
                            Contacta
                        </span>
                        <span className='text-slate-800 dark:text-white'> Conmigo</span>
                    </h2>
                    <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
                        ¿Tienes un proyecto en mente? Estoy aquí para ayudarte a hacerlo realidad
                    </p>
                </div>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Methods */}
                    <div className="space-y-6">
                        {dataContact.map((data) => (
                            <Link
                                key={data.id}
                                href={data.link}
                                target="_blank"
                                className="group block"
                            >
                                <div className="relative bg-white dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1">
                                    {/* Gradient overlay on hover */}
                                    <div className='absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-violet-500/5 dark:from-indigo-500/10 dark:to-violet-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                                    <div className='relative z-10 flex items-center gap-4'>
                                        {/* Icon */}
                                        <div className='flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 group-hover:scale-110 transition-transform duration-300'>
                                            <div className='text-white'>
                                                {data.icon}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className='flex-grow'>
                                            <p className='text-sm text-slate-500 dark:text-slate-400 mb-1'>{data.title}</p>
                                            <p className='font-semibold text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors'>
                                                {data.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Decorative corner gradient */}
                                    <div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="relative bg-white dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
                            {/* Gradient background */}
                            <div className='absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-violet-500/5 dark:from-indigo-500/10 dark:to-violet-500/10 rounded-2xl'></div>

                            <div className='relative z-10'>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;