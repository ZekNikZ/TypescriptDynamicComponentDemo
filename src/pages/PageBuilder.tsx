import React, { useReducer } from 'react';
import { DynamicComponent, DynamicComponentData, DynamicComponentEditor } from '../dynamic-components';

const initialComponents: DynamicComponentData[] = [
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

type DataMap = Record<string, DynamicComponentData>;
type State = { ids: string[], components: DataMap };
const componentIds = initialComponents.map(c => c.id);
const componentsMap: DataMap = initialComponents.reduce((acc, comp) => ({...acc, [comp.id]: comp}), {});

function reducer(state: State, action: { type: 'update' | 'add', id: string, data: DynamicComponentData } | { type: 'remove', id: string }) {
    const { ids, components } = state;
    const { type, id } = action;

    switch (type) {
        case 'update':
            return { ids, components: { ...components, [id]: action.data } };
        case 'add':
            return { ids: [...ids, id], components: { ...components, [id]: action.data } };
        case 'remove':
            delete components[id];
            return { ids: ids.filter(_id => _id !== id) , components }
    }

    return state;
}

export default function PageBuilder() {
    const [{ ids, components }, dispatch] = useReducer(reducer, { ids: componentIds, components: componentsMap });

    return <div>
        <div>
            {ids.map(id => <DynamicComponent key={id} {...components[id]}/>)}
        </div>
        <hr/>
        <div>
            {ids.map(id => <DynamicComponentEditor key={id} {...components[id]} data={components[id]} onChange={data => dispatch({ type: 'update', id: data.id, data })}/>)}
        </div>
    </div>
}