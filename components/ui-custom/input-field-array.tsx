/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { Input } from "@/components/ui/input"
import {
     ChangeEvent,
     HTMLInputTypeAttribute,
     useEffect,
     useState,
} from "react"
import {
     FieldValues,
     FieldError,
     Path,
     useFormContext,
} from "react-hook-form"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { generateRandomId } from "@/lib/utils"
import { useCallback } from "react"
import InputFieldArrayHelper from "./input-field-array-helper"

interface InputGroupProps<T extends FieldValues> {
     placeholder: string
     inputType?: HTMLInputTypeAttribute
     name: Path<T>
     icon?: React.ReactNode
     label?: string
     disabled?: boolean
}

export default function InputFieldArray<
     T extends FieldValues,
>({
     placeholder,
     icon,
     name,
     label,
     disabled = false,
     inputType = "text",
}: InputGroupProps<T>) {
     const {
          register,
          formState: { errors },
          setValue,
          trigger,
     } = useFormContext<T>()

     // needed for user input UI only
     const [userInput, setUserInput] = useState("")
     const userInputOnChange = (
          e: ChangeEvent<HTMLInputElement>
     ) => {
          const inputVal = e.target.value
          setUserInput(inputVal)
     }
     const userInputOnBlur = () => {
          trigger(name)
     }

     // Tag Element properties
     const [tags, setTags] = useState<Array<string>>([])
     const mutateTags = (tags: string[]) => setTags(tags)

     // TagsUI Element function
     useEffect(() => {
          if (userInput.includes(",")) {
               const val = userInput.trim().split(",")[0]
               if (val == "") {
                    setUserInput("")
                    return
               }
               setTags((ps) =>
                    Array.from(new Set([...ps, val]))
               )
               setUserInput("")
          }
     }, [userInput])
     // Set value of real input that is hooked by react hook form
     useEffect(() => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          setValue(name, tags.join(",") as any)
     }, [tags])

     return (
          <div
               aria-label="input-field"
               className="flex flex-col gap-2 w-full"
          >
               {label && (
                    <Label
                         htmlFor="user-input"
                         className="text-gray-500 flex items-center gap-2"
                    >
                         {label}
                         <InputFieldArrayHelper />
                    </Label>
               )}
               <div className="w-full flex gap-2 items-center">
                    {icon && (
                         <span className="size-4 relative">
                              {icon}
                         </span>
                    )}
                    <div
                         aria-label="input-anchor"
                         className="w-full flex flex-col gap-2"
                    >
                         <TagsUI
                              tags={tags}
                              mutateTags={mutateTags}
                         />
                         <input
                              id={name}
                              aria-label="hidden-real-input"
                              className="hidden"
                              {...register(name)}
                              disabled={disabled}
                         />
                         <Input
                              id="user-input"
                              type={inputType}
                              placeholder={placeholder}
                              disabled={disabled}
                              value={userInput}
                              onChange={userInputOnChange}
                              onBlur={userInputOnBlur}
                         />
                    </div>
               </div>
               {errors[name] && (
                    <p className="text-xs text-destructive transition-default">
                         {
                              (errors[name] as FieldError)
                                   ?.message
                         }
                    </p>
               )}
          </div>
     )
}

/**
 *
 * TagsElement
 */
interface TagsProps {
     tags: string[]
     mutateTags: (tags: string[]) => void
}
function TagsUI({ tags, mutateTags }: TagsProps) {
     const tagsWithId = tags.map((val) => ({
          id: generateRandomId(),
          val,
     }))
     const removeTag = useCallback(
          (id: number) => {
               const newTags = tagsWithId
                    .filter((tag) => tag.id !== id)
                    .map((tag) => tag.val)
               mutateTags(newTags)
          },
          [tagsWithId]
     )
     return (
          <div
               aria-label="tags"
               className="flex gap-2 cursor-pointer"
          >
               {tagsWithId.map((tag) => {
                    return (
                         <Badge
                              key={tag.id}
                              variant="secondary"
                              onClick={removeTag.bind(
                                   null,
                                   tag.id
                              )}
                         >
                              {tag.val}
                         </Badge>
                    )
               })}
          </div>
     )
}
