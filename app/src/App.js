import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './pages/Main';
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App = () => {
    return (
        <div>
            <Header />
            <Route exact path='/'>
                <Main />
            </Route>
            <Route path='/about'>
                <AboutPage/>
            </Route>
            <Route exact path='/projects'>
                <ProjectsPage />
            </Route>
            <Route exact path='/contact'>
                <ContactPage />
            </Route>
        </div>
    );
}

export default App;
