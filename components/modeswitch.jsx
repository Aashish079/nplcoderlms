"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import Image from 'next/image';

function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="mt-1">
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center p-2 rounded text-white transition"
                aria-label="Toggle theme"
            >
                {theme === "dark" ? (
                    <Image
                        src="/images/sun.png"
                        alt="Sun Icon" 
                        className="transition-transform duration-200 pb-1"
                        width={19}
                        height={19}
                    />
                ) : (
                    <Image
                        src="/images/moon.png"
                        alt="Moon Icon" 
                        className="transition-transform duration-200 pb-1"
                        width={18}
                        height={18}
                    />
                )}
            </button>
        </div>
    )
}

export default ModeToggle;
