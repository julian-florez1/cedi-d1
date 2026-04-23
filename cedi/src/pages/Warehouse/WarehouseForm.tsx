import { useForm } from "react-hook-form"
import { useEffect } from "react"
import type { Warehouse } from "./WarehouseType"

type WarehousesForm = Omit<Warehouse, 'id'>

function WarehouseForm({ initialData, onClose, onSubmit }: {
    initialData: Warehouse | null,
    onClose: () => void,
    onSubmit: (data: WarehousesForm) => void
}) {
    const { register, handleSubmit, reset, watch,formState: { errors } } = useForm<WarehousesForm>({
        defaultValues: initialData || {}
    })



    useEffect(() => {
        reset(initialData || {})
    }, [initialData])

    return (
        <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow w-96">
            <h2 className="text-lg font-bold text-gray-800">
                {initialData ? 'Editar Bodega' : 'Nuevo Bodega'}
            </h2>

            <div className="flex flex-col gap-1">
                <input
                    {...register('nombre', { required: 'El nombre de bodega es requerido' })}
                    placeholder='Bodega Bogotá Norte'
                    className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.nombre && <span className="text-red-500 text-xs">{errors.nombre.message as string}</span>}
            </div>

            <div className="flex flex-col gap-1">
                <input
                    {...register('ubicacion', { required: 'La ubicacion es requerido' })}
                    placeholder='Ej. Bogotá Norte'
                    className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.ubicacion && <span className="text-red-500 text-xs">{errors.ubicacion.message as string}</span>}
            </div>

            <div className="flex flex-col gap-1">
                <input
                    {...register('capacidad', { required: 'La capacidad es requerida' })}
                    placeholder='Ej. 50'
                    className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.capacidad && <span className="text-red-500 text-xs">{errors.capacidad.message as string}</span>}
            </div>

            <div className="flex flex-col gap-1">
                <input
                    {...register('responsable', { required: 'El nombre del responsable es requerido' })}
                    placeholder='Ej. Juan Perez'
                    className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.responsable && <span className="text-red-500 text-xs">{errors.responsable.message as string}</span>}
            </div>

            <div className="flex gap-2">
                <button
                    onClick={handleSubmit(onSubmit)}
                    className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                    {initialData ? 'Actualizar' : 'Guardar'}
                </button>
                <button
                    onClick={onClose}
                    className="flex-1 bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition-colors text-sm font-medium"
                >
                    Cancelar
                </button>
            </div>
        </div>
    )
}

export default WarehouseForm  