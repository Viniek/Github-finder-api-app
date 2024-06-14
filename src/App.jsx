
import React from 'react';
import Header from '../src/Pages/Header';
import UserDetails from '../src/Pages/UserDetails';
import Repositories from '../src/Pages/Repositories';
import Followers from '../src/Pages/Followers';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <UserDetails />
      <Repositories />
      <Followers />
    </div>
  );
}

export default App;
