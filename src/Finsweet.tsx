import React from 'react'
import ReactDOM from 'react-dom/client'
import './app/style/style.css'
import { BrowserRouter } from 'react-router-dom'
import Routing from './pages/Routing.tsx'
import Header from './widget/ui/Header.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <main>
        <Header />
        <Routing />
      </main>
    </BrowserRouter>
  </React.StrictMode>,
)
