import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./components/Layout/AppLayout"
import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products"
import StorageSite from "./pages/StorageSite/StorageSite"
import Inventory from "./pages/Inventory/Inventory"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path='products' element={<Products />} />
                    <Route path='storage' element={<StorageSite />} />
                    <Route path='inventory' element={<Inventory />} />

                </Route>
            </Routes>

        </BrowserRouter>
    )
}

export default App