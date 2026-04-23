function Home() {
    return (
        <div className="p-6">
            <div className="bg-white rounded-lg shadow p-6">
                <h1 className="text-2xl font-bold text-gray-800">Bienvenido</h1>
                <p className="text-gray-500 mt-1">Sistema de gestión de inventario D1 CEDI</p>

                <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                        <p className="text-sm text-blue-600 font-medium">Productos</p>
                        <p className="text-gray-500 text-sm mt-1">Gestiona el catálogo de productos</p>
                    </div>
                    <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                        <p className="text-sm text-green-600 font-medium">Bodegas</p>
                        <p className="text-gray-500 text-sm mt-1">Administra las bodegas disponibles</p>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
                        <p className="text-sm text-yellow-600 font-medium">Inventario</p>
                        <p className="text-gray-500 text-sm mt-1">Consulta el stock por bodega</p>
                    </div>
                    <div className="bg-purple-50 border border-purple-100 rounded-lg p-4">
                        <p className="text-sm text-purple-600 font-medium">Movimientos</p>
                        <p className="text-gray-500 text-sm mt-1">Registra entradas, salidas y transferencias</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home