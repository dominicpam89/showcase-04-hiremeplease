import {
     ControllerFieldState,
     ControllerRenderProps,
     FieldValues,
     UseFormStateReturn,
} from "react-hook-form"
import InputFieldTextEditor from "@/components/ui-custom/input-field-wysiwyg"

interface Props<T extends FieldValues> {
     field: ControllerRenderProps<T>
     fieldState: ControllerFieldState
     formState: UseFormStateReturn<T>
}

export default function InputTextEditor<
     T extends FieldValues,
>({ field }: Props<T>) {
     return (
          <>
               <input aria-label="real-input" {...field} />
               <InputFieldTextEditor />
          </>
     )
}
