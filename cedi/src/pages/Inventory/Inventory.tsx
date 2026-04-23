import InventoryData from "../../../public/mock_data/inventario.json";
import Table from "../../components/Table/Table";

const dataInventory = InventoryData;
const columns = [
    {
        header: 'ID',
        accessorKey: 'id'
    },
    {
        header: 'Producto',
        accessorKey: 'producto'
    },
    {
        header: 'Bodega ',
        accessorKey: 'bodega'
    },
    {
        header: 'Stock',
        accessorKey: 'stock'
    },
    {
        header: 'Stock Minimo',
        accessorKey: 'stockMinimo'
    }
];


function Inventory() {
    return (
        <div className="p-6">
            <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Lista de inventario</h1>
                </div>
            </div>
            <div>
                <Table columns={columns} data={dataInventory} />
            </div>
        </div>
    );
}

export default Inventory