export type Inventory = {
  id: number
  producto: string
  bodega: string
  stock: number
  stockMinimo: number
}

export type InventoryForm = Omit<Inventory, 'id'>