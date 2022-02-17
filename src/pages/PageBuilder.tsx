import React, { useReducer, useState } from 'react';
import { DynamicComponentData, DynamicComponentEditor } from '../dynamic-components';
import { extractStateFromJSON, insertAt, moveElement } from '../utils/utils';
import DynamicPage from './DynamicPage';
import { DataMap } from '../utils/types';
import SAMPLE_COMPONENTS from '../utils/example';

type State = { ids: string[], components: DataMap };
const [ componentIds, componentsMap ] = extractStateFromJSON(SAMPLE_COMPONENTS);

type Action =
    | { type: 'update', id: string, data: DynamicComponentData }
    | { type: 'add', id?: string, data: DynamicComponentData }
    | { type: 'remove', id: string }
    | { type: 'move-up', id: string }
    | { type: 'move-down', id: string };

function reducer(state: State, action: Action) {
    const { ids, components } = state;

    switch (action.type) {
        case 'update':
            return { ids, components: { ...components, [action.id]: action.data } };
        case 'add':
            if (!action.id) {
                return { ids: [...ids, action.data.id], components: { ...components, [action.data.id]: action.data } };
            }
            const index = ids.indexOf(action.id);
            return { ids: insertAt(ids, index, action.data.id), components: { ...components, [action.data.id]: action.data } };
        case 'remove':
            delete components[action.id];
            return { ids: ids.filter(_id => _id !== action.id), components };
        case 'move-up':
            return { ids: moveElement(ids, action.id, -1), components };
        case 'move-down':
            return { ids: moveElement(ids, action.id, 1), components };
    }

    return state;
}

export default function PageBuilder() {
    const [{ ids, components }, dispatch] = useReducer(reducer, { ids: componentIds, components: componentsMap });

    const [selected, setSelected] = useState('');
    const [nextId, setNextId] = useState(4);

    const onAddClick = (id?: string) => {
        dispatch({ type: 'add', id, data: {
            type: 'text-area',
            id: `test-${nextId}`,
            text: `Text Area ${nextId}`
        }});

        setSelected(`test-${nextId}`);
        setNextId(nextId + 1);
    }

    const onDelete = (id: string) => {
        dispatch({ type: 'remove', id });
        setSelected('');
    }

    const onMoveUp = (id: string) => {
        dispatch({ type: 'move-up', id });
    }

    const onMoveDown = (id: string) => {
        dispatch({ type: 'move-down', id });
    }

    return <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex' }}>
        <div style={{ flex: '3' }}>
            <DynamicPage ids={ids} components={components} inEditor selected={selected} onSelected={(data) => setSelected(data.id)} onAddClick={onAddClick}/>
        </div>
        <div style={{ flex: '1', padding: '10px', backgroundColor: '#DDDDDD' }}>
            {selected && <DynamicComponentEditor {...components[selected]} data={components[selected]} onChange={data => dispatch({ type: 'update', id: data.id, data })} onDelete={onDelete} onMoveUp={onMoveUp} onMoveDown={onMoveDown}/>}
        </div>
    </div>
}