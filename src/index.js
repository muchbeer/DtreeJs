import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import { AuthContextProvider } from './context/authcontext/AuthContext';
import { AirtimeContextProvider } from './context/airtimecontext/AirtimeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
     <AuthContextProvider>
      <AirtimeContextProvider>
        <Home />
      </AirtimeContextProvider>
     </AuthContextProvider>
      
  </React.StrictMode>
);

