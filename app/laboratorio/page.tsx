import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import ArquitecturaFlujo from '@/components/laboratorio/arquitectura-flujo';
import {
    FlaskConical,
    ShieldCheck,
    FileCheck2,
    ClipboardList,
    AlertTriangle,
    RotateCcw,
    Activity,
    ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Laboratorio de Integraciones y Automatización',
    description:
        'Laboratorio donde diseño, experimento y documento soluciones de integración de sistemas, automatización de procesos y comunicación entre plataformas empresariales.',
    alternates: {
        canonical: '/laboratorio',
    },
};

const capacidades = [
    { icon: ShieldCheck, title: 'Validación de información', description: 'Verificar que los datos que entran y salen de cada sistema sean correctos y consistentes.' },
    { icon: FileCheck2, title: 'Prevención de pedidos duplicados', description: 'Evitar que un mismo evento se procese más de una vez entre plataformas.' },
    { icon: ClipboardList, title: 'Registro de transacciones', description: 'Dejar trazabilidad de cada operación que pasa por la integración.' },
    { icon: AlertTriangle, title: 'Gestión de errores', description: 'Detectar y manejar fallas en la comunicación entre sistemas sin perder información.' },
    { icon: RotateCcw, title: 'Reintentos controlados', description: 'Reintentar automáticamente una operación fallida sin duplicar efectos.' },
    { icon: Activity, title: 'Monitoreo', description: 'Visibilidad sobre el estado de los flujos de integración en un dashboard.' },
];

export default function LaboratorioPage() {
    return (
        <main className="pb-40">
            <Navbar />

            <section className="pt-32 pb-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 backdrop-blur-sm border border-blue-500/20">
                        <FlaskConical className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                            Laboratorio
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800 dark:text-white">
                        Laboratorio de Integraciones y Automatización
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Un espacio donde diseño, experimento y documento soluciones tecnológicas relacionadas con la integración de sistemas, automatización y comunicación entre plataformas empresariales.
                    </p>
                </div>
            </section>

            {/* Disclaimer */}
            <section className="px-6 mb-16">
                <div className="max-w-4xl mx-auto flex gap-3 items-start rounded-xl border border-amber-500/30 bg-amber-500/5 dark:bg-amber-500/10 p-5">
                    <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        <strong>Nota:</strong> esta sección presenta un laboratorio y proyectos personales de experimentación, no implementaciones comerciales entregadas a un cliente. Lo que ves aquí es capacidad técnica demostrada sobre un prototipo propio.
                    </p>
                </div>
            </section>

            {/* Arquitectura conceptual */}
            <section className="px-6 mb-20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-slate-800 dark:text-white">
                        Arquitectura conceptual de integración
                    </h2>
                    <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-8 overflow-x-auto">
                        <ArquitecturaFlujo />
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 text-center mt-4 max-w-2xl mx-auto">
                        Flujo de referencia para sincronizar un pedido entre un e-commerce y un ERP: captura del evento, procesamiento en un middleware, persistencia y visibilidad en un dashboard de monitoreo.
                    </p>
                </div>
            </section>

            {/* Capacidades */}
            <section className="px-6 mb-20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-slate-800 dark:text-white">
                        Qué resuelve este tipo de arquitectura
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {capacidades.map((cap) => {
                            const Icon = cap.icon;
                            return (
                                <div
                                    key={cap.title}
                                    className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-6 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300"
                                >
                                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white mb-4">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold text-slate-800 dark:text-white mb-2">{cap.title}</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{cap.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Proyecto base */}
            <section className="px-6 mb-20">
                <div className="max-w-4xl mx-auto rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-8 md:p-10">
                    <span className="inline-block text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400 mb-2">
                        Proyecto personal / Prototipo
                    </span>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                        Plataforma de Atención Omnicanal (MVP)
                    </h2>
                    <ul className="space-y-3 mb-2">
                        <li className="flex gap-2 text-slate-600 dark:text-slate-300">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>Despliegue y administración de infraestructura completa (VPS, Docker, dominios, SSL), lista para escalar a múltiples clientes.</span>
                        </li>
                        <li className="flex gap-2 text-slate-600 dark:text-slate-300">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>Automatización de procesos mediante n8n.</span>
                        </li>
                        <li className="flex gap-2 text-slate-600 dark:text-slate-300">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>Integración con canales de mensajería y APIs.</span>
                        </li>
                    </ul>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
                        Prototipo personal en desarrollo, documentado aquí como evidencia de capacidad técnica en automatización e integración.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 mb-20">
                <div className="max-w-4xl mx-auto text-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        Hablemos de tu proyecto
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </section>

            <Contact />
            <Footer />
        </main>
    );
}
