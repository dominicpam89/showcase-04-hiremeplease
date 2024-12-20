"use client"
import {
     Select,
     SelectTrigger,
     SelectValue,
     SelectItem,
     SelectContent,
} from "@/components/ui-custom/select"
import {
     ControllerRenderProps,
     FieldValues,
     Path,
} from "react-hook-form"
import {
     FormControl,
     FormItem,
     FormLabel,
     FormMessage,
} from "@/components/ui/form"

interface Item {
     id: string
     val: string
     text?: string
}

interface Props<T extends FieldValues, K extends Item> {
     field: ControllerRenderProps<T, Path<T>>
     label?: string
     placeholder: string
     items: Array<K>
}
export default function InputSelect<
     T extends FieldValues,
     K extends Item,
>({ field, label, placeholder, items }: Props<T, K>) {
     return (
          <FormItem>
               {label && <FormLabel>{label}</FormLabel>}
               <Select
                    onValueChange={field.onChange}
                    value={field.value}
               >
                    <FormControl>
                         <SelectTrigger className="w-full">
                              <SelectValue
                                   placeholder={placeholder}
                              />
                         </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                         {items.map((cat) => (
                              <SelectItem
                                   key={cat.id}
                                   value={cat.val}
                              >
                                   {cat.text || cat.val}
                              </SelectItem>
                         ))}
                    </SelectContent>
               </Select>
               <FormMessage className="text-xs" />
          </FormItem>
     )
}
