export type Producto = {
  id: number
  nombre: string
  precio: number
  cantidad: number
  proveedor: string
}

export type ProductoForm = Omit<Producto, 'id'>