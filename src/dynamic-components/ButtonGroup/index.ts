import { DynamicComponentInfo } from "../types";

import component from './ButtonGroup.component';
import editor from './ButtonGroup.editor';
import { ButtonGroupComponentId, ButtonGroupComponentIdType, ButtonGroupProps } from "./ButtonGroup.types";
export * from "./ButtonGroup.types";

const ButtonGroupComponentData: DynamicComponentInfo<ButtonGroupComponentIdType, ButtonGroupProps> = {
    id: ButtonGroupComponentId,
    name: "Button Group",
    component,
    editor
} as const;

export default ButtonGroupComponentData;