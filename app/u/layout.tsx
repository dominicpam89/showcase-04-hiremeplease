import { PropsWithChildren } from "react"
import NavbarMobileUI from "@/components/ui-custom/navbar-mobile"
import SearchBarUI from "@/components/ui-custom/search-bar"
import NavbarDesktopUI from "@/components/ui-custom/navbar-desktop"
import { cn } from "@/lib/utils"
import NavlistDesktop from "@/components/ui-custom/navlist-desktop"

export default function Layout({
     children,
}: PropsWithChildren) {
     return (
          <div id="u-root-layout" className="relative">
               <header className="relative">
                    <NavbarMobileUI />
               </header>
               <div
                    aria-label="layout-main-client"
                    className="max-md:pt-16 w-full h-screen flex overflow-hidden"
               >
                    <NavlistDesktop />
                    <div
                         aria-label="main-content"
                         className="w-full"
                    >
                         <div
                              aria-label="nav-desktop-container"
                              className={cn(
                                   "max-md:hidden",
                                   "py-3 px-6 flex gap-4 justify-between"
                              )}
                         >
                              <SearchBarUI
                                   key="base-search"
                                   inputId="base-search"
                                   compLabel="base-search"
                                   placeholder="Search anything..."
                              />
                              <NavbarDesktopUI />
                         </div>
                         <main className="w-full h-full px-8 py-4 overflow-scroll">
                              {children}
                         </main>
                    </div>
               </div>
               <footer></footer>
          </div>
     )
}
