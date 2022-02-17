import React from "react";
import { TextAreaComponentIdType } from ".";
import { DCProps } from "../types";
import { TextAreaProps } from "./TextArea.types";

const TextAreaComponent: React.FC<DCProps<TextAreaComponentIdType, TextAreaProps>> = ({ onSelected, selected, data }) => {
    const { text } = data;
    return <div style={{ height: '30px', backgroundColor: selected ? '#CCFFCC': '#FFCCCC', textAlign: 'center', lineHeight: '30px' }} onClick={() => onSelected && onSelected(data)}>{text}</div>
};

export default TextAreaComponent;