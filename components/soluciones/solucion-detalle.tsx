import { CheckCircle2, AlertTriangle, Lightbulb, Target, TrendingUp } from 'lucide-react';

interface SolucionDetalleProps {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    problema: string;
    solucion: string;
    alcance: string;
    beneficio: string;
    features: { name: string }[];
    reversed?: boolean;
}

export default function SolucionDetalle({
    id,
    icon,
    title,
    description,
    problema,
    solucion,
    alcance,
    beneficio,
    features,
}: SolucionDetalleProps) {
    return (
        <div id={id} className="scroll-mt-24 group relative bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-10 border border-slate-200 dark:border-slate-700 transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left: header + features */}
                <div className="md:w-1/3 flex-shrink-0 space-y-4">
                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white [&_svg]:w-7 [&_svg]:h-7">
                        {icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                        {title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {description}
                    </p>
                    <ul className="space-y-2 pt-2">
                        {features.map((f, i) => (
                            <li key={i} className="flex gap-2 items-start text-sm text-slate-600 dark:text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                <span>{f.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right: problema / solucion / alcance / beneficio */}
                <div className="md:w-2/3 grid sm:grid-cols-2 gap-4">
                    <div className="rounded-xl bg-slate-50 dark:bg-slate-900/40 p-5 space-y-2">
                        <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-semibold text-sm">
                            <AlertTriangle className="w-4 h-4" />
                            Problema
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{problema}</p>
                    </div>
                    <div className="rounded-xl bg-slate-50 dark:bg-slate-900/40 p-5 space-y-2">
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm">
                            <Lightbulb className="w-4 h-4" />
                            Solución
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{solucion}</p>
                    </div>
                    <div className="rounded-xl bg-slate-50 dark:bg-slate-900/40 p-5 space-y-2">
                        <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold text-sm">
                            <Target className="w-4 h-4" />
                            Alcance
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{alcance}</p>
                    </div>
                    <div className="rounded-xl bg-slate-50 dark:bg-slate-900/40 p-5 space-y-2">
                        <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold text-sm">
                            <TrendingUp className="w-4 h-4" />
                            Beneficio
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{beneficio}</p>
                    </div>
                </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm"
                >
                    Hablemos de tu proyecto
                </a>
            </div>
        </div>
    );
}
