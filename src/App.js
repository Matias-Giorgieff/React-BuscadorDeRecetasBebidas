import React, { Fragment } from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaRecetas from './components/ListaRecetas'

import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
import ModalContext from './context/ModalContext';
function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalContext>
       
        <Header />

        <div className="container mt-5">
          <div className="row">
            <Formulario />
          </div>
          <ListaRecetas />
        </div>

        </ModalContext>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
