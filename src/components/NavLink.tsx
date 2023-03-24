"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"

interface NavLinkProps {
    children: string;
    href: string;
}

export default function NavLink({children, href}: NavLinkProps) {
    const activePath = usePathname()
    const isCurrentPath = activePath.toLowerCase().trim() === href.toLowerCase().trim()

    return (
        <Link
        data-active={ isCurrentPath }
            className="px-4 py-1.5 border-white/5 border-l text-zinc-400 no-underline font-light hover:text-white transition-colors data-[active=true]:border-cyan-400"
            href={href}
        >
            {children}
        </Link>
    )
}