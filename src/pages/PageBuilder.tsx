import React from 'react';
import { DynamicComponent, DynamicComponentData } from '../dynamic-components';

const components: DynamicComponentData[] = [
    {
        type: "button-group",
        id: "test-1",
        buttons: [
            {
                text: "Button 1",
                color: "primary"
            },
            {
                text: "Button 2",
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
                text: "Button 3",
                color: "primary"
            },
        ]
    }
]

export default function PageBuilder() {
    return <div>
        {components.map(data => <DynamicComponent {...data}/>)}
    </div>
}