import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './app.tsx'

import './ui/general-styles/index.css'
import './ui/general-styles/app.css'
import './ui/general-styles/variables.css'
import './ui/general-styles/fonts.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
