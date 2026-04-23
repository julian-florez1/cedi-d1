import { useForm } from "react-hook-form"
import { useEffect } from "react"
import type { Producto } from "./ProductType"

type ProductoForm = Omit<Producto, 'id'>

function ProductForm({ initialData, onClose, onSubmit }: {
    initialData: Producto | null,
    onClose: () => void,
    onSubmit: (data: ProductoForm) => void
}) {
    const { register, handleSubmit, reset, watch,formState: { errors } } = useForm<ProductoForm>({
        defaultValues: initialData || {}
    })



    useEffect(() => {
        reset(initialData || {})
    }, [initialData])

    return (
        <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow w-96">
            <h2 className="text-lg font-bold text-gray-800">
                {initialData ? 'Editar Producto' : 'Nuevo Producto'}
            </h2>

            <div className="flex flex-col gap-1">
                <input
                    {...register('nombre', { required: 'El nombre del producto es requerido' })}
                    placeholder='Nombre del producto'
                    className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.nombre && <span className="text-red-500 text-xs">{errors.nombre.message as string}</span>}
            </div>

            <div className="flex flex-col gap-1">
                <input
                    {...register('precio', { required: 'El precio es requerido' })}
                    placeholder='Ej. 20000'
                    type="number"
                    className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.precio && <span className="text-red-500 text-xs">{errors.precio.message as string}</span>}
            </div>

            <div className="flex flex-col gap-1">
                <input
                    {...register('cantidad', { required: 'La cantidad es requerida' })}
                    placeholder='Ej. 50'
                    className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.cantidad && <span className="text-red-500 text-xs">{errors.cantidad.message as string}</span>}
            </div>

            <div className="flex flex-col gap-1">
                <input
                    {...register('proveedor', { required: 'El nombre del proveedor es requerido' })}
                    placeholder='Ej. San Remo'
                    className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.proveedor && <span className="text-red-500 text-xs">{errors.proveedor.message as string}</span>}
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

export default ProductForm  