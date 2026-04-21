import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProductsPage from './pages/Products/ProductsPage'

function App() {

  return (
    <Routes>
      <Route path='/products' element={<ProductsPage />} />
    </Routes>
  )
}

export default App
