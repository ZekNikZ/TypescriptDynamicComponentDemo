import { TextAreaComponentIdType, TextAreaProps } from "."
import { DCEditorProps } from "../types"

const TextAreaComponentEditor: React.FC<DCEditorProps<TextAreaComponentIdType, TextAreaProps>> = ({ id, data, onChange }) => {
    const { text } = data;
    return <div>{id}: <input type="text" value={text} onChange={(event) => onChange({ ...data, text: event.target.value })}/></div>
}

export default TextAreaComponentEditor;