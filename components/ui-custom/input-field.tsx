import { Input } from "@/components/ui/input"
import { HTMLInputTypeAttribute } from "react"
import {
     FieldValues,
     FieldError,
     Path,
     useFormContext,
} from "react-hook-form"
import { Label } from "@/components/ui/label"

interface InputGroupProps<T extends FieldValues> {
     placeholder: string
     inputType?: HTMLInputTypeAttribute
     name: Path<T>
     icon?: React.ReactNode
     label?: string
     disabled?: boolean
}

export default function InputField<T extends FieldValues>({
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
     } = useFormContext<T>()
     return (
          <div
               aria-label="input-field"
               className="flex flex-col gap-2 w-full"
          >
               {label && (
                    <Label
                         htmlFor={name}
                         className="text-gray-500"
                    >
                         {label}
                    </Label>
               )}
               <div className="w-full flex gap-2 items-center">
                    {icon && (
                         <span className="size-4 relative">
                              {icon}
                         </span>
                    )}
                    <Input
                         id={name}
                         type={inputType}
                         placeholder={placeholder}
                         {...register(name)}
                         disabled={disabled}
                    />
               </div>
               {errors[name] && (
                    <p className="text-sm text-destructive transition-default">
                         {
                              (errors[name] as FieldError)
                                   ?.message
                         }
                    </p>
               )}
          </div>
     )
}
