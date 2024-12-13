import { HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLSpanElement> {
     readonly children: React.ReactNode
     onClick?: any
}
export default function TransAnyUI({
     children,
     onClick = () => {},
     ...props
}: Props) {
     const onElementClick = async (e: any) => {
          onClick()
     }
     return (
          <span {...props} onClick={onElementClick}>
               {children}
          </span>
     )
}
