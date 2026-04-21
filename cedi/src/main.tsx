import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, createBrowserRouter } from 'react-router-dom'
import ProductsPage from './pages/Products/ProductsPage.tsx'

const router = createBrowserRouter([
{
  path: '/',
  element: <ProductsPage/>
},
{

}
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
