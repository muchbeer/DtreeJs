import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import { AuthContextProvider } from './context/authcontext/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
     <AuthContextProvider>
        <Home />
     </AuthContextProvider>
      
  </React.StrictMode>
);

