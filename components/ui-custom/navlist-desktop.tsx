"use client"
import NavlistItemUI from "./navlist-item"
import { ArrowLeftIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getNavList } from "@/constant/nav.constant"
import { cn } from "@/lib/utils"
import { LogoUIWithLink } from "./logo"
import { useState } from "react"

export default function NavlistDesktop() {
     const navlist = getNavList("sm")
     const [minimizedSidebar, setMinimizedSidebar] =
          useState(false)
     const toggleMinimizeSidebar = () =>
          setMinimizedSidebar(!minimizedSidebar)
     return (
          <nav
               aria-label="navlist-desktop"
               className={cn(
                    "relative",
                    "max-md:hidden",
                    { "w-3/12": !minimizedSidebar },
                    { "w-1/12": minimizedSidebar },
                    "p-6 flex flex-col gap-8 items-start",
                    { "items-center": minimizedSidebar },
                    "shadow-md shadow-primary/10 dark:shadow-primary-foreground/10",
                    "transition-all duration-150 ease-in-out"
               )}
          >
               <MinimizeSidebarToggle
                    minimized={minimizedSidebar}
                    toggle={toggleMinimizeSidebar}
               />
               {!minimizedSidebar && (
                    <div
                         aria-label="navlist-desktop-header"
                         className={cn(
                              "transition-all duration-150 ease-in-out",
                              "flex flex-col gap-3"
                         )}
                    >
                         <div
                              aria-label="header-title"
                              className="flex items-center gap-3"
                         >
                              <LogoUIWithLink size="lg" />
                              <h2 className="font-black text-xl">
                                   Teatac
                              </h2>
                         </div>
                         <div aria-label="header-content">
                              <p className="text-xs opacity-50 text-justify text-pretty break-all">
                                   Welcome to TeaTac (Teach
                                   and Tackle), ask the real
                                   questions to teachers for
                                   knowledge bombs
                              </p>
                         </div>
                    </div>
               )}
               {minimizedSidebar && (
                    <LogoUIWithLink size="lg" />
               )}
               <ul
                    aria-label="navlist-desktop-content"
                    className="flex flex-col gap-6"
               >
                    {navlist.map((item) => (
                         <NavlistItemUI
                              key={item.link}
                              item={item}
                              withText={!minimizedSidebar}
                         />
                    ))}
               </ul>
          </nav>
     )
}

interface ToggleProps {
     toggle: () => void
     minimized: boolean
}
function MinimizeSidebarToggle({
     toggle,
     minimized,
}: ToggleProps) {
     return (
          <div
               aria-label="minimized-toggle-container"
               className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-4"
          >
               <Button
                    onClick={toggle}
                    size="icon"
                    variant="secondary"
                    className={cn(
                         "size-6",
                         "rounded-full",
                         "transform transition-all duration-300 ease-in-out",
                         "opacity-80",
                         "hover:scale-110 hover:opacity-100",
                         "active:scale-90 active:opacity-80",
                         { "rotate-180": minimized },
                         { "rotate-0": !minimized }
                    )}
               >
                    <ArrowLeftIcon size={12} />
               </Button>
          </div>
     )
}
