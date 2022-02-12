import React from "react";

export interface DynamicComponentInfo<Type, Props> {
    id: Type;
    name: string;
    component: React.FC<Props>;
    editor: React.FC<DynamicComponentEditorProps<Type>>;
}

export interface DynamicComponentProps<Type> {
    type: Type;
    id: string;
}

export interface DynamicComponentEditorProps<Type> {
    type: Type;
    id: string;
}