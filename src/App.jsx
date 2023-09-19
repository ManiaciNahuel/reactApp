import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './Container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from './context/CartContex';
import Cart from './Container/Cart/Cart';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {  

    return (        
        <BrowserRouter>             
            <CartContextProvider>
                <div className="App">  
                    <NavBar />                    
                    <Routes>
                        <Route path="/" element = { <ItemListContainer  saludo={'Hola soy el componente contenedor pos 1'} /> } />
                        <Route path="/categoria/:id" element = { <ItemListContainer  saludo={'Hola soy el componente contenedor pos 1'} /> } />                        
                        <Route path="/detalle/:detalleId" element = { <ItemDetailContainer /> } />
                        <Route path="/cart" element = { <Cart /> } />                  
                        
                        
                        <Route path="/*" element = { <Navigate to='/' replace  /> } />                        
                    </Routes> 
                </div>
            </CartContextProvider>
        </BrowserRouter>
    )
}

export default App





// eliminar cód duplicado
// eliminar declarados y nunca usados
// eliminar importaciones qeu no usemos
// eliminar cód comentados
// eliminar console.log
// buena identación
// nombre de variables y func significativos
// no mezclar idiomas en el cód
// Eliminar Librerías que no use

// documentación tiene que tener minimo librerías extarnas que usaron, versionado, el para qué.
