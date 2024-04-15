import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

document.addEventListener('readystatechange', function() {
  if (document.readyState === 'complete') {
  if (location.hash.length > -1
    && location.hash.indexOf('#') > -1
    && document.querySelector(location.hash) !== null)
    document.querySelector(`#btn_${location.hash.substr(1)}`).click();
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
