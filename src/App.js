import { CustomRouter } from './components/CustomRouter';
import React from 'react';
import './styles/App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <CustomRouter/>
      <Footer />
    </div>
  );
}

export default App;


