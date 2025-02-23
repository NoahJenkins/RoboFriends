import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './containers/App.css'
import App from "./containers/App.jsx"
import "tachyons/css/tachyons.min.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
