import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Gallery } from './Gallery';
import { Collection } from './Collection';

export const CustomRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route to="/collection" element={<Collection />} />
    </Routes>
  );
}