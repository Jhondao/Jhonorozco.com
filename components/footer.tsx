"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-gradient-to-b from-transparent via-slate-50 to-slate-100 dark:via-slate-900 dark:to-slate-950 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                            JhonOrozco.com
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            Desarrollador web especializado en crear experiencias digitales modernas y funcionales que impulsan negocios.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/jhondao"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-gradient-to-br hover:from-purple-500 hover:to-blue-600 text-slate-700 dark:text-slate-300 hover:text-white transition-all duration-300 hover:scale-110"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jhon-dayron-orozco-caicedo-5b1b3b1b3/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-gradient-to-br hover:from-purple-500 hover:to-blue-600 text-slate-700 dark:text-slate-300 hover:text-white transition-all duration-300 hover:scale-110"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:jhondao.desarrollo@hotmail.com"
                                className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-gradient-to-br hover:from-purple-500 hover:to-blue-600 text-slate-700 dark:text-slate-300 hover:text-white transition-all duration-300 hover:scale-110"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
                            Enlaces Rápidos
                        </h4>
                        <nav className="flex flex-col gap-2">
                            <Link
                                href="/#services"
                                className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm"
                            >
                                Servicios
                            </Link>
                            <Link
                                href="/#portfolio"
                                className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm"
                            >
                                Portfolio
                            </Link>
                            <Link
                                href="/#contact"
                                className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm"
                            >
                                Contacto
                            </Link>
                            <Link
                                href="/sobre-mi"
                                className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm"
                            >
                                Sobre Mí
                            </Link>
                        </nav>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
                            Servicios
                        </h4>
                        <ul className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <li>Desarrollo Web</li>
                            <li>Diseño UI/UX</li>
                            <li>E-commerce</li>
                            <li>WordPress & CMS</li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent mb-8"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                    <p className="flex items-center gap-2">
                        © {currentYear} JhonOrozco.com. Hecho con
                        <Heart className="w-4 h-4 fill-red-500 text-red-500 animate-pulse" />
                        en Colombia
                    </p>
                    <p>Todos los derechos reservados</p>
                </div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500"></div>
        </footer>
    );
}

export default Footer;
