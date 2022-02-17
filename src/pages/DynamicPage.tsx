import { DynamicComponent } from "../dynamic-components";
import { DataMap } from "../utils/types";

type Props = {
    ids: string[];
    components: DataMap;
} & (
    { inEditor: false }
    | {
        inEditor: true;
        onSelected: (id: string) => void;
        selected: string;
        onAddClick: (id?: string) => void;
    }
);

export default function DynamicPage({ ids, components, ...props } : Props) {
    return <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {ids.map(id => <>
            {props.inEditor && <div key={`${id}-editor`} style={{ height: '20px', lineHeight: '20px', textAlign: 'center', backgroundColor: '#CCCCFF' }} onClick={() => props.onAddClick(id)}>+</div>}
            <div key={id} className={`dynamic-component ${props.inEditor ? 'editable' : ''} ${props.inEditor && props.selected === id ? 'selected' : ''}`} onClick={() => props.inEditor && props.onSelected(id)}><DynamicComponent key={id} type={components[id].type} data={components[id]} inEditor={props.inEditor} selected={props.inEditor && props.selected === id}/></div>
        </>)}
        {props.inEditor && <div style={{ height: '20px', lineHeight: '20px', textAlign: 'center', backgroundColor: '#CCCCFF' }} onClick={() => props.onAddClick()}>+</div>}
    </div>
}