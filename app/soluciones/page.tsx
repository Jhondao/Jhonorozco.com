import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import SolucionDetalle from '@/components/soluciones/solucion-detalle';
import { dataSoluciones } from '@/data';

export const metadata: Metadata = {
    title: 'Soluciones',
    description:
        'Integración de sistemas (ERP y e-commerce), automatización de procesos con n8n, desarrollo de software a medida y plataformas de e-commerce. Soluciones tecnológicas para empresas.',
    alternates: {
        canonical: '/soluciones',
    },
};

const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jhon Dayron Orozco',
    url: 'https://jhonorozco.com',
    makesOffer: dataSoluciones.map((solucion) => ({
        '@type': 'Offer',
        itemOffered: {
            '@type': 'Service',
            name: solucion.title,
            description: solucion.description,
            url: `https://jhonorozco.com/soluciones#${solucion.slug}`,
        },
    })),
};

export default function SolucionesPage() {
    return (
        <main className="pb-40">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
            />
            <Navbar />
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 backdrop-blur-sm border border-blue-500/20">
                        <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                            Soluciones
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800 dark:text-white">
                        Conecto sistemas, automatizo procesos y desarrollo soluciones
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Cuatro líneas de trabajo con un mismo objetivo: que tu operación dependa menos de procesos manuales y más de sistemas que se comuniquen bien entre sí.
                    </p>
                </div>
            </section>

            <section className="px-6">
                <div className="max-w-6xl mx-auto space-y-8">
                    {dataSoluciones.map((solucion) => (
                        <SolucionDetalle
                            key={solucion.id}
                            id={solucion.slug}
                            icon={solucion.icon}
                            title={solucion.title}
                            description={solucion.description}
                            problema={solucion.problema}
                            solucion={solucion.solucion}
                            alcance={solucion.alcance}
                            beneficio={solucion.beneficio}
                            features={solucion.features}
                        />
                    ))}
                </div>
            </section>

            <Contact />
            <Footer />
        </main>
    );
}
