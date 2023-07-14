import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' //global styles


// ReactDOM.render(<App />, document.getElementById('root'))

//  Explaining the ReactDOM 
//  bassicly the createRoot is creating a root for our app, each means that every HTML element
// will be appended to the DOM in the element with the id of 'root', and will render the elements inside the <App /> component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
