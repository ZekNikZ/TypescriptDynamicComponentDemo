import { DynamicComponentData } from "../dynamic-components";

export default [
    {
        type: "button-group",
        id: "test-1",
        buttons: [
            {
                label: "Button 1",
                color: "primary"
            },
            {
                label: "Button 2",
                color: "secondary"
            },
        ]
    },
    {
        type: "text-area",
        id: "test-2",
        text: "Boom!"
    },
    {
        type: "button-group",
        id: "test-3",
        buttons: [
            {
                label: "Button 3",
                color: "primary"
            },
        ]
    }
] as DynamicComponentData[];