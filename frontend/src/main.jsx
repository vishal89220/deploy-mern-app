import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import 'bootstrap/dist/js/bootstrap.js';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


createRoot(document.getElementById('root')).render(
 <StrictMode>
      <App />
      <ToastContainer position='top-right'/>
      
 </StrictMode>
 
)
