import React from 'react';
import { DynamicComponent, DynamicComponentData, DynamicComponentEditor } from '../dynamic-components';

const components: DynamicComponentData[] = [
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
]

export default function PageBuilder() {
    return <div>
        <div>
            {components.map(data => <DynamicComponent {...data}/>)}
        </div>
        <hr/>
        <div>
            {components.map(data => <DynamicComponentEditor {...data} data={data} onChange={console.log}/>)}
        </div>
    </div>
}