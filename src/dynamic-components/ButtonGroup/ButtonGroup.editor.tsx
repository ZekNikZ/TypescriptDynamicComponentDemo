import { ButtonGroupComponentIdType, ButtonGroupProps } from "."
import { DynamicComponentEditorProps } from "../types"

const ButtonGroupComponentEditor: React.FC<DynamicComponentEditorProps<ButtonGroupComponentIdType, ButtonGroupProps>> = ({ id, data: { buttons } }) => {
    return <div>{id}: {buttons.map(b => b.label).join(', ')}</div>
}

export default ButtonGroupComponentEditor