import React, { useReducer, useState } from 'react';
import { DynamicComponentData, DynamicComponentEditor } from '../dynamic-components';
import DynamicPage from './DynamicPage';
import { DataMap } from './types';

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

    const [selected, setSelected] = useState('');
    const [nextId, setNextId] = useState(4);

    const onAddClick = () => {
        dispatch({ type: 'add', id: `test-${nextId}`, data: {
            type: 'text-area',
            id: `test-${nextId}`,
            text: `Text Area ${nextId}`
        }});

        setSelected(`test-${nextId}`);
        setNextId(nextId + 1);
    }

    return <div style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex' }}>
        <div style={{ flex: '3', padding: '20px' }}>
            <DynamicPage ids={ids} components={components} inEditor selected={selected} onSelected={(data) => setSelected(data.id)} onAddClick={onAddClick}/>
        </div>
        <div style={{ flex: '1', padding: '10px', backgroundColor: '#DDDDDD' }}>
            {selected && <DynamicComponentEditor {...components[selected]} data={components[selected]} onChange={data => dispatch({ type: 'update', id: data.id, data })}/>}
        </div>
    </div>
}