import Image from "next/image"
import Link from "next/link"
import { AppleIcon } from "lucide-react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="flex items-center bg-background/90 backdrop-blur-md justify-between fixed top-0 z-40 w-full border-b-2 px-8 py-4 border-foreground/10">
      <div className="flex items-center space-x-4">
        <div className="flex justify-center text-accent lg:justify-start">
          <Image
            src="/logo-wide.png"
            alt="TOBC Entertainment"
            className="mix-blend-darken select-none"
            draggable={false}
            width={100}
            height={100}
          />
        </div>
      </div>
      <nav className="lg:flex hidden space-x-8">
        {siteConfig.mainNav.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-foreground/80 hover:text-foreground transition-all duration-300 ease-in-out hover:underline"
            prefetch={false}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  )
}
