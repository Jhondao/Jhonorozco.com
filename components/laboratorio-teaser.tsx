import Link from 'next/link';
import { FlaskConical, ArrowRight } from 'lucide-react';

export default function LaboratorioTeaser() {
    return (
        <section className="py-20 px-6" id="laboratorio">
            <div className="max-w-4xl mx-auto">
                <div className="relative rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-8 md:p-12 text-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-500/10"></div>

                    <div className="relative z-10">
                        <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white mb-6">
                            <FlaskConical className="w-7 h-7" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
                            Laboratorio de Integraciones y Automatización
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                            Un espacio donde diseño, experimento y documento soluciones de integración de sistemas y automatización de procesos entre plataformas empresariales.
                        </p>
                        <Link
                            href="/laboratorio"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Explorar el laboratorio
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
