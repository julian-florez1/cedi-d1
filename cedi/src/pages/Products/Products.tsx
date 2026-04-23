import Productos from "../../../public/mock_data/productos.json";

const columns = [
    {
        header: 'ID',
        accessorKey: 'id'
    },
    {
        header: 'Nombre',
        accessorKey: 'nombre'
    },
    {
        header: 'Precio Unitario',
        accessorKey: 'precio'
    },
    {
        header: 'Cantidad',
        accessorKey: 'cantidad'
    },
    {
        header: 'Proveedor',
        accessorKey: 'proveedor'
    }
];

const dataProd = Productos;



function Products() {
    return (
        <div>
            <h1>
                Lista de productos
            </h1>
            <div>
                
            </div>
        </div>
    )
}


export default Products

