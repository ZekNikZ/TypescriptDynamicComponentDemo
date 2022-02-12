import { DynamicComponentProps } from "../types";

export const TextAreaComponentId = "text-area";
export type TextAreaComponentIdType = typeof TextAreaComponentId;

export interface TextAreaProps extends DynamicComponentProps<TextAreaComponentIdType> {
    text: string;
}