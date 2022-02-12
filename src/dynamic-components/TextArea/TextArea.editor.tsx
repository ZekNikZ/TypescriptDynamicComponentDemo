import { TextAreaComponentIdType, TextAreaProps } from "."
import { DynamicComponentEditorProps } from "../types"

const TextAreaComponentEditor: React.FC<DynamicComponentEditorProps<TextAreaComponentIdType, TextAreaProps>> = ({ id, data: { text } }) => {
    return <div>{id}: {text}</div>
}

export default TextAreaComponentEditor