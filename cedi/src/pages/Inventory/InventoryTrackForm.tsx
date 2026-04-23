import { useForm } from "react-hook-form"
import { useEffect } from "react"
import type { InventoryTracking, TrackingForm } from "./InventoryTrackingType"



function InventoryTrackForm({ initialData, onClose, onSubmit }: {
    initialData: InventoryTracking | null,
    onClose: () => void,
    onSubmit: (data: TrackingForm) => void
}) {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<TrackingForm>({
        defaultValues: initialData || {}
    })



    console.log(watch())

    useEffect(() => {
        if (initialData) {
            reset({
                productoId: initialData.productoId,
                tipo: initialData.tipo,
                cantidad: initialData.cantidad,
                bodegaOrigenId: initialData.bodegaOrigenId,
                bodegaDestinoId: initialData.bodegaDestinoId,
                fecha: initialData.fecha
            })
        }
    }, [initialData])

    return (
        <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow w-96">
            <h2 className="text-lg font-bold text-gray-800">
                {initialData ? 'Editar Movimiento' : 'Nuevo Movimiento'}
            </h2>

            <div className="flex flex-col gap-1">
                <input
                    {...register('productoId', { required: 'El id del producto es requerido', valueAsNumber: true })}
                    placeholder='Ej. 1' type="number"
                    className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.productoId && <span className="text-red-500 text-xs">{errors.productoId.message as string}</span>}
            </div>

            <div className="flex flex-col gap-1">
                <input
                    {...register('tipo', { required: 'El tipo es requerido' })}
                    placeholder='Ej. entrada'
                    type="entrada"
                    className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.tipo && <span className="text-red-500 text-xs">{errors.tipo.message as string}</span>}
            </div>

            <div className="flex flex-col gap-1">
                <input
                    {...register('cantidad', { required: 'La cantidad es requerida', valueAsNumber: true })}
                    placeholder='Ej. 50' type="number"
                    className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.cantidad && <span className="text-red-500 text-xs">{errors.cantidad.message as string}</span>}
            </div>

            <div className="flex flex-col gap-1">
                <input
                    {...register('bodegaOrigenId', { required: 'La bodega de origen es requerido', valueAsNumber: true })}
                    placeholder='Ej.10' type="number"
                    className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.bodegaOrigenId && <span className="text-red-500 text-xs">{errors.bodegaOrigenId.message as string}</span>}
            </div>
            <div className="flex flex-col gap-1">
                <input
                    {...register('bodegaDestinoId', { required: 'La bodega de destino es requerido', valueAsNumber: true })}
                    placeholder='Ej.1' type="number"
                    className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.bodegaDestinoId && <span className="text-red-500 text-xs">{errors.bodegaDestinoId.message as string}</span>}
            </div>
            <div className="flex flex-col gap-1">
                <input
                    {...register('fecha', { required: 'La fecha es requerida' })}
                    type="datetime-local"
                    className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.fecha && <span className="text-red-500 text-xs">{errors.fecha.message as string}</span>}
            </div>

            <div className="flex gap-2">
                <button
                    // onClick={handleSubmit(onSubmit)}
                    onClick={handleSubmit((data) => {
                        console.log('submit del form:', data)
                        onSubmit(data)
                    })}
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

export default InventoryTrackForm  