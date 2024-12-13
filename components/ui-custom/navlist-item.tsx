"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface Props {
     item: TypeNavItem
     onSelect?: () => void
     withText?: boolean
}
export default function NavlistItemUI({
     item,
     withText = true,
     onSelect = () => {},
}: Props) {
     const pathname = usePathname()

     let isActive = item.link == pathname

     if (item.link == "/u" && pathname == "/u") {
          isActive = true
     }

     const onLinkClick = async () => {
          onSelect()
     }

     return (
          <li
               aria-label="navlist-item"
               key={item.link}
               className={cn(
                    "transform transition-all duration-200 ease-out",
                    {
                         "font-extrabold text-green-800 dark:text-green-200":
                              isActive,
                    },
                    {
                         "hover:opacity-60 hover:scale-x-105":
                              !isActive,
                    },
                    "text-sm"
               )}
          >
               <Link
                    href={item.link}
                    onClick={onLinkClick}
                    className={cn(
                         "flex gap-2 items-center"
                    )}
               >
                    {item.icon}
                    {withText ? item.text : ""}
               </Link>
          </li>
     )
}
