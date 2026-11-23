import { dataExperience } from '@/data'
import { BadgeCheck } from 'lucide-react'
import React from 'react'
import { Progress } from '../ui/progress'

export default function Experience() {
  return (
    <section id="stack-tecnico" className='py-20 px-6 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/10'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div className='inline-block px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 backdrop-blur-sm border border-blue-500/20'>
            <span className='text-sm font-medium bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent'>
              Mis Habilidades
            </span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            <span className='bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent'>
              Stack
            </span>
            <span className='text-slate-800 dark:text-white'> Técnico</span>
          </h2>
          <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
            Tecnologías y herramientas con las que trabajo día a día
          </p>
        </div>

        {/* Experience Grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          {dataExperience.map((data) => (
            <div
              key={data.id}
              className="group relative bg-white dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Gradient overlay on hover */}
              <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

              <div className='relative z-10'>
                {/* Title */}
                <h3 className='text-2xl font-bold text-center mb-8 text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                  {data.title}
                </h3>

                {/* Skills Grid */}
                <div className='grid md:grid-cols-2 gap-6'>
                  {data.experience.map((item) => (
                    <div key={item.name} className='space-y-3'>
                      {/* Skill Name */}
                      <div className='flex items-start gap-2'>
                        <div className='flex-shrink-0 mt-1'>
                          <div className='p-1 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600'>
                            <BadgeCheck size={16} className='text-white' />
                          </div>
                        </div>
                        <div className='flex-grow'>
                          <p className='font-semibold text-slate-800 dark:text-white'>
                            {item.name}
                          </p>
                          <p className='text-sm text-slate-500 dark:text-slate-400'>
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className='space-y-1'>
                        <Progress
                          value={item.value}
                          className='h-2 bg-slate-200 dark:bg-slate-700'
                        />
                        <p className='text-xs text-right text-slate-500 dark:text-slate-400'>
                          {item.value}%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative corner gradient */}
              <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
