import type { CellContext } from "@tanstack/react-table";
import dataWarehouse from "../../../public/mock_data/bodegas.json";
import Table from "../../components/Table/Table";
import WarehouseForm from "./WarehouseForm";
import { useState } from "react";
import type { Warehouse, WarehousesForm } from "./WarehouseType";



function Warehouses() {

    const bodegas = dataWarehouse as Warehouse[];
    const [data, setData] = useState(bodegas)
    const [formKey, setFormKey] = useState(0)
    const [showForm, setShowForm] = useState(false)
    const [selected, setSelected] = useState<Warehouse | null>(null)

    const columns = [
        {
            header: 'ID',
            accessorKey: 'id'
        },
        {
            header: 'Nombre Bodega',
            accessorKey: 'nombre'
        },
        {
            header: 'Ubicación ',
            accessorKey: 'ubicacion'
        },
        {
            header: 'Capacidad',
            accessorKey: 'capacidad'
        },
        {
            header: 'Responsable',
            accessorKey: 'responsable'
        },
        {
            id: 'acciones',
            header: 'Acciones',
            cell: ({ row }: CellContext<Warehouse, unknown>) => (
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

    const handleEdit = (bodega: Warehouse) => {
        setSelected(bodega)
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

    const handleSave = (formData: WarehousesForm) => {


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
                    <h1 className="text-2xl font-bold text-gray-800">Lista de Bodegas</h1>
                    <button
                        onClick={handleCreate}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                        + Crear bodega
                    </button>
                </div>

                {showForm && (
                    <div className="mb-6">
                        <WarehouseForm
                            key={formKey}
                            initialData={selected}
                            onClose={() => setShowForm(false)}
                            onSubmit={handleSave}
                        />
                    </div>
                )}

                <Table columns={columns} data={data} />
            </div>
        </div>
    )
}

export default Warehouses