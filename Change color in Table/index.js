import React from 'react';
import ReactDOM from 'react-dom/client';
import ParentDiv from './ParentDiv';
import './styles.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <React.Fragment>
        <ParentDiv />
      </React.Fragment>
  </React.StrictMode>
);
 