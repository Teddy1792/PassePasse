import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Gallery } from './Gallery';
import { Collection } from './Collection';
import { Auteurices } from './Auteurices';
import { Contact } from './Contact';
import { Apropos } from './Apropos';

export const CustomRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path="/Apropos" element={<Apropos />} />
      <Route path="/Livres" element={<Collection />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/auteurices" element={<Auteurices />} />
    </Routes>
  );
}

//Livres = formerly Collection, hence the divergence between the component name Collection and the route name!