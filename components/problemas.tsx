import { Copy, Unplug, RefreshCcw, FileWarning, Repeat, SearchX } from 'lucide-react';

const dataProblemas = [
    {
        id: 1,
        problema: 'Registro manual de pedidos',
        ayuda: 'Capturo el pedido una sola vez y lo sincronizo automáticamente entre tus plataformas.',
        icon: Repeat,
    },
    {
        id: 2,
        problema: 'Información duplicada entre plataformas',
        ayuda: 'Conecto tus sistemas para que los datos vivan en un solo lugar y se reflejen en todos lados.',
        icon: Copy,
    },
    {
        id: 3,
        problema: 'Sistemas que no se comunican entre sí',
        ayuda: 'Desarrollo las APIs y el middleware necesarios para que tus plataformas trabajen juntas.',
        icon: Unplug,
    },
    {
        id: 4,
        problema: 'Procesos operativos repetitivos',
        ayuda: 'Automatizo las tareas manuales que le quitan tiempo a tu equipo.',
        icon: RefreshCcw,
    },
    {
        id: 5,
        problema: 'Falta de trazabilidad de las integraciones',
        ayuda: 'Implemento registro y monitoreo para que sepas qué pasó con cada transacción.',
        icon: SearchX,
    },
    {
        id: 6,
        problema: 'Errores en la sincronización de información',
        ayuda: 'Diseño validación y manejo de errores para que los datos lleguen correctos la primera vez.',
        icon: FileWarning,
    },
];

export default function Problemas() {
    return (
        <section className="py-20 px-6 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/10" id="problemas">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 backdrop-blur-sm border border-blue-500/20">
                        <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                            ¿Te suena familiar?
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                            Problemas
                        </span>
                        <span className="text-slate-800 dark:text-white"> que puedo resolver</span>
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Si tu operación depende de procesos manuales entre varios sistemas, probablemente reconoces alguno de estos
                    </p>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {dataProblemas.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.id}
                                className="group relative bg-white dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300"
                            >
                                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 mb-4">
                                    <Icon className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="font-bold text-slate-800 dark:text-white mb-2">
                                    {item.problema}
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                    {item.ayuda}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
