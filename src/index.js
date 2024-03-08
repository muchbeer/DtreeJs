import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import { AuthContextProvider } from './context/authcontext/AuthContext';
import { AirtimeContextProvider } from './context/airtimecontext/AirtimeContext';
import { ViewAirtimeContextProvider } from './context/viewairtimecontext/ViewAirtimeContext';
import { ReceivedAirtimeContextProvider } from './context/receivedairtimecontext/ReceivedAirtimeContext';
import { SingleAirtimeContextProvider } from './context/singleairtimecontext/SingleContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
     <AuthContextProvider>
      <AirtimeContextProvider>
        <ViewAirtimeContextProvider>
          <ReceivedAirtimeContextProvider>
            <SingleAirtimeContextProvider>
            <Home />
            </SingleAirtimeContextProvider>
          </ReceivedAirtimeContextProvider>
        </ViewAirtimeContextProvider>
      </AirtimeContextProvider>
     </AuthContextProvider>
      
  </React.StrictMode>
);

