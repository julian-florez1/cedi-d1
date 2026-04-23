import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./components/Layout/AppLayout"
import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products"

import Inventory from "./pages/Inventory/Inventory"
import InventoryTracking from "./pages/Inventory/InventoryTracking"
import Warehouses from "./pages/Warehouse/Warehouses"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path='products' element={<Products />} />
                    <Route path='storage' element={<Warehouses />} />
                    <Route path='inventory' element={<Inventory />} />
                    <Route path='inventoryTracking' element={<InventoryTracking />} />
                </Route>
            </Routes>

        </BrowserRouter>
    )
}

export default App