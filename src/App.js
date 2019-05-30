import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
// import Explore from './components/Explore';


class Menu extends React.Component {
    render () {
        return (
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                {/* <Navbar.Brand>
                    The Linked Wikitext-2 Dataset
                </Navbar.Brand> */}
                <Nav className="mr-auto">
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/explore'>Explore</Nav.Link>
                    </Navbar.Collapse>
                </Nav>
            </Navbar>
        )
    }
}

class Footer extends React.Component {
    render () {
        return (
            <footer class="container">
                <hr/>
                <p>
                    This site is created and maintained by&nbsp;
                    <a href="https://rloganiv.github.io">rloganiv</a>.
                </p>
            </footer>
        )
    }

}


const App = () => (
    <Router>
        <div>
            {/* <Menu/> */}
            <main>

            </main>
            <Route exact path='/' component={Home} />
            {/* <Route path='/preview' compoenent={Preview} /> */}
            <Footer/>
        </div>
    </Router>
)


export default App;