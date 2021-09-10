import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import ShoppingCart from './pages/ShoppingCart';
import SingleBookPage from './pages/SingleBookPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/book/:title'>
          <SingleBookPage />
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
        <Route path='/shopping-cart'>
          <ShoppingCart/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
