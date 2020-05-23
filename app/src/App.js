import React from 'react';
import { Route } from 'react-router-dom';

import Main from './pages/Main';
import ProjectPage from './pages/ProjectsPage'

function App() {
    return (
        <div>
            <Route exact path='/'>
                <Main />
            </Route>
            <Route exact path='/projects'>
                <ProjectPage />
            </Route>
        </div>
    );
}

export default App;
