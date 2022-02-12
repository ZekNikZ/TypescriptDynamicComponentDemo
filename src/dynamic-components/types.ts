import React from "react";

export interface DynamicComponentInfo<Type, Props> {
    id: Type;
    name: string;
    component: React.FC<Props>;
    editor: React.FC<DynamicComponentEditorProps<Type, Props>>;
}

export interface DynamicComponentProps<Type> {
    type: Type;
    id: string;
}

export interface DynamicComponentEditorProps<Type, Data> {
    type: Type;
    id: string;
    onChange: (data: Data) => void;
    data: Data;
}