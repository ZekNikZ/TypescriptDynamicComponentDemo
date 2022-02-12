import { DynamicComponentProps } from "../types";

export const ButtonGroupComponentId = "button-group";
export type ButtonGroupComponentIdType = typeof ButtonGroupComponentId;

export interface ButtonProps {
    label: string;
    color: 'primary' | 'secondary';
}

export interface ButtonGroupProps extends DynamicComponentProps<ButtonGroupComponentIdType> {
    buttons: ButtonProps[];
}