import Navbar from '@/components/navbar';
import React from 'react';
import Introduction from '../components/introduction';
import AboutMe from '@/components/about-me';
import Experience from '../components/experience';
import Services from '@/components/services';

export default function Maintenance() {
  return (
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
       <div className="text-center">
         <h1 className="text-5xl font-bold text-gray-800 mb-4">Trabajando en mi nueva imagen 👲</h1>
         <p className="text-lg text-gray-600 mb-8">
           Es momento de darle un giro al contenido profesional...
         </p>
         <p className="text-lg text-gray-600 mb-8">
           Para más información puedes escribir a Jhondao.desarrollo@hotmail.com
         </p>
         <div>
           <svg
             className="animate-spin h-8 w-8 text-gray-600 mx-auto"
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
           >
             <circle
               className="opacity-25"
               cx="12"
               cy="12"
               r="10"
               stroke="currentColor"
               strokeWidth="4"
             ></circle>
             <path
               className="opacity-75"
               fill="currentColor"
               d="M4 12a8 8 0 018-8v8H4z"
             ></path>
           </svg>
         </div>
       </div>
     </div>

    // <main className='pb-40'>
    //   <Navbar />
    //   <Introduction />
    //   <AboutMe />
    //   <Experience />
    //   <Services />
    // </main>
  );
}