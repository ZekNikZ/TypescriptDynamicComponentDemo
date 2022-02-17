import ButtonGroupComponentData, { ButtonGroupProps } from "./ButtonGroup";
import TextAreaComponentData, { TextAreaProps } from "./TextArea";
import { DCProps, DCEditorProps } from "./types";

// Add a line here
export const DYNAMIC_COMPONENT_REGISTRY = {
    [ButtonGroupComponentData.id]: ButtonGroupComponentData,
    [TextAreaComponentData.id]: TextAreaComponentData,
} as const;

// And here
export type DynamicComponentData = ButtonGroupProps | TextAreaProps;

export const DYNAMIC_COMPONENT_TYPES = Object.keys(DYNAMIC_COMPONENT_REGISTRY);

export function DynamicComponent<Type extends keyof typeof DYNAMIC_COMPONENT_REGISTRY, Props extends Extract<DynamicComponentData,{type: Type}>>(props: DCProps<Type, Props>) {
    return DYNAMIC_COMPONENT_REGISTRY[props.type].component(props as never);
}

export function DynamicComponentEditor<Type extends keyof typeof DYNAMIC_COMPONENT_REGISTRY, Props extends DCEditorProps<Type, Extract<DynamicComponentData,{type: Type}>>>(props: Props & { onDelete: (id: string) => void, onMoveUp: (id: string) => void, onMoveDown: (id: string) => void }) {
    return <div>
        {DYNAMIC_COMPONENT_REGISTRY[props.type].editor(props as never)}
        <button onClick={() => props.onDelete(props.id)}>Remove</button>
        <button onClick={() => props.onMoveUp(props.id)}>Move Up</button>
        <button onClick={() => props.onMoveDown(props.id)}>Move Down</button>
    </div>;
}