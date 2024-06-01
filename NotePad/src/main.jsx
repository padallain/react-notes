import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './scss/styles.scss'
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap'
import EditorContextProvider from './components/EditorContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EditorContextProvider>
      <App />
    </EditorContextProvider>
    {/* <EditorContextProvider>
      <App />                 
    </EditorContextProvider> -> Prueba del componente */}
  </React.StrictMode>,
)
