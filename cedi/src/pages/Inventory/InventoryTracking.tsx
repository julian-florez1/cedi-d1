import type { CellContext } from "@tanstack/react-table";
import movimientoInv from "../../../public/mock_data/movimientos_inventario.json";
import Table from "../../components/Table/Table";
import type { InventoryTracking, TrackingForm } from "./InventoryTrackingType";
import { useState } from "react";
import InventoryTrackForm from "./InventoryTrackForm";




function InventoryTracking() {
    const dataMovimiento = movimientoInv as InventoryTracking[];
    const [data, setData] = useState(dataMovimiento)
    const [formKey, setFormKey] = useState(0)
    const [showForm, setShowForm] = useState(false)
    const [selected, setSelected] = useState<InventoryTracking | null>(null)
    const columns = [
        {
            header: 'ID Producto',
            accessorKey: 'productoId'
        },
        {
            header: 'Tipo Movimiento',
            accessorKey: 'tipo'
        },
        {
            header: 'Cantidad',
            accessorKey: 'cantidad'
        },
        {
            header: 'Bodega Origen',
            accessorKey: 'bodegaOrigenId'
        },
        {
            header: 'Bodega Destino',
            accessorKey: 'bodegaDestinoId'
        },
        {
            header: 'Fecha',
            accessorKey: 'fecha'
        },
        {
            id: 'acciones',
            header: 'Acciones',
            cell: ({ row }: CellContext<InventoryTracking, unknown>) => (
                <div className="flex gap-2">
                    <button
                        onClick={() => handleEdit(row.original)}
                        className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                    >
                        Editar
                    </button>
                    <button
                        onClick={() => handleDelete(row.original.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                    >
                        Eliminar
                    </button>
                </div>
            )
        }
    ];

    const handleEdit = (invTrack: InventoryTracking) => {
        setSelected(invTrack)
        setShowForm(true)
        setFormKey(prev => prev + 1)
    }

    const handleDelete = (id: number) => {
        setData(data.filter((p: { id: number; }) => p.id !== id))
    }

    const handleCreate = () => {
        setSelected(null)
        setShowForm(true)
        setFormKey(prev => prev + 1)
    }

    const handleSave = (formData: TrackingForm) => {

        if (selected) {
            const updated = data.map(p => p.id === selected.id ? { ...formData, id: selected.id } : p)

            setData(updated)
        } else {
            const newProduct = { ...formData, id: Date.now() }
            setData([...data, newProduct])
        }
        setShowForm(false)
        setSelected(null)
    }


    return (
        <div className="p-6">
            <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Lista de Productos</h1>
                    <button
                        onClick={handleCreate}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-medium"
                    > + Registrar Movimiento</button>
                </div>
                {showForm && (
                    <InventoryTrackForm
                        key={formKey}
                        initialData={selected}
                        onClose={() => setShowForm(false)}
                        onSubmit={handleSave}
                    />
                )}
                <Table columns={columns} data={data} />
            </div>
        </div>
    )
}

export default InventoryTracking