import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {Home} from './pages/Home.tsx';
import {Projects} from './pages/Projects.tsx';

export const RoutesDeclare = () => {

    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/projects' element={<Projects />} />
            </Routes>
        </Router>
    );
}