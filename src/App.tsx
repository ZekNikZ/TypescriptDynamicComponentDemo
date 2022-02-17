import React from 'react';
import './App.scss';
import DynamicPage from './pages/DynamicPage';
import PageBuilder from './pages/PageBuilder';
import SAMPLE_COMPONENTS from './utils/example';
import { extractStateFromJSON } from './utils/utils';

function App() {
    const [ componentIds, componentsMap ] = extractStateFromJSON(SAMPLE_COMPONENTS);

    return <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <PageBuilder />
        <hr/>
        <DynamicPage ids={componentIds} components={componentsMap} inEditor={false}/>
    </div>;
}

export default App;
