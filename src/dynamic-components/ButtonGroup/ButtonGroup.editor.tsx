import { ButtonGroupComponentIdType, ButtonGroupProps } from "."
import { DCEditorProps } from "../types"

const ButtonGroupComponentEditor: React.FC<DCEditorProps<ButtonGroupComponentIdType, ButtonGroupProps>> = ({ id, data: { buttons } }) => {
    return <div>{id}: {buttons.map(b => b.label).join(', ')}</div>
}

export default ButtonGroupComponentEditor