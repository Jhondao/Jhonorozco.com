import React from 'react'
import { dataProyects } from '@/data';
import Title from './shared/title';


const Proyectos = () => {
  return (
    <div className="p-4 max-w-4xl md:py-24 mx-auto" id="portfolio">
        <Title title='Portafolio' subtitle='Proyectos personales' />
        <br />
         <div className='d-flex justify-center align-center gap-8 flex-wrap'>
            {dataProyects.map((project) => (
                <div key={project.id}>
                    <h3 className='text-xl mb-4 text-center'>{project.title}</h3>
                    <p className='mb-4'>{project.description}</p>
                    <p className='mb-4'>Tecnologías: {project.tecnologies.join(', ')}</p>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className='rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
                        />
                    </a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Proyectos;


