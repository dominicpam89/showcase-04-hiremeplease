import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"

interface Props extends LinkProps {
     readonly children: React.ReactNode
     className: string
}
export default function TransLink({
     children,
     ...props
}: Props) {
     const router = useRouter()
     const onLinkClick = async (e: any) => {
          e.preventDefault()
          router.push(props.href.toString())
     }
     return (
          <Link {...props} onClick={onLinkClick}>
               {children}
          </Link>
     )
}
