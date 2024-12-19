/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Editor } from "@tinymce/tinymce-react"
import { useRef } from "react"

export default function InputFieldTextEditor() {
     const editorRef = useRef<Editor["elementRef"] | null>(
          null
     )

     return (
          <Editor
               id="text-editor"
               apiKey={
                    process.env.NEXT_PUBLIC_TINYMCE_API_KEY
               }
               onInit={(_evt, editor) =>
                    (editorRef.current = editor)
               }
               initialValue="<p>This is the initial content of the editor.</p>"
               init={{
                    height: 500,
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
               }}
          />
     )
}
