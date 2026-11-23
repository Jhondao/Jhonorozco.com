"use client"

import { useEffect, useState } from "react"

type ScriptLine =
    | { type: "prompt"; text: string }
    | { type: "output"; text: string; className?: string }
    | { type: "blank" }

const script: ScriptLine[] = [
    { type: "prompt", text: "whoami" },
    { type: "output", text: "Full Stack / Frontend Developer", className: "text-cyan-400 font-semibold" },
    { type: "blank" },
    { type: "prompt", text: "cat stack.json" },
    { type: "output", text: "{" },
    { type: "output", text: '  "frontend": ["React", "Next.js", "TypeScript"],' },
    { type: "output", text: '  "mobile": ["React Native"],' },
    { type: "output", text: '  "backend": ["REST APIs", "Drupal", "PHP"]' },
    { type: "output", text: "}" },
    { type: "blank" },
    { type: "prompt", text: "./deploy.sh --prod" },
    { type: "output", text: "✓ Build completado", className: "text-green-400" },
    { type: "output", text: "✓ Desplegado en producción", className: "text-green-400" },
]

const TYPE_SPEED = 45
const LINE_PAUSE = 350
const RESTART_PAUSE = 4500

export default function TerminalHero() {
    const [lineIndex, setLineIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)

    useEffect(() => {
        if (lineIndex >= script.length) {
            const t = setTimeout(() => {
                setLineIndex(0)
                setCharIndex(0)
            }, RESTART_PAUSE)
            return () => clearTimeout(t)
        }

        const current = script[lineIndex]

        if (current.type !== "prompt") {
            const t = setTimeout(() => setLineIndex((i) => i + 1), LINE_PAUSE)
            return () => clearTimeout(t)
        }

        if (charIndex < current.text.length) {
            const t = setTimeout(() => setCharIndex((c) => c + 1), TYPE_SPEED)
            return () => clearTimeout(t)
        }

        const t = setTimeout(() => {
            setLineIndex((i) => i + 1)
            setCharIndex(0)
        }, LINE_PAUSE)
        return () => clearTimeout(t)
    }, [lineIndex, charIndex])

    return (
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900 font-mono text-sm text-left">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-3 text-xs text-slate-400">jhon@portfolio — zsh</span>
            </div>

            {/* Body */}
            <div className="p-5 min-h-[300px] md:min-h-[340px] text-slate-200 leading-relaxed">
                {script.slice(0, lineIndex + 1).map((line, i) => {
                    if (line.type === "blank") {
                        return <div key={i}>&nbsp;</div>
                    }
                    if (line.type === "prompt") {
                        const isCurrent = i === lineIndex
                        const shown = isCurrent ? line.text.slice(0, charIndex) : line.text
                        const stillTyping = isCurrent && charIndex < line.text.length
                        return (
                            <div key={i} className="flex gap-2">
                                <span className="text-blue-400 shrink-0">$</span>
                                <span>
                                    {shown}
                                    {stillTyping && (
                                        <span className="inline-block w-2 h-4 bg-cyan-400 ml-0.5 animate-pulse align-middle" />
                                    )}
                                </span>
                            </div>
                        )
                    }
                    return (
                        <div key={i} className={line.className ?? "text-slate-400"}>
                            {line.text}
                        </div>
                    )
                })}
                {lineIndex >= script.length && (
                    <div className="flex gap-2">
                        <span className="text-blue-400">$</span>
                        <span className="inline-block w-2 h-4 bg-cyan-400 ml-0.5 animate-pulse align-middle" />
                    </div>
                )}
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-center md:justify-between flex-wrap gap-x-6 gap-y-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-sans">
                <span><strong className="font-bold">50+</strong> Proyectos</span>
                <span><strong className="font-bold">100%</strong> Satisfacción</span>
                <span><strong className="font-bold">24/7</strong> Soporte</span>
            </div>
        </div>
    )
}
