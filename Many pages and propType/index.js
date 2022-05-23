import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route , Routes} from "react-router-dom";
import Main from './Main';
import Post from './Post';


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


