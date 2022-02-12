import React from "react";
import { ButtonGroupProps } from "./ButtonGroup.types";

const ButtonGroupComponent: React.FC<ButtonGroupProps> = ({ buttons }) => {
    return <div>{buttons.map(({ label, color }) => <div key={label}>{label} {color}</div>)}</div>
};

export default ButtonGroupComponent;