import {
     Popover,
     PopoverContent,
     PopoverTrigger,
} from "@/components/ui/popover"
import { CircleHelpIcon } from "lucide-react"

export default function InputFieldArrayHelper() {
     return (
          <div
               aria-label="input-field-array-helper"
               className="mt-1"
          >
               <Popover>
                    <PopoverTrigger>
                         <CircleHelpIcon size={16} />
                    </PopoverTrigger>
                    <PopoverContent className="flex flex-col gap-3 items-start">
                         <Parent
                              heading="Write Tag?"
                              paragraph="Use comma to save a word/tag you save"
                         />
                         <Parent
                              heading="Remove Tag?"
                              paragraph="Click the label of word/tag displayed on top of the input box"
                         />
                    </PopoverContent>
               </Popover>
          </div>
     )
}

interface ParentProps {
     heading: string
     paragraph: string
}

function Parent({ heading, paragraph }: ParentProps) {
     return (
          <div
               aria-label="popover-content-parent"
               className="space-y-1"
          >
               <Heading>{heading}</Heading>
               <Paragraph>{paragraph}</Paragraph>
          </div>
     )
}

interface ContentProps {
     readonly children: React.ReactNode
}

function Heading({ children }: ContentProps) {
     return (
          <h3
               aria-label="popover-content-heading"
               className="text-sm font-semibold text-primary dark:text-accent"
          >
               {children}
          </h3>
     )
}

function Paragraph({ children }: ContentProps) {
     return (
          <p
               aria-label="popover-content-text"
               className="text-xs"
          >
               {children}
          </p>
     )
}
