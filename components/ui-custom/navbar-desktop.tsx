import {
     Avatar,
     AvatarFallback,
     AvatarImage,
} from "@/components/ui/avatar"
import {
     DropdownMenu,
     DropdownMenuContent,
     DropdownMenuItem,
     DropdownMenuLabel,
     DropdownMenuSeparator,
     DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ThemeToggle from "@/components/themes/toggle"
import NavbarDesktopLogoutUI from "./navbar-desktop-logout"

export default function NavbarDesktopUI() {
     return (
          <div
               aria-label="navbar-desktop"
               className="flex gap-2"
          >
               <ThemeToggle />
               <DropdownMenu>
                    <DropdownMenuTrigger>
                         <Avatar>
                              <AvatarImage src="https://github.com/shadcn.png" />
                              <AvatarFallback>
                                   CN
                              </AvatarFallback>
                         </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                         <DropdownMenuLabel>
                              My Account
                         </DropdownMenuLabel>
                         <DropdownMenuSeparator />
                         <DropdownMenuItem>
                              Profile
                         </DropdownMenuItem>
                         <DropdownMenuItem>
                              Billing
                         </DropdownMenuItem>
                         <DropdownMenuItem>
                              Team
                         </DropdownMenuItem>
                         <DropdownMenuItem>
                              Subscription
                         </DropdownMenuItem>
                         <DropdownMenuSeparator />
                         <NavbarDesktopLogoutUI />
                    </DropdownMenuContent>
               </DropdownMenu>
          </div>
     )
}
