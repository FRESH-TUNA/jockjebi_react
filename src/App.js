import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import { Route } from 'react-router-dom'

import CreateJockbo from './components/createJockbo'
import Home from './components/home'
import Schedule from './components/schedule'

function App() {
  return (
    <div id="app">
      <Header/>
      <main>
        <Route exact path='/' component={Home}/>
        <Route exact path='/createJockbo' component={CreateJockbo}/>
        <Route path='/schedule' component={Schedule}/>
      </main>

      <style jsx>{`
      main {
        padding-top: 70px;
      }
      `}</style>
    </div>
  );
}

export default App;
