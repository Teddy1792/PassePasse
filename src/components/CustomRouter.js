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
      <Route path="/collection" element={<Collection />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/auteurices" element={<Auteurices />} />
    </Routes>
  );
}