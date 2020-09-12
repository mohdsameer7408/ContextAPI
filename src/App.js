import React from 'react';
import './App.css';
import NavBar from './components/Nav'
import Store from './components/store';
import About from './components/about';
import Item from './components/itemDetails'
import { StoreProvider } from './storeContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <StoreProvider>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/store" exact component={Store} />
          <Route path="/about" component={About} />
          <Route path="/store/:id" component={Item} />
        </Switch>
      </StoreProvider>
    </Router>
  );
}

const Home = () => {
  return (
    <h1>Home Page</h1>
  );
}

export default App;
