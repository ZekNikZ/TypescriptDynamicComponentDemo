import React from "react";
import { ButtonGroupProps } from "./ButtonGroup.types";

const ButtonGroupComponent: React.FC<ButtonGroupProps> = ({ buttons }) => {
    return <div>{buttons.map(({ text, color }) => <div key={text}>{text} {color}</div>)}</div>
};

export default ButtonGroupComponent;