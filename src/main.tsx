import React from 'react'
import ReactDOM from 'react-dom/client'
import { defineCustomElements } from '@trimble-oss/moduswebcomponents/loader'
import { ModusWcThemeProvider } from '@trimble-oss/moduswebcomponents-react'
import './index.css'
import App from './App.tsx'

// Register Modus custom elements
defineCustomElements()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ModusWcThemeProvider>
      <App />
    </ModusWcThemeProvider>
  </React.StrictMode>,
)

