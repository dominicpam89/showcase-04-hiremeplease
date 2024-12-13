"use client"
import sx from "./loader.module.css"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

export function LoaderComp() {
     return (
          <motion.div
               aria-label="page-transition-component"
               className={cn(
                    "absolute z-50 inset-0 min-h-screen w-full bg-primary"
               )}
               initial={{ opacity: 0, zIndex: -999 }}
               animate={{ opacity: 0.8, zIndex: 999 }}
               exit={{ opacity: 0, zIndex: -999 }}
               transition={{ duration: 0.3 }}
          >
               <div
                    aria-label="loader-container"
                    className="w-full h-full flex justify-center items-center"
               >
                    <div
                         aria-label="loading-component"
                         className={sx.loader}
                    ></div>
               </div>
          </motion.div>
     )
}

export default function LoaderUI() {
     const pathname = usePathname()
     return (
          <AnimatePresence>
               <LoaderComp key={pathname} />
          </AnimatePresence>
     )
}
