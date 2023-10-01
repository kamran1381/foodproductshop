import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ProductCartContextProvider from './context/ProductCartContext';
import { UseProductContext } from './context/productcontext';
import AuthContextfunc from './context/AuthContext';
import SearchQueryContextProvider from './context/SearchQueryContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
         <SearchQueryContextProvider>
         <AuthContextfunc>
            <ProductCartContextProvider>
               <App />
            </ProductCartContextProvider>
         </AuthContextfunc>
         </SearchQueryContextProvider>

      </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals