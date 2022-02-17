import React from "react";
import { TextAreaComponentIdType } from ".";
import { DCProps } from "../types";
import { TextAreaProps } from "./TextArea.types";

const TextAreaComponent: React.FC<DCProps<TextAreaComponentIdType, TextAreaProps>> = ({ data: { text } }) => {
    return <div style={{ height: '30px', textAlign: 'center', lineHeight: '30px' }}>{text}</div>
};

export default TextAreaComponent;