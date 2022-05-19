import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';


import {BrowserRouter, Route , Routes} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
   <Route path='/' element={<Main/>} />
   <Route path="/posts/:id" element={<Post/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);



// http://192.168.0.200:3000/posts


