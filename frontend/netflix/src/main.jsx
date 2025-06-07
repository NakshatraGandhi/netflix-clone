import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Success from './components/Success.jsx'
import Failed from './components/Failed.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/success' element={<Success />}></Route>
        <Route path='/fail' element={<Failed />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
