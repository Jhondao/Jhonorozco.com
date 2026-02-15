"use client";

import { dataTestimonials } from "@/data";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Quote } from "lucide-react";

const Testimonials = () => {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-transparent via-amber-50/30 to-transparent dark:via-amber-950/10">
            <div className='max-w-6xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <div className='inline-block px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/20 backdrop-blur-sm border border-amber-500/20'>
                        <span className='text-sm font-medium bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent'>
                            Lo que dicen mis clientes
                        </span>
                    </div>
                    <h2 className='text-4xl md:text-5xl font-bold mb-4'>
                        <span className='bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent'>
                            Testimonios
                        </span>
                        <span className='text-slate-800 dark:text-white'> de Clientes</span>
                    </h2>
                    <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
                        La satisfacción de mis clientes es mi mayor logro
                    </p>
                </div>

                {/* Carousel */}
                <Carousel className="w-full max-w-5xl mx-auto">
                    <CarouselContent className="-ml-4">
                        {dataTestimonials.map((testimonial) => (
                            <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <div className="group relative bg-white dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-amber-500/50 dark:hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 h-full flex flex-col">
                                    {/* Gradient overlay on hover */}
                                    <div className='absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 dark:from-amber-500/10 dark:to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                                    <div className='relative z-10 flex flex-col items-center text-center h-full'>
                                        {/* Quote Icon */}
                                        <div className='mb-4 p-3 rounded-full bg-gradient-to-br from-amber-500 to-orange-600'>
                                            <Quote className='w-6 h-6 text-white' />
                                        </div>

                                        {/* Avatar */}
                                        <Avatar className='w-20 h-20 mb-4 border-4 border-white dark:border-slate-700 shadow-lg'>
                                            <AvatarImage src={testimonial.imageUrl} alt={testimonial.name} />
                                            <AvatarFallback className='bg-gradient-to-br from-amber-500 to-orange-600 text-white text-xl'>
                                                {testimonial.name.charAt(0)}
                                            </AvatarFallback>
                                        </Avatar>

                                        {/* Name */}
                                        <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                                            {testimonial.name}
                                        </h3>

                                        {/* Description */}
                                        <p className='text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-grow'>
                                            {testimonial.description}
                                        </p>

                                        {/* Star rating decoration */}
                                        <div className='flex gap-1 mt-6'>
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className='w-5 h-5 fill-amber-500' viewBox='0 0 20 20'>
                                                    <path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Decorative corner gradient */}
                                    <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='hidden md:flex -left-12 border-2 border-amber-500/20 hover:border-amber-500 hover:bg-amber-500 hover:text-white' />
                    <CarouselNext className='hidden md:flex -right-12 border-2 border-amber-500/20 hover:border-amber-500 hover:bg-amber-500 hover:text-white' />
                </Carousel>
            </div>
        </section>
    );
}

export default Testimonials;