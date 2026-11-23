"use client"

import { Command } from "lucide-react"
import { COMMAND_PALETTE_OPEN_EVENT } from "./command-palette"

export function CommandPaletteTrigger() {
    return (
        <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent(COMMAND_PALETTE_OPEN_EVENT))}
            aria-label="Abrir buscador de navegación (Cmd+K)"
            className="courser-pointer hover:dark-bg-slate-800 hover:bg-slate-400 px-1.5 sm:px-3 md:px-4 py-2 md:py-2.5 rounded-full transition duration-150"
        >
            <Command className="w-5 h-5 md:w-6 md:h-6" />
        </button>
    )
}
