import ReactQuill from "react-quill"
import { useState } from "react"
export const RichTextEditor = () => {
    const [value, setvalue] = useState<string>('')
    return (
        <>
        <ReactQuill theme="snow" value={value} onChange={setvalue}/>
        </>
    )
}