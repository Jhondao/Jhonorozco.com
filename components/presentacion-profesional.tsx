import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function PresentacionProfesional() {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/10" id="sobre-mi-resumen">
            <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 items-center rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-8 md:p-10">
                    <div className="flex justify-center md:justify-start">
                        <div className="relative w-40 h-40 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl flex-shrink-0">
                            <Image
                                src="/imagen_perfil_jhonorozco.png"
                                alt="Jhon Orozco"
                                width={160}
                                height={160}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-2 text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-slate-800 dark:text-white">
                            Jhon Orozco
                        </h2>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            Profesional de Ingeniería de Sistemas enfocado en el desarrollo de software y la construcción de soluciones tecnológicas para empresas: desde integración de plataformas hasta automatización de procesos y desarrollo de aplicaciones a medida.
                        </p>
                        <Link
                            href="/sobre-mi"
                            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
                        >
                            Conocer mi trayectoria
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
