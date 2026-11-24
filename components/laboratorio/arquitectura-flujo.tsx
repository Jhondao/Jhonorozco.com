import { ShoppingCart, Webhook, Boxes, Database, LayoutDashboard, ArrowRight, Server } from 'lucide-react';

const pasos = [
    { icon: ShoppingCart, label: 'E-commerce' },
    { icon: Webhook, label: 'API / Webhook' },
    { icon: Boxes, label: 'Middleware' },
    { icon: Server, label: 'ERP' },
    { icon: Database, label: 'Base de datos' },
    { icon: LayoutDashboard, label: 'Dashboard de monitoreo' },
];

export default function ArquitecturaFlujo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-2">
            {pasos.map((paso, index) => {
                const Icon = paso.icon;
                return (
                    <div key={paso.label} className="flex items-center gap-3 md:gap-2">
                        <div className="flex flex-col items-center gap-2 w-28">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-lg">
                                <Icon className="w-6 h-6" />
                            </div>
                            <span className="text-xs text-center font-medium text-slate-600 dark:text-slate-300">
                                {paso.label}
                            </span>
                        </div>
                        {index < pasos.length - 1 && (
                            <ArrowRight className="w-5 h-5 text-slate-400 dark:text-slate-600 flex-shrink-0 hidden sm:block" />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
