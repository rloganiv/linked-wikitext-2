import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Explore from './components/Explore';


const App = () => (
    <Router basename='/'>
        <Route exact path='/' component={Home} />
        <Route path='/explore' component={Explore} />
    </Router>
)


export default App;