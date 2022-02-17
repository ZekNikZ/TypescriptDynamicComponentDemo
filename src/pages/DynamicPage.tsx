import { DynamicComponent, DynamicComponentData } from "../dynamic-components";
import { DataMap } from "./types";

type Props = {
    ids: string[];
    components: DataMap;
} & (
    { inEditor: undefined | false }
    | {
        inEditor: true;
        onSelected: (data: DynamicComponentData) => void;
        selected: string;
        onAddClick: (id?: string) => void;
    }
);

export default function DynamicPage({ ids, components, ...rest } : Props) {
    return <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {ids.map(id => <>
            {rest.inEditor && <div key={`${id}-editor`} style={{ height: '20px', lineHeight: '20px', textAlign: 'center', backgroundColor: '#CCCCFF' }} onClick={() => rest.onAddClick(id)}>+</div>}
            <DynamicComponent key={id} type={components[id].type} data={components[id]} selected={rest.inEditor && id === rest.selected} inEditor={rest.inEditor} onSelected={rest.inEditor ? rest.onSelected : undefined}/>
        </>)}
        {rest.inEditor && <div style={{ height: '20px', lineHeight: '20px', textAlign: 'center', backgroundColor: '#CCCCFF' }} onClick={() => rest.onAddClick()}>+</div>}
    </div>
}