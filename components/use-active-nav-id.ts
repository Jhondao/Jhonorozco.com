"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

interface NavItem {
    id: number
    link: string
}

/**
 * Resolves which nav item should show as "active": exact-path match for
 * page links, scroll-spy (IntersectionObserver) for same-page #anchors.
 */
export function useActiveNavId(items: NavItem[]) {
    const pathname = usePathname()
    const [activeHashId, setActiveHashId] = useState<number | null>(null)

    const hashItems = items.filter(
        (item) => item.link.includes("#") && (item.link.split("#")[0] || "/") === pathname
    )

    useEffect(() => {
        setActiveHashId(null)
        if (hashItems.length === 0) return

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

                if (visible.length > 0) {
                    const id = visible[0].target.id
                    const match = hashItems.find((item) => item.link.split("#")[1] === id)
                    if (match) setActiveHashId(match.id)
                }
            },
            { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
        )

        const observed: Element[] = []
        hashItems.forEach((item) => {
            const hash = item.link.split("#")[1]
            const el = document.getElementById(hash)
            if (el) {
                observer.observe(el)
                observed.push(el)
            }
        })

        return () => {
            observed.forEach((el) => observer.unobserve(el))
            observer.disconnect()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])

    if (activeHashId !== null) return activeHashId

    const pathItem = items.find((item) => !item.link.includes("#") && item.link === pathname)
    return pathItem?.id ?? null
}
