import React from "react";

export interface DynamicComponentInfo<Type, Props> {
    id: Type;
    name: string;
    component: React.FC<DCProps<Type, Props>>;
    editor: React.FC<DCEditorProps<Type, Props>>;
}

export interface DynamicComponentProps<Type> {
    type: Type;
    id: string;
}

export interface DynamicComponentPropsForEditor<Data> {
    inEditor?: boolean;
    selected?: boolean;
    onSelected?: (data: Data) => void;
}

export interface DCProps<Type, Props> extends DynamicComponentPropsForEditor<Props> {
    type: Type;
    data: Props;
}

export interface DCEditorProps<Type, Data> {
    type: Type;
    id: string;
    onChange: (data: Data) => void;
    data: Data;
}