import React from "react";
import { TextAreaProps } from "./TextArea.types";

const TextAreaComponent: React.FC<TextAreaProps> = ({ text }) => {
    return <div>{text}</div>
};

export default TextAreaComponent;