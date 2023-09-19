import { CustomRouter } from './components/CustomRouter';
import React from 'react';
import './styles/App.scss';
import { Header } from './components/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <CustomRouter/>
    </div>
  );
}

export default App;


