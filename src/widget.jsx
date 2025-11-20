import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './widget.css'

const containerId = 'pico-widget-container';
const container = document.getElementById(containerId);

if (container) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
} else {
  console.warn(`Pico Widget: Container element #${containerId} not found. Widget will not render.`);
}
