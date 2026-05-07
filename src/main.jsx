import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { trackConversion } from './lib/tracking.js'

document.addEventListener('click', (e) => {
  const anchor = e.target.closest('a[href*="wa.me"]')
  if (anchor) trackConversion()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)