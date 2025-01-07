import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './NavBar/Navbar';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='navbar'>
      <Navbar />
     
    </div>
    <div className='app'>
      <App />
    </div>
    
  </StrictMode>,
)
