import { BrowserRouter as Router, Routes as ReactRoutes, Route } from 'react-router-dom';

import NavBar from './components/navBar';
import Home from './views/Home';
import Post from './views/Post';

export default function Routes() {
    return (
        <Router>
            <NavBar /> <br/>
            <ReactRoutes>
                <Route path="/" element={<Home />} />
                <Route path="/post/:id" element={<Post />} />
            </ReactRoutes>
        </Router>
    )
}
