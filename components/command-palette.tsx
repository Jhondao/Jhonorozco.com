"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { Download, Moon, Sun, Monitor, Code2 } from "lucide-react"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { itemsNavbar, itemsNavbarAboutMe, dataContact } from "@/data"

export const COMMAND_PALETTE_OPEN_EVENT = "open-command-palette"

export function CommandPalette() {
    const [open, setOpen] = React.useState(false)
    const router = useRouter()
    const { setTheme } = useTheme()

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((prev) => !prev)
            }
        }
        const openFromOutside = () => setOpen(true)

        document.addEventListener("keydown", down)
        window.addEventListener(COMMAND_PALETTE_OPEN_EVENT, openFromOutside)
        return () => {
            document.removeEventListener("keydown", down)
            window.removeEventListener(COMMAND_PALETTE_OPEN_EVENT, openFromOutside)
        }
    }, [])

    const navigate = (href: string) => {
        setOpen(false)
        if (href.startsWith("http")) {
            window.open(href, "_blank", "noopener,noreferrer")
        } else if (href.startsWith("mailto:") || href.startsWith("tel:") || href.endsWith(".pdf")) {
            window.location.href = href
        } else {
            router.push(href)
        }
    }

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="¿A dónde quieres ir? Escribe para buscar..." />
            <CommandList>
                <CommandEmpty>No encontré nada con ese nombre.</CommandEmpty>

                <CommandGroup heading="Inicio">
                    {itemsNavbar.map((item) => (
                        <CommandItem
                            key={`home-${item.id}`}
                            onSelect={() => navigate(item.link.startsWith("#") ? `/${item.link}` : item.link)}
                        >
                            {item.icon}
                            <span>{item.title}</span>
                        </CommandItem>
                    ))}
                </CommandGroup>

                <CommandSeparator />

                <CommandGroup heading="Sobre Mí">
                    {itemsNavbarAboutMe
                        .filter((item) => item.link !== "/")
                        .map((item) => (
                            <CommandItem
                                key={`about-${item.id}`}
                                onSelect={() => navigate(item.link.startsWith("#") ? `/sobre-mi${item.link}` : item.link)}
                            >
                                {item.icon}
                                <span>{item.title}</span>
                            </CommandItem>
                        ))}
                    <CommandItem onSelect={() => navigate("/sobre-mi#proyectos")}>
                        <Code2 />
                        <span>Proyectos Personales</span>
                    </CommandItem>
                </CommandGroup>

                <CommandSeparator />

                <CommandGroup heading="Contacto">
                    {dataContact.map((item) => (
                        <CommandItem key={`contact-${item.id}`} onSelect={() => navigate(item.link)}>
                            {item.icon}
                            <span>{item.subtitle}</span>
                        </CommandItem>
                    ))}
                    <CommandItem onSelect={() => navigate("/CV_Ing_Jhon_Dayron_Orozco_Meneses.pdf")}>
                        <Download />
                        <span>Descargar CV</span>
                    </CommandItem>
                </CommandGroup>

                <CommandSeparator />

                <CommandGroup heading="Tema">
                    <CommandItem onSelect={() => { setTheme("light"); setOpen(false) }}>
                        <Sun />
                        <span>Modo claro</span>
                    </CommandItem>
                    <CommandItem onSelect={() => { setTheme("dark"); setOpen(false) }}>
                        <Moon />
                        <span>Modo oscuro</span>
                    </CommandItem>
                    <CommandItem onSelect={() => { setTheme("system"); setOpen(false) }}>
                        <Monitor />
                        <span>Según el sistema</span>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
            <div className="border-t px-3 py-2 text-xs text-muted-foreground flex items-center justify-end gap-1">
                <span>Abrir en cualquier momento con</span>
                <CommandShortcut className="ml-0 rounded border px-1.5 py-0.5 font-mono">⌘K</CommandShortcut>
            </div>
        </CommandDialog>
    )
}
