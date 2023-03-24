import { Moon, Search } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 lg:left-80 max-lg:left-0 right-0 px-8 py-3 border-b border-white/10 backdrop-blur-xl flex items-center justify-between gap-8">
            <button className="w-full max-w-md flex items-center gap-3 text-xs text-zinc-400 bg-white/5 border border-white/10 px-3 h-8 rounded-full">
                <Search size={14} />
                <span>Find something...</span>
            </button>

            <div className="flex items-center">
                <nav className="text-sm hidden sm:flex items-center gap-6 prose prose-a:text-zinc-400 hover:prose-a:text-zinc-100 prose-a:transition-colors prose-a:no-underline">
                    <Link href="/">Api</Link>
                    <Link href="/">Documentation</Link>
                    <Link href="/">Support</Link>
                </nav>

                <div className="flex items-center border-l border-white/10 pl-6 ml-6 gap-6">
                    <button>
                        <Moon size={14} className="text-zinc-100" />
                    </button>

                    <button className="border border-cyan-800 bg-cyan-400/10 text-cyan-400 px-3 py-1.5 transition-colors duration-150 rounded-full text-sm font-light hover:border-cyan-400 active:bg-cyan-400/20 whitespace-nowrap">
                        Sign in
                    </button>
                </div>
            </div>
        </header>
    )
}