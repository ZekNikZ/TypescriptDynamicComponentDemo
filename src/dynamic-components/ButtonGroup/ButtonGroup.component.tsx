import React from "react";
import { ButtonGroupComponentIdType } from ".";
import { DCProps } from "../types";
import { ButtonGroupProps } from "./ButtonGroup.types";

const ButtonGroupComponent: React.FC<DCProps<ButtonGroupComponentIdType, ButtonGroupProps>> = ({ data: { buttons } }) => {
    return <div style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
        {buttons.map(({ label, color }) => <button key={label}>{label} {color}</button>)}
    </div>
};

export default ButtonGroupComponent;