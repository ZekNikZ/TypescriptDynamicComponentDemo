import { DynamicComponentInfo } from "../types";

import component from './TextArea.component';
import editor from './TextArea.editor';
import { TextAreaComponentId, TextAreaComponentIdType, TextAreaProps } from "./TextArea.types";
export * from "./TextArea.types";

const TextAreaComponentData: DynamicComponentInfo<TextAreaComponentIdType, TextAreaProps> = {
    id: TextAreaComponentId,
    name: "Text Area",
    component,
    editor
} as const;

export default TextAreaComponentData;