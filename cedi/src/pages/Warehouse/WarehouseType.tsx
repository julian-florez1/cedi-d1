export type Warehouse = {
  id: number
  nombre: string
  ubicacion: string
  capacidad: number
  responsable: string
}

export type WarehousesForm = Omit<Warehouse, 'id'>