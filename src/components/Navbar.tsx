import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export function Navbar() {
    const links = [
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#experience", label: "Experience" },
        { href: "#education", label: "Education" },
        { href: "#skills", label: "Skills" },
    ]

    return (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
            <div className="rounded-full border border-white/10 bg-black/20 backdrop-blur-md px-4 py-2 shadow-lg">
                <NavigationMenu>
                    <NavigationMenuList className="flex gap-1">
                        {links.map((link) => (
                            <NavigationMenuItem key={link.label}>
                                <NavigationMenuLink
                                    href={link.href}
                                    className={cn(
                                        navigationMenuTriggerStyle(),
                                        "bg-transparent hover:bg-white/10 text-white/90 hover:text-white focus:bg-white/10 focus:text-white data-[active]:bg-white/10 data-[state=open]:bg-white/10 h-9 px-4 rounded-full transition-colors"
                                    )}
                                >
                                    {link.label}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    )
}
