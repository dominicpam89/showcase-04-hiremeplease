/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Editor } from "@tinymce/tinymce-react"
import { useEffect, useRef, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

interface Props {
     onSetInput: (text: string) => void
     initialValue: string
}
export default function InputFieldTextEditor({
     onSetInput,
     initialValue,
}: Props) {
     const editorRef = useRef<Editor["elementRef"] | null>(
          null
     )

     const [loading, setLoading] = useState(true)
     const [value, setValue] = useState(initialValue)

     // force editor to reload based on the UI theme
     const [editorKey, setEditorKey] = useState(0)
     const { resolvedTheme } = useTheme()
     useEffect(() => {
          setEditorKey((ps) => {
               setLoading(true)
               return ps + 1
          })
     }, [resolvedTheme])

     return (
          <>
               <Skeleton
                    className={cn("h-[300px] w-full flex", {
                         hidden: !loading,
                    })}
               />
               <Editor
                    key={editorKey}
                    id="text-editor"
                    apiKey={
                         process.env
                              .NEXT_PUBLIC_TINYMCE_API_KEY
                    }
                    onInit={(_evt, editor) => {
                         setLoading(false)
                         editorRef.current = editor
                         onSetInput(editor.getContent())
                    }}
                    value={value}
                    onEditorChange={(newValue, editor) => {
                         setValue(newValue)
                         onSetInput(editor.getContent())
                    }}
                    init={{
                         height: 300,
                         menubar: false,
                         plugins: [
                              "advlist",
                              "autolink",
                              "lists",
                              "link",
                              "image",
                              "charmap",
                              "preview",
                              "anchor",
                              "searchreplace",
                              "visualblocks",
                              "code",
                              "fullscreen",
                              "insertdatetime",
                              "media",
                              "table",
                              "code",
                              "help",
                              "wordcount",
                         ],
                         toolbar:
                              "undo redo | blocks | " +
                              "bold italic forecolor | alignleft aligncenter " +
                              "alignright alignjustify | bullist numlist outdent indent | " +
                              "removeformat | help",
                         content_style:
                              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                         skin:
                              resolvedTheme == "dark"
                                   ? "oxide-dark"
                                   : "oxide",
                         content_css:
                              resolvedTheme == "dark"
                                   ? "dark"
                                   : "default",
                    }}
               />
          </>
     )
}
