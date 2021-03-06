import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  Redirect,
  HashRouter,
} from 'react-router-dom';
import './App.css';
import Country from './components/CountryComponent';
import ReactGA from 'react-ga';
import Header from './components/Header';
import Footer from './components/Footer';
import World from './components/World';

function App() {
  // useEffect(() => {
  //   ReactGA.initialize('UA-163580653-1');
  //   ReactGA.pageview(window.location.pathname);
  // }, []);

  const country = () => {
    return <Country />;
  };

  const world = () => {
    return <World />;
  };

  return (
    <HashRouter>
      <div className='bg-dark'>
        <Header />
        <Switch>
          <Route path='/india' component={country} />
          <Route path='/world' component={world} />
          <Redirect to='/india' />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
